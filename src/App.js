import './App.css';
import Home from './components/HomePage/Home';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='' element={ <Home />} />
        <Route exact path='/login' element={ <Login />} />
        <Route exact path='/sign-up' element={ <SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
