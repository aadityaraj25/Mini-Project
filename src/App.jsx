import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Discover from './pages/Discover';
import Articles from './pages/Articles';
import Photography from './pages/Photography';
import ContactUs from './pages/ContactUs';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ErrorUrl from './components/ErrorUrl';
import Challenges from './pages/Challenges';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import './App.css'

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/photography" element={<Photography/>} />
          <Route path="/discover" element={<Discover/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/user/profile" element={<Profile/>} />
          <Route path="/challenges" element={<Challenges/>} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<ErrorUrl />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App