import { useHistory } from "react-router"
import { Link } from "react-router-dom"
// custom hooks
import useIdSucursal from "hooks/useIdSucursal"

const SucursalesIDPage = ({ match }) => {
	const history = useHistory()
	const { id } = match.params
	const { response, sucActual } = useIdSucursal(id)

	const proveedores = []
	response.map((each) =>
		!proveedores.includes(each.proveedor) ? proveedores.push(each.proveedor) : 0
	)

	return (
		<div>
			<button onClick={history.goBack}>atras</button>
			<p>
				Sucursal {sucActual} || id: {id}
			</p>
			<br />

			{/* facturas */}
			<h3>facturas</h3>
			{response.map((each) => {
				const { _id, mes, factura, proveedor, fechaDocumento } = each

				return (
					<div key={_id}>
						<Link to={`/sucursales/${id}/F/${_id}`}>
							Fecha: {fechaDocumento} Proveedor:{proveedor} factura: {factura}{" "}
							mes_de_impacto: {mes}
						</Link>
					</div>
				)
			})}

			{/* proveedores */}
			<h3>facturas por proveedor</h3>
			<ul>
				{proveedores.map((each) => (
					<li key={each}>
						<Link to={`/sucursales/${id}/PR/${each}`}>{each}</Link>
					</li>
				))}
			</ul>

			{/* 
			facturas (all data)
			proveedores (ref a las facturas correspondientes)
			gasto mensual (no tengo los datos en numero)
			gasto parcial (no tengo los datos en numero)
			gastos por rubro	(no tengo los datos en numero)
			 */}
		</div>
	)
}

export default SucursalesIDPage
