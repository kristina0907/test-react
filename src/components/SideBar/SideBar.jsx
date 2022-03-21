//Icon
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import PrintIcon from '@mui/icons-material/Print';

// Style
import style from './SideBar.module.scss';

//Component
import BtnSideBar from "../BtnSideBar/BtnSideBar";
import {TableCell, TableRow} from "@mui/material";
import React from "react";

const SideBar = ({setDisplayData,displayData}) => {
    const btnSideBar = [
        {id:'even',title:'Even rows of data',description:'Display rows 2,4,6 etc', icon:<DataSaverOffIcon/>},
        {id:'odd',title:'Odd rows of data',description:'Display rows 1,3,5 etc', icon:<DoneOutlineIcon/>},
        {id:'all',title:'All data',description:'Display all data', icon:<PrintIcon/>},
    ];
    return (
        <div className={style.sideBar}>
            <button className={style.create}><AddCircleIcon/> Create new</button>
            <div className={style.list}>
                {btnSideBar.map((row) => (
                    <BtnSideBar key={row.id} data={row} setDisplayData={setDisplayData} displayData={displayData}/>
                ))}
            </div>
        </div>
    )
}

export default SideBar;
