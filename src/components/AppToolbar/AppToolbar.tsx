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
import { MenuButton } from './MenuButton';
import { RootState } from '../../store/reducers';
import { connect } from 'react-redux';
import { DrawerToggleStateProps } from '../AppDrawer/AppDrawerToggle';

interface StateProps {
	drawerToggleStateProps: DrawerToggleStateProps;
}

type Props = StateProps;
type StateToProps = (state: RootState) => StateProps;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			// background: theme.palette.background.default,
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
		offset: theme.mixins.toolbar,
	}),
);

const AppToolbar: React.FC<Props> = ({
	drawerToggleStateProps: { open },
}) => {
	const classes = useStyles();
	return (
		//<React.Fragment>
		<AppBar
			position="relative"
			className={classes.appBar}
			color="primary"
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
		//<div className={classes.offset} />
		// </React.Fragment>
	);
};

const mapStateToProps: StateToProps = ({
	drawer: { open },
}: RootState) => ({
	drawerToggleStateProps: {
		open,
	},
});

const ConnectedAppToolbar = connect(mapStateToProps)(AppToolbar);

export { ConnectedAppToolbar as AppToolbar };
