'use client'

import Image from 'next/image'
import { LinkButton } from './LinkButton'
import { useState } from 'react'

import Logo from '@/assets/images/logo.svg'
import { IoGameController } from 'react-icons/io5'
import { GoHome } from 'react-icons/go'
import { FaBook } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { SiFigma } from 'react-icons/si'
import { SlSocialLinkedin } from 'react-icons/sl'

export function NavBar() {
  const [focus, setFocus] = useState('')
  return (
    <nav className="flex h-full w-full min-w-[500px] max-w-[432px] flex-col items-center justify-between bg-zinc-950 pb-5 pt-12 md:hidden">
      <div className="flex flex-col gap-36">
        <div className="flex items-center gap-2.5">
          <Image src={Logo} alt="logo" width={80} height={40} />
          <h1 className="flex gap-1 text-5xl font-bold text-white">
            Game <span className="text-amber-300">Masters</span>
          </h1>
        </div>
        <div className="flex flex-col items-center gap-5">
          <LinkButton
            icon={<GoHome className="text-3xl" />}
            content="HOME"
            alt="Icone de casa"
            href="/"
            focus={focus === 'home'}
            setFocus={() => setFocus('home')}
          />
          <LinkButton
            icon={<IoGameController className="text-3xl" />}
            content="GAMES"
            alt="Icone de controle de video game"
            href="/games"
            focus={focus === 'games'}
            setFocus={() => setFocus('games')}
          />
          <LinkButton
            icon={<FaBook className="text-2xl" />}
            content="ABOUT"
            alt="Icone de informação"
            href="/about"
            focus={focus === 'about'}
            setFocus={() => setFocus('about')}
          />
        </div>
      </div>
      <div className="flex items-center gap-5 text-3xl text-white">
        <a href="https://github.com/LucianoASousa/desafio-appmasters">
          <FiGithub />
        </a>
        <a href="https://www.figma.com/file/ubBTvjvAxiKY3LHtOZn1M0/Untitled?type=design&node-id=0%3A1&mode=dev">
          <SiFigma />
        </a>
        <a href="https://www.linkedin.com/in/lucianoasousa/">
          <SlSocialLinkedin />
        </a>
      </div>
    </nav>
  )
}
