import React from "react";

function Home() {
  return (
    <div
      id="home"
      style={{
        minHeight: "100vh",
        background: "#0f1f2a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        color: "white",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "48px", fontWeight: "800", marginBottom: "20px" }}>
          Connecting Ideas. Building Technology. Empowering Growth.
        </h1>
        <p style={{ fontSize: "22px" }}>
          TechBridge debug test section is rendering correctly.
        </p>
      </div>
    </div>
  );
}

export default Home;