// React
import {useState} from "react";

//Components
import SideBar from "../../components/SideBar/SideBar";
import Table from "../../components/Table/Table";
import Layout from "../../components/Layout/Layout";
import ControlBtn from "../../components/ControlBtn/ControlBtn";


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
        {data: 'Data1', summary1: '186', summary2: '186', summary3: '92', summary4: '8', summary5: '1'},
        {data: 'Data2', summary1: '95', summary2: '95', summary3: '31', summary4: '11', summary5: '0'},
        {data: 'Data3', summary1: '329', summary2: '329', summary3: '256', summary4: '32', summary5: '4'},
        {data: 'Data4', summary1: '804', summary2: '804', summary3: '697', summary4: '40', summary5: '22'}
    ];
    const [displayData, setDisplayData] = useState('all')
    return (
        <Layout
            title={"Dashboard"}
            sidebar={<SideBar displayData={displayData} setDisplayData={setDisplayData}/>}
            control={<ControlBtn/>}
        >
            <Table data={data} headCells={headCells} displayData={displayData}/>
        </Layout>
    )
}

export default Dashboard;
