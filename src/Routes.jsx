import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // App will act as your main layout or homepage
import Programs from './pages/programming'; // Example page component
import Contacts from './pages/contacts'; // Another example page
import Consultation from './pages/consultation';
import Packages from './pages/packages';
import Service from './pages/services';
import Vacancies from './vacancies';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<App />} /> {/* App as your main/home component */}
        <Route path="/contact" element={<Contacts />} />
        <Route path="/consultation" element={<Consultation/>} />
        <Route path="/packages" element={<Packages/>} />
        <Route path="/programming" element={<Programs/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/vacancies" element={<Vacancies/>} />


      </Routes>
    </Router>
  );
}

export default AppRoutes;
