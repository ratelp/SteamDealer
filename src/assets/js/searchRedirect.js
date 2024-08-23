const queryInput = document.querySelector('#search')
const searchBtn = document.querySelector('#search-btn')

// Configura barra de pesquisa no cabeçalho da página
searchBtn.addEventListener('click', e => {
  const query = queryInput.value

  if (!query) {
    alert('Digite um termo válido para pesquisa!')
    return
  }

  // Redireciona para a página de pesquisa passando o argumento necessário pela URL
  window.location.replace("/search?query=" + query)
})
