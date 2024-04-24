import React from 'react';

class ScrollableComponent extends React.Component {
  render() {
    return (
      <div style={{ overflowY: 'scroll', height: '200px', border: '1px solid black' }}>
        {/* Contenu de votre composant à défilement */}
       
        {/* Vous pouvez remplacer ces éléments par votre propre contenu */}
      </div>
    );
  }
}

export default ScrollableComponent;
