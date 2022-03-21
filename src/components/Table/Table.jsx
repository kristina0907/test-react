// React
import React, {useMemo, useState} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';

//Component
import TableHeadSort from "../TableHeadSort/TableHeadSort";
import TableSearch from "../TableSearch/TableSearch";

//Style
import style from "./Table.module.scss";

const TableFeatures = ({headCells, data, displayData}) => {
    const [order, setOrder] = useState('desc');
    const [orderCell, setOrderCell] = useState({});
    const [search, setSearch] = useState();
    let resultFilter = data;

    const filterData = useMemo(() => {
            if (displayData) {
                switch (displayData) {
                    case 'even':
                        resultFilter = resultFilter.filter((element, index) => index % 2 != 0);
                        break;
                    case 'odd':
                        resultFilter = resultFilter.filter((element, index) => index % 2 == 0);
                        break;
                }
            }
            if (search) {
                if (search.value) {
                    resultFilter = resultFilter.filter((e) => {
                            return e[search.cell].toUpperCase().indexOf(search.value.toUpperCase()) >= 0
                        }
                    );
                }
            }
            if (orderCell) {
                let comparator = getComparator(orderCell.cell);
                const stabilizedThis = resultFilter.map((el, index) => [el, index]);
                stabilizedThis.sort((a, b) => {
                    const order = comparator(a[0], b[0]);
                    if (order !== 0) {
                        return order;
                    }
                    return a[1] - b[1];
                });
                resultFilter = stabilizedThis.map((el) => el[0]);
            }

            return resultFilter;
        }
        , [displayData, search, orderCell]
    );


    //Sort table
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
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    const getOrderBy = (cell) => {
        if (order === 'desc') {
            setOrder('asc');
        } else {
            setOrder('desc');
        }
        setOrderCell({cell:cell,orderBy:order})
    }
    return (
        <TableContainer>
            <Table aria-label="customized table">
                <TableHeadSort headCells={headCells} orderCell={orderCell} getOrderBy={getOrderBy}/>
                <TableBody className={style.body}>
                    {!!resultFilter &&
                    filterData.map((row) => (
                        <TableRow key={row.data}>
                            {Object.keys(row).map((keyName) => (
                                <TableCell key={keyName}>{row[keyName]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                    <TableSearch headCells={headCells} setSearch={setSearch}/>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableFeatures;
