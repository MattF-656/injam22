import React from 'react'

import PieChart, {Legend, Series, Tooltip, Label, Connector, Export} from 'devextreme-react/pie-chart'

let populationByOccurence = [{
    term: 'Pipline',
    val: 967,
},{
    term: 'AWS',
    val: 102
},{
    term: 'Terraform',
    val: 33
}]

class DoughnutChart extends React.Component {
    render() {
        return (
            <PieChart
                id="pie"
                type="doughnut"
                title="Most Common Topics Last Week"
                palette="bright"
                dataSource={populationByOccurence}
            >
                <Series argumentField="term">
                    <label visible={true} format={populationByOccurence.term}>
                        <Connector visible={true}/>
                    </label>
                </Series>
                <Export enabled={true}/>
                <Legend margin={0} horizontalAlignment="center" verticalAlignment="bottom"/>
                <Tooltip enabled={true} customizeTooltip={this.customizeTooltip}></Tooltip>
            </PieChart>
        )
    }
    
    customizeTooltip(arg) {
        return {
            text: `${arg.valueText} - ${(arg.percent * 100).toFixed(2)}%`
        };
    };
}

export default DoughnutChart