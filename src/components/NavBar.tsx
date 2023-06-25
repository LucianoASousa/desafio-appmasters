import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'
import Link from 'next/link'
export function NavBar() {
  return (
    <nav className="flex h-full w-full min-w-[500px] max-w-[432px] flex-col items-center justify-center bg-zinc-950">
      <div className="flex items-center gap-5">
        <Image src={Logo} alt="logo" width={70} height={40} />
        <h1 className="text-4xl font-bold text-white">
          Game <span className="text-amber-300">Masters</span>
        </h1>
      </div>
      <div className="flex flex-col items-center gap-5 text-white">
        <Link href="/">HOME</Link>
        <Link href="/games">GAMES</Link>
        <Link href="/about">ABOUT</Link>
      </div>
    </nav>
  )
}
