import React, {useContext} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Container';
import Book from './Book';
import Box from '@mui/material/Box';
import Perekati from './../img/perekati.jpg';
import OpenToInterpretation from './../img/open_to_interpretation.jpg';
import LingeringEffects from './../img/lingering_effects.jpg';
import LastOne from './../img/last_one.jpg';
import Essences from './../img/essences.jpg';
import Mesopotamia from './../img/mesopotamia.jpg';
import BookModal from './BookModal';
import {AppContext} from './../AppContext';

const bookRow1 = [
  {
    image: [Mesopotamia],
    index: 0,
    title: 'Mesopotamia'
  },
  {
    image: [Essences],
    index: 1,
    title: 'Essences'
  },
  {
    image: [Perekati],
    index: 2,
    title: 'Perekati'
  },
]

const bookRow2 = [
  {
    image: [OpenToInterpretation],
    index: 3,
    title: 'Open To Interpretation'
  },
  {
    image: [LingeringEffects],
    index: 4,
    title: 'Lingering Effects'
  },
  {
    image: [LastOne],
    index: 5,
    title: 'Last One'
  },
]

const BookDisplay = () => {
  const {setShowBookModal, setBookIndex} = useContext(AppContext);

  const handleBookModal = () => {
    setShowBookModal(true);
  }

  const settingFirstRowIndexes = (index) => {
    setBookIndex(index)
  }

  const settingSecondRowIndexes = (index) => {
    setBookIndex(index + 3);
  }

  return (
    <> 
      <Container 
      maxWidth='xl' 
      sx={{
        marginTop: '7%'
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
              marginBottom: {xs: '1px', md: '15px'}
            }}
        >
          {bookRow1.map((image, index, title) => (
            <Box 
              onClick={function(e){handleBookModal(); settingFirstRowIndexes(index)}}
              key={index}
              sx={{
                backgroundColor: '#6297AF',
                width: '250px',
                height: '220px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: {xs: '5px', md: '0px'}
              }}
            >
              <Book
                image={image}
                title={title}
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
          {bookRow2.map((image, index, title) => (
            <Box 
              onClick={function(e){handleBookModal(); settingSecondRowIndexes(index)}}
              key={index}
              sx={{
                backgroundColor: '#6297AF',
                width: '250px',
                height: '220px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                marginBottom: {xs: '5px', md: '0px'}
              }}
            >
              <Book
                image={image}
                title={title}
              />
            </Box>
          ))}
        </Grid>
        <BookModal />
      </Container>
    </>
  )
}

export default BookDisplay;
