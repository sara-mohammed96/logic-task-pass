// Q2/Write a program to find all prime numbers up to a given range of numbers?

const isPrimeNumber = (number) => {
    let count = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) count++;
  
      if (count === 3) return false;
    }
    return true;
  };
  
  const logPrimeNumbersBetween = (firstNumber, lastNumber) => {
    for (let i = firstNumber; i <= lastNumber; i++) {
      if (isPrimeNumber(i)) console.log(`${i} it is a prime number`);
    }
  };
  
  logPrimeNumbersBetween(500, 600);
  