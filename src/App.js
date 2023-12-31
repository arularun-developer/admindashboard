
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Footer from './Footer';

function App() {
  return (
    <div id='wrapper'>
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id='containter'>
        <Navbar></Navbar>
        <div className="container-fluid">
            <Dashboard></Dashboard>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
