import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { BarChartData } from "../../types/dashboard.types";

interface BarChartProps {
  data: BarChartData;
  accentColor?: string;
}

export const BarChart = ({ data, accentColor }: BarChartProps) => {
  if (!data || !data.values || data.values.length === 0) {
    return null;
  }

  const categoryCount = data.categories.length;
  const labelInterval = Math.max(1, Math.ceil(categoryCount / 7));

  const series: Highcharts.SeriesOptionsType[] = [
    {
      type: "column",
      name: "Value",
      data: data.values,
      color: accentColor,
    },
  ];

  const options: Highcharts.Options = {
    chart: {
      type: "column",
      height: 180,
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: data.categories,
      labels: {
        rotation: -45,
        style: {
          fontSize: '9px'
        },
        formatter: function() {
          if (this.pos % labelInterval === 0) {
            return String(this.value);
          }
          return '';
        },
      },
      tickInterval: labelInterval,
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    plotOptions: {
      column: {
        pointWidth: 5,
        groupPadding: 0.08,
        pointPadding: 0.04,
      },
    },
    legend: {
      enabled: false,
    },
    series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
