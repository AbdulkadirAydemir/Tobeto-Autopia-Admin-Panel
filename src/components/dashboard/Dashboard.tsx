import { useEffect, useState } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import tokenService from '../../services/tokenService';
import LogIn from '../logController/LogIn';
import LogOut from '../logController/LogOut';
import CarAdd from '../carAddController/CarAdd';
import RentalsContr from '../rentalsController/RentalsContr';
import UserContr from '../userController/UserContr'



type Props = {};

const Dashboard = (props: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [sidebarClosed, setSidebarClosed] = useState<boolean>(false);
  const token = tokenService.getToken();

  useEffect(() => {
    const appBody = document.body;
    if (darkMode) {
      appBody.classList.add('dark');
    } else {
      appBody.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
      <nav className={`sidebar ${sidebarClosed ? 'close' : ''}`}>
        <header>
          <Image
            className="foto"
            src="/images/rent-a-car-logo.jpg"
            alt="Logo"
          />
          <div className="image-text">
            <span className="image"></span>
            <div className="text header-text">
              <span className="name">Autopia Admin Page</span>
            </div>
          </div>
          <i className="bx bx-chevron-right toggle" onClick={toggleSidebar} />
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search-alt icon" />
              <input type="text" placeholder="Ara" />
            </li>
            <ul className="menu-links">
              <li className="nav-link">
                <Link to="/">
                  <i className="bx bxs-home icon" />
                  <span className="text nsv-text">Ana Sayfa</span>
                </Link>
              </li>
              {token ? <CarAdd/> : null}
              {token ? <UserContr/> : null}
              {token ? <RentalsContr/> : null}
              <li className="nav-link">
                <Link to="#">
                  <i className="bx bxs-bar-chart-alt-2 icon" />
                  <span className="text nsv-text">Gelir</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="#">
                  <i className="bx bxs-bell-ring icon" />
                  <span className="text nsv-text">Bildirimler</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="#">
                  <i className="bx bxs-wallet icon" />
                  <span className="text nsv-text">Satışlar</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            {token ? <LogIn /> : <LogOut />}
            <li className="mode" onClick={toggleDarkMode}>
              <div className="moon-sun">
                <i className={`bx ${darkMode ? 'bxs-sun' : 'bxs-moon'} icon`} />
              </div>
              <span className="mode-text text">
                {darkMode ? 'Aydınlık Mod' : 'Karanlık Mod'}
              </span>
              <div className="toggle-switch">
                <span className="switch" />
              </div>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Dashboard;
