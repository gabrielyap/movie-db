interface MovieCardProps {
    title: string;
    overview: string;
    posterPath: string;
}

const MovieCard = ({title, overview, posterPath}: MovieCardProps) => {
    const imageUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : '/no-img.jpg'
    return (
        <div className="bg-slate-800 rounded shadow p-4">
            <img className="w-full h-64 rounded mb-4" src={imageUrl} alt = ""/>
            <h2 className="text-slate-100 text-2xl font-bold mb-2">{title}</h2>
            <p className="text-slate-100 text-sm text-gray-500">{overview.substring(0,150)}</p>
        </div>
    )

}

export default MovieCard