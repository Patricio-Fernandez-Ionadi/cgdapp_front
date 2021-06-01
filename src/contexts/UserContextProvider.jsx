import { createContext, useState } from "react"
import { useHistory } from "react-router"
const UserContext = createContext()

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const history = useHistory()

	const login = (user, fromlocation) => {
		setUser(user)
		fromlocation && history.push(fromlocation)
	}
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
