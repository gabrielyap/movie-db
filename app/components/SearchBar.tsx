import { ChangeEvent, FormEvent, useState } from 'react'

interface SearchBarProps {
    onSearch: (query: string) => void;
    setSearchQuery: (a: string) => void
}

export const searchBar = ({ onSearch, setSearchQuery}: SearchBarProps) => {
    const [query, setQuery] = useState('')
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setSearchQuery(query)
        onSearch(query)
    }

    return (
        <form onSubmit={handleSubmit} className='flex mx-auto items-center w-screen max-w-3xl'>
            <input
                type="text"
                className='bg-slate-100 border border-gray-300 rounded-l py-2 px-4 w-full focus:outline-none focus:border-blue-500'
                value={query}
                onChange={handleChange}
                placeholder="Search for a movie or tv show..."
            />
            <button
                type="submit"
                className='bg-blue-600 text-white py-2 px-6 rounded-m hover:text-cyan-200'>
                Search
            </button>
        </form>
    )
}

export default searchBar