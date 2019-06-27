const createMultiplyTable = require('../main');

it ('should return null when start number is larger than the end number', () => {
    expect(createMultiplyTable(3, 2)).toBe(null);
});