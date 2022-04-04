import React, { useContext, useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import { reviewContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import useReviews from '../hooks/useReviews';


const Home = () => {
    const navigate = useNavigate();
    // const [reviews, setReviews] = useState([])
    // const [reviews, setReviews] = useContext(reviewContext);
    // useEffect(()=>{
    //     fetch('data.json')
    //     .then(res=> res.json())
    //     .then(data => setReviews(data));
    // },[])
    const [reviews] = useReviews([]);
    return (
        <div>
            <div className='grid grid-cols-2 items-center justify-center align-middle container mx-auto px-4'>
            <div className='mr-4'>
            <h2 className='text-6xl font-bold mb-5'>Your next laptop</h2>
            <h2 className='text-6xl font-bold mb-5 text-blue-900'>Your best laptop</h2>
            <p className='text-gray-500'>Welcome to our Laptop market analysis. At present it is giving it's customers pretty cool services.Don't miss the summer offer, because there are maximum offer in this summer. So, take your decision as soon as possible because your next laptop is your best laptop. Thank you.</p>
            <button className='bg-gray-300 hover:bg-sky-400 hover:text-white px-4 py-2 rounded-lg text-blue-900 font-semibold mt-5'>Live Demo</button>
            </div>
            
                <div>
                    <img className=' h-screen' src={"/MacBook.jpeg"} alt="" />
                
            </div>
        </div>
    <div>
                <div className='text-center'>
                     <h2 className='text-4xl font-bold text-center mt-20 text-blue-600'>Customer Reviews:{reviews.length}</h2>
            
                </div>
                    <div className='grid grid-cols-3 gap-5 mt-10 container mx-auto px-4 '>
                    {
                        reviews.slice(0,3).map(review => <CustomerReview key={review.id} review={review}></CustomerReview>)
                    }
                    </div>
                    <div className='text-center'>
                    <button onClick={()=>navigate("/reviews")} className='bg-gray-300 py-3 px-4 rounded-lg mt-10 font-semibold text-blue-900 hover:bg-sky-500 hover:text-white mb-5'>See All Reviews</button>
                    </div>
                </div>
        </div>
    );
};

export default Home;