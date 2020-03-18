import React from 'react';
import {
	createStyles,
	makeStyles,
	Theme,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsBoatTwoToneIcon from '@material-ui/icons/DirectionsBoatTwoTone';
import { AppDrawer } from './AppDrawer';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			background: theme.palette.background.default,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		logo: {
			width: 50,
			height: 43.54,
			marginRight: 10,
		},
	}),
);

export const Header: React.FC = () => {
	const classes = useStyles();
	return (
		<AppBar position="static" className={classes.appBar}>
			<Toolbar>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
				>
					<MenuIcon />
				</IconButton>
				{/*<MenuButton />*/}
				<DirectionsBoatTwoToneIcon className={classes.logo} />
				<Typography variant="h6" className={classes.title}>
					GetOnBoard
				</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
};
