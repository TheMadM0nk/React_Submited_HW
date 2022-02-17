import './src/style.css';
import img from './src/vinyl.png';

export const HomePage = () => {

    return (

        <div className='content'>
            <div className='homePage'>
                <div className='animation'>
                    <img className='img' src={img} alt='vinyl' />
                    <h1 className='titel'>This is HomePage!</h1>
                </div>
            </div>
        </div>
    )
}