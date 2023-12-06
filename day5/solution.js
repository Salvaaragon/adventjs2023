const TEST_CASES = [
  {
    road: "S..|...|..",
    time: 10,
    expectedResult: [
      "S..|...|..", // estado inicial
      ".S.|...|..", // avanza el trineo la carretera
      "..S|...|..", // avanza el trineo la carretera
      "..S|...|..", // el trineo para en la barrera
      "..S|...|..", // el trineo para en la barrera
      "...S...*..", // se abre la barrera, el trineo avanza
      "...*S..*..", // avanza el trineo la carretera
      "...*.S.*..", // avanza el trineo la carretera
      "...*..S*..", // avanza el trineo la carretera
      "...*...S..", // avanza por la barrera abierta
    ],
  },
];

// . = Carretera
// S = Trineo de Santa
// * = Barrera abierta
// | = Barrera cerrada

function cyberReindeer(road, time) {
  const result = [road];
  let sledPosition = 0;

  const defaultRoadStr = road.replaceAll("S", ".");
  let defaultRoad = [...defaultRoadStr];

  for (let currentTime = 1; currentTime < time; currentTime++) {
    if (currentTime === 5) {
      defaultRoad = [...defaultRoadStr.replaceAll("|", "*")];
    }

    const nextPosition = sledPosition + 1;
    const nextPathElement = defaultRoad[nextPosition];
    let currentWay = [...result[result.length - 1]];

    if ([".", "*"].includes(nextPathElement)) {
      currentWay = [...defaultRoad];
      currentWay[nextPosition] = "S";
      sledPosition++;
    }
    result.push(currentWay.join(""));
  }
  return result;
}

TEST_CASES.forEach((data) => {
  const { road, time, expectedResult } = data;
  const result = cyberReindeer(road, time);
  console.assert(JSON.stringify(result) === JSON.stringify(expectedResult));
  console.log({ road, time, result });
});
