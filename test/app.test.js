const App = require('../src/app');
const validText = 'valid text which has the minimum amount of 10 words';

describe('yellow belt', () => {
  it('returns sentence with <gap> replacing one word randomly', () => {
    const app = new App(validText);
    app.build();
    expect(app.exercise.split(" ").includes('<gap>')).toBe(true);
  });

  it('an error is thrown if sentence contains fewer than 10 words', () => {
    const app = new App('too short');
    expect(() => {
      app.build()
    }).toThrow();
  });
})

