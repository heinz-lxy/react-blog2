import './style.scss';
import React from 'react'
import store from '../../store'

import {Navbar,Button,FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap'

class Navigation extends React.Component{
	constructor(){
		super()
		this.state={
			username:''
		}
	}
	componentDidMount(){
		store.subscribe(()=>{
			let username = store.getState().user.username
			this.setState({
				username:username
			})
			if(username!==''){
				document.title = `${username}'s Blog`
			}
		})
	}
	render(){
		const {onClick} = this.props
		const {username} = this.state 
		let login = ()=>{
			onClick({
				username:this.refs.username.value,
				password:this.refs.password.value
			})
		}
		let userLogin = username===''?(
			<div className='login'>
				<input ref="username" placeholder="用户名" />
		     	<input ref="password" placeholder="密码"/>
				<Button bsStyle="primary" onClick={login}>登录</Button>
			</div>
		):''
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">{username===''?'欢迎':`${username}'s Blog`}</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				{userLogin}
				<Navbar.Collapse>
				</Navbar.Collapse>
		
			</Navbar>
		)
	}
	
}

export default Navigation





