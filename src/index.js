function createBombMiddleware(delay = 0) {
  return ({ dispatch }) => next => (action) => {
    setTimeout(() => {
      dispatch(action);
      dispatch(action);
    }, delay);
    next(action);
  };
}

const bomb = createBombMiddleware();
bomb.delay = createBombMiddleware;

export default bomb;
