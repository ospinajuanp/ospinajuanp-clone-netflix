'use client'
import React from 'react';
import Card from './Card';
import Modal from './Modal';
import { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [showModal, setShowModal] = useState(false);
    const [profiles, setProfiles] = useState([
        {
            image: "/img/user1.png",
            title: "Pablo"
        },
        // {
        //     image: "/img/user2.png",
        //     title: "Leady"
        // },
        // {
        //     image: "/img/user3.png",
        //     title: "Casa"
        // },
        {
            image: "/img/userKid.png",
            title: "Kid"
        },
        {
            image: "/img/user.png",
            title: "Agregar perfil"
        }]);

        const handleClick = () => {
            setShowModal(!showModal);
            // alert('Agrega un perfil para otra persona que ve Netflix.')
        };

    return (
        <div className="profile">
            <h2 className="profile__header">
                ¿Quién está viendo ahora?
            </h2>
            <ul className="profile__cards">
                {profiles.map((profile, index) => (
                    <Card
                    key={index}
                    image={profile.image}
                    title={profile.title}
                    handleClick={profile.title === "Agregar perfil" ? handleClick : undefined}
                    />
                ))} 
            </ul>
            {showModal && <Modal handleClick={handleClick } setProfiles={setProfiles} profiles={profiles} />}
        </div>
    );
};

export default Profile;