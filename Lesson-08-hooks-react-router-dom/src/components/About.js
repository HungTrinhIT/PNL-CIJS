import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-2);
  };
  const onBackToHome = () => {
    navigate("/");
  };
  return (
    <div>
      About
      <button onClick={onGoBack}>Go back</button>
      <button onClick={onBackToHome}>Back to home</button>
    </div>
  );
};

export default About;
