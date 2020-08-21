import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
	return(
		<header style={headerStyle}>
			<h1>Books App</h1>
			<Link style={linkStyle} to="/" >Home</Link> | 
			<Link style={linkStyle} to="/add">Add Book Form</Link>
		</header>

		)
}


const headerStyle = {
	backgroundColor: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
}


const linkStyle = {
	color: '#fff',
	textDecoration: 'none'
}




