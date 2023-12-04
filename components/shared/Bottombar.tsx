import React from 'react';
import { Home as HomeIcon, LineChart, CalendarPlus } from 'lucide-react';
import Link from 'next/link';

const Bottombar = () => {
	return (
		<section className='fixed bottom-0 z-10 w-full rounded-t-3xl bg-gray-300 p-4 backdrop-blur-lg xs:px-7 md:hidden'>
			<div className='flex items-center justify-between gap-3 xs:gap-5'>
				<Link href='/'>
					<HomeIcon />
				</Link>
				<Link href='/'>
					<CalendarPlus />
				</Link>
				<Link href='/'>
					<LineChart />
				</Link>
			</div>
		</section>
	);
};

export default Bottombar;
