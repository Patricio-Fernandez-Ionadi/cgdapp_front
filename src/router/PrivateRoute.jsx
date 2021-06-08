import { useContext } from "react"
import UserContext from "contexts/UserContextProvider"
import routes from "const/routes"
import { Redirect, Route } from "react-router-dom"

import AlertNoAccess from "components/AlertNoAccess"

export default function PrivateRoute({ hasRole: role, ...rest }) {
	const { hasRole, isLogged } = useContext(UserContext)

	const title = "Es realmente accesible a todos esta informacion?"
	const content =
		"Parece que no tienes acceso a esta pagina. Por favor inicia sesion o registrate."

	if (role && !hasRole(role)) return <Redirect to={routes.home.url} />
	if (!isLogged()) {
		return (
			<>
				<AlertNoAccess content={content} title={title} />
			</>
		)
	}
	return <Route {...rest} />
}
