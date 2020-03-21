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
import DirectionsBoatTwoToneIcon from '@material-ui/icons/DirectionsBoatTwoTone';
import { MenuButton } from './menuButton';
import { RootState } from '../../store/reducers';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { drawerWidthSmDown, drawerWidthSmUp } from './appDrawer';

interface StateProps {
	open: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			background: theme.palette.background.default,
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			[theme.breakpoints.down('sm')]: {
				width: `calc(100% - ${drawerWidthSmDown}px)`,
				marginLeft: drawerWidthSmDown,
			},
			[theme.breakpoints.up('sm')]: {
				width: `calc(100% - ${drawerWidthSmUp}px)`,
				marginLeft: drawerWidthSmUp,
			},
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
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

const Header: React.FC<StateProps> = ({ open }) => {
	const classes = useStyles();
	return (
		<AppBar
			position="static"
			className={clsx(classes.appBar, {
				[classes.appBarShift]: open,
			})}
		>
			<Toolbar>
				<MenuButton />
				<DirectionsBoatTwoToneIcon className={classes.logo} />
				<Typography variant="h6" className={classes.title}>
					GetOnBoard
				</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
};

const mapStateToProps = ({ drawer: { open } }: RootState) => ({
	open,
});

const ConnectedHeader = connect(mapStateToProps)(Header);

export { ConnectedHeader as Header };
