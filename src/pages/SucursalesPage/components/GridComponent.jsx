import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
//
import GridColumn from "./GridColumn"
import GridRowPaper from "./GridRowPaper"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}))

export default function NestedGrid() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				{/* ------------ */}
				<Grid container item xs={12} spacing={3}>
					<GridColumn>
						<GridRowPaper>Hello</GridRowPaper>
					</GridColumn>
				</Grid>
				{/* ------------ */}
			</Grid>
		</div>
	)
}
