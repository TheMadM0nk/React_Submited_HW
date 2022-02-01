import './src/style.css';
import img from './src/photo.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { switchChecked } from '../store/profile/actions';

export const ProfilePage = () => {
    const state = useSelector(state => state);
    const dispach = useDispatch();

    return (

        <div className="content">
            <div className='container'>
                < div className="center">
                    <img src={img} alt='img' className='userImg' />
                    <div className="box_text">
                        <p>
                            <i><b >"Здесь могла бы быть ваша реклама!"</b></i>
                        </p>
                        <br />
                        <p>
                            <input
                                id='checkBox'
                                type='checkbox'
                                defaultChecked={state.checked}
                                onChange={() => dispach(switchChecked())}
                            />
                            <label htmlFor='checkBox'><b> &nbsp; Check box для ДЗ</b></label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer">
                Copyright &copy; <i>"Мяурис"</i>
            </div>
        </div>
    )
}