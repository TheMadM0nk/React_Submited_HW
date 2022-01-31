import './src/style.css';
import img from './src/photo.jpg';

export const ProfilePage = () => {

    return (

        <div className="content">
            <div className='container'>
                < div className="center">
                    <img src={img} alt='img' className='userImg' />
                    <div className="box_text">
                        <p>
                            <i>
                                <b >"Здесь могла бы быть ваша реклама!"</b>
                            </i>
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