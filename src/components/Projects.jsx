import React, { useState } from 'react'
import img1 from '../../assets/images/portfolio/project-img1.png'
import img2 from '../../assets/images/portfolio/project-img2.png'
import img3 from '../../assets/images/portfolio/project-img3.png'

import '../index.css'
import Film from './sm-components/Film'
import ProjectCard from './sm-components/ProjectCard'
import Todo from './sm-components/Todo'

function Projects() {
    const [durum, setDurum] = useState(1)

    const projects = [
        {
            id: 1,
            title: 'Business Startup',
            description: 'Design & Development',
            img: img1,
        },
        {
            id: 2,
            title: 'Business Startup',
            description: 'Design & Development',
            img: img2,
        },
        {
            id: 3,
            title: 'Business Startup',
            description: 'Design & Development',
            img: img3,
        },
    ]

    return (
        <>
            <div id='portfolio' className='projects  bg-[#171717] text-white py-10'>
                <h1 className='text-center text-4xl font-bold py-6'>Projects</h1>
                <p className='text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]'>The project I made recently, I show below</p>
                <div className='flex justify-center items-center gap-4 mt-12 mb-2 '>
                    <button
                        onClick={() => setDurum(1)}
                        className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
                            durum == 1 ? 'bg-[linear-gradient(90deg,#b004b0,#38097a)]' : ''
                        }`}>
                        Projects
                    </button>
                    <button
                        onClick={() => setDurum(2)}
                        className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
                            durum === 2 ? 'bg-[linear-gradient(90deg,#b004b0,#38097a)]' : ''
                        }  `}>
                        My Playground
                    </button>
                    <button
                        onClick={() => setDurum(3)}
                        className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
                            durum === 3 ? 'bg-[linear-gradient(90deg,#b004b0,#38097a)]' : ''
                        }`}>
                        My Playground 2
                    </button>
                </div>
                <div className=' p-10 gap-8 items-center justify-center flex flex-wrap'>
                    {durum === 1 ? projects.map((item, i) => <ProjectCard key={i} item={item} />) : null}
                </div>
                {durum === 2 ? (
                    <div id='text2' className=' tab-pane text-center text-white py-16 max-w-4xl mx-auto lg:p-5 '>
                        <Film />
                    </div>
                ) : null}
                {durum === 3 ? (
                    <div id='text1' className='tab-pane flex  justify-center text-center text-white py-5 lg:p-5'>
                        <Todo />
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default Projects
