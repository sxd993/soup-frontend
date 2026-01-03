type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

export const Input = ({ className = '', ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`w-full rounded-[20px] border-2 border-[#c5c2c2] px-[22px] py-[19px] text-base font-medium outline-none transition focus:border-primary ${className}`}
    />
  )
}
