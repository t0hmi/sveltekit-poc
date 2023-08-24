import type { ChartConfiguration, ChartOptions } from 'chart.js';
import type { KeyValue } from '../../app';

export const options = (data: KeyValue[]): ChartConfiguration => ({
	type: 'bar',
	data: {
		labels: data.map((keyvalue) => keyvalue.key),
		datasets: [
			{
				label: 'key value',
				data: data.map((keyvalue) => keyvalue.value)
			}
		]
	}
});
