import React from "react"
import { useEffect } from "react"
import { useState } from "react"

const LoginPage = () => {
	async function logUser(object) {
		const response = await fetch("http://localhost:3001/login", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: { "Content-Type": "application/json" },
			redirect: "follow",
			referrencePolicy: "no-referrer",
			body: JSON.stringify(object),
		})
		return response.json()
	}
	//-------------------------------------------------------------------------------
	// estado de los inputs
	const [user, setUser] = useState({ user: "", pass: "" })

	// manejo de inputs para actualizar el estado de la informacion ingresada
	const handleUserName = (e) => {
		let inputValue = e.target.value
		setUser({ ...user, user: inputValue })
	}
	const handleUserPass = (e) => {
		let inputValue = e.target.value
		setUser({ ...user, pass: inputValue })
	}

	// estado de la informacion que será enviada
	//	// sospecho que este estado es innecesario y podria perfectamente ser el anterior
	//  // pero la estoy guardando en una copia para que una vez que se haya hecho el submit
	//  // y el estado de los inputs se borre, en caso de que haya algun problema poder acceder a la informacionenviada
	const [requestLog, setRequestLog] = useState()

	// evento submit (resetea el estado de los inputs y setea el estado donde guarde la copia)
	const handleSubmit = (e) => {
		e.preventDefault()
		setRequestLog(user)
		setUser({ user: "", pass: "" })
		// logUser(requestLog)
	}

	// peticion a la DB con los usuarios registrados
	//  // cada vez que se actualice la copia del estado de los inputs
	//  // userExist => el usuario existe? (boolean)
	useEffect(() => {
		// console.log(requestLog)
		fetch("http://localhost:3001/login")
			.then((res) => res.json())
			.then((res) => {
				if (requestLog) {
					// let usersMatched = res.map((each) => each.user === requestLog.user)
					// const userExist = usersMatched.some((element) => element === true)
				}
			})
	}, [requestLog])

	return (
		<div>
			<h1>LOGIN</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='user'>Ingresa tu usuario.</label>
				<input
					type='text'
					name='user'
					value={user.user}
					onChange={handleUserName}
				/>
				<label htmlFor='pass'>Ingresa tu contraseña.</label>
				<input
					type='password'
					name='pass'
					value={user.pass}
					onChange={handleUserPass}
				/>
				<button>Ingresar</button>
			</form>
		</div>
	)
}

export default LoginPage
