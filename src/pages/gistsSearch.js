import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchGists } from "../store/gists";
import style from '../styles.module.css';
import debounce from 'lodash.debounce';

const searchGistsDebounce = debounce((query, dispatch) => {
    dispatch(searchGists(query));
}, 2000);

export function GistsSearch() {
    const [value, setValue] = useState('bogdanq');
    const dispatch = useDispatch();
    const { gistsSearch, errorSearch, pendingSearch } = useSelector((state) => state.gists);

    useEffect(() => {
        searchGistsDebounce(value, dispatch);
    }, [dispatch, value]);

    if (pendingSearch) {
        return <h1>pending....</h1>;
    }

    if (errorSearch) {
        return <h1>error....</h1>;
    }

    return (
        <div>
            <h1 className={style.gists_titel}>Gists Search</h1>

            <div>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="enter name"
                />
                <div className={style.gists_container}>
                    {gistsSearch.map((gist) => (
                        <p key={gist.url}>{gist.url}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
