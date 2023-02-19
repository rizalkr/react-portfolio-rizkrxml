export default function Input({ type = 'text', ...props }) {
    return <input {...props} type={type} className='transition duration-300 rounded focus:ring focus:ring-slate-600 my-5 text-black w-full' />
}
