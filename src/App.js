import logo from './logo.svg';
import './App.css';
import { Loginpage } from './Components/LoginPage/Loginpage';
import { TopBar } from './Components/TopBar/TopBar';
import { Home } from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
    <Route path='/Login' element={<Loginpage/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
    </Routes>
    </Router> 
  );
}

export default App;
