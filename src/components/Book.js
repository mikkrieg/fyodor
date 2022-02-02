import React from 'react';
import './styles/styles.css';



const Book = (props) => {
  const {image} = props.image;

  return (
  <>
    <img src={image.PlaceHolder} className='home-images'/>
  </>
  )
}

export default Book;