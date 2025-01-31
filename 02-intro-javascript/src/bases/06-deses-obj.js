// Desestructuración
// Asignacion desestructurante

const persona = {
    nombre : 'Tony',
    edad : 45,
    clave : 'Ironman'
}

//const { nombre, edad, clave } = persona;

// console.log( nombre )
// console.log( edad )
// console.log( clave )

const useContext = ( { nombre, edad, rango = 'Capitán', clave } ) => { 
    // console.log( nombre, edad, rango )
    return {
        nombreClave : clave,
        anios : edad,
        latlng : {
            lat : 14.12345,
            lng : -13.2345
        }
    }
}

const avenger = useContext( persona );

const { nombreClave, anios, latlng:{ lat, lng } } = useContext( persona );

console.log( nombreClave, anios );
console.log( lat, lng );