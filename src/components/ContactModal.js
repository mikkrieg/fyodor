import React, { useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { AppContext } from '../AppContext';
import './styles/styles.css';



const ContactModal = () => {
  const {showContact, setShowContact } = useContext(AppContext);
  const handleClose = () => setShowContact(false);

  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={showContact}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={showContact}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: '#3d677a',
        border: '2px solid #FFF',
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
            margin: 'auto',
            color: '#FFF'
          }}
        >
          Please send all inquiries to:
        </Typography>
        <br/>
        <a href='mailto:fyodor@strelochnikfyodor.org' className='modal-link'>
          <Typography 
            variant='h5' 
            sx={{
            textAlign: 'center',
            width: {xs: '100%'}, 
            margin: 'auto',
          }}
          >
            fyodor@strelochnikfyodor.org
          </Typography>
        </a>
      </Box>
    </Fade>
  </Modal>
  )
}


export default ContactModal;