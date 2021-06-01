import { Link } from "react-router-dom"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import colors from "const/colors"
const useStyles = makeStyles((theme) => ({
	icon: {
		color: colors.primary.main,
	},
	text: {
		color: colors.primary.dark,
	},
}))

const DrawerList = ({ arr, closer }) => {
	const { icon, text } = useStyles()
	return (
		<>
			<List>
				{arr.map((each) => (
					<Link key={each.url} to={each.url} style={{ textDecoration: "none" }}>
						<ListItem button onClick={closer}>
							<ListItemIcon className={icon}>{each.icon}</ListItemIcon>
							<ListItemText className={text} primary={each.name} />
						</ListItem>
					</Link>
				))}
			</List>
		</>
	)
}

export default DrawerList
