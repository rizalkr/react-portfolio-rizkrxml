import React from 'react'

function ProjectCard({ item }) {
    const { img, title, description } = item
    return (
        <>
            <div className='img-box flex justify-center relative overflow-hidden'>
                <img src={img} alt='' />
                <div className='p absolute top-[-100%] left-0 h-full w-full text-center text-primary bg-secondary p-4 pt-20'>
                    <h1 className='font-bold text-3xl'>{title}</h1>
                    <p className='font-bold'>{description}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
