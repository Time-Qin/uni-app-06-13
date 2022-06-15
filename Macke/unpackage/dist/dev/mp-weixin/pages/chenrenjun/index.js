"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      datalist: {},
      mcakeScene: {},
      goods: {},
      list: {},
      flag: true
    };
  },
  created() {
    this.getMcakes();
    this.initMcake();
    this.getMcakeGroup();
  },
  methods: {
    async initMcake() {
      let result = await common_js_requestHttp.GetRequest("/api/goods/category");
      result.code === 0 ? this.mcakeScene = result.data[0].scene : "";
      this.mcakeScene.unshift({
        "bid": "1",
        "tgid": "3",
        "tid": "192",
        "tname": "\u5168\u90E8"
      });
      this.getMcakes(0, 1);
    },
    async getMcakes(index, bid) {
      this.active = index;
      let result = await common_js_requestHttp.GetRequest("/api/goods/load?bid=" + bid);
      result.code == 0 ? this.datalist = result.data.data : "";
    },
    async getMcakeGroup(idx, fid) {
      this.activeKey = idx;
      if (fid == 192) {
        this.getMcakes(0, 1);
      } else {
        let result = await common_js_requestHttp.GetRequest("/api/goods/load?bid=1&fid=" + fid);
        result.code === 0 ? this.datalist = result.data.data : "";
      }
    },
    goDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/chenrenjun/mcakedetails/mcakedetails?id=${id}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  _easycom_uni_list_item2();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
if (!Math) {
  _easycom_uni_list_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.flag
  }, $data.flag ? {
    b: common_vendor.f($data.mcakeScene, (item, index, i0) => {
      return {
        a: common_vendor.t(item.tname),
        b: common_vendor.n({
          active: _ctx.activeKey === index
        }),
        c: item.id,
        d: common_vendor.o(($event) => $options.getMcakeGroup(index, item.tid), item.id)
      };
    })
  } : {}, {
    c: common_vendor.f($data.datalist, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.french),
        d: common_vendor.t(item.price),
        e: "730ad8d2-0-" + i0,
        f: item.id,
        g: common_vendor.o(($event) => $options.goDetail(item.id), item.id)
      };
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-730ad8d2"], ["__file", "E:/vscode/\u524D\u7AEF/uni-app-06-13/Macke/pages/chenrenjun/index.vue"]]);
wx.createPage(MiniProgramPage);
