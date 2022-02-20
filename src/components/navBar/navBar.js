import React from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../../api/firebase';
import style from '../../styles.module.css';
import { Button } from '../chatList/chatStyles';

export const NavBar = ({ signedIn }) => {

    const signOut = () => {
        firebaseApp.auth().signOut()
    }

    return (
        <div className={style.navBar}>
            <div className={`${style.navBar_box} ${style.container}`} >
                <h2>My React App</h2>
                <nav className={style.linkBox}>
                    <Link className={style.link} to="/"><Button>Home</Button></Link>
                    {!!signedIn && <Link className={style.link} to="/chats"><Button>Chats</Button></Link>}
                    {!!signedIn && <Link className={style.link} to="/profile"><Button>Profile</Button></Link>}
                    {!!signedIn && <Link className={style.link} to="/gists"><Button>Gists</Button></Link>}
                    {!signedIn && <Link className={style.link} to="/auth"><Button>Sign In</Button></Link>}
                    {!!signedIn && <Button onClick={signOut}>Sign Out</Button>}
                </nav>
            </div>
        </div>
    )

}