'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

const Providers = ({ children, ...props }: ThemeProviderProps) => {
	return (
		<NextThemesProvider
			{...props}
			attribute='class'
			defaultTheme='system'
			enableSystem>
			{children}
		</NextThemesProvider>
	);
};

export default Providers;
