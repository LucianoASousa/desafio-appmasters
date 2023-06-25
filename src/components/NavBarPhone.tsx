'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { forwardRef } from 'react'

export const NavBarPhone = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center pt-2 text-white lg:hidden">
      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] bg-zinc-950 p-1 shadow-select">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-white no-underline outline-none hover:bg-zinc-800 focus:shadow-[0_0_0_2px] focus:shadow-amber-400"
            href="/"
          >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-white no-underline outline-none hover:bg-zinc-800 focus:shadow-[0_0_0_2px] focus:shadow-amber-400"
            href="games"
          >
            Games
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-white no-underline outline-none hover:bg-zinc-900 focus:shadow-[0_0_0_2px] focus:shadow-amber-400"
            href="/about"
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className=" top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-white outline-none hover:bg-zinc-900 focus:shadow-[0_0_0_2px] focus:shadow-amber-400">
            Social{' '}
            <CaretDownIcon
              className="relative top-[1px] text-white transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className=" absolute left-0 top-0 bg-zinc-950">
            <ul className="m-0 grid list-none gap-x-[10px] p-2">
              <ListItem
                href="https://github.com/LucianoASousa"
                title="Github"
              />
              <ListItem
                href="https://www.figma.com/file/ubBTvjvAxiKY3LHtOZn1M0/Untitled?type=design&node-id=0%3A1&mode=dev"
                title="Figma"
              />
              <ListItem
                href="https://www.linkedin.com/in/lucianoasousa/"
                title="Linkedin"
              />
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="absolute right-[-100px] top-full flex w-full justify-center">
        <NavigationMenu.Viewport className=" relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300" />
      </div>
    </NavigationMenu.Root>
  )
}

const ListItem = forwardRef<HTMLDivElement, any>(function ListItem(
  { className, children, title, ...props },
  forwardedRef,
) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className="block select-none rounded-[6px] p-2 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-zinc-900 focus:shadow-[0_0_0_2px] focus:shadow-amber-400"
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2]">{title}</div>
          <p className="text-mauve11 leading-[1.4]">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
})

ListItem.displayName = 'ListItem'
