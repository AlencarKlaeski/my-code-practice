let adjective = "big";

let noun = "Dragon";

let verb = "cold";

let place = "castle";

let adjective2 = "tooBig";

let noun2 = "Kignigth";


const firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";
console.log("First story: " + firstStory);

adjective = "kignigth";

noun = "small";

verb = "hot";

place = "city";

adjective2 = "tooSmall";

noun2 = "pears";

const secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";
console.log("Second story: " + secondStory);

let type = "52";
console.log( typeof type );

let despedirse = "goodbye";
console.log( despedirse [ despedirse.length -1 ] );

let saludo = "hello";
console.log( saludo [ 1 ] );

let caracteres = saludo [ 0 ] + saludo [ saludo.length -1 ];
console.log( caracteres );

let word = "the word said \"hello\"";
console.log( word );

let caracteres2 = "if the word said \"hello\", \nright now is \"good bye\"";
console,log( caracteres2 );

let bot = "botCharacter";

let bot2 = "3";

const interpolizacion = `My name is $ {bot} and I am ${bot2} years old.`;
console.log( interpolizacion) ;

let practica = `Esta es una practica,
de una cadena de texto,
con varias lineas.`;
console.log( practica) ;

const song = "bad romande";

const puntuacionMedia = 9.7 ;

const puntuacionMaxima = 9.9 ;

const puntuacionTotal = `Mi calificacion de la musica $ {song} al final es $ { (puntacionMedia / puntuacionMaxima) * 80}`;
console.log( puntuacionTotal) ;

let posicionCadena = "Me encanta practicar JavaScript";

console.log( posicionCadena.indexOf( "JavaScript", 9) );

let world = "e";
console.log( world.charCodeAt(world[0]) );

let stringNumber = string.fromCharCode(65);
console.log( stringNumber );

let cadena = "compropando las subcadenas";
console.log( cadena.includes("subcadenas") );

let mensaje = "I practice JavaScript!";

let resultado = mensaje.slice(2, 10);
console.log( resultado );

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);