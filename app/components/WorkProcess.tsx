'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

const WorkProcess = () => {
	const intro =
		'Our comprehensive working process ensures that every project is executed with precision, creativity, and a focus on delivering exceptional results. From the initial consultation to the final launch, we follow a structured approach that guarantees client satisfaction and project success.';
	const data = [
		{
			id: '01',
			title: 'Research & Discovery',
			description:
				'In-depth consultation to understand your business, goals, and target audience',
		},
		{
			id: '02',
			title: 'Planning & Strategy',
			description:
				'Create detailed project roadmap and define technical specifications',
		},
		{
			id: '03',
			title: 'Design & Prototyping',
			description:
				'Create wireframes and high-fidelity design mockups for all devices',
		},
		{
			id: '04',
			title: 'Development & Implementation',
			description:
				'Build clean, optimized code with security and scalability as priorities',
		},
		{
			id: '05',
			title: 'Testing & Optimization',
			description:
				'Comprehensive testing, performance optimization, and security checks',
		},
		{
			id: '06',
			title: 'Launch & Support',
			description:
				'Deploy to production, post-launch support, and ongoing maintenance',
		},
	];
	const images = ['/figma.webp','/next.webp','/drupal.webp','/wordpress.webp','/seo.webp'];
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(prev => (prev +1) % images.length)
		}, 500)
		return () => clearInterval(interval)
	}, [images.length])
	return (
		<section className='container mx-auto px-4 py-12 md:py-16 lg:py-32'>
			<h2 className='uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:col-span-3 '>
				Working Process
			</h2>
      <div className='mt-8 md:mt-16 lg:flex lg:justify-between'>
        <div className='hidden lg:max-w-[30%] lg:flex flex-col'>
          <p className='lg:text-xl font-light'>{intro}</p>
          <Image src={images[currentImageIndex]} width={192} height={192} alt="" className='w-48 w-48 mt-auto mb-16' />
        </div>
        <div className='lg:max-w-[50%]'>
					{data.map(item => (
						<div key={item.id} className='flex gap-4 sm:gap-8 pb-8 md:pb-16'>
							<div className='font-semibold text-3xl md:text-5xl'>{item.id}</div>
							<div>
								<h3 className='font-bold text-xl md:text-2xl lg:text-3xl'>{item.title}</h3>
								<p className='text-lg md:text-xl lg:text-2xl font-light'>{item.description}</p>
							</div>
						</div>
					))}
				</div>
      </div>
		</section>
	);
};

export default WorkProcess;
