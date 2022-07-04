import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const incremet = (valeu = 1) => {
    if (counter >= 20) {
      return setCounter(0);
    }
    setCounter(counter + valeu);
  };
  const decremente = (valeu = 1) => {
    if (counter === 0) return;
    setCounter(counter - valeu);
  };
  const restar = () => {
    setCounter(0);
  };

  return {
    counter,
    decremente,
    incremet,
    restar,
  };
};
