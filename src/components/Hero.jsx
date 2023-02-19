import Button from './sm-components/Button'

const Hero = () => {
    return (
        <section id='home' className='pt-36'>
            <div className='flex flex-wrap'>
                <div className='ml-0 w-full self-center px-4 sm:text-secondary md:text-xl lg:w-1/2'>
                    <h1 className='text-base font-semibold text-secondary'>
                        Hallo semua 👋, saya
                        <span className='my-2 block text-3xl font-bold text-secondary'>Rizal Kurnia</span>
                    </h1>
                    <h2 className='mb-1 font-medium text-secondary'>Student of Universitas Semarang</h2>
                    <p className='font-medium leading-relaxed text-secondary sm:text-secondary'>
                        Taking and giving knowledge is an effective way to learn in my personal opinion.
                    </p>
                    <p className='mb-10 font-medium leading-relaxed text-secondary sm:text-secondary'>This is my portfolio website for now 😁</p>
                    <a href='#'>
                        <Button className={'bg-primary'} text={'Contact Me'} />
                    </a>
                </div>
                <div className='w-full self-end px-4 lg:w-1/2'>
                    <div className='relative mt-10'>
                        <img src='../assets/me.png' className='m-auto max-w-full' />

                        <span className='absolute bottom-0 left-1/2 -z-10 -translate-x-1/2'>
                            <svg className='w-[400px] h-[400px]' viewBox='0 0 200 200' xmlns={'http://www.w3.org/2000/svg'}>
                                <path
                                    fill='#0d9488'
                                    d='M58.2,-49.6C70.9,-30.4,73.7,-6.5,68.6,15.5C63.4,37.4,50.3,57.4,32.9,64.2C15.5,71,-6.3,64.6,-26,54.8C-45.7,45,-63.3,31.7,-66.9,15.4C-70.6,-1,-60.3,-20.5,-46.8,-39.8C-33.4,-59.2,-16.7,-78.4,3,-80.8C22.7,-83.2,45.4,-68.8,58.2,-49.6Z'
                                    transform='translate(100 100) scale(1.2) '
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
