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
  name: "carts",
  props: ["goodsDetail", "list", "itemList"],
  emits: ["changItem"],
  data() {
    return {
      value: 1,
      buynum: 1
    };
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["addCarts"])), {
    change(type) {
      this.value = 1;
      this.$refs.popup.open(type);
    },
    moveHandle() {
      return false;
    },
    async addMoreCarts() {
      var obj = {
        id: this.goodsDetail.id,
        price: this.itemList.price,
        buynum: this.buynum,
        name: this.goodsDetail.name
      };
      let carts = {
        "cityId": "110",
        "goods": [{
          "id": `${this.goodsDetail.id}`,
          "num": `${this.buynum}`,
          "blessing": ""
        }]
      };
      this.addCarts(obj);
      this.$refs.popup.close();
      await common_js_requestHttp.PostRequest("/api/cart/add", carts);
      common_vendor.index.showToast({
        title: `\u6DFB\u52A0\u8D2D\u7269\u8F66\u6210\u529F`,
        mask: true
      });
    },
    changeValue() {
      this.buynum = this.value;
    },
    itemClick(idx) {
      this.$emit("changItem", idx);
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
    d: common_vendor.t($props.itemList.price),
    e: common_vendor.t($props.goodsDetail.saleTotal),
    f: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.spec),
        b: common_vendor.t(item.weight),
        c: item.id,
        d: common_vendor.o(($event) => $options.itemClick(index), item.id)
      };
    }),
    g: $props.itemList.tableware
  }, $props.itemList.tableware ? {
    h: common_vendor.t($props.itemList.tableware)
  } : {}, {
    i: $props.itemList.candle
  }, $props.itemList.candle ? {
    j: common_vendor.t($props.itemList.candle)
  } : {}, {
    k: $props.itemList.edible
  }, $props.itemList.edible ? {
    l: common_vendor.t($props.itemList.edible)
  } : {}, {
    m: $props.itemList.size
  }, $props.itemList.size ? {
    n: common_vendor.t($props.itemList.size)
  } : {}, {
    o: common_vendor.o($options.changeValue),
    p: common_vendor.o(($event) => $data.value = $event),
    q: common_vendor.p({
      modelValue: $data.value
    }),
    r: common_vendor.o((...args) => $options.addMoreCarts && $options.addMoreCarts(...args)),
    s: common_vendor.sr("popup", "77d757a8-0"),
    t: common_vendor.o($options.moveHandle),
    v: common_vendor.p({
      ["background-color"]: "#fff"
    })
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-77d757a8"], ["__file", "D:/2022_03file/hx/Project/Macke/components/carts/carts.vue"]]);
wx.createComponent(Component);
