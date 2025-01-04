import React from 'react';
import {ImgComponent} from "../img/imgComponent";

function Header() {
    return (
        <div className="header-root">
            <div className="header-wrapper">
                <div className="logo-item">
                    <a href="/">
                        <img src="/img/logo.png" alt=""/>

                    </a>
                </div>
              <div className="menu-list">

              </div>
            </div>
        </div>
    );
}

export default Header;
