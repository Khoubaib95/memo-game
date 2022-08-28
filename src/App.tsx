import React from "react";
import IndexPage from "../src/page/index";
import "./index.scss";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IndexPage />
    </div>
  );
}

export default App;
