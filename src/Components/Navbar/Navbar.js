import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-slate-200 p-8 font-bold text-xl text-blue-900 text-center'>
            <Link className='m-3 ' to='/'>HOME</Link>
            <Link className='m-3 ' to='/reviews'>REVIEWS</Link>
            <Link className='m-3 ' to='/dashboard'>DASHBOARD</Link>
            <Link className='m-3 ' to='/blogs'>BLOGS</Link>
            <Link className='m-3 ' to='/about'>ABOUT</Link>
        </div>
    );
};

export default Navbar;