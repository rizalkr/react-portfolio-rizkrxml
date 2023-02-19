const Card = (props) => {
    return <div className={`${props.className} w-[500px] rounded bg-slate-800 shadow-md p-3`}>{props.children}</div>
}

const Title = (props) => {
    return <h1 className={`${props.className} text-2xl font-semibold`}>{props.children}</h1>
}

const Body = (props) => {
    return <p className={`${props.className}`}>{props.children}</p>
}

const Footer = (props) => {
    return <div className={`${props.className}`}>{props.children}</div>
}

Card.Title = Title
Card.Body = Body
Card.Footer = Footer

export default Card
