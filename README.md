Olá Seja bem vindo ao Game Masters.

## O que é o Game Masters?

O Game Masters é um desafio para testar suas habilidades em desenvolvimento front-end. 
O desafio consiste em consumir uma API e apresentar os dados em uma página web com filtros.
Feito por [Luciano Amorim](https://github.com/LucianoASousa).
  

## Como funciona?

O desafio consiste na seguinte todo List veja como eu fiz:


Todo list:

- O projeto deve ser feito usando React ou Next.JS
- Obter a lista de jogos em `/data`
- Apresentar um loader enquanto os dados são obtidos
- Apresentar os jogos em três colunas (no computador)
- Em cada card apresentar o título e imagem pelo ao menos
- Lidar com a responsividade, para que fique bem apresentado no computador, tablets ou celular
- Quando a API retornar o `status code` 500, 502, 503, 504, 507, 508 ou 509 apresentar ao usuário `O servidor fahou em responder, tente recarregar a página`
- Caso a API retorne outros erros, apresentar `O servidor não conseguirá responder por agora, tente voltar novamente mais tarde`
- Ao realizar uma chamada, não esperar mais que 5 segundos pelo retorno. Se os dados demorarem mais de 5 segundos para retornar apresentar `O servidor demorou para responder, tente mais tarde`
- Sempre que apresentar uma mensagem para o usuário, ou tiver os dados em mãos para apresentar, ocultar o loader
- Incluir um campo de busca, que permite localizar jogos pelo título, com busca case insensitive
além disso fiz o filtro passando por parametro no navegador.
- Uma vez que tenha os dados em mãos, veja quais `genre` foram retornados e permita ao usuário selecionar um deles, e então filtre para exibir apenas jogos do gênero selecionado.

<br>
<img src='https://github.com/LucianoASousa/desafio-appmasters/blob/main/docs/tela.png' alt='tela1' width='100%'/>
<br>
<img src='https://github.com/LucianoASousa/desafio-appmasters/blob/main/docs/tela2.png' alt='tela2' width='100%'/>

MAIS DETALHES ACESSE: https://desafio-appmasters.vercel.app/
