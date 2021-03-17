// 1st Attept
function max(list) {
  return Math.max(...list);
}

function min(list) {
  return Math.min(...list);
}

// Refactoring #1
max = (list) => Math.max(...list);
min = (list) => Math.min(...list);

// (...list) = Destructuring Assignment
