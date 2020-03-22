import React from 'react';
import './App.scss';
import { AppToolbar } from './components/AppToolbar/AppToolbar';
import { AppDrawer } from './components/AppDrawer/AppDrawer';
import { AppCardContainer } from './components/AppCard/AppCardContainer';
import {
	appDrawerToggleStyle,
	DrawerToggleStateProps,
} from './components/AppDrawer/AppDrawerToggle';
import { RootState } from './store/reducers';
import { connect } from 'react-redux';
import clsx from 'clsx';
import {
	createStyles,
	makeStyles,
	Theme,
} from '@material-ui/core/styles';

interface StateProps {
	drawerToggleStateProps: DrawerToggleStateProps;
}

type Props = StateProps;
type StateToProps = (state: RootState) => StateProps;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			background: theme.palette.background.default,
		},
	}),
);

const App: React.FC<Props> = ({
	drawerToggleStateProps: { open },
}) => {
	const classes = appDrawerToggleStyle();
	const classes2 = useStyles();
	return (
		<React.Fragment>
			<header>
				<div
					className={clsx(classes.appDrawerClose, {
						[classes.appDrawerOpen]: open,
					})}
				>
					<AppToolbar />
				</div>
				<AppDrawer />
			</header>
			<div
				className={`${clsx(classes.appDrawerClose, {
					[classes.appDrawerOpen]: open,
				})} ${classes2.container}`}
			>
				<AppCardContainer />
			</div>
		</React.Fragment>
	);
};

const mapStateToProps: StateToProps = ({
	drawer: { open },
}: RootState) => ({
	drawerToggleStateProps: {
		open,
	},
});

const ConnectedApp = connect(mapStateToProps)(App);

export { ConnectedApp as App };
