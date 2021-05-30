import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

const SucursalesIDProveedorPage = ({ match }) => {
	const history = useHistory()
	const { id, proveedor } = match.params

	const [facturas, setFacturas] = useState([])

	useEffect(() => {
		fetch(`http://localhost:3001/api/sucursales/${id}/PR/${proveedor}`)
			.then((res) => res.json())
			.then((res) => {
				setFacturas(res)
			})
	}, [id, proveedor])

	if (facturas[0]) {
		return (
			<div>
				<button onClick={(e) => history.goBack()}>atras</button>
				<h1>Proveedor</h1>
				{facturas.map((each) => {
					return (
						<div key={each._id}>
							<hr />
							<p>Factura: {each.factura}</p>
							<p>mes: {each.mes}</p>
							<p>dia: {each.dia}</p>
							<p>proveedor: {each.proveedor}</p>
							<p>fechaDocumento: {each.fechaDocumento}</p>
							<p>detalle: {each.detalle}</p>
							<p>costo: {each.costo}</p>
							<p>neto: {each.neto}</p>
							<p>apertura: {each.apertura}</p>
							<p>rubro: {each.rubro}</p>
							<hr />
						</div>
					)
				})}
			</div>
		)
	} else {
		return (
			<div>
				<h1>CARGANDO...</h1>
			</div>
		)
	}
}

export default SucursalesIDProveedorPage
