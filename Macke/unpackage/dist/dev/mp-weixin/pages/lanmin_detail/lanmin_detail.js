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
      list: [],
      time: "",
      indicatorDots: true,
      goTop: false,
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
      this.list = this.goodsDetail.list[0];
      this.time = this.$filters.formatDate();
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
    },
    toTop() {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
  },
  onLoad(options) {
    this.getDetail(options.id);
    console.log(options.id);
  },
  onPageScroll(e) {
    var that = this;
    common_vendor.index.getSystemInfo({
      success: function(res) {
        if (e.scrollTop > res.windowHeight) {
          that.goTop = true;
        } else {
          that.goTop = false;
        }
        return res.windowHeight;
      }
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
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
    n: common_vendor.f($data.basic, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.title),
        b: index === 3
      }, index === 3 ? {
        c: common_vendor.f(item.value, (num, k1, i1) => {
          return {};
        }),
        d: index
      } : {
        e: common_vendor.t(item.value)
      }, {
        f: item.id
      });
    }),
    o: common_vendor.t($data.list.spec),
    p: common_vendor.t($data.list.weight),
    q: $data.list.tableware
  }, $data.list.tableware ? {
    r: common_vendor.t($data.list.tableware)
  } : {}, {
    s: $data.list.candle
  }, $data.list.candle ? {
    t: common_vendor.t($data.list.candle)
  } : {}, {
    v: $data.list.edible
  }, $data.list.edible ? {
    w: common_vendor.t($data.list.edible)
  } : {}, {
    x: $data.list.size
  }, $data.list.size ? {
    y: common_vendor.t($data.list.size)
  } : {}, {
    z: common_vendor.t($data.time),
    A: $data.goodsDetail.shopDesc
  }, $data.goodsDetail.shopDesc ? {
    B: $data.goodsDetail.shopDesc
  } : {}, {
    C: $data.goTop
  }, $data.goTop ? {
    D: common_vendor.o((...args) => $options.toTop && $options.toTop(...args))
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-33747cf6"], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/MCAKE/Macke/pages/lanmin_detail/lanmin_detail.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
