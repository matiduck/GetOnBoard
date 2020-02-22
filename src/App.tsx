import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import { goBDefaultTheme } from './Themes/GoBDefaultTheme';

const App: React.FC = () => {
	return (
		<div className="App">
			<ThemeProvider theme={goBDefaultTheme}>
				<header>
					<Header />
				</header>
				<body>
					<h1 className="h2">Body</h1>
				</body>
			</ThemeProvider>
		</div>
	);
};

export default App;
