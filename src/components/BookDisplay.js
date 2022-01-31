import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Container';
import Book from './Book';
import Box from '@mui/material/Box';
import PlaceHolder from './../img/placeholder.jpg';

const bookRow1 = [
  {
    image: {PlaceHolder},
    index: 0
  },
  {
    image: {PlaceHolder},
    index: 1
  },
  {
    image: {PlaceHolder},
    index: 2
  },
]

const bookRow2 = [
  {
    image: {PlaceHolder},
    index: 3
  },
  {
    image: {PlaceHolder},
    index: 4
  },
  {
    image: {PlaceHolder},
    index: 5
  },
]

const BookDisplay = () => {
  return (
    <> 
      <Container 
      maxWidth='xl' 
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
        >
        <Grid 
          lg={6}
          sx={{ 
            display: 'flex', 
            flexDirection: {
              xs: 'column', 
              md: 'row'
            }, 
            alignItems: 'center', 
            justifyContent: {
              md: 'space-evenly'
              },
              marginBottom: '15px'
            }}
        >
          {bookRow1.map((image, index) => (
            <Box 
              key={index}
              sx={{
                backgroundColor: '#6297AF',
                width: '340px',
                height: '220px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Book
                image={image}
              />
            </Box>
          ))}
        </Grid>
        <Grid 
          lg={6}
          sx={{ 
            display: 'flex', 
            flexDirection: {
              xs: 'column', 
              md: 'row'
            }, 
            alignItems: 'center', 
            justifyContent: {
              md: 'space-evenly'
              },
            }}
        >
          {bookRow2.map((image, index) => (
            <Box 
              key={index}
              sx={{
                backgroundColor: '#6297AF',
                width: '340px',
                height: '220px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Book
                image={image}
              />
            </Box>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default BookDisplay;

// {Array.from(Array(6)).map((index) => (
//   <Box 
//     sx={{
//       backgroundColor: '#6297AF',
//       width: '100px',
//       height: '100px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     }}