import { useContext, useState } from "react"
// Context
import UserContext from "contexts/UserContextProvider"
// Router
import { Link, useHistory, useLocation } from "react-router-dom"
// Styles
import { IconButton } from "@material-ui/core"
import Menu from "@material-ui/core/Menu"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MenuItem from "@material-ui/core/MenuItem"
import routes from "const/routes"
import colors from "const/colors"

const AppbarUserMenu = () => {
	const { user, logout } = useContext(UserContext)
	const history = useHistory()
	const location = useLocation()

	const menuId = "primary-search-account-menu"
	const [anchorEl, setAnchorEl] = useState(null)
	const isMenuOpen = Boolean(anchorEl)
	const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget)
	const handleMenuClose = () => setAnchorEl(null)

	const handleProfileMenuItem = () => {
		console.log(user)
		history.push(`/${user._id}/profile`)
		handleMenuClose()
	}
	const handleAccountMenuItem = () => {
		history.push(`/${user._id}/account`)
		handleMenuClose()
	}
	const handleLogoutMenuItem = () => {
		handleMenuClose()
		logout()
		history.push("/")
	}

	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleProfileMenuItem}>Perfil</MenuItem>
			<MenuItem onClick={handleAccountMenuItem}>Cuenta</MenuItem>
			<MenuItem onClick={handleLogoutMenuItem}>Cerrar Sesion</MenuItem>
		</Menu>
	)

	const loginPage = location.pathname === "/login"
	const stylesIniciarSesionButton = {
		color: colors.secondary.main,
	}

	return (
		<>
			{user ? (
				<>
					<IconButton
						edge='end'
						aria-label='account of current user'
						aria-controls={menuId}
						aria-haspopup='true'
						onClick={handleProfileMenuOpen}
						color='inherit'
					>
						<AccountCircle />
					</IconButton>
					{renderMenu}
				</>
			) : !loginPage ? (
				<Link to={routes.login.url} style={stylesIniciarSesionButton}>
					Iniciar Sesion
				</Link>
			) : null}
		</>
	)
}

export default AppbarUserMenu
