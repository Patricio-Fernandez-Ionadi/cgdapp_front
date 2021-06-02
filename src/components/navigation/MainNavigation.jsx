import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
// COMPONENTS
import AppbarSearch from "./AppbarSearch"
import AppbarUserMenu from "./AppbarUserMenu"
import DrawerBoxes from "./DrawerBoxes"
import DrawerHead from "./DrawerHead"
// Const
import colors from "const/colors"
import { useState } from "react"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	root: {
		display: "flex",
	},
	appBar: {
		color: colors.text.secondary,
		backgroundColor: colors.primary.main,
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		backgroundColor: colors.secondary.main,
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		backgroundColor: colors.secondary.main,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(0, 8),
		backgroundColor: colors.secondary.light,
	},
}))

export default function MainNavigation({ children }) {
	// ------------------- DEFAULT ---------------------
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const handleDrawerOpen = () => setOpen(true)
	const handleDrawerClose = () => setOpen(false)
	// ------------------------------------------------

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position='fixed'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						Mantenimiento App
					</Typography>
					{/* SEARCH */}
					<AppbarSearch />
					{/* DIVISOR */}
					<div className={classes.grow} />
					{/* CUENTA BUTTON */}
					<AppbarUserMenu />
				</Toolbar>
			</AppBar>
			{/* DRAWER */}
			<Drawer
				variant='permanent'
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<DrawerHead closer={handleDrawerClose} />
				{/* LIST EN DRAWER */}
				<DrawerBoxes closer={handleDrawerClose}></DrawerBoxes>
			</Drawer>
			{/* Resto del contenido */}
			<main className={classes.content} onClick={handleDrawerClose}>
				{children}
			</main>
		</div>
	)
}
