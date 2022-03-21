// React
import React from 'react';
import {TableCell, TableRow} from '@mui/material';

//Style
import style from "./TableSearch.module.scss";

const TableSearch = ({headCells, onSearch}) => {

    return (
        <TableRow className={style.searchContainer}>
            {headCells.map((headCell) => (
                headCell.type == 'string' ?
                    <TableCell className={style.search} key={headCell.id}>
                        <input type="text" placeholder="Search..."
                               onChange={(e) => onSearch(e.target.value, headCell.id)}/>
                    </TableCell>
                    :
                    <TableCell key={headCell.id}>
                        <input type="text"
                               onChange={(e) => onSearch(parseInt(e.target.value), headCell.id)}/>
                    </TableCell>
            ))}
        </TableRow>
    );
};

export default TableSearch;
