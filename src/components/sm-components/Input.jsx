import { useRef, forwardRef } from 'react'

const Input = forwardRef(({ type = 'text', ...props }, ref) => (
    <input ref={ref} {...props} type={type} className='transition duration-300 rounded focus:ring focus:ring-slate-600  text-black w-full ' />
))

export default Input
