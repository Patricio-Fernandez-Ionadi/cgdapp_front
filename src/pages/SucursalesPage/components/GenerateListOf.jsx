import ListItem from "./ListItem"

const GenerateListOf = ({ arr }) => {
	return (
		<>
			{arr.map((each) => (
				<ListItem
					key={each.sucursalID}
					sucursal={each.sucursal}
					sucursalID={each.sucursalID}
				/>
			))}
		</>
	)
}

export default GenerateListOf
