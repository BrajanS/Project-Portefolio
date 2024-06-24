import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Acceuil} from './pages/Acceuil';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Acceuil/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}