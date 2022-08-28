import { Box } from "@mui/material";
import { CartesianGrid, 
        Legend, 
        Tooltip, 
        XAxis, 
        YAxis ,
        BarChart,
        Bar
    } from "recharts";


export const DataBarChart = () => {

    const data = [
        {
            name: 'Jan',
            incomes: 4000,
            expenses: 2400,
            amt: 2400,
        },
        {
            name: 'Fab',
            incomes: 3000,
            expenses: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            incomes: 2000,
            expenses: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            incomes: 2780,
            expenses: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            incomes: 1890,
            expenses: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            incomes: 2390,
            expenses: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            incomes: 3490,
            expenses: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            incomes: 3490,
            expenses: 4300,
            amt: 2100,
        },
        {
            name: 'Sep',
            incomes: 3490,
            expenses: 4300,
            amt: 2100,
        },
        {
            name: 'Oct',
            incomes: 3490,
            expenses: 4300,
            amt: 2100,
        },
        {
            name: 'Nov',
            incomes: 3490,
            expenses: 4300,
            amt: 2100,
        },
        {
            name: 'Dic',
            incomes: 3490,
            expenses: 4300,
            amt: 2100,
        },
    ];


  return (
    <Box>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="expenses" fill="#8884d8" />
                <Bar dataKey="incomes" fill="#82ca9d" />
            </BarChart>
        </Box>
  )
}
