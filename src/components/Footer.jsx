import Gmail from './sosmed/Gmail'
import Instagram from './sosmed/Instagram'
import LinkedIn from './sosmed/LinkdedIn'
import Tiktok from './sosmed/Tiktok'
import Twitter from './sosmed/Twitter'

const Footer = () => {
    return (
        <footer className='bg-dark pt-24 pb-12'>
            <div className='container'>
                <div className='flex flex-wrap'>
                    <div className='mb-12 w-full px-4'>
                        <h2 className='mb-5 text-4xl font-bold text-white'>Rizal Kurnia | Teknik Informatika</h2>
                        <h2 className='font-bold text-slate-300'>rizkrxml@gmail.com</h2>
                        <h2 className='font-bold text-slate-300'>Todanan, Blora</h2>
                        <div className='mt-3 flex items-center'>
                            <Twitter />

                            <Instagram />

                            <LinkedIn />

                            <Tiktok />

                            <Gmail />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
