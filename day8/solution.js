const TEST_CASES = [
  {
    gifts: "76a11b",
    expectedResult: "[a]{a}{a}(aaaaaa){b}(b)",
  },
  {
    gifts: "20a",
    expectedResult: "{a}{a}",
  },
  {
    gifts: "70b120a4c",
    expectedResult: "[b]{b}{b}[a][a]{a}{a}(cccc)",
  },
];

// 10 gifts = 1 box
// 5 boxes = 1 pallet
// rest = unique bag

// Solution 1 (best)
function organizeGifts(gifts) {
  const giftsTotals = gifts.match(/\d+/g);
  const giftsTypes = gifts.match(/[a-zA-Z]+/g);
  const result = [];

  giftsTypes.forEach((type, idx) => {
    const typeTotal = giftsTotals[idx];
    const pallets = Math.floor(Math.floor(typeTotal / 10) / 5);
    const boxes = Math.floor(typeTotal / 10) % 5;
    const rest = typeTotal % 10;
    result.push(
      [
        `[${type}]`.repeat(pallets),
        `{${type}}`.repeat(boxes),
        "(".repeat(Math.min(1, rest)),
        `${type}`.repeat(rest),
        ")".repeat(Math.min(1, rest)),
      ].join("")
    );
  });

  return result.join("");
}

// Solution 2
function organizeGifts(gifts) {
  const regex = new RegExp(/\d+[a-zA-Z]/g);
  const giftsData = gifts.match(regex);
  const result = [];

  giftsData.forEach((gift) => {
    const [total, type] = gift.match(/[a-zA-Z]+|[0-9]+/g);
    const pallets = Math.floor(Math.floor(total / 10) / 5);
    const boxes = Math.floor(total / 10) % 5;
    const rest = total % 10;
    result.push(
      [
        `[${type}]`.repeat(pallets),
        `{${type}}`.repeat(boxes),
        "(".repeat(Math.min(1, rest)),
        `${type}`.repeat(rest),
        ")".repeat(Math.min(1, rest)),
      ].join("")
    );
  });

  return result.join("");
}

TEST_CASES.forEach((data) => {
  const { gifts, expectedResult } = data;
  const result = organizeGifts(gifts);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ gifts, result });
});
