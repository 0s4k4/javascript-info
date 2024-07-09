alert('Bienvenido al sistema');
let nombre = prompt('Dime tu nombre');
let eresJefe = confirm('eres jefe?');

if(eresJefe == true){
    alert(`Bienvenido ${nombre} eres jefe`);
} else {
    alert(`Bienvenido ${nombre} no eres jefe`);
}