import React from 'react';
import PlaceHolder from './../img/placeholder.jpg';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Container';
import Book from './Book';
import Box from '@mui/material/Box';

const books = [
  {
    image: {PlaceHolder},
    id: 1
  },
  {
    image: {PlaceHolder},
    id: 2
  },
  {
    image: {PlaceHolder},
    id: 3
  },
  {
    image: {PlaceHolder},
    id: 4
  },
  {
    image: {PlaceHolder},
    id: 5
  },
  {
    image: {PlaceHolder},
    id: 6
  },
]

const BookDisplay = () => {
  return (
    <> 
      <Container 
      maxWidth='xl' 
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
              }
            }}
        >
          {Array.from(Array(6)).map((index) => (
            <Box 
              sx={{
                backgroundColor: '#6297AF',
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Book
                // image={image}
              />
            </Box>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default BookDisplay;