import { createAction } from 'typesafe-actions';

export const drawerToggle = createAction('drawer: toggle')<{
	open: boolean;
}>();
