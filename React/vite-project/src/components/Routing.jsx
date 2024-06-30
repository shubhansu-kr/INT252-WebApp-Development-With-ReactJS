// App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";

const App = () => {
	return (
		<Router>
			<div className='app'>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/blog'>Blog</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/blog' component={Blog} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
