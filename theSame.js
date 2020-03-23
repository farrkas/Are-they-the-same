// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(a1, a2) {
    if (a1 == null || a2 == null) return false;
    else if (a1.filter(el => a2.map(el => Math.sqrt(el)) % el == 0).length > 0) {console.log("true"); return true;}
    else  { console.log("false"); return false;}
    
}



/*
var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
var a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
comp(a1, a2);
*/
var a1 = [97, 40, 35, 41, 42, 36, 26, 15];
var a2 = [9409, 1600, 1225, 1681, 1764, 1296, 676, 225];
comp(a1, a2);

/*
Testing for [7, 97, 5, 84, 69] and [49, 9409, 25, 7056, 4761]
It should work with random inputs too - Expected: true, instead got: false

Testing for [59, 48, 68] and [3481, 2304, 4624]
It should work with random inputs too - Expected: true, instead got: false

Testing for [66, 58, 100, 88, 8, 76, 92, 1] and [4356, 3364, 10000, 7744, 64, 5776, 8464, 1]
It should work with random inputs too - Expected: true, instead got: false*/