# Equipe 2
Integrantes: Kaio Fernando, Pablo Guilherme, Pablo Lucas, Rafael Araújo, Rafael Martinho.

## Projeto - Steam Dealer

<img src="src/assets/img/title.png">

Este projeto consiste em um site desenvolvido com Node.js e Express, utilizando Express Handlebars como template engine, para encontrar os melhores preços de jogos utilizando a API pública do CheapShark.

***

## Índice
- [Desenvolvimento](#desenvolvimento)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Dificuldades](#dificuldades-conhecidas)
- [Tecnologias](#tecnologias)
- [Como utilizar](#como-utilizar)
- [Imagens](#imagens)

***

## Desenvolvimento

O projeto foi desenvolvido com Node.js para o backend e Express para criar o servidor web. O Express Handlebars foi escolhido como a engine de templates para renderizar as páginas HTML. A integração com a API pública do CheapShark foi realizada para buscar informações sobre os preços dos jogos.

***

### API
<a href="https://apidocs.cheapshark.com/">
<img src="src/assets/img/cheapshark.png" alt="Cheapshark">
</a>

***

## Estrutura do projeto

- `src/index.js`: O arquivo principal do aplicativo onde o servidor Express é configurado.
- `src/routes.js`: Arquivo de rota que lida com as requisições HTTP.
- `src/views`: Contém os arquivos de template Handlebars.
- `src/assets`: Contém arquivos estáticos como CSS, JavaScript e imagens.

***

## Dificuldades Conhecidas

- **Tratamento de Erros**: O tratamento de erros ao lidar com as respostas da API é crucial para garantir a robustez da aplicação. Certifique-se de implementar adequadamente o tratamento de erros para lidar com situações inesperadas.

***

## Tecnologias

<div style="display: inline_block"><br>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"></a>
  <a href="https://www.w3schools.com/cssref/index.php"><img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"></a>
  <a href="https://nodejs.org/docs/latest/api/"><img align="center" alt="Nodejs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"></a>
  <a href="https://expressjs.com/pt-br/"><img align="center" alt="Express" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"></a>
  <a href="https://github.com/remy/nodemon#nodemon"><img align="center" alt="Nodemon" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodemon/nodemon-plain.svg"></a>
  <a href="https://handlebarsjs.com/guide/"><img align="center" alt="Handlebars" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/handlebars/handlebars-original.svg"></a>
</div>


## Como utilizar

1. Clone esse repositório em sua máquina local
2. Dentro da pasta `src`, instale as bibliotecas necessárias com `npm install`
3. Execute `npm run dev`
4. O site estará rodando localmente na porta 8000 do computador

***

## Imagens

<img src="src/assets/img/animation.gif">

## Contribuições

Contribuições são bem-vindas! Se você identificar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.
