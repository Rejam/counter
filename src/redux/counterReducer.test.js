import counterReducer from "./counterReducer";

test("2 inc = 3", () => {
  expect(counterReducer(2, { type: "INC" })).toBe(3);
});

test("0 inc = 1", () => {
  expect(counterReducer(0, { type: "INC" })).toBe(1);
});

test("0 dec = -1", () => {
  expect(counterReducer(0, { type: "DEC" })).toBe(-1);
});

test("3 dec = 2", () => {
  expect(counterReducer(3, { type: "DEC" })).toBe(2);
});

test("3 unknown = 3", () => {
  expect(counterReducer(3, { type: "UNKNOWN" })).toBe(3);
});

test("undefined {} = 0", () => {
  expect(counterReducer(undefined, {})).toBe(0);
});
