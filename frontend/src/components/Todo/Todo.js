import React from 'react';
import compose from 'recompose/compose';
import withStyles from 'material-ui/styles/withStyles';

import Collapse from 'material-ui/transitions/Collapse';

import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemText, } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';

import ajax from '../../containers/ajax-loading';

const styles = theme => ({

});

const Todo = ({ data }) => (
  <Paper>
    <List subheader={<ListSubheader> Todo List </ListSubheader>}>
      {data.map((todo) => (
        <ListItem key={todo.id} >
          <ListItemText primary={todo.title} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default compose(
  ajax('/api/todo/entries'),
  withStyles(styles),
)(Todo);
