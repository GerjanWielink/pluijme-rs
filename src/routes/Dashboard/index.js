import React from 'react';
import Dashboard from "./components/Dashboard";
import Loader from '../../components/Loader';

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

        fetch("http://pluijmers.duckdns.org/api/climate?time=1")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    loading: false,
                    temperature: data[0].tempBMP,
                    humidity: data[0].humiDHT,
                    pressure: data[0].presBMP
                })
                 console.log(data);
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
