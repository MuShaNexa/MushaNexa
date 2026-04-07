import Image from 'next/image';
import Button from './Button';

const Hero = () => {
	return (
		<section className='bg-dark'>
			<div className='bg-dark text-white min-h-[calc(100vh-80px)] lg:grid grid-cols-2 max-w-384 mx-auto'>
				<div className='relative'>
					<Image
						src='/banner_img.png'
						alt='ceo'
						width={1024}
						height={1024}
						className='max-h-[calc(100vh-80px)] object-cover sm:object-[33%_25%] hover:sepia-100 transition-all duration-1000'
					/>
					<div className='absolute top-0 left-0 h-full w-full bg-linear-to-b from-transparent from-80% to-black pointer-events-none'></div>
					<div className='absolute top-0 left-0 h-full w-full bg-linear-to-r from-transparent from-80% to-black pointer-events-none'></div>
				</div>

				<div className='p-12 md:p-16 flex flex-col gap-6 lg:gap-8 xl:gap-16 lg:justify-center'>
					<div className='text-center text-sm w-fit mx-auto px-2 py-1 rounded-full flex justify-center items-center'>
						<div className='w-2 h-2 bg-green-600 rounded-full animate-pulse mr-2'></div>
						India <span className='mx-1'>|</span> Worldwide
					</div>
					<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-extrabold'>
						Building <span className='text-lime-600'> High-Performance</span>{' '}
						<span className='text-violet-400'>Digital Solutions</span> That{' '}
						<span className='text-rose-600'>Drive Growth</span>
					</h1>
					<p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center font-mono'>
						Serving businesses of all sizes across India and worldwide
					</p>
					{/* <Button /> */}
				</div>
			</div>
		</section>
	);
};

export default Hero;
