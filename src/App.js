import React from 'react';

// Inline CSS styles for the black container
const containerStyle = {
  backgroundColor: '#444444',
  width: '4647px',
  height: '1078px',
  top: '-590px',
  left: '-1888px',
  position: 'relative',  // Adjust position to be relative to its normal position
  border: '1px solid #000', // Black border
  borderRadius: '2px', // Rounded corners
};

const App = () => {
  return (
    <div className="App">
      <div style={containerStyle}></div> {/* The black container */}
    </div>
  );
};

export default App;
