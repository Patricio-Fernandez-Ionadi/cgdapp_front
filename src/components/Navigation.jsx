import React from "react"

import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	navigation: {
		maxWidth: "200px",
		width: "100%",

		backgroundColor: "#ccc",
	},
}))

const Navigation = () => {
	const classes = useStyles()
	const { navigation } = classes
	return (
		<nav className={navigation}>
			<p>NAVEGACION</p>
		</nav>
	)
}

export default Navigation
