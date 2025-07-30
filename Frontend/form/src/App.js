import logo from './logo.svg';
import './App.css';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
