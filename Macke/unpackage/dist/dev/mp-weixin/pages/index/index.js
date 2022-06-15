"use strict";
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      backgroundCr: "transparent",
      backgroundCr1: "#888",
      toOpacity: "1",
      clors: "white",
      datas: [],
      current: 0,
      fullAdvPlay: [],
      brandkeys: [],
      imgtextnav: [],
      recommendedseason: [],
      recommendedscene: []
    };
  },
  created() {
    this.GetData();
  },
  methods: {
    async GetData() {
      let result = await common_js_requestHttp.GetRequest("/api/page/load");
      result.msg === "Success" ? this.datas = result.data : "";
      this.fullAdvPlay = this.datas.list[0].data.content.list;
      this.brandkeys = this.datas.list[1].data.content.list;
      this.imgtextnav = this.datas.list[2].data.content.list;
      this.recommendedseason = this.datas.list[3].data.content;
      this.recommendedscene = this.datas.list.splice(4, 7);
    },
    change(e) {
      this.current = e.detail.current;
    }
  },
  onPageScroll(scrollTop) {
    let toOpacity = scrollTop.scrollTop * 5e-3;
    if (scrollTop.scrollTop >= 200) {
      this.backgroundCr = "#fff";
      this.toOpacity = toOpacity;
      this.clors = "black";
      this.backgroundCr1 = "#fff";
    } else if (scrollTop.scrollTop == 0) {
      this.backgroundCr = "transparent";
      this.toOpacity = "1";
      this.clors = "white";
      this.backgroundCr1 = "#888";
    } else {
      this.toOpacity = toOpacity;
    }
  }
};
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  _easycom_uni_swiper_dot2();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  _easycom_uni_swiper_dot();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.backgroundCr1,
    b: $data.backgroundCr,
    c: $data.toOpacity,
    d: $data.clors,
    e: common_vendor.f($data.fullAdvPlay, (item, k0, i0) => {
      return {
        a: item.img,
        b: item.img
      };
    }),
    f: common_vendor.o((...args) => $options.change && $options.change(...args)),
    g: common_vendor.p({
      info: $data.fullAdvPlay,
      current: $data.current,
      field: "content",
      mode: "dot"
    }),
    h: common_vendor.f($data.brandkeys, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.title),
        c: item.title
      };
    }),
    i: common_vendor.f($data.imgtextnav, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.title),
        c: item.title
      };
    }),
    j: common_vendor.t($data.recommendedseason.title),
    k: common_vendor.t($data.recommendedseason.subtitle),
    l: common_vendor.t($data.recommendedseason.more),
    m: common_vendor.f($data.recommendedseason.adv, (item, k0, i0) => {
      return {
        a: item.img,
        b: item.img
      };
    }),
    n: common_vendor.f($data.recommendedscene, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.data.content.subtitle),
        c: common_vendor.t(item.data.content.more),
        d: item.data.content.adv[0].img,
        e: common_vendor.f(item.data.content.list, (i, k1, i1) => {
          return {
            a: i.img,
            b: common_vendor.t(i.name),
            c: common_vendor.t(i.french),
            d: common_vendor.t(i.price),
            e: i.img
          };
        }),
        f: item.data.content.more
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
