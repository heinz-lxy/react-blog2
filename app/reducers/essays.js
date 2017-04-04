import * as ActionTypes from '../actions'

const initialState = {
	essays:[],
	selectedID:'',
	isEditing:false
}

const { pendingOf, fulfilledOf } = ActionTypes;

export default function essays(state=initialState,action){
	let essays = state.essays
	switch(action.type){
		case pendingOf(ActionTypes.FETCH_ESSAY_LIST):
		  return {
		    ...state,
		    //isFetching: true,
		  };
		case fulfilledOf(ActionTypes.FETCH_ESSAY_LIST):
	      let temp=[]
		  for(let x in action.payload){ //json化为array
		  		temp.push(action.payload[x])
		  }
		  console.log(temp)
		  return {
		    ...state,
		    //isFetching: false,
		    essays: temp,
		    isEditing:false
		  };

		case ActionTypes.WRITE_ESSAY:
			return Object.assign({},state,{essays:essays,selectedID:null,isEditing:true})
		case ActionTypes.CANCEL_EDIT:
		return Object.assign({},state,{essays:essays,selectedID:null,isEditing:false})
		case ActionTypes.SAVE_ESSAY:
			let id = action.essay.id
			if(id==essays.length){//新建文章
				return Object.assign({},state,{essays:[...essays,action.essay],selectedID:null,isEditing:false})
			}
			else{ //编辑文章
				essays=essays.map((item,index)=>{ 
					if(index==id){
						item=action.essay
					}
					return item
				})  
				return Object.assign({},state,{essays:essays,selectedID:null,isEditing:false})
			}
		case ActionTypes.EDIT_ESSAY:
			return Object.assign({},state,{essays:essays,selectedID:action.id,isEditing:true})
		case ActionTypes.DELETE_ESSAY:
			essays=essays.filter((item,index)=>(index!==action.id))  
			return Object.assign({},state,{essays:essays,selectedID:null,isEditing:false})
		default:
			return state
	}
}