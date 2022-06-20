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
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      keywords: "",
      hot: [],
      goods: [],
      show: false
    };
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["addHistory", "clearHistry"])), {
    async getHot(item) {
      let result = await common_js_requestHttp.GetRequest("/api/goods/hot");
      result.code === 0 ? this.hot = result.data : "";
    },
    async getGoods(keywords) {
      let result = await common_js_requestHttp.GetRequest("/api/goods/load?search=" + keywords);
      result.code === 0 ? this.goods = result.data.data : "";
    },
    chooseHot(value) {
      this.keywords = value;
      this.getGoods(this.keywords);
      this.show = true;
      this.addHistory({
        history: this.keywords
      });
    },
    search() {
      this.getGoods(this.keywords);
      this.show = true;
      this.addHistory({
        history: this.keywords
      });
    },
    onClick() {
      this.show = false;
    },
    toggle(type) {
      this.$refs.alertDialog.open(type);
    },
    dialogConfirm() {
      this.clearHistry();
    }
  }),
  created() {
    this.getHot();
  },
  computed: __spreadValues({}, common_vendor.mapState(["history"]))
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_goods2 = common_vendor.resolveComponent("goods");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_search_bar2 + _easycom_goods2 + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_goods = () => "../../components/goods/goods.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_goods + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.search),
    b: common_vendor.o(($event) => $data.keywords = $event),
    c: common_vendor.p({
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",
      cancelButton: "none",
      modelValue: $data.keywords
    }),
    d: common_vendor.o((...args) => $options.search && $options.search(...args)),
    e: $data.keywords
  }, $data.keywords ? {
    f: common_vendor.t($data.keywords)
  } : {}, {
    g: common_vendor.f($data.hot, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: common_vendor.o(($event) => $options.chooseHot(item))
      };
    }),
    h: _ctx.history && _ctx.history.length > 0
  }, _ctx.history && _ctx.history.length > 0 ? {
    i: common_vendor.o(($event) => $options.toggle("center")),
    j: common_vendor.f(_ctx.history, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: common_vendor.o(($event) => $options.chooseHot(item))
      };
    })
  } : {}, {
    k: !$data.show,
    l: common_vendor.o($options.search),
    m: common_vendor.o(_ctx.change),
    n: common_vendor.o(($event) => $data.keywords = $event),
    o: common_vendor.p({
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",
      cancelButton: "none",
      modelValue: $data.keywords
    }),
    p: common_vendor.o((...args) => $options.onClick && $options.onClick(...args)),
    q: common_vendor.p({
      goods: $data.goods
    }),
    r: $data.show,
    s: common_vendor.o($options.dialogConfirm),
    t: common_vendor.p({
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u8BA4",
      title: "\u6E29\u99A8\u63D0\u793A",
      content: "\u786E\u8BA4\u6E05\u7A7A\u641C\u7D22\u5386\u53F2\u5417"
    }),
    v: common_vendor.sr("alertDialog", "4cedc0c6-3")
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4cedc0c6"], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/MCAKE/Macke/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
