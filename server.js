const express = require('express')
const nunjucks = require('nunjucks')
const videos = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function (req, res) {

    const about = {
        avatar_url: "https://pbs.twimg.com/profile_images/998711933241978880/5VdsOA1G_400x400.jpg",
        name: "Gustavo Azevedo",
        role: "Estudante - Rocketseat",
        description: 'Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            { name: "Github", url: "https://github.com/gustavoazevedoo/" },
            { name: "Twitter", url: "https://twitter.com/gustavoazevedo9/" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/gustavo-azevedo-884013193/" },
        ]
    }

    return res.render("about", { about: about }) //como os dois são about, poderia colocar apenas about
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos })
})

server.listen(5000, function () {
    console.log("Server is running")
})