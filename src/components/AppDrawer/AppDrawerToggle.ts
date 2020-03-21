export interface DrawerToggleStateProps {
	open: boolean;
}

export interface DrawerToggleDispatchProps {
	drawerToggle: (open: boolean) => void;
}

export type DrawerToggleProps = DrawerToggleDispatchProps &
	DrawerToggleStateProps;
