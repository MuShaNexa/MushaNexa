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
import { useForm, ValidationError } from '@formspree/react';
import { RiSendPlane2Fill } from '@remixicon/react';

const ContactForm = () => {
	const [state, handleSubmit] = useForm("mlgoodwe");

	if (state.succeeded) {
		return (
			<div className="flex flex-col items-center justify-center pt-20 text-center">
				<h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
					Thanks for reaching out!
				</h3>
				<p className="text-lg text-zinc-500">😊 We will get back to you shortly 😊</p>
			</div>
		);
	}

	return (
		<>
			<h3 className='my-[8vh] font-bold text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] tracking-tight'>
				OR Fill Out The Form Below
			</h3>
			<form className='grid gap-[4vh] lg:grid-cols-2' onSubmit={handleSubmit}>
				{/* name */}
				<div className='grid gap-[1vh]'>
					<label htmlFor='name' className='font-semibold text-black/70 text-[1rem] tracking-wide'>
						Full Name<span className='text-red-500 ml-1'>*</span>
					</label>
					<div className='flex items-center gap-[1vw] bg-white/40 border border-black/10 px-[1.5rem] py-[0.5rem] rounded-2xl transition-all duration-300 focus-within:border-zinc-500 focus-within:bg-white focus-within:shadow-[0_0_0_rgba(0,0,0,0.1)] group'>
						<UserRound className='text-black/30 group-focus-within:text-zinc-500 transition-colors' />
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Enter your full name'
							className='p-[0.5rem] flex-1 outline-none bg-transparent placeholder-black/30 text-black'
							required
							disabled={state.submitting}
						/>
					</div>
					<ValidationError prefix="Name" field="name" errors={state.errors} />
				</div>
				{/* email */}
				<div className='grid gap-[1vh]'>
					<label htmlFor='email' className='font-semibold text-black/70 text-[1rem] tracking-wide'>
						Email<span className='text-red-500 ml-1'>*</span>
					</label>
					<div className='flex items-center gap-[1vw] bg-white/40 border border-black/10 px-[1.5rem] py-[0.5rem] rounded-2xl transition-all duration-300 focus-within:border-zinc-500 focus-within:bg-white focus-within:shadow-[0_0_0_rgba(0,0,0,0.1)] group'>
						<Mail className='text-black/30 group-focus-within:text-zinc-500 transition-colors' />
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Enter your email'
							className='p-[0.5rem] flex-1 outline-none bg-transparent placeholder-black/30 text-black'
							required
							disabled={state.submitting}
						/>
					</div>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
				</div>
				{/* phone */}
				<div className='grid gap-[1vh]'>
					<label htmlFor='phone' className='font-semibold text-black/70 text-[1rem] tracking-wide'>
						Phone
					</label>
					<div className='flex items-center gap-[1vw] bg-white/40 border border-black/10 px-[1.5rem] py-[0.5rem] rounded-2xl transition-all duration-300 focus-within:border-zinc-500 focus-within:bg-white focus-within:shadow-[0_0_0_rgba(0,0,0,0.1)] group'>
						<Phone className='text-black/30 group-focus-within:text-zinc-500 transition-colors' />
						<input
							type='tel'
							name='phone'
							id='phone'
							placeholder='Enter your phone number'
							className='p-[0.5rem] flex-1 outline-none bg-transparent placeholder-black/30 text-black'
							disabled={state.submitting}
						/>
					</div>
					<ValidationError prefix="Phone" field="phone" errors={state.errors} />
				</div>
				{/* project type */}
				<div className='grid gap-[1vh]'>
					<label htmlFor='project-type' className='font-semibold text-black/70 text-[1rem] tracking-wide'>
						Project Type<span className='text-red-500 ml-1'>*</span>
					</label>
					<div className='flex items-center gap-[1vw] bg-white/40 border border-black/10 px-[1.5rem] py-[0.5rem] rounded-2xl transition-all duration-300 focus-within:border-zinc-500 focus-within:bg-white focus-within:shadow-[0_0_0_rgba(0,0,0,0.1)] group'>
						<Settings className='text-black/30 group-focus-within:text-zinc-500 transition-colors' />
						<select
							name='project-type'
							id='project-type'
							className='p-[0.5rem] flex-1 outline-none bg-transparent text-black/70 focus:text-black appearance-none'
							required
							disabled={state.submitting}
						>
							<option value='' className='text-black'>Select a project type</option>
							<option value='web-design' className='text-black'>Web Design</option>
							<option value='web-development' className='text-black'>Web Development</option>
							<option value='drupal-development' className='text-black'>Drupal Development</option>
							<option value='wordpress-development' className='text-black'>Wordpress Development</option>
							<option value='seo-optimization' className='text-black'>SEO Optimization</option>
						</select>
					</div>
					<ValidationError prefix="Project Type" field="project-type" errors={state.errors} />
				</div>
				{/* budget range */}
				<div className='grid gap-[1vh]'>
					<label htmlFor='budget' className='font-semibold text-black/70 text-[1rem] tracking-wide'>
						Budget Range
					</label>
					<div className='flex items-center gap-[1vw] bg-white/40 border border-black/10 px-[1.5rem] py-[0.5rem] rounded-2xl transition-all duration-300 focus-within:border-zinc-500 focus-within:bg-white focus-within:shadow-[0_0_0_rgba(0,0,0,0.1)] group'>
						<DollarSign className='text-black/30 group-focus-within:text-zinc-500 transition-colors' />
						<select
							name='budget'
							id='budget'
							className='p-[0.5rem] flex-1 outline-none bg-transparent text-black/70 focus:text-black appearance-none'
							disabled={state.submitting}
						>
							<option value='' className='text-black'>Select a budget range</option>
							<option value='under-2000' className='text-black'>Under $2000</option>
							<option value='2000-10000' className='text-black'>$2000-$10000</option>
							<option value='10000-50000' className='text-black'>$10000-$50000</option>
							<option value='over-50000' className='text-black'>$50000+</option>
							<option value='not-sure' className='text-black'>Not sure</option>
						</select>
					</div>
					<ValidationError prefix="Budget" field="budget" errors={state.errors} />
				</div>
				{/* project timeline */}
				<div className='grid gap-[1vh]'>
					<label htmlFor='timeline' className='font-semibold text-black/70 text-[1rem] tracking-wide'>
						Project Timeline
					</label>
					<div className='flex items-center gap-[1vw] bg-white/40 border border-black/10 px-[1.5rem] py-[0.5rem] rounded-2xl transition-all duration-300 focus-within:border-zinc-500 focus-within:bg-white focus-within:shadow-[0_0_0_rgba(0,0,0,0.1)] group'>
						<Timer className='text-black/30 group-focus-within:text-zinc-500 transition-colors' />
						<select
							name='timeline'
							id='timeline'
							className='p-[0.5rem] flex-1 outline-none bg-transparent text-black/70 focus:text-black appearance-none'
							disabled={state.submitting}
						>
							<option value='' className='text-black'>Select a timeline</option>
							<option value='asap' className='text-black'>Asap (1-2 weeks)</option>
							<option value='1-2-months' className='text-black'>1-2 months</option>
							<option value='2-3-months' className='text-black'>2-3 months</option>
							<option value='flexible' className='text-black'>Flexible</option>
						</select>
					</div>
					<ValidationError prefix="Timeline" field="timeline" errors={state.errors} />
				</div>
				{/* project description - Tell me more about your project */}
				<div className='grid gap-[1vh] lg:col-span-2'>
					<label htmlFor='description' className='font-semibold text-black/70 text-[1rem] tracking-wide'>
						Project Description<span className='text-red-500 ml-1'>*</span>
					</label>
					<div className='flex items-start gap-[1vw] bg-white/40 border border-black/10 px-[1.5rem] py-[1.5rem] rounded-2xl transition-all duration-300 focus-within:border-zinc-500 focus-within:bg-white focus-within:shadow-[0_0_0_rgba(0,0,0,0.1)] group'>
						<NotebookTabs className='mt-2 text-black/30 group-focus-within:text-zinc-500 transition-colors' />
						<textarea
							name='description'
							id='description'
							className='p-[0.5rem] flex-1 outline-none h-[20vh] resize-none bg-transparent placeholder-black/30 text-black'
							placeholder='Tell me more about your project...'
							required
							disabled={state.submitting}
						/>
					</div>
					<ValidationError prefix="Description" field="description" errors={state.errors} />
				</div>
				<button
					type='submit'
					disabled={state.submitting}
					className='lg:col-span-2 bg-black text-white px-[4vw] py-[2vh] rounded-full font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] disabled:opacity-50 transition-all duration-500 hover:scale-[1.02] mt-[4vh] w-fit sm:mx-auto text-[0.9rem]'
				>
					{state.submitting ? 'Sending...' : 'Send Message'}
				</button>
			</form>
		</>
	);
};

export default ContactForm;
