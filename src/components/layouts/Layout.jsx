// STYLES
import colors from "const/colors"
import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
	bodyContainer: {
		width: "100%",
		minHeight: "calc(100vh - 48px)",
		paddingTop: "50px",
		marginLeft: "auto",
		marginRight: "auto",
		backgroundColor: colors.secondary.light,
		color: colors.text.primary,
	},
}))

const Layout = ({ children }) => {
	const classes = useStyles()

	return <div className={classes.bodyContainer}>{children}</div>
}

export default Layout
