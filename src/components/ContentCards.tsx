import { GameCardInterface } from '@/interfaces/cardInterface'
import { getGames } from '@/services/games'
import { SectionCard } from './SectionCard'

export default async function ContentCards({
  genre,
  name,
}: {
  genre: string
  name: string
}) {
  const games = (await getGames()) as GameCardInterface[]
  const genres = games.map((game) => game.genre)
  const uniqueGenres = Array.from(new Set(genres))

  let gamesList = games

  if (genre !== '') gamesList = games.filter((game) => game.genre === genre)

  const searchByName = gamesList.filter((game) =>
    game.title.toLowerCase().includes(name?.toLowerCase()),
  )

  return (
    <SectionCard
      results={searchByName}
      defaultGenre={genre}
      listGenres={uniqueGenres}
    />
  )
}
