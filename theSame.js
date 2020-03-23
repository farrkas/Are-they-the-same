// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(a1, a2) {
    var wynik = a1.filter(x => x == a2.map(el => el % Math.sqrt(el)) == 0);
    console.log(wynik);
    if (a1 == null || a2 == null || a1.length <= 0 || a2.length <= 0) return false;
    else if (a1.filter(x => x = a2.map(el => el % Math.sqrt(el)) == 0).length > 0) { console.log("true"); return true; }
    else { console.log("false"); return false; }
}



/*
var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
var a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
comp(a1, a2);

var a1 = [97, 40, 35, 41, 42, 36, 26, 15];
var a2 = [9409, 1600, 1225, 1681, 1764, 1296, 676, 225];
comp(a1, a2); //true
*/

//Testing for 
a1 = [7, 97, 5, 84, 69];
a2 = [49, 9409, 25, 7056, 4761];
comp(a1, a2); // Expected: true

//Testing for 
a1 = [59, 48, 68];
a2 = [3481, 2304, 4624];
comp(a1, a2);
//It should work with random inputs too - Expected: true, instead got: false

//Testing for 
a1 = [66, 58, 100, 88, 8, 76, 92, 1];
a2 = [4356, 3364, 10000, 7744, 64, 5776, 8464, 1];
comp(a1, a2);
//It should work with random inputs too - Expected: true, instead got: false*/