import { useContext } from "react"
import UserContext from "contexts/UserContextProvider"
import routes from "const/routes"
import { Link, Redirect, Route } from "react-router-dom"

import AlertNoAccess from "components/AlertNoAccess"
import colors from "const/colors"

export default function PrivateRoute({ hasRole: role, ...rest }) {
	const { hasRole, isLogged } = useContext(UserContext)

	const title = "Es realmente accesible a todos esta informacion?"
	const content = (
		<>
			{" "}
			Parece que no tienes acceso a esta pagina. Por favor{" "}
			<Link style={{ color: colors.danger.primary }} to={routes.login.url}>
				inicia sesion
			</Link>{" "}
			o{" "}
			<Link style={{ color: colors.danger.primary }} to={routes.register.url}>
				registrate
			</Link>
			.
		</>
	)

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
