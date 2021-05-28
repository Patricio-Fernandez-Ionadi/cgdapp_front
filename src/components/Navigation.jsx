import React, { useState } from "react"
// STYLES
import { makeStyles } from "@material-ui/core"
// icons
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import SearchIcon from "@material-ui/icons/Search"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
	navigationContainer: {
		width: "100%",
		height: "80px",
		display: "flex",
		backgroundColor: "#1D3557",
	},
	flexSmall: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	flexLarge: {
		flex: 4,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	// ----------------
	logoContainer: {
		width: "90%",
		maxWidth: "200px",
		backgroundColor: "yellow",
	},
	// ----------------
	searchbarContainer: {
		width: "90%",
		height: "40px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		boxShadow: "0 0 5px 0 #000",
	},
	searchbarInput: {
		width: "100%",
		height: "40px",
		fontSize: "28px",
		paddingLeft: "15px",
		borderRadius: "3px 0 0 3px",
		border: "none",
		"&:focus": {
			outline: "none",
		},
	},
	searchbarButton: {
		width: "10%",
		maxWidth: "100px",
		minWidth: "40px",
		height: "40px",
		border: "none",
		borderRadius: "0 3px 3px 0",
	},
	// ----------------
	menu_burguer: {
		width: "40px",
		height: "40px",
		margin: "10px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: "1px solid #457B9D",
		borderRadius: "3px",
		transition: "all .3s ease",
		boxShadow: "0 0 5px 0 #000, 0 0 3px 1px #000 inset",
		"&:hover": {
			backgroundColor: "#A8DADC",
			"& *": {
				color: "#444",
			},
		},
		"& *": {
			color: "#A8DADC",
		},
	},
	// --------
	loginLink: {
		display: "inline-block",
		height: "40px",
		lineHeight: "20px",
		width: "40%",
		textAlign: "center",
		// cursor: "pointer",
		textDecoration: "none",
		color: "#A8DADC",
		"&:hover": {
			textShadow: "0 0 1px #A8DADC, 0 0 4px #A8DADC, 0 0 8px #A8DADC",
			color: "#F1FAEE",
		},
	},
	// ----------------
}))
//-------------------------------
const Navigation = () => {
	// STYLES
	const {
		navigationContainer,
		flexSmall,
		flexLarge,
		logoContainer,
		searchbarContainer,
		searchbarInput,
		searchbarButton,
		menu_burguer,
		loginLink,
	} = useStyles()
	//-------------------------------
	const [searchParam, setSearchParam] = useState("")
	const handleSubmitSearch = (e) => {
		e.preventDefault()
		console.log(e.target.elements[0].value)
	}
	//-------------------------------
	// estado de menu
	const [isOpen, setIsOpen] = useState(false)
	const handleMenu = () => {
		setIsOpen(!isOpen)
	}
	//-------------------------------

	return (
		<nav className={navigationContainer}>
			<div className={flexSmall}>
				<div className={logoContainer}>
					<img src='' alt='logo' />
				</div>
			</div>
			<form onSubmit={handleSubmitSearch} className={flexLarge}>
				<div className={searchbarContainer}>
					<input
						className={searchbarInput}
						type='text'
						placeholder='Buscar...'
					/>
					<button className={searchbarButton}>
						<SearchIcon />
					</button>
				</div>
			</form>
			<div className={flexSmall}>
				<Link to='/login' className={loginLink}>
					iniciar sesion
				</Link>
				{isOpen ? (
					<div onClick={handleMenu} className={menu_burguer}>
						<CloseIcon />
					</div>
				) : (
					<div onClick={handleMenu} className={menu_burguer}>
						<MenuIcon />
					</div>
				)}
			</div>
			{/* LIST */}
		</nav>
	)
}

export default Navigation
