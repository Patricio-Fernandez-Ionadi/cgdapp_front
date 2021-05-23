import React from "react"
import { NavLink } from "react-router-dom"
// STYLES
import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
	listContainer: {
		backgroundColor: "green",
		listStyle: "none",
		padding: 0,
		margin: 0,
	},
	listElement: {
		width: "100%",
		height: "40px",
		backgroundColor: "#ffcd01",
		borderBottom: "1px solid #ccc",
		"& a": {
			color: "#db281b",
			textDecoration: "none",
			lineHeight: "40px",
			width: "100%",
			display: "inline-block",
			textAlign: "center",
		},
	},
}))

const NavigationList = () => {
	// componente innecesario de momento pero limpia de ruido visual el comp Navigation.jsx
	const { listContainer, listElement } = useStyles()
	return (
		<ul className={listContainer}>
			<li className={listElement}>image to home</li>
			<li className={listElement}>
				<NavLink exact to='/'>
					Home
				</NavLink>
			</li>
			<li className={listElement}>
				<NavLink to='/sucursales'>Sucurasles</NavLink>
			</li>
			<li className={listElement}>
				<NavLink to='/facturas'>Facturas</NavLink>
			</li>
			<li className={listElement}>
				<NavLink to='/gastos'>Gastos</NavLink>
			</li>
			<li className={listElement}>
				<NavLink to='/destacados'>Destacados</NavLink>
			</li>
			<li className={listElement}>
				<NavLink to='/login'>Iniciar Sesion</NavLink>
			</li>
		</ul>
	)
}

export default NavigationList
