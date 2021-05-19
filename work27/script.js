"use strict";

// //Какое будет выведено значение: 
// let x = 5; 
// alert( x++ ); //5

// //Чему равно такое выражение: 
// let y = [ ] + false - null + true;
// console.log(y); //NaN

//Что выведет этот код: 
// let y = 1; 
// let x = y = 2; 
// alert(x); //2

// //Чему равна сумма 
// let a = [ ] + 1 + 2;
// console.log(a); //12

// //Что выведет этот код: 
// alert( "1"[0] );

// //Чему равно 
// console.log(2 && 1 && null && 0 && undefined); // null

// console.log(!!( 1 && 2 ) === (1 && 2)); //false

// alert( null || 2 && 3 || 4 ); 

// for (let i = 0; i < 2; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// for ( let i = 0; i < 5; i++) {
//     for (let j = 5; j < 25; j++) {
//         console.log(i * j);
//     }
// } // 100

// if(5 % 2 > 2) {
//     console.log(1);
// } else if (7 % 1 >= 0) {
//     console.log(1);
// } else {
//     console.log(2);
// } //1

// let i = 1;
// while (i++ < 3) {
//     console.log(i);
//     i++;
// } //2

// let color = 'yellow'
// switch (color) {
//     case 'red':
//     case 'yellow':
//         console.log('yellow');
// }//yellow

let arr = [7, 5, 4, 10];
for (let i = 0; i < 3; i++) {
    if (i > 2) {
        console.log(arr[i]);
    }
} // пустая строка

// for (let i = 0; i < 234; i++) {
//     for (let j = 0; j < 334; j++) {
//         for (let z = 0; z < 112; z++) {
//             console.log(i + j + z);
//         }
//     }
// } // ~1

let nam = ['J', 's', 'h', 'n'] 
for (let i = 0; i < nam.length; i++) {
    if (nam[i] > 'o') {
        nam[i] = 'o'
    }
}









