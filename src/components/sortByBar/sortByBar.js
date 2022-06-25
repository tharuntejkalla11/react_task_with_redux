import React from 'react';

import './sortByBar.css'
import { sortByRating } from "../../reducers/slices/asyncApiCaller"
import { useSelector, useDispatch } from 'react-redux/es/exports';

const SortByBar = () => {

    const diapatch = useDispatch();
    const SortMethod = (val) => {
        diapatch(sortByRating({ val }));
    }

    let movies = useSelector((state) => state.asyncApiCaller.movies);
    return (
        <>
            <div className='sortbydiv'>
                <div className="count">
                    <h4>{movies.length} Movies Found</h4>
                </div>
                <div className="sortby">
                    <h3>Sort By:</h3>
                    <button onClick={() => SortMethod(1)} className='btninsortby' id='buttonsInSortBy1' >Release Date</button>
                    <button onClick={() => SortMethod(2)} className='btninsortby' id='buttonsInSortBy2' >Rating</button>
                </div>

            </div>
        </>
    );
}

export default SortByBar;
