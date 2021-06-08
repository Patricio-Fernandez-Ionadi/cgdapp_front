import { useAllUsers } from "hooks/useAllUsers"
import React, { useEffect } from "react"

const ThirdPanel = () => {
	const { allUsers, allPendingUsers, allOnlineUsers } = useAllUsers()

	useEffect(() => {}, [allUsers, allPendingUsers])

	const toRender = allOnlineUsers?.map((each) => {
		const { name, lastName, isOnline, user, email, role, gender } = each
		return (
			<div key={email}>
				<h3>
					{name}, {lastName}
				</h3>
				<small>{isOnline ? "Esta Online" : "No esta conectado"}</small>
				<p>
					{user}, {role}
				</p>
				<small>{gender}</small>
			</div>
		)
	})

	if (allOnlineUsers) return <div>{toRender}</div>
	return (
		<>
			<h1>CARGANDO...</h1>
		</>
	)
}

export default ThirdPanel
