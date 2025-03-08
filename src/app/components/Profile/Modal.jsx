import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import { useState } from 'react';

const Modal = ({handleClick, setProfiles , profiles}) => {
    let [idImg, setIdImg] = useState(1);


    const handleSave = () => {
        let user = document.getElementById("user__name").value;
        handleClick();
        if (profiles.length <= 5) {            
            setProfiles([{
                image: `/img/user${idImg}.png`,
                title: user
            },...profiles]);
        }else{
            alert('No puedes agregar más de 4 perfiles');
        }
        }

    const handleImg = () => {
        setIdImg(idImg === 3 ? 1 : idImg + 1);
    }

    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__close" onClick={handleClick}>
                    <div className="icon__close" >
                        <FontAwesomeIcon className='close' icon={faXmark} />
                    </div>
                </div>

                <div className="modal__content">
                    <div className="content__header">
                        <h2 className="modal__title">Agrega un perfil</h2>
                        <p className="modal__text">Agrega un perfil para otra persona que ve Netflix.</p>
                    </div>
                    <div className="content__user" >
                        <img className="user__image" onClick={handleImg} src={`/img/user${idImg}.png`} alt="" />
                        <input id="user__name" className="user__name" type="text" placeholder="Nombre"/>
                    </div>
                    <div className="content__kid">
                        <div>
                            <h3>Perfil de niños</h3>
                            <p>Ver solo contenido infantil</p>
                        </div>
                        <div class="checkbox-wrapper-14">
                            <input id="s1-14" type="checkbox" class="switch"/>
                        </div>
                    </div>
                    <div className="content__buttons">
                        <button className="button__save" onClick={handleSave}>Guardar</button>
                        <button className="button__cancel" onClick={handleClick}>Cancelar</button>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Modal;