import { Divider } from "@material-ui/core"
import DrawerList from "./DrawerList"
// routes
import routes from "../../const/routes"
import { useContext } from "react"
import UserContext from "contexts/UserContextProvider"

const DrawerBoxes = ({ closer }) => {
	const { user } = useContext(UserContext)

	const regular = user?.role === "regular"
	const admin = user?.role === "admin"

	return (
		<>
			{
				user || !user ? (
					<>
						<Divider />
						<DrawerList
							arr={[routes.home, routes.destacados]}
							closer={closer}
						/>
					</>
				) : null // no se llega a este punto
			}

			{(regular || admin) && (
				<>
					<Divider />
					<DrawerList
						arr={[
							routes.profile,
							routes.account,
							routes.gastos,
							routes.sucursales,
						]}
						closer={closer}
					/>
				</>
			)}

			{admin && (
				<>
					<Divider />
					<DrawerList arr={[routes.newInfo]} closer={closer} />
				</>
			)}
		</>
	)
}

export default DrawerBoxes
