import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { LineChartData } from "../../types/dashboard.types";

interface LineChartProps {
  data: LineChartData;
  accentColor?: string;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}


function createFillColor(hex: string, opacity: number): string {
    const rgb = hexToRgb(hex);
    if (!rgb) return `rgba(181, 215, 160, ${opacity})`;
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
  }
  
  export const LineChart = ({ data, accentColor = "#84BD60" }: LineChartProps) => {
    const maxValue = data.values.length > 0 ? Math.max(...data.values) : 20;
    const yAxisMax = Math.ceil(maxValue * 1.2);
    const tickInterval = Math.ceil(yAxisMax / 4);
  
    const areaSeries: Highcharts.SeriesOptionsType[] = [
      {
        type: "areaspline",
        name: "Value",
        data: data.values,
        color: accentColor,
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, createFillColor(accentColor, 0.2)], 
            [1, createFillColor(accentColor, 0.05)], 
          ],
        },
        lineWidth: 2,
        marker: { enabled: false },
        threshold: 0,
        shadow: false,
      } as Highcharts.SeriesAreasplineOptions,
    ];
  
    const options: Highcharts.Options = {
      chart: { type: "areaspline", height: 180, backgroundColor: "transparent" },
      title: { text: undefined },
      xAxis: { categories: data.categories, labels: { style: { fontSize: "9px" } }, gridLineWidth: 0 },
      yAxis: {
        title: { text: undefined },
        labels: { formatter: function() { return `${this.value}s`; } },
        gridLineColor: "#e5e7eb",
        gridLineWidth: 1,
        min: 0,
        max: yAxisMax,
        tickInterval: tickInterval,
      },
      plotOptions: { areaspline: { fillOpacity: 1 } },
      colors: [accentColor],
      legend: { enabled: false },
      series: areaSeries,
      credits: { enabled: false },
    };
  
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  };
  