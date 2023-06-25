import { GameCardInterface } from '@/interfaces/cardInterface'
import { getGames } from '@/services/games'
import { SectionCard } from './SectionCard'

type gamesType = {
  data: GameCardInterface[]
  status: number
}

export default async function ContentCards({
  genre,
  name = '',
}: {
  genre: string
  name: string
}) {
  const gamesPromise = getGames() as Promise<gamesType>
  const timeoutPromise = new Promise<gamesType>((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Tempo de execução excedido'))
    }, 5000)
  })

  try {
    const { data, status } = await Promise.race([gamesPromise, timeoutPromise])

    const errorList = [500, 502, 503, 504, 507, 508, 509]

    if (errorList.includes(status))
      return (
        <div className="flex w-full items-center justify-center text-2xl text-zinc-50 shadow-select">
          <h1>O servidor falhou em responder, tente recarregar a página</h1>
        </div>
      )

    if (status >= 400)
      return (
        <div className="flex w-full items-center justify-center text-2xl text-zinc-50 shadow-select">
          <h1>
            O servidor não conseguirá responder por agora, tente voltar
            novamente mais tarde
          </h1>
        </div>
      )

    const genres = data.map((game) => game.genre)
    const uniqueGenres = Array.from(new Set(genres))

    let gamesList = data

    if (genre !== '') gamesList = data.filter((game) => game.genre === genre)

    const searchByName = gamesList.filter((game) =>
      game.title.toLowerCase().includes(name.toLowerCase()),
    )

    return (
      <SectionCard
        results={searchByName}
        defaultGenre={genre}
        listGenres={uniqueGenres}
      />
    )
  } catch (error) {
    return (
      <div className="flex w-full items-center justify-center text-2xl text-zinc-50 shadow-select">
        <h1>O servidor demorou para responder, tente mais tarde</h1>
      </div>
    )
  }
}
