import Image from 'next/image'
import nextImage from '../../docs/nextjs.bmp'
import listaImage from '../../docs/Lista.png'
import cardImage from '../../docs/card.png'
import cardImage2 from '../../docs/card2.png'
import mobileImage from '../../docs/mobile.png'
import tableImage from '../../docs/table.png'
import errorImage1 from '../../docs/error1.bmp'
import errorImage2 from '../../docs/error2.bmp'
import errorImage3 from '../../docs/error3.bmp'
import errorCodeImage from '../../docs/errorCode.png'
import errorCode2Image from '../../docs/errorCode2.png'
import searchImage from '../../docs/search.png'
import genresImage from '../../docs/genres.png'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden text-white">
      <div className="container mx-auto flex flex-col items-center overflow-auto py-8">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-3xl font-bold">
            Olá! Seja bem-vindo ao Game{' '}
            <span className="text-amber-400">Masters</span>
          </h1>
          <p>
            O Game Masters é um desafio para testar suas habilidades em
            desenvolvimento front-end.
          </p>
          <p>
            O desafio consiste em consumir uma API e apresentar os dados em uma
            página web com filtros.
          </p>
          <p>
            Feito por{' '}
            <a
              href="https://github.com/LucianoASousa"
              className="text-blue-500"
            >
              Luciano Amorim
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Como funciona?</h2>
          <p>O projeto veio com uma todo List:</p>
          <ul className="flex max-w-[750px] list-disc flex-col pl-6">
            <li>O projeto deve ser feito usando React ou Next.JS</li>
            <li>
              Obter a lista de jogos em <code>/data</code>
            </li>
            <li>Apresentar um loader enquanto os dados são obtidos</li>
            <li>Apresentar os jogos em três colunas (no computador)</li>
            <li>Em cada card, apresentar o título e imagem pelo menos</li>
            <li>
              Lidar com a responsividade, para que fique bem apresentado no
              computador, tablets ou celular.
            </li>
            <li>
              Quando a API retornar o <code>status code</code>{' '}
              <span className="text-red-500">
                500, 502, 503, 504, 507, 508 ou 509,{' '}
              </span>
              apresentar ao usuário O servidor falhou em responder, tente
              recarregar a página.
            </li>
            <li>
              Caso a API retorne outros erros, apresentar O servidor não
              conseguirá responder por agora, tente voltar novamente mais tarde.
            </li>
            <li>
              Ao realizar uma chamada, não esperar mais que 5 segundos pelo
              retorno. Se os dados demorarem mais de 5 segundos para retornar,
              apresentar O servidor demorou para responder, tente mais tarde.
            </li>
            <li>
              Sempre que apresentar uma mensagem para o usuário, ou tiver os
              dados em mãos para apresentar, ocultar o loader.
            </li>
            <li>
              Incluir um campo de busca, que permite localizar jogos pelo
              título, com busca case insensitive.
            </li>
            <li>
              Uma vez que tenha os dados em mãos, veja quais genre foram
              retornados e permita ao usuário selecionar um deles, e então
              filtre para exibir apenas jogos do gênero selecionado.
            </li>
          </ul>
        </div>
        <div className="flex max-w-[750px] flex-col items-start gap-5">
          <h2 className="text-2xl font-bold">Resolvendo cada Task</h2>
          <h3 className="text-xl">Primeiro vamos criar o Projeto</h3>
          <p>
            Criei o projeto com nextJS, framework de reactJS que tem uma
            estrutura pre-definida de pastas e usabilidade.
          </p>
          <Image
            src={nextImage}
            width={750}
            height={100}
            alt="criando uma aplicação nextjs"
          />
          <h3 className="text-xl"> Sobre o fetch dos dados </h3>
          <p>
            Utilizei o fetch para consumir a API e obter os dados ache bem mais
            simples do que utilizando uma biblioteca com axios ja que nextJs
            temos server components.
          </p>
          <Image
            src={listaImage}
            width={750}
            height={100}
            alt="Lista de jogos pegos no fetch"
          />
          <h3 className="text-xl"> Sobre o Loader </h3>
          <p>
            Utilizei do useTransition para fazer o loader, poderia fazer pelo
            SuspenseAPI porém demandaria um pouco visto que eu não tenho muita
            familharidade.
          </p>

          <h3 className="text-xl"> Sobre como ficaram os cards</h3>
          <p>Os cards ficaram assim:</p>
          <Image
            src={cardImage}
            width={300}
            height={100}
            alt="imagem do card"
          />
          <p>
            {' '}
            Com o nome o genero e a imagem do jogo, alem do desenvolvedor e um
            ancor para ir para a pagina do jogo, assim ficou o codigo:
          </p>
          <Image
            src={cardImage2}
            width={300}
            height={100}
            alt="imagem do card"
          />

          <h3 className="text-xl"> Sobre a responsividade</h3>
          <p>
            {' '}
            Utilizei do tailwind para fazer a responsividade, assim ficou o
            mobile:
          </p>
          <Image
            src={mobileImage}
            width={300}
            height={100}
            alt="iamgem do mobile"
          />
          <p>Alem de responsividade no grid:</p>
          <Image
            src={tableImage}
            width={750}
            height={100}
            alt="imagem da tabela"
          />
          <p>
            Como vc percebe o numero de colunas diminuem de acordo com o tamanho
            da tela.
          </p>
          <h3 className="text-xl"> Tratativas de erro</h3>
          <p>
            {' '}
            Com certeza uma das partes chatas pq devido o revalidade do Next
            basicamente{' '}
            <span className="text-bold text-red-400">
              não tem erro de resposta
            </span>
          </p>
          <p>Porém tirei prints da tela caso não de erro nos test rsrs:</p>
          <Image
            src={errorImage1}
            width={750}
            height={100}
            alt="imagem de erro"
          />
          <Image
            src={errorImage2}
            width={750}
            height={100}
            alt="imagem de erro"
          />
          <Image
            src={errorImage3}
            width={750}
            height={100}
            alt="imagem de erro"
          />
          <p>Explicando um pouco mais como eu fiz</p>
          <Image
            src={errorCodeImage}
            width={750}
            height={100}
            alt="codigo de erro"
          />
          <p>
            {' '}
            Basicamente eu coloquei todos os codigos de erro que eu queria em um
            array e fiz um includes do if o o estado de erro estiver no array
            ele retorna a mensagem de erro, caso não ele retorna a mensagem de
            erro padrão.
          </p>
          <p>
            Para tratativa com os outro status que não os paresentados eu peguei
            todos os maiores que 400 e retornei erro
          </p>
          <h3 className="text-xl"> Sobre o tempo de resposta</h3>
          <p>
            {' '}
            Utilizei o setTimeOut para simular um tempo de resposta maior que 5
            segundos, assim ficou o codigo:
          </p>
          <Image
            src={errorCode2Image}
            width={750}
            height={100}
            alt="codido de erro"
          />
          <p>
            {' '}
            Com o try catch da imagem anterior eu consigo pegar o erro e
            apresentar a mensagem de erro.
          </p>
          <h3 className="text-xl"> Sobre a busca</h3>
          <p>
            {' '}
            Aqui tem o momento mais dificil de todo o desenvolvimento que foi
            fazer a busca, eu explico melhor no{' '}
            <Link href="/about" className="text-cyan-600">
              about
            </Link>
            .
          </p>
          <p>
            {' '}
            Mas basicamente eu faço um onChange no input e pego o valor do input
            e insiro nos parametros da url, assim:
          </p>
          <Image
            src={searchImage}
            width={750}
            height={100}
            alt="Search com parametros"
          />
          <h3 className="text-xl"> Sobre o filtro de Generos</h3>
          <p>
            {' '}
            Aqui eu fiz um select com select do RADIX.UI com os generos que eu
            peguei na API, e fiz um onclick que pega o valor do select e insere
            nos parametros da url, assim:
          </p>
          <Image src={genresImage} width={750} height={100} alt="filtro" />
        </div>
      </div>
    </div>
  )
}
