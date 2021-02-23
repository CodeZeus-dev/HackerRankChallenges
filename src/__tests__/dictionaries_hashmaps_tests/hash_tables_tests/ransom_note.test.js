'use strict';

const checkMagazine = require('../../../dictionaries_hashmaps/hash_tables/ransomNote');

describe('checkMagazine', () => {
  describe('testing single words against single-word magazine', () => {
    test('returns Yes if a single word input matches the magazine word', () => {
      expect(checkMagazine(['Mel'], ['Mel'])).toBe('Yes');
    });
    
    test('returns No if a single word input does not match the magazine word', () => {
      expect(checkMagazine(['Mel'], ['Constantine'])).toBe('No');
    });

    test('raises an Exception if either array is empty', () => {
      expect(() => {
        checkMagazine([], []);
      }).toThrow();
      expect(() => {
        checkMagazine(['Constantine'], []);
      }).toThrow();
      expect(() => {
        checkMagazine([], ['Constantine']);
      }).toThrow();
    });

    test('returns No if the case does not match', () => {
      expect(checkMagazine(['Mel'], ['mel'])).toBe('No');
    });
  });
});