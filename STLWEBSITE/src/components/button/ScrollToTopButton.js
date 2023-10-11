import React, { Component } from 'react';
import './button.css';
import arrow from './arrow.png';

class ScrollToTopButton extends Component {

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    
    return (
      <button onClick={this.scrollToTop} className="scroll-to-top-button">
       <img src={arrow} alt="arrow"/>

      </button>
    );
  }
}

export default ScrollToTopButton;
