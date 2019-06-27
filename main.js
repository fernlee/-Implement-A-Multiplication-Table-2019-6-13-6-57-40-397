function isNumberOutRange(number) {
    return 1 > number || 1000 < number;
}

function createMultiplyTable(start, end) {
    if (start > end) {
        return null;
    }
    if (isNumberOutRange(start) || isNumberOutRange(end)) {
        return null;
    }
    let result = "";
    for (let i = 0; i <= end-start; i++) {
        for (let j = start; j <= start+i; j++) {
            result += `${j}*${start+i}=${(start+i)*j}\t`;
        }
        result += "\n";
    }
    return result;
}

module.exports = createMultiplyTable;