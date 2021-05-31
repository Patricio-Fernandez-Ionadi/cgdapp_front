import { Link } from "react-router-dom"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"

const DrawerList = ({ arr, closer }) => {
	return (
		<List>
			{arr.map((each) => (
				<Link key={each.url} to={each.url} style={{ textDecoration: "none" }}>
					<ListItem button onClick={closer}>
						<ListItemIcon>{each.icon}</ListItemIcon>
						<ListItemText primary={each.name} />
					</ListItem>
				</Link>
			))}
		</List>
	)
}

export default DrawerList
