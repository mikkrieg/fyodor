import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Container';
import Book from './Book';
import Box from '@mui/material/Box';

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
              }
            }}
        >
          {Array.from(Array(6).map((index) => (
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
              <Book/>
            </Box>
          )))}
        </Grid>
      </Container>
    </>
  )
}

export default BookDisplay;