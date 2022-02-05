import React from 'react';
import BookDisplay from './BookDisplay';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <>
      <Typography variant='h4' color='#FFF' textAlign='center' sx={{fontFamily: 'Sansita', marginBottom: '-5%', marginTop: '3%'}}>
        OUR BOOKS
      </Typography>
      <BookDisplay />
    </>
  )
}

export default Home;