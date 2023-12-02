const TEST_CASES = [
  {
    giftIds: [2, 1, 3, 5, 3, 2],
    expectedResult: 3,
  },
  {
    giftIds: [1, 2, 3, 4],
    expectedResult: -1,
  },
  {
    giftIds: [5, 1, 5, 1],
    expectedResult: 5,
  },
];

function findFirstRepeated(gifts) {
  return gifts.filter((item, index) => gifts.indexOf(item) !== index)[0] ?? -1;
}

TEST_CASES.forEach((data) => {
  const { giftIds, expectedResult } = data;
  const result = findFirstRepeated(giftIds);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ giftIds, result });
});
