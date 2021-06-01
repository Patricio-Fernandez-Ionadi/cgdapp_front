import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"
import { Link, useHistory, useLocation } from "react-router-dom"
import routes from "const/routes"
import colors from "const/colors"

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

export default function AlertDialogSlide() {
	const [open, setOpen] = React.useState(true)
	const history = useHistory()
	const location = useLocation()

	const handleClose = () => {
		setOpen(false)
		history.push({ pathname: routes.login.url, state: { from: location } })
	}
	const handleCloseRegister = () => {
		setOpen(false)
		history.push(routes.register.url)
	}

	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby='alert-dialog-slide-title'
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle id='alert-dialog-slide-title'>
					{"Es realmente accesible a todos esta informacion?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-slide-description'>
						Parece que no tienes acceso a esta pagina. Por favor{" "}
						<Link
							style={{ color: colors.danger.primary }}
							to={routes.login.url}
						>
							inicia sesion
						</Link>{" "}
						o{" "}
						<Link
							style={{ color: colors.danger.primary }}
							to={routes.register.url}
						>
							registrate
						</Link>
						.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleClose}
						style={{
							backgroundColor: colors.primary.main,
							color: colors.secondary.main,
						}}
						variant='contained'
					>
						Iniciar sesion
					</Button>
					<Button onClick={handleCloseRegister} color='primary'>
						Registrarme!
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
