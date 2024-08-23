const { randomBytes } = require("crypto");
const express = require("express")
const exphbs  = require("express-handlebars")
const path = require('path')
const { router } = require('./routes')

const PORT = 8000;
const app = express()

// Configura router definido em routes.js
app.use('/', router);

// Habilita o uso de arquivos estáticos na pasta "assets"
app.use(express.static("src/assets"))

// Handlebars
app.set('views', path.join(__dirname, 'views')) // Especificação do diretório das views
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'})) // Define o arquivo de layout principal
app.set('view engine', 'handlebars') // Definir o handlebars para renderizar as views

app.listen(PORT, () => {
  console.log("Rodando na porta " + PORT)
})
