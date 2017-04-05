import './style.scss';
import React from 'react'
import uuid from 'uuid'
import store from '../../store'

class EssayEditor extends React.Component{
	constructor(){
		super()
		this.state={
			selectedID:'',
			titleValue:'',
			contentValue:''
		}
	}
	componentWillMount(){
		let selectedID = store.getState().essays.selectedID
		let essays = store.getState().essays.essays
		let selectedEssay,titleValue='',contentValue=''
		if(selectedID!==''&&selectedID!==null){
			selectedEssay=essays.filter((x)=>x._id==selectedID)
			console.log(selectedEssay)
			titleValue=selectedEssay[0].title
			contentValue=selectedEssay[0].content
		}

		this.setState({
			selectedID:selectedID,
			titleValue:titleValue,
			contentValue:contentValue
		})
	}


	render(){
		const {essays,onSave,onCancel} = this.props
		const {selectedID,titleValue,contentValue} = this.state
		let save 
		if(selectedID!==''&&selectedID!==null){ //编辑文章
			save = ()=>{
				onSave({
					title:this.refs.title.value,
					content:this.refs.content.value,
					_id:selectedID
				},1)
			}
		}
		else{ //新建文章
			save = ()=>{
				onSave({
					title:this.refs.title.value,
					content:this.refs.content.value,
				},0)
			}
		}
		return (
			<div className="col-md-8 item-editor-component">
			
			   <div className="edit-area">
			     <input ref="title" placeholder="请填写标题"  defaultValue={titleValue} />
			     <textarea ref="content" placeholder="请填写内容" defaultValue={contentValue}/>
			   </div>
			   <div>
			     <button className="btn btn-success" onClick={save}>确定</button>
			     <button className="btn secondary" onClick={onCancel}>取消</button>
			   </div>
			 </div>
		)
	}
	
}

export default EssayEditor