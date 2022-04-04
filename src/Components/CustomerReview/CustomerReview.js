import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomerReview = (props) => {
    const { name, review, img} = props.review;
    return (
        <div className='border p-5 rounded-lg shadow-lg hover:bg-sky-400 hover:text-white'>
            <img className='w-36 h-36 rounded-full m-auto' src={img} alt="" />
            <h2 className='text-xl font-bold'>Name:{name}</h2>
            <h2 className='text-lg font-semi'>Review: {review}</h2>
            <p className='font-bold'>Rating: { }</p>
            <Rating
            
                initialRating={4.5}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                readonly
            ></Rating>
            
        </div>
    );
};

export default CustomerReview;