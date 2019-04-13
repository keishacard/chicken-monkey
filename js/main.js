/*Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey". Use remainder operator (link)*/ 

console.log("main.js"); 
//testing console log 

for (let currentNumber = 1; currentNumber <= 100; currentNumber += 1) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("chicken-monkey");
    }
    else if (currentNumber % 5 === 0) {
        console.log("chicken");
    }
    else if (currentNumber % 7 ===0){
        console.log("monkey");
    }
    else {
        console.log(currentNumber);
    }
}


