/\s...\s/

// 'and' and 'cat' match, because they have spaces on either side fo the words.
// what's more surprising is that 'the' matches here because the newline between
// the first and second lines of text isbeing matched as a whitespace character.

// 2. 'Doc' would not match because there is no whitespace before it. 'red' doesn't
// match either because the whitespace is would have used to match the pattern is
// being used by 'big'. 'box' also does not fit the profile because it is whitespace
// followed by 4 characters instead. 'Hup' also deals with this same issue because it
// has 4 characters after the newline character. finally '2 3' does match because space
// characters are still considered a character when using the any character shortcut (.)

// Their answer:

// Doc is not included since Doc isn't preceded by any whitespace.
// big is included since big is 3 characters that are both preceded and
// followed by whitespace.
// red is not included since the space character that precedes red was 
// "consumed" when " big " was matched; that space is no longer available
// for matching once it has been matched.
// box is not included because box is followed by a period instead of whitespace.
// Hup is not included because Hup is followed by an exclamation point.
// 2 3 is included is 2 3 is 3 characters long and is both preceded and followed by
// whitespace.

/\s\h\h\h\h\s/

// I used the ruby solution. JavaScript's solution will be:

/\s[\dA-F][\dA-F][\dA-F][\dA-F]\s/i

// JavaScript solution cannot use \h, but needs to use [\dA-F] instead or [0-9A-F]. We 
// apply the i option to make the match case insensitive.

/[^[\W]0-9_][^[\W]0-9_][^[\W]0-9_]/

// They were trying to be sneaky. I assumed they wanted us to use the character classes
// and made it overly complex.

/[a-z][a-z][a-z]/i

// Closest thing to letters is the /\w/ shortcut but that also matches digits and underscores.