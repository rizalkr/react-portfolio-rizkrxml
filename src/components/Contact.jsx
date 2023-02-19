import Form from './Form'

const Contact = () => {
    return (
        <section id='contact' className='pt-36 pb-32'>
            <div className='container'>
                <div className='w-full px-4 text-center'>
                    <h4 className='mb-2 text-lg font-semibold text-secondary'>Contact</h4>
                    <h2 className='mb-4 text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl'>Contact me</h2>
                    <p className='text-base font-medium text-secondary md:text-lg'>
                        If you want to work together or you have criticisms and suggestions, you can contact me using the form below
                    </p>
                </div>
                <Form />
            </div>
        </section>
    )
}

export default Contact
