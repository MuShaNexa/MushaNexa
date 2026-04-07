import {
	RiGlobalLine,
	RiMailSendLine,
	RiSendPlaneFill,
	RiWhatsappLine,
} from '@remixicon/react';
import { Mail, Phone, UserRound } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
	const contactDetails = [
		{
			id: 1,
			through: 'email',
			value: 'mushanexa@gmail.com',
			icon: <RiMailSendLine />,
		},
		{
			id: 1,
			through: 'whatsapp',
			value: '(+91) 9876543210',
			icon: <RiWhatsappLine />,
		},
		{
			id: 1,
			through: 'location',
			value: 'India & Worldwide',
			icon: <RiGlobalLine />,
		},
	];
	return (
		<section className='container mx-auto px-4 py-12 md:py-16 lg:py-32'>
			<h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-8 md:pb-16'>
				Let&apos;s Get In Touch
			</h2>
			<div className='grid gap-4 lg:grid-cols-3'>
				{contactDetails.map((contact) => (
					<a
						key={contact.id}
						href={`mailto:${contact.value}`}
						className={`flex items-center gap-6 p-6 shadow-md border border-zinc-100 rounded hover:scale-105 transition-all ${contact.through === 'email' ? 'hover:bg-red-50/50' : contact.through === 'whatsapp' ? 'hover:bg-green-50/50' : 'hover:bg-blue-50/50'} `}
					>
						<div
							className={`${contact.through === 'email' ? 'bg-red-100 text-red-600' : contact.through === 'whatsapp' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}  p-4 rounded transition-all`}
						>
							{contact.icon}
						</div>
						<div>
							<h3 className='capitalize font-medium'>{contact.through}</h3>
							<p className='font-light'>{contact.value}</p>
						</div>
					</a>
				))}
			</div>
			<ContactForm />
		</section>
	);
};

export default Contact;
