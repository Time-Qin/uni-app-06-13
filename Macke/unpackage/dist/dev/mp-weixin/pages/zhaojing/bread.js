"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      one: 1,
      goodlist: [],
      page: 1,
      canLoad: true,
      contentDatas: [],
      scrollTop: 0
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
    },
    backTo() {
      common_vendor.index.navigateBack({});
    },
    async getDatasCar(sku) {
      let result = await common_js_requestHttp.GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
      result.msg === "Success" ? this.contentDatas = result.data : "";
      this.$refs.Car[0].shopContent2();
    },
    gosku(sku) {
      let sku1 = sku;
      common_vendor.index.navigateTo({
        url: `../index/good_details?sku=${sku1}`
      });
    }
  },
  onReachBottom() {
    if (this.canLoad) {
      this.getGoodsPage1();
    }
  },
  onPullDownRefresh() {
    console.log("refresh");
    this.page = 1;
    this.canLoad = true;
    this.getGoodsPage1();
  },
  onPageScroll(Top) {
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
    c: common_vendor.f($data.goodlist, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.o(($event) => $options.gosku(item.id)),
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.french),
        e: common_vendor.t(item.price),
        f: common_vendor.o(($event) => $options.getDatasCar(item.id)),
        g: common_vendor.sr("Car", "083f1a76-1-" + i0, {
          "f": 1
        }),
        h: "083f1a76-1-" + i0,
        i: item.src
      };
    }),
    d: common_vendor.p({
      contentDatas: $data.contentDatas
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-083f1a76"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/zhaojing/bread.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
