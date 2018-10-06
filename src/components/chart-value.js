import React, { Component } from 'react';

export default class ChartValue extends Component {
  render() {
    const { value } = this.props;
    const details = 
        <div>
            <div className="selected-value">
                <h2>
                    Value is {value}
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