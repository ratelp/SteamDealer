const express = require('express')
const url = require('url')
const { fetchRandomGames } = require('./assets/js/random_games')

const SEARCH_URL = "https://www.cheapshark.com/api/1.0/games?limit=10&title="
const GAME_ID_URL = "https://www.cheapshark.com/api/1.0/games?limit=10&id="
const router = express.Router()

// Rota principal
router.get('/', async (req, res) => {
  let data = []

  const message = req.query.message // Lê mensagens de erro na url, se existirem

  try {
    // Pega jogos aleatórios para a tela inicial
    const randomGames = await fetchRandomGames()
    data = randomGames
  } catch (err) {
    console.log("Erro ao puxar jogos para a página inicial: " + err)
    return res.render("index", {data, message: "Não foi possível carregar os jogos da página inicial!"})
  }

  return res.render("index", {data, message})
})

// Rota para o jogo selecionado
router.get('/game', async (req, res) => {
  const { gameID } = req.query

  if (!gameID) {
    return res.redirect(url.format({
      pathname: "/",
      query: {
        "message": "Por favor, forneça um id de jogo válido!"
      }
    }))
  }

  let data = []
  try {
    const response = await fetch(GAME_ID_URL + gameID)
    data = await response.json()
  } catch (err) {
    return res.redirect(url.format({
      pathname: "/",
      query: {
        "message": "Não foi possível carregar informações sobre o jogo. Por favor, tente novamente!"
      }
    }))
  }

  return res.render('game', {data: data }) // Renderiza a página do jogo
})


// Rota para pesquisa de jogos
router.get('/search', async (req, res) => {
  const { query } = req.query

  if (!query) {
    // Se não for fornecido um termo para a pesquisa, redirecionar para a página inicial
    return res.redirect(url.format({
      pathname: "/",
      query: {
        "message": "Forneça um termo válido para pesquisa!"
      }
    }))
  }

  let data = []
  try {
    const response = await fetch(SEARCH_URL + query)
    data = await response.json()
  } catch (err) {
    console.error("Não foi possível realizar a pesquisa: " + err)
    return res.redirect(url.format({
      pathname: "/",
      query: {
        "message": "Não foi possível realizar a pesquisa. Por favor, tente novamente!"
      }
    }))
  }

  return res.render('search', {data: data, query}) // Renderiza a página de pesquisa
})

module.exports = { router }
