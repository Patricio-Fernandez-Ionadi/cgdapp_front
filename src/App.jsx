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
import MainNavigation from "./components/navigation/MainNavigation"
// STYLES
import Pallete from "./contexts/ThemeProvider"
import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
	bodyContainer: {
		width: "90%",
		minHeight: "100vh",
		paddingTop: "70px",
		marginLeft: "auto",
		marginRight: "auto",
		backgroundColor: "#F1FAEE",
	},
}))

const App = () => {
	const classes = useStyles()
	return (
		<>
			<Pallete>
				<MainNavigation>
					<div className={classes.bodyContainer}>
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
				</MainNavigation>
			</Pallete>
		</>
	)
}

export default App
