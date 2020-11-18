'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Quill = _interopDefault(require('quill'));
var React = require('react');
var React__default = _interopDefault(React);
var _throttle = _interopDefault(require('lodash.throttle'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var BlockEmbed = Quill.import('blots/block/embed');
var VideoBlot = /** @class */ (function (_super) {
    __extends(VideoBlot, _super);
    function VideoBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoBlot.create = function (value) {
        var node = _super.create.call(this);
        node.setAttribute('src', value.url);
        node.setAttribute('controls', value.controls);
        node.setAttribute('width', value.width);
        node.setAttribute('height', value.height);
        node.setAttribute('webkit-playsinline', true);
        node.setAttribute('playsinline', true);
        node.setAttribute('x5-playsinline', true);
        return node;
    };
    VideoBlot.value = function (node) {
        return {
            url: node.getAttribute('src'),
            controls: node.getAttribute('controls'),
            width: node.getAttribute('width'),
            height: node.getAttribute('height')
        };
    };
    return VideoBlot;
}(BlockEmbed));

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

var css = ".quill {\n  display: flex;\n  flex-direction: column;\n}\n\n.ql-container {\n  flex: 1;\n  overflow-y: hidden;\n}\n\n.ql-editor::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n.ql-editor::-webkit-scrollbar-thumb {\n  background-color: #e8e8e8;\n}\n\n.ql-snow .ql-editor img, .ql-snow .ql-editor video {\n  display: block;\n  max-width: 50%;\n  margin: 4px auto;\n  margin-bottom: 8px;\n  border: solid 0.5px #e8e8e8;\n}\n\n.ql-snow input,\n.ql-snow [role=\"button\"],\n.ql-snow.ql-toolbar button {\n  outline: none;\n}\n\n.ql-toolbar.ql-snow .ql-picker-label {\n  display: flex;\n  outline: none;\n}\n\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  width: 100%;\n}\n";
styleInject(css);

function ReactQuill(props) {
    var _this = this;
    var value = props.value, mediaRequest = props.mediaRequest;
    var quillBoxEl = React.useRef(null);
    var inputEl = React.useRef(null);
    var _a = React.useState("image"), mediaType = _a[0], setMediaType = _a[1];
    var _b = React.useState(), editor = _b[0], setEditor = _b[1];
    var _c = React.useState(false), initial = _c[0], setInitial = _c[1];
    // init quill
    React.useEffect(function () {
        if (!editor) {
            // @ts-ignore
            setEditor(new Quill(quillBoxEl.current, props.options));
        }
        else {
            // 监听文本输入内容，并通过 props.onChange 返回
            // const el = document.querySelector(".ql-editor");
            var el_1 = quillBoxEl.current.querySelector(".ql-editor");
            editor.on("text-change", _throttle(function () {
                props.onChange &&
                    props.onChange(el_1 ? (el_1.innerHTML !== "<p><br></p>" ? el_1.innerHTML : "") : ""); // 还要剔除 空内容 '<p><br></p>'
            }, 1000));
        }
    }, [editor, props]);
    // monitor
    React.useEffect(function () {
        if (editor) {
            // console.log("这里应该没有一直重复吧");
            // 注册自定义的 videoBlot(返回 video 标签内容)
            VideoBlot.blotName = "cusVideo";
            VideoBlot.tagName = "video";
            Quill.register(VideoBlot);
            // 监听 toolbar 的 image、video 按钮，并实现外部自定义上传文件并显示
            var toolbar_1 = editor.getModule("toolbar");
            toolbar_1.addHandler("image", function () {
                setMediaType("image");
                inputEl.current.click();
            });
            toolbar_1.addHandler("video", function () {
                setMediaType("video");
                inputEl.current.click();
            });
            inputEl.current.addEventListener("change", function () { return __awaiter(_this, void 0, void 0, function () {
                var files, mediaTypeCopy, addImageRange, newRange, resFile;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            files = inputEl.current.files;
                            mediaTypeCopy = inputEl.current.getAttribute("name");
                            addImageRange = editor.getSelection();
                            newRange = 0 + (addImageRange !== null ? addImageRange.index : 0);
                            if (!(files.length > 0 && mediaRequest)) return [3 /*break*/, 2];
                            return [4 /*yield*/, mediaRequest(files, mediaTypeCopy)];
                        case 1:
                            resFile = _a.sent();
                            if (mediaTypeCopy === "image") {
                                editor.insertEmbed(newRange, "image", resFile.url);
                            }
                            else {
                                editor.insertEmbed(newRange, "cusVideo", {
                                    url: resFile.url,
                                    controls: "controls",
                                    width: "100%",
                                    height: "100%"
                                });
                            }
                            _a.label = 2;
                        case 2:
                            // NOTE: 插入媒体文件以后，光标后移一位
                            editor.setSelection(1 + newRange, 1);
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    }, [editor, mediaRequest]);
    // initialValues
    React.useEffect(function () {
        if (editor && value && !initial) {
            var delta = editor.clipboard.convert(value);
            editor.setContents(delta);
            setInitial(true);
        }
    }, [editor, initial, value]);
    // reset
    React.useEffect(function () {
        if (value === "" || (value === "undefined" && editor)) {
            var delta = editor.clipboard.convert("");
            editor.setContents(delta);
        }
    }, [editor, value]);
    var width = props.width, height = props.height, minHeight = props.minHeight;
    var style = {
        width: width || "auto",
        height: height || "",
        minHeight: minHeight || "200px"
    };
    return (React__default.createElement("div", { className: "quill", style: style },
        React__default.createElement("div", { ref: quillBoxEl, className: "quill_box" }),
        React__default.createElement("input", { ref: inputEl, type: "file", name: mediaType, accept: mediaType === "image" ? "image/*" : "video/*", style: { display: "none" } })));
}

exports.default = ReactQuill;
//# sourceMappingURL=index.js.map
