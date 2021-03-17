// 1st Attempt
highAndLow = (numbers) => {
  let n = numbers.split(' ')
  return `${Math.max.apply(null, n)} ${Math.min.apply(null, n)}`;
};

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// Refactor #1