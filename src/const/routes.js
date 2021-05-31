// ICONS
// common
import GradeRoundedIcon from "@material-ui/icons/GradeRounded"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
// private
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded"
import AccountTreeRoundedIcon from "@material-ui/icons/AccountTreeRounded"
import ConfirmationNumberRoundedIcon from "@material-ui/icons/ConfirmationNumberRounded"
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded"
import AccountBalanceIcon from "@material-ui/icons/AccountBalance"
// public
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded"

const routes = {
	home: {
		url: "/",
		name: "Inicio",
		icon: <HomeRoundedIcon />,
		access: "common",
	},
	destacados: {
		url: "/destacados",
		name: "Destacados",
		icon: <GradeRoundedIcon />,
		access: "common",
	},
	login: {
		url: "/login",
		name: "Iniciar Sesion",
		icon: <ExitToAppRoundedIcon />,
		access: "public",
	},
	register: {
		url: "/register",
		name: "Crear Cuenta",
		icon: <GradeRoundedIcon />,
		access: "public",
	},
	profile: {
		url: "/:userId/profile",
		name: "Perfil",
		icon: <AccountCircleRoundedIcon />,
		access: "private",
	},
	account: {
		url: "/:userId/account",
		name: "Cuenta",
		icon: <AccountTreeRoundedIcon />,
		access: "private",
	},
	facturas: {
		url: "/facturas",
		name: "Facturas",
		icon: <ConfirmationNumberRoundedIcon />,
		access: "private",
	},
	gastos: {
		url: "/gastos",
		name: "Gastos",
		icon: <MonetizationOnRoundedIcon />,
		access: "private",
	},
	sucursales: {
		url: "/sucursales",
		name: "Sucursales",
		icon: <AccountBalanceIcon />,
		access: "private",
	},
}
export default routes
