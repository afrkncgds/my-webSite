import React from 'react';
import Aside from '../components/layout/aside';

function HomePage() {
    return (
        <div className="home-root">
            <Aside />
            <div className="home-wrapper">
                <div className="image-wrapper">
                    <img src="img/cv-foto.png" alt="profile" />
                </div>
                <div className="text-wrapper">
                    <h1>Ayhan Furkan Çağdaş</h1>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
