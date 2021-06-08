import React from "react"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}))

const GridRowPaper = ({ children }) => {
	const classes = useStyles()
	return <Paper className={classes.paper}>{children}</Paper>
}

export default GridRowPaper
