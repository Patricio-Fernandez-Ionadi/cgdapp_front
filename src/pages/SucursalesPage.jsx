import React, { useEffect, useState } from "react"
// STYLES
import { makeStyles } from "@material-ui/core"
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
		cursor: " pointer",
		backgroundColor: "#ffef96",
		transition: "all .2s ease",
		"&:hover": {
			backgroundColor: "#c94c4c",
			fontWeight: "bold",
		},
	},

	// gridcontainer
	sucursalesContainer: {
		width: "100%",
		backgroundColor: "#db281b",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}))

const SucursalesPage = () => {
	const { sucRow, sucursalesContainer } = useStyles()
	const [sucursales, setSucursales] = useState([])

	useEffect(() => {
		fetch("http://localhost:3001/api/sucursales")
			.then((res) => res.json())
			.then((res) => setSucursales(res))
	}, [])

	const history = useHistory()

	const handleSucSelection = (id) => {
		history.push(`/sucursales/${id}`)
	}

	if (sucursales[0]) {
		return (
			<div>
				<h1>Sucursales</h1>

				<div className={sucursalesContainer}>
					<div className={sucRow}>
						<div>Sucursal:</div>
						<div>Id de sucursal</div>
					</div>
					{sucursales.map((each) => (
						<div
							className={sucRow}
							key={each.sucursalID}
							onClick={() => handleSucSelection(each.sucursalID)}
						>
							<div>{each.sucursal}</div>
							<div>{each.sucursalID}</div>
						</div>
					))}
				</div>
			</div>
		)
	} else {
		return (
			<div>
				<h1>Cargando...</h1>
			</div>
		)
	}
}

export default SucursalesPage
