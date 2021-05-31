// Context
import { UserContextProvider } from "./contexts/UserContextProvider"
// COMPONENTS
import MainNavigation from "./components/navigation/MainNavigation"
import Layout from "./components/layouts/Layout"
import AppRouter from "./router/AppRouter"

const App = () => {
	return (
		<>
			<UserContextProvider>
				<MainNavigation>
					<Layout>
						<AppRouter />
					</Layout>
				</MainNavigation>
			</UserContextProvider>
		</>
	)
}

export default App
