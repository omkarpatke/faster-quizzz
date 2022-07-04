import './App.css';
import Home from './Pages/HomePage/Home';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import QuizPage from './Pages/QuizPage/QuizPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RulesPage from './Pages/RulesPage/RulesPage';
import { ResultPage } from './Pages/ResultPage/ResultPage';
import { RequiresAuth } from './components/RequiresAuth';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='' element={ <Home/>} />
        <Route path='/login' element={ <Login />} />
        <Route path='/sign-up' element={ <SignUp />} />
        <Route path='/rulespage' element={ <RulesPage />} />
        <Route path='/quiz' element={<RequiresAuth><QuizPage /></RequiresAuth>} />
        <Route path='/quiz-result' element={<ResultPage />} />
      </Routes>
      <ToastContainer 
      position="bottom-center"
      autoClose={1200}
      theme="light"
      />
      </div>
  );
}

export default App;
