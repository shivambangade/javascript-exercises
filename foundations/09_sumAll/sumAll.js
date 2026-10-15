const sumAll = function (a, b) {
    if (
        !Number.isInteger(a) || a <= 0 ||
        !Number.isInteger(b) || b <= 0
    )
        return 'ERROR';
    if (b > a) {
        let n1 = (a * (a + 1)) / 2;
        let n2 = (b * (b + 1)) / 2;
        return n2 - n1 + a;
    }

    let n1 = (a * (a + 1)) / 2;
    let n2 = (b * (b + 1)) / 2;

    return n1 - n2 + b;


};

// Do not edit below this line
module.exports = sumAll;
