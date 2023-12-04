import TransporterForm from '@/components/TransporterForm';
import BarChart from '@/components/chart/BarChart';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';

const page = ({ params } : { params : { dateId : string }}) => {
  const date = new Date(parseInt(params.dateId));
  const formattedDate = format(date, "PPP");
  

  return (
    <div className='w-full mx-auto p-6 flex flex-col gap-3'>
      <TransporterForm dateId={Number(date)} />
      <Separator />
      <BarChart data={formattedDate} />
    </div>
  )
}

export default page