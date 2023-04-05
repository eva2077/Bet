import { useState, useEffect } from "react";
import { movie } from "../types/movie";

function MovieList () {
    const [movieData, setMovieData] = useState<movie[]>([]);

    useEffect(() => {
        const fetchMovie = async () => {
            const rsp = await fetch ('https://localhost:4000/movie');
            const temp = await rsp.json();
            setMovieData(temp);
        }

        fetchMovie();
    }, []);

    return (
        <>
            <div className="row">
                <h4>Joel's Movies</h4>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Rating</th>
                        <th>Edited</th>
                        <th>LentTo</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {movieData.map((m)=> (
                        <tr key = {m.movieId}>
                            <td>{m.title}</td>
                            <td>{m.category}</td>
                            <td>{m.year}</td>
                            <td>{m.director}</td>
                            <td>{m.rating}</td>
                            <td>{m.edited}</td>
                            <td>{m.lentTo}</td>
                            <td>{m.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default MovieList;
