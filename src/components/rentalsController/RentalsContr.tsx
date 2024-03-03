import { Link } from "react-router-dom";

type Props = {};

const RentalsContr = (props: Props) => {
  return (
    <div>
      <li className="nav-link">
        <Link to="/rental">
          <i className="bx bxs-wallet icon" />
          <span className="text nsv-text">Satışlar</span>
        </Link>
      </li>
    </div>
  );
};

export default RentalsContr;
