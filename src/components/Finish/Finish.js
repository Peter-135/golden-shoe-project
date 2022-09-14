import React from "react";
import { useEffect } from "react";
import "./Finish.css";
import Confetti from "react-confetti";

const Finish = () => {
  useEffect(() => {
    document.title = "Finish!";
  }, []);

  const confettiStyles = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="finish-container">
      <Confetti style={confettiStyles} />
      <h1 className="big-finish">FINISH!</h1>
    </div>
  );
};

export default Finish;
