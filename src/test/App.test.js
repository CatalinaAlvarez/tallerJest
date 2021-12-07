import * as App from '../App';
import * as math from '../components/math.js';

math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add", () => {
  App.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  App.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

