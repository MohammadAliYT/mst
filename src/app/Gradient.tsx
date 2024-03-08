import React from "react";
// import "./GradientText.css";

interface GradientTextProps {
  text: string;
}

function GradientText({ text }: GradientTextProps) {
  return (
    <div className="gradient-text-container">
      <h1 className="gradient-text">
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{ animationDelay: `${index * 0.05}s` }}
            className={`gradient-char gradient-char-${index % 4}`}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default GradientText;
