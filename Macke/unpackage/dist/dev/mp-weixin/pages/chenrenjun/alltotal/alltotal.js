"use strict";
var common_vendor = require("../../../common/vendor.js");
var common_js_requestHttp = require("../../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      total: {},
      comment: [],
      twoId: "",
      activeKey: 0,
      page: 1,
      type: 0,
      hasMore: true
    };
  },
  onLoad(options) {
    this.getTotal(options.twoId);
    this.getComment(options.twoId, this.type);
  },
  methods: {
    async getTotal(twoId) {
      let result = await common_js_requestHttp.GetRequest(`/api/comment/total?twoId=${twoId}`);
      result.code == 0 ? this.total = result.data : "";
      this.twoId = twoId;
    },
    async getComment(twoId, type) {
      this.activeKey = this.type;
      let result = await common_js_requestHttp.GetRequest(`/api/comment/load?twoId=${this.twoId || twoId}&type=${this.type}&page=${this.page}&count=10`);
      if (result.data.data.length < 10) {
        this.hasMore = false;
      }
      result.code == 0 ? this.comment = [...this.comment, ...result.data.data] : "";
    },
    async goTotal(type) {
      this.activeKey = type;
      this.type = type;
      this.page = 1;
      let result = await common_js_requestHttp.GetRequest(`/api/comment/load?twoId=${this.twoId}&type=${type}&page=${this.page}&count=10`);
      result.code == 0 ? this.comment = result.data.data : "";
    }
  },
  onReachBottom() {
    if (this.hasMore) {
      this.page++;
      this.getComment();
    }
  },
  onPullDownRefresh() {
    this.comment = [];
    this.page = 1;
    this.hasMore = true;
    this.getComment().then(() => {
      common_vendor.index.stopPullDownRefresh();
    });
  }
};
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.total.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.total),
        c: common_vendor.n({
          active: $data.activeKey === item.type
        }),
        d: item.type,
        e: common_vendor.o(($event) => $options.goTotal(item.type), item.type)
      };
    }),
    b: common_vendor.f($data.comment, (item, k0, i0) => {
      return {
        a: item.uhead,
        b: common_vendor.t(item.uname),
        c: common_vendor.t(item.ctime),
        d: common_vendor.t(item.content),
        e: common_vendor.f(item.img, (i, k1, i1) => {
          return {
            a: i.src,
            b: i.src
          };
        }),
        f: common_vendor.t(item.spec),
        g: item.cid
      };
    }),
    c: $data.hasMore
  }, $data.hasMore ? {
    d: common_vendor.p({
      status: "loading"
    })
  } : {
    e: common_vendor.p({
      status: "noMore"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-069dea0f"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/chenrenjun/alltotal/alltotal.vue"]]);
wx.createPage(MiniProgramPage);
