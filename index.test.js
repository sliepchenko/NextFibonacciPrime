import {equal, throws} from 'assert';

import {isPrimeNumber, getFibonacciNumber, nextPrimeFibonacci, getFib} from './index';

describe('isPrimeNumber', () => {
    describe('Positive case', () => {
        it('2 is prime number', () => equal(isPrimeNumber(2), true));
        it('3 is prime number', () => equal(isPrimeNumber(3), true));
        it('5 is prime number', () => equal(isPrimeNumber(5), true));
        it('7 is prime number', () => equal(isPrimeNumber(7), true));
        it('11 is prime number', () => equal(isPrimeNumber(11), true));
        it('13 is prime number', () => equal(isPrimeNumber(13), true));
        it('17 is prime number', () => equal(isPrimeNumber(17), true));
        it('19 is prime number', () => equal(isPrimeNumber(19), true));
        it('23 is prime number', () => equal(isPrimeNumber(23), true));
        it('29 is prime number', () => equal(isPrimeNumber(29), true));
        it('31 is prime number', () => equal(isPrimeNumber(31), true));
        it('37 is prime number', () => equal(isPrimeNumber(37), true));
        it('41 is prime number', () => equal(isPrimeNumber(41), true));
        it('43 is prime number', () => equal(isPrimeNumber(43), true));
        it('47 is prime number', () => equal(isPrimeNumber(47), true));
        it('53 is prime number', () => equal(isPrimeNumber(53), true));
        it('59 is prime number', () => equal(isPrimeNumber(59), true));
        it('61 is prime number', () => equal(isPrimeNumber(61), true));
        it('67 is prime number', () => equal(isPrimeNumber(67), true));
        it('71 is prime number', () => equal(isPrimeNumber(71), true));
        it('73 is prime number', () => equal(isPrimeNumber(73), true));
        it('79 is prime number', () => equal(isPrimeNumber(79), true));
        it('83 is prime number', () => equal(isPrimeNumber(83), true));
        it('89 is prime number', () => equal(isPrimeNumber(89), true));
        it('97 is prime number', () => equal(isPrimeNumber(97), true));
    });

    describe('Negative case', () => {
        it('1 is not prime number', () => equal(isPrimeNumber(1), false));
        it('4 is not prime number', () => equal(isPrimeNumber(4), false));
        it('6 is not prime number', () => equal(isPrimeNumber(6), false));
        it('8 is not prime number', () => equal(isPrimeNumber(8), false));
        it('12 is not prime number', () => equal(isPrimeNumber(12), false));
        it('14 is not prime number', () => equal(isPrimeNumber(14), false));
        it('18 is not prime number', () => equal(isPrimeNumber(18), false));
        it('20 is not prime number', () => equal(isPrimeNumber(20), false));
        it('24 is not prime number', () => equal(isPrimeNumber(24), false));
        it('30 is not prime number', () => equal(isPrimeNumber(30), false));
        it('32 is not prime number', () => equal(isPrimeNumber(32), false));
        it('38 is not prime number', () => equal(isPrimeNumber(38), false));
        it('42 is not prime number', () => equal(isPrimeNumber(42), false));
        it('44 is not prime number', () => equal(isPrimeNumber(44), false));
        it('48 is not prime number', () => equal(isPrimeNumber(48), false));
        it('54 is not prime number', () => equal(isPrimeNumber(54), false));
        it('60 is not prime number', () => equal(isPrimeNumber(60), false));
        it('62 is not prime number', () => equal(isPrimeNumber(62), false));
        it('68 is not prime number', () => equal(isPrimeNumber(68), false));
        it('72 is not prime number', () => equal(isPrimeNumber(72), false));
        it('74 is not prime number', () => equal(isPrimeNumber(74), false));
        it('80 is not prime number', () => equal(isPrimeNumber(80), false));
        it('84 is not prime number', () => equal(isPrimeNumber(84), false));
        it('90 is not prime number', () => equal(isPrimeNumber(90), false));
        it('98 is not prime number', () => equal(isPrimeNumber(98), false));
    });

    describe('Big numbers', () => {
        it('999\'999\'937 is prime number', () => equal(isPrimeNumber(999999937), true));
        it('1\'000\'000\'000 is not prime number', () => equal(isPrimeNumber(1000000000), false));
        it('1\'499\'999\'957 is prime number', () => equal(isPrimeNumber(1499999957), true));
    });
});

describe('getFibonacciNumber', () => {
    describe('Positive case', () => {
        it('-5n Fibonacci number is 5', () => equal(getFibonacciNumber(-5), 5));
        it('-4n Fibonacci number is -3', () => equal(getFibonacciNumber(-4), -3));
        it('-3n Fibonacci number is 2', () => equal(getFibonacciNumber(-3), 2));
        it('-2n Fibonacci number is -1', () => equal(getFibonacciNumber(-2), -1));
        it('-1n Fibonacci number is 1', () => equal(getFibonacciNumber(-1), 1));

        it('0n Fibonacci number is 0', () => equal(getFibonacciNumber(0), 0));
        it('1n Fibonacci number is 1', () => equal(getFibonacciNumber(1), 1));
        it('2n Fibonacci number is 1', () => equal(getFibonacciNumber(2), 1));
        it('3n Fibonacci number is 2', () => equal(getFibonacciNumber(3), 2));
        it('4n Fibonacci number is 3', () => equal(getFibonacciNumber(4), 3));
        it('5n Fibonacci number is 5', () => equal(getFibonacciNumber(5), 5));
        it('10n Fibonacci number is 55', () => equal(getFibonacciNumber(10), 55));
        it('11n Fibonacci number is 89', () => equal(getFibonacciNumber(11), 89));
        it('12n Fibonacci number is 144', () => equal(getFibonacciNumber(12), 144));
        it('13n Fibonacci number is 233', () => equal(getFibonacciNumber(13), 233));
        it('14n Fibonacci number is 377', () => equal(getFibonacciNumber(14), 377));
        it('15n Fibonacci number is 610', () => equal(getFibonacciNumber(15), 610));
    });

    describe('Big numbers', () => {
        it('100n Fibonacci number is 354\'224\'848\'179\'262\'000\'000', () => equal(getFibonacciNumber(100), 354224848179262000000));
        it('1000n Fibonacci number is 4.346655768693743e+208', () => equal(getFibonacciNumber(1000), 4.346655768693743e+208));
    });
});

describe('nextPrimeFibonacci', () => {
    describe('Positive case', () => {
        it('Next prime number from 1 in Fibonacci series is 2', () => equal(nextPrimeFibonacci(1), 2));
        it('Next prime number from 10 in Fibonacci series is 13', () => equal(nextPrimeFibonacci(10), 13));
        it('Next prime number from 25 in Fibonacci series is 89', () => equal(nextPrimeFibonacci(25), 89));
        it('Next prime number from 50 in Fibonacci series is 89', () => equal(nextPrimeFibonacci(50), 89));
        it('Next prime number from 100 in Fibonacci series is 233', () => equal(nextPrimeFibonacci(100), 233));
        it('Next prime number from 250 in Fibonacci series is 1\'597', () => equal(nextPrimeFibonacci(250), 1597));
    });

    describe('Big numbers', () => {
        it('Next prime number from 10\'000 in Fibonacci series is 28\'657', () => equal(nextPrimeFibonacci(10000), 28657));
        it('Next prime number from 100\'000 in Fibonacci series is 514\'229', () => equal(nextPrimeFibonacci(100000), 514229));
        it('Next prime number from 1\'000\'000 in Fibonacci series is 433\'494\'437', () => equal(nextPrimeFibonacci(1000000), 433494437));
    });
});