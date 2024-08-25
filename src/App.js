import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import AddTeamForm from './form';
import Leaderboard from './leaderboard';

import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddTeamForm/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
