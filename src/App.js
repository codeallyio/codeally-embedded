import React from "react";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "2500px",
        background: "#f5f5f5"
      }}
    >
      <div
        style={{
          height: "100px",
          padding: "20px"
        }}
      >
        <h1>Strove embedded example</h1>
      </div>
      <div style={{}}>
        <iframe
          title="Editor"
          style={{
            width: "100%",
            height: "550px",
            border: 0,
            overflow: "hidden",
            position: "relative",
            overflow: "hidden"
          }}
          src="http://localhost:8000/embed/?repoUrl=https://github.com/stroveio/strove.io&goBackTo=localhost:3000"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
      </div>
      <h1>Strove embedded example</h1>
    </div>
  );
}

export default App;
