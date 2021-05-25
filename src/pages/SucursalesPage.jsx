import React, { useEffect, useState } from "react"
// STYLES
import { makeStyles } from "@material-ui/core"
import { useHistory } from "react-router"
const useStyles = makeStyles((theme) => ({
	botonera: {
		maxWidth: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(9, 1fr)",
		gridTemplateRows: "repeat(6, 40px)",
	},
	button: {
		margin: "3px",
		display: "inline-block",
	},
}))

const SucursalesPage = () => {
	const { botonera, button } = useStyles()
	const [sucursales, setSucursales] = useState([])

	useEffect(() => {
		fetch("http://localhost:3001/api/sucursales")
			.then((res) => res.json())
			.then((res) => setSucursales(res))
	}, [])

	const history = useHistory()

	const handleSucSelection = (id) => {
		console.log(id)
		history.push(`/sucursales/${id}`)
	}

	if (sucursales[0]) {
		return (
			<div>
				<h1>Sucursales</h1>
				<div className={botonera}>
					{sucursales.map((each) => (
						<button
							className={button}
							key={each.sucursalID}
							onClick={() => handleSucSelection(each.sucursalID)}
						>
							{each.sucursal !== "" ? each.sucursal : each.sucursalID}
						</button>
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
