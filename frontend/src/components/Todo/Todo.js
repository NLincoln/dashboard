import React from 'react';
import compose from 'recompose/compose';
import withStyles from 'material-ui/styles/withStyles';

import Collapse from 'material-ui/transitions/Collapse';

import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemText, ListItemIcon, } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import StarBorder from 'material-ui-icons/StarBorder';

import gql from 'graphql-tag';

import graphql from '../../containers/graphql-loading';

const TODO_QUERY = gql`
query getTodos {
  classes {
    id
    title
    name
    color
    entries {
      id
      title
      notify_at
      due_date
      state
    }
  }
}
`;

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const Todo = ({ data, classes }) => (
  <Paper>
    <List subheader={<ListSubheader> Todo List </ListSubheader>}>
      {data.classes.map((klass) => [
        <ListItem button key={klass.id} >
          <ListItemText primary={klass.name} />
        </ListItem>,
        klass.entries.map((entry) => (
          <Collapse in={true} transitionDuration="auto" unmountOnExit>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary={entry.title} />
            </ListItem>
          </Collapse>
        ))
      ])}
    </List>
  </Paper>
);

export default compose(
  graphql(TODO_QUERY),
  withStyles(styles),
)(Todo);
