import style from '../../styles.module.css';

export const Layout = (({ chatList, message }) => {

    return (
        <div className={style.appContainer}>
            <div className={style.chat}>{chatList}</div>
            <div className={style.main_center}>{message}</div>
        </div>
    )
})