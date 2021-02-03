import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const index = () => {
  return (
    <div>
      <Navbar />
      <h1>All ninjas</h1>
      <ul>
        <li>Mario</li>
        <li>Yoshi</li>
        <li>Luigi</li>
        <li>Bowser</li>
      </ul>
      <Footer />
    </div>
  );
};

export default index;
