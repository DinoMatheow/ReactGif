import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas unitarias en getGifs', () => { 
        
    test('debe retornar el arreglo de gifs', async() => { 

        const gifs = await getGifs('One Punch');
        //  console.log(gifs);
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });

    });

});