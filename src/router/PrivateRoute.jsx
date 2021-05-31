import { Redirect, Route, useLocation } from "react-router-dom"
import routes from "../const/routes"
import useUserContext from "../hooks/useUserContext"

export default function PrivateRoute({ hasRole: role, ...rest }) {
	const location = useLocation()
	const { hasRole, isLogged } = useUserContext()

	if (role && !hasRole(role)) return <Redirect to={routes.home.url} />
	if (!isLogged) {
		return (
			<Redirect
				to={{ pathname: routes.login.url, state: { from: location } }}
			/>
		)
	}
	return <Route {...rest} />
}
