import React, { useEffect, useState } from "react"
// STYLES
import { makeStyles } from "@material-ui/core"
import { useHistory } from "react-router"
// const
import colors from "const/colors"
// COMPONENTS
import Loading from "../../components/Loading"
import GridComponent from "./components/GridComponent"

const useStyles = makeStyles((theme) => ({
	sucursalesContainer: {
		width: "100%",
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
	flex: {
		padding: "0 10px",
		width: "90%",
		display: "flex",
		justifyContent: "space-between",
	},
}))

const SucursalesPage = () => {
	const { sucRow, sucRowNotFirst, sucursalesContainer, flex } = useStyles()
	const history = useHistory()
	const [sucursales, setSucursales] = useState([])

	const handleSucSelection = (id) => {
		history.push(`/sucursales/${id}`)
	}

	useEffect(() => {
		fetch("http://localhost:3001/sucursales")
			.then((res) => res.json())
			.then((res) => setSucursales(res))
	}, [])

	if (sucursales[0]) {
		return (
			<div>
				<h1>Sucursales</h1>

				<GridComponent />

				{/* <div className={sucursalesContainer}>
					<div className={flex}>
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
				</div> */}
			</div>
		)
	} else {
		return <Loading />
	}
}

export default SucursalesPage
