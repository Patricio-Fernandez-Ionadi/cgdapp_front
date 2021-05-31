import { makeStyles, useTheme } from "@material-ui/core/styles"
// ICONS
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles((theme) => ({
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
	},
}))

const DrawerHead = ({ closer }) => {
	const classes = useStyles()

	const theme = useTheme()
	return (
		<div className={classes.toolbar}>
			<img src='' alt='logo' />
			<IconButton onClick={closer}>
				{theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
			</IconButton>
		</div>
	)
}

export default DrawerHead
