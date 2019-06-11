import React, { Component } from 'react'
import {  Line, Bar, Doughnut } from 'react-chartjs-2';

export class Chart extends Component {
    constructor(props) { 
        super(props); 
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps  = {
            displayTitle : true,
            displayLegend : true,
            legendPosition : 'right'
    }
    render() {
        return (
            <div>
                    <div className = "chart">
                     <h1>Hei I am the chart </h1>
                        <Line
                            data= {this.state.chartData}
                            options= {{ 
                                title: {
                                    display:this.props.displayTitle,
                                    text:'The population in'+ this.props.location,
                                    fontSize:30
                                },
                                legend: {
                                    display:this.props.displayLegend,
                                    position:this.props.legendPosition
                                }
                            }}
                        /> 
                        <br></br>
                    </div>
                
            </div>
        )
    }
}

export default Chart