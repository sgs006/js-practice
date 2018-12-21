let john, mike, mary;

john = [200, 120, 103];
mike = [116, 94, 123];
mary = [500, 500, 98];

let johnScore = john.reduce((a, b) => a + b / john.length, 0);
let mikeScore = mike.reduce((a, b) => a + b / mike.length, 0);
let maryScore = mary.reduce((a, b) => a + b / mary.length, 0);

function avgScore() {
  if (johnScore > mikeScore && johnScore > maryScore) {
    return "You did it John";
  } else if (mikeScore > johnScore && mikeScore > maryScore) {
    return "You did it Mike";
  } else {
    return "You did it Mary";
  }
}
