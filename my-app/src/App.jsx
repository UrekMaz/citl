import './App.css'
import Homepage from './Homepage'
import LoginPage from './login/LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './Register/RegistrationPage';
import EditProfilePage from './investorside/Editprofile';
import InvestorProfilePage from './investorside/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/editprofile" element={<EditProfilePage />} />
        <Route path="/viewprofile" element={<InvestorProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;

