"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      goodsDetail: [],
      banner: [],
      mater: [],
      basic: [],
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500
    };
  },
  methods: {
    async getDetail(id) {
      let result = await common_js_requestHttp.GetRequest("/api/goods/detail?id=" + id);
      result.code === 0 ? this.goodsDetail = result.data : "";
      this.banner = this.goodsDetail.banner;
      this.mater = this.goodsDetail.mater;
      this.basic = this.goodsDetail.basic;
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
    previewImg(current) {
      var urls = this.banner.map((item) => item);
      common_vendor.index.previewImage({
        current,
        urls
      });
    }
  },
  onLoad(options) {
    this.getDetail(options.id);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.banner, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.previewImg(item)),
        b: item,
        c: index
      };
    }),
    b: $data.indicatorDots,
    c: $data.autoplay,
    d: $data.interval,
    e: $data.duration,
    f: common_vendor.t($data.goodsDetail.name),
    g: common_vendor.t($data.goodsDetail.french),
    h: common_vendor.t($data.goodsDetail.price),
    i: common_vendor.t($data.goodsDetail.spec),
    j: common_vendor.t($data.goodsDetail.weight),
    k: common_vendor.t($data.goodsDetail.brief),
    l: common_vendor.t($data.goodsDetail.frenchBrief),
    m: common_vendor.f($data.mater, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: item.id
      };
    }),
    n: common_vendor.f($data.basic, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.value)
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-33747cf6"], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/MCAKE/Macke/pages/lanmin_detail/lanmin_detail.vue"]]);
wx.createPage(MiniProgramPage);
