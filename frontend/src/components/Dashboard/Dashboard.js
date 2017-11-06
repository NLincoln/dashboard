import React from 'react';
import withStyles from 'material-ui/styles/withStyles';

import Weather from './../Weather/Weather';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3
  },
  grid: {
    display: 'grid',
    gridGap: theme.spacing.unit * 3,
  }
})

const Dashboard = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.grid}>
      <Weather />
    </div>
  </div>
);

export default withStyles(styles)(Dashboard);
