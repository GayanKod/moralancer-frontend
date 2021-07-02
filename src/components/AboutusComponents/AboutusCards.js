import React from 'react';
import './AboutusCards.css';
import Avatar from 'react-avatar'
import Gayan from '../../assets/img/gayan.jpg'
import Dushani from '../../assets/img/dushani.jpg'
import Janith from '../../assets/img/janith.jpg'
import Heshani from '../../assets/img/heshani.jpg'
import Sohan from '../../assets/img/sohan.jpg'

function AboutusCards() {
  return (
    <div className='about-us'>
      <h1 id="aboutus-header">CHECK OUT OUR TEAM!</h1>
      <div className='about-us-container'>
        <div className='aboutus-wrapper'>
          <ul className="aboutus-ul">
              <li className='aboutus-list'>
            <Avatar  src={Gayan} size="150" round={true}/>
            <div className="aboutus-text">
            <span>Gayan Kodituwakku</span>
            </div>
             </li>

            <li className='aboutus-list'>
            <Avatar  src={Dushani} size="150" round={true}/>
            <div className="aboutus-text">
            <span>Dushani Ranasinghe</span>
            </div>
            </li>

            <li className='aboutus-list'>
            <Avatar  src={Janith} size="150" round={true}/>
            <div className="aboutus-text">
            <span>Janith Bimsara</span>
            </div>
            </li>

            <li className='aboutus-list'>
            <Avatar  src={Heshani} size="150" round={true}/> 
            <div className="aboutus-text">
            <span>Heshani Wickramarachchi</span>
            </div>
            </li>

           <li className='aboutus-list'>
            <Avatar  src={Sohan} size="150" round={true}/>
            <div className="aboutus-text">
            <span>Sohan Deemantha</span>
            </div>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutusCards;