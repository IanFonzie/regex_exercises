/K/

/h/i

// might use the alternative when we are adding (h|H) to a pattern and only want
// to look for Hs that are case insensitive i.e. /(h|H)im/

/dragon/

/(banana|orange|apple|strawberry)/

/( |.)/

/(blue|black)berry/

// concatenation works with patterns, not just characters. Thus we can concatenate
// (blue|black) with the pattern berry to predocue the final result. regex doesn'st
// match black berry because space characters are still considered part of a pattern