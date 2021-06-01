import { useContext } from "react"
import UserContext from "contexts/UserContextProvider"
import routes from "const/routes"
import { Redirect, Route, useLocation } from "react-router-dom"

import AlertNoAccess from "components/AlertNoAccess"

export default function PrivateRoute({ hasRole: role, ...rest }) {
	const location = useLocation()
	const { hasRole, isLogged } = useContext(UserContext)

	if (role && !hasRole(role)) return <Redirect to={routes.home.url} />
	if (!isLogged()) {
		return (
			<>
				<AlertNoAccess />
			</>
		)
	}
	return <Route {...rest} />
}
