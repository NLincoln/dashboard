import React from 'react';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';

import { CircularProgress } from "material-ui/Progress";
import ajax from '../util/ajax';

export default (...args) => (
  compose(
    ajax(...args),
    branch(({ data }) => data.isLoading, renderComponent(CircularProgress)),
  )
);
