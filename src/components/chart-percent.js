import React, { Component } from 'react';

export default class ChartPercent extends Component {
    render() {
        const { percent } = this.props;
        const details = 
            <div>
                <div className="selected-value">
                    <h2>
                        {percent}% of overall
                    </h2>
                </div>
            </div>
    return (
        <div>
            {details}
        </div>
    );
  }
}