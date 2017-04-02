import React from 'react'
import ReactDOM from 'react-dom'

import Navigation from '../Navigation'
import Sidebar from '../Sidebar'
import EssayList from '../EssayList'
import EssayEditor from '../EssayEditor'

export default class Blog extends React.Component{

	componentDidMount(){
		this.props.actions.fetchEssayList()
		this.props.actions.fetchUserInfo()
	}
	render(){
		console.log(this.props)
		const {state,actions,data} = this.props
		const {essays,isEditing}=state.essays
		const {user} = state
		const right=isEditing?
			<EssayEditor onSave={actions.saveEssay} onCancel={actions.cancelEdit}essays={essays}/>:
			<EssayList onEdit={actions.editEssay} onDel={actions.deleteEssay} essays={essays}/>
		return (
			<div>
				<Navigation onClick={actions.userLogin}/>
				<div>
					<Sidebar onClick={actions.writeEssay} user={user}/>
					{right}
				</div>
			</div>
		)
	}

}

