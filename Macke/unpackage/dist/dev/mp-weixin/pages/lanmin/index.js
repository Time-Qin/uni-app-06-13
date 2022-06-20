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
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      currentGoods: [],
      goods: [],
      list: [],
      active: 0,
      flag: true,
      activeKey: 0,
      isFocus: false
    };
  },
  created() {
    this.initGoods();
    this.getGoods(0, 1);
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["addCarts"])), {
    async initGoods() {
      let result = await common_js_requestHttp.GetRequest("/api/goods/category");
      result.code === 0 ? this.currentGoods = result.data : "";
      this.currentGoods[0].list.unshift({
        "bid": "1",
        "tgid": "1",
        "tid": "0",
        "tname": "\u5168\u90E8"
      });
      this.list = this.currentGoods[0].list;
    },
    async getGoods(idx, bid) {
      this.active = idx;
      let result = await common_js_requestHttp.GetRequest("/api/goods/load?bid=" + bid);
      result.code === 0 ? this.goods = result.data.data : "";
      if (idx !== 0) {
        this.flag = false;
      } else {
        this.flag = true;
        let result1 = await common_js_requestHttp.GetRequest("/api/goods/load?bid=" + bid + "&page=2");
        result1.code === 0 ? this.goods = [...this.goods, ...result1.data.data] : "";
      }
    },
    async getGoodsGroup(idx, fid) {
      this.activeKey = idx;
      if (fid == 0) {
        this.getGoods(0, 1);
      } else {
        let result = await common_js_requestHttp.GetRequest("/api/goods/load?bid=1&fid=" + fid);
        console.log(result, fid);
        result.code === 0 ? this.goods = result.data.data : "";
      }
    },
    onClick() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    }
  })
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_goods2 = common_vendor.resolveComponent("goods");
  (_easycom_uni_search_bar2 + _easycom_goods2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_goods = () => "../../components/goods/goods.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_goods)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      focus: true,
      placeholder: "\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",
      cancelButton: "none"
    }),
    b: common_vendor.o((...args) => $options.onClick && $options.onClick(...args)),
    c: common_vendor.f($data.currentGoods, (item, index, i0) => {
      return {
        a: common_vendor.t(item.bname),
        b: common_vendor.n({
          active: $data.active === index
        }),
        c: index,
        d: common_vendor.o(($event) => $options.getGoods(index, item.bid))
      };
    }),
    d: $data.flag
  }, $data.flag ? {
    e: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.tname),
        b: common_vendor.n({
          active: $data.activeKey === index
        }),
        c: item.id,
        d: common_vendor.o(($event) => $options.getGoodsGroup(index, item.tid), item.id)
      };
    })
  } : {}, {
    f: common_vendor.n($data.flag ? "large-pad" : "small-pad"),
    g: common_vendor.p({
      goods: $data.goods
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-768f9f56"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/lanmin/index.vue"]]);
wx.createPage(MiniProgramPage);
