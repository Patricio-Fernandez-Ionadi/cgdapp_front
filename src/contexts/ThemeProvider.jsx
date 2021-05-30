import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"

const theme = createMuiTheme({
	palette: {
		textColor: {
			light: "#fafafa",
			dark: "#444",
		},
		primary: {
			main: "#ffcd01",
		},
		secondary: {
			main: "#db281b",
		},
	},
})

export default function Palette({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
