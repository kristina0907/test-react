// Style
import style from './Container.module.scss';

const Container = ({children, ...props}) => {
    return (
        <div
            className={style.container}
            {...props}
        >
            <div className={style.inner}>
                {children}
            </div>
        </div>
    )
}

export default Container;
