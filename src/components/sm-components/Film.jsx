import { useEffect, useState, useRef } from 'react'
import { Button } from 'react-bootstrap'
import Input from '../sm-components/Input'
import { getMovies, searchMovies } from './api'

export default function Film() {
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        getMovies()
            .then((result) => {
                setPopularMovies(result)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    function MovieList() {
        return popularMovies.map((movie, i) => {
            return (
                <div className='w-[500px] bg-slate-600' key={i}>
                    <div className='movie-title text-2xl'>{movie.title}</div>

                    <img className='movie-img' src={`${import.meta.env.VITE_REACT_APP_BASEIMG}${movie.poster_path}`} />

                    <div className='movie-date'>Release: {movie.release_date}</div>
                    <div className='movie-rate'>Rating: {movie.vote_average}</div>
                </div>
            )
        })
    }

    const search = async (q) => {
        if (q.length >= 3) {
            const queryMovies = await searchMovies(q)
            setPopularMovies(queryMovies.results)
        }
    }

    const searchMovies = () => {}

    return (
        <>
            <div className='flex gap-4 mb-2'>
                <Input placeholder='search movies...' className='rounded-md my-2 w-[50%]' onChange={({ target }) => search(target.value)} />
                <button className=' bg-primary px-4 py-2 rounded h-10 justify-center whitespace-nowrap inline-flex gap-2 m-2'>Search</button>
            </div>
            <div className='movie-container w-full flex items-center justify-center overflow-x-scroll gap-5'>
                <MovieList />
            </div>
        </>
    )
}
