import { Link } from 'react-router-dom';

type Props = {};

const LogOut = (props: Props) => {
  return (
    <div>
      <li className="">
        <Link to="/login">
          <i className="bx bxs-log-in icon" />
          <span className="text nav-text">Giriş Yap</span>
        </Link>
      </li>
    </div>
  );
};

export default LogOut;
