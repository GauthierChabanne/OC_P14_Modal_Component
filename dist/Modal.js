"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    open,
    onClose
  } = _ref;
  if (!open) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "modal",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "overlay"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "modal-content",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        children: "Employee Created !"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: onClose,
        className: "close-modal",
        children: "Close"
      })]
    })]
  });
};
var _default = exports.default = Modal;