import React, { Component } from 'react';
import './App.css';
import PieChart from './components/pie-chart.js';
import ChartDetails from './components/chart-details.js';
import { Provider } from 'react-redux'
import configureStore from './store';
import Grid from '@material-ui/core/Grid';

class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <Grid container spacing={16} className="App">
                    <Grid item xs={12}>
                        <h1>Demo App</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={6} className="chart">
                            <PieChart />
                        </Grid>
                        <Grid item xs={6} className="chart-details">
                            <ChartDetails />
                        </Grid>
                    </Grid>
                </Grid>
            </Provider>
        );
    }
}

export default App;
