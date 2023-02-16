import React from 'react';
import { Chart } from "react-google-charts";
import './Charts.css';
import Box from '@mui/material/Box';

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

export default function GeoChart() {
  return (
    <div className='chart-container'>
        <Box
            sx={{
            boxShadow: 1,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            borderRadius: 2,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: '700',
            }}
        >
            <Chart
            chartEvents={[
                {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = data[selection[0].row + 1];
                    console.log("Selected : " + region);
                },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={data}
            />
        </Box>
    </div>
  )
}
