import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import tokenService from '../../services/tokenService';
import { clearAccessToken } from '../../store/auth/authSlice';

type Props = {};

const LogIn = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToken = () => {
    tokenService.clearToken();
    dispatch(clearAccessToken());
    navigate("/");
    window.location.reload();
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
