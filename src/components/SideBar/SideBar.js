//Icon
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import PrintIcon from '@mui/icons-material/Print';

// Style
import style from './SideBar.module.scss';

const SideBar = () => {

    return (
        <div className={style.sideBar}>
            <button className={style.create}><AddCircleIcon/> Create new</button>
            <div className={style.list}>
                <div className={style.item}>
                    <div className={style.icon}><DataSaverOffIcon/></div>
                    <div className={style.info}>
                        <div className={style.title}>Even rows of data</div>
                        <div className={style.description}>Display rows 2,4,6 etc</div>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.icon}><DoneOutlineIcon/></div>
                    <div className={style.info}>
                        <div className={style.title}>Odd rows of data</div>
                        <div className={style.description}>Display rows 1,3,5 etc</div>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.icon}><PrintIcon className={style.print}/></div>
                    <div className={style.info}>
                        <div className={style.title}>All data</div>
                        <div className={style.description}>Display all data</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
