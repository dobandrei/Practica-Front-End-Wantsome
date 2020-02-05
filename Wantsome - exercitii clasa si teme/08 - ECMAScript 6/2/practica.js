// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p) {
    let myArray = Array.from(n.toString()).map(Number);
    let sumPow = 0;
    let productPow = 0;
    let j = p;
    while (p < j + myArray.length) {
        for (let i = 0; i < myArray.length; i++) {
            sumPow += productPow;
            productPow = myArray[i];
            for (let f = 1; f < p; f++) {
                productPow *= myArray[i];
            }
            p++;
        }
    }
    sumPow += productPow;
    if (Number.isInteger(sumPow / n)) {
        return sumPow / n;
    } else {
        return -1;
    }
}

