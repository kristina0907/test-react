// React
import React, {useState} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';

//Component
import TableHeadSort from "../TableHeadSort/TableHeadSort";
import TableSearch from "../TableSearch/TableSearch";

//Style
import style from "./Table.module.scss";

const TableFeatures = ({headCells, data}) => {
    const [renderData, setRenderData] = useState(data);

    return (
        <TableContainer>
            <Table aria-label="customized table">
                <TableHeadSort headCells={headCells} data={data} setRenderData={setRenderData}/>
                <TableBody className={style.body}>
                    {renderData && Object.keys(renderData).length ?
                        renderData.map((row, key) => (
                            <TableRow key={key}>
                                {Object.keys(row).map((keyName, i) => (
                                    <TableCell key={i}>{row[keyName]}</TableCell>
                                ))}
                            </TableRow>
                        ))
                        : null}
                    <TableSearch headCells={headCells} data={data} setRenderData={setRenderData}/>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableFeatures;
