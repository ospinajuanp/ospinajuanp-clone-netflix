'use client'
import { useState, useEffect } from 'react';
import { fetchMovies } from '@/api/TMDb';
import './TopDiez.css';

const TopDiez = () => {
    const totalItems = 10; // Total de li
    const visibleItems = 5; // Cantidad visible en el carrusel
    const [currentIndex, setCurrentIndex] = useState(0);
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        async function getMovies() {
            const data = await fetchMovies();
            setMovies(data);
        }
        getMovies();        
    }, []);

    if (!movies) {
        return <div>Loading...</div>;
    }

    console.log(movies);
    const handlePrev = () => {
        if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 5);
        }
        if (currentIndex === 0) {
        setCurrentIndex(totalItems - visibleItems);
        }
    };

    const handleNext = () => {
        if (currentIndex < totalItems - visibleItems) {
        setCurrentIndex(currentIndex + 5);
        }
        if (currentIndex === totalItems - visibleItems) {
        setCurrentIndex(0);
        }
    };

    return (
        <div className="top-diez">
            <h2 className="top-diez__title">The movies most popular on Netflix</h2>
            <div className="carousel-container">
                <button onClick={handlePrev} className="carousel-button prev">Prev</button>
                <ul
                className="top-diez__list"
                style={{ transform: `translateX(-${currentIndex * 20}%)` }}
                >
                    {Array.from({ length: totalItems }, (_, index) => (
                        <li key={index}>
                            <div className="top-diez__number">{index + 1}</div>
                            <div className="top-diez__image">
                                <img className="image"
                                    // src={`https://image.tmdb.org/t/p/original/q0bCG4NX32iIEsRFZqRtuvzNCyZ.jpg`}
                                    src={`https://image.tmdb.org/t/p/original${movies.results[index].poster_path}`}
                                    alt={`Movie ${index + 1}`}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
                <button onClick={handleNext} className="carousel-button next">Next</button>
            </div>
            {/* <div className="modal" style={{ top: '-9.7rem',  left: '3.7rem'}}>
                <div>
                    <img src="https://image.tmdb.org/t/p/original/3s0jkMh0YUhIeIeioH3kt2X4st4.jpg" alt="movie"/>
                </div>
                <div>
                    <div>
                        play - more - like - moreinfo
                    </div>
                    <div>16+ - h - 2h</div>
                    <div>genero</div>
                </div>
            </div> */}
        </div>
    );
};

export default TopDiez;
