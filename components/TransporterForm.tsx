'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import moment from 'moment';
import 'moment/locale/fr';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

const transporterList = [
	'Chronopost',
	'Colissimo',
	'DHL',
	'DPD',
	'FedEx',
	'Mondial Relay',
	'UPS',
];

const TransporterForm = ({ dateId }: { dateId: number }) => {
	const date = new Date(dateId);
	const formattedDate = moment(date).locale('fr').format('DD MMMM YYYY');

	const FormSchema = z.object({
		transporter: z.string().min(1),
		countColis: z.string().min(1),
	});
	const [dataForm, setDataForm] = useState<z.infer<typeof FormSchema>[]>();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			transporter: '',
			countColis: '',
		},
	});

	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		setDataForm((prev) => [...(prev || []), data]);
		form.reset();
	};

	return (
		<div className='p-10 border border-gray-400 rounded-xl'>
			<h1 className='text-2xl font-semibold mb-8'>{formattedDate}</h1>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='w-full px-5 flex flex-col gap-6'>
					<div className='flex gap-4 items-center'>
						<div className='w-full'>
							<FormField
								control={form.control}
								name='transporter'
								render={({ field }) => (
									<FormItem className='flex flex-col'>
										<FormLabel>Transporteur</FormLabel>
										<FormControl>
											<Select onValueChange={field.onChange} {...field}>
												<SelectTrigger>
													<SelectValue placeholder='Choisir un transporteur' />
												</SelectTrigger>
												<SelectContent>
													{transporterList.map((transporter) => (
														<SelectItem key={transporter} value={transporter}>
															{transporter}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</FormControl>
										<FormMessage {...field} />
									</FormItem>
								)}
							/>
						</div>
						<div className='w-full'>
							<FormField
								control={form.control}
								name='countColis'
								render={({ field }) => (
									<FormItem className='flex flex-col'>
										<FormLabel>Nombre de colis</FormLabel>
										<FormControl>
											<Input
												type='number'
												placeholder='Nombre de colis'
												{...field}
											/>
										</FormControl>
										<FormMessage {...field} />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<Button type='submit' variant='secondary'>Valider</Button>
				</form>
			</Form>
			{dataForm && (
				<div className='mt-5'>
					<Separator />
					<div className='py-4 px-5 flex flex-col w-full justify-between gap-3'>
						{dataForm.map((item) => (
							<div className='flex items-center justify-between'>
								<h3>{item.transporter}</h3>
								<h3>{item.countColis}</h3>
							</div>
						))}
						<Button type='button'>Enregistrer</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default TransporterForm;
