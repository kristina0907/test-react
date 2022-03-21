// React
import React, {useState} from 'react';
import {TableCell, TableHead, TableRow, TableSortLabel} from '@mui/material';

//Icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

//Style
import style from "./TableHeadSort.module.scss";

const TableHeadSort = ({headCells, orderBy, order,createSortHandler}) => {

    return (
        <TableHead className={style.head}>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        onClick={() => createSortHandler(headCell.id)}
                    >
                        <TableSortLabel
                            IconComponent={() => orderBy === headCell.id ? <DropdownIndicator order={order}/> : null}>
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

const DropdownIndicator = ({order}) => (
    <div className={style.dropdown}>
        <KeyboardArrowUpIcon viewBox="0 0 20 15" className={order == 'asc' ? `${style.active}` : null}/>
        <KeyboardArrowDownIcon viewBox="0 0 20 15" className={order == 'desc' ? `${style.active}` : null}/>
    </div>
);

export default TableHeadSort;
