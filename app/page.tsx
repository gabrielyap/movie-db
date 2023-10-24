import Head from "next/head"
import MovieSearch from "./components/MovieSearch"

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>MyMovieList</title>
        <meta name="description" content="A simple movie database"></meta>
      </Head>

      <main className="flex flex-col container mx-auto py-10 px-4 items-center justify-center">
        <MovieSearch/>
      </main>
    </div>
  )
}
