'use client'
import * as Select from '@radix-ui/react-select'
import { forwardRef } from 'react'

export const SelectDemo = ({
  listGenres,
  handleClick,
}: {
  listGenres: string[]
  handleClick: (value: string) => void
}) => {
  return (
    <Select.Root onValueChange={handleClick}>
      <Select.Trigger className="inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-zinc-950 px-[15px] text-[13px] leading-none text-white shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-zinc-700 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-white">
        <Select.Value placeholder="Select Genre" />
        <Select.Icon className="text-white"></Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden rounded-md bg-zinc-950 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-zinc-900 text-white"></Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              <Select.Label className="px-[25px] text-xs leading-[25px] text-amber-300">
                GENRES
              </Select.Label>
              {listGenres.map((genre) => (
                <SelectItem
                  key={genre}
                  value={genre}
                  className="data-[placeholder]:text-violet9 inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none text-white shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-zinc-700 focus:shadow-[0_0_0_2px] focus:shadow-black"
                >
                  {genre}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-white"></Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

const SelectItem = forwardRef<HTMLDivElement, any>(function SelectItem(
  { children, className, ...props },
  forwardedRef,
) {
  return (
    <Select.Item
      className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-white data-[disabled]:pointer-events-none data-[highlighted]:bg-white data-[disabled]:text-slate-900 data-[highlighted]:text-black data-[highlighted]:outline-none"
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center"></Select.ItemIndicator>
    </Select.Item>
  )
})
