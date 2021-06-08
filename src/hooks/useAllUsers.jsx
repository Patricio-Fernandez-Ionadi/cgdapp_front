import { useEffect, useState } from "react"

export function useAllUsers() {
	const [allUsers, setAllUsers] = useState()
	const [allPendingUsers, setAllPendingUsers] = useState()
	const [allOnlineUsers, setAllOnlineUsers] = useState()

	useEffect(() => {
		fetch("http://localhost:3001/sesion")
			.then((res) => res.json())
			.then((res) => {
				setAllUsers(res[0])
				setAllOnlineUsers(res[1])
			})

		fetch("http://localhost:3001/admin/control/userRequest")
			.then((res) => res.json())
			.then((res) => setAllPendingUsers(res))
	}, [])

	return { allUsers, allPendingUsers, allOnlineUsers }
}
