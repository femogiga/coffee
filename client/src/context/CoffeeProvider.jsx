import React, { createContext, useEffect, useState } from 'react';

export const CoffeeContext = createContext(null);
const CoffeeProvider = ({ children }) => {
  const [coffeeData, setCoffeeData] = useState(null);
  const [availData, setAvailData] = useState(null);
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
    )
      .then((res) => res.json())
      .then((result) => setCoffeeData(result))
      .then(() => console.log(coffeeData));
  }, []);

  // useEffect(() => {
  //   coffeeData &&
  //     coffeeData
  //       .filter((item) => item?.available === true)
  //       .then((result) => setAvailData(result));

  //   console.log(availData);
  // }, []);



  const [selectedOption, setSelectedOption] = useState('');
  // console.log(availData)
  const handleOptionChange = (e) => {
    //const availData =  coffeeData.filter((item) => item?.available ===true);
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    // const data = selectedOption === 'available' ? setCoffeeData(availData ) :coffeeData
  }, [selectedOption, coffeeData, setCoffeeData]);
  return (
    <CoffeeContext.Provider
      value={{
        coffeeData,
        setCoffeeData,
        availData,
        selectedOption,
        handleOptionChange,
      }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeProvider;
