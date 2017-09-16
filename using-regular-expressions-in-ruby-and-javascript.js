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

// I got their second solution. They opted to split it up into two smaller problems:
// one that handles dates in 2016-05-17 format and one that handles 2016/05/17 format,
// which is what both our primary solutions do. The only possible gotcha here si that 
// you need to remember to escape the / characters in regex.

// can also be solved with just one regex, as in the alternate solution, but at the 
// expense of a more complex regex and lower readability. The regex adds one additional
// capturing group to capture the first - or / and uses a \2 backreference to refer
// back to the capture in the regex. Hwoever this additional capturing group modifies the
// backreference numbers for the month and day components of the date so we now need to
// refer to them as $4 and $3. IN ruby this might be a good time to look up how to use 
// named capturing groups.

// Alternate solution uses variables to store regex. done for readability and to show 
// that they are no different from any other object; they can be manipulated and passed
// around as needed.
