const games = document.querySelectorAll('.item')

// Adiciona a função de redirecionar para cada jogo
games.forEach(game => {
  game.addEventListener('click', e => {
  // Redireciona para a página do jogo passando o argumento necessário pela URL
    window.location.replace("/game?gameID=" + game.id)
    return
  })
})

