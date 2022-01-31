import React from 'react';
import Typography from '@mui/material/Typography';
import PlaceHolder from './../img/placeholder.jpg';

const Book = (props) => {
  const image = props.image; 
  console.log()
  return (
  <>
  <Typography textAlign='center'>{image} Hi</Typography>
  </>
  )
}

export default Book;