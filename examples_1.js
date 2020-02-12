// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.

function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 100) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}

printNumbersDivisibeByThree();


// Write a method that acceps an array of strings and prints out every other string.

function printEveryOtherItem(strings) {
    var index = 0; 
    strings.forEach(function(string) {
      if (index % 2 === 0) {
        console.log(string);
      }
      index += 1;
    });
}

printEveryOtherItem(["a", "b", "c", "d", "e"]);


//Write a method that acceps an array of numbers and returns the sum. 

function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}
console.log(computSum([2, 4, 5]));


// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for NYC (8.4 million) and SF (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}

var cityPopulations = {chi: 2700000};
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000;
console.log(cityPopulations);