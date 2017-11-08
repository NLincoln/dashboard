import React from 'react';
import withStyles from 'material-ui/styles/withStyles';

import Weather from './../Weather/Weather';
import Todo from './../Todo/Todo';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3
  },
  grid: {
    display: 'grid',
    gridGap: `${theme.spacing.unit * 3}px`,
    gridTemplateColumns: '1fr 1fr'
  }
})

const Dashboard = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.grid}>
      <div>
        <Weather />
      </div>
      <div>
        <Todo />
      </div>
    </div>
  </div>
);

export default withStyles(styles)(Dashboard);
