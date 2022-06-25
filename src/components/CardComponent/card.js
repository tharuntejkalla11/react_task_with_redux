import React from 'react'
import "./card.css"
const Card = ({ name, date, poster, genre, id }) => {
    return (
        <div className='oneMovie'>

            <div className="poster">
                <img src={poster} alt="" srcset="" />
            </div>
            <div className="movietitle">
                <h4>{name}</h4>
                <h5>{date}</h5>
            </div>
            <div className="genere">
                <h5>{genre}</h5>
            </div>
        </div>
    )
}

export default Card;