// React
import React from 'react';
import {TableCell, TableRow} from '@mui/material';

//Style
import style from "./TableSearch.module.scss";

const TableSearch = ({headCells, onSearch, setSearch}) => {

    return (
        <TableRow className={style.searchContainer}>
            {headCells.map((headCell) => (
                <TableCell className={headCell.type == 'string' ? `${style.search}` : null} key={headCell.id}>
                    <input type="text" placeholder={headCell.type == 'string' ? "Search..." : null}
                           onChange={(e) => setSearch({value: e.target.value, cell: headCell.id})}/>
                </TableCell>
            ))}
        </TableRow>
    );
};

export default TableSearch;
