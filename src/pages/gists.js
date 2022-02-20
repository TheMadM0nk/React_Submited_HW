import { Routes, Route } from 'react-router-dom';
import { GistsPage } from './gistsPage';
import { GistsSearch } from './gistsSearch';
import { Link } from 'react-router-dom';
import style from '../styles.module.css';
import { Button } from '../components/chatList/chatStyles';
import classNames from 'classnames';

export const Gists = () => {

  return (
    <div className={classNames(style.main_center, style.container)}>
      <div className={style.linkGists}>
        <Link className={style.link} to="/gists"><Button>Gists</Button></Link>
        <Link className={style.link} to="/gists/search"><Button>Gists Search</Button></Link>
      </div>

      <Routes >
        <Route
          path='/'
          element={<GistsPage />}
        />
        <Route
          path='/search'
          element={<GistsSearch />}
        />
      </Routes>
    </div>
  )
}