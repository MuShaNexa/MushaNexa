import Image from 'next/image';

const Services = () => {
	const services = [
		{
			id: 1,
			serviceName: 'Web Design',
			description:
				'Our development services are designed to help businesses transform ideas into high-quality digital solutions.',
		},
		{
			id: 2,
			serviceName: 'Web Development',
			description:
				'Our development services are designed to help businesses transform ideas into high-quality digital solutions.',
		},
		{
			id: 3,
			serviceName: 'Drupal Development',
			description:
				'Our development services are designed to help businesses transform ideas into high-quality digital solutions.',
		},
		{
			id: 4,
			serviceName: 'Wordpress Development',
			description:
				'Our development services are designed to help businesses transform ideas into high-quality digital solutions.',
		},
		{
			id: 5,
			serviceName: 'SEO Optimization',
			description:
				'Our development services are designed to help businesses transform ideas into high-quality digital solutions.',
		},
	];
	return (
		<section className='container mx-auto px-4 py-12 md:py-16 lg:py-32'>
			<h2 className='uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:col-span-3 '>
				services
			</h2>
			<div className='mt-8 md:mt-16'>
				{services.map((service) => (
					<div
						key={service.id}
						className='relative grid gap-4 group py-6 hover:py-12 hover:px-4 overflow-hidden transition-all duration-150 border-b border-zinc-300 hover:text-white lg:grid-cols-12'
					>
						<div className='font-semibold lg:col-span-1'>0{service.id}</div>
						<h3 className='font-bold text-xl md:text-2xl lg:text-3xl col-span-4'>
							{service.serviceName}
						</h3>
						<Image src="/banner_img.png" alt="fg" width={100} height={100} className='col-span-2 border opacity-0 group-hover:opacity-100 transition-all duration-700' />
						<p className='text-lg md:text-xl xl:text-2xl font-light col-span-5'>
							{service.description}
						</p>
						<div className='absolute -top-full left-0 w-full -translate-yfull group-hover:translate-y-full h-full bg-green-600 -z-10 transition-all duration-500'></div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
