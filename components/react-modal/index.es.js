import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import { EvaCloseOutline } from 'react-icons-eva/eva';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".modal-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  z-index: 100; }\n  .modal-wrapper .modal-overlay {\n    width: 100%;\n    height: 100%; }\n    .modal-wrapper .modal-overlay.modal-mask {\n      background: rgba(0, 0, 0, 0.45); }\n  .modal-wrapper .modal-animate-box {\n    position: absolute;\n    width: 100%;\n    transform-origin: 0 0 0; }\n  .modal-wrapper .modal {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 70%;\n    height: 400px;\n    background-color: #ffffff;\n    border-radius: 6px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }\n  .modal-wrapper .modal-header {\n    position: relative;\n    height: 40px; }\n    .modal-wrapper .modal-header .modal-close-button {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      width: 40px;\n      height: 40px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer; }\n  .modal-wrapper .modal-content {\n    padding: 18px; }\n";
styleInject(css);

var Modal = forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? "" : _a, _b = props.mask, mask = _b === void 0 ? true : _b, _c = props.duration, duration = _c === void 0 ? 500 : _c, _d = props.header, header = _d === void 0 ? true : _d;
    var _e = useState(false), isMount = _e[0], setIsMount = _e[1];
    var _f = useState(false), visible = _f[0], setVisible = _f[1];
    var handleCancel = function () {
        setVisible(false);
    };
    useImperativeHandle(ref, function () { return ({
        show: function () {
            setVisible(true);
        },
        hide: function () {
            handleCancel();
        }
    }); });
    useEffect(function () {
        if (visible) {
            setIsMount(visible);
        }
        else {
            var timer_1 = setTimeout(function () {
                setIsMount(visible);
                clearTimeout(timer_1);
            }, duration);
        }
    }, [duration, visible]);
    var overlayStyle = useSpring({
        config: { duration: duration / 3 },
        opacity: visible ? 1 : 0
    });
    var contentStyle = useSpring({
        config: { duration: (duration / 3) * 2, delay: duration / 1 },
        transform: "scale(" + (visible ? 1 : 0) + ")",
        opacity: visible ? 1 : 0
    });
    return isMount
        ? ReactDOM.createPortal(React.createElement(React.Fragment, null,
            React.createElement(animated.div, { className: classnames(["modal-wrapper", className]), "aria-modal": true, "aria-hidden": true, tabIndex: -1, role: "dialog", style: overlayStyle },
                React.createElement("div", { className: classnames({
                        "modal-overlay": true,
                        "modal-mask": mask
                    }), onClick: handleCancel }),
                React.createElement(animated.div, { style: contentStyle, className: "modal-animate-box" },
                    React.createElement("div", { className: "modal" },
                        header ? (React.createElement("div", { className: "modal-header" },
                            React.createElement("div", { className: "modal-close-button", "data-dismiss": "modal", "aria-label": "Close", onClick: handleCancel },
                                React.createElement(EvaCloseOutline, { size: "22px", color: "rgba(0,0,0,.75)" })))) : null,
                        React.createElement("div", { className: "modal-content" }, props.children ? props.children : React.createElement("p", null, "Hello, I'm a modal.")))))), document.body)
        : null;
});

export default Modal;
//# sourceMappingURL=index.es.js.map
