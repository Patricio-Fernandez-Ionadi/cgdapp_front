import { createContext, useState } from "react"

const UserContext = createContext()

const initialUser = {
	id: "83510P0K3R",
	name: "Poker",
	password: "123",
	role: "admin", // regular o null
}

// const initialUser = null

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(initialUser)

	const login = () => setUser(initialUser)
	const logout = () => setUser(null)
	const isLogged = () => !!user
	const hasRole = function (role) {
		return user?.role === role
	}
	const data = { user, login, logout, hasRole, isLogged }

	return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserContextProvider }
export default UserContext
