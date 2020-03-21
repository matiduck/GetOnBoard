import React from 'react';
import { createStyles, Theme, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { RootState } from '../../store/reducers';
import { connect } from 'react-redux';
import { drawerToggle } from '../../store/actions/drawer.actions';

interface StateProps {
	open: boolean;
}

interface DispatchProps {
	drawerToggle: (open: boolean) => void;
}

type StateToProps = (state: RootState) => StateProps;
type DispatchToProps = (dispatch: any) => DispatchProps;
type Props = StateProps & DispatchProps;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menuButton: {
			marginRight: theme.spacing(2),
			unselectable: 'on',
		},
	}),
);

const MenuButton: React.FC<Props> = ({ open, drawerToggle }) => {
	const classes = useStyles();
	return (
		<Box>
			<IconButton
				edge="start"
				className={classes.menuButton}
				color="inherit"
				aria-label="menu"
				onClick={() => drawerToggle(!open)}
			>
				<MenuIcon />
			</IconButton>
		</Box>
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

const ConnectedMenuButton = connect(
	mapStateToProps,
	mapDispatchToProps,
)(MenuButton);

export { ConnectedMenuButton as MenuButton };
