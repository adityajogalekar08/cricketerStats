import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/homepage/homepage";
import { Switch, BrowserRouter, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={HomePage} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
