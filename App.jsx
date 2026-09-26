import React, { useState } from 'react';

export default function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  const generateSparkles = () => {
    const count = 30;
    return Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        style={{
          position: 'absolute',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          fontSize: `${Math.random() * 20 + 10}px`,
          color: 'white',
          animation: 'sparkle 2s infinite',
          animationDelay: `${Math.random() * 2}s`,
          pointerEvents: 'none',
        }}
      >✨
      </span>
    ));
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: clickCount >= 2
          ? 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)'
          : 'white',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes sparkle {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(0.5); }
        }
      `}</style>
      <button
        onClick={handleClick}
        aria-label="Toggle greeting"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        Click me
      </button>
      {clickCount >= 1 && <h1 style={{ marginTop: '20px', color: 'black' }}>Hello</h1>}
      {clickCount >= 2 && <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>{generateSparkles()}</div>}
    </main>
  );
}
