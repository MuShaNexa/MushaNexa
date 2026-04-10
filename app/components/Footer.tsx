import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterXLine } from "@remixicon/react";

const Footer = () => {
	return (
		<footer className='bg-black text-white'>
			<div className='container px-4 mx-auto text-center py-12 md:py-16 lg:py-32'>
				{/* <h2 className='text-[16vw] xs:text-[15.5vw] sm:text-[14vw] md:text-[14vw] lg:text-[14.5vw] xl:text-[15vw] 2xl:text-[240px] font-extrabold text-center leading-none ttt'> */}
					<h2 className='font-extrabold text-center leading-none text-[clamp(71px,13.48vw,240px)]'>
					MUSHANEXA
				</h2>
			</div>
				<p className='text-center text-xs sm:text-sm md:text-base lg:text-lg tracking-wide mt-1'>All Rights Reserved &copy; 2026</p>
				<ul className='flex justify-center gap-3 sm:gap-5 md:gap-6 mt-4 text-lg sm:text-xl md:text-2xl pb-16'>
					<li>
						<a href='https://www.facebook.com/mushanexa/'>
							<RiFacebookFill />
						</a>
					</li>
					<li>
						<a href='https://www.instagram.com/mushanexa/'>
							<RiInstagramLine />
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/company/mushanexa/'>
							<RiLinkedinFill />
						</a>
					</li>
					<li>
						<a href='https://x.com/mushanexa'>
							<RiTwitterXLine />
						</a>
					</li>
				</ul>
		</footer>
	);
};

export default Footer;
