import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold text-blue-600 text-center m-5 underline'>Q & A Part</h2>
            <div className='border p-5 m-4 shadow-md rounded-xl'>
                <h1 className='text-blue-600 font-bold'>1. What is Context API?</h1>
                <p>Answer: The React Context API is mainly used for producing global variables. This is alternative to props drilling. By using Redux context is also touted as an easier and lighter to state management.

                </p>
                <p><span className='text-yellow-700 font-semibold'>How it works : </span> Basically it returns a consumer and a provider. Provider provides the state to its children.It holds all children and be the parent of the children.</p>
            </div>
            <div className='border p-5 m-4 shadow-md rounded-xl'>
                <h1 className='text-blue-600 font-bold'>2. What is Semantic tag?</h1>
                <p>Answer: Semantic HTML elements are describes their meaning in a human and machine-readable way. Header, footer, article are all consider as semantic tags of html 5. They describe the purpose of the elements accurately. It makes HTML more comprehensive by defining the different sections and layout. It makes web pages more informative.</p>
            </div>
            <div className='border p-5 m-4 shadow-md rounded-xl'>
                <h1 className='text-blue-600 font-bold'>3. What is the difference among inline, block and inline-block? </h1>
                <p>i. Inline element only occupy just the width when it requeirs. Basically you can't set the width or height.
                ii. Block is the element that will start a new line and take the full width. you can set it's width and height easily.
                iii. Inline-block is the element that is formatted but just like the inline element. You can set width and height values.
                     </p>
            </div>
        </div>
    );
};

export default Blogs;