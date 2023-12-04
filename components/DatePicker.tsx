'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Calendar } from './ui/calendar';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DatePicker = () => {
	const router = useRouter();

	const FormSchema = z.object({
		selectedDate: z.date({
			required_error: 'Veuillez choisir une date',
		}),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		const urlOfDate = data.selectedDate.getTime().toString();
		router.push(`/livraison/${urlOfDate}`);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='selectedDate'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormLabel>Date de livraison</FormLabel>
							<Popover>
								<div className='flex items-center gap-4'>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant={'outline'}
												className={cn(
													'w-[240px] pl-3 text-left font-normal',
													!field.value && 'text-muted-foreground'
												)}>
												{field.value ? (
													format(field.value, 'PPP')
												) : (
													<span>Choisir une date</span>
												)}
												<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<Button type='submit'>Valider</Button>
								</div>
								<PopoverContent className={'w-auto p-0'} align='start'>
									<Calendar
										mode='single'
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) => date > new Date()}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
};

export default DatePicker;
