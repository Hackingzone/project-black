import _ from 'lodash';

import { 
	RENEW_FILES
} from './actions.js'


function renew_files(state = [], action) {
	const message = action.message;

	if (message["status"] == 'success') {
		return message['files'];
	} else {
		/* TODO: add error handling */
	}		
}

function file_reduce(state = [], action) {
	switch (action.type) {
		case RENEW_FILES:
			return renew_files(state, action);
		default:
			return state;
	}
}


export default file_reduce