"use strict";
var common_js_requestHttp = require("../../../common/js/requestHttp.js");
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      datalist: {},
      banner: {}
    };
  },
  onLoad(options) {
    this.getDetails(options.id);
  },
  methods: {
    async getDetails(id) {
      let result = await common_js_requestHttp.GetRequest("/api/goods/detail?id=" + id);
      console.log(result);
      result.code == 0 ? this.datalist = result.data : "";
      this.banner = this.datalist.banner;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.banner, (item, index, i0) => {
      return {
        a: item,
        b: item.mainId
      };
    }),
    b: common_vendor.t($data.datalist.name),
    c: common_vendor.t($data.datalist.french),
    d: common_vendor.t($data.datalist.price),
    e: common_vendor.t($data.datalist.spec),
    f: common_vendor.t($data.datalist.weight),
    g: common_vendor.t($data.datalist.brief),
    h: common_vendor.t($data.datalist.frenchBrief),
    i: common_vendor.f($data.datalist.mater, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: item.id
      };
    }),
    j: common_vendor.f($data.datalist.basic, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.title),
        b: item.value === "1" || item.value == "2" || item.value == "3"
      }, item.value === "1" || item.value == "2" || item.value == "3" ? {
        c: common_vendor.f(parseInt(item.value), (bbt, k1, i1) => {
          return {
            a: bbt
          };
        })
      } : {
        d: common_vendor.t(item.value)
      }, {
        e: item.id
      });
    }),
    k: common_vendor.t($data.datalist.spec),
    l: common_vendor.t($data.datalist.weight),
    m: common_vendor.t($data.datalist.tableware),
    n: common_vendor.t($data.datalist.candle),
    o: common_vendor.t($data.datalist.edible),
    p: common_vendor.t($data.datalist.size),
    q: common_vendor.t($data.datalist.sendStartDate),
    r: common_vendor.t($data.datalist.sendStartTime)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6191eb62"], ["__file", "E:/vscode/\u524D\u7AEF/uni-app-06-13/Macke/pages/chenrenjun/mcakedetails/mcakedetails.vue"]]);
wx.createPage(MiniProgramPage);
