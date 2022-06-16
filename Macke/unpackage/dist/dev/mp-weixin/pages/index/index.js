"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
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
      recommendedscene: [],
      contentDatas: []
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
    async getDatasCar(sku) {
      let result = await common_js_requestHttp.GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
      result.msg === "Success" ? this.contentDatas = result.data : "";
      this.$refs.Car[0].shopContent2();
    },
    change(e) {
      this.current = e.detail.current;
    },
    gosku(sku) {
      let sku1 = sku;
      common_vendor.index.navigateTo({
        url: `./good_details?sku=${sku1}`
      });
    },
    gourl(url) {
      let res = "";
      res = url.lastIndexOf("?");
      res = url.slice(res + 1);
      console.log(res, "111111111111");
      common_vendor.index.navigateTo({
        url: `./good_details?${res}`
      });
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
  const _easycom_car_view2 = common_vendor.resolveComponent("car-view");
  (_easycom_uni_swiper_dot2 + _easycom_car_view2)();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_car_view = () => "../../components/car-view/car-view.js";
if (!Math) {
  (_easycom_uni_swiper_dot + _easycom_car_view)();
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
        b: common_vendor.o(($event) => $options.gourl(item.url)),
        c: item.img
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
        b: common_vendor.o(($event) => $options.gourl(item.url)),
        c: item.img
      };
    }),
    n: common_vendor.f($data.recommendedscene, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.data.content.subtitle),
        c: common_vendor.t(item.data.content.more),
        d: item.data.content.adv[0].img,
        e: common_vendor.o(($event) => $options.gourl(item.data.content.adv[0].url)),
        f: common_vendor.f(item.data.content.list, (i, k1, i1) => {
          return {
            a: i.img,
            b: common_vendor.o(($event) => $options.gosku(i.sku)),
            c: common_vendor.t(i.name),
            d: common_vendor.t(i.french),
            e: common_vendor.t(i.price),
            f: common_vendor.o(($event) => $options.getDatasCar(i.sku)),
            g: common_vendor.sr("Car", "57280228-1-" + i0 + "-" + i1, {
              "f": 1
            }),
            h: "57280228-1-" + i0 + "-" + i1,
            i: i.img
          };
        }),
        g: item.data.content.more
      };
    }),
    o: common_vendor.p({
      contentDatas: $data.contentDatas
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
