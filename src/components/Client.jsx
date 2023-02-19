export default function Client() {
    return (
        <section id='client' className='bg-slate-700'>
            <div className='container'>
                <div className='w-full p-4'>
                    <div className='mx-auto mb-16 max-w-xl text-center'>
                        <h4 className='mb-2 text-lg font-semibold text-primary'>Clients</h4>
                        <h2 className='mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl'>Who Have Worked Together</h2>
                        <p className='text-base font-medium text-secondary md:text-lg'>
                            Hanya untuk kebutuhan konten, saya hanya numpang nama. Just for content needs, I'm just putting the name.
                        </p>
                    </div>
                </div>
                <div className='w-full px-4'>
                    <div className='flex flex-wrap items-center justify-center'>
                        <a target='_blank' href='https://www.google.com/' className='client-med-grayscale'>
                            <img src='../assets/clients/google.png' />
                        </a>
                        <a target='_blank' href='https://www.gojek.com/' className='client-med-grayscale'>
                            <img src='../assets/clients/gojek.png' />
                        </a>
                        <a target='_blank' href='https://www.shopee.com/' className='client-med-grayscale'>
                            <img src='../assets/clients/shopee.png' />
                        </a>
                        <a target='_blank' href='https://www.tokopedia.com/' className='client-med-grayscale'>
                            <img src='../assets/clients/tokop.png' />
                        </a>
                        <a target='_blank' href='https://www.grab.com/' className='client-med-grayscale'>
                            <img src='../assets/clients/grab.png' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
