"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      goodlist: [],
      scrollTop: 0,
      one: 1,
      contentDatas: []
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      let result = await common_js_requestHttp.GetRequest("/api/goods/load?cityId=110&bid=6&fid=0&page=1&count=20&search=&total=10");
      this.goodlist = result.data;
    },
    backTo() {
      common_vendor.index.navigateBack({});
    },
    goDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/index/good_details?id=${id}`
      });
    },
    async getDatasCar(sku) {
      let result = await common_js_requestHttp.GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
      result.msg === "Success" ? this.contentDatas = result.data : "";
      this.$refs.Car[0].shopContent2();
    }
  },
  onPageScroll() {
    this.scrollTop = 200;
  }
};
if (!Array) {
  const _easycom_header_nav2 = common_vendor.resolveComponent("header-nav");
  const _easycom_car_view2 = common_vendor.resolveComponent("car-view");
  (_easycom_header_nav2 + _easycom_car_view2)();
}
const _easycom_header_nav = () => "../../components/header-nav/header-nav.js";
const _easycom_car_view = () => "../../components/car-view/car-view.js";
if (!Math) {
  (_easycom_header_nav + _easycom_car_view)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.backTo && $options.backTo(...args)),
    b: common_vendor.p({
      scrollTop: $data.scrollTop,
      one: $data.one
    }),
    c: common_vendor.f($data.goodlist.data, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.o(($event) => $options.goDetail(item.id)),
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.french),
        e: common_vendor.t(item.price),
        f: common_vendor.o(($event) => $options.getDatasCar(item.id)),
        g: common_vendor.sr("Car", "1dd4838e-1-" + i0, {
          "f": 1
        }),
        h: "1dd4838e-1-" + i0,
        i: item.id
      };
    }),
    d: _ctx.widthFix,
    e: common_vendor.p({
      contentDatas: $data.contentDatas
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1dd4838e"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/liuchenchen/index.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
