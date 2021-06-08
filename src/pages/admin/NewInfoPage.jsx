import React, { useEffect, useState } from "react"

const NewInfoPage = () => {
	/////////////////////////////////////////////////////////////////////////////
	// Estado con la info de DB
	const [recivedInfo, setRecivedInfo] = useState([])
	/* GET DATA */
	useEffect(() => {
		fetch("http://localhost:3001/api")
			.then((res) => res.json())
			.then((res) => {
				setRecivedInfo(res.reverse())
			})
	}, [recivedInfo])

	/* POST DATA */
	// OBJETO A ENVIAR
	const [infoToSave, setInfoToSave] = useState({
		sucursal: null,
		fecha: null,
		factura: null,
		dia: null,
		mes: null,
		proveedor: null,
		detalle: null,
		neto: null,
		apertura: null,
		rubro: null,
	})

	// CONTROLA CAMBIOS EN INPUTS Y SETEA EL OBJETO A ENVIAR
	const handleChangesOnForm = (e) => {
		let valueToSave = e.target.value
		let targetName = e.target.name

		switch (targetName) {
			case "sucursal":
				setInfoToSave({
					...infoToSave,
					sucursal: valueToSave,
				})
				break
			case "fecha":
				setInfoToSave({
					...infoToSave,
					fecha: valueToSave,
				})
				break
			case "factura":
				setInfoToSave({
					...infoToSave,
					factura: valueToSave,
				})
				break
			case "dia":
				setInfoToSave({
					...infoToSave,
					proveedor: valueToSave,
				})
				break
			case "mes":
				setInfoToSave({
					...infoToSave,
					mes: valueToSave,
				})
				break
			case "neto":
				setInfoToSave({
					...infoToSave,
					neto: valueToSave,
				})
				break
			case "apertura":
				setInfoToSave({
					...infoToSave,
					apertura: valueToSave,
				})
				break
			case "detalle":
				setInfoToSave({
					...infoToSave,
					detalle: valueToSave,
				})
				break
			case "rubro":
				setInfoToSave({
					...infoToSave,
					rubro: valueToSave,
				})
				break
			default:
				setInfoToSave(null)
				break
		}
	}

	function postData(object) {
		fetch("http://localhost:3001/api", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(object),
		}).then((res) => res.json())
	}

	const shouldSendInfoForm = (e) => {
		e.preventDefault()
		postData(infoToSave)
		setInfoToSave({
			sucursal: null,
			fecha: null,
			factura: null,
			dia: null,
			mes: null,
			proveedor: null,
			detalle: null,
			neto: null,
			apertura: null,
			rubro: null,
		})
	}

	/////////////////////////////////////////////////////////////////////////////
	/* DELETE DATA */
	async function deleteData(object) {
		const response = await fetch(
			"http://localhost:3001/api/deleteInformation",
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(object),
			}
		)
		return response
	}
	const handleDeleteInfo = (object) => {
		deleteData(object)
	}

	/////////////////////////////////////////////////////////////////////////////
	/* SOLO CUANDO HAYA INFORMACION MOSTRAR... */
	if (recivedInfo[0]) {
		return (
			<div>
				<h3>ADD new info</h3>
				<form action='POST' onSubmit={shouldSendInfoForm}>
					<div>
						<label>
							Dia
							<input
								type='text'
								name='dia'
								onChange={handleChangesOnForm}
								value={infoToSave.dia}
							/>
						</label>
						<label>
							Mes
							<input
								type='text'
								name='mes'
								onChange={handleChangesOnForm}
								value={infoToSave.mes}
							/>
						</label>
					</div>

					<label>
						Sucursal
						<input
							type='text'
							name='sucursal'
							onChange={handleChangesOnForm}
							value={infoToSave.sucursal}
						/>
					</label>
					<label>
						Fecha
						<input
							type='text'
							name='fecha'
							onChange={handleChangesOnForm}
							value={infoToSave.fecha}
						/>
					</label>
					<label>
						Factura
						<input
							type='text'
							name='factura'
							onChange={handleChangesOnForm}
							value={infoToSave.factura}
						/>
					</label>
					<button>send</button>
				</form>

				{/* 	MOSTRAR LA INFORMACION DEL SERVIDOR */}
				<div>
					{recivedInfo.map((each) => {
						const { _id: id, sucursal, fecha, factura } = each

						return (
							<div key={id} style={{ display: "flex" }}>
								<p>
									Sucursal: {sucursal} || Fecha: {fecha} || Factura: {factura}
								</p>
								{/* DELETE INFO HANDLER */}
								<button onClick={(e) => handleDeleteInfo(each)}>
									Delete info
								</button>
							</div>
						)
					})}
				</div>
			</div>
		)
	} else {
		return (
			<>
				<h3>ADD new info</h3>
				<form action='POST' onSubmit={shouldSendInfoForm}>
					<label>
						Sucursal
						<input
							type='text'
							name='sucursal'
							onChange={handleChangesOnForm}
							value={infoToSave.sucursal}
						/>
					</label>
					<label>
						Fecha
						<input
							type='text'
							name='fecha'
							onChange={handleChangesOnForm}
							value={infoToSave.fecha}
						/>
					</label>
					<label>
						Factura
						<input
							type='text'
							name='factura'
							onChange={handleChangesOnForm}
							value={infoToSave.factura}
						/>
					</label>
					<button>send</button>
				</form>
				<p>No Data to show</p>
			</>
		)
	}
}

export default NewInfoPage
