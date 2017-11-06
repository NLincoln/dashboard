import React from 'react';
import Paper from 'material-ui/Paper';
import withStyles from 'material-ui/styles/withStyles';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import moment from 'moment';

import ajax from '../../util/ajax';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3
  }
});

const HourlyWeather = ({ ...hourly }) => (
  <div>
    <li> {moment(hourly.time * 1000).format('LT')} </li>
    <li> {hourly.apparentTemperature} &deg;F </li>
    <li> {hourly.summary} </li>
    <hr />
  </div>
);

const Weather = ({ classes, data }) => (
  <Paper className={classes.paper}>
    <Typography type="title" >
      Weather Report for Rolla, MO 65401
    </Typography>
    { data.hourly.data.map((hourly) => (
      <HourlyWeather key={hourly.time} {...hourly} />
    ))}
  </Paper>
);

export default compose(
  ajax('/api/weather', {
    query: {
      lat: 37.9574666,
      lng: -91.7488873,
    }
  }),
  branch(({ data }) => data.isLoading, renderComponent(CircularProgress)),
  withStyles(styles),
)(Weather);
