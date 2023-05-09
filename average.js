
var numbers = [23,54,32,6,87,9];
var sum = 0;
var average = 1;

for(var i = 0;i<numbers.length;i++) {
    sum += numbers[i];
}

average = sum/numbers.length;
average = Math.round(average);


console.log(average);