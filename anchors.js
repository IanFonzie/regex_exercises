/^The\b/

// If you used \A this doesn't work on rubular because text
// on rubular is treated as a single large string so you need 
// to use ^ in this case.

/\bcat$/

// /\bcat\z/ won't work for the same reasons emtnioned in the first
// problem

/\b[a-z][a-z][a-z]\b/i

// My solution:

/^(A|The)\s\b[a-z][a-z][a-z][a-z]\b\s(dog|cat)/i

// Their solution

/^(A|The) [a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z] (dog|cat)$/

// Solution employs alternation from the first chapter in this section
// to define the words that occur at the beginning and ending of each line,
// and includes a match for a 4-letter word in the middle. We have assumed 
// that the middle word can contain both uppercase and lowercase letters
// so we have to specify [a-zA-Z] for each of the 4 letters. We don't use \w
// because the problem explicitly asked for 4 LETTER words. 

// a proper Ruby solution would use \A and \z instead of ^ and $, but to allow
// for rubular limitations, we use ^ and $ instead.

// my solution also worked but was a bit verbose.