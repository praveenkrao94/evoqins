import React from 'react';

function Star() {
    const starStyle = {
        fontSize: '24px', // Adjust the size as needed
        margin: '0 1px', // Add margin to separate the stars and place the border directly on the edge
       
      };

  return (
    <span role="img" aria-label="star" style={starStyle}>
      ★
    </span>
  );
}

export default Star;
