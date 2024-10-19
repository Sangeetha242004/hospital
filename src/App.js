import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Home } from './Components/Home/Home'; 
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
