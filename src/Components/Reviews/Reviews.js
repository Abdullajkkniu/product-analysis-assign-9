import React, { useContext, useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import { reviewContext } from '../../App';
import useReviews from '../hooks/useReviews';

const Reviews = () => {
    const [reviews] = useReviews([])
    
    return (
        <div className='container mx-auto px-4 mb-5'>
            <h1 className='text-4xl font-bold m-5 text-center text-blue-600 shadow rounded p-4 '>Customer Reviews</h1>
            <div className='grid grid-cols-3 gap-5 container mx-auto px-4 '>
            {
                reviews.map(review=> <CustomerReview key={review.id} review={review}></CustomerReview>)
            }
            </div>
            
        </div>
    );
};

export default Reviews;