import { useState } from "react"
import Button from "./Button"
// Extract Function Ke Component
export default function Count({initCount }) {
    const [count, setCounter] = useState(initCount)
    function hanldeClick() {
        // Variable Next  Name Dibutuhkan agar enak cuyy, maksudnya biar bisa dibaca real time, kalau tidak memakai akan dibaca sebagai state sebelumnya walaupun tampilanya udah berubah.
        setCounter(x => x + 1000000000000)
    }
    return (
        <div>
            <h1 className='text-5xl mb-2'>Rp. {count}</h1>
            <Button className={'mb-2'} onClick={hanldeClick}>
                Tambah Saldo Dana + 1m
            </Button>
            <Button
                onClick={() => {
                    hanldeClick()
                    hanldeClick()
                    hanldeClick()
                }}>
                Tambah Saldo Dana + 3m
            </Button>
        </div>
    )
}
