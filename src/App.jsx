import { Route, Switch } from "react-router-dom"
// PAGES
import HomePage from "./pages/HomePage"
import FacturasPage from "./pages/FacturasPage"
import NotFoundPage from "./pages/NotFoundPage"
// COMPONENTS
import Navigation from "./components/Navigation"

const App = () => {
	return (
		<>
			<Navigation />
			<Switch>
				<Route path='/facturas' component={FacturasPage} />
				<Route exact path='/' component={HomePage} />
				<Route path='/*' component={NotFoundPage} />
			</Switch>
		</>
	)
}

export default App
