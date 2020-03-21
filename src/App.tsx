import React from 'react';
import './App.scss';
import { Header } from './components/Header/header';
import { AppDrawer } from './components/Header/appDrawer';

const App: React.FC = () => {
	return (
		<div>
			<header>
				<Header />
			</header>
			<body>
				<AppDrawer />
				<h1 className="h2">Body</h1>
			</body>
		</div>
	);
};

export default App;
