import * as utils from './index';

describe('Utils functions', () => {
  describe('toCapitalizeFirstLetter', () => {
    test('Должна принимать строку и возвращать эту же строку с заглавной буквы', () => {
      expect(utils.toCapitalizeFirstLetter('pikachu')).toBe('Pikachu');
    });
  });
});
