"use strict";
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  created() {
    this.getShopList();
  },
  methods: {
    async getShopList() {
      let result = await common_js_requestHttp.GetRequest("/api/goods/load?cityId=110&bid=1&fid=0&page=1&count=20&search=&total=31");
      this.getShopList = result.data;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t()
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/zhaojing/workspace/zj_homework/uni-app-06-13/Macke/pages/zhaojing/shopCar.vue"]]);
wx.createPage(MiniProgramPage);
