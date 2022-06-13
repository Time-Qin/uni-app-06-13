"use strict";
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      goodlist: [],
      goodInfo: [],
      page: 1,
      canLoad: true
    };
  },
  created() {
    this.getGoodsPage1(this.page);
  },
  methods: {
    async getGoodsPage1() {
      var _a;
      let that = this;
      let result = await common_js_requestHttp.GetRequest(`/api/goods/load?cityId=110&bid=11&tid=0&fid=0&page=${that.page}&count=10`);
      if (result.data) {
        that.goodlist = that.goodlist.concat(result.data.data);
        if (((_a = result.data.data) == null ? void 0 : _a.length) === 10) {
          that.page += 1;
        } else {
          that.canLoad = false;
        }
      } else {
        that.canLoad = false;
      }
    }
  },
  onReachBottom() {
    if (this.canLoad)
      this.getGoodsPage1();
  },
  onPullDownRefresh() {
    console.log("refresh");
    this.page = 1;
    this.canLoad = true;
    this.getGoodsPage1();
  }
};
if (!Array) {
  const _component_van_card = common_vendor.resolveComponent("van-card");
  _component_van_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.goodlist, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.price),
        b: "083f1a76-0-" + i0,
        c: common_vendor.p({
          desc: item.french,
          title: item.name,
          thumb: item.img
        }),
        d: item.id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-083f1a76"], ["__file", "/Users/zhaojing/workspace/zj_homework/uni-app-06-13/Macke/pages/zhaojing/bread.vue"]]);
wx.createPage(MiniProgramPage);
