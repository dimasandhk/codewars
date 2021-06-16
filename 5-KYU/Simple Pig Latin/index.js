function pigIt(str) {
	const arr = str.split(" ");

	return arr
		.map((word) => (/[A-z]/i.test(word) ? `${word.substr(1)}${word.substr(0, 1)}ay` : word))
		.join(" ");
}
