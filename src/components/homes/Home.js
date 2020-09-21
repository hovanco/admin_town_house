import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import HomeFooter from '../homeFooter/HomeFooter';

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <HomeFooter />
      </>
    )
  }
}
export default Home;
