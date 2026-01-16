import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={`w-full rounded-[20px] border-2 border-[#c5c2c2] px-[22px] py-[19px] text-base font-medium outline-none transition focus:border-primary ${className}`}
      />
    )
  }
)

Input.displayName = 'Input'
