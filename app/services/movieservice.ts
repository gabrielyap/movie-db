import axios from 'axios'
import { ApiError } from 'next/dist/server/api-utils'

const API_KEY = "d69f5bac7cbb690d2d385341ee080f37"
const API_BASE_URL = "https://api.themoviedb.org/3/"

const client = axios.create({
    baseURL: API_BASE_URL,
    params: { api_key: API_KEY }
})

export const searchMovies = async (query: string) => {
    try {
        const response = await client.get("/search/movie", {
            params: { query }
        })

        if (response.data && response.data.results) {
            return response.data.results
        } else {
            console.error("Couldn't get results")
        }
    } catch (error) {
        console.error(error)
        return []
    }
}

export const popularMovies = async () => {
    try {
        const response = await client.get("/movie/popular")
        if (response.data && response.data.results) {
            return response.data.results
        } else {
            console.error("Couldn't get results")
        }

    } catch (error) {
        console.error(error)
        return []
    }
}

export const topMovies = async () => {
    try {
        const response = await client.get("/movie/top_rated")
        if (response.data && response.data.results) {
            return response.data.results
        } else {
            console.error("Couldn't get results")
        }

    } catch (error) {
        console.error(error)
        return []
    }
}

export const upcomingMovies = async () => {
    try {
        const response = await client.get("/movie/upcoming")
        if (response.data && response.data.results) {
            return response.data.results
        } else {
            console.error("Couldn't get results")
        }

    } catch (error) {
        console.error(error)
        return []
    }
}