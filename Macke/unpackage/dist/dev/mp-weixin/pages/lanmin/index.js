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
      activeKey: 0
    };
  },
  created() {
    this.initGoods();
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
      this.getGoods(0, 1);
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
    goDetail(id) {
      common_vendor.index.navigateTo({
        url: "/pages/lanmin_detail/lanmin_detail?id=" + id
      });
    },
    addItem(item) {
      var obj = { id: item.id, price: item.price, buynum: 1, name: item.name };
      this.addCarts(obj);
      common_vendor.index.showToast({
        title: `\u6DFB\u52A0\u8D2D\u7269\u8F66\u6210\u529F`,
        mask: true
      });
    }
  })
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.currentGoods, (item, index, i0) => {
      return {
        a: common_vendor.t(item.bname),
        b: common_vendor.n({
          active: $data.active === index
        }),
        c: index,
        d: common_vendor.o(($event) => $options.getGoods(index, item.bid))
      };
    }),
    b: $data.flag
  }, $data.flag ? {
    c: common_vendor.f($data.list, (item, index, i0) => {
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
    d: common_vendor.n($data.flag ? "large-pad" : "small-pad"),
    e: common_vendor.f($data.goods, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.o(($event) => $options.goDetail(item.id)),
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.french),
        e: common_vendor.t(item.price),
        f: common_vendor.o(($event) => $options.addItem(item)),
        g: "768f9f56-0-" + i0,
        h: item.title
      };
    }),
    f: common_vendor.p({
      type: "cart",
      size: "24"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-768f9f56"], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/MCAKE/Macke/pages/lanmin/index.vue"]]);
wx.createPage(MiniProgramPage);
