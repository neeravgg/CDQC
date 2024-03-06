import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logout, reset } from '../redux/auth/authSlice';

import { RiLogoutBoxFill } from 'react-icons/ri';
import ConfirmMessage from '../utils/confirmModel';

const Navbar = () => {
  const dispatch = useDispatch();

  const onLogOut = async () => {
    // toast.success('Logout successful');
    const confirm = await ConfirmMessage('you want to logout?');
    if (confirm.isConfirmed) {
      dispatch(logout());
      // dispatch(reset);
      window.location.href = '/login';
    }
  };

  return (
    <div className="flex w-full justify-between">
      <div className="title"> Commodity Digital Quality Control </div>
      <button className="word-btn bg-gray-700 p-3 text-white text-3xl" onClick={onLogOut}>
        <RiLogoutBoxFill />
      </button>
    </div>
  );
};

export default Navbar;
