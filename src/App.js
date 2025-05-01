import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Welcome to Azure!</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
        alt="Azure Logo"
        style={{ width: '200px', margin: '20px 0' }}
      />
      <p>This is a simple React app deployed to Azure Static Web Apps.</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          background: '#0078D4',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Click me!
      </button>
      <p>You clicked {count} times.</p>
    </div>
  );
}

export default App;
