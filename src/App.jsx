import { Route, Switch } from "react-router-dom"
// PAGES
import HomePage from "./pages/HomePage"
import FacturasPage from "./pages/FacturasPage"
import NotFoundPage from "./pages/NotFoundPage"
import SucursalesPage from "./pages/SucursalesPage"
import GastosPage from "./pages/GastosPage"
import DestacadosPage from "./pages/DestacadosPage"
// COMPONENTS
import Navigation from "./components/Navigation"
import LoginPage from "./pages/LoginPage"

const App = () => {
	return (
		<>
			<Navigation />
			<Switch>
				<Route path='/destacados' component={DestacadosPage} />
				<Route path='/gastos' component={GastosPage} />
				<Route path='/sucursales' component={SucursalesPage} />
				<Route path='/facturas' component={FacturasPage} />
				<Route path='/login' component={LoginPage} />
				<Route exact path='/' component={HomePage} />
				<Route path='/*' component={NotFoundPage} />
			</Switch>
		</>
	)
}

export default App
