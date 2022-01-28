import React, {useContext} from 'react';
import './styles/styles.css';
import {AppContext} from './../AppContext';

const Footer = () => {
  const {onAbout} = useContext(AppContext);

  if(onAbout === true) {
    const footer = document.getElementsByTagName('footer');
    footer[0].classList.add('white-text');
  }
  return(
    <footer>All Rights Reserved &copy; 2022</footer>
  )
}

export default Footer;