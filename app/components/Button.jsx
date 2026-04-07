const Button = () => {
	return (
		<a
			href={`#`}
			className={`uppercase font-semibold block py-2 px-8 bg-transparent animated-blob rounded-full ml-auto lg:ml-16 sm:mr-4 md:mr-12`}
		>
			Contact
			<div className='animated-blob-one'></div>
			<div className='animated-blob-two'></div>
		</a>
	);
};

export default Button;
