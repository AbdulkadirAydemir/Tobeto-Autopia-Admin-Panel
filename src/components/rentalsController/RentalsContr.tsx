import { Link } from "react-router-dom";

type Props = {};

const RentalsContr = (props: Props) => {
  return (
    <div>
      <li className="nav-link">
        <Link to="/car/add">
          <i className="bx bxs-registered icon" />
          <span className="text nsv-text">Kiralamalar</span>
        </Link>
      </li>
    </div>
  );
};

export default RentalsContr;
