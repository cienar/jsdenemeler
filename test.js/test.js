
//0-18,4 :zayıf
//18,5-24,9:normal
//25,0-29,9 fazla kilolu
//30,0 - 34,9 :şişman(obez)

let IndexCan;
let IndexAda;

const kgCan =60;
const kgAda = 40;

const heightCan=1.70;
const heightAda =1.50;

IndexAda=(kgAda)/(heightAda*heightAda);
IndexCan=(kgCan)/(heightCan*heightCan);

console.log(IndexAda,IndexCan);
let adaHigherIndex=IndexAda>IndexCan;
let canHigherIndex=IndexCan>IndexAda;

console.log("Adanın kilo indeksi canın kilo indeksinden daha büyük:"+adaHigherIndex);
console.log("canın kilo indeksi adanın kilo indeksinden daha büyük:"+canHigherIndex);

let AdaZayif= (IndexAda>0)&&(IndexAda<=18.4);
let AdaNormal=(IndexAda<18.5)&&(IndexAda<=24.9);
let AdaKilolu=(IndexAda<=25)&&(IndexAda<=29.9);
let AdaSisman=(IndexAda>=30)&&(IndexAda<=34.9);

console.log("Ada zayıf :"+ AdaZayif);
console.log("adanın kilosu normal:"+AdaNormal);
console.log("ada kilolumu?:"+ AdaKilolu);
console.log("ada sisman mı:"+AdaSisman);
