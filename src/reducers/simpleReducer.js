const iniState = {
	data: [
			{
				"key": "Section 2",
				"y": 40,
			},
			{
				"key": "Section 1",
				"y": 80,
			},
			{
				"key": "Section 3",
				"y": 55,
			}
		],
	datum: {}
}

export default (state = iniState, action) => {
 	switch (action.type) {
  		case 'CLICK_PIE':
	    	return {
		   		...state,
			    datum: action.payload
		   	}
  		case 'FETCH_PIE':
    		const arrSum = (state.data).reduce((a,b) => a + b.y, 0);
    		(state.data).forEach(function(val) { val.percent = (val.y/arrSum * 100).toFixed(2)});
			return state;
  		default:
    		return state;
 	}
}