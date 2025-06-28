/* global describe, test, expect */
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

    describe('Pruebas de GifItem.jsx', () => {

        const title = 'Saitama';
        const url = 'https://one-punch.com/saitama.jpg';
        
        test('debe hacer match con el snapshot', () => { 

            const { container } = render( <GifItem   title={ title } url={ url } />  ); 
            expect( container ).toMatchSnapshot();
         });

         test('Debe mostrar la imagen con el URL y ALT indicado', () => {
                             
            render( <GifItem   title={ title } url={ url } />  ); 
            // expect( screen.getByRole('img').src ).toBe( url );
            // expect( screen.getByRole('img').alt ).toBe( title );
            const { src, alt } = screen.getByRole('img');
            expect( src ).toBe( url );
            expect( alt ).toBe( title );



            });

    
    });