import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import { connect } from 'react-redux';
import { clickAction, fetchAction } from '../actions/action.js';

class PieChart extends Component {
  	componentWillMount() {
  		this.props.fetchAction();
  	}

  	clickActionTest = (clickedProps) => {
   		this.props.clickAction(clickedProps);
  	}

  	render() {
    	return (
    		<div className="pie">
		    	<VictoryPie
		    		padAngle={0}
					// used to hide labels
					labelComponent={<span/>}
					radius={150}
			    	data={this.props.simpleReducer.data}
			    	events={[
				  		{
						    target: "data",
						    eventHandlers: {
				      			onClick: (evt, clickedProps) => {
				        			const clickedIndex = clickedProps.index;
				        			return [
				          			{
							            eventKey: "all",
							            mutation: (props) => {
							              this.clickActionTest(clickedProps);
							              return props.index === clickedIndex ?
							              	{style: {
							              		fill: "orange",
							              		width: 20
							              	}} : null;
							            }
				          			}
				        			];
				      			}
				    		}
				  		}
					]}
		    	/>
      		</div>
    	);
  	}
}

const mapStateToProps = state => ({
 	...state
});

const mapDispatchToProps = dispatch => ({
 	clickAction: (clickedProps) => dispatch(clickAction(clickedProps)),
 	fetchAction: () => dispatch(fetchAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);