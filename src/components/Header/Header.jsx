import { Link , Outlet } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.mainBox}>
      <header className={style.headContainer}>
        <nav className={style.nav}>
          <Link  className={style.link} to="/goit-react-hw-05-movies/trend-list">Trend List</Link>
          <Link  className={style.link} to="/goit-react-hw-05-movies/search-list">Search List</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
