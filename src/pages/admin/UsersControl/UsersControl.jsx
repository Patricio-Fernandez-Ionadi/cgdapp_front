import PageWithTabs from "components/PageWithTabs"
import { useAllUsers } from "hooks/useAllUsers"
import { useEffect } from "react"

const UsersControl = () => {
	const { allUsers, allPendingUsers } = useAllUsers()

	useEffect(() => {}, [allUsers, allPendingUsers])
	// ----------//////////----------//////////----------//////////
	const renderFirstPanel = (
		<>
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
		</>
	)
	// ----------//////////----------//////////----------//////////
	const renderSecondPanel = (
		<>
			<div>
				{allPendingUsers?.map((each) => {
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
		</>
	)
	// ----------//////////----------//////////----------//////////
	const renderThirdPanel = (
		<>
			<p>Third Panel</p>
		</>
	)
	// ----------//////////----------//////////----------//////////

	if (allUsers && allPendingUsers) {
		return (
			<PageWithTabs
				firstPanel={renderFirstPanel}
				secondPanel={renderSecondPanel}
				thirdPanel={renderThirdPanel}
			/>
		)
	} else {
		return (
			<>
				<h1>CARGANDO...</h1>
			</>
		)
	}
}

export default UsersControl
