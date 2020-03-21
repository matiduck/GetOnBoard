import { drawer } from './drawer.reducer';
import { combineReducers } from 'redux';

export type RootState = {
	drawer: ReturnType<typeof drawer>;
};

export const rootReducer = combineReducers({
	drawer,
});
