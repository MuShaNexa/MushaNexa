import type { Metadata } from 'next';
import { IBM_Plex_Sans, Geist } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const ibmPlexSans = IBM_Plex_Sans({
	variable: '--font-ibm-plex-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'MushaNexa • A agency that you need  | Web Design | Web Development | Drupal Development | Wordpress Development | SEO Optimization',
	description: 'MushaNexa is a leading web design and development agency specializing in creating stunning websites, robust Drupal and WordPress solutions, and effective SEO strategies to elevate your online presence.',
	icons: {
		icon: '/favicon.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={cn("antialiased", ibmPlexSans.variable, "font-sans", geist.variable)}>
			<body className='select-none overflow-x-hidden'>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
