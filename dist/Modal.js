"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Modal.css");
const Modal = _ref => {
  let {
    open,
    onClose
  } = _ref;
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("h2", null, "Employee Created !"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "close-modal"
  }, "Close")));
};
var _default = exports.default = Modal;