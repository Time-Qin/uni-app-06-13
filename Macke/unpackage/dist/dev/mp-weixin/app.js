"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
require("./store/index.js");
if (!Math) {
  "./pages/chenrenjun/placeorder/placeorder.js";
  "./pages/chenrenjun/index.js";
  "./pages/chenrenjun/mcakedetails/mcakedetails.js";
  "./pages/index/index.js";
  "./pages/guowen/index.js";
  "./pages/lanmin/index.js";
  "./pages/liuchenchen/index.js";
  "./pages/zhaojing/index.js";
  "./pages/chenrenjun/alltotal/alltotal.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("\u5F53\u524D\u7EC4\u4EF6\u4EC5\u652F\u6301 uni_modules \u76EE\u5F55\u7ED3\u6784 \uFF0C\u8BF7\u5347\u7EA7 HBuilderX \u5230 3.1.0 \u7248\u672C\u4EE5\u4E0A\uFF01");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/2022_03file/hx/Project/Macke/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
