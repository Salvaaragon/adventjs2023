const TEST_CASES = [
  {
    original: "abcd",
    modified: "abcde",
    expectedResult: "e",
  },
  {
    original: "stepfor",
    modified: "stepor",
    expectedResult: "f",
  },
  {
    original: "abcde",
    modified: "abcde",
    expectedResult: "",
  },
];

// Solution 1 (better)
function findNaughtyStep(original, modified) {
  const oSize = original.length;
  const mSize = modified.length;
  const maxLength = Math.max(oSize, mSize);
  for (let idx = 0; idx < maxLength; idx++) {
    const oChar = original[idx];
    const mChar = modified[idx];

    if (oChar !== mChar) return oSize > mSize ? oChar : mChar;
  }
  return "";
}

// Solution 2
function findNaughtyStep(original, modified) {
  const oSize = original.length;
  const mSize = modified.length;
  const max = oSize > mSize ? original : modified;
  const min = oSize > mSize ? modified : original;

  let diff = "";

  [...max].every((item, idx) => {
    if (item !== min[idx]) {
      diff = item;
      return false;
    }
    return true;
  });

  return diff;
}

// Solution 3
function findNaughtyStep(original, modified) {
  const [max, min] = [original, modified].sort((a, b) => b.length - a.length);

  return [...max].reduce((acc, current, idx, arr) => {
    if (current !== min[idx]) {
      arr.splice(1);
      return current;
    }
    return acc;
  }, "");
}

TEST_CASES.forEach((data) => {
  const { original, modified, expectedResult } = data;
  const result = findNaughtyStep(original, modified);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ original, modified, result });
});
