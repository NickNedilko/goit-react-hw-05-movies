import css from './Header.module.css';
const { NavLink } = require('react-router-dom');

const Header = () => {
  return (
    <div className={css.wrapper}>
      <NavLink className={css.navLink} to="/home">
        Home
      </NavLink>
      <NavLink className={css.navLink} to="/movies">
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
