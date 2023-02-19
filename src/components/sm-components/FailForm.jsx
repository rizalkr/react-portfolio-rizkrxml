import Card from './Card'
import PlaceContentCenter from './PlaceContentCenter'
import Label from './Label'
import Input from './Input'
import Button from './Button'
import { IconBrandGithub } from '@tabler/icons'

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        pass: '',
    })
    function onChange(event) {
        return setForm({ ...form, [event.target.name]: event.target.value })
    }

    function submit(e) {
        e.preventDefault()
        if (form.name === 'admin' && form.pass === 'asiap') {
            alert('Login sebagai super admin')
        } else {
            alert('Login sebagai :  ngga sebagai apa apa. Pass / User lu salah')
        }
    }
    return (
        <PlaceContentCenter>
            <form onSubmit={submit}>
                <Card className={'p-1'}>
                    <Card.Title className={'text-4xl font-bold'}>Login User</Card.Title>
                    <Card.Body>
                        <div className='mb-4 mt-3 font-bold border rounded-md'>
                            <p>Name: {form.name || '-------'}</p>
                            <p>Password: {'-------'}</p>
                        </div>
                        <div className='mt-2'>
                            <Label htmlFor='name' value={'User Name : '} />
                            <Input value={form.name} onChange={onChange} id={'name'} name={'name'} />
                        </div>
                        <div className=''>
                            <Label htmlFor='pass' value={'Password:'} />
                            <Input value={form.pass} onChange={onChange} id={'pass'} name={'pass'} />
                        </div>
                    </Card.Body>
                    <Card.Footer className={'flex'}>
                        <Button className={'bg-black'}>
                            <IconBrandGithub />
                            submit
                        </Button>
                    </Card.Footer>
                </Card>
            </form>
        </PlaceContentCenter>
    )
}
