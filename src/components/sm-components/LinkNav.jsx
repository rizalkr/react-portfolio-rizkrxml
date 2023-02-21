export default function LinkNav(props) {
    const {className, value, children } = props
    return (
        <li {...props} className={`${className} group`}>
            <a {...props} className={`${className} mx-8 flex py-2 text-base text-secondary group-hover:text-[#c5a57e] hover:scale-125 transition duration-300`}>
                {value || children}
            </a>
        </li>
    )
}
