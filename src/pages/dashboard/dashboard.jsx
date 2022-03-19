// React
import {Grid} from '@mui/material';

// Style
import style from './dashboard.module.scss';

//Components
import SideBar from "../../components/SideBar/SideBar";
import Container from "../../components/Container/Container";
import Table from "../../components/Table/Table";

//Icon
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from '@mui/icons-material/Download';


const Dashboard = () => {
    const headCells = [
        {id: 'data', label: 'Data', type: 'string'},
        {id: 'summary1', label: 'Summary1', type: 'number'},
        {id: 'summary2', label: 'Summary2', type: 'number'},
        {id: 'summary3', label: 'Summary3', type: 'number'},
        {id: 'summary4', label: 'Summary4', type: 'number'},
        {id: 'summary5', label: 'Summary5', type: 'number'},

    ];
    const data = [
        {data: 'Data1', summary1: 186, summary2: 186, summary3: 92, summary4: 8, summary5: 1},
        {data: 'Data2', summary1: 95, summary2: 95, summary3: 31, summary4: 11, summary5: 0},
        {data: 'Data3', summary1: 329, summary2: 329, summary3: 256, summary4: 32, summary5: 4},
        {data: 'Data4', summary1: 804, summary2: 804, summary3: 697, summary4: 40, summary5: 22}
    ];
    return (
        <div className={style.dashboard}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={12}>
                        <SideBar/>
                    </Grid>
                    <Grid item md={9} xs={12}>
                        <Grid container spacing={2} className={style.head}>
                            <Grid item md={4} xs={12}>
                                <h1 className={style.title}>Dashboard</h1>
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <div className={style.control}>
                                    <select className={style.select}>
                                        <option value="val">Aug 21, 2021 · Sep 21 2021</option>
                                    </select>
                                    <button className={style.print}><PrintIcon/></button>
                                    <button className={style.download}><DownloadIcon/></button>
                                </div>
                            </Grid>
                        </Grid>
                        <Table data={data} headCells={headCells}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Dashboard;
