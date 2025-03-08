import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const Card = ({image, title,handleClick}) => {
    return (        
    
        <li className="card">
            
            {title !== "Agregar perfil" ? (
            <>
                <Image 
                className="card__image"
                src={image}
                width={200}
                height={200}
                alt={title}
                />
                <p className="card__title">{title}</p>
            </>
            ) : (
            <>
                <div className="card__image" onClick={handleClick}>
                <FontAwesomeIcon className="icon__circle" icon={faCircle} />
                <FontAwesomeIcon className="icon__plus" icon={faPlus} />
                </div>
                <p className="card__title">Agregar perfil</p>
            </>
            )}

        </li>
    );
};

export default Card;