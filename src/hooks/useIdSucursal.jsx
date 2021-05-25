import { useEffect, useState } from "react"

export default function useIdSucursal(id) {
	const [response, setResponse] = useState([])
	const [sucActual, setSucActual] = useState()
	useEffect(() => {
		fetch(`http://localhost:3001/api/sucursales/${id}`)
			.then((res) => res.json())
			.then((res) => setResponse(res))

		fetch("http://localhost:3001/api/sucursales")
			.then((res) => res.json())
			.then((res) => {
				const sucursalActual = res.find((obj) => obj.sucursalID === id)
				setSucActual(sucursalActual.sucursal)
			})
	}, [id])
	return { response, sucActual }
}
