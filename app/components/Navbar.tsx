import { Tally4 } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
	const navLinks = ['about', 'services', 'work'];
	return (
		<nav className='bg-dark text-white relative'>
			<div className='container mx-auto px-4 flex justify-between items-center gap-6 h-20'>
				{/* logo */}
				<div className='h-12 w-12 flex justify-center items-center'>
					<Image src='/logo_white.png' alt='logo' width={48} height={48} />
				</div>
				{/* links */}
				<ul className='hidden lg:flex lg:absolute lg:top-1/2 lg:left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black font-semibold gap-12 py-2 px-6 rounded'>
					{navLinks.map((link, idx) => (
						<li key={idx}>
							<a href={`#${link}`} className='uppercase'>
								{link}
							</a>
						</li>
					))}
				</ul>
				{/* cta */}
				<a href='#contact' className='ml-auto button'>
					Contact
				</a>
				{/* hamburger */}
				<Tally4 className='rotate-90' />
			</div>
		</nav>
	);
};

export default Navbar;
