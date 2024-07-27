import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import InputForm from './components/InputForm';
import InteractiveMap from './components/InteractiveMap';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
         
            <ul className="navbar-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/inputform">Input Form</Link></li>
              <li><Link to="/interactivemap">Interactive Map</Link></li>
              <li><Link to="/resultsdisplay">Results Display</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inputform" element={<InputForm />} />
            <Route path="/interactivemap" element={<InteractiveMap />} />
            <Route path="/resultsdisplay" element={<ResultsDisplay />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>&copy; 2024 Solar Optimization. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
