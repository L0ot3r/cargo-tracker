import Link from 'next/link';
import React from 'react';

const sidebarLinks = [
	{
		route: '/',
		label: 'Accueil',
	},
	{
		route: '/',
		label: 'À propos',
	},
	{
		route: '/',
		label: 'Contact',
	}
]

const LeftSidebar = () => {
	return (
		<section className='sticky left-0 top-0 z-20 flex h-screen w-fit min-w-[200px] flex-col justify-between overflow-auto border-r pb-5 pt-28 max-md:hidden'>
			<div className='flex w-full flex-1 flex-col gap-6 px-6'>
				{sidebarLinks.map((link) => (
					<Link href={link.route} key={link.label}>
						{link.label}
					</Link>
				))}
			</div>
		</section>
	);
};

export default LeftSidebar;
