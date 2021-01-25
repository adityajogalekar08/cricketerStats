import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/homepage/homepage";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard.jsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/dashboard" exact component={Dashboard} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
