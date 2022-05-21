import './App.css';
import Home from './Pages/HomePage/Home';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import QuizPage from './Pages/QuizPage/QuizPage';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='' element={ <Home/>} />
        <Route exact path='/login' element={ <Login />} />
        <Route exact path='/sign-up' element={ <SignUp />} />
        <Route exact path='/quiz' element={ <QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
