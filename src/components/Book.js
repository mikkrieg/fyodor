import React from 'react';
import './styles/styles.css';
import Typography from '@mui/material/Typography';


const Book = (props) => {
  const {image, title} = props.image;
  return (
  <>

    <img src={image} className='home-images'/>
    <Typography className='white-text' sx={{marginTop: '5px', fontFamily: 'Sansita', fontSize:'1.2em'}}>{title}</Typography>
  </>
  )
}

export default Book;