import React, {useContext, useEffect} from 'react';
import {AppContext} from './../AppContext';
import './styles/styles.css';

const About = () => {
  const { onAbout, setOnAbout } = useContext(AppContext);

  useEffect(() => {
    setOnAbout(true);
  }, [])

  if(onAbout === true) {
    const body = document.body;
    body.classList.add('background-image');
  }

  return (
    <>
    <p>Hello</p>
    </>
  )
}

export default About;