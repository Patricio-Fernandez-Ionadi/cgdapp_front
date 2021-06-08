import { makeStyles } from "@material-ui/core"
import colors from "const/colors"
import React from "react"
import { useHistory } from "react-router"

const useStyles = makeStyles((theme) => ({
	sucRow: {
		width: "90%",
		margin: "3px",
		border: "1px solid #444",
		borderRadius: "3px",
		display: "flex",
		justifyContent: "space-between",
		padding: "5px",
		backgroundColor: colors.secondary.main,
	},
	sucRowNotFirst: {
		transition: "all .2s ease",
		cursor: " pointer",
		"&:hover": {
			backgroundColor: colors.primary.main,
			fontWeight: "bold",
			"& *": {
				color: "#F1FAEE",
			},
		},
	},
}))

const ListItem = ({ sucursal, sucursalID }) => {
	const { sucRowNotFirst, sucRow } = useStyles()
	const history = useHistory()
	const handleSucSelection = (id) => {
		history.push(`/sucursales/${id}`)
	}

	return (
		<div
			onClick={() => handleSucSelection(sucursalID)}
			className={`${sucRowNotFirst} ${sucRow}`}
		>
			<div>{sucursal}</div>
			<div>{sucursalID}</div>
		</div>
	)
}

export default ListItem
