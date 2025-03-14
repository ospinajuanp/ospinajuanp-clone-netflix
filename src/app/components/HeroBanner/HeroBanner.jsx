'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { fetchMovies, fetchMovieData } from '@/api/TMDb';
import './HeroBanner.css';

const HeroBanner = () => {
    const [movies, setMovies] = useState(null);
    const [isMuted, setIsMuted] = useState(true);
    const [movieData, setMovieData] = useState(null);
    const [ramdomMovie, setRamdomMovie] = useState(null);
    
    useEffect(() => {
        async function getMovies() {
            const data = await fetchMovies();
            setMovies(data);
        }
        getMovies();
        const ramdownNumber = Math.floor(Math.random() * 20);
        setRamdomMovie(ramdownNumber);
        
    }, []);

    useEffect(() => {
        async function getMovieData() {
            const data = await fetchMovieData(movies?.results[ramdomMovie].id);
            setMovieData(data);
        }
        getMovieData();
    }, [movies]);
    

    if (!movies && !movieData && !ramdomMovie) {
        return (
        <div className="hero-banner">
            <h1>Loading...</h1>
        </div>
        );
    }

    const toggleIsMuted = () => {
        setIsMuted(!isMuted);
    };
    // console.log(movieData);
    return (
        <div className="hero-banner">
            <div className="hero-banner__content" key='1' style={{
                backgroundImage: 
                    `linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, var(--color-background) 95%),
                    url(https://image.tmdb.org/t/p/original/${movieData?.backdrop_path})`, }}>
                <div className="hero-banner__data">
                    <div className="hero-banner__text">
                        <div className="hero-banner__title">
                            {movieData?.title}
                        </div>
                        <div className="hero-banner__description">
                            {movieData?.tagline}
                        </div>
                    </div>
                    <div className="hero-banner__buttons" >
                        <button className="button play" type="button">
                            <FontAwesomeIcon icon={faPlay} />
                            <span>Play</span>
                        </button>
                        <button className="button info" type="button">
                            <FontAwesomeIcon icon={faCircleInfo} />
                            <span>More info</span>
                        </button>
                    </div>
                </div>
                <div className="hero-banner__volume">
                    {
                        isMuted ? (
                            <FontAwesomeIcon className='volume' onClick={toggleIsMuted} icon={faVolumeXmark} />
                        ) : (
                            <FontAwesomeIcon className='volume' onClick={toggleIsMuted} icon={faVolumeHigh} />
                        )
                    }
                    <span>
                        {movieData?.adult ? '18+' : '13+'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
