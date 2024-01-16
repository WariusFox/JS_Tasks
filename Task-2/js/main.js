"use strict";

/* İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı 
günlərin sayını göstərən proqram yazın. */

// let a = +prompt("Dogum ilinizi daxil edin");
// let b = 2024;
// let c = (b - a) * 365;
// alert("Yasadiginiz gun sayi " + c);

/* Ədədlər üzərində əməliyyatları yerinə yetirin.
num dəyişənində iki rəqəmli ədəd saxlanılır. 
Konsola çıxaran belə proqram yazın:
- Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
- 3-ə bölünmədən qalan bu ədədin qalığını. */

// let num = 10;
// let besinciDerece = num ** 5;
// let qaliq = num % 3;

// console.log(`${num} "ədədinin beşinci dərəcə qüvvəti:" ${besinciDerece}`);
// console.log(`${num} "ədədinin 3-ə bölünmədən qalığı:" ${qaliq}`);

/* Şablon mətnlərdən istifadə edərək, 
konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]”.
firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır. */

// let firstName = prompt("Adinizi daxil edin");
// let lastName = prompt("Soyadinizi daxil edin");
// alert(`Sizi bir daha görməyimizə şadıq ${firstName} ${lastName}`);

/* 1. heftenin gunlerini tapan proqram yaziriq
    prompt ile heftenin necenci gunu oldugunu aliriq (1-7 arasinda reqem olmalidir)
    eger deyer === 1 ekrana yazdirin bu gun bazar ertesidir ve.s

bu taski hem if else hemde  switch case ile yazin */

// let hefteGunu = prompt("Heftenin gununu daxil edin", "1-7 arasi");

// if (hefteGunu >= 1 && hefteGunu <= 7) {
//   if (hefteGunu == 1) {
//     console.log("Bu gün bazar ertəsidir.");
//   } else if (hefteGunu == 2) {
//     console.log("Bu gün çərşənbə axşamıdır.");
//   } else if (hefteGunu == 3) {
//     console.log("Bu gün çərşənbə günüdür.");
//   } else if (hefteGunu == 4) {
//     console.log("Bu gün çaxırşənbə günüdür.");
//   } else if (hefteGunu == 5) {
//     console.log("Bu gün cümə axşamıdır.");
//   } else if (hefteGunu == 6) {
//     console.log("Bu gün cümə günüdür.");
//   } else if (hefteGunu == 7) {
//     console.log("Bu gün şənbə günüdür.");
//   }
// } else {
//   console.log("Xahis olunur gunu duzgun daxil edin");
// }

// let hefteGunu = +prompt("Həftə gününü daxil edin");
// switch (hefteGunu) {
//   case 1:
//     console.log("Bu gün bazar ertəsidir.");
//     break;
//   case 2:
//     console.log("Bu gün çərşənbə axşamıdır.");
//     break;
//   case 3:
//     console.log("Bu gün çərşənbə günüdür.");
//     break;
//   case 4:
//     console.log("Bu gün çaxırşənbə günüdür.");
//     break;
//   case 5:
//     console.log("Bu gün cümə axşamıdır.");
//     break;
//   case 6:
//     console.log("Bu gün cümə günüdür.");
//     break;
//   case 7:
//     console.log("Bu gün şənbə günüdür.");
//     break;
//   default:
//     console.log("Xahiş olunur düzgün həftə günü rəqəmini daxil edin.");
// }

/* 2. ilin aylarini tapan proqram yaziriq
    prompt ile ilin necenci ayi oldugunu aliriq (1-12 arasinda reqem olmalidir)
    eger deyer === 1 ekrana yazdirin bu ay yanvar ayidir ve.s

bu taski hem if else hemde  switch case ile yazin */

// let ilinAylari = +prompt("Ayi daxil edin 1-12 arasinda regem olmalidir");

// if (ilinAylari >= 1 && ilinAylari <= 12) {
//   if (ilinAylari === 1) {
//     alert("Bu Yanvar ayidir");
//   } else if (ilinAylari === 2) {
//     alert("Bu Fevral ayidir");
//   } else if (ilinAylari === 3) {
//     alert("Bu Mart ayidir");
//   } else if (ilinAylari === 4) {
//     alert("Bu Aprel ayidir");
//   } else if (ilinAylari === 5) {
//     alert("Bu May ayidir");
//   } else if (ilinAylari === 6) {
//     alert("Bu Iyun ayidir");
//   } else if (ilinAylari === 7) {
//     alert("Bu Iyul ayidir");
//   } else if (ilinAylari === 8) {
//     alert("Bu Avqust ayidir");
//   } else if (ilinAylari === 9) {
//     alert("Bu Sentyabr ayidir");
//   } else if (ilinAylari === 10) {
//     alert("Bu Oktyabr ayidir");
//   } else if (ilinAylari === 11) {
//     alert("Bu Noyabr ayidir");
//   } else if (ilinAylari === 12) {
//     alert("Bu Dekabr ayidir");
//   }
// } else {
//   alert("12 den Yuxari Ay olmur:");
// }

// let ilinAylari = +prompt("Ayi daxil edin 1-12 arasinda regem olmalidir");
// switch (ilinAylari) {
//   case 1:
//     alert("Bu Yanvar ayidir");
//     break;
//   case 2:
//     alert("Bu Fevral ayidir");
//     break;
//   case 3:
//     alert("Bu Mart ayidir");
//     break;
//   case 4:
//     alert("Bu Aprel ayidir");
//     break;
//   case 5:
//     alert("Bu May ayidir");
//     break;
//   case 6:
//     alert("Bu Iyun ayidir");
//     break;
//   case 7:
//     alert("Bu Iyul ayidir");
//     break;
//   case 8:
//     alert("Bu Avqust ayidir");
//     break;
//   case 9:
//     alert("Bu Sentyabr ayidir");
//     break;
//   case 10:
//     alert("Bu Oktyabr ayidir");
//     break;
//   case 11:
//     alert("Bu Noyabr ayidir");
//     break;
//   case 12:
//     alert("Bu Dekabr ayidir");
//     break;
//   default:
//     alert("12 den Yuxari Ay olmur:");
// }

/* dersde yazdigimiz kimi gender yoxlayan proqram yazin
    bu taski hem if else hemde  switch case ile yazin */

// let a = prompt("adinizi daxil edin");
// let gender = prompt("k ve ya q secim edin");

// if (gender === "k" || gender === "K") {
//   alert(`Salam Cenab ${a}`);
// } else if (gender === "q" || gender === "Q") {
//   alert(`Salam Xanim ${a}`);
// } else {
//   alert("E R R O R");
// }

// let a = prompt("adinizi daxil edin");
// let gender = prompt("k ve ya q secim edin");

// switch (gender) {
//   case "k":
//   case "K":
//     alert(`Salam Cenab ${a}`);
//     break;
//   case "q":
//   case "Q":
//     alert(`Salam Xanim ${a}`);
//     break;
//   default:
//     alert("E R R O R");
// }

/* Bir party var.Bu partyde yaxsi qardaslar ve gozel xanimlar istirak edecek.Eger yas 18den boyukdurse ekrana yazilsin salam salam cenab ve ya xanim istifadeciden gelen ad */

// let yas = +prompt("Yasinizi daxil edin:");

// if (yas > 18) {
//   let cins = prompt("Cinsinizi daxil edin k/q");
//   let ad = prompt("Adinizi daxil edin");

//   if (cins === "k" || cins === "K") {
//     alert(`Salam Cənab ${ad}! Xoş gəlmisiniz.`);
//   } else if (cins === "q" || cins === "Q") {
//     alert(`Salam Xanim ${ad}! Xoş gəlmisiniz.`);
//   } else {
//     alert("Xahiş olunur düzgün cins daxil edin (k/q).");
//   }
// } else {
//   alert("Sizin yasiniz catmir gedin CS oynayin");
// }

/* istifadeciden alacaqlarimiz
name,gender,age
ve burda gender yoxlamasini if else ile age yoxlamasini ise ternary operatoru ile edin... */

// let ad = prompt("Adinizi daxil edin");
// let cins = prompt("Cinsiniz daxil edin k/q");
// let yas = +prompt("Yasinizi daxil edin");

// if (cins === "k" || cins === "K") {
//   console.log(`Salam ${ad}`);
// } else if (cins === "q" || cins === "Q") {
//   console.log(`Salam ${ad}`);
// } else {
//   console.log("Duzgun yazin");
// }

// let mesaj = yas > 18 ? "buraxilsin" : "buraxilamisin";
// console.log(mesaj);

/* ev almaga gedmisik.Evin kvadrati 2000den coxdurse ve evin qiymeti 99.999-dursa ve eynile valyuta azn-e  beraberdirse evi aliram
eks halda hec bir hal mene maraqli deyil.Evi almiram
makler deyilem.Alverciler narahat etmesin */

let evKvadrat = +prompt("kvadrati daxil edin");
let evQiymet = +prompt("qiymeti daxil edin");
let valyuta = confirm("qiymeti AZN-dir?");

if (evKvadrat > 2000 && evQiymet === 99.999 && valyuta) {
  alert("evi aliram");
} else {
  alert("Evi almiram makler deyilem.Alverciler narahat etmesin");
}
