// React
import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';

//Component
import TableHeadSort from "../TableHeadSort/TableHeadSort";
import TableSearch from "../TableSearch/TableSearch";

//Style
import style from "./Table.module.scss";

const TableFeatures = ({headCells, data, displayData}) => {
    const [renderData, setRenderData] = useState(data);
    const [orderBy, setOrderBy] = useState();
    const [order, setOrder] = useState('desc');

    //Search table
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

    //Sort table
    const getFilteredData = () => {
        switch (displayData){
            case 'all':
                return renderData;
            case 'even':
                return renderData.filter((element, index) => index % 2 != 0);
            case 'odd':
                return renderData.filter((element, index) => index % 2 == 0)
        }
    }

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

    const createSortHandler = (id) => {
        let comparator = getComparator(id);
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
        <TableContainer>
            <Table aria-label="customized table">
                <TableHeadSort headCells={headCells} orderBy={orderBy} order={order} createSortHandler={createSortHandler}/>
                <TableBody className={style.body}>
                    {!!renderData &&
                    getFilteredData().map((row) => (
                            <TableRow key={row.data}>
                                {Object.keys(row).map((keyName) => (
                                    <TableCell key={keyName}>{row[keyName]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    <TableSearch headCells={headCells} onSearch={onSearch}/>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableFeatures;
