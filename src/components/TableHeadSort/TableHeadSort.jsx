// React
import React, {useState} from 'react';
import {TableCell, TableHead, TableRow, TableSortLabel} from '@mui/material';

//Icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

//Style
import style from "./TableHeadSort.module.scss";

const TableHeadSort = ({headCells, orderCell, getOrderBy}) => {

    return (
        <TableHead className={style.head}>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        onClick={() => getOrderBy(headCell.id)}
                    >
                        <TableSortLabel
                            IconComponent={() => orderCell.cell === headCell.id ? <DropdownIndicator orderBy={orderCell.orderBy}/> : null}>
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

const DropdownIndicator = ({orderBy}) => (
    <div className={style.dropdown}>
        <KeyboardArrowUpIcon viewBox="0 0 20 15" className={orderBy == 'asc' ? `${style.active}` : null}/>
        <KeyboardArrowDownIcon viewBox="0 0 20 15" className={orderBy == 'desc' ? `${style.active}` : null}/>
    </div>
);

export default TableHeadSort;
