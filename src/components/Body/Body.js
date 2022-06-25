import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../../reducers/slices/asyncApiCaller";
import { Link } from "react-router-dom"
import asyncApiCaller from "../../reducers/slices/asyncApiCaller";
import Card from "../CardComponent/card";
import "./Body.css";

const Body = () => {
    const searchText = useSelector((state) => state.input.searchText);
    const searchBy = useSelector((state) => state.input.searchBy);
    const movies = useSelector((state) => state.asyncApiCaller.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies({ searchText, searchBy }));
    }, [searchText, searchBy, dispatch]);

    return (
        <div className="body">
            <div className="eachmovie">
                {movies.map((movie) => {
                    return (
                        <div className="card" key={movie.id}>
                            <Link to="/eachCard" state={{ id: movie.id }} >
                                <Card
                                    id={movie.id}
                                    name={movie.title}
                                    poster={movie.poster_path}
                                    date={movie.release_date}
                                    genre={movie.genres}
                                />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div >
    );
}

export default Body;