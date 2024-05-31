const sabores = ['Té de jazmín', 'Té verde', 'Té de limon'];
const date = new Date()
const name = 'Benjamin Cruz'
console.log('Hola! ${name}, Bienvenid@ a Git, la fecha de hoy es ${date}');

const contSabores = () => {
    console.log('Sabores existentes: ' + sabores.length)
}

const mostSabores = () => {
    console.log('Sabores disponibles: ' + sabores.join(', '));
}

function agregarSabor(sabor) {
    sabores.push(sabor);
    console.log('sabor ${sabor} añadido');
}

const main = () => {
    let saborNuevo1 = prompt("Agrega el nuevo sabor");
    agregarSabor(saborNuevo1);
    contarSabores();
    mostrarSabores();
    
    let saborNuevo2 = prompt("Agrega el nuevo sabor");
    agregarSabor(saborNuevo2);
    contarSabores();
}

main()