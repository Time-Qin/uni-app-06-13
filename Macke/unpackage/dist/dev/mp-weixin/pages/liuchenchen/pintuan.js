"use strict";
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_js_fomate = require("../../common/js/fomate.js");
var common_vendor = require("../../common/vendor.js");
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
      guizelist: []
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
    }
  }
};
if (!Array) {
  const _easycom_uni_fav2 = common_vendor.resolveComponent("uni-fav");
  _easycom_uni_fav2();
}
const _easycom_uni_fav = () => "../../uni_modules/uni-fav/components/uni-fav/uni-fav.js";
if (!Math) {
  _easycom_uni_fav();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.lunbolist, (items, index, i0) => {
      return {
        a: items.image,
        b: index
      };
    }),
    b: $data.indicatorDots,
    c: common_vendor.f($data.goodlist.list, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.goods_name),
        c: common_vendor.t(item.sku_spec),
        d: common_vendor.t(item.french),
        e: common_vendor.t(item.people),
        f: common_vendor.t(item.amount),
        g: common_vendor.t(item.price),
        h: "3f958282-0-" + i0,
        i: item.id
      };
    }),
    d: _ctx.widthFix,
    e: common_vendor.p({
      star: false,
      circle: true,
      ["content-text"]: $data.contentText,
      bgColor: "#f33",
      fgColor: "#fff"
    }),
    f: $data.guizelist
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f958282"], ["__file", "C:/Users/ThinkPad/Desktop/mcake/uni-app-06-13/Macke/pages/liuchenchen/pintuan.vue"]]);
wx.createPage(MiniProgramPage);
