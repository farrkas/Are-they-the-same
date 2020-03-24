// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(a1, a2) {
    if (a1 == null || a2 == null || a1 == undefined || a2 == undefined) return false;
    else if (a1.length <= 0 || a2.length <= 0) return false;
    else {
        var pierwiastki = a2.map(el => Math.sqrt(el));
        var wynik = pierwiastki.filter((el) => !a1.includes(el) );

        if (wynik = null || wynik.length <= 0) { console.log("true"); }
        else { console.log("false"); }

        console.log(a1);
        console.log(wynik);
    }
}

//Testing for 
a1 = [7, 97, 5, 84, 69];
a2 = [49, 9409, 25, 7056, 4761, 4761];
comp(a1, a2); // Expected: true