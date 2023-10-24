"use client"
import { useEffect, useState } from "react";
import { searchMovies, popularMovies, topMovies, upcomingMovies } from "../services/movieservice";
import MovieCard from "./MovieCard"
import SearchBar from "./SearchBar"

export const MovieSearch = () => {
    const [movies, setMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState('popular')

    const handleSearch = async (query: string) => {
        setSearchQuery(query)
        const results = await searchMovies(query)
        //console.log(results)
        setMovies(results)
    }

    const handleSelectChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchQuery(e.target.value)
    }

    const fillMovies = async () => {
        if (searchQuery == "popular"){
            const results = await popularMovies()
            setMovies(results)
        } else if (searchQuery == "top") {
            const results = await topMovies()
            setMovies(results)
        } else if (searchQuery == "upcoming") {
            const results = await upcomingMovies()
            setMovies(results)
        }
    }

    useEffect(() => {
        fillMovies()
    }, [searchQuery])

    return (
        <div className="">
            <h1 className="flex mx-auto text-center text-4xl font-bold mb-8 text-white hover:cursor-pointer max-w-fit" onClick = {() => handleSearch('')}>MyMovieList</h1>

            <SearchBar onSearch={handleSearch} setSearchQuery={setSearchQuery}/>
            <div className="text-slate-100">
                Search by: 
                <select className = "text-black ml-4" value={searchQuery} onChange={handleSelectChange} >
                    <option value="popular">Popular</option>
                    <option value="top">Top</option>
                    <option value="upcoming">Upcoming</option>
                </select>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-8">
                {movies.map((movie: any) => (
                    <MovieCard key={movie.id} title={movie.title} overview={movie.overview} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>
    )
}

export default MovieSearch