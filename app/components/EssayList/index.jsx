import './style.scss';
import React from 'react'

class EssayList extends React.Component{
	render(){
		const {essays,onEdit,onDel}=this.props

		const essaylist = essays.map((essay,id)=>( 
			<div className='essay' key={id}>
				<h2 className='essay-name'>{essay.title}</h2>
				<div className='essay-content'>{essay.content}</div>
				<a className='delete' href="#" onClick={()=>onDel(id)}>删除</a>
				<a className='edit' href="#" onClick={()=>onEdit(id)}>编辑</a>
			</div>			
		))
		return (
			<div className='col-md-9'>
				{essaylist}
			</div>
		)
	}

}

export default EssayList


