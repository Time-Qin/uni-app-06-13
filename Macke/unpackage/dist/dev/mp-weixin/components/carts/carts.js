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
  name: "carts",
  props: ["goodsDetail", "list"],
  data() {
    return {
      carts: {}
    };
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["addCarts"])), {
    change() {
      this.$refs.popup.open("bottom");
    },
    moveHandle() {
      return false;
    },
    addMoreCarts() {
      this.addCarts(this.carts);
      this.$refs.popup.close();
      common_vendor.index.showToast({
        title: `\u6DFB\u52A0\u8D2D\u7269\u8F66\u6210\u529F`,
        mask: true
      });
    },
    changeValue(value) {
      this.carts = {
        id: this.goodsDetail.id,
        price: this.goodsDetail.price,
        buynum: value,
        name: this.goodsDetail.name
      };
    }
  })
};
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_number_box2 + _easycom_uni_popup2)();
}
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_number_box + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.goodsDetail.img,
    b: common_vendor.t($props.goodsDetail.name),
    c: common_vendor.t($props.goodsDetail.french),
    d: common_vendor.t($props.goodsDetail.price),
    e: common_vendor.t($props.goodsDetail.saleTotal),
    f: common_vendor.t($props.goodsDetail.spec),
    g: common_vendor.t($props.goodsDetail.weight),
    h: $props.list.tableware
  }, $props.list.tableware ? {
    i: common_vendor.t($props.list.tableware)
  } : {}, {
    j: $props.list.candle
  }, $props.list.candle ? {
    k: common_vendor.t($props.list.candle)
  } : {}, {
    l: $props.list.edible
  }, $props.list.edible ? {
    m: common_vendor.t($props.list.edible)
  } : {}, {
    n: $props.list.size
  }, $props.list.size ? {
    o: common_vendor.t($props.list.size)
  } : {}, {
    p: common_vendor.o($options.changeValue),
    q: common_vendor.o((...args) => $options.addMoreCarts && $options.addMoreCarts(...args)),
    r: common_vendor.sr("popup", "77d757a8-0"),
    s: common_vendor.o($options.change),
    t: common_vendor.o($options.moveHandle),
    v: common_vendor.p({
      ["background-color"]: "#fff"
    })
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-77d757a8"], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/MCAKE/Macke/components/carts/carts.vue"]]);
wx.createComponent(Component);
