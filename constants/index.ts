export type DataChart = {
	date: string;
	data: {
		labels: string[];
		datasets: {
			label: string;
			data: number[];
			backgroundColor: string[];
			borderColor: string[];
			borderWidth: number;
		}[];
	};
};

export const dataChart = [
	{
		date: 'November 1st, 2023',
		data: {
			labels: [
				'Chronopost',
				'Colissimo',
				'DHL',
				'DPD',
				'FedEx',
				'Mondial Relay',
				'UPS',
			],
			datasets: [
				{
					label: 'Nombre de colis',
					data: [12, 19, 3, 5, 2, 3, 10],
					backgroundColor: ['rgba(255, 99, 132, 0.2)'],
					borderColor: ['rgba(255, 99, 132, 1)'],
					borderWidth: 1,
				},
			],
		},
	},
  {
    date: 'November 2nd, 2023',
    data: {
      labels: [
        'Chronopost',
        'Colissimo',
        'DHL',
        'DPD',
        'FedEx',
        'Mondial Relay',
        'UPS',
      ],
      datasets: [
        {
          label: 'Nombre de colis',
          data: [12, 3, 8, 5, 12, 3, 10],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    date: 'November 3rd, 2023',
    data: {
      labels: [
        'Chronopost',
        'Colissimo',
        'DHL',
        'DPD',
        'FedEx',
        'Mondial Relay',
        'UPS',
      ],
      datasets: [
        {
          label: 'Nombre de colis',
          data: [12, 19, 3, 15, 0, 3, 20],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    date: 'November 4th, 2023',
    data: {
      labels: [
        'Chronopost',
        'Colissimo',
        'DHL',
        'DPD',
        'FedEx',
        'Mondial Relay',
        'UPS',
      ],
      datasets: [
        {
          label: 'Nombre de colis',
          data: [10, 19, 3, 50, 12, 3, 10],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    },
  },
];
