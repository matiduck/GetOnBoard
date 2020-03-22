import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';
import { AppCard } from './AppCard';
import Pagination from '@material-ui/lab/Pagination';

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
				{(() => {
					var cards = [];
					for (let i = 0; i < 50; i++) {
						cards.push(
							<Grid item xs={3}>
								<AppCard />
							</Grid>,
						);
					}
					return cards;
				})()}
			</Grid>
			<Pagination count={10} color="primary" />
		</div>
	);
};
