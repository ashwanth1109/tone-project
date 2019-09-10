import React, { useState, useRef } from "react";
import { Sampler } from "tone";
import A1 from "./audio/casio/A1.mp3";

export default () => {
  const [isLoaded, setLoaded] = useState(false);
  const sampler = useRef(
    new Sampler(
      { A1 },
      {
        onload: () => {
          setLoaded(true);
        }
      }
    ).toMaster()
  );

  const handleClick = () => sampler.current.triggerAttack("A1");

  return (
    <div>
      <button disabled={!isLoaded} onClick={handleClick}>
        start
      </button>
    </div>
  );
};
