import React, { Component } from "react";
import queryString from "query-string";

export const apiAjax = async (url, { query, ...other }) => {
  const response = await fetch(
    `${url}?${queryString.stringify(query || {})}`,
    {
      mode: "cors",
      method: "GET",
      ...other
    }
  );
  return response.json();
};

export const apiRequest = (url, params) =>
  apiAjax(url, { method: "GET", ...params });

export default (url, options = {}) => Klass => {
  class LoaderComponent extends Component {
    constructor(props, context) {
      super(props, context);
      const initialState = {
        response: null
      };
      if (typeof options === "function") {
        initialState.options = options(props);
      } else {
        initialState.options = options;
      }
      this.state = initialState;
      this.fetchData();
    }

    componentWillReceiveProps(nextProps) {
      if (typeof options !== "function") {
        return;
      }
      this.setState({
        options: options(nextProps)
      }, () => this.fetchData());
    }

    async fetchData() {
      const response = await apiRequest(url, {
        query: this.state.options.query || {}
      });
      this.setState({
        response
      });
    }

    render() {
      return (
        <Klass
          {...this.props}
          data={this.state.response || { isLoading: true }}
        />
      );
    }
  }
  return LoaderComponent;
};
