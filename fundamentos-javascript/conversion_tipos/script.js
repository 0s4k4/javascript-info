//convertimos a to string

let value = true;
alert(typeof value); // boolean

value = String(value); // ahora value es el string "true"
alert(typeof value); // string


alert("6" / "2");

//convertimos a to number

let str = '123';
alert(typeof str); //se imprime string

let num  = Number(str);

alert(typeof num);

//si la convecion explicita no cumple con el formato de texto admitivo da como error un NaN

let age = Number('Hola soy un texto');
alert(age);

//ejemplos

alert(Number(" 123 ")); //se da impresion de 123
alert(Number("123z")); //se da una impresion NaN
alert(Number(true)); //se da una impresion de 1
alert(Number(false)); //se da una impresion de 0


//congatenacion
//en ambas funcionan por que cumplen con el formato admitivo para poder ser usado en la suma
alert(1 + '2');
alert('1'+2);


//TOBOLEAN

alert(Boolean(1));
alert(Boolean(0));

alert(Boolean("0"));
alert(Boolean(1));

alert(Boolean("0"));
alert(Boolean(""));

//en js, si un string con cualquier contenido da un true, sin embargo se encuentra vacio es un false



//RESUMEN
//TO STRING: ocurre cuando se muestra un texto 
//TO NUMBER: ocurre cuando se realiza alguna operacion matemtica
//TO BOLEAN: se ocurre cuando realizas alguna operacion logica

//todo: falta por reparasar mas
