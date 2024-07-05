import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // To make Routes with React
import {Acceuil} from './pages/Acceuil';
import Admin from './pages/Admin';
import Portfolio from './pages/Portfolio.jsx';
import Page404 from './pages/Page404.jsx'
import Navigator from './components/Navigator';
import {SnackbarProvider} from 'notistack';  // Add-on for Notifications

export default function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <BrowserRouter>
          <Navigator/>
          <Routes>
            <Route path='/' element={<Acceuil/>}>Acceuil route</Route>
            <Route path='/myPortfolio' element={<Portfolio/>}>Portefolio route</Route>
            <Route path='/admin' element={<Admin/>}>Admin route</Route>
            <Route path='*' element={<Page404/>}>404 Not found route</Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}