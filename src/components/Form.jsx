import Label from './sm-components/Label'
import Input from './sm-components/Input'
import Button from './sm-components/Button'

export default function Form() {
    return (
        <form action='ma' className='text-secondary'>
            <div className='w-full lg:m-auto lg:w-2/3'>
                <div className='mb-8 w-full px-4'>
                    <Label for='name' className='text-base font-bold text-secondary'>
                        Name
                    </Label>
                    <Input />
                </div>
                <div className='mb-8 w-full px-4'>
                    <Label for='email' className='text-base font-bold text-secondary'>
                        Email
                    </Label>
                    <Input
                        id='email'
                        type='text'
                        className='w-full rounded-md bg-slate-200 p-3 text-dark focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary'
                    />
                </div>
                <div className='mb-8 w-full px-4'>
                    <label for='message' className='text-base font-bold text-secondary'>
                        Message
                    </label>
                    <textarea
                        id='message'
                        type='text'
                        className='w-full rounded-md bg-slate-200 p-3 text-dark focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary'></textarea>
                </div>
                <div className='w-full'>
                    <Button text={'Submit'} className={'w-full bg-primary'} />
                </div>
            </div>
        </form>
    )
}
