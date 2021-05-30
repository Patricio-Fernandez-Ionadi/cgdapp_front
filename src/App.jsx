// Context
import { UserContextProvider } from "./contexts/UserContextProvider"
// COMPONENTS
import MainNavigation from "./components/navigation/MainNavigation"
import AppRouter from "./router/AppRouter"
// STYLES
import { colors } from "./const/colors"
import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
	bodyContainer: {
		width: "100%",
		minHeight: "100vh",
		paddingTop: "50px",
		marginLeft: "auto",
		marginRight: "auto",
		backgroundColor: "#F1FAEE",
		color: colors.text.primary,
	},
}))

const App = () => {
	const classes = useStyles()
	return (
		<>
			<UserContextProvider>
				<MainNavigation>
					<div className={classes.bodyContainer}>
						<AppRouter />
					</div>
				</MainNavigation>
			</UserContextProvider>
		</>
	)
}

export default App
