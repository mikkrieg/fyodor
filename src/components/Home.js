import React, {useContext, useEffect} from 'react';
import BookDisplay from './BookDisplay';
import {AppContext} from './../AppContext';



const Home = () => {
  const {setOnAbout} = useContext(AppContext);

  useEffect(() => {
    setOnAbout(false);
    const body = document.body;
    const footer = document.getElementsByTagName('footer');
    body.classList.remove('background-image');
    footer[0].classList.remove('white-text');
  }, [])

  return (
    <>
      <BookDisplay />
    </>
  )
}

export default Home;