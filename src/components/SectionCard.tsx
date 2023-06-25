'use client'

import { ChangeEvent, useState, useTransition } from 'react'
import { GameCardInterface } from '@/interfaces/cardInterface'

import { GameCard } from './GameCard'
import { SelectDemo } from './FilterButton'
import { useRouter } from 'next/navigation'

export function SectionCard({
  defaultGenre,
  results,
  listGenres,
}: {
  defaultGenre?: string
  results?: GameCardInterface[]
  listGenres: string[]
}) {
  const [isPending, startTransition] = useTransition()
  const [search, setSearch] = useState('')
  const router = useRouter()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setSearch(value)
    startTransition(() =>
      router.replace(
        `games/?genre=${encodeURIComponent(
          defaultGenre || '',
        )}&name=${encodeURIComponent(value)}`,
      ),
    )
  }

  function handleClick(value: string) {
    startTransition(() =>
      router.replace(
        `games/?genre=${encodeURIComponent(value)}&name=${encodeURIComponent(
          search,
        )}`,
      ),
    )
  }

  return (
    <section className="mx-4 flex w-full flex-col items-center gap-24 overflow-hidden pt-10">
      <div className="flex w-full max-w-[1010px] flex-col items-center gap-20">
        <div className="flex w-full flex-col items-end gap-2">
          <form className="flex w-full flex-col items-center gap-5">
            <input
              type="text"
              placeholder="Search game"
              className="h-[35px] w-full max-w-[1010px] rounded bg-zinc-950 px-[15px] text-[13px] leading-none text-white shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-zinc-700 focus:shadow-[0_0_0_2px] focus:shadow-black"
              onChange={handleChange}
            />
          </form>
          <SelectDemo listGenres={listGenres} handleClick={handleClick} />
        </div>
        {isPending ? (
          <span className="text-amber-500">...Loading</span>
        ) : (
          <div className="grid h-screen w-full grid-cols-coluna gap-5 overflow-auto ">
            {results?.map((game) => (
              <GameCard
                thumbnail={game.thumbnail}
                title={game.title}
                developer={game.developer}
                key={game.id}
                alt={game.short_description}
                genre={game.genre}
                game_url={game.game_url}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
