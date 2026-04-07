import Image from 'next/image';
import Link from 'next/link';

const NavbarLogo = () => {
	return (
		<Link href={'/'} className='h-12 w-12 flex justify-center items-center'>
			<Image src='/logo_white.png' alt='logo' width={48} height={48} />
		</Link>
	);
};

export default NavbarLogo;
