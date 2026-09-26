import { useState } from "react";

export default function App() {
  const [showHello, setShowHello] = useState(false);

  const handleClick = () => {
    setShowHello(true);
  };

  return (
    <main style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Simple Hello Page</h1>
      <button
        onClick={handleClick}
        aria-label="Show hello message"
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Click Me
      </button>
      {showHello && (
        <p
          style={{
            marginTop: "1rem",
            fontSize: "1.2rem",
            color: "#333",
          }}
        >
          Hello
        </p>
      )}
    </main>
  );
}
