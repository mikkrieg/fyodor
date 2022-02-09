import React, {useContext} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Icon from './../img/pdf-icon.png'; 
import {AppContext} from './../AppContext';
import { flexbox } from '@mui/system';

const BookInfo = [
  {
    title: "Междуречье, 2021",
    author:"текст: Феликс Аксёнцев",
    illustrator: "иллюстрации: Андрей Дорохин",
    publisher: "Publisher: Библиотека Стрелочника Фёдора",
    isbn: "ISBN: 978-1-63877-209-5",
    extra: ""
    
  },
  {
    title: "Существа и сущности, 2019",
    author:"текст: Лея Любомирская",
    illustrator: "иллюстрации: Андрей Дорохин",
    publisher: "Publisher: Библиотека Стрелочника Фёдора",
    isbn: "ISBN: 978-609-8213-68-3",
    extra: ""
  },
  {
    title: "Перекати-Море, 2017",
    author:"текст: Феликс Аксёнцев",
    illustrator: "иллюстрации: Александр Кригель",
    publisher: "Publisher: Библиотека Стрелочника Фёдора",
    isbn: "ISBN: 978-609-8213-15-7",
    extra: "(опубликована в сотрудничестве с издательством Logvino Literaturos Namai)"
  },
  {
    title: "Open to Interpretation, 2020",
    author:"Author: Alexander Kriegel",
    illustrator: "",
    publisher: "Publisher: Библиотека Стрелочника Фёдора",
    isbn: "ISBN: 978-1-71-578946-6",
    extra:""
  },
  {
    title: "Lingering Effects, 2021",
    author:"Author: Alexander Kriegel",
    illustrator: "",
    publisher: "Publisher: Библиотека Стрелочника Фёдора",
    isbn: "ISBN: 978-1-00-634205-9",
    extra: ""
  },
  {
    title: "Записки преданного человека, 2020",
    author:"текст: Константин Густавович Игельстром",
    illustrator: "",
    publisher: "Publisher: Библиотека Стрелочника Фёдора",
    isbn: "ISBN: 978-1-63-684475-6",
    extra: "(под редакцией А.Ю. Игельстрома)" 
  },
]

const BookModal = () => {
  const {showBookModal, setShowBookModal, bookIndex} = useContext(AppContext);
  let title;
  let author;
  let illustrator;
  let publisher;
  let isbn;
  let extra;
  let link;

  if(bookIndex === 0) {
    link = "https://drive.google.com/file/d/12mHjuI1tAhDkqecVmPW1fPjk0HNVFjhb/view"
  } else if(bookIndex === 1) {
    link = "https://drive.google.com/file/d/1Kjt1n0tZgjBkiTKlIOE31wE7_7188Q2s/view?usp=sharing"
  }

  if(bookIndex !== null) {
    title = BookInfo[bookIndex].title;
    author = BookInfo[bookIndex].author;
    illustrator = BookInfo[bookIndex].illustrator;
    publisher = BookInfo[bookIndex].publisher;
    isbn = BookInfo[bookIndex].isbn;
    extra = BookInfo[bookIndex].extra;
  }

  console.log(bookIndex);
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
        bgcolor: '#3d677a',
        border: '2px solid #FFF',
        boxShadow: 24,
        p: 2,
      }}>
        <Typography 
          variant='h4' 
          sx={{ 
            textAlign: 'center', 
            fontSize: {xs: '1.6em'}, 
            fontWeight: 'bold',
            width: '100%', 
            margin: 'auto',
            color: '#FFF',
            paddingBottom: '10px'
          }}
        >
          {title}
        </Typography>
        <br/>
        <Typography 
          variant='h4' 
          sx={{ 
            textAlign: 'center', 
            fontSize: {xs: '1.6em'}, 
            width: '100%', 
            margin: 'auto',
            color: '#FFF',
            paddingBottom: '10px'
          }}
        >
          {author}
          <br/>
          {bookIndex === 5 ? extra : ""}
        </Typography>
        <Typography 
          variant='h4' 
          sx={{ 
            textAlign: 'center', 
            fontSize: {xs: '1.6em'}, 
            width: '100%', 
            margin: 'auto',
            color: '#FFF',
            paddingBottom: '10px'
          }}
        >
          {illustrator}
        </Typography> 
        <Typography 
          variant='h4' 
          sx={{ 
            textAlign: 'center', 
            fontSize: {xs: '1.6em'}, 
            width: '100%', 
            margin: 'auto',
            color: '#FFF',
            paddingBottom: '10px'
          }}
        >
          {publisher}
          <br/>
          {bookIndex === 2 ? extra : ""}
        </Typography>
        <Typography 
          variant='h4' 
          sx={{ 
            textAlign: 'center', 
            fontSize: {xs: '1.6em'}, 
            width: '100%', 
            margin: 'auto',
            color: '#FFF'
          }}
        >
          {isbn}
        </Typography>
        {bookIndex === 0 || bookIndex === 1 ?
          <Box sx={{display: "flex", justifyContent: 'flex-end'}}>
            <a href={link} className='pdf-link' target='_blank'>
              <img src={Icon} alt="pdf icon" className='pdf-icon'/>
            </a>
          </Box> 
        : "" }
      </Box>
    </Fade>
  </Modal>
  )
}

export default BookModal;