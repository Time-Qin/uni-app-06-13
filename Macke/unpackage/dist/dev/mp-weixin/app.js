"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var uni_modules_vkUviewUi_index = require("./uni_modules/vk-uview-ui/index.js");
var store_index = require("./store/index.js");
require("./uni_modules/vk-uview-ui/libs/mixin/mixin.js");
require("./uni_modules/vk-uview-ui/libs/request/index.js");
require("./uni_modules/vk-uview-ui/libs/function/deepMerge.js");
require("./uni_modules/vk-uview-ui/libs/function/deepClone.js");
require("./uni_modules/vk-uview-ui/libs/function/test.js");
require("./uni_modules/vk-uview-ui/libs/function/queryParams.js");
require("./uni_modules/vk-uview-ui/libs/function/route.js");
require("./uni_modules/vk-uview-ui/libs/function/timeFormat.js");
require("./uni_modules/vk-uview-ui/libs/function/timeFrom.js");
require("./uni_modules/vk-uview-ui/libs/function/colorGradient.js");
require("./uni_modules/vk-uview-ui/libs/function/guid.js");
require("./uni_modules/vk-uview-ui/libs/function/color.js");
require("./uni_modules/vk-uview-ui/libs/function/type2icon.js");
require("./uni_modules/vk-uview-ui/libs/function/randomArray.js");
require("./uni_modules/vk-uview-ui/libs/function/addUnit.js");
require("./uni_modules/vk-uview-ui/libs/function/random.js");
require("./uni_modules/vk-uview-ui/libs/function/trim.js");
require("./uni_modules/vk-uview-ui/libs/function/toast.js");
require("./uni_modules/vk-uview-ui/libs/function/getParent.js");
require("./uni_modules/vk-uview-ui/libs/function/_parent.js");
require("./uni_modules/vk-uview-ui/libs/function/sys.js");
require("./uni_modules/vk-uview-ui/libs/function/debounce.js");
require("./uni_modules/vk-uview-ui/libs/function/throttle.js");
require("./uni_modules/vk-uview-ui/libs/config/config.js");
require("./uni_modules/vk-uview-ui/libs/config/zIndex.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/index/mapView.js";
  "./pages/guowen/login.js";
  "./pages/guowen/shop.js";
  "./pages/guowen/eat-bread-well.js";
  "./pages/chenrenjun/placeorder/placeorder.js";
  "./pages/chenrenjun/index.js";
  "./pages/index/good_details.js";
  "./pages/index/talke.js";
  "./pages/chenrenjun/mcakedetails/mcakedetails.js";
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
  "./pages/liuchenchen/bread.js";
  "./pages/liuchenchen/user.js";
  "./pages/liuchenchen/qiaodao.js";
  "./pages/liuchenchen/pintuan.js";
  "./pages/zhaojing/myOrder.js";
  "./pages/chenrenjun/invoicing/invoicing.js";
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
  app.use(uni_modules_vkUviewUi_index.uView);
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
