const reverse = require('./StringReversal');

const start = 'reversal';
const result = reverse(start);
if (result !== "lasrever") {
        console.log("Reversal failed")
    } else {
        console.log("Reversal was successful")
}