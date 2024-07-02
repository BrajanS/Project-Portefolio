import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // To make Routes with React
import {Acceuil} from './pages/Acceuil';
import Admin from './pages/Admin';
import Navigator from './components/Navigator';
import {SnackbarProvider} from 'notistack';  // Add-on for Notifications

export default function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <BrowserRouter>
          <Navigator/>
          <Routes>
            <Route path='/' element={<Acceuil/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}