import * as ActionTypes from '../actions'

const initialState = {
	username:'',
	password:'',
	picUrl:''
}
const { pendingOf, fulfilledOf } = ActionTypes;
export default function user(state=initialState,action){
	switch(action.type){
		case ActionTypes.USER_LOGIN:
			return Object.assign({},state,{username:action.info.username,password:action.info.password})
		case pendingOf(ActionTypes.FETCH_USER_INFO):
		  return {
		    ...state,
		    //isFetching: true,
		  };
		case fulfilledOf(ActionTypes.FETCH_USER_INFO):
		  return {
		    ...state,
		    //isFetching: false,
		    username: action.payload[0].username,
		    picUrl: action.payload[0].picUrl
		  };
		default:
			return state
	}
}

