"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/chenrenjun/placeorder/placeorder.js";
  "./pages/chenrenjun/index.js";
  "./pages/index/good_details.js";
  "./pages/index/talke.js";
  "./pages/chenrenjun/mcakedetails/mcakedetails.js";
  "./pages/guowen/index.js";
  "./pages/lanmin/index.js";
  "./pages/lanmin_detail/lanmin_detail.js";
  "./pages/comments/comments.js";
  "./pages/search/search.js";
  "./pages/liuchenchen/index.js";
  "./pages/zhaojing/bread.js";
  "./pages/zhaojing/shopCar.js";
  "./pages/zhaojing/my.js";
  "./pages/zhaojing/question.js";
  "./pages/index/address.js";
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
  app.use(store_index.store);
  app.config.globalProperties.$filters = {
    formatDate: function() {
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate() + 1;
      return date.getFullYear() + "-" + month.toString().padStart(2, "0") + "-" + day.toString().padStart(2, "0");
    }
  };
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
