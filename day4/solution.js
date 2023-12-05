const TEST_CASES = [
  {
    message: "hola (odnum)",
    expectedResult: "hola mundo",
  },
  {
    message: "(olleh) (dlrow)!",
    expectedResult: "hello world!",
  },
  {
    message: "sa(u(cla)atn)s",
    expectedResult: "santaclaus",
  },
];

// Solution 1
function decode(message) {
  const regex = /(?<=\()[^()]+(?=\))/;

  function recursiveDecode(message) {
    const match = message.match(regex);
    if (match) {
      const subMsg = match[0];
      const subMsgChars = subMsg.split("");
      const subMsgCharsReversed = subMsgChars.reverse();
      const reversed = subMsgCharsReversed.join("");
      const newSubMsg = message.replace(`(${subMsg})`, reversed);
      const result = recursiveDecode(newSubMsg);

      return result;
    } else return message;
  }
  const result = recursiveDecode(message);
  return result;
}

// Solution 2 (best)
function decode(message) {
  const regex = /(?<=\()[^()]+(?=\))/;
  while (regex.test(message)) {
    const match = message.match(regex)[0];
    const rev = match.split("").reverse();
    message = message.replace(`(${match})`, rev.join(""));
  }
  return message;
}

TEST_CASES.forEach((data) => {
  const { message, expectedResult } = data;
  const result = decode(message);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ message, result });
});
