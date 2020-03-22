import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

export const goBDefaultTheme = createMuiTheme({
	palette: {
		background: {
			default: grey['50'], //'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		},
		primary: green,
		//type: 'dark',
	},
});
