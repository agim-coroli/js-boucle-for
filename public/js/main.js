// // FOR
// for (let i = 0; i <= 10; i++) {
//     // mon console log va sexecuter de 0 a 10
//     console.log("hello world" + " " + i);
// }

// let montab = ["fanny", "django", "nico", "banane"];
// console.log(montab.length);
// console.log(montab[1]);
// for (let i = 0; i < montab.length; i++) {
//     console.log("bonjour" + " " + montab[1]);
// }






// // FOR ... 
// let str = "hello";
// for(i in str){
//     console.log("bonjour" + " " + str[1]);
// }

// let montab2 = ["cerise", "banane", "pomme", "orange", "poireaux"];
// for (i in montab2) {
//     console.log(`je vais au marché et jachete... ${montab2[i]}`);
// }







// // exo1 
// let classe = ["agim", "adil", "fanny","lira", "ilies", "stan", "antoine", "jean", "yassin"];

// for (i = 0; i < classe.length; i++) {
//     console.log(`bonjour ${classe[i]}`);
// }
// // exo1 avec for in 
// for (i in classe){
//     console.log(`bonjour ${classe[i]}`);
// }






// // exo2 
// let nbr = parseInt(prompt("le chiffre ?"));

// for (let i = 0; i <= nbr; i++) {
//     console.log(i);
// }






// exo3
// for (let i = 1; i <= 20; i++) {
//     if(i%2 == 0){
//     console.log(`${i} Nombre pair`);
// }else{
//     console.log(`${i} Nombre impair`);
// }
// }






// exo4 
// let multiplicateur = 5;
// let i;
// for (let i = 1; i < 10; i++){
//     console.log(`${i} x ${multiplicateur} = ${i*multiplicateur}`);
// }






// exo5 
// for (let i = 20; i > -2; i--) {
//     if(i%2 == 0){
//         console.log(i);
//     }
    
// }
// correction 
// for (let i = 20; i >= 0; i-=2){
    // console.log(i);
// }






// exo6 
// let cl = ["Adil","Agim","Ali","Antoine","Chris","Elvis","Fanny","Haroune","Ilias D","Ilias El","Jean","Kevin","Lira","Mouna","Nasila","Nathan","Seif","Stan","Van Hoa","Yassine"];
// let longPrenom = [];

// for (let i = 0; i < cl.length; i++) {
//     if (cl[i].length > 5) {
//             longPrenom.push(cl[i]);
            
//     }
    
// }
// console.log(longPrenom);







// exo7 
// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];

// let grossesSommes = [];

// for (let i = 0; i < sommes.length; i++) {
//     if (sommes[i] > 60) {
//         grossesSommes.push(sommes[i]);
//     }
// }
// for (let i = 0; i < grossesSommes.length; i++) {
//     sommes.splice(sommes.indexOf(grossesSommes[i]), 1);
// }

// console.log(sommes);
// console.log(grossesSommes);

// autre methode 
// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];

// let grossesSommes = [];

// for (let i = sommes.length; i >= 0; i--) {
//     if (sommes[i] > 60) {
//         grossesSommes.push(sommes[i]);
//         sommes.splice(i, 1);
//     }
// }
// console.log(sommes);
// console.log(grossesSommes);






// exo8 
// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
// let typeString = [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];

// for (let i = 0; i < donnees.length ; i++) {
//     if (typeof(donnees[i]) == Number) {
//         typeNumber.push(donnees[i])
//     }
    
// }
// console.log(donnees);
// console.log(typeNumber);