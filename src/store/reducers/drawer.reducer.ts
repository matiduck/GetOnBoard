import * as drawerAction from '../actions/drawer.actions';
import { ActionType, getType } from 'typesafe-actions';

type DrawerActions = ActionType<typeof drawerAction>;

interface State {
	open: boolean;
}

const initialState: State = {
	open: false,
};

export const drawer = (
	state: State = initialState,
	action: DrawerActions,
) => {
	switch (action.type) {
		case getType(drawerAction.drawerToggle):
			return { ...state, open: action.payload.open };
		default:
			return state;
	}
};
