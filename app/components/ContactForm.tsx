'use client';

import {
	UserRound,
	Mail,
	Phone,
	Settings,
	DollarSign,
	Timer,
	NotebookTabs,
} from 'lucide-react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [projectType, setProjectType] = useState('');
	const [budget, setBudget] = useState('');
	const [timeline, setTimeline] = useState('');
	const [description, setDescription] = useState('');
  const [state, handleSubmit] = useForm("mlgoodwe");
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<>
			<h3 className='my-16 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:pb-16'>
				OR Fill Out The Form Below
			</h3>
			<form className='grid gap-8 lg:grid-cols-2' onSubmit={handleSubmit}>
				{/* name */}
				<div className='grid gap-2'>
					<label htmlFor='name' className='font-medium'>
						Full Name<span className='text-red-600'>*</span>
					</label>
					<div className='flex items-center gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<UserRound />
						<input
							type='text'
							name='name'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder='Enter your full name'
							className='p-2 flex-1 outline-none'
							required
						/>
					</div>
				</div>
				{/* email */}
				<div className='grid gap-2'>
					<label htmlFor='email' className='font-medium'>
						Email<span className='text-red-600'>*</span>
					</label>
					<div className='flex items-center gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<Mail />
						<input
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Enter your email'
							className='p-2 flex-1 outline-none'
							required
						/>
					</div>
				</div>
				{/* phone */}
				<div className='grid gap-2'>
					<label htmlFor='phone' className='font-medium'>
						Phone
					</label>
					<div className='flex items-center gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<Phone />
						<input
							type='tel'
							name='phone'
							id='phone'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							placeholder='Enter your phone number'
							className='p-2 flex-1 outline-none'
						/>
					</div>
				</div>
				{/* project type */}
				<div className='grid gap-2'>
					<label htmlFor='project-type' className='font-medium'>
						Project Type<span className='text-red-600'>*</span>
					</label>
					<div className='flex items-center gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<Settings />
						<select
							name='project-type'
							id='project-type'
							value={projectType}
							onChange={(e) => setProjectType(e.target.value)}
							className='p-2 flex-1 outline-none '
							required
						>
							<option value=''>Select a project type</option>
							<option value='web-design'>Web Design</option>
							<option value='web-development'>Web Development</option>
							<option value='drupal-development'>Drupal Development</option>
							<option value='wordpress-development'>
								Wordpress Development
							</option>
							<option value='seo-optimization'>SEO Optimization</option>
						</select>
					</div>
				</div>
				{/* budget range - Under $2000, $2000-$10000, $10000-$50000, $50000+, Not sure */}
				<div className='grid gap-2'>
					<label htmlFor='budget' className='font-medium'>
						Budget Range<span className='text-red-600'>*</span>
					</label>
					<div className='flex items-center gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<DollarSign />
						<select
							name='budget'
							id='budget'
							value={budget}
							onChange={(e) => setBudget(e.target.value)}
							className='p-2 flex-1 outline-none '
							required
						>
							<option value=''>Select a budget range</option>
							<option value='under-2000'>Under $2000</option>
							<option value='2000-10000'>$2000-$10000</option>
							<option value='10000-50000'>$10000-$50000</option>
							<option value='over-50000'>$5000₀+</option>
							<option value='not-sure'>Not sure</option>
						</select>
					</div>
				</div>
				{/* project timeline - asap (1-2 weeks) 1-2 months 2-3 months flexible */}
				<div className='grid gap-2'>
					<label htmlFor='timeline' className='font-medium'>
						Project Timeline<span className='text-red-600'>*</span>
					</label>
					<div className='flex items-center gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<Timer />
						<select
							name='timeline'
							id='timeline'
							value={timeline}
							onChange={(e) => setTimeline(e.target.value)}
							className='p-2 flex-1 outline-none '
							required
						>
							<option value=''>Select a timeline</option>
							<option value='asap'>Asap (1-2 weeks)</option>
							<option value='1-2-months'>1-2 months</option>
							<option value='2-3-months'>2-3 months</option>
							<option value='flexible'>Flexible</option>
						</select>
					</div>
				</div>
				{/* project description - Tell me more about your project */}
				<div className='grid gap-2 lg:col-span-2'>
					<label htmlFor='description' className='font-medium'>
						Project Description<span className='text-red-600'>*</span>
					</label>
					<div className='flex items-start gap-4 shadow-md border border-zinc-100 px-2 rounded'>
						<textarea
							name='description'
							id='description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className='p-2 flex-1 outline-none h-40 resize-none'
							placeholder='Tell me more about your project...'
							required
						/>
					</div>
				</div>
				<button
					type='submit'
					className='bg-white text-black px-6 sm:px-12 py-2 rounded font-medium sm:mx-auto'
				>
					Contact
				</button>
			</form>
		</>
	);
};

export default ContactForm;
