import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';

import { CircularProgress } from "material-ui/Progress";
import { graphql } from 'react-apollo';

export default (...opts) => (
  compose(
    graphql(...opts),
    branch(({ data }) => data.loading, renderComponent(CircularProgress)),
  )
);
