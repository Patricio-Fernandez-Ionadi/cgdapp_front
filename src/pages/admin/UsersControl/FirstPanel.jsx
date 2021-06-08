import { useAllUsers } from "hooks/useAllUsers"
import React, { useEffect } from "react"

const FirstPanel = () => {
	const { allUsers } = useAllUsers()

	useEffect(() => {}, [allUsers])

	const toRender = (
		<div>
			{allUsers?.map((each) => {
				const {
					user,
					name,
					lastName,
					email,
					role,
					sector,
					sucursal,
					gender,
					nacionalidad,
					age,
					date,
					_id,
				} = each
				return (
					<div key={_id}>
						<h3>Nombre: {name}</h3>
						<p>Apellido: {lastName}</p>
						<p>Edad: {age}</p>
						<p>Sector: {sector}</p>
						<p>Sucursal: {sucursal}</p>
						<p>Usuario: {user}</p>
						<p>Fecha Nacimiento: {date}</p>
						<p>Correo: {email}</p>
						<p>Rol: {role}</p>
						<p>Genero: {gender}</p>
						<p>Nacionalidad: {nacionalidad}</p>
					</div>
				)
			})}
		</div>
	)

	if (allUsers) return <div>{toRender}</div>
	return (
		<>
			<h1>CARGANDO...</h1>
		</>
	)
}

export default FirstPanel
