import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';
import Imagen from 'next/image';
import './Nav.css';

const Nav = ({id}) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        console.log(isScrolled);
        const handleScroll = () => {
        setIsScrolled(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.getElementsByClassName("nav")[0].className = isScrolled ? "nav scrolled" : "nav";
    }, [isScrolled]);

    return (
        <div className="nav">
            <div className="nav-left">
                <div className='rounded-overlay'>
                    NETFLIX
                </div>
                <ul className="nav-list">
                    <li>Inicio</li>
                    <li>Series</li>
                    <li>Peliculas</li>
                    <li>Novedades populares</li>
                    <li>Mi lista</li>
                    <li>Explora por idiomas</li>
                </ul>
            </div>
            <div className="nav-right">
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div><FontAwesomeIcon icon={faBell} /></div>
                <div className='nav-right__account'>
                    <Imagen src={`/img/user${id}.png`} alt="user" width={40} height={40}/>
                    <span>
                        Account
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Nav;