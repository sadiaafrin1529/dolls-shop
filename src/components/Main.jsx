import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Main = () => {
    return (
        <div className='mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;