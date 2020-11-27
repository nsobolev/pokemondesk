import * as utils from './index';

describe('Utils functions', () => {
  describe('toCapitalizeFirstLetter', () => {
    test('Принимает строку и возвращает эту же строку с заглавной буквы', () => {
      expect(utils.toCapitalizeFirstLetter('pikachu')).toBe('Pikachu');
    });

    test('Принимает пустую строку и возвращает throw newError() с сообщением - Empty value.', () => {
      expect(() => utils.toCapitalizeFirstLetter('')).toThrowError(new Error('Empty value.'));
    });
  });
});
