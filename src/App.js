import './App.css';
import Home from './Pages/HomePage/Home';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import QuizPage from './Pages/QuizPage/QuizPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RequiresAuth } from './components/RequiresAuth';
import RulesPage from './Pages/RulesPage/RulesPage';
import { ResultPage } from './Pages/ResultPage/ResultPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='' element={ <Home/>} />
        <Route exact path='/login' element={ <Login />} />
        <Route exact path='/sign-up' element={ <SignUp />} />
        <Route exact path='/rulespage' element={ <RulesPage />} />
        <Route exact path='/quiz' element={<RequiresAuth><QuizPage /></RequiresAuth>} />
        <Route exact path='/quiz-result' element={<ResultPage />} />
      </Routes>
      <ToastContainer 
      position="bottom-center"
      autoClose='1200'
      theme="light"
      />
    </div>
  );
}

export default App;
