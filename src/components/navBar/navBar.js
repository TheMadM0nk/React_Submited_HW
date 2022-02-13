import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../styles.module.css';
import { Button } from '../chatList/chatStyles';

export const NavBar = () => {


    return (
        <div className={style.navBar}>
            <div className={`${style.navBar_box} ${style.container}`} >
                <h2>My React App</h2>
                <nav className={style.linkBox}>
                    <Link className={style.link} to="/"><Button>Home</Button></Link>
                    <Link className={style.link} to="/chats"><Button>Chats</Button></Link>
                    <Link className={style.link} to="/profile"><Button>Profile</Button></Link>
                    <Link className={style.link} to="/gists"><Button>Gists</Button></Link>
                </nav>
            </div>
        </div>
    )

}