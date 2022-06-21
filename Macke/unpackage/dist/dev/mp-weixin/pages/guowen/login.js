"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isChecked: false
    };
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["addUser"])), {
    getUserInfo(info) {
      var _this = this;
      common_vendor.index.getUserProfile({
        desc: "weixin",
        success(res) {
          _this.addUser({ nickName: res.userInfo.nickName, img: res.userInfo.avatarUrl });
          common_vendor.index.switchTab({
            url: "/pages/zhaojing/my"
          });
        }
      });
    }
  })
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isChecked,
    b: common_vendor.o(($event) => $data.isChecked = !$data.isChecked),
    c: $data.isChecked
  }, $data.isChecked ? {
    d: common_vendor.o((...args) => $options.getUserInfo && $options.getUserInfo(...args))
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3fe04052"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/guowen/login.vue"]]);
wx.createPage(MiniProgramPage);
