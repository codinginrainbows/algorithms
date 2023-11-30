const main = () => {
  const limit = 1000;

  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    if (num % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  let primeSum = 0;

  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) {
      primeSum += number;
    }
  }

  return primeSum;
};

const result = main();
console.log(result);
