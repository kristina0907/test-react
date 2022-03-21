// Style
import style from './ControlBtn.module.scss';

//Icon
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from '@mui/icons-material/Download';


const ControlBtn = () => {
    return (
        <div className={style.control}>
            <div className={style.select}>
                <select>
                    <option value="val">Aug 21, 2021 · Sep 21 2021</option>
                </select>
            </div>
            <button className={style.print}><PrintIcon/></button>
            <button className={style.download}><DownloadIcon/></button>
        </div>
    )
}

export default ControlBtn;
