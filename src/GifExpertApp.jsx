import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {


    const [categories, setCategories]  = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {

      if ( categories.includes(newCategory)) return;

      // console.log('Valorant');
      setCategories([...categories, newCategory]);
      // setCategories( cat => [...cat, 'Valorant'])  // al final
      // setCategories( cat => ['Valorant', ...cat ])  // al princio
    }

  console.log(categories)
  return (

        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input  */}
            <AddCategory  
            // setCategories={ setCategories }
            onNewCategory={ onAddCategory }
            // currentCategory={}
             />

            {/* list of gif  */}
            <button  onClick={ onAddCategory }>Agregar</button>
              { categories.map( category => (
                <GifGrid key={ category } category={ category } ></GifGrid>
              ) )  
            
              }

            {/* gif items */}



        </>

  )
}
