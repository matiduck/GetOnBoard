import React from 'react';
import './App.scss';
import { AppToolbar } from './components/AppToolbar/AppToolbar';
import { AppDrawer } from './components/AppDrawer/AppDrawer';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<header>
				<AppToolbar />
				<AppDrawer />
			</header>
			<h1>Body</h1>
		</React.Fragment>
	);
};

export default App;
