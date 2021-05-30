import React from "react"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import useIdSucursal from "hooks/useIdSucursal"

const SucursalesIDFacturaPage = ({ match }) => {
	const history = useHistory()
	const { id, _id } = match.params
	const { sucActual } = useIdSucursal(id)
	const [facturaInfo, setFacturaInfo] = useState()

	useEffect(() => {
		fetch(`http://localhost:3001/api/sucursales/${id}/F/${_id}`)
			.then((res) => res.json())
			.then((res) => setFacturaInfo(res))
	}, [id, _id])

	if (facturaInfo) {
		return (
			<div>
				<button onClick={() => history.goBack()}>atras</button>
				<p>Sucursal: {sucActual}</p>
				<p>Factura: {facturaInfo.factura}</p>
				<p>mes: {facturaInfo.mes}</p>
				<p>dia: {facturaInfo.dia}</p>
				<p>proveedor: {facturaInfo.proveedor}</p>
				<p>fechaDocumento: {facturaInfo.fechaDocumento}</p>
				<p>detalle: {facturaInfo.detalle}</p>
				<p>costo: {facturaInfo.costo}</p>
				<p>neto: {facturaInfo.neto}</p>
				<p>apertura: {facturaInfo.apertura}</p>
				<p>rubro: {facturaInfo.rubro}</p>
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

export default SucursalesIDFacturaPage
