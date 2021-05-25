import { Route, Switch } from "react-router-dom"
// PAGES
import HomePage from "./pages/HomePage"
import FacturasPage from "./pages/FacturasPage"
import NotFoundPage from "./pages/NotFoundPage"
import SucursalesPage from "./pages/SucursalesPage"
import SucursalesIDPage from "./pages/SucursalesIDPage"
import SucursalesIDFacturaPage from "./pages/SucursalesIDFacturaPage"
import SucursalesIDProveedorPage from "./pages/SucursalesIDProveedorPage"
import GastosPage from "./pages/GastosPage"
import DestacadosPage from "./pages/DestacadosPage"
import LoginPage from "./pages/LoginPage"
// COMPONENTS
import Navigation from "./components/Navigation"
// STYLES
import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
	header: {
		width: "100%",
		height: "60px",
	},
	bodyContainer: {
		width: "90%",
		marginTop: "0",
		marginLeft: "auto",
		marginRight: "auto",
	},
}))

const App = () => {
	const classes = useStyles()
	return (
		<>
			<Navigation />
			<div className={classes.bodyContainer}>
				<div className={classes.header}></div>
				<Switch>
					<Route path='/destacados' component={DestacadosPage} />
					<Route path='/gastos' component={GastosPage} />
					<Route
						path='/sucursales/:id/F/:_id'
						component={SucursalesIDFacturaPage}
					/>
					<Route
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
			</div>
		</>
	)
}

export default App
