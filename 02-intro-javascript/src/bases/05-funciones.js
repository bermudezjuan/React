//Funciones
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`; 
const saludar4 = () => `Hola, Mundo`; 

console.log(saludar('Goku'));
console.log(saludar2);
console.log(saludar3('Guku'));
console.log(saludar4());

const getUser = () => ({
    uid : 'ABC123',
    username : 'jroots13'
});
const user = getUser();
console.log(user);

//Tarea

const getUsuarioActivo = ( nombre ) => ({
    uid : 'ABC567',
    username : nombre
})

const usuarioActivo = getUsuarioActivo('Juan');
console.log (usuarioActivo);