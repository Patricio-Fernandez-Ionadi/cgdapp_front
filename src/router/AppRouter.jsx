import { Route, Switch } from "react-router"
// COMPONENTS
import PrivateRoute from "./PrivateRoute"
// PAGES
import HomePage from "pages/HomePage"
// facturas
import FacturasPage from "pages/FacturasPage/FacturasPage"
// sucursales
import SucursalesPage from "pages/SucursalesPage/SucursalesPage"
import SucursalesIDPage from "pages/SucursalesPage/SucursalesIDPage"
import SucursalesIDFacturaPage from "pages/SucursalesPage/SucursalesIDFacturaPage"
import SucursalesIDProveedorPage from "pages/SucursalesPage/SucursalesIDProveedorPage"
import GastosPage from "pages/GastosPage"
import DestacadosPage from "pages/DestacadosPage"
import LoginPage from "pages/LoginPage"
import UserProfile from "pages/UserProfile"
import UserAccount from "pages/UserAccount"
import NotFoundPage from "pages/NotFoundPage"
import RegisterPage from "pages/RegisterPage"
// CONST
import routes from "const/routes"
// CONTEXT
import { useContext } from "react"
import UserContext from "contexts/UserContextProvider"

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
				path='/:userId/profile'
				component={UserProfile}
			/>
			<PrivateRoute
				hasRole={user?.role}
				exact
				path='/:userId/account'
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
				path={routes.facturas.url}
				component={FacturasPage}
			/>
			<Route exact path={routes.register.url} component={RegisterPage} />
			<Route exact path={routes.login.url} component={LoginPage} />
			<Route exact path={routes.home.url} component={HomePage} />
			<Route path='*' component={NotFoundPage} />
		</Switch>
	)
}

export default AppRouter
