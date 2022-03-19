// React
import React from 'react';
import {NavLink} from 'react-router-dom';
import {Grid} from "@mui/material";
// Style
import style from './NavBar.module.scss';

const NavBar = () => {
    return (
        <div className={style.navigationBar}>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}/>
                <Grid item md={9} xs={12}>
                    <nav>
                        <ul className={style.navLinksContainer}>
                            <li>
                                <NavLink
                                    className={style.navLink}
                                    activeClassName={style.selected}
                                    exact={true}
                                    to="/"
                                >
                                    Analyze
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={style.navLink}
                                    activeClassName={style.selected}
                                    to="/campaigns"
                                >
                                    My campaigns
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={style.navLink}
                                    activeClassName={style.selected}
                                    to="/configure"
                                >
                                    Configure
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </Grid>
            </Grid>
        </div>
    )
}


export default NavBar;
