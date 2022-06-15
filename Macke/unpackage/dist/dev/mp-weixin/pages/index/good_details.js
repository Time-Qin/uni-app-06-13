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
      contentDatas: [],
      dateDatas: [],
      talkeDatas: [],
      titleDatas: [],
      sku: "n0301",
      current: 0
    };
  },
  computed: {
    backgdata() {
      const obj = {
        backgroundCr: this.backgroundCr,
        backgroundCr1: this.backgroundCr1,
        toOpacity: this.toOpacity,
        clors: this.clors
      };
      return obj;
    }
  },
  created() {
    this.getDatas();
  },
  methods: {
    async getDatas() {
      let result = await common_js_requestHttp.GetRequest(`/api/goods/detail?id=&sku=n0301&cityId=110`);
      result.msg === "Success" ? this.contentDatas = result.data : "";
      console.log(result, this.contentDatas);
      let result2 = await common_js_requestHttp.GetRequest(`/api/goods/date?id=&sku=n0301&cityId=110&lng=31.23037&lat=121.4737`);
      result2.msg === "Success" ? this.dateDatas = result2.data : "";
      let result3 = await common_js_requestHttp.GetRequest(`/api/comment/load?twoId=10095&type=0&page=1&count=3`);
      result3.msg === "Success" ? this.talkeDatas = result3.data : "";
      console.log(result3);
      let result4 = await common_js_requestHttp.GetRequest(`/api/comment/total?twoId=10095`);
      result4.msg === "Success" ? this.titleDatas = result4.data : "";
      console.log(this.titleDatas);
    },
    change(e) {
      this.current = e.detail.current;
    }
  },
  onPageScroll(scrollTop) {
    console.log("111");
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
  const _easycom_header_title2 = common_vendor.resolveComponent("header-title");
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_header_title2 + _easycom_uni_swiper_dot2 + _easycom_uni_icons2)();
}
const _easycom_header_title = () => "../../components/header-title/header-title.js";
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_header_title + _easycom_uni_swiper_dot + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      backgdata: $options.backgdata
    }),
    b: common_vendor.f($data.contentDatas.banner, (item, k0, i0) => {
      return {
        a: item,
        b: item
      };
    }),
    c: common_vendor.o((...args) => $options.change && $options.change(...args)),
    d: common_vendor.p({
      info: $data.contentDatas.banner,
      current: $data.current,
      field: "content",
      mode: "dot"
    }),
    e: common_vendor.t($data.contentDatas.name),
    f: common_vendor.t($data.contentDatas.french),
    g: common_vendor.t($data.contentDatas.price),
    h: common_vendor.t($data.contentDatas.spec),
    i: common_vendor.t($data.contentDatas.weight),
    j: common_vendor.t($data.contentDatas.brief),
    k: common_vendor.t($data.contentDatas.frenchBrief),
    l: common_vendor.f($data.contentDatas.mater, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: item.id
      };
    }),
    m: common_vendor.f($data.contentDatas.basic, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.title),
        b: item.value == "1" || item.value == "2"
      }, item.value == "1" || item.value == "2" ? {
        c: common_vendor.f(item.value, (item2, k1, i1) => {
          return {
            a: item2
          };
        })
      } : {
        d: common_vendor.t(item.value)
      }, {
        e: item.id
      });
    }),
    n: common_vendor.t($data.contentDatas.spec),
    o: common_vendor.t($data.contentDatas.weight),
    p: common_vendor.t($data.contentDatas.tableware),
    q: common_vendor.t($data.contentDatas.candle),
    r: common_vendor.t($data.contentDatas.edible),
    s: common_vendor.t($data.contentDatas.size),
    t: common_vendor.t($data.dateDatas.date),
    v: common_vendor.t($data.dateDatas.time),
    w: common_vendor.t($data.talkeDatas.total),
    x: common_vendor.p({
      type: "right",
      size: "16"
    }),
    y: common_vendor.f($data.titleDatas.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.total),
        c: item.title
      };
    }),
    z: common_vendor.f($data.talkeDatas.data, (item, k0, i0) => {
      return {
        a: "b72866d4-3-" + i0,
        b: common_vendor.t(item.uname),
        c: common_vendor.t(item.ctime),
        d: common_vendor.t(item.content),
        e: common_vendor.t(item.spec),
        f: item.cid
      };
    }),
    A: common_vendor.p({
      type: "contact",
      size: "30"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b72866d4"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/index/good_details.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
