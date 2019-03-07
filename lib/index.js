"use strict";

exports.__esModule = true;

function createBombMiddleware() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function (_ref) {
    var dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        setTimeout(function () {
          dispatch(action);
          dispatch(action);
        }, delay);
        next(action);
      };
    };
  };
}

var bomb = createBombMiddleware();
bomb.delay = createBombMiddleware;
exports.default = bomb;
module.exports = exports.default;