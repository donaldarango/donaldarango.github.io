import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Project from './components/Project';
import Mythbound from './components/Projects/Mythbound';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/projects/Mythbound" element={<Mythbound />} />
            <Route path="/projects/:projectId" element={<Project />} />
            <Route path="/" element={
              <>
                <Header resumeData={resumeData}/>
                <About resumeData={resumeData}/>
                <Portfolio resumeData={resumeData}/>
                <Footer resumeData={resumeData}/>
              </>
            } />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;