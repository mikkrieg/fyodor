import React, {useContext} from 'react';
import './styles/styles.css';
import {AppContext} from './../AppContext';


const Book = (props) => {
  const {image} = props.image;
  const {setShowBookModal} = useContext(AppContext);

  const handleBookModal = () => {
    setShowBookModal(true);
  }

  return (
  <>
    <img src={image.PlaceHolder} className='home-images' onClick={handleBookModal}/>
  </>
  )
}

export default Book;