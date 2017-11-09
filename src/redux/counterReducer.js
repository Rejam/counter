const counterReducer = (state = 0, action) => {
  switch (action) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
  }
  return state;
};

export default counterReducer;
