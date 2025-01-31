

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: '5532',
        lat: 14.3232,
        lng: 34.3236
    }
};

//console.table({persona});

const persona2 = { ...persona };
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);








