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
		<section className='px-[4vw] py-[10vh] border-b border-black/5 bg-white/60 relative overflow-hidden'>

			<div className='container mx-auto relative z-10'>
				<h2 className='font-extrabold text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] mb-[8vh] tracking-tighter'>
					Let&apos;s Get In Touch
				</h2>
				
				<div className='grid gap-[4vh] lg:gap-[3vw] lg:grid-cols-3 mb-[10vh]'>
					{contactDetails.map((contact) => (
						<a
							key={contact.id}
							href={`mailto:${contact.value}`}
							className={`group flex items-center gap-[4vw] lg:gap-[1.5vw] p-[3vh] lg:p-[2vw] bg-white border border-black/5 rounded-3xl hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-2`}
						>
							<div
								className={`w-[4rem] h-[4rem] flex justify-center items-center rounded-2xl transition-all duration-500 ${contact.through === 'email' ? 'bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white' : contact.through === 'whatsapp' ? 'bg-green-50 text-green-500 group-hover:bg-green-500 group-hover:text-white' : 'bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white'}`}
							>
								{contact.icon}
							</div>
							<div>
								<h3 className='capitalize font-bold text-[1.2rem] text-black/80 tracking-tight'>{contact.through}</h3>
								<p className='font-light text-[0.95rem] text-black/50 mt-[0.5vh]'>{contact.value}</p>
							</div>
						</a>
					))}
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
