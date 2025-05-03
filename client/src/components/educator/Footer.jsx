import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t">
      <div className="flex items-center gap-4">
        <img className="hidden md:block w-20" src={assets.logo} alt="IOFTSYS logo" />
        <div className="hidden md:block h-7 w-[1px] bg-gray-500/60"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2025 © IOFTSYS. All Rights Reserved.
        </p>
      </div>
      <div className="flex items-center gap-3 md:mt-4">
        <a href="#">
          <img src={assets.facebook_icon} alt="Follow us on Facebook" className="w-5 h-5" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="Follow us on Twitter" className="w-5 h-5" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="Follow us on Instagram" className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
