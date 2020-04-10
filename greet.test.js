const greet = require('./greet');

// Requirement 1
test('(1)   Tests non-null and non-shouting input.',() => {
    expect(greet('Allen')).toBe('Hello, Allen.');
})

// Requirement 2
test('(2)   Tests a null input.',() => {
    expect(greet()).toBe('Hello, my friend.');
})

// Requirement 3
test('(3)   Tests a shouting input',() => {
    expect(greet('ALLEN')).toBe('HELLO ALLEN!');
})

// Requirement 4
test('(4)   Tests passing in two names',() => {
    expect(greet(["Allen", "Alan"])).toBe('Hello, Allen and Alan.');
})

// Requirement 5
test('(5)   Tests passing more than two names',() => {
    expect(greet(["Allen", "Alan", "Alen"])).toBe('Hello, Allen, Alan, and Alen.');
})

// Requirement 6
test('(6)   Tests passing more than two names with one to be shouted',() => {
    expect(greet(["Allen", "ALAN", "Alen"])).toBe('Hello, Allen and Alen. AND HELLO ALAN!');
})

test('(6.1) Tests passing more than two names with two to be shouted',() => {
    expect(greet(["Allen", "ALAN", "Alen", "ELLEN"])).toBe('Hello, Allen and Alen. AND HELLO ALAN AND ELLEN!');
})

// Requirement 7
test('(7) Tests passing comma separated inputs',() => {
    expect(greet(["Allen", "ALAN", "Alen, ELLEN"])).toBe('Hello, Allen and Alen. AND HELLO ALAN AND ELLEN!');
})

// Requirement 8
test('(7) Tests passing escaped comma separated inputs',() => {
    expect(greet(["Allen", "ALAN", "\"Alen, ELLEN\""])).toBe('Hello, Allen and Alen, ELLEN. AND HELLO ALAN!');
})

