import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import { useState } from "react"
import colors from "const/colors"

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	)
}
function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	}
}
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	tab: {
		width: "100%",
		color: colors.text.primary,
		backgroundColor: colors.secondary.main,
	},
}))
export default function PageWithTabs({ firstPanel, secondPanel, thirdPanel }) {
	const classes = useStyles()
	const [value, setValue] = useState(0)
	const handleChange = (_, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='simple tabs example'
				>
					<Tab className={classes.tab} label='Usuarios' {...a11yProps(0)} />
					<Tab
						className={classes.tab}
						label='Peticiones de Usuario'
						{...a11yProps(1)}
					/>
					<Tab className={classes.tab} label='Varios' {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			{/* //////////////////////////////////////////////////////////////// */}
			<TabPanel value={value} index={0}>
				{firstPanel}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{secondPanel}
			</TabPanel>
			<TabPanel value={value} index={2}>
				{thirdPanel}
			</TabPanel>
		</div>
	)
}
