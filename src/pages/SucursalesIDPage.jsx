import React from "react"
import { useHistory } from "react-router"

const SucursalesIDPage = ({ match }) => {
	const { id } = match.params
	const history = useHistory()
	return (
		<div>
			<button onClick={history.goBack}>atras</button>
			<p>{id}</p>
		</div>
	)
}

export default SucursalesIDPage
