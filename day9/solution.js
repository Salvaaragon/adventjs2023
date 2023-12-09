const TEST_CASES = [
  {
    lights: ["🟢", "🔴", "🟢", "🟢", "🟢"],
    expectedResult: 1,
  },
  {
    lights: ["🔴", "🔴", "🟢", "🟢", "🔴"],
    expectedResult: 2,
  },
  {
    lights: ["🟢", "🔴", "🟢", "🔴", "🟢"],
    expectedResult: 0,
  },
  {
    lights: ["🔴", "🔴", "🔴"],
    expectedResult: 1,
  },
];

function adjustLights(lights) {
  let op1 = 0;
  let op2 = 0;
  let idx = 0;

  for (const light of lights) {
    const isEven = idx % 2 === 0;
    op1 += +(light !== "🔴") * +isEven;
    op2 += +(light !== "🟢") * +isEven;
    op1 += +(light !== "🟢") * +!isEven;
    op2 += +(light !== "🔴") * +!isEven;
    idx++;
  }

  return Math.min(op1, op2);
}

TEST_CASES.forEach((data) => {
  const { lights, expectedResult } = data;
  const result = adjustLights(lights);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ lights, result });
});
