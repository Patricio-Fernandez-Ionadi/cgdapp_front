import UserContext from "contexts/UserContextProvider"
import { useContext, useState } from "react"
import { useHistory } from "react-router"

const LoginPage = () => {
	const { login } = useContext(UserContext)
	const history = useHistory()
	//-------------------------------------------------------------------------------
	async function logUser(object) {
		const response = await fetch("http://localhost:3001/sesion/login", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: { "Content-Type": "application/json" },
			redirect: "follow",
			referrencePolicy: "no-referrer",
			body: JSON.stringify(object),
		})
		return response
	}
	//-------------------------------------------------------------------------------

	const [userToSend, setUserToSend] = useState({ user: "", pass: "" })

	const handleUserName = (e) => {
		let inputValue = e.target.value
		setUserToSend({ ...userToSend, user: inputValue })
	}
	const handleUserPass = (e) => {
		let inputValue = e.target.value
		setUserToSend({ ...userToSend, pass: inputValue })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		logUser(userToSend).then((res) => {
			const userCanBeLogged = res.status === 201

			if (userCanBeLogged) {
				res.json().then((res) => {
					login(res)
					history.push(`/${res.name}/profile`)
				})
				setUserToSend({ user: "", pass: "" })
			} else {
				alert("usuario o contraseña incorrectos")
				setUserToSend({ ...userToSend, pass: "" })
			}
		})
	}

	console.log("in login page before render")
	return (
		<div>
			<h1>LOGIN</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='user'>Ingresa tu usuario.</label>
				<input
					type='text'
					name='user'
					value={userToSend.user}
					onChange={handleUserName}
				/>
				<label htmlFor='pass'>Ingresa tu contraseña.</label>
				<input
					type='password'
					name='pass'
					value={userToSend.pass}
					onChange={handleUserPass}
				/>
				<button onClick={handleSubmit}>Ingresar</button>
			</form>
		</div>
	)
}

export default LoginPage
