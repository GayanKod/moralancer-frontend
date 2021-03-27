import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>CHECK OUT OUR SERVICES!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='https://images.unsplash.com/photo-1540242908484-50aa09aea5a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              text='Logo & Brand Identity, Visual Design, Gaming, Art & Illustrate, Web & Mobile, Architecture & Building, Fashion & Merchandise, Print Design'
              label='Graphic and Design'
              path='/grpahic-and-design'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1550592704-6c76defa9985?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fHdyaXRpbmclMjBoYW5kfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              text='Articles & Blog Posts, Trnaslation, Prooreading & Editing, Book & eBook Writing, Website Content, Resume, Cover Letters, Case Studies'
              label='Writing and Translation'
              path='/writing-and-translation'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1492619193369-af2352531443?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1044&q=80'
              text='Video Editing, Animation, Visual Effects, Photography, Lyric & Music Videos, Subtitles & Captions, Animations for Streamers, Trailers'
              label='Video and Animation'
              path='/video-and-animation'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0OTU3NDgwfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
              text='WordPress, Game Development, Mobile Apps, Web Programming, Desktop Applications, E-Commerce Development, Website Builders & CMS'
              label='Programming and Tech'
              path='/programming-and-tech'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1599658880436-c61792e70672?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              text='Databases, Data Analytics, Data Processing, Data Science, Data Entry, Data Processing'
              label='Data'
              path='/data'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bWFya2V0aW5nfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
              text='Digital Marketing, Lifestyle, Business, Music & Audio'
              label='Other'
              path='/other'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;