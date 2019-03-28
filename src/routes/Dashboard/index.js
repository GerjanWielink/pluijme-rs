import React from 'react';
import Dashboard from "./components/Dashboard";
import Loader from '../../components/Loader';

import { baseUrl} from "../../constants";

export default class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loading: true,
            pluijmpjeSeenEnough: false
        }
    }

    componentDidMount() {
        this.setMinimalPluijmpjeShowoffTimer();

        fetch(`${baseUrl}/api/lastclimate`)
            .then((response) => {
                return response.json();
            })
            .then(({tempBMP, humiDHT, presBMP}) => {
                this.setState({
                    loading: false,
                    temperature: tempBMP,
                    humidity: humiDHT,
                    pressure: presBMP
                });
            })
            .catch(() => {
                this.setState({
                    error: true,
                })
            })
    }

    render () {
        const {loading, error, pluijmpjeSeenEnough, temperature, humidity, pressure} = this.state;

        if (error && pluijmpjeSeenEnough) {
            return (
                <div>
                    <h1>Error loading data... :(</h1>
                    <h4>Pluijmpje probably messed up his server. Bad boy..</h4>
                </div>
            )
        }

        if(loading || !pluijmpjeSeenEnough) {
            return <Loader/>
        }

        return (
            <Dashboard
                temperature={temperature}
                humidity={humidity}
                pressure={pressure}
            />
        )
    }

    // IMPORTANT! DO NOT SET THIS TIMER BELOW 2000!!!! APP WILL CRASH!
    setMinimalPluijmpjeShowoffTimer = () => {
        setTimeout(() => {
            this.setState({
                pluijmpjeSeenEnough: true,
            })
        }, 2000)
    }
}
