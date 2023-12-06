const TEST_CASES = [
  {
    movements: ">>*<",
    expectedResult: 2,
  },
  {
    movements: "<<<>",
    expectedResult: 2,
  },
  {
    movements: ">***>",
    expectedResult: 5,
  },
  {
    movements: "<<**>>",
    expectedResult: 2,
  },
  {
    movements: "*",
    expectedResult: 1,
  },
  {
    movements: "",
    expectedResult: 0,
  },
  {
    movements: "",
    expectedResult: 0,
  },
  {
    movements: "<><>",
    expectedResult: 0,
  },
  {
    movements: "><><",
    expectedResult: 0,
  },
  {
    movements: ">><<",
    expectedResult: 0,
  },
];

// > = Avanza a la derecha
// < = Avanza a la izquierda
// * = Puede avanzar o retroceder

// Solution 1
function maxDistance(movements) {
  let currentPosition = 0;

  const MAP = {
    ">": () => currentPosition + 1,
    "<": () => currentPosition - 1,
    "*": () => Math.max(currentPosition + 1, currentPosition - 1),
  };

  [...movements].forEach((movement) => {
    currentPosition = MAP[movement]();
  });

  return Math.abs(currentPosition);
}

// Solution 2 (best)
function maxDistance(movements) {
  const totalRightArrows = movements.match(/>/g)?.length || 0;
  const totalLeftArrows = movements.match(/</g)?.length || 0;
  const totalAsterisks = movements.match(/\*/g)?.length || 0;
  return Math.abs(totalRightArrows - totalLeftArrows) + totalAsterisks;
}

TEST_CASES.forEach((data) => {
  const { movements, expectedResult } = data;
  const result = maxDistance(movements);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ movements, result });
});
