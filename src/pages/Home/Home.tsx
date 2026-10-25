import { useState } from "react";
import "./App.css";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            backgroundColor: "red",
            height: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
    </>
  );
}

export default Home;
