const dictionary = require('../dictionary');
describe('dictionary', () => {

    // Test: an empty string will return an empty object
    test('should return an empty object for empty string', () =>{
        expect(dictionary('')).toEqual({})
    });

    test('should count 1 for one word', () => {
      expect(dictionary('the')).toEqual({ the: 1})
    });

    test('should count 2 for two words that are the same', () => {
      expect(dictionary('the the')).toEqual({ the: 2})
    });
});
