/*
Given the string start, return reversed string result

Examples:
start: "reversal" result: "lasrever"

*/

'use strict';

// JS build in array reversal
const reverseString = (start) => {
   const result = start.split('');
   result.reverse();
   return result.join('');
}

module.exports = reverseString;
