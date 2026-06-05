import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Project from './components/Project';
import ScrollHandler from './components/ScrollHandler';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollHandler />
        <div className="App">
          <Routes>
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