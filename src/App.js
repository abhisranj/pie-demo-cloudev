import React, { Component } from 'react';
import './App.css';
import PieChart from './components/pie-chart.js';
import ChartDetails from './components/chart-details.js';
import { Provider } from 'react-redux'
import configureStore from './store';

class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <div className="App">
                    <div className="chart">
                        <PieChart />
                    </div>
                    <div className="chart-details">
                        <ChartDetails />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
