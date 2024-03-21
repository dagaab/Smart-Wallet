import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Grid from './components/Grid.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
