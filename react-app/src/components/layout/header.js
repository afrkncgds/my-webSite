import React from 'react';


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
                    <div className="menu-item">
                        <a href="">
                          <span>
                              home
                          </span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="">
                          <span>
                              home
                          </span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="">
                          <span>
                              home
                          </span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="">
                          <span>
                              home
                          </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
