import React from 'react';

class ScrollButtons extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div style={{ position: 'fixed', right: 0, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button onClick={this.scrollToTop}>↑</button>
        <button onClick={this.scrollToBottom}>↓</button>
      </div>
    );
  }
}

export default ScrollButtons;


