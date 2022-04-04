import React, { useContext, useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import { reviewContext } from '../../App';


const Home = () => {
    // const [reviews, setReviews] = useState([])
    const [reviews, setReviews] = useContext(reviewContext);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <div>
            <div className='grid grid-cols-2 items-center justify-center align-middle container mx-auto px-4'>
            <div>
            <h2 className='text-6xl font-bold mb-5'>Your next laptop</h2>
            <h2 className='text-6xl font-bold mb-5 text-blue-900'>Your best laptop</h2>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil perferendis nesciunt repellendus molestias placeat facilis mollitia, inventore laudantium sequi quos exercitationem rem voluptas dignissimos accusantium. Iusto officia illum fugiat.</p>
            <button className='bg-gray-300 px-4 py-2 rounded-lg text-blue-900 font-semibold mt-5'>Live Demo</button>
            </div>
            
                <div>
                    <img className=' h-screen' src={"/MacBook.jpeg"} alt="" />
                
            </div>
        </div>
    <div>
                <div className='text-center'>
                     <h2 className='text-4xl font-bold text-center mt-20'>Customer Reviews:{reviews.length}</h2>
            
                </div>
                    <div className='grid grid-cols-3 gap-5 mt-10 container mx-auto px-4 '>
                    {
                        reviews.map(review => <CustomerReview key={review.id} review={review}></CustomerReview>)
                    }
                    </div>
                    <div className='text-center'>
                    <button className='bg-gray-300 py-3 px-4 rounded-lg mt-20 font-semibold text-blue-900'>See All Reviews</button>
                    </div>
                </div>
        </div>
    );
};

export default Home;