let nombres = [];
let nombresFinal = 0;
let buscador;
// LLENAR EL ARRAY CON LOS NOMBRES
alert('Vamos a guardar listado de nombres.');
let cantidad = prompt('Digita el numero de nombres que deseas ingresar: ');
for (let i = 0; i < cantidad; i++) {
    nombres[i] = prompt('Digita el nombre: ');
}
//SABER LA CANTIDAD DE VECES QUE SE REPITE EL NOMBRE DIGITADO EN EL ARRAY
    alert('Ahora busquemos un nombre que se repite. ');
    buscador = prompt('Digite el nombre a Buscar: ');
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === buscador) {
        nombresFinal++;
    }
}

alert(`Los nombres digitados son:  ${nombres}`);
alert(`El nombre ${buscador} se repite ${nombresFinal} veces.`);