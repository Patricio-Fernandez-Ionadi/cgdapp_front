import { useContext, useState } from "react"
// Context
import UserContext from "contexts/UserContextProvider"
// Router
import { Link, useHistory } from "react-router-dom"
// Styles
import { IconButton } from "@material-ui/core"
import Menu from "@material-ui/core/Menu"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MenuItem from "@material-ui/core/MenuItem"
import routes from "const/routes"

const AppbarUserMenu = () => {
	const { user, logout } = useContext(UserContext)
	const history = useHistory()

	const menuId = "primary-search-account-menu"
	const [anchorEl, setAnchorEl] = useState(null)
	const isMenuOpen = Boolean(anchorEl)
	const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget)
	const handleMenuClose = () => setAnchorEl(null)

	const handleProfileMenuItem = () => {
		history.push(`/${user.id}/profile`)
		handleMenuClose()
	}
	const handleAccountMenuItem = () => {
		history.push(`/${user.id}/account`)
		handleMenuClose()
	}
	const handleLogoutMenuItem = () => {
		handleMenuClose()
		logout()
		history.push(`${routes.home.url}`)
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
			) : (
				<Link to={routes.login.url}>Iniciar Sesion</Link>
			)}
		</>
	)
}

export default AppbarUserMenu
