import { Link } from 'gatsby';
import React from 'react';
import Header from './Header';

const Navigation = () => {
  return (
    <>
      <Header/>
      <Link to="/">Me</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
    </>
  );
}

export default Navigation
