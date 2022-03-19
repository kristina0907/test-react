// React
import React from 'react';

// Style
import style from './Header.module.scss';

// Components
import NavBar from "../NavBar/NavBar";
import TopBar from "../TopBar/TopBar";

const Header = () => {
    return (
        <header className={style.header}>
            <TopBar />
            <NavBar/>
        </header>
    )
}

export default Header;
