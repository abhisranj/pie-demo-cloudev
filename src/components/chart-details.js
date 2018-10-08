import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartValue from './chart-value.js';
import ChartPercent from './chart-percent.js';

class ChartDetails extends Component {
    render() {
        const datum = this.props.simpleReducer.datum &&
            this.props.simpleReducer.datum.datum;
        const name = datum && datum.key;
        const value = datum && datum.y;
        const percent = datum && datum.percent;
        const details = datum ? (
            <div>
                <div className="selected-name">
                    <h1>{name}</h1>
                </div>
                <br/ >
                <ChartValue value = {value} />
                <br />
                <ChartPercent percent = {percent} />
            </div>
            ) :
            <div style={{
                textAlign: 'center',
            }}>
                <h1 style={{
                    wordWrap: 'break-word',
                    verticalAlign: 'middle',
                    display: 'inline-block'
                }}>
                    Please select a chart area to proceed!
                </h1>
            </div>

        return (
            <div className>
                {details}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(ChartDetails);