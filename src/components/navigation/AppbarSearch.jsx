import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import { makeStyles, fade } from "@material-ui/core/styles"
// Const
import colors from "const/colors"

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
		// usar queries para especificar tamaños
	},
	// ----- search
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(colors.secondary.main, 0.8),
		transition: "all .2s ease",
		"&:hover": {
			backgroundColor: fade(colors.secondary.main, 1),
			color: colors.text.primary,
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}))

const AppbarSearch = () => {
	const classes = useStyles()
	return (
		<div className={`${classes.search} ${classes.grow} `}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				placeholder='Search…'
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ "aria-label": "search" }}
			/>
		</div>
	)
}

export default AppbarSearch
