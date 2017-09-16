/\bb[a-z]*e\b/

/.*\?$/

// My solution matches but they suggest:

/^.*\?$/

// Note the user of .*; you will see this a lot in regex. it matches any sequence
// of characters, but, by defeault does not match a newline character. it's how
// you can ignroe everything between two points when matching.

// note that the \? needs to be escaped since we want to match a literal ?

/^.+\?$/

// The .+ pattern makes the regex match at least one character before it attempts to
// match the ?.

/^https?:\/\/[\S]*$/

// I only had the brackets because I was originally intending to use ^/s, until I
// realized that it was unnecssary because \S accomplishes the same goal.

// the regex begins with a line anchor, ^, and then the http part of the 
// URL followed by an optional s. Next, we have the : and the two / 
// characters (both / characters must be \ escaped) we then have the rest
// of the URL, which we achieve by matching a string on non-whitespace characters.
// finally we need an explicit line anchor$ to prevent matching a URL that isn't
// at the end of the line.

/^\s*https?:\/\/\S*\s*$/

/\bhttps?:\/\/\S*\b/

/\b\w*i\w*i\w*i\w*\b/

// I used this solution with [a-z] and the i option instead because I assuemd that they
// wanted actual words. Smarter solution would have been to use the a range with quantifier
// with an additional \w*, like so:

/\b(\w*i){3}\w*\b/

// Their solutions are to set to anchor themselves to word boundaries. each \w*i matches a
// a sequence of 0 or more word characters followed by the letter i. By concatenating three
// of these together, and then adding one more \w* to the end we get a regex that matches any
// word with 3 is.

// alternate solution is similar but it uses the {3} quantifier to perform the 3 occurences
// part of the match. This quantifier is applied to (\w*i) which uses grouping parentheses
// to treat \w*i as a single pattern for use by {3}.

// I used:

/\b\w+\b\W*$/

// better solution might have been:

/\b\S+\s*$/

// which uses a word boundary followed by one or more non-whitespace characters. followed by any
// number of whitespace chracters and then the end of the string. I don't know if this really is
// indicative of the solution considering that words are comprised of any sequence of non-whitespace 
// characters, yet this solution will include whitespace at the end of words. There is no second \b
// because the end of the string is the end of the boundary.

/^,(\d+,){3,6}$/

/^(\d+,?){3,6}$/

// My solution worked for this problem but seemed to cause a problem when alternation was used.

/^(\d+,){2,5}\d+$/

// this checks to see if the digits exist, followed by a comma for a range of {2,5}. Add additional
// pattern is concatenated to check that after this range, a digit of one or more exists followed by
// the end of the string.

/(^(\d+,){2}\d+$|^(\d+,){5,}\d+$)/

// I got the same solution as their first one. They also had:

/^(\d+,){2}((\d+,){3,})?\d+$/

// There is no simple way to say something like 3 occurence or 6 or more occurences. We have two basic
// approraches we can take instead: either use alternation, or use the ? quantifier to make part of the
// pattern optional.

// if we break up the first solution we can see:

// /
// 	(
// 		^(\d+,){2}\d+$
// 		|
// 		^(\d+,){5,}\d+$
// 	)
// /x

// which groups for alternation, matches exactly 3 numbers on a line *or*
// matches 6 or more numbers on a line.
// alternate solution:

// alternate solution uses the ? quantifier instead. breaking it down we see:

// /
// 	^
// 	(\d+,){2}
// 	(
// 		(\d+,{3,})
// 	)?
// 	\d+
// 	$
// /x

// Which looks at the start of the line for 2 numbers, followed by at least
// 3 more numbers that are optional followed by one last number and finally
// the end of the line

// There is the 'x' option on broken out patterns. This is a Ruby specific option
// that is useful when you have an extremely complex regex. It lets you write a regex
// over several lines, and put comments on each line. SEe the Ruby Regexp documentation
// for more information.

// In a real program you may isntead choose to use two separate regex:

// if text.match(/^(\d+,){2}\d+$/) || text.match(/^(\d+,){5,}\d+$/).

// This is clearer but not always practical.

/<h1>.*?<\/h1>/

// I knew I needed a lazy quantifier but I had trouble undersatnding the problem statement
// especially given the examples that were provided.

// If they had given the example that they used in the solution, I think I would have solved this
// though I did get 90% of the way there.

// The lazy quantifier will look for multiple matches (or the least amount of characters between the
// <h1></h1> tags). Using the default quantifier will grab any characters between the first <h1> and
// the last </h1>