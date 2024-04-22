const solver = require('../../lib/services/taskSolver');

test('Will return proper object for submission', () => {
  const problem = { id: '123', operation: 'division', left: 80, right: 10 };
  const solution = { id: '123', result: 8 };
  expect(solver.solve(problem)).toStrictEqual(solution);
});
