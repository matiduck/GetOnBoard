import React from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { createStyles, makeStyles } from '@material-ui/styles';
import { drawerToggle } from '../../store/actions/drawer.actions';
import { connect } from 'react-redux';
import { RootState } from '../../store/reducers';

interface StateProps {
	open: boolean;
}

interface DispatchProps {
	drawerToggle: (open: boolean) => void;
}
type StateToProps = (state: RootState) => StateProps;
type DispatchToProps = (dispatch: any) => DispatchProps;

type Props = StateProps & DispatchProps;

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		drawerHeader: {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
			justifyContent: 'flex-end',
		},
	}),
);

const AppDrawer: React.FC<Props> = ({ open, drawerToggle }) => {
	const classes = useStyles();
	const theme = useTheme();

	// const [open, setOpen] = React.useState<boolean>(true);
	// 	//
	// 	// const handleDrawerOpen = () => {
	// 	// 	setOpen(true);
	// 	// };
	// 	//
	// 	// const handleDrawerClose = () => {
	// 	// 	setOpen(false);
	// 	// };

	return (
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={open}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={() => drawerToggle(false)}>
					{theme.direction === 'ltr' ? (
						<ChevronLeftIcon />
					) : (
						<ChevronRightIcon />
					)}
				</IconButton>
			</div>
			<Divider />
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map(
					(text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					),
				)}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

const mapStateToProps: StateToProps = ({
	drawer: { open },
}: RootState) => ({
	open,
});

const mapDispatchToProps: DispatchToProps = dispatch => ({
	drawerToggle: (open: boolean) =>
		dispatch(drawerToggle({ open: open })),
});

const ConnectedAppDrawer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(AppDrawer);

export { ConnectedAppDrawer as AppDrawer };
