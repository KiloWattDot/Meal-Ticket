const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
   
    savedRest: async () => {
      return Tech.find({});
    },
  },
  Mutation: {
    saveBook: async (parent,  args ) => {
      const rest = await Tech.create(args);
      return rest;
    },

    removeRest: async (parent, { did }) => {
      return Tech.findOneAndDelete({ resid: did });
    },

  },
};

module.exports = resolvers;
