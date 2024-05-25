import { useContext, useEffect, useState } from 'react';
import Card from './Card';
import './content.scss';
import { CoffeeContext } from '../context/CoffeeProvider';
const Collect = () => {
  const coffeeContext = useContext(CoffeeContext);
  const { coffeeData, selectedOption, handleOptionChange } = coffeeContext;

  return (
    <section className='collect'>
      <p className='flow-1' style={{ fontSize: '2rem' }}>
        Our Collection
      </p>
      <p className='colorgray'>
        Introducing our Coffee Collection, a selection of unique coffees
      </p>
      <p className='colorgray'>
        Introducing our Coffee Collection, a selection of unique coffees
      </p>
      <p className='flow-1 colorgray'>Introducing our Coffee Collection</p>
      <article className=''>
        <input
          type='radio'
          name='stock'
          id='allproduct'
          value='allproduct'
          className='stock'
          checked={selectedOption === 'allproduct'}
          onChange={handleOptionChange}
        />
        <input
          type='radio'
          name='stock'
          id='available'
          className='stock'
          value='available'
          checked={selectedOption === 'available'}
          onChange={handleOptionChange}
        />
        <div className='flex justify-center col-gap-2 flow-2'>
          <label htmlFor='allproduct' className='button'>
            All Products
          </label>
          <label htmlFor='available' className='button'>
            Available Now
          </label>
        </div>
      </article>

      <article className='card-container'>
        {selectedOption === 'allproduct'
          ? coffeeData &&
            coffeeData.map((coffee) => <Card key={coffee?.id} {...coffee} />)
          : coffeeData &&
            coffeeData
              .filter((item) => item.available === true)
              .map((coffee) => <Card key={coffee?.id} {...coffee} />)}
      </article>
    </section>
  );
};

export default Collect;
