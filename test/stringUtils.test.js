const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('../src/stringUtils');

describe('Reverse String', () => {
    test('Stringa al contrario', () => {
        expect(reverseString('ciao')).toBe('oaic');
    });

    test('Ritorno di una stringa vuota', () => {
        expect(reverseString('')).toBe('');
    });

    test('Ritorno di un solo carattere', () => {
        expect(reverseString('a')).toBe('a');
    });
});

describe('Is Palindrome', () => {
    test('Stringa palindroma', () => {
        expect(isPalindrome('anna')).toBe(true);
    });
    test('Stringa non palindroma', () => {
        expect(isPalindrome('ciao')).toBe(false);
    });
});

describe('Truncate String', () => {
    test('Stringa più lunga del limite', () => {
        expect(truncateString('ciao mondo', 4)).toBe('ciao...');
    });

    test('Stringa vuota', () => {
        expect(truncateString('', 4)).toBe('');
    });
});

describe('Count Characters', () => {
    test('Contare i caratteri di una stringa', () => {
        expect(countCharacters('ciao')).toEqual({ c: 1, i: 1, a: 1, o: 1 });
    });

    test('Contare i caratteri di una stringa vuota', () => {
        expect(countCharacters('')).toEqual({});
    });
});