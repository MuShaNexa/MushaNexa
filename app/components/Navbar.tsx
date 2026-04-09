'use client';

import { Tally4, X } from 'lucide-react';
import NavbarLogo from './navbar/NavbarLogo';
import NavbarLinks from './navbar/NavbarLinks';
import { useState } from 'react';
import Button from './Button';

const Navbar = () => {
	const [mobileMenu, setmobileMenu] = useState(false);
	return (
		<nav className='bg-dark text-white sticky top-0 z-[1000]'>
			<div className='container mx-auto px-4 flex justify-between items-center gap-6 h-20'>
				<NavbarLogo />
				<NavbarLinks />
				<Button />
				{mobileMenu ? (
					<X className='lg:hidden cursor-pointer' onClick={() => setmobileMenu(!mobileMenu)} />
				) : (
					<Tally4
						className='rotate-90 lg:hidden cursor-pointer'
						onClick={() => setmobileMenu(!mobileMenu)}
					/>
				)}
			</div>
			<div
				className={`absolute bg-dark p-16 z-10 w-full flex justify-center items-center lg:hidden text-center text-3xl sm:text-4xl transition-opacity duration-1000 ${mobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
			>
				<ul className='flex flex-col gap-16'>
					<li onClick={() => setmobileMenu(false)}>
						<a href='#about'>About</a>
					</li>
					<li onClick={() => setmobileMenu(false)}>
						<a href='#services'>Services</a>
					</li>
					<li onClick={() => setmobileMenu(false)}>
						<a href='#work'>Work</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
