import './App.css';
import { Route, Routes } from 'react-router-dom';
import Owners from './pages/Owners';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Owners />} />
      </Routes>
    </div>
  );
}

export default App;
