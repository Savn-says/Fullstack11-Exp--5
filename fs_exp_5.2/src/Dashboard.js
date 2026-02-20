import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">KNOW ABOUT ME</h1>
      </header>

      <nav className="dashboard-nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </nav>

      <main className="dashboard-content">
        <section className="card">
          <AboutMe />
        </section>
        <section className="card">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
