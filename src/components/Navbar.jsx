import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 
      fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center 
      max-w-7xl mx-auto">
        <Link
          to="/" //to the top
          className="flex items-center gap-2"
          onClick={()=>{
            setActive(""); //keep track of where we are on the page
            window.scrollTo(0, 0) //scroll to the top of the page
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain"/>
          <p className="text-white text-[18px] 
          font-bold cursor-pointer flex">
            Jenny Lee &nbsp;
            <span className="sm:block hidden">| &nbsp;SW Developer</span>
          </p>
        </Link>
        <ul className="list-non hidden sm:flex flex-row gap-10">
          {navLinks.map((link)=>(
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=>setActive(link.title)}
              >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile navigation for small devices */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close : menu} 
          alt="menu"
          className="w-[28px] h-[28] object-contain cursor-pointer"
          onClick={()=>setToggle(!toggle)}/>

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-non flex justify-end items-start flex-col gap-4">
              {navLinks.map((link)=>(
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={()=>{
                    //close when click "x"
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar