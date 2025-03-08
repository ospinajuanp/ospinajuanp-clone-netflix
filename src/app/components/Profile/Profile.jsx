import React from 'react';
import Card from './Card';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <h2 className="profile__header">
                ¿Quién está viendo ahora?
            </h2>
            <ul className="profile__cards">
                <Card image={"/img/user1.png"} title={"Pablo"}/>
                <Card image={"/img/user2.png"} title={"Leady"}/>
                <Card image={"/img/user3.png"} title={"Casa"}/>
                <Card image={"/img/userKid.png"} title={"Kid"}/>
                <Card image={"/img/user.png"} title={"Agregar perfil"}/>

            </ul>
        </div>
    );
};

export default Profile;