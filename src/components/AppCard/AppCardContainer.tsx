import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { AppCard } from './AppCard';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			margin: 30,
		},
	}),
);

export const AppCardContainer: React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<AppCard />
				</Grid>
				<Grid item xs={3}>
					<AppCard />
				</Grid>
				<Grid item xs={3}>
					<AppCard />
				</Grid>
				<Grid item xs={3}>
					<AppCard />
				</Grid>
				<Grid item xs={3}>
					<AppCard />
				</Grid>
				<Grid item xs={3}>
					<AppCard />
				</Grid>
				<Grid item xs={3}>
					<AppCard />
				</Grid>
				<Grid item xs={3}>
					<AppCard />
				</Grid>
			</Grid>
		</div>
	);
};
