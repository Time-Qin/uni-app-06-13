"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toPoints() {
      this.$refs.popup1.open();
    },
    close() {
      this.$refs.popup1.close();
    }
  }
};
if (!Array) {
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_component_van_tab + _component_van_tabs + _easycom_uni_popup2)();
}
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toPoints && $options.toPoints(...args)),
    b: common_vendor.p({
      title: "\u4E2A\u4EBA"
    }),
    c: common_vendor.p({
      title: "\u5355\u4F4D"
    }),
    d: common_vendor.o(($event) => _ctx.active = $event),
    e: common_vendor.p({
      active: _ctx.active
    }),
    f: common_vendor.p({
      title: "\u7535\u5B50\u666E\u901A\u53D1\u7968"
    }),
    g: common_vendor.p({
      title: "\u4E0D\u5F00\u53D1\u7968"
    }),
    h: common_vendor.o(($event) => _ctx.active = $event),
    i: common_vendor.p({
      active: _ctx.active
    }),
    j: common_vendor.o((...args) => $options.close && $options.close(...args)),
    k: common_vendor.sr("popup1", "66a85bf6-6"),
    l: common_vendor.p({
      ["background-color"]: "#fff"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-66a85bf6"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/chenrenjun/invoicing/invoicing.vue"]]);
wx.createPage(MiniProgramPage);
