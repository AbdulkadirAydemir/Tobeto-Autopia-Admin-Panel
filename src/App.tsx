import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/login/Login';
import './App.css';
import CarPage from './pages/car/CarPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path='car/add' element={<CarPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
