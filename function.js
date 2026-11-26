// 1. Multiply 3 numbers (arguments must not be the same number)
function multiply(a, b, c) {
  if (a === b || b === c || a === c) {
    throw new Error("Arguments must not be the same number.");
  }
  return a * b * c;
}

// 2. Function expression to convert minutes to seconds
const convertToSeconds = function (minutes) {
  return minutes * 60;
};

// 3. Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// 4. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 5. Count vowels in a string (case-insensitive)
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// 6. Check if a number is prime
function isPrime(num) {
  if (num <= 1 || !Number.isInteger(num)) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Test calls (outside the functions)
console.log("1. Multiply:", multiply(2, 3, 4));
console.log("2. Seconds:", convertToSeconds(5));
console.log("3. Celsius:", fahrenheitToCelsius(77));
console.log("4. Reversed:", reverseString("hello"));
console.log("5. Vowels:", countVowels("Javascript"));
console.log("6. isPrime (2):", isPrime(2));
console.log("6. isPrime (9):", isPrime(9));
console.log("6. isPrime (17):", isPrime(17));
console.log("6. isPrime (1):", isPrime(1)); 