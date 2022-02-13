import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGists } from "../store/gists";
import style from '../styles.module.css';

const buttons = Array.from({ length: 5 }).map((_, index) => index + 1);

export function GistsPage() {

    const dispatch = useDispatch();
    const { gists, pending, errorGists } = useSelector((state) => state.gists);


    useEffect(() => {
        dispatch(getGists());
    }, [dispatch]);

    if (pending) {
        return <h1>pending....</h1>;
    }

    if (errorGists) {
        return <h1>error....</h1>;
    }

    return (
        <div>
            <h1 className={style.gists_titel}>Gists Page</h1>
            <div className={style.gists_container}>
                {gists.map((gist) => (
                    <p key={gist.url}>{gist.url}</p>
                ))}
            </div>

            <div className={style.btn_box}>
                {buttons.map((button) => (
                    <button onClick={() => dispatch(getGists(button))} key={button}>
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
}
