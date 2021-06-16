function generateHashtag(str) {
	if (!str.trim()) return false;

	const capitalize = str.replace(/\s+/g, " ").trim().split(" ")
		.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`);

	const result = ["#", ...capitalize].join("");
	return result.length > 140 ? false : result;
}