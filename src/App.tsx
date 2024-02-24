import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
