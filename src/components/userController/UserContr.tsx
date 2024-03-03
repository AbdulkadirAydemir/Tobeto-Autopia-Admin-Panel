import { Link } from "react-router-dom";

type Props = {};

const UserContr = (props: Props) => {
  return (
    <div>
      <li className="nav-link">
        <Link to="/user">
          <i className="bx bxs-user icon" />
          <span className="text nsv-text">Kullanıcılar</span>
        </Link>
      </li>
    </div>
  );
};

export default UserContr;
