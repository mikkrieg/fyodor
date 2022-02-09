import React from 'react';
import './styles/styles.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = () => {
  const English = () => {
    const heading = document.getElementById('heading-text');
    const body1 = document.getElementById('body-text1');
    const body2 = document.getElementById('body-text2');
    const body3 = document.getElementById('body-text3');
    const body4 = document.getElementById('body-text4');
    const body5 = document.getElementById('body-text5');
    const body6 = document.getElementById('body-text6');
    heading.textContent = 'About our Publishing House'
    body1.textContent = "Switchman Fyodor is active on the North-West Coast of the American continent, and publishes whatever takes his fancy."
    body2.textContent = "We are subjective, opinionated, independent, and small. We like it that way."
    body3.textContent = "When Switchman Fyodor takes a liking to a manuscript (be it abstruse poetry, or a cookbook, or anything in between), he assumes all the expenses of the first edition, including design, printing, ISBN number, delivery, and, possibly, even illustrations. "
    body4.textContent = "The first edition runs at 25 to 100 copies. The author's honorarium is in the form of copies, and the author retains the rights to the published text."
    body5.textContent = "The copyright on the printed matter is stashed away in Switchman Fyodor's watchhouse."
    body6.textContent = "Concerning the distribution of editions: Fyodor switches points to wherever the spirit moves the author" 
  }

  const Belorusian = () => {
    const heading = document.getElementById('heading-text');
    const body1 = document.getElementById('body-text1');
    const body2 = document.getElementById('body-text2');
    const body3 = document.getElementById('body-text3');
    const body4 = document.getElementById('body-text4');
    const body5 = document.getElementById('body-text5');
    const body6 = document.getElementById('body-text6');
    heading.textContent='Аб нашым выдавецтве'
    body1.textContent = "Стрэлачнік Тодар дзейнічае на Паўднёва-Заходнім узбярэжжы Ціхага Акіяну і друкуе тое, што яму прыйшлося да густу."
    body2.textContent = "Нам падабаецца быць незалежнымі, суб'ектыўнымі і невялікімі."
    body3.textContent = "Стрэлачнік Тодар пакрое ўсе выдаткі на першы наклад абраных манускрыптаў (ад мудрагелістых вершаў да кулінарных даведнікаў) - дызайн, макетаванне, друк, пошту, і, магчыма, ілюстрацыі."
    body4.textContent = "Першы наклад - ад 25 да 100 асобнікаў. Аўтар, ў якасці ганарару, атрымлівае свае кнігі і захоўвае аўтарскія правы на тэкст."
    body5.textContent = "Капірайт на выданне застаецца ў капцёрцы Стрэлачніка Тодара."
    body6.textContent = "Пра распаўсюд: Стрэлачнік Тодар перавядзе рэйкі і накіруе наклад на аўтарскую чыгунку."
  }

  const Polish = () => {
    const heading = document.getElementById('heading-text');
    const body1 = document.getElementById('body-text1');
    const body2 = document.getElementById('body-text2');
    const body3 = document.getElementById('body-text3');
    const body4 = document.getElementById('body-text4');
    const body5 = document.getElementById('body-text5');
    const body6 = document.getElementById('body-text6');
    heading.textContent='O naszym wydawnictwie'
    body1.textContent = "Biblioteka Zwrotniczego Fiodora działa w na północno-zachodnim wybrzeżu Ameryki Północnej, i publikuje on wszystko, co mu się podoba."
    body2.textContent = "Jesteśmy subiektywni, niezależni i mali. Tak jak lubimy."
    body3.textContent = "Wszystkie wydatki związane z publikacją pierwszego wydania rękopisów, które mu się podobały (od zawiłej poezji po przepisy kulinarne) pokrywa Zwrotniczy Fiodor – projekt, układ, druk, dostawa i, być może, ilustracje."
    body4.textContent = "Pierwszy nakład - od 25 do 100 egzemplarzy. Autor otrzymuje honorarium w książkach i zachowuje prawa autorskie do opublikowanego tekstu. "
    body5.textContent = "Prawa do samej książki pozostają w budce dróżnika."
    body6.textContent = "O dystrybucji publikacji: Fiodor przestawia zwrotnicę tam, gdzie autor zechce."
  }

  const Russian = () => {
    const heading = document.getElementById('heading-text');
    const body1 = document.getElementById('body-text1');
    const body2 = document.getElementById('body-text2');
    const body3 = document.getElementById('body-text3');
    const body4 = document.getElementById('body-text4');
    const body5 = document.getElementById('body-text5');
    const body6 = document.getElementById('body-text6');
    heading.textContent='О нашем издательстве'
    body1.textContent = "Стрелочник Фёдор действует на Северо-Западном побережье американского континента и издаёт то, что ему вздумается. "
    body2.textContent = "Мы субъективны, независимы, и невелики. Нам так нравится."
    body3.textContent = "Все расходы на издание первого тиража понравившихся нам рукописей (от заумной поэзии до кулинарных рецептов) Стрелочник Фёдор берет на себя - включая дизайн, макетирование, печать, доставку, и, возможно, иллюстрации."
    body4.textContent = "Первый тираж - от 25 до 100 экземпляров. Автор получает гонорар книжками и сохраняет авторские права на опубликованный текст."
    body5.textContent = "Копирайт на саму книгу остаётся в будке Стрелочника Федора."
    body6.textContent = "О распространении изданий: Фёдор переводит стрелки туда, куда автору угодно."
  }

  return (
    <>
      <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Typography 
          className='about-text white-text' 
          id='heading-text' 
          textAlign='center' 
          sx={{
            fontFamily: 'Sansita', 
            marginTop: {xs:'30px', xl: '75px' },
            fontSize: {xs: '1.75em', xl: '2.5em'},
            fontWeight: 'bold'
            }}>
          About our Publishing House
        </Typography>
        <br/>
        <Typography 
          className='white-text' 
          id='body-text1' 
          textAlign='center'
          sx={{
            fontFamily: 'Sansita', 
            fontSize:{xs:'1.1em', xl:'1.6em'}, 
            padding: {xs:'0px 15px', lg:'0px 250px' },
            fontWeight: 'bold'
          }} 
          >
          Switchman Fyodor is active on the North-West Coast of the American continent, and publishes whatever takes his fancy.
        </Typography>
        <br/>
        <Typography 
          className='white-text' 
          id='body-text2' 
          textAlign='center'
          sx={{
            fontFamily: 'Sansita', 
            fontSize:{xs:'1.1em', xl:'1.6em'}, 
            padding: {xs:'0px 15px', lg:'0px 250px' },
            fontWeight: 'bold'
          }}>
          We are subjective, opinionated, independent, and small. We like it that way.
        </Typography>
        <br/>
        <Typography 
          className='white-text' 
          textAlign='center' 
          id='body-text3' 
          sx={{
            fontFamily: 'Sansita', 
            fontSize:{xs:'1.1em', xl:'1.6em'}, 
            padding: {xs:'0px 15px', lg:'0px 250px' },
            fontWeight: 'bold'
          }}>
          When Switchman Fyodor takes a liking to a manuscript (be it abstruse poetry, or a cookbook, or anything in between), he assumes all the expenses of the first edition, including design, printing, ISBN number, delivery, and, possibly, even illustrations. 
        </Typography>
        <br/>
        <Typography 
          className='white-text' 
          textAlign='center' 
          id='body-text4' 
          sx={{
            fontFamily: 'Sansita', 
            fontSize:{xs:'1.1em', xl:'1.6em'}, 
            padding: {xs:'0px 15px', lg:'0px 250px' },
            fontWeight: 'bold'
          }}>
          The first edition runs at 25 to 100 copies. The author's honorarium is in the form of copies, and the author retains the rights to the published text.
        </Typography> 
        <br/>
        <Typography 
          className='white-text' 
          textAlign='center'
          id='body-text5' 
          sx={{
            fontFamily: 'Sansita', 
            fontSize:{xs:'1.1em', xl:'1.6em'}, 
            padding: {xs:'0px 15px', lg:'0px 250px' },
            fontWeight: 'bold'
          }}>
          The copyright on the printed matter is stashed away in Switchman Fyodor's watchhouse.
        </Typography>
        <br/>
        <Typography 
          className='white-text' 
          textAlign='center' 
          id='body-text6' 
          sx={{
            fontFamily: 'Sansita', 
            fontSize:{xs:'1.1em', xl:'1.6em'}, 
            padding: {xs:'0px 15px', lg:'0px 250px' },
            fontWeight: 'bold'
          }} >
          Concerning the distribution of editions:
          Fyodor switches points to wherever the spirit moves the author
        </Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup variant='contained' size='large' sx={{marginTop: {xs: '25px', xl: '50px'}, marginBottom: {xs:'-25px', xl: '0px'}}}>
          <Button onClick={English}sx={{backgroundColor: '#6297AF', borderColor: '#FFF !important', width: {xl:'150px' }, height: {xl: '60px' }}}>English</Button>
          <Button onClick={Russian}sx={{backgroundColor: '#6297AF', width: {xl:'150px' }, borderColor: '#FFF !important', height: {xl:'60px' }}}>Русский</Button>
          <Button onClick={Belorusian}sx={{backgroundColor: '#6297AF', width: {xl:'150px' }, borderColor: '#FFF !important', height: {xl:'60px' }}}>Беларускi</Button>
          <Button onClick={Polish}sx={{backgroundColor: '#6297AF', width: {xl:'150px' }, height: {xl:'60px' }}}>Polski</Button>
        </ButtonGroup>
      </Box>
    </>
  )
}

export default About;

