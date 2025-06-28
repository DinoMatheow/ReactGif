import { render } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('pruebas unitarias de AddCategory', () => { 

    test('Debe de cambiar el valor de la caja de texto', () => { 

        render( <AddCategory  onNewCategory={ ()=> {}} /> );
        // screen.debug(); 

    })

 })