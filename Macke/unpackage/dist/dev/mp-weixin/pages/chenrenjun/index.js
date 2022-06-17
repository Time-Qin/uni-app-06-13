"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      datalist: [],
      mcakeScene: {},
      flag: true,
      activeKey: 0,
      hasMore: true,
      page: 1,
      fid: 0
    };
  },
  created() {
    this.initMcake();
  },
  methods: {
    async initMcake() {
      let result = await common_js_requestHttp.GetRequest("/api/goods/category");
      result.code === 0 ? this.mcakeScene = result.data[0].scene : "";
      this.mcakeScene.unshift({
        "bid": "1",
        "tgid": "3",
        "tid": "0",
        "tname": "\u5168\u90E8"
      });
      this.getMcakes();
    },
    async getMcakes(fid) {
      let result = await common_js_requestHttp.GetRequest(`/api/goods/load?bid=1&tid=0&fid=${this.fid}&page=${this.page}&count=10`);
      if (result.data.data.length < 10) {
        this.hasMore = false;
      }
      result.code == 0 ? this.datalist = [...this.datalist, ...result.data.data] : "";
    },
    async getMcakeGroup(fid) {
      this.activeKey = fid;
      this.fid = fid;
      this.hasMore = true;
      this.page = 1;
      let result = await common_js_requestHttp.GetRequest(`/api/goods/load?bid=1&tid=0&fid=${fid}&page=${this.page}&count=10`);
      result.code === 0 ? this.datalist = result.data.data : "";
    },
    goDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/chenrenjun/mcakedetails/mcakedetails?id=${id}`
      });
    }
  },
  onReachBottom() {
    if (this.hasMore) {
      this.page++;
      this.getMcakes();
    }
  },
  onPullDownRefresh() {
    this.datalist = [];
    this.page = 1;
    this.hasMore = true;
    this.getMcakes().then(() => {
      common_vendor.index.stopPullDownRefresh();
    });
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_list_item2 + _easycom_uni_load_more2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.flag
  }, $data.flag ? {
    b: common_vendor.f($data.mcakeScene, (item, index, i0) => {
      return {
        a: common_vendor.t(item.tname),
        b: common_vendor.n({
          active: $data.activeKey == item.tid
        }),
        c: item.tid,
        d: common_vendor.o(($event) => $options.getMcakeGroup(item.tid), item.tid)
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
    }),
    d: $data.hasMore
  }, $data.hasMore ? {
    e: common_vendor.p({
      status: "loading"
    })
  } : {
    f: common_vendor.p({
      status: "noMore"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-730ad8d2"], ["__file", "E:/vscode/\u524D\u7AEF/uni-app-06-13/Macke/pages/chenrenjun/index.vue"]]);
wx.createPage(MiniProgramPage);
