import PropTypes from "prop-types";
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const oninputChanged = (event) => {
        setInputValue( event.target.value );
    }


    const onSubmit =(event)=>{
        event.preventDefault();
        if( inputValue.trim().length <=1 ) return;

        // setCategories( categories => [...categories ,inputValue]);
        onNewCategory( inputValue.trim())
        setInputValue('');  

    }


  return (
    <form onSubmit={ onSubmit }>

        <input type="text"  
        placeholder="Buscar gif"
        value={ inputValue }
        onChange={ oninputChanged }
    
        />
    </form>


  )
}


AddCategory.propTypes = {
   onNewCategory: PropTypes.func.isRequired,
   
}
