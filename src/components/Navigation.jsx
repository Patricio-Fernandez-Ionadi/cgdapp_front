import React, { useState } from "react"
// STYLES
import { makeStyles } from "@material-ui/core"
// icons
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
// COMPONENTS
import NavigationList from "./NavigationList"

const useStyles = makeStyles((theme) => ({
	navigation: {
		width: "200px",
		minHeight: "100vh",
		backgroundColor: "#db281b",
		transition: "all .3s ease",
		position: "fixed",
		left: "0",
	},
	nav_closed: {
		left: "-200px",
	},

	// MENU
	menu_burguer: {
		width: "40px",
		height: "40px",
		margin: "10px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: "1px solid #db281b",
		borderRadius: "3px",
		transition: "all .3s ease",
		boxShadow: "0 0 3px 1px #000 inset",
		position: "fixed",
		left: "0",
		"&:hover": {
			backgroundColor: "#db281b",
		},
		"& *": {
			color: "#ffcd01",
		},
	},
	menu_open: {
		backgroundColor: "#db281b",
		left: "200px",
	},
	// ----------------
}))
//-------------------------------

const Navigation = () => {
	// STYLES
	const { navigation, nav_closed, menu_burguer, menu_open, estilosParaList } =
		useStyles()
	//-------------------------------

	// estado de menu (MOBILE)
	const [isOpen, setIsOpen] = useState(false)
	const handleMenu = () => {
		setIsOpen(!isOpen)
	}
	//-------------------------------

	return (
		<nav
			className={isOpen ? `${navigation}` : `${navigation} ${nav_closed}`}
			onClick={handleMenu}
		>
			{isOpen ? (
				<div onClick={handleMenu} className={`${menu_burguer} ${menu_open}`}>
					<CloseIcon />
				</div>
			) : (
				<div onClick={handleMenu} className={`${menu_burguer}`}>
					<MenuIcon />
				</div>
			)}

			{/* LIST */}
			<NavigationList />
		</nav>
	)
}

export default Navigation
