// COMPONENTS
import PageWithTabs from "components/PageWithTabs"
import FirstPanel from "./FirstPanel"
import SecondPanel from "./SecondPanel"
import ThirdPanel from "./ThirdPanel"

const UsersControl = () => {
	return (
		<PageWithTabs
			firstPanel={<FirstPanel />}
			secondPanel={<SecondPanel />}
			thirdPanel={<ThirdPanel />}
		/>
	)
}
export default UsersControl
