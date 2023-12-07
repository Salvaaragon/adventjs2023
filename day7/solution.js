const TEST_CASES = [
  {
    size: 4,
    symbol: "+",
    expectedResult:
      "   ####\n" +
      "  #++##\n" +
      " #++#+#\n" +
      "####++#\n" +
      "#++#+#\n" +
      "#++##\n" +
      "####\n",
  },
  {
    size: 5,
    symbol: "*",
    expectedResult:
      "    #####\n" +
      "   #***##\n" +
      "  #***#*#\n" +
      " #***#**#\n" +
      "#####***#\n" +
      "#***#**#\n" +
      "#***#*#\n" +
      "#***##\n" +
      "#####\n",
  },
  {
    size: 1,
    symbol: "^",
    expectedResult: "#\n",
  },
];

function drawGift(size, symbol) {
  if (size === 1) {
    return "#\n";
  }

  let pointer = size - 2;
  const gift3d = [" ".repeat(size - 1).concat("#".repeat(size), "\n")];

  while (pointer > 0) {
    gift3d.push(
      [
        " ".repeat(pointer),
        "#",
        symbol.repeat(size - 2),
        "#",
        symbol.repeat(size - 2 - pointer),
        "#\n",
      ].join("")
    );
    pointer--;
  }

  gift3d.push(
    [
      "#".repeat(size),
      symbol.repeat(size - 2),
      "#".repeat(size - (size - 1)),
      "\n",
    ].join("")
  );

  pointer = 0;

  while (pointer < size - 2) {
    gift3d.push(
      [
        "#",
        symbol.repeat(size - 2),
        "#",
        symbol.repeat(size - 3 - pointer),
        "#\n",
      ].join("")
    );
    pointer++;
  }

  gift3d.push("#".repeat(size), "\n");
  return gift3d.join("");
}

TEST_CASES.forEach((data) => {
  const { size, symbol, expectedResult } = data;
  const result = drawGift(size, symbol);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ size, symbol });
  console.log(result);
});
