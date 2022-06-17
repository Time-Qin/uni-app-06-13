"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      chang: false
    };
  },
  methods: {
    change() {
      if (this.chang == false) {
        this.chang = true;
      } else {
        this.chang = false;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $options.change,
    b: common_vendor.o((...args) => $options.change && $options.change(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3fe04052"], ["__file", "C:/Users/GW/Desktop/\u7EC3\u4E60/6.13\u9879\u76EE/mca/uni-app-06-13/Macke/pages/guowen/login.vue"]]);
wx.createPage(MiniProgramPage);
