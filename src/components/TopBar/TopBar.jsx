// React
import React from "react";
import {NavLink} from "react-router-dom";

//Style
import style from "./TopBar.module.scss"

//Img
import user from "../../assets/images/user.png";
import HelpIcon from '@mui/icons-material/Help';

const TopBar = () => {
    return (
        <div className={style.topBar}>
            <NavLink to="/">
                <div className={style.logo}>
                    <div className={style.icon}>D</div>
                    <div className={style.title}>Dashboard</div>
                </div>
            </NavLink>
            <ul className={style.menu}>
                <li>
                    <button className={style.help}>Help <HelpIcon/></button>
                </li>
                <li>
                    <button className={style.upgrade}>upgrade</button>
                </li>
                <li><img src={user} className={style.user} alt="Пользователь"/></li>
            </ul>
        </div>


    );
}

export default TopBar;

