// Style
import style from './BtnSideBar.module.scss';

const BtnSideBar = ({data, setDisplayData, displayData}) => {
    return (
        <button className={`${style.item} ${displayData == data.id && style.active}`}
                onClick={() => setDisplayData(data.id)}>
            <div className={style.icon}>{data.icon}</div>
            <div>
                <div className={style.title}>{data.title}</div>
                <div className={style.description}>{data.description}</div>
            </div>
        </button>
    )
}

export default BtnSideBar;
