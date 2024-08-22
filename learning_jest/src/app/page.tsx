import React from "react";
import { createContext } from "vm";

const Home = () => {
	return (
		<div className="bg-slate-950 min-h-screen text-white">
			<h3 className={`font-bold text-2xl text-center`}>Home page</h3>
			<button className="rounded-md px-3 py-2 bg-purple-300 hover:bg-purple-200 transition-colors font-sans">
				login
			</button>
			<div className="login">
				<label htmlFor="email">
					email:
					<input type="text" id="email" />
				</label>
				<label htmlFor="password">
					password :
					<input type="password" id="password" />
				</label>
			</div>
		</div>
	);
};

export default Home;
