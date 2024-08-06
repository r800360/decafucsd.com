import React from 'react';
import header from './assets/student/logo-header.svg'; // Import the image
import body from './assets/student/hero-graphic-left.svg'; // Import the image
import './App.css';

function App() {
  return (
    <section className="page">
      <div className="header">
        <img src={header} alt="Logo" height={100} style={{color: 'black'}} />
        <span className='logo-student'>DECAF</span>
      </div>
      <div className="body">
        <img src={body} alt="Logo" height={512} style={{color: 'black'}} />
        <div className="event">
          <p>Disciplines of Engineering Career Fair</p>
          <p>October 9, 2024</p>
          <p>Qualcomm Conference Center, UC San Diego</p>
          <p id='registration'>Registration details coming soon!</p>
        </div>
      </div>
      <div className="footer">
        <span className='logo-student'>Website Under Construction</span>
      </div>
    </section>
  );
}

export default App;