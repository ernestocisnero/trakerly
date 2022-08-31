import { useSelector } from "react-redux";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";


export const BarChart = () => {

    const { income } = useSelector(state => state.data);
    
    return (
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
            <VictoryAxis
                tickValues={[1, 2, 3, 4]}
                tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`$${x / 1000}k`)}
            />
            <VictoryBar data={income} x="category" y="income" />
        </VictoryChart>
    )
}
