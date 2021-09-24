/**
 * This method is checking if number is prime or not
 * @param number {number} - checking number
 * @returns {boolean}
 */
export const isPrimeNumber = (number) => {
    if (number < 0 || !Number.isInteger(number)) {
        throw new Error('Input must be natural number equal or greater than 0!');
    }

    let response = number > 1;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            response = false;
            break;
        }
    }

    return response;
}

/**
 * This method will return Fibonacci number with requested index
 * @param index {number} - index of Fibonacci number
 * @returns {number} - requested Fibonacci number
 */
export const getFibonacciNumber = (() => {
    const cache = [0, 1];

    return (index) => {
        const isNegativeIndex = index < 0;

        // for calculating we use only positive numbers, to simplify algorithm
        index = Math.abs(index);

        let currentIndex = cache.length - 1,
            currentNumber,
            number1,
            number2,
            response;

        // check cache, get from it or calculate
        if (cache[index] === undefined) {
            while (currentIndex < index) {
                number1 = cache[cache.length - 2];
                number2 = cache[cache.length - 1];
                currentNumber = number1 + number2;

                cache.push(currentNumber);

                currentIndex++;
            }

            response = currentNumber;
        } else {
            response = cache[index];
        }

        // consider negative index
        if (isNegativeIndex) {
            response = response * Math.pow(-1, index + 1);
        }

        return response;
    };
})();

/**
 * This method will return next prime number from Fibonacci series
 * @param fromNumber {number} - from what number we should search
 * @returns {number}
 */
export const nextPrimeFibonacci = (fromNumber) => {
    if (fromNumber < 0 || !Number.isInteger(fromNumber)) {
        throw new Error('Input must be natural number equal or greater than 0!');
    }

    // Our first coincidence is 2, so let's start from this point
    let response = 2;
    let fibonacciIndex = 3;

    while (true) {
        const fibonacciNumber = getFibonacciNumber(fibonacciIndex);

        if (fibonacciNumber > fromNumber && isPrimeNumber(fibonacciNumber)) {
            response = fibonacciNumber;
            break;
        } else {
            fibonacciIndex++;
        }
    }

    return response;
};