import { createAction } from 'typesafe-actions';

export const drawerToggle = createAction('AppDrawer: toggle')<{
	open: boolean;
}>();
