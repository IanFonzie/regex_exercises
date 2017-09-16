function isUrl(url) {
	return !!url.match(/^https?:\/\/\S+$/);
}

// I used * instead of +. simple mistake.

function fields(fieldString) {
	return fieldString.split(/\W+/);
}

// I used \W+ because the examples seemed to imply that it was non-words characters
// that split the string. After re-reading the problem statement then my rewrite would
// be:

function fields(fieldString) {
	return fieldString.split(/[\t, ]+/);
}

function mysteryMath(equation) {
	return equation.replace(/[*+\-\/]/, '?');
}

// forgot to escape the - character so that it would be interpreted as a literal hyphen,
// and not a range specification. Escaped the / character for consistency.

function mysteriousMath(equation) {
	return equation.replace(/[*+\-\/]/g, '?');
}

function danish(string) {
	return string.replace(/\b(apple|blueberry|cherry)\b/, 'danish');
}

function formatDate(dateString) {
	return dateString.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3.$2.$1');
}

// alternatively:

function formatDate(dateString) {
	return dateString.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1');
}

function formatDate2(dateString) {
	return dateString.replace(/^(\d\d\d\d)([\-\/])(\d\d)\2(\d\d)$/, '$4.$3.$1');
}


