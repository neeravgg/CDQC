import { Link, useNavigate } from 'react-router-dom';
import { StyledNav } from '../styles/Nav.styled';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../redux/auth/authSlice';
import { RootState } from '../app/store';
import { toast } from 'react-toastify';
import Header from './Header';

const Nav = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogOut = () => {
    toast.success('Logout successful');
    dispatch(logout());
    dispatch(reset);
    navigate('/');
  };

  return (
    <StyledNav>
      <Header title="CDQC" />
      {user ? (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <h1>welcome back, {user?.name?.toLowerCase()}</h1>
          <ul className="ul-btn">
            <li>
              {/* <IconButton
                icon="LogOutIcon"
                onClick={onLogOut}
                height={30}
                width={30}
              /> */}
            </li>
          </ul>
        </div>
      ) : (
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
      )}
    </StyledNav>
  );
};

export default Nav;
