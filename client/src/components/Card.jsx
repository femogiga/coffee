import filledStar from '../assets/Star_fill.svg';

const Card = ({ name, image, price, rating, votes, popular, available }) => {
  const cardStyle = {
    position: 'relative',
    minWidth: '16rem',
    maxWidth: '20rem',
    minHeight: '12rem',
    maxHeight: '14rem',
    objectFit: 'cover',
  };

  return (
    <div className='card' style={cardStyle}>
      <div className='card__image'>
        <img
          src={
            image ||
            'https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
          style={{ borderRadius: '12px', marginBlockEnd: '.5rem' }}
        />
      </div>
      <div className='flex justify-btw' style={{ marginBlockEnd: '.4rem' }}>
        <p>{name}</p>
        <p
          style={{
            backgroundColor: '#BEE3CC',
            color: 'black',
            padding: '.2rem .6rem',
            fontSize: '.75rem',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}>
          {price}
        </p>
      </div>
      <div className='flex justify-btw'>
        <div className='flex col-gap-04 '>
          <img src={filledStar} />
          <span>{rating}</span>
          <span className='colorgray'>({votes} votes)</span>
        </div>
        {
          <p style={{ color: '#ED735D', fontSize: '.95rem' }}>
            {available === true ? '' : 'Sold out'}
          </p>
        }
      </div>
      {popular && (
        <p
          style={{
            fontSize: '.9rem',
            fontWeight: 'bolder',
            backgroundColor: '#F6C768',
            color: 'black',
            padding: '.1rem .3rem',
            width: '5rem',
            textAlign: 'center',
            borderRadius: '3rem',
            position: 'absolute',
            left: '.6rem',
            top: '.6rem',
          }}>
          Popular
        </p>
      )}
    </div>
  );
};

export default Card;
