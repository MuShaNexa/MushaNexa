const NavbarLinks = () => {
  const navLinks = ['about', 'services', 'work'];
	return (
		<ul className='hidden lg:flex font-semibold gap-4 ml-auto '>
			{navLinks.map((link, idx) => (
				<li
					key={idx}
					className={`transition hover:scale-125 hover:font-extrabold`}
				>
					<a
						href={`#${link}`}
						className={`uppercase block py-2 px-8`}
					>
						{link}
						{link === 'contact' && (
							<>
								<div className='animated-blob-one'></div>
								<div className='animated-blob-two'></div>
							</>
						)}
					</a>
				</li>
			))}
		</ul>
	);
};

export default NavbarLinks;
