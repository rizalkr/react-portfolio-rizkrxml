const Button = (props) => {
    const { className, text, children, type = 'submit' } = props
    return (
        <button {...props} className={` ${className} [&>svg]:w-5 [&>svg]:h-5 bg-primary px-4 py-2 rounded h-10 justify-center whitespace-nowrap inline-flex gap-2 m-2`}>
            {/* Bacanya: Jika ada text dieksekusi bila kaga ya children yang dieksekusi */}
            {text || children}
        </button>
    )
}

export default Button
