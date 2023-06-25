import Link from 'next/link'
import { JSX } from 'react'

interface LinkButtonProps {
  icon: JSX.Element
  alt: string
  content: string
  href: string
  focus?: boolean
  setFocus?: () => void
}

export function LinkButton({
  icon,
  content,
  href,
  focus,
  setFocus,
}: LinkButtonProps) {
  return (
    <Link
      onClick={setFocus}
      href={href}
      className={
        focus
          ? 'bg-balck flex w-[316px] items-center justify-between p-4 text-2xl text-amber-400 shadow-select'
          : 'flex w-[316px] items-center justify-between bg-black p-4 text-2xl text-white shadow-no-select'
      }
    >
      {icon}
      {content}
    </Link>
  )
}
