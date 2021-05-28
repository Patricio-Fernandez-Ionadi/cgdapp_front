import React, { useEffect, useState } from "react"
// STYLES
import { makeStyles } from "@material-ui/core"
import { useHistory } from "react-router"
// #ffcd01 Amarillo
// #db281b Rojo

//  #1D3557 darkblue
//  #457B9D midblue
//  #A8DADC lightblue
//  #F1FAEE ligthbase
//  #E63946 strongbase
const useStyles = makeStyles((theme) => ({
	sucursalesContainer: {
		width: "100%",
		backgroundColor: "#1D3557",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	sucRow: {
		width: "90%",
		margin: "3px",
		border: "1px solid #444",
		borderRadius: "3px",
		display: "flex",
		justifyContent: "space-between",
		padding: "5px",
		backgroundColor: "#A8DADC",
	},
	sucRowNotFirst: {
		transition: "all .2s ease",
		cursor: " pointer",
		"&:hover": {
			backgroundColor: "#457B9D",
			fontWeight: "bold",
			"& *": {
				color: "#F1FAEE",
			},
		},
	},
}))

const SucursalesPage = () => {
	const { sucRow, sucRowNotFirst, sucursalesContainer } = useStyles()
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
					{sucursales.map((each) => {
						return (
							<div
								key={each.sucursalID}
								onClick={() => handleSucSelection(each.sucursalID)}
								className={`${sucRowNotFirst} ${sucRow}`}
							>
								<div>{each.sucursal}</div>
								<div>{each.sucursalID}</div>
							</div>
						)
					})}
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
