import React from 'react';

function Aside() {
    return (
        <div className="aside-root">
            <div className="logo-block">

                <a href="/" className="logo-item">
                    <img src="img/cv-foto.png" alt="logo" />
                </a>
            </div>
            <div className="name-block">
                <p>
                    AYHAN FURKAN ÇAĞDAŞ
                </p>
            </div>
            <div className="menu-block">
                <ul>
                    <li>
                        <a href="/">Hakkımda</a>
                    </li>
                    <li>
                        <a href="/">Yetenekler</a>
                    </li>
                    <li>
                        <a href="/">Portfolyo</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                    <li>
                        <a href="/">İletişim</a>
                    </li>

                </ul>
            </div>  
            <div className="social-block">
                <ul>
                    <li>
                        <a href="/">Linkedin    </a>
                    </li>
                    <li>
                        <a href="/">Github</a>
                    </li>
                    

                </ul>
            </div>
            <div className="copyright-block">
                <p>
                    Copyright © 2025 Ayhan Furkan Çağdaş. Tüm hakları saklıdır.
                </p>
            </div>
        </div>
    );
}

export default Aside;
