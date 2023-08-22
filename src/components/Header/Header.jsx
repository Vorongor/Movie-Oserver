import { NavLink, Outlet } from 'react-router-dom';
import style from './Header.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

const Header = () => {
  return (
    <div className={style.mainBox}>
      <header className={style.headContainer}>
        <nav className={style.nav}>
          <StyledLink
            className={style.link}
            to="/"
          >
            Trend List
          </StyledLink>
          <StyledLink
            className={style.link}
            to="/movies"
          >
            Search List
          </StyledLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
