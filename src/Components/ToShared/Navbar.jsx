import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links=<>
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/login'} >Login</NavLink>
        <NavLink to={'/register'} >Register</NavLink>
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/allcrops'} >All crops</NavLink>
        <NavLink to={'/profile'} >Profile</NavLink>
        <NavLink to={'/addcrops'} >Add crops</NavLink>
        <NavLink to={'/my-posts'} >Add crops</NavLink>
        <NavLink to={'/my-interest'} >Add crops</NavLink>

    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost text-xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] bg-clip-text text-transparent">Krishi Link</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] text-white ">Logout</Link>
  </div>
</div>
    );
};

export default Navbar;