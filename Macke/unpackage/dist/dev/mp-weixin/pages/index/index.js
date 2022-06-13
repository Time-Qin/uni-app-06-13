"use strict";
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  created() {
    this.GetData();
  },
  methods: {
    async GetData() {
      let result = await common_js_requestHttp.GetRequest("/api/page/load");
      console.log(result);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/2022_03file/hx/Project/Macke/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
