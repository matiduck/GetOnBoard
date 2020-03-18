import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import { goBDefaultTheme } from './Themes/GoBDefaultTheme';
import { AppDrawer } from './Components/Header/AppDrawer';
import AppBar from '@material-ui/core/AppBar/AppBar';

const App: React.FC = () => {
	return (
		<div className="App">
			<ThemeProvider theme={goBDefaultTheme}>
				<header>
					<Header />
				</header>
				<body>
					<AppDrawer />
					<h1 className="h2">Body</h1>
				</body>
			</ThemeProvider>
		</div>
	);
};

export default App;
