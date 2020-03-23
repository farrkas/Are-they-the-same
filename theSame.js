// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(a1, a2) {
    //var wynik = a1.filter(el => !a2.map(el => Math.sqrt(el)).includes(el))
    if (a1.filter(el => !a2.map(el => Math.sqrt(el)).includes(el)).length > 0) return true;
    else return false;

    /* console.log(a1);
       console.log(wynik);
       console.log(wynik.includes(NaN)); */
}



var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
var a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
comp(a1, a2);