
export const clickAction = (clickedProps) => dispatch => {
	dispatch({
  		type: 'CLICK_PIE',
  		payload: clickedProps,
 	})
}


export const fetchAction = () => dispatch => {
 	dispatch({
  		type: 'FETCH_PIE',
 	})
}