import React from 'react';
import { createStyles, Drawer, Theme, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

interface IMenuButtonProps {
	drawerSide?: DrawerSide;
	drawerState?: DrawerState;
}

type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
type DrawerState = 'open' | 'closed';

const drawerStateToBool = (state: DrawerState | undefined) =>
	state == 'open';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menuButton: {
			marginRight: theme.spacing(2),
			unselectable: 'on',
		},
	}),
);

export const MenuButton: React.FC<IMenuButtonProps> = ({
	drawerSide = 'left',
	drawerState = 'closed',
}) => {
	const classes = useStyles();
	const [side] = React.useState<DrawerSide>(drawerSide);
	const [open, setOpen] = React.useState<boolean>(
		drawerStateToBool(drawerState),
	);

	const toggleDrawer = (open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent,
	) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setOpen(open);
	};

	return (
		<Box>
			<IconButton
				edge="start"
				className={classes.menuButton}
				color="inherit"
				aria-label="menu"
				onClick={toggleDrawer(true)}
			>
				<MenuIcon />
			</IconButton>
			<Drawer
				variant="permanent"
				anchor={side}
				open={open}
				onClose={toggleDrawer(false)}
			/>
		</Box>
	);
};
