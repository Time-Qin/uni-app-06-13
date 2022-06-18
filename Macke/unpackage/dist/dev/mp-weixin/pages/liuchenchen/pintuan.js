"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_js_fomate = require("../../common/js/fomate.js");
const _sfc_main = {
  data() {
    return {
      goodlist: [],
      contentText: {
        contentDefault: "\u7ACB\u5373\u5F00\u56E2"
      },
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500,
      lunbolist: [],
      guize: [],
      guizelist: [],
      scrollTop: 0,
      one: 1
    };
  },
  created() {
    this.getGoods();
    this.getLunbo();
    this.getGuize();
  },
  methods: {
    formatRichText: common_js_fomate.formatRichText,
    async getGoods() {
      let result = await common_js_requestHttp.GetRequest("/api/groupbuy/load?cityId=110");
      this.goodlist = result.data;
      console.log(this.goodlist);
    },
    async getLunbo() {
      let result = await common_js_requestHttp.GetRequest("/api/groupbuy/load?cityId=110");
      this.lunbolist = result.data.banner;
      console.log(this.lunbolist);
    },
    async getGuize() {
      let result = await common_js_requestHttp.GetRequest("/api/groupbuy/load?cityId=110");
      this.guizelist = result.data.rule;
      console.log(this.guizelist);
    },
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value;
    },
    backTo() {
      common_vendor.index.navigateBack({});
    }
  },
  onPageScroll() {
    this.scrollTop = 200;
  }
};
if (!Array) {
  const _easycom_header_nav2 = common_vendor.resolveComponent("header-nav");
  const _easycom_uni_fav2 = common_vendor.resolveComponent("uni-fav");
  (_easycom_header_nav2 + _easycom_uni_fav2)();
}
const _easycom_header_nav = () => "../../components/header-nav/header-nav.js";
const _easycom_uni_fav = () => "../../uni_modules/uni-fav/components/uni-fav/uni-fav.js";
if (!Math) {
  (_easycom_header_nav + _easycom_uni_fav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.backTo && $options.backTo(...args)),
    b: common_vendor.p({
      scrollTop: $data.scrollTop,
      one: $data.one
    }),
    c: common_vendor.f($data.lunbolist, (items, index, i0) => {
      return {
        a: items.image,
        b: index
      };
    }),
    d: $data.indicatorDots,
    e: common_vendor.f($data.goodlist.list, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.goods_name),
        c: common_vendor.t(item.sku_spec),
        d: common_vendor.t(item.french),
        e: common_vendor.t(item.people),
        f: common_vendor.t(item.amount),
        g: common_vendor.t(item.price),
        h: "3f958282-1-" + i0,
        i: item.id
      };
    }),
    f: _ctx.widthFix,
    g: common_vendor.p({
      star: false,
      circle: true,
      ["content-text"]: $data.contentText,
      bgColor: "#f33",
      fgColor: "#fff"
    }),
    h: $data.guizelist
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f958282"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/liuchenchen/pintuan.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
