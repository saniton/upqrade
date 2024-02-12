//App.js
import './App.css';
import React, { useState } from 'react';
import Header from './UpQRade_Components/Header';
import Footer1 from './UpQRade_Components/Footer1';
import Feedback from './Buttons/Feedback';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Buttons/button.css';
import Scanbtn2 from './Buttons/Scanbtn2';
import RegisterForm from './Form/RegisterForm';
import ButtonsContainer from './UpQRade_Components/ButtonsContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Submission from './Form/Submission';
import Admin from './UpQRade_Components/Admin';
import AdminLogin from './Admin/AdminLogin';



function App(props) {
  
  const [selectedLang, setSelectedLang] = useState(localStorage.getItem('i18nextLng'));
  // const [languageS, setLanguageS] = useState('en');

  const handleChangeLanguage = (lang) => { 
    localStorage.setItem('i18nextLng', lang);
    setSelectedLang(lang);
  };
  return (
    
    
    <div className="App">
      
      <Header selectedLang={selectedLang}
        onLanguageChange={handleChangeLanguage}   />
    
      <div className="button-container">

          <Routes>
            <Route exact path="/" element={<><Scanbtn2 /><ButtonsContainer /></>} />
            <Route path="/registrations" Component={RegisterForm} />
            <Route path="/Submission" Component={Submission} />
            {/* <Route path="*" element={<Feedback />} /> */}
      </Routes>
      <Routes>
      <Route path="adminLogin" Component={AdminLogin}/>
      <Route path="/admin" Component={Admin} />

      </Routes>

      </div>
      
      <Footer1 />

    </div>
  );
}

export default App;
