import React from 'react';

class ButonversHaut extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <button className='butonvershaut' onClick={this.scrollToTop}> To Top</button>
    );
  }
}

export default ButonversHaut;