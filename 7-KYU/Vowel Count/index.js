// 1st Attempt
getCount = (str) => {
  let vowelsCount = 0;

  [...str].forEach((s) => {
    if (s == "a" || s == "i" || s == "e" || s == "u" || s == "o") {
      vowelsCount++;
    }
  });

  return vowelsCount;
};

// Refactor #1
getCount = (str) => {
  let vowelsCount = 0;
  [...str].forEach((s) => {
    if (/^[aeiou]$/i.test(s)) {
      vowelsCount++;
    }
  });

  return vowelsCount;
};

// Refactor #2
getCount = (str) => {
  return (str.match(/[aeiou]/gi) || []).length;
};
