/**
 * Npm import
 */

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Local import
 */

/**
 * Code
 */

const Header = () => (
  <header id="header">
    <nav className="navbar">
      <Link className="navbar-item" to="/">
        <span>Acceuil</span>
      </Link>
      <Link className="navbar-item" to="/presentation">
        <span>Présentation</span>
      </Link>
      <Link className="navbar-item" to="/courses">
        <span>Les Courses</span>
      </Link>
      <Link className="navbar-item" to="/coureurs">
        <span>Coureurs</span>
      </Link>
      <Link className="navbar-item" to="/contact">
        <span>Contact</span>
      </Link>
    </nav>
    <div className="containerVisual">
      <div className="containerVisual-info">
        <Link to="/">
          <h1 className="containerVisual-info-title">Trail des casemates</h1>
        </Link>
        <p className="containerVisual-info-para">Course des Boum Coeur : 13km / 420mD+</p>
        <p className="containerVisual-info-para">Rush des casemates : 24km / 730mD+</p>
        <p className="containerVisual-info-para">09 / 02 / 2019 à Dangolsheim</p>
      </div>
    </div>
  </header>
);

/**
 * Export
 */

export default Header;
