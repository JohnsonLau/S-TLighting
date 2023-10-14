import React, { Component } from 'react';
import './button.css';
import arrow from './arrow.png';

class ScrollToTopButton extends Component {

  constructor() {
    super();
    this.state = {
      isButtonVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
   
    if (window.scrollY > 400) {
      this.setState({ isButtonVisible: true });
    } else {
      this.setState({ isButtonVisible: false });
    }
  };


  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {

    const { isButtonVisible } = this.state;
    
    return isButtonVisible ? (
      <button onClick={this.scrollToTop} className="scroll-to-top-button">
       <img src={arrow} alt="arrow"/>

      </button>
    ) : null;
  }
}

export default ScrollToTopButton;
