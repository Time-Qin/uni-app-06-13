"use strict";
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      breadlist: []
    };
  },
  created() {
    this.geteat();
  },
  methods: {
    async geteat() {
      let result = await common_js_requestHttp.GetRequest("/api/goods/load?cityId=110&bid=11&tid=0&fid=0&page=1&count=10");
      console.log(result);
      result.code == 0 ? this.breadlist = result.data.data : "";
      console.log(result, this.breadlist);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.breadlist, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.french),
        d: common_vendor.t(item.price),
        e: item.id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-75f3a8ff"], ["__file", "C:/Users/GW/Desktop/\u7EC3\u4E60/6.13\u9879\u76EE/mca/uni-app-06-13/Macke/pages/guowen/eat-bread-well.vue"]]);
wx.createPage(MiniProgramPage);
