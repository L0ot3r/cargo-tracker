import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/shared/Header';
import Providers from '@/components/providers/Providers';
import Bottombar from '@/components/shared/Bottombar';
import LeftSidebar from '@/components/shared/LeftSidebar';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr'>
			<body
				className={cn(
					'bg-background font-sans antialiased',
					fontSans.variable
				)}>
				<Providers>
						<Header />
						<main className='flex flex-row'>
							<LeftSidebar />
							<section className='main-container'>{children}</section>
						</main>
						<Bottombar />
				</Providers>
			</body>
		</html>
	);
}
