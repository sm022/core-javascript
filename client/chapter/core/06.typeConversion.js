/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// String() 
// number -> '2022'
const YEAR = 2022;

console.log(typeof String(YEAR));

// undefined -> 'undefined'
// null -> 'null'

let days = null;
console.log(String(undefined));

// boolean -> 'true' or 'false'
let isKind = true; 
console.log(isKind + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// Number()

// undeinfed -> NaN
console.log(Number(undefined));

// null -> 0
let money = null;
console.log(Number(money));

// boolean -> true : 1 / false : 0
// *1
// /1
// +

let cutie = false;
console.log(+cutie)

// string 숫자형 문자

let num = '     123'
console.log(num * 1);


// numeric string
let width = '320px';
console.log(parseInt(width,10));
// console.log(parseFloat(width,10)); -> 소숫점 날라가지 않게

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' -> false
// 위에 나열한 것 이외의 것들 

console.log(Boolean(123));
console.log(!!null);