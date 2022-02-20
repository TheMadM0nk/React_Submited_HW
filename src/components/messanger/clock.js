import React, { useState, useEffect } from 'react';
import style from '../../styles.module.css';

export const Clock = () => {
    const [time, setTime] = useState(new Date());

    const refreshClock = () => {
        setTime(new Date());
    }
    useEffect(() => {
        const timer = setInterval(refreshClock, 1000);
        return () => clearInterval(timer);
    }, [time]);

    return (
        <span className={style.clock}>
            Current Time is {time.toLocaleTimeString('Ru-ru')}
        </span>
    );
}