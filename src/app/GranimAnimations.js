import React, { useEffect, useRef } from "react";
import Granim from "granim";

const GranimAnimation = ({ text }) => {
  const granimRef = useRef(null);

  useEffect(() => {
    const granimInstance = new Granim({
      element: granimRef.current,
      direction: "radial",
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ["#29323c", "#485563"],
            ["#FF6B6B", "#556270"],
            ["#80d3fe", "#7ea0c4"],
            ["#f0ab51", "#eceba3"],
          ],
          transitionSpeed: 2000,
        },
      },
    });

    return () => {
      granimInstance.destroy();
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <canvas
        ref={granimRef}
        style={{
          width: 150,
          height: 100,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <h1
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 150,
          height: 100,
          //   zIndex: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "white",
          mixBlendMode: "difference",
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default GranimAnimation;
