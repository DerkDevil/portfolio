"use client";

import React, { useState, useContext } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { ScrollContext } from '../ScrollManager';

const CustomSheet = ({ isOpen, onClose, children }) => {
    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black/80 transition-opacity duration-300" onClick={onClose}></div>
            <div className="fixed right-0 top-0 h-full w-3/4 bg-primary p-6 shadow-lg transition-transform ease-in-out">
                <button onClick={onClose} className="absolute right-8 top-8">
                    <IoMdClose className="text-3xl text-accent" />
                </button>
                {children}
            </div>
        </div>
    );
};

const MobileNav = () => {
    const { scrollToSection } = useContext(ScrollContext);
    const [isOpen, setIsOpen] = useState(false);

    console.log('MobileNav rendered');

    return (
        <div>
            <button onClick={() => setIsOpen(true)} className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </button>
            <CustomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className='mt-20 mb-28 text-center text-2xl'>
                    <h1 className='text-4xl font-semibold'>
                        Dereck<span className='text-accent'>.</span>
                    </h1>
                </div>
                <nav className='flex flex-col justify-center items-center gap-8'>
                    <button onClick={() => { console.log('Navigating to home'); scrollToSection('home'); setIsOpen(false); }}>Home</button>
                    <button onClick={() => { console.log('Navigating to services'); scrollToSection('services'); setIsOpen(false); }}>Services</button>
                    <button onClick={() => { scrollToSection('resume'); setIsOpen(false); }}>Resume</button>
                    <button onClick={() => { scrollToSection('work'); setIsOpen(false); }}>Work</button>
                    <button onClick={() => { scrollToSection('contact'); setIsOpen(false); }}>Contact</button>
                </nav>
            </CustomSheet>
        </div>
    );
};

export default MobileNav;