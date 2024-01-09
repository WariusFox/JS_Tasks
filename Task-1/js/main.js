"use strict";

/*Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
=>let bookPrice = 750;
=>let bookAmount = 14; */

let bookPrice = 750;
let bookAmount = 14;

let totalValue = bookPrice * bookAmount;

console.log(`Depodaki bütün kitabların ümumi dəyəri: ${totalValue} Azn`);
// alert(`Depodaki bütün kitabların ümumi dəyəri: ${totalValue} Azn`);

/* İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı 
günlərin sayını göstərən proqram yazın. */

/* Ədədlər üzərində əməliyyatları yerinə yetirin.
num dəyişənində iki rəqəmli ədəd saxlanılır. 
Konsola çıxaran belə proqram yazın:
- Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
- 3-ə bölünmədən qalan bu ədədin qalığını. */

const num = prompt("İki rəqəmli ədədi daxil edin:");
const fifthPower = num ** 5;
const remainder = num % 3;
console.log(
  num + " ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyəti: " + fifthPower
);
console.log(num + " ədədinin 3-ə bölünmədən qalanı: " + remainder);

/* Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. 
Tanışlığımıza çox şadam!”
firstName dəyişənində istifadəçinin adı, 
lastName — dəyişənində isə soyadı saxlanır.
Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”
=>let firstName = 'Alan';
=>let lastName = 'Turing'; */

let firstName = "Alan";
let lastName = "Turing";

console.log(`Sizin adiniz ${firstName} ${lastName}.Tanisligimiza cox sadam!`);
// alert(`Sizin adiniz ${firstName} ${lastName}.Tanisligimiza cox sadam!`);

/* Şablon mətnlərdən istifadə edərək, 
konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]”.
firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır. */

console.log(`Sizi bir daha görməyimizə şadıq ${firstName} ${lastName}`);
// alert(`Sizi bir daha görməyimizə şadıq ${firstName} ${lastName}`);
