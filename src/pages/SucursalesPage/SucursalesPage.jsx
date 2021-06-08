import React, { useEffect, useState } from "react"
// STYLES
import { makeStyles } from "@material-ui/core"
// COMPONENTS
import Loading from "../../components/Loading"
import GenerateListOf from "./components/GenerateListOf"

const useStyles = makeStyles((theme) => ({
	sucursalesContainer: {
		width: "100%",
		maxWidth: "980px",
		margin: "0 auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	listHeader: {
		padding: "0 10px",
		width: "90%",
		display: "flex",
		justifyContent: "space-between",
	},
}))

const SucursalesPage = () => {
	const { sucursalesContainer, listHeader } = useStyles()
	const [sucursales, setSucursales] = useState([])

	useEffect(() => {
		fetch("http://localhost:3001/sucursales")
			.then((res) => res.json())
			.then((res) => setSucursales(res))
	}, [])

	if (sucursales[0]) {
		return (
			<div>
				<h1>Sucursales</h1>
				<div className={sucursalesContainer}>
					<div className={listHeader}>
						<div>Sucursal:</div>
						<div>Id de sucursal</div>
					</div>
					<GenerateListOf arr={sucursales} />
				</div>
			</div>
		)
	} else {
		return <Loading />
	}
}

export default SucursalesPage
