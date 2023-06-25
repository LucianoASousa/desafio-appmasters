'use client'

import Image from 'next/image'
import { GameCardInterface } from '@/interfaces/cardInterface'
import { SiApplearcade } from 'react-icons/si'

type GameCardProps = Pick<
  GameCardInterface,
  'thumbnail' | 'title' | 'developer' | 'genre' | 'game_url'
> & { alt: string }

export function GameCard({
  thumbnail,
  title,
  developer,
  alt,
  genre,
  game_url: gameURL,
}: GameCardProps) {
  return (
    <a href={gameURL} className="flex w-80 cursor-pointer flex-col gap-4">
      <Image src={thumbnail} alt={alt} width={320} height={100} />
      <div className="flex flex-col items-start gap-1.5">
        <h3 className="text-base font-bold uppercase text-white">{title}</h3>
        <span className="flex gap-1">
          <SiApplearcade className="text-sm text-white" />
          <p className="text-sm text-gray-light">{genre}</p>
        </span>
        <p className="text-sm text-gold-light">{developer}</p>
      </div>
    </a>
  )
}
