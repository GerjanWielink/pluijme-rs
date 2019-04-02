import React, { Component } from  "react";
import { baseUrl} from "../../constants";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import "../../../node_modules/react-vis/dist/style.css";

export default class Temperature extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataPoints : []
        };
    }

    componentDidMount() {
        fetch(`${baseUrl}/api/climate?time=1440`)
            .then((response) => {
            return response.json();
        })
            .then((data) => {
            this.setState({
                dataPoints : data.map(data => ({x : data.datatime, y : data.tempBMP})),
            });
        })
    }
    render (){
        return (
            <div>
                <XYPlot xType="time" height={500} width={1000}>
                    <HorizontalGridLines />
                    <LineSeries data={this.state.dataPoints} />
                    <XAxis title="X" />
                    <YAxis />
                </XYPlot>
            </div>
        );
    }
}