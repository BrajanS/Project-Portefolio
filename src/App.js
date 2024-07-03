import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // To make Routes with React
import {Acceuil} from './pages/Acceuil';
import Admin from './pages/Admin';
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
            <Route path='/' element={<Acceuil/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='*' element={<Page404/>}></Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}