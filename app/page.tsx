import DatePicker from "@/components/DatePicker";



export default function Home() {
	return (
		<div className="max-w-3xl w-full mx-auto px-6 py-3 space-y-4">
			<h1 className='text-5xl font-bold'>Hub e.One</h1>
			<div className='flex flex-col gap-5'>
				<DatePicker />	
			</div>
		</div>
	);
}
