import { useState } from "react";

export const GifExpertApp = () => {


    const [categories, setCategories]  = useState(['One Punch', 'DINOSAURIOS', 'LOL']);

    const onAddCategory = () => {

      // console.log('Valorant');
      setCategories([...categories, 'Valorant']);
      // setCategories( cat => [...cat, 'Valorant'])  // al final
      // setCategories( cat => ['Valorant', ...cat ])  // al princio
    }

  console.log(categories)
  return (

        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input  */}


            {/* list of gif  */}
            <button  onClick={ onAddCategory }>Agregar</button>
            <ol>
              { categories.map( category => {
                  return  <li key={ category }> { category } </li>
              } )  
            
              }
            </ol>

            {/* gif items */}



        </>

  )
}
