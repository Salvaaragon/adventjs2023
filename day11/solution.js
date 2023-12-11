const TEST_CASES = [
  {
    word: "anna",
    expectedResult: [],
  },
  {
    word: "abab",
    expectedResult: [0, 1],
  },
  {
    word: "abac",
    expectedResult: null,
  },
  {
    word: "aaaaaaaa",
    expectedResult: [],
  },
  {
    word: "aaababa",
    expectedResult: [1, 3],
  },
  {
    word: "caababa",
    expectedResult: null,
  },
  {
    word: "rotaratov",
    expectedResult: [4, 8],
  },
];

function getIndexsForPalindrome(word) {
  const wordArray = [...word];

  if (wordArray.join("") === [...wordArray].reverse().join("")) {
    return [];
  }

  for (let i = 0; i < wordArray.length; i++) {
    for (let j = 0; j < wordArray.length; j++) {
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];

      if (wordArray.join("") === [...wordArray].reverse().join("")) {
        return [i, j];
      }

      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
  }

  return null;
}

TEST_CASES.forEach((data) => {
  const { word, expectedResult } = data;
  const result = getIndexsForPalindrome(word);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ word, result });
});
