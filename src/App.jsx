import { Fragment } from "react";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Contact from "./components/Contact";

export default function App() {
	return (
		<Fragment>
			<Router>
				<Menu />
				<Switch>
					<Route exact path="/">
						<Index />
					</Route>
					<Route exact path="/contact-us">
						<Contact />
					</Route>
				</Switch>
			</Router>
		</Fragment>
	);
}
