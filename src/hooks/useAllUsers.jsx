import { useEffect, useState } from "react"

export function useAllUsers() {
	const [allUsers, setAllUsers] = useState()
	const [allPendingUsers, setAllPendingUsers] = useState()

	useEffect(() => {
		fetch("http://localhost:3001/api/users")
			.then((res) => res.json())
			.then((res) => setAllUsers(res))

		fetch("http://localhost:3001/api/users/register")
			.then((res) => res.json())
			.then((res) => setAllPendingUsers(res))
	}, [])

	return { allUsers, allPendingUsers }
}
