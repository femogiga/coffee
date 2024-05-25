import React from 'react'
import cafeImg from '../assets/bg-cafe.jpg'
import './content.scss'
const Content = () => {


  return (
    <div className='content'>
      <div className='content__img'>
        <img src={cafeImg} />
      </div>
      <div className='content__background'></div>
    </div>
  );
}

export default Content
