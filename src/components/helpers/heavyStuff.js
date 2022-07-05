export const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahí vamos...");
  }
  return `${iterationNumber} iteraciones realizadas`;
};
