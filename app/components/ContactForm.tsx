'use client';

import { useState, useRef, useEffect } from 'react';
import {
	UserRound,
	Mail,
	Phone,
	Settings,
	DollarSign,
	Timer,
	NotebookTabs,
	ChevronDown,
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { RiSendPlaneLine } from '@remixicon/react';

const CustomSelect = ({
	name,
	id,
	options,
	placeholder,
	disabled,
	required,
	Icon,
}: {
	name: string;
	id: string;
	options: { value: string; label: string }[];
	placeholder: string;
	disabled?: boolean;
	required?: boolean;
	Icon: any;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState('');
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const selectedLabel = options.find((opt) => opt.value === selected)?.label || placeholder;

	return (
		<div className="relative group w-full" ref={dropdownRef}>
			<input
				className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none w-px h-px p-0 m-0"
				name={name}
				id={id}
				value={selected}
				required={required}
				onChange={() => {}}
				tabIndex={-1}
			/>
			
			<div
				role="button"
				tabIndex={0}
				onClick={() => !disabled && setIsOpen(!isOpen)}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						!disabled && setIsOpen(!isOpen);
					}
				}}
				className={`flex items-center gap-[1vw] bg-white/40 border border-black/10 px-[1.5rem] py-[0.5rem] rounded-2xl transition-all duration-300 focus-within:border-zinc-500 focus-within:bg-white focus-within:shadow-[0_0_0_rgba(0,0,0,0.1)] cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${isOpen ? 'border-zinc-500 bg-white shadow-[0_0_0_rgba(0,0,0,0.1)]' : ''}`}
			>
				<Icon className={`transition-colors ${isOpen ? 'text-zinc-500' : 'text-black/30'}`} />
				<div className={`p-[0.5rem] flex-1 outline-none bg-transparent whitespace-nowrap overflow-hidden text-ellipsis select-none ${selected ? 'text-black' : 'text-black/70'}`}>
					{selectedLabel}
				</div>
                <ChevronDown className={`w-5 h-5 text-black/30 transition-transform duration-300 ${isOpen ? 'rotate-180 text-zinc-500' : ''}`} />
			</div>

			{isOpen && !disabled && (
				<div className="absolute z-[60] w-full mt-2 bg-white rounded-xl shadow-xl border border-black/10 overflow-hidden">
					<div
						className="px-[1.5rem] py-4 text-black/70 cursor-pointer hover:bg-zinc-100 transition-colors border-b border-black/5 select-none"
						onClick={() => {
							setSelected('');
							setIsOpen(false);
						}}
					>
						{placeholder}
					</div>
					<div className="max-h-[30vh] overflow-y-auto w-full">
						{options.map((option) => (
							<div
								key={option.value}
								className={`px-[1.5rem] py-4 cursor-pointer transition-colors select-none ${selected === option.value ? 'bg-zinc-100 font-medium text-black' : 'hover:bg-zinc-50 text-black/90'}`}
								onClick={() => {
									setSelected(option.value);
									setIsOpen(false);
								}}
							>
								{option.label}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

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
					<CustomSelect
						name="project-type"
						id="project-type"
						placeholder="Select a project type"
						required
						disabled={state.submitting}
						Icon={Settings}
						options={[
							{ value: 'web-design', label: 'Web Design' },
							{ value: 'web-development', label: 'Web Development' },
							{ value: 'drupal-development', label: 'Drupal Development' },
							{ value: 'wordpress-development', label: 'Wordpress Development' },
							{ value: 'seo-optimization', label: 'SEO Optimization' }
						]}
					/>
					<ValidationError prefix="Project Type" field="project-type" errors={state.errors} />
				</div>
				{/* budget range */}
				<div className='grid gap-[1vh]'>
					<label htmlFor='budget' className='font-semibold text-black/70 text-[1rem] tracking-wide'>
						Budget Range
					</label>
					<CustomSelect
						name="budget"
						id="budget"
						placeholder="Select a budget range"
						disabled={state.submitting}
						Icon={DollarSign}
						options={[
							{ value: 'under-2000', label: 'Under $2000' },
							{ value: '2000-10000', label: '$2000-$10000' },
							{ value: '10000-50000', label: '$10000-$50000' },
							{ value: 'over-50000', label: '$50000+' },
							{ value: 'not-sure', label: 'Not sure' }
						]}
					/>
					<ValidationError prefix="Budget" field="budget" errors={state.errors} />
				</div>
				{/* project timeline */}
				<div className='grid gap-[1vh]'>
					<label htmlFor='timeline' className='font-semibold text-black/70 text-[1rem] tracking-wide'>
						Project Timeline
					</label>
					<CustomSelect
						name="timeline"
						id="timeline"
						placeholder="Select a timeline"
						disabled={state.submitting}
						Icon={Timer}
						options={[
							{ value: 'asap', label: 'Asap (1-2 weeks)' },
							{ value: '1-2-months', label: '1-2 months' },
							{ value: '2-3-months', label: '2-3 months' },
							{ value: 'flexible', label: 'Flexible' }
						]}
					/>
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
					className='lg:col-span-2 bg-black text-white px-[4vw] py-[2vh] rounded-full font-bold tracking-widest uppercase flex items-center justify-center gap-2 disabled:opacity-50 transition-all duration-500 hover:scale-[1.02] mt-[4vh] w-fit sm:mx-auto text-[0.9rem]'
				>
					{state.submitting ? 'Sending...' : 'Send Message'}
					<RiSendPlaneLine className="w-5 h-5" />
				</button>
			</form>
		</>
	);
};

export default ContactForm;
