import { Divider } from "@material-ui/core"
import DrawerList from "./DrawerList"
// routes
import routes from "../../const/routes"
import { useContext } from "react"
import UserContext from "contexts/UserContextProvider"

const DrawerBoxes = ({ closer }) => {
	const { user } = useContext(UserContext)
	console.log(user)

	return (
		<>
			<Divider />
			<DrawerList arr={[routes.home, routes.destacados]} closer={closer} />
			{user && (
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
			{user.role === "admin" && (
				<>
					<Divider />
					<DrawerList arr={[routes.facturas]} closer={closer} />
				</>
			)}
		</>
	)
}

export default DrawerBoxes
