import { Routes, Route } from 'react-router-dom';
import { RegistrationPage } from './registration';
import { LoginPage } from './login';
import { Link } from 'react-router-dom';
import style from '../styles.module.css';
import { Button } from '../components/chatList/chatStyles';
import classNames from 'classnames';

export const SignUp = () => {

    return (
        <div className={classNames(style.main_center, style.container)}>
            <div className={style.linkGists}>
                <Link className={style.link} to="/auth"><Button>Login</Button></Link>
                <Link className={style.link} to="/auth/reg"><Button>Registration</Button></Link>
            </div>

            <Routes >
                <Route
                    path='/'
                    element={<LoginPage />}
                />
                <Route
                    path='/reg'
                    element={<RegistrationPage />}
                />
            </Routes>
        </div>
    )
}