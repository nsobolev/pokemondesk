/* eslint-disable import/prefer-default-export */

export const toCapitalizeFirstLetter = (string: string) => {
  if (!string) throw new Error('Empty value.');
  if (typeof string !== 'string') throw new Error('Value is not string type');

  return `${string[0].toUpperCase()}${string.slice(1)}`;
};
