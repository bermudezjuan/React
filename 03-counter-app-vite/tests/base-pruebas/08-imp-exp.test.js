import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Prebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe por ID', () => { 
        
        const id = 1;
        const hero =  getHeroeById( id );
        expect(hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
    }); 

    test('getHeroeById debe retornar undefined si no existe', () => { 
        
        const id = 100;
        const hero =  getHeroeById( id );
        expect(hero).toBeFalsy();
    }); 

    //Tarea:
    test('getHeroesByOwner debe retornar un arreglo con logitud 3 y de DC', () => { 
        const owner = 'DC'; 
        const retorno = getHeroesByOwner( owner );
        expect(retorno.length).toBe(3);
        expect(retorno).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });
    test('getHeroesByOwner debe retornar un arreglo con logitud 2 y de Marvel', () => { 
        const owner = 'Marvel';
        const retorno = getHeroesByOwner( owner );
        expect(retorno.length).toBe(2);
        expect(retorno).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });
});