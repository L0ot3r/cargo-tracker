'use client';

import { Button } from '../ui/button';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const SwitchThemes = () => {
	const { theme, setTheme } = useTheme();
	return (
		<Button
			size={'icon'}
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
			<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
		</Button>
	);
};

export default SwitchThemes;
