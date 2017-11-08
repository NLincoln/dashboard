const { GraphQLScalarType } = require('graphql');
const moment = require('moment');
const uuid = require('uuid/v4');
const axios = require('axios');

const scalar = (name) => new GraphQLScalarType({
  name: name,
  serialize: (value) => value,
  parseValue: (value) => value,
  parseLiteral: ({ value }) => value
});

module.exports = {
  Date: scalar('Date'),
  DateTime: scalar('DateTime'),
  DateTimeTimeZone: scalar('DateTimeTimeZone'),
  PhoneNumber: scalar('PhoneNumber'),
  Email: scalar('Email'),
  JSON: scalar('JSON'),

  Class: {
    entries(obj) {
      return axios.request(`http://todo-list:4000/classes/${obj.id}/entries`).then((resp) => resp.data);
    }
  },

  Entry: {
    class: (obj) => {
      return axios.request(`http://todo-list:4000/classes/${obj.class}`).then((resp) => resp.data);
    },
    state: (obj) => {
      return obj.state.replace('-', '_');
    }
  },

  Query: {
    classes() {
      return axios.request('http://todo-list:4000/classes')
      .then((response) => {
        return response.data
      })
    },
  },
};
