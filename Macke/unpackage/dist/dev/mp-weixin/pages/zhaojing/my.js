"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      goodlist: [],
      scrollTop: 0,
      contentDatas: [],
      user: {},
      member: {}
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      let result = await common_js_requestHttp.GetRequest("/api/page/load?cityId=110&route=pages%2Fuser%2Findex");
      this.goodlist = result.data.list[1].data.content.list;
    },
    async getself() {
      let result = await common_js_requestHttp.PostRequest("/api/checkout/init");
      result.msg === "Success" ? this.member = result.data.member : "";
    },
    async getDatasCar(sku) {
      let result = await common_js_requestHttp.GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
      result.msg === "Success" ? this.contentDatas = result.data : "";
      this.$refs.Car[0].shopContent2();
    },
    gosku(sku) {
      let sku1 = sku;
      common_vendor.index.navigateTo({
        url: `/pages/index/good_details?sku=${sku1}`
      });
    },
    login() {
      common_vendor.index.navigateTo({
        url: "/pages/guowen/login"
      });
      this.getself();
    },
    goOrder() {
      common_vendor.index.navigateTo({
        url: "./myOrder"
      });
    }
  },
  onPageScroll(Top) {
    this.scrollTop = Top.scrollTop;
  },
  onShow() {
    this.user = common_vendor.index.getStorageSync("user");
    this.getself();
  }
};
if (!Array) {
  const _easycom_header_nav2 = common_vendor.resolveComponent("header-nav");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_car_view2 = common_vendor.resolveComponent("car-view");
  (_easycom_header_nav2 + _easycom_uni_icons2 + _easycom_car_view2)();
}
const _easycom_header_nav = () => "../../components/header-nav/header-nav.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_car_view = () => "../../components/car-view/car-view.js";
if (!Math) {
  (_easycom_header_nav + _easycom_uni_icons + _easycom_car_view)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      scrollTop: $data.scrollTop
    }),
    b: $data.user
  }, $data.user ? {
    c: $data.user.img,
    d: common_vendor.t($data.user.nickName)
  } : {
    e: common_vendor.o((...args) => $options.login && $options.login(...args))
  }, {
    f: common_vendor.t($data.member.points || 0),
    g: common_vendor.o((...args) => $options.goOrder && $options.goOrder(...args)),
    h: common_vendor.f($data.goodlist, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.o(($event) => $options.gosku(item.sku)),
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.french),
        e: common_vendor.t(item.price),
        f: common_vendor.o(($event) => $options.getDatasCar(item.sku)),
        g: "5e8d191e-1-" + i0,
        h: common_vendor.sr("Car", "5e8d191e-2-" + i0, {
          "f": 1
        }),
        i: "5e8d191e-2-" + i0,
        j: item.title
      };
    }),
    i: common_vendor.p({
      type: "cart",
      size: "30"
    }),
    j: common_vendor.p({
      contentDatas: $data.contentDatas
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5e8d191e"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/zhaojing/my.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
