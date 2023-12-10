const TEST_CASES = [
  {
    ornaments: "123",
    height: 4,
    expectedResult: "   1\n  2 3\n 1 2 3\n1 2 3 1\n   |\n",
  },
  {
    ornaments: "*@o",
    height: 3,
    expectedResult: "  *\n @ o\n* @ o\n  |\n",
  },
];

function createChristmasTree(ornaments, height) {
  const totalRepeat = (height * (height + 1)) / 2;
  const characters = ornaments.repeat(totalRepeat).split("");
  const trunk = `${" ".repeat(height - 1)}|`;
  const tree = [];

  for (let i = 0; i < height; i++) {
    const spaces = " ".repeat(height - i - 1);
    const ornamentsChars = characters.splice(0, i + 1).join(" ");
    tree.push([spaces, ornamentsChars, "\n"].join(""));
  }

  tree.push(trunk, "\n");
  return tree.join("");
}

TEST_CASES.forEach((data) => {
  const { ornaments, height, expectedResult } = data;
  const result = createChristmasTree(ornaments, height);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ ornaments, height });
  console.log(result);
});
