import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import Cards from './Cards';

function HomePage() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar on the left */}
      <SideBar />

      {/* Main content area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginTop: '50px', marginLeft: '10px' }}>
        {/* Navbar */}
        <NavBar />

        {/* Middle panel */}
        <div style={{ flex: 1, padding: '30px' }}>
          {/* Cards */}
          <div className="cards-container">
            <Cards className="card" />
            <Cards className="card" />
            <Cards className="card" />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
