"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "car-view",
  props: ["contentDatas"],
  data() {
    return {
      changeIndex: 0
    };
  },
  methods: {
    shopContent2() {
      console.log("2222222", this.contentDatas);
      this.$refs.popup3.open();
    }
  }
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
  return {
    a: $props.contentDatas.img,
    b: common_vendor.t($props.contentDatas.name),
    c: common_vendor.t($props.contentDatas.french),
    d: common_vendor.t($props.contentDatas.price),
    e: common_vendor.t($props.contentDatas.saleTotal),
    f: common_vendor.f($props.contentDatas.list, (item, idx, i0) => {
      return {
        a: common_vendor.t(item.spec),
        b: common_vendor.t(item.weight),
        c: item.id,
        d: common_vendor.o(($event) => $data.changeIndex = idx, item.id)
      };
    }),
    g: common_vendor.f($props.contentDatas.list, (item, idx, i0) => {
      return common_vendor.e({
        a: idx === $data.changeIndex
      }, idx === $data.changeIndex ? common_vendor.e({
        b: common_vendor.t(item.tableware),
        c: $props.contentDatas.candle
      }, $props.contentDatas.candle ? {
        d: common_vendor.t(item.candle)
      } : {}, {
        e: common_vendor.t(item.edible),
        f: common_vendor.t(item.size)
      }) : {}, {
        g: item.id
      });
    }),
    h: common_vendor.p({
      min: 0,
      max: 99
    }),
    i: common_vendor.sr("popup3", "5e87b078-0"),
    j: common_vendor.p({
      type: "bottom"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5e87b078"], ["__file", "D:/2022_03file/hx/Project/Macke/components/car-view/car-view.vue"]]);
wx.createComponent(Component);
