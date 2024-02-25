import { Link } from "react-router-dom";

type Props = {};

const CarAdd = (props: Props) => {
  return (
    <div>
      <li className="nav-link">
        <Link to="/car/add">
          <i className="bx bxs-car icon" />
          <span className="text nsv-text">Araç Ekle</span>
        </Link>
      </li>
    </div>
  );
};

export default CarAdd;
