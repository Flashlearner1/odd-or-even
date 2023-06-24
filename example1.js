const prompt = require("prompt-sync")({sigint: true});

// Detect if a number is even or odd
x = parseInt(prompt("Enter a number: "));

//The number is even if its divisible by 2 without remainder, else its an odd number
if( x % 2 == 0) {
    console.log("This is an even number");
}
else{
    console.log("This is an odd number")
}