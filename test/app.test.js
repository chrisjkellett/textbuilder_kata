const App = require('../src/app');


const validText = 'valid text which has the minimum amount of 10 words';
const invalidText = 'less than 10 words';


it("rejects strings with less than 10 words", () => {
  const app = new App();
  expect(() => {
    app.build(invalidText);
  }).toThrow();
});

it("sets length in constructor", () => {
  const app = new App();
  app.build(validText);
  expect(app.length).toBe(10);
});

it("knows how many gaps to set", () => {
  const app = new App();
  app.changeRate(30, 10);
  app.changeRate(35, 10);
  expect(app.gaps).toBe(4);
})
// it("returns one placeholder when text length is 10", () => {
//   const result = app.build(validText);
//   expect(result).toEqual(expect.any(String));
//   expect(result).not.toEqual(validText);
// })