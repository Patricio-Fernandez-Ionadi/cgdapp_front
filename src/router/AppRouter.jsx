import { Route, Switch } from "react-router"
// PAGES
import HomePage from "pages/HomePage"
import FacturasPage from "pages/FacturasPage"
import NotFoundPage from "pages/NotFoundPage"
import SucursalesPage from "pages/SucursalesPage/SucursalesPage"
import SucursalesIDPage from "pages/SucursalesPage/SucursalesIDPage"
import SucursalesIDFacturaPage from "pages/SucursalesPage/SucursalesIDFacturaPage"
import SucursalesIDProveedorPage from "pages/SucursalesPage/SucursalesIDProveedorPage"
import GastosPage from "pages/GastosPage"
import DestacadosPage from "pages/DestacadosPage"
import LoginPage from "pages/LoginPage"
import UserProfile from "pages/UserProfile"
import UserAccount from "pages/UserAccount"

const AppRouter = () => {
	return (
		<Switch>
			<Route path='/destacados' component={DestacadosPage} />
			<Route path='/gastos' component={GastosPage} />
			<Route exact path='/:userId/profile' component={UserProfile} />
			<Route exact path='/:userId/account' component={UserAccount} />
			<Route
				exact
				path='/sucursales/:id/F/:_id'
				component={SucursalesIDFacturaPage}
			/>
			<Route
				exact
				path='/sucursales/:id/PR/:proveedor'
				component={SucursalesIDProveedorPage}
			/>
			<Route path='/sucursales/:id' component={SucursalesIDPage} />
			<Route path='/sucursales' component={SucursalesPage} />
			<Route path='/facturas' component={FacturasPage} />
			<Route path='/login' component={LoginPage} />
			<Route exact path='/' component={HomePage} />
			<Route path='/*' component={NotFoundPage} />
		</Switch>
	)
}

export default AppRouter
