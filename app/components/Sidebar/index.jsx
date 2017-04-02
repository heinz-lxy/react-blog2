import './style.scss';
import React from 'react'


function Userinfo(props){
	return (
		<div className='user-info'>
			<img className='user-pic'/>
			<span className='user-name'>昵称</span>
		</div>
	)
}


function Sidebar(props){
	const {picUrl,username} = props.user
	return (
		<div className='col-md-3'>
			<div className='user-info'>
				<img className='user-pic' src={picUrl}/>
				<span className='user-name'>{username===''?'昵称':username}</span>
			</div>
			<a href="#" onClick={props.onClick} className="list-group-item">
	      		+ 创建新的文章
	      	</a>
      	</div>
	)


}

export default Sidebar