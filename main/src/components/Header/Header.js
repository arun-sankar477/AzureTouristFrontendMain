import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from 'react-router-dom';

export default function Header() {
	const handleLogout = () => {
		// Perform logout logic or trigger any necessary actions
		// For example, clearing user session or redirecting to the login page
		// navigate('/Login');
		window.location.href = 'http://localhost:3000/';
	  };
	
	return (
	<AppBar position="static">
		<Toolbar>
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			{/*This is a simple Menu
			Icon wrapped in Icon */}
			<MenuIcon />
		</IconButton>
		{/* The Typography component applies
		default font weights and sizes */}

		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			Tourist Management Portal
		</Typography>
		<Button color="inherit" onClick={handleLogout}>Logout</Button>
		</Toolbar>
	</AppBar>
);
}