import Dashboard from './Components/Dashboard';
import Login from './Components/login';
import Signup from './Components/signup';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from './Components/home';
import AcademicDetailsForm from './Components/Academicdetails'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/academic' element={<AcademicDetailsForm/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
