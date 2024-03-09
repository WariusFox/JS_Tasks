"use strict";

// Tapsiriq nomre 1:
// For loop-dan istifade ederek console-a 1-den 10-a qeder ededler cixsin.

// for (let i = 0; i <= 10; i++) {
//   console.log(`Eded ${i}`);
// }

// for (let j = 10; j >= 0; j--) {
//   console.log(`Eded ${j}`);
// }

// Tapsiriq 2:
// var arr = [13,23,12,45,22,48,66,100]
// For loop istifade ederek bu array-in icinden yalniz cut ededleri secin ve console-a cixardin

// let arr = [13, 23, 12, 45, 22, 48, 66, 100];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(`Cut Ededler ${arr[i]}`);
//   }
// }

// Tapsiriq nomre 3:
// Tapsiriq 2-nin davami olaraq, hemen arraydeki cut ededleri yeni bos array-a push edin.

// let cutEdedler = [];

// let arr = [13, 23, 12, 45, 22, 48, 66, 100];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     cutEdedler.push(arr[i]);
//   }
// }
// console.log(cutEdedler);

// Tapsiriq nomre 4:
// Tapsiriq 2-deki array-den for loop istifade ederek cut edeleri silin.

// let arr = [13, 23, 12, 45, 22, 48, 66, 100];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     arr.splice(i, 1);
//     i--;
//   }
// }
// console.log(arr);

// Tapsiriq 5:
// var arr = [23,56,4,78,5,63,45,210,56]
// BU array-den 78 ededini loop istifade ederek silin.

// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];

// let silineliEded = 78;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === silineliEded) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// Tapsiriq 6:
// var arr = [[1, 2], [3, 4], [5, 6]]  bu array-in icindeki reqemleri console-da (1,2,3,4,5,6) bu formada gorsenmelidirler

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let str = "(";
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     str += arr[i][j];
//     if (i !== arr.length - 1 || j !== arr[i].length - 1) {
//       str += ",";
//     }
//   }
// }
// str += ")";
// console.log(str);

// Tapsiriq 7:
// 435389 ededindeki reqemlerin cemini tapin. Yalniz for loop-u ile

// let number = 435389;
// let sum = 0;

// for (let i = number; i > 0; i = parseInt(i / 10)) {
//   let lastDigit = i % 10;
//   sum += lastDigit;
// }

// console.log(sum);

// Tapsiriq 8:
// var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123]
// bu arrayin icindeki en boyuk ededi tapin.

let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];

let maxNumber = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNumber) {
    maxNumber = arr[i];
  }
}

console.log(maxNumber);
