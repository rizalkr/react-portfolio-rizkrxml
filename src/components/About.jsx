import Gmail from './sosmed/Gmail'
import Instagram from './sosmed/Instagram'
import LinkedIn from './sosmed/LinkdedIn'
import Tiktok from './sosmed/Tiktok'
import Twitter from './sosmed/Twitter'

export default function About() {
    return (
        <section id='about' className='pt-36 pb-32'>
            <div className='container'>
                <div className='flex flex-wrap'>
                    <div className='mb-10 w-full px-4 lg:w-1/2'>
                        <h2 className='mb-3 text-lg font-bold uppercase text-secondary'>About Me</h2>
                        <h4 className='mb-3 max-w-xl text-2xl font-bold text-slate-500'>My Dream</h4>
                        <p className='text-slate-300'>
                            Mungkin banyak yang ingin aku capai, misalnya ingin menjadi fullstack dev, pembuktian ke ortu, dll. Tapi ujung ujungnya
                            yaitu hidup tenang dan bahagia😁.
                        </p>
                    </div>
                    <div className='w-full px-4 lg:w-1/2'>
                        <h4 className='mb-3 text-lg font-semibold uppercase text-secondary'>Let's Make Friends</h4>
                        <p className='text-secondary'>If you want to know me more and want to know my daily life you can visit some of the social media that I have.</p>
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
        </section>
    )
}
