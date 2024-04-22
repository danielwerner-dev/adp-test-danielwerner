const calculator = require('./taskCalculator');

const solve = (problem) => {
  return {
    id: problem.id,
    result: calculator[problem.operation](problem.left, problem.right),
  };
};
module.exports = { solve };
