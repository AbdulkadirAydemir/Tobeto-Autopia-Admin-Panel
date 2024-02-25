import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import tokenService from '../../services/tokenService';
import { clearAccessToken } from '../../store/auth/authSlice';

type Props = {};

const LogIn = (props: Props) => {
  const dispatch = useDispatch();

  const handleToken = () => {
    tokenService.clearToken();
    window.location.reload();
    dispatch(clearAccessToken());
  };

  return (
    <div>
      <li className="">
        <Link to="/" onClick={handleToken}>
          <i className="bx bxs-log-out icon" />
          <span className="text nav-text">Çıkış Yap</span>
        </Link>
      </li>
    </div>
  );
};

export default LogIn;
