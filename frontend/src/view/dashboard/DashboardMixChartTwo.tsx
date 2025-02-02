import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

const options = {
  responsive: true,
  tooltips: {
    mode: 'label',
  },
  elements: {
    line: {
      fill: false,
    },
  },
  scales: {
    xAxes: [
      {
        display: false,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        type: 'linear',
        display: false,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false,
        },
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const data2 = {
  labels: [
    i18n('dashboard.charts.months.1'),
    i18n('dashboard.charts.months.2'),
    i18n('dashboard.charts.months.3'),
    i18n('dashboard.charts.months.4'),
    i18n('dashboard.charts.months.5'),
    i18n('dashboard.charts.months.6'),
    i18n('dashboard.charts.months.7'),
  ],
  datasets: [
    {
      label: i18n('dashboard.charts.orange'),
      type: 'line',
      data: [51, 65, 40, 49, 60, 37, 40],
      fill: false,
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      yAxisID: 'y-axis-2',
    },
    {
      type: 'line',
      label: i18n('dashboard.charts.blue'),
      data: [200, 185, 590, 621, 250, 400, 95],
      fill: false,
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      hoverBackgroundColor: '#36A2EB',
      hoverBorderColor: '#36A2EB',
      yAxisID: 'y-axis-1',
    },
  ],
};

export default function DashboardMixChartTwo(props) {
  return <Bar data={data2} options={options} />;
}
