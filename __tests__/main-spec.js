const createMultiplyTable = require('../main');

it ('should return null when start number is larger than the end number', () => {
    expect(createMultiplyTable(3, 2)).toBe(null);
});

it ('should return null when start number and the end number out of range from 1 to 1000', () => {
    expect(createMultiplyTable(0, 1000)).toBe(null);
    expect(createMultiplyTable(1, 1001)).toBe(null);
});

it ('should not return multiply table when start number is smaller than or equal to the end number', () => {
    expect(createMultiplyTable(2, 2)).toBe("2*2=4\t\n");
    expect(createMultiplyTable(2, 3)).toBe("2*2=4\t\n2*3=6\t3*3=9\t\n");
});
