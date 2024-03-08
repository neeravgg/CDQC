import { Link } from 'react-router-dom';
import { StyledNav } from '../styles/Nav.styled';
import Header from './Header';

const Nav = () => {
  return (
    <StyledNav>
      <Header title="CDQC" />
      <ul className="ul-word-btn">
        <li>
          <Link to="/login">
            <button className="word-btn">Login</button>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <button className="word-btn">Register</button>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
