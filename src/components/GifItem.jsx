import ProTypes from 'prop-types';

export const GifItem = ({ title, url}) => {


  return (
    
    <div className='card'>
        <img src={ url } alt={ title } />
        <p> { title } </p>
    </div>
)
}


GifItem.prototype = {
  title: ProTypes.string.isRequired,
  url: ProTypes.string.isRequired,

}
