import React, { useState } from 'react';
import './SideBar.css'; // Import CSS file for styling

function SideBar() {
  // Define state variables to manage the visibility of submenus
  const [isStutiOpen, setStutiOpen] = useState(false);
  const [isStotraOpen, setStotraOpen] = useState(false);
  const [isPoojanOpen, setPoojanOpen] = useState(false);

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setStutiOpen(!isStutiOpen)}>
          Stuti {isStutiOpen ? <span>&#9660;</span> : <span>&#9654;</span>}
          {/* Render submenu if isOpen is true */}
          {isStutiOpen && (
            <ul className="submenu">
              <li>Alochna Paath</li>
              <li>Aradhna Paath</li>
              <li>Meri Bhavna</li>
              <li>Barah Bhavna</li>
            </ul>
          )}
        </li>
        <li onClick={() => setStotraOpen(!isStotraOpen)}>
          Stotra {isStotraOpen ? <span>&#9660;</span> : <span>&#9654;</span>}
          {isStotraOpen && (
            <ul className="submenu">
              <li>Bhaktamar Stotra Hindi</li>
              <li>Tavarth Sootra Hindi Arth</li>
            </ul>
          )}
        </li>
        <li onClick={() => setPoojanOpen(!isPoojanOpen)}>
          Poojan {isPoojanOpen ? <span>&#9660;</span> : <span>&#9654;</span>}
          {isPoojanOpen && (
            <ul className="submenu">
              <li>Pooja Peethika</li>
              <li>Vinay Paath</li>
              <li>Dev Shastra Guru Poojan</li>
            </ul>
          )}
        </li>
        <li>Acharya Shree</li>
      </ul>
    </div>
  );
}

export default SideBar;
