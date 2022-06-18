"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      one: 1,
      flag: false,
      scrollTop: 200,
      goods: [],
      pageIndex: 1,
      hasMore: true,
      contentDatas: [],
      goodDatas: [],
      goodcart: true
    };
  },
  created() {
    this.getShopList();
  },
  methods: {
    goshopping() {
      common_vendor.index.navigateTo({
        url: "./bread"
      });
    },
    async getShopList() {
      let result1 = await common_js_requestHttp.GetRequest("/api/cart/load");
      result1.msg === "Success" ? this.goodDatas = result1.data : "";
      if (result1.data.goods.length != 0) {
        this.goodcart = false;
      }
      console.log(this.goodDatas, result1, this.goodcart);
      let result = await common_js_requestHttp.GetRequest(`/api/goods/load?cityId=110&bid=1&fid=0&page=${this.pageIndex}&count=20&search=&total=34`);
      if (result.data.data.length < 10) {
        this.hasMore = false;
      }
      console.log(result, this.pageIndex);
      result.code === 0 ? this.goods = [...this.goods, ...result.data.data] : "";
    },
    async getDatasCar(sku) {
      let result = await common_js_requestHttp.GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
      result.msg === "Success" ? this.contentDatas = result.data : "";
      this.$refs.Car[0].shopContent2();
    },
    goTop() {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    },
    gosku(sku) {
      let sku1 = sku;
      common_vendor.index.navigateTo({
        url: `../index/good_details?sku=${sku1}`
      });
    }
  },
  onPageScroll(scroll) {
    this.scrollTop = scroll.scrollTop;
    if (scroll.scrollTop > 400) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  },
  onReachBottom() {
    if (this.hasMore) {
      this.pageIndex += 1;
      this.getShopList();
    }
  },
  onPullDownRefresh() {
    this.goods = [];
    this.pageIndex = 1;
    this.hasMore = true;
    this.getShopList().then(() => {
      common_vendor.index.stopPullDownRefresh();
    });
  }
};
if (!Array) {
  const _easycom_header_nav2 = common_vendor.resolveComponent("header-nav");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_car_view2 = common_vendor.resolveComponent("car-view");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_header_nav2 + _easycom_uni_icons2 + _easycom_uni_number_box2 + _easycom_car_view2 + _easycom_uni_load_more2)();
}
const _easycom_header_nav = () => "../../components/header-nav/header-nav.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_car_view = () => "../../components/car-view/car-view.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_header_nav + _easycom_uni_icons + _easycom_uni_number_box + _easycom_car_view + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      scrollTop: $data.scrollTop,
      one: $data.one
    }),
    b: $data.goodcart === true
  }, $data.goodcart === true ? {
    c: common_vendor.o((...args) => $options.goshopping && $options.goshopping(...args))
  } : {
    d: common_vendor.p({
      type: "circle",
      size: "30"
    }),
    e: common_vendor.p({
      min: 1
    })
  }, {
    f: common_vendor.f($data.goods, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.o(($event) => $options.gosku(item.id)),
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.french),
        e: common_vendor.t(item.price),
        f: common_vendor.o(($event) => $options.getDatasCar(item.id)),
        g: "99da2408-3-" + i0,
        h: common_vendor.sr("Car", "99da2408-4-" + i0, {
          "f": 1
        }),
        i: "99da2408-4-" + i0,
        j: item.title
      };
    }),
    g: common_vendor.p({
      type: "cart",
      size: "30"
    }),
    h: common_vendor.p({
      contentDatas: $data.contentDatas
    }),
    i: $data.hasMore
  }, $data.hasMore ? {
    j: common_vendor.p({
      status: "loading"
    })
  } : {}, {
    k: common_vendor.p({
      type: "arrow-up",
      size: "30"
    }),
    l: common_vendor.o((...args) => $options.goTop && $options.goTop(...args)),
    m: $data.flag === true ? "block" : "none"
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-99da2408"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/zhaojing/shopCar.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
