import React, {useContext} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {AppContext} from './../AppContext';

const BookInfo = [
  {
    content: "LoremIpsum1"
  },
  {
    content: "LoremIpsum2"  
  },
  {
    content: "LoremIpsum3"  
  },
  {
    content: "LoremIpsum4"  
  },
  {
    content: "LoremIpsum5"  
  },
  {
    content: "LoremIpsum6"  
  },
]

const BookModal = () => {
  const {showBookModal, setShowBookModal, bookIndex} = useContext(AppContext);
  let content;
  if(bookIndex !== null) {
    content = BookInfo[bookIndex].content;
  }
  const handleClose = () => setShowBookModal(false);
  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={showBookModal}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={showBookModal}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography 
          variant='h4' 
          sx={{ 
            textAlign: 'center', 
            fontSize: {xs: '1.6em'}, 
            fontWeight: 'bold',
            width: '100%', 
            margin: 'auto'
          }}
        >
          {content}
        </Typography>
      </Box>
    </Fade>
  </Modal>
  )
}

export default BookModal;