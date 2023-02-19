const PlaceContentCenter = (props) => {
    return (
        <div className={`${props.className} bg-secondary mb-2`}>
            <div className='flex gap-2 justify-center items-center min-h-screen'>
                <div className='max-w-lg w-full text-stone-300'>{props.children}</div>
            </div>
        </div>
    )
}

export default PlaceContentCenter
