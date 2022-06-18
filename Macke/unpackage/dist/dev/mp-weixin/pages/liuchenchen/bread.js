"use strict";
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      goodlist: []
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      let result = await common_js_requestHttp.GetRequest("/api/goods/load?cityId=110&bid=11&fid=0&page=1&count=20&search=&total=15");
      this.goodlist = result.data;
      console.log(this.goodlist);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.goodlist.data, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.french),
        d: common_vendor.t(item.price),
        e: item.id
      };
    }),
    b: _ctx.widthFix
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-47199e98"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/liuchenchen/bread.vue"]]);
wx.createPage(MiniProgramPage);
