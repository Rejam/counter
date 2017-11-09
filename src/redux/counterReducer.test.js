import counterReducer from "./counterReducer";

test("2 inc = 3", () => {
  expect(counterReducer(2, "INC")).toBe(3);
});

test("0 inc = 1", () => {
  expect(counterReducer(0, "INC")).toBe(1);
});

test("0 dec = -1", () => {
  expect(counterReducer(0, "DEC")).toBe(-1);
});

test("3 dec = 2", () => {
  expect(counterReducer(3, "DEC")).toBe(2);
});

test("3 unknown = 3", () => {
  expect(counterReducer(3, "UNKNOWN")).toBe(3);
});

test("undefined dec = -1", () => {
  expect(counterReducer(undefined, "DEC")).toBe(-1);
});
