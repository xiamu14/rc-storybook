import React, { useState } from 'react';
import { Modal } from 'antd';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

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

var css = ".full_img {\n  height: auto;\n  cursor: pointer; }\n\n.img_box {\n  outline: none;\n  cursor: pointer; }\n\n.picture {\n  margin: 0 auto;\n  object-fit: cover; }\n\n.full-img-modal .ant-modal-body {\n  padding: 12px; }\n";
styleInject(css);

function PreviewImg(props) {
    var src = props.src, _a = props.width, width = _a === void 0 ? 40 : _a, _b = props.height, height = _b === void 0 ? 40 : _b, _c = props.fullWidth, fullWidth = _c === void 0 ? 460 : _c, mask = props.mask;
    var _d = __read(useState(false), 2), visible = _d[0], setVisible = _d[1];
    return (React.createElement("div", { className: "preview_img_box" },
        React.createElement("div", { onClick: function () { return setVisible(true); }, role: "button", tabIndex: 0, 
            // onKeyDown={() => {}}
            className: "img_box" },
            React.createElement("img", { src: src, alt: "\u5C0F\u56FE\u5C55\u793A", className: "picture", width: width, height: height })),
        React.createElement(Modal, { visible: visible, onCancel: function () { return setVisible(!visible); }, footer: false, mask: mask, width: fullWidth + 48, closable: false, style: {
                padding: '12px'
            }, className: "full-img-modal" },
            React.createElement("img", { src: src, alt: "\u5927\u56FE\u5C55\u793A", className: "full_img", width: fullWidth, onClick: function () { return setVisible(!visible); } }))));
}

export default PreviewImg;
//# sourceMappingURL=index.es.js.map
