const createMultiplyTable = require('../main');

it ('should not return null when start number is smaller than or equal to the end number', () => {
    expect(createMultiplyTable(2, 2)).not.toBe(null);
    expect(createMultiplyTable(2, 3)).not.toBe(null);
});

it ('should return null when start number is larger than the end number', () => {
    expect(createMultiplyTable(3, 2)).toBe(null);
});
