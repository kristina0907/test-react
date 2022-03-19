// React
import React, {useState} from 'react';
import {TableCell, TableHead, TableRow, TableSortLabel} from '@mui/material';

//Icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

//Style
import style from "./TableHeadSort.module.scss";

const TableHeadSort = ({headCells, data, setRenderData}) => {
    const [orderBy, setOrderBy] = useState();
    const [order, setOrder] = useState('desc');

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(orderBy) {
        setOrderBy(orderBy);
        if (order === 'desc') {
            setOrder('asc');
            return (a, b) => descendingComparator(a, b, orderBy);
        } else {
            setOrder('desc');
            return (a, b) => -descendingComparator(a, b, orderBy);
        }
    }

    const createSortHandler = (comparator) => {
        const stabilizedThis = data.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        setRenderData(stabilizedThis.map((el) => el[0]));
    }
    return (
        <TableHead className={style.head}>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        onClick={() => createSortHandler(getComparator(headCell.id))}
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
