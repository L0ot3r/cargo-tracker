import Link from 'next/link';
import React from 'react';
import SwitchThemes from '../providers/SwitchThemes';

const Header = () => {
	return (
		<header className='fixed top-0 z-30 w-full px-6 py-3 bg-secondary'>
			<nav className='flex gap-3 justify-between items-center'>
				<Link href={'/'}>
					<h1 className='text-2xl font-bold'>
						Cargo<span className='text-red-400'>Tracker</span>
					</h1>
				</Link>
				<ul className='flex gap-5 items-center'>
					<li>
						<Link href={'/'}>Acceuil</Link>
					</li>
					<li>
						<Link href={'/'}>À propos</Link>
					</li>
					<li>
						<Link href={'/'}>Contact</Link>
					</li>
				</ul>
				<div>
					<SwitchThemes />
				</div>
			</nav>
		</header>
	);
};

export default Header;
