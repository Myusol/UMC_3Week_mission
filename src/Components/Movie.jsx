import React from "react";

function Movie(props) {
    return (
        <div className="movie-contents">
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w1280/${props.poster}`} alt={`${props.title} 포스터`} />
            <div className="movie-info">
                <div className="movie-title">{props.title}</div>
                <div className="movie-rate">{props.rate}</div>
            </div>
            <div className="movie-detail">
                <div className="detail-title">{props.title}</div>
                <div className="detail-overview">{props.overview}</div>
            </div>
        </div>
    )
  }
  
  export default Movie