import Image from 'next/image';

const Services = () => {
	const services = [
		{
			id: 1,
			serviceName: 'Web Design',
			image: '/figma.webp',
			description:
				'Crafting intuitive, brand-led web design with modern layouts, strong visual hierarchy, and mobile-first user experiences.',
		},
		{
			id: 2,
			serviceName: 'Web Development',
			image: '/next.webp',
			description:
				'Building fast, scalable websites using modern frameworks, clean architecture, and best-practice front-end development.',
		},
		{
			id: 3,
			serviceName: 'Drupal Development',
			image: '/drupal.webp',
			description:
				'Delivering robust Drupal solutions for complex content management, custom modules, and enterprise-grade digital platforms.',
		},
		{
			id: 4,
			serviceName: 'Wordpress Development',
			image: '/wordpress.webp',
			description:
				'Creating flexible WordPress websites tailored for brands, eCommerce, and easy content updates without sacrificing performance.',
		},
		{
			id: 5,
			serviceName: 'SEO Optimization',
			image: '/seo.webp',
			description:
				'Improving search visibility through technical SEO, on-page optimization, and content strategies that drive organic traffic.',
		},
	];
	return (
		<section id='services' className='container mx-auto px-4 py-12 md:py-16 lg:py-32'>
			<h2 className='uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:col-span-3 '>
				services
			</h2>
			<div className='mt-8 md:mt-16'>
				{services.map((service) => (
					<div
						key={service.id}
						className='relative grid gap-4 group py-6 hover:py-12 hover:px-4 overflow-hidden transition-all duration-700 border-b border-zinc-300 hover:text-white lg:grid-cols-12'
					>
						<div className='font-semibold lg:col-span-1 text-3xl'>
							0{service.id}
						</div>
						<h3 className='font-bold text-xl md:text-2xl lg:text-3xl col-span-4 self-center lg:self-start'>
							{service.serviceName}
						</h3>
						<Image
							src={service.image}
							alt='fg'
							width={100}
							height={100}
							className='col-span-2 w-24 h-24 opacity-0 group-hover:opacity-100 transition-all duration-700 hidden lg:block'
						/>
						<p className='text-lg md:text-xl lg:text-2xl font-light col-span-5'>
							{service.description}
						</p>
						<div className='absolute -top-full left-0 w-full -translate-yfull group-hover:translate-y-full h-full bg-green-600 -z-10 transition-all duration-700'></div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
