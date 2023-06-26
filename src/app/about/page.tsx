import Image from 'next/image'
import SearchImage from '../../../docs/searchParams.png'
import SearchImage2 from '../../../docs/searchParams2.png'

export default function About() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-white">
      <div className="mx-auto flex max-w-[750px] flex-col items-center overflow-auto py-8 text-center">
        <h1 className="text-3xl text-amber-400">Agradecimento</h1>
        <br />
        <p className="text-xl">
          Queria começar falando do desafio imenso que foi o projeot tentei me
          deafiar introduzindo bibliotecas e ferramentas que sempre quis como
          Radix.UI ou TailwindCSS, melhorei ainda mais meu Typescript e a cereja
          do bolo que foi o como eu lidei o ambiente de desenvolvimneto do
          NextJs que é incrivel, o prazo é o que mais pega é bom qu eta essa
          sensação de esta sempre atrasado rsrs.
        </p>
        <br />
        <h2 className="text-3xl">Pricipal desafio</h2>
        <br />
        <p className="text-xl">
          O pricipal desafio foi o Filtro no Next com features de server
          components que basicamente gera componetes no lado do servidor e com a
          ajuda de componentes assincronos ficou otimo e extremamentefacil as
          fetchs.
        </p>
        <br />
        <p className="text-xl">
          Mas vai ai o contraponto eu não consido importar componentes do
          servidor em client side, dai como eu faria o filtro? Sem conseguir
          passar o estado do filtro.
        </p>
        <br />
        <p className="text-xl">
          Foi ai que encontrei isso no NextJs:
          <a
            href="https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional"
            className="text-amber-400"
          >
            {' '}
            searchParams
          </a>
          , que basicamente é um objeto que contem os parametros da url, e assim
          eu consegui fazer o filtro.
        </p>
        <Image src={SearchImage} width={750} alt="Search Image" />
        <p className="text-xl">
          Porem a a documentação está muito ruim poquissimo descritiva.
        </p>
        <p className="text-xl">
          Então fui a foruns e ao Twitter e encontrei um cara que me ajudou
        </p>
        <a
          href="https://twitter.com/ryantotweets/status/1622632895712985102"
          className="text-amber-400"
        >
          ESSE CARA
        </a>
        <Image src={SearchImage2} width={750} alt="Search Image" />
        <br />
        <p className="text-xl">
          E foi assim que eu consegui fazer o filtro, e foi muito legal rsrs.
        </p>
        <br />
        <h2 className="text-3xl">Obrigado</h2>
        <br />
        <p className="text-xl">
          Obrigado por ter chegado até aqui, espero que tenha gostado do
          projeto, e se quiser me contratar, estou a disposição.
        </p>
      </div>
    </div>
  )
}
