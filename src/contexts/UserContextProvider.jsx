import { createContext, useState } from "react"

const UserContext = createContext()

// const initialUser = {
// 	id: 1,
// 	name: "Poker",
// 	password: "123",
// }

const initialUser = null

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(initialUser)
	const login = () => setUser(initialUser)
	const logout = () => setUser(null)

	const data = { user, login, logout }

	return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserContextProvider }
export default UserContext
