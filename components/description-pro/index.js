'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var antd = require('antd');
var dataMatcher = require('data-matcher');

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
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

var css = ".descriptions-pro .ant-descriptions {\n  margin-bottom: 20px; }\n\n.descriptions-pro.text-align-center .ant-descriptions .ant-descriptions-item-label {\n  text-align: center; }\n\n.descriptions-pro.text-align-center .ant-descriptions .ant-descriptions-item-content {\n  text-align: center; }\n\n.descriptions-pro .ant-descriptions-item > span {\n  vertical-align: middle; }\n";
styleInject(css);

var Item = antd.Descriptions.Item;
function DescriptionsPro(props) {
    var schema = props.schema, data = props.data, center = props.center, groups = props.groups, other = __rest(props, ["schema", "data", "center", "groups"]);
    // 先筛选一下
    var showSchema = schema.filter(function (item) {
        if (Object.prototype.hasOwnProperty.call(item, "hide")) {
            return typeof item.hide === "boolean"
                ? !item.hide
                : !item.hide(data[item.dataIndex], data);
        }
        return true;
    });
    var middle = dataMatcher.matcher(showSchema)
        .addKeyFn("content", function (val) {
        if (Object.prototype.hasOwnProperty.call(val, "render")) {
            return val.render(data[val.dataIndex], data);
        }
        return data[val.dataIndex];
    })
        .remove(["render"]);
    var sortedData = middle.data.sort(function (a, b) {
        return (b.sort || 0) - (a.sort || 0);
    });
    if (groups) {
        var dataCopy_1 = __spread(sortedData);
        sortedData = groups.map(function (item) {
            var tmp = { props: __assign(__assign({}, other), item), children: [] };
            item.children.forEach(function (key) {
                var arr = dataCopy_1.filter(function (data) { return data.dataIndex === key; });
                if (arr.length > 0) {
                    tmp.children.push(arr[0]);
                }
            });
            return tmp;
        });
    }
    return (React.createElement("div", { className: (center ? "text-align-center descriptions-pro" : "descriptions-pro") + "  " },
        Object.keys(data).length > 0 && !groups ? (React.createElement(antd.Descriptions, __assign({}, other), sortedData.map(function (item, index) {
            var content = item.content, otherItem = __rest(item, ["content"]);
            return (React.createElement(Item, __assign({ key: "" + index }, otherItem), item.content));
        }))) : null,
        Object.keys(data).length > 0 && groups ? (React.createElement("div", null, sortedData.map(function (group, index) { return (React.createElement(antd.Descriptions, __assign({}, group.props, { key: "" + index }), group.children.map(function (item, index) {
            var content = item.content, otherItem = __rest(item, ["content"]);
            return (React.createElement(Item, __assign({ key: "" + index }, otherItem), item.content));
        }))); }))) : null));
}

exports.default = DescriptionsPro;
//# sourceMappingURL=index.js.map
