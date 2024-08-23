const NGAMES = 8
const MAX_ID = 3

async function fetchRandomGames() {
  // Carrega jogos aleatórios
  const random_storeid = Math.floor(Math.random() * MAX_ID + 1);
  const URL_TEMPLATE = `https://www.cheapshark.com/api/1.0/deals?storeID=${random_storeid}&pageNumber=1&pageSize=${NGAMES}`

  const response = await fetch(URL_TEMPLATE);
  const data = await response.json()
  return data 
}

module.exports = { fetchRandomGames };
