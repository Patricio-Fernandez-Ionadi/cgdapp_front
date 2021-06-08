////// ROUTER
import { Route, Switch } from "react-router"
////// COMPONENTS
import PrivateRoute from "./PrivateRoute"
////// PAGES
import HomePage from "pages/HomePage"
// admin
import NewInfoPage from "pages/admin/NewInfoPage"
import UsersControl from "pages/admin/UsersControl/index"
// sucursales
import SucursalesPage from "pages/sucursalesPage/SucursalesPage"
import SucursalesIDPage from "pages/sucursalesPage/SucursalesIDPage"
import SucursalesIDFacturaPage from "pages/sucursalesPage/SucursalesIDFacturaPage"
import SucursalesIDProveedorPage from "pages/sucursalesPage/SucursalesIDProveedorPage"
// users
import UserProfile from "pages/userPages/UserProfile"
import UserAccount from "pages/userPages/UserAccount"
// login_register
import LoginPage from "pages/login_register/LoginPage"
import RegisterPage from "pages/login_register/RegisterPage"
//
import GastosPage from "pages/GastosPage"
import DestacadosPage from "pages/DestacadosPage"
import NotFoundPage from "pages/NotFoundPage"
////// CONTEXT
import { useContext } from "react"
import UserContext from "contexts/UserContextProvider"
import routes from "const/routes"

const AppRouter = () => {
	const { user } = useContext(UserContext)

	return (
		<Switch>
			<Route exact path={routes.destacados.url} component={DestacadosPage} />
			<PrivateRoute
				hasRole={user?.role}
				exact
				path={routes.gastos.url}
				component={GastosPage}
			/>
			<PrivateRoute
				hasRole={user?.role}
				exact
				path={routes.profile.url}
				component={UserProfile}
			/>
			<PrivateRoute
				hasRole={user?.role}
				exact
				path={routes.account.url}
				component={UserAccount}
			/>
			<PrivateRoute
				hasRole={user?.role}
				exact
				path='/sucursales/:id/F/:_id'
				component={SucursalesIDFacturaPage}
			/>
			<PrivateRoute
				hasRole={user?.role}
				exact
				path='/sucursales/:id/PR/:proveedor'
				component={SucursalesIDProveedorPage}
			/>
			<PrivateRoute
				hasRole={user?.role}
				exact
				path='/sucursales/:id'
				component={SucursalesIDPage}
			/>
			<PrivateRoute
				hasRole={user?.role}
				exact
				path={routes.sucursales.url}
				component={SucursalesPage}
			/>
			<PrivateRoute
				hasRole={user?.role}
				exact
				path={routes.newInfo.url}
				component={NewInfoPage}
			/>
			<PrivateRoute
				hasRole={user?.role}
				exact
				path={routes.adminUsers.url}
				component={UsersControl}
			/>
			<Route exact path={routes.register.url} component={RegisterPage} />
			<Route exact path={routes.login.url} component={LoginPage} />
			<Route exact path={routes.home.url} component={HomePage} />
			<Route path='*' component={NotFoundPage} />
		</Switch>
	)
}

export default AppRouter
