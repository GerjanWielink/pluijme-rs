import React, { Component } from  "react";
import { baseUrl} from "../../constants";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import "../../../node_modules/react-vis/dist/style.css";
import "./index.css"

export default class Humidity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataPoints : []
        };
    }

    componentDidMount() {
        fetch(`${baseUrl}/api/climate?`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    dataPoints : data.map(data => ({x : new Date(data.datatime * 1000), y : data.humiDHT})),
                });
            })
    }
    render (){
        return (
            <div id="inner">
                <XYPlot xType="time" height={500} width={1000}>
                    <HorizontalGridLines />
                    <LineSeries data={this.state.dataPoints} />
                    <XAxis title="Time" />
                    <YAxis title="Humidity (%)"/>
                </XYPlot>
            </div>
        );
    }
}