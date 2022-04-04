import React from 'react';

const CustomerReview = (props) => {
    const {name, review, rating} =props.review;
    return (
        <div className='border p-5 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold'>Name:{name}</h2>
            <h2 className='text-lg font-semi'>Review: {review}</h2>
            <p className='font-bold'>Rating: {rating}</p>
        </div>
    );
};

export default CustomerReview;