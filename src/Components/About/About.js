import React from 'react';

const About = () => {
    return (
        <div className='h-screen bg-gradient-to-r from-sky-500 to-indigo-500 '>
            <div className='grid grid-cols-2 items-center container mx-auto px-4'>
                <div>
                    <h2 className='text-4xl font-extrabold text-white text-center p-5'>ABOUT US</h2>
                    <h2 className='text-white'>What makes a good about us?
                        Image result for about us
                        What makes a good About Us or About Me page? A remarkable About page is genuine, approachable, and distinguished. It should give the visitor a glimpse into what working with you and your business might be like. You can include personal interests, stories, and photos that convey the unique story of your business </h2>
                    <button className='mt-5 py-2 px-5 bg-white rounded-lg font-bold text-blue-900 '>READ MORE</button>
                </div>
                <div className='container mx-auto px-4'>
                    <img className='m-auto h-96 w-96 mt-40 rounded-full' src={"/about.jpg"} alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;