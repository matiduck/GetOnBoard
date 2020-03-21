import {
	createStyles,
	makeStyles,
	Theme,
} from '@material-ui/core/styles';
import { drawerWidthSmDown, drawerWidthSmUp } from './AppDrawer';

export interface DrawerToggleStateProps {
	open: boolean;
}

export interface DrawerToggleDispatchProps {
	drawerToggle: (open: boolean) => void;
}

export type DrawerToggleProps = DrawerToggleDispatchProps &
	DrawerToggleStateProps;

export const appDrawerToggleStyle = makeStyles((theme: Theme) =>
	createStyles({
		appDrawerClose: {
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appDrawerOpen: {
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
	}),
);
