import React, {useContext, useEffect} from 'react';
import BookDisplay from './BookDisplay';
import {AppContext} from './../AppContext';


const Home = () => {
  const {setOnAbout} = useContext(AppContext);

  useEffect(() => {
    setOnAbout(false);
    const body = document.body;
    body.classList.remove('background-image');
  }, [])

  return (
    <BookDisplay />
  )
}

export default Home;