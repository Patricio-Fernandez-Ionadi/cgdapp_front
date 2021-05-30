import { useState } from "react"
import { IconButton } from "@material-ui/core"
import Menu from "@material-ui/core/Menu"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MenuItem from "@material-ui/core/MenuItem"

const AppbarUserMenu = () => {
	const menuId = "primary-search-account-menu"
	const [anchorEl, setAnchorEl] = useState(null)
	const isMenuOpen = Boolean(anchorEl)
	const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget)
	const handleMenuClose = () => setAnchorEl(null)

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
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	)

	return (
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
	)
}

export default AppbarUserMenu
