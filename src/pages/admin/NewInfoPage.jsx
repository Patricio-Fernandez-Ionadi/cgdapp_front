import React, { useEffect, useState } from "react"

const NewInfoPage = () => {
	/////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////// DE MOMENTO FUERA DE SERVICIO ////////////////
	/////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////

	// INFORMACION QUE SE RECIBE DESDE LA DB
	const [recivedInfo, setRecivedInfo] = useState([])

	// OBJETO A ENVIAR
	const [infoToSave, setInfoToSave] = useState({
		sucursal: "",
		fecha: "",
		factura: "",
	})

	// CONTROLA CAMBIOS EN INPUTS Y SETEA EL OBJETO A ENVIAR
	const handleChangesOnForm = (e) => {
		let valueToSave = e.target.value

		if (e.target.name === "sucursal")
			setInfoToSave({
				...infoToSave,
				sucursal: valueToSave.toLocaleLowerCase(),
			})
		if (e.target.name === "fecha")
			setInfoToSave({ ...infoToSave, fecha: valueToSave.toLocaleLowerCase() })
		if (e.target.name === "factura")
			setInfoToSave({ ...infoToSave, factura: valueToSave.toLocaleLowerCase() })
	}
	/////////////////////////////////////////////////////////////////////////////////////
	/* GET DATA */
	useEffect(() => {
		fetch("http://localhost:3001/api")
			.then((res) => res.json())
			.then((res) => {
				setRecivedInfo(res.reverse())
			})
	}, [recivedInfo])

	/* POST DATA */
	async function postData(object) {
		const response = await fetch("http://localhost:3001/api", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(object),
		})
		return response.json()
	}
	// postData({ name: "Poker desde react", content: "se vienen cositas" }).then(
	// 	(data) => console.log(data)
	// )

	const shouldSendInfoForm = (e) => {
		e.preventDefault()
		postData(infoToSave)
		setInfoToSave({
			sucursal: "",
			fecha: "",
			factura: "",
		})
	}

	/////////////////////////////////////////////////////////////////////////////////////
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
	/////////////////////////////////////////////////////////////////////////////////////

	/* SOLO CUANDO HAYA INFORMACION MOSTRAR... */
	if (recivedInfo[0]) {
		return (
			<div>
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
