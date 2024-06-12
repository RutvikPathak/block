import React from 'react';
import "../App.css";

function Header(props) {
  return (
    <header className="top-bar">
      <div className="logo">{props.name} Blog</div>
      <nav className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
