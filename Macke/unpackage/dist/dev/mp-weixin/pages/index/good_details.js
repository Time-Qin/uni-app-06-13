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
      contentDatas: [],
      dateDatas: [],
      talkeDatas: [],
      titleDatas: [],
      sku: "n0301",
      current: 0,
      changeIndex: 0,
      twoId: 0,
      hasMore: true,
      options: [{
        icon: "home",
        text: "\u9996\u9875"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66"
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "rgba(250,250,90,1)",
          color: "#333"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "rgba(103,200,245,0.5)",
          color: "#333"
        }
      ]
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
  onLoad(options) {
    this.getDatas(options);
  },
  methods: {
    async getDatas(id) {
      let result = await common_js_requestHttp.GetRequest(`/api/goods/detail?sku=${id.sku || id.id}&id=${id.sku || id.id}`);
      result.msg === "Success" ? this.contentDatas = result.data : "";
      this.twoId = this.contentDatas.twoId;
      let result2 = await common_js_requestHttp.GetRequest(`/api/goods/date?sku=${id.sku}&id=${id.id}&cityId=110&lng=31.23037&lat=121.4737`);
      result2.msg === "Success" ? this.dateDatas = result2.data : "";
      let result3 = await common_js_requestHttp.GetRequest(`/api/comment/load?twoId=${this.twoId}&type=0&page=1&count=3`);
      result3.msg === "Success" ? this.talkeDatas = result3.data : "";
      console.log(this.talkeDatas, "11111111111111");
      result3.data.total === 0 ? this.hasMore = false : this.hasMore = true;
      let result4 = await common_js_requestHttp.GetRequest(`/api/comment/total?twoId=${this.twoId}`);
      result4.msg === "Success" ? this.titleDatas = result4.data : "";
    },
    lookAll() {
      common_vendor.index.navigateTo({
        url: `./talke?twoId=${this.twoId}`
      });
    },
    goAddress() {
      common_vendor.index.navigateTo({
        url: `./address`
      });
    },
    shopContent() {
      console.log(this.$refs.popup4);
      this.$refs.popup4.shopContent2();
    },
    changeLunBo(e) {
      this.current = e.detail.current;
    },
    shareO() {
      this.$refs.heA.shareOpen();
    },
    onClick(e) {
      if (e.content.text == "\u9996\u9875") {
        common_vendor.index.switchTab({
          url: "./index"
        });
      } else {
        common_vendor.index.showToast({
          title: `\u70B9\u51FB${e.content.text}`,
          icon: "none"
        });
      }
    },
    buttonClick(e) {
      if (e.index) {
        common_vendor.index.showToast({
          title: `\u70B9\u51FB${e.content.text}`,
          icon: "none"
        });
      } else {
        this.shopContent();
      }
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
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  const _easycom_car_view2 = common_vendor.resolveComponent("car-view");
  (_easycom_header_title2 + _easycom_uni_swiper_dot2 + _easycom_uni_icons2 + _easycom_uni_goods_nav2 + _easycom_car_view2)();
}
const _easycom_header_title = () => "../../components/header-title/header-title.js";
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
const _easycom_car_view = () => "../../components/car-view/car-view.js";
if (!Math) {
  (_easycom_header_title + _easycom_uni_swiper_dot + _easycom_uni_icons + _easycom_uni_goods_nav + _easycom_car_view)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.sr("heA", "b72866d4-0"),
    b: common_vendor.p({
      backgdata: $options.backgdata
    }),
    c: common_vendor.f($data.contentDatas.banner, (item, k0, i0) => {
      return {
        a: item,
        b: item
      };
    }),
    d: common_vendor.o((...args) => $options.changeLunBo && $options.changeLunBo(...args)),
    e: common_vendor.p({
      info: $data.contentDatas.banner,
      current: $data.current,
      field: "content",
      mode: "dot"
    }),
    f: common_vendor.t($data.contentDatas.name),
    g: common_vendor.t($data.contentDatas.french),
    h: common_vendor.o((...args) => $options.shareO && $options.shareO(...args)),
    i: common_vendor.t($data.contentDatas.price),
    j: common_vendor.t($data.contentDatas.spec),
    k: common_vendor.t($data.contentDatas.weight),
    l: common_vendor.t($data.contentDatas.brief),
    m: common_vendor.t($data.contentDatas.frenchBrief),
    n: common_vendor.f($data.contentDatas.mater, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: item.id
      };
    }),
    o: common_vendor.f($data.contentDatas.basic, (item, k0, i0) => {
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
    p: common_vendor.t($data.contentDatas.spec),
    q: common_vendor.t($data.contentDatas.weight),
    r: $data.contentDatas.tableware
  }, $data.contentDatas.tableware ? {
    s: common_vendor.t($data.contentDatas.tableware)
  } : {}, {
    t: $data.contentDatas.candle
  }, $data.contentDatas.candle ? {
    v: common_vendor.t($data.contentDatas.candle)
  } : {}, {
    w: $data.contentDatas.edible
  }, $data.contentDatas.edible ? {
    x: common_vendor.t($data.contentDatas.edible)
  } : {}, {
    y: $data.contentDatas.size
  }, $data.contentDatas.size ? {
    z: common_vendor.t($data.contentDatas.size)
  } : {}, {
    A: common_vendor.o((...args) => $options.shopContent && $options.shopContent(...args)),
    B: common_vendor.t($data.dateDatas.date),
    C: common_vendor.t($data.dateDatas.time),
    D: common_vendor.o((...args) => $options.goAddress && $options.goAddress(...args)),
    E: $data.hasMore == true
  }, $data.hasMore == true ? {
    F: common_vendor.t($data.talkeDatas.total),
    G: common_vendor.o((...args) => $options.lookAll && $options.lookAll(...args)),
    H: common_vendor.p({
      type: "right",
      size: "16"
    }),
    I: common_vendor.f($data.titleDatas.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.total),
        c: item.title
      };
    }),
    J: common_vendor.f($data.talkeDatas.data, (item, k0, i0) => {
      return {
        a: "b72866d4-3-" + i0,
        b: common_vendor.t(item.uname),
        c: common_vendor.t(item.ctime),
        d: common_vendor.t(item.content),
        e: common_vendor.t(item.spec),
        f: item.cid
      };
    }),
    K: common_vendor.p({
      type: "contact",
      size: "30"
    })
  } : {}, {
    L: $data.contentDatas.wapDesc,
    M: common_vendor.o($options.onClick),
    N: common_vendor.o($options.buttonClick),
    O: common_vendor.p({
      fill: true,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    }),
    P: common_vendor.sr("popup4", "b72866d4-5"),
    Q: common_vendor.p({
      contentDatas: $data.contentDatas
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b72866d4"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/index/good_details.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
