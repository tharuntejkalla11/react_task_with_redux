import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import "./ExpendedMovie.css"


export default function ExpendedMovie() {
    const location = useLocation();
    /*     console.log(location); */
    const { id } = location.state;
    /*     console.log(`This is the id of the movie: ${id}`); */
    const movies = useSelector((state) => state.asyncApiCaller.movies);
    /* console.log(movies); */
    const movieIndex = movies.findIndex((m) => m.id === id);
    const selectedMovie = movies[movieIndex];
    return (
        <>
            {/*             <div>ExpendedMovie </div> */}
            <div className="ExpendedMovie">
                <div id='BackGroundImageInExpMv' style={{ backgroundImage: `url("https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png")` }}>
                    <div className='topdiv'>
                        <img className='NetFlixLogo' src="https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt="" />
                        <Link to="/">
                            <h1 className='SearchIcon'>&#128269;</h1>
                        </Link>
                    </div>
                    <div className="ExpandedMovieDiv">
                        <div className="ExpPoster">
                            <img src={selectedMovie.poster_path} alt="MoviePoster" srcset="" />
                        </div>
                        <div className="ExpDetails">
                            <h1>{selectedMovie.title} ({selectedMovie.vote_average})</h1>
                            <p>{selectedMovie.tagline}</p>
                            <h4>{selectedMovie.release_date} {selectedMovie.runtime}Mins </h4>
                            <h4>{selectedMovie.overview}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
