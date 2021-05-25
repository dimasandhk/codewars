// function smallEnough(a, limit) {
//   return a.every((num) => num <= limit);
// }

const smallEnough = (a, limit) => a.every((num) => num <= limit);

console.log(smallEnough([66, 101], 200));
