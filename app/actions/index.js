import * as essaysStorage from '../utils/essaysStorage';
import * as usersStorage from '../utils/usersStorage';
import * as mongodbStorage from '../utils/mongodbStorage';

//action names
export const WRITE_ESSAY = 'WRITE_ESSAY'
export const SAVE_ESSAY = 'SAVE_ESSAY'


export const DELETE_ESSAY = 'DELETE_ESSAY'
export const EDIT_ESSAY = 'EDIT_ESSAY'
export const CANCEL_EDIT = 'CANCEL_EDIT'


export const USER_LOGIN = 'USER_LOGIN'


//action creators
export function writeEssay(){
	return {
		type:WRITE_ESSAY
	}
}

export function deleteEssay(id) {
  const promise = mongodbStorage.deleteEssay(id)

  return dispatch => {
    dispatch({
      type: DELETE_ESSAY,
      payload: {
        promise,
        data: id,
      },
    });

    promise.then(dispatch(fetchEssayList()));
  };
}

export function editEssay(id){
	return {
		type:EDIT_ESSAY,
		id
	}
}

export function cancelEdit(){ //it's actually not necessay
	return {
		type:CANCEL_EDIT
	}
}

export function userLogin(info){
	return {
		type:USER_LOGIN,
		info:info
	}
}

export function saveEssay(essay) { 
	const promise = mongodbStorage.saveEssay(essay)
	return dispatch => {
	  dispatch({
	    type: SAVE_ESSAY,
	    essay:essay
	  });

	  promise.then(dispatch(fetchEssayList()));
	};
	
}


     


export const FETCH_ESSAY_LIST = 'FETCH_ESSAY_LIST'
export const FETCH_USER_INFO = 'FETCH_USER_INFO'

export const pendingOf = actionType => `${actionType}_PENDING`;
export const fulfilledOf = actionType => `${actionType}_FULFILLED`;

export function fetchEssayList(){
	console.log('fetching')
	return {
		type:FETCH_ESSAY_LIST,
		payload:mongodbStorage.getEssays()

	}
}
export function fetchUserInfo(){
	return {
		type:FETCH_USER_INFO,
		payload:usersStorage.getAll()

	}
}

