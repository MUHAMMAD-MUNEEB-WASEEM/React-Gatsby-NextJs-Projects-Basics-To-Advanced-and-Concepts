import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Shoes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/2.jpg'
              text='Be ready to become the winner of the show'
              label='Mystery'
              path='/products'
            />
            <CardItem
              src='./images/1.jpg'
              text='Experience Football on Top of the Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='./images/3.jpg'
              text='Make your own path that discovers your later journey'
              label='Adrenaline'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;