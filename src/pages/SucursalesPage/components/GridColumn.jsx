import React from "react"
import Grid from "@material-ui/core/Grid"

const GridColumn = ({ children }) => {
	return (
		<>
			<Grid item xs={4}>
				{children}
			</Grid>
		</>
	)
}

export default GridColumn
