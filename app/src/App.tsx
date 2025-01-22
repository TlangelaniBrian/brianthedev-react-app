import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Layout from './components/Layout';
import Property from './pages/Property';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/property" element={<Property />} />
          </Routes>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
