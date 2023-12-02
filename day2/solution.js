const TEST_CASES = [
  {
    gifts: ["tren", "oso", "pelota"],
    materials: "tronesa",
    expectedResult: ["tren", "oso"],
  },
  {
    gifts: ["juego", "puzzle"],
    materials: "jlepuz",
    expectedResult: ["puzzle"],
  },
  {
    gifts: ["libro", "ps5"],
    materials: "psli",
    expectedResult: [],
  },
];

function manufacture(gifts, materials) {
  const regex = new RegExp(`^[${materials}]+`.concat("$"));
  return gifts.filter((gift) => {
    return regex.test(gift);
  });
}

TEST_CASES.forEach((data) => {
  const { gifts, materials, expectedResult } = data;
  const result = manufacture(gifts, materials);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ gifts, result });
});
