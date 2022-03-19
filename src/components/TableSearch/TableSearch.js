// React
import React from 'react';
import {TableCell, TableRow} from '@mui/material';

//Style
import style from "./TableSearch.module.scss";

const TableSearch = ({headCells, data, setRenderData}) => {

    const onSearch = (value, column) => {
        if (value) {
            const filteredPerson = data.filter((e) => {
                    if (typeof value == 'number') {
                        return e[column] == value
                    } else {
                        return e[column].toUpperCase().indexOf(value.toUpperCase()) >= 0
                    }
                }
            );
            setRenderData(filteredPerson);
        } else {
            setRenderData(data);
        }
    }
    return (
        <TableRow className={style.searchContainer}>
            {headCells.map((headCell, key) => (
                headCell.type == 'string' ?
                    <TableCell className={style.search} key={key}>
                        <input type="text" placeholder="Search..."
                               onChange={(e) => onSearch(e.target.value, headCell.id)}/>
                    </TableCell>
                    :
                    <TableCell key={key}>
                        <input type="text"
                               onChange={(e) => onSearch(parseInt(e.target.value), headCell.id)}/>
                    </TableCell>
            ))}
        </TableRow>
    );
};

export default TableSearch;
