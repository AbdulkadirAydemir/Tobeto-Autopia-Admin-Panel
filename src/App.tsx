import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CarPage from './pages/car/CarPage';
import Login from './pages/login/Login';
import Rental from './pages/rentals/Rental';
import User from './pages/users/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path='car/add' element={<CarPage/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/rental' element={<Rental/>}/>
      </Routes>
    </div>
  );
}

export default App;
