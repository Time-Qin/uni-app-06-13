"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
      carts: {},
      comments: [],
      hascomments: false,
      options: [{
        icon: "home",
        text: "\u9996\u9875"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66"
      }],
      buttonGroup: [{
        text: "\u52A0\u5165\u8D2D\u7269\u8F66",
        backgroundColor: "#FFFFCC",
        color: "#333"
      }, {
        text: "\u7ACB\u5373\u8D2D\u4E70",
        backgroundColor: "lightcyan",
        color: "#333"
      }],
      time: "",
      twoId: "",
      indicatorDots: true,
      showDetail: false,
      goTop: false,
      show: false,
      autoplay: true,
      interval: 2e3,
      duration: 500
    };
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["addCarts"])), {
    async getDetail(id) {
      let result = await common_js_requestHttp.GetRequest("/api/goods/detail?id=" + id);
      result.code === 0 ? this.goodsDetail = result.data : "";
      this.banner = this.goodsDetail.banner;
      this.mater = this.goodsDetail.mater;
      this.basic = this.goodsDetail.basic;
      this.list = this.goodsDetail.list[0];
      this.time = this.$filters.formatDate();
    },
    async getComments(twoId, type) {
      let result = await common_js_requestHttp.GetRequest("/api/comment/load?twoId=" + twoId + "&type=" + type + "&page=1&count=3");
      result.code === 0 ? this.comments = result.data : "";
      if (this.comments.data && this.comments.data.length > 0) {
        this.hascomments = true;
      }
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
    },
    onOptionsClick(e) {
      if (e.index === 0) {
        common_vendor.index.switchTab({
          url: "/pages/index/index",
          success: (res) => {
            console.log("\u8DF3\u8F6C\u6210\u529F");
          },
          fail: (err) => {
            console.log("\u8DF3\u8F6C\u5931\u8D25" + err);
          }
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/cart/cart"
        });
      }
    },
    onbuttonClick(e) {
      if (e.index === 0) {
        this.toggle();
      }
    },
    toggle() {
      this.$refs.popup1.change();
    },
    change() {
      this.$refs.popup.open("bottom");
    },
    moveHandle() {
      return false;
    },
    open() {
      this.$refs.popup.open("bottom");
    },
    toAllComment(twoId) {
      common_vendor.index.navigateTo({
        url: "/pages/comments/comments?twoId=" + this.twoId
      });
    },
    goType(data) {
      this.comments.data = [];
      this.getComments(this.twoId, data);
    }
  }),
  onLoad(options) {
    this.twoId = options.twoId;
    this.getDetail(options.id);
    this.getComments(options.twoId);
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
  },
  onShareAppMessage(res) {
    return {
      title: "Mcake\u86CB\u7CD5",
      path: "/pages/lanmin_detail/lanmin_detail"
    };
  }
};
if (!Array) {
  const _easycom_comments2 = common_vendor.resolveComponent("comments");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  const _easycom_carts2 = common_vendor.resolveComponent("carts");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_comments2 + _easycom_uni_goods_nav2 + _easycom_carts2 + _easycom_uni_popup2)();
}
const _easycom_comments = () => "../../components/comments/comments.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
const _easycom_carts = () => "../../components/carts/carts.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_comments + _easycom_uni_goods_nav + _easycom_carts + _easycom_uni_popup)();
}
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
    h: common_vendor.o((...args) => $options.open && $options.open(...args)),
    i: common_vendor.t($data.goodsDetail.price),
    j: common_vendor.t($data.goodsDetail.spec),
    k: common_vendor.t($data.goodsDetail.weight),
    l: common_vendor.t($data.goodsDetail.brief),
    m: common_vendor.t($data.goodsDetail.frenchBrief),
    n: common_vendor.f($data.mater, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: item.id
      };
    }),
    o: common_vendor.f($data.basic, (item, index, i0) => {
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
    p: common_vendor.t($data.list.spec),
    q: common_vendor.t($data.list.weight),
    r: common_vendor.o(($event) => $options.toggle()),
    s: $data.list.tableware
  }, $data.list.tableware ? {
    t: common_vendor.t($data.list.tableware)
  } : {}, {
    v: $data.list.candle
  }, $data.list.candle ? {
    w: common_vendor.t($data.list.candle)
  } : {}, {
    x: $data.list.edible
  }, $data.list.edible ? {
    y: common_vendor.t($data.list.edible)
  } : {}, {
    z: $data.list.size
  }, $data.list.size ? {
    A: common_vendor.t($data.list.size)
  } : {}, {
    B: common_vendor.t($data.time),
    C: $data.hascomments
  }, $data.hascomments ? {
    D: common_vendor.t($data.comments.total),
    E: common_vendor.o(($event) => $options.toAllComment($data.twoId)),
    F: common_vendor.o($options.goType),
    G: common_vendor.p({
      twoId: $data.twoId,
      comments: $data.comments.data
    })
  } : {}, {
    H: $data.goodsDetail.shopDesc
  }, $data.goodsDetail.shopDesc ? {
    I: $data.goodsDetail.shopDesc
  } : {}, {
    J: $data.goTop
  }, $data.goTop ? {
    K: common_vendor.o((...args) => $options.toTop && $options.toTop(...args))
  } : {}, {
    L: common_vendor.o($options.onOptionsClick),
    M: common_vendor.o($options.onbuttonClick),
    N: common_vendor.p({
      fill: true,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    }),
    O: common_vendor.sr("popup1", "33747cf6-2"),
    P: common_vendor.p({
      goodsDetail: $data.goodsDetail,
      list: $data.list
    }),
    Q: common_vendor.sr("popup", "33747cf6-3"),
    R: common_vendor.o($options.change),
    S: common_vendor.o($options.moveHandle),
    T: common_vendor.p({
      ["background-color"]: "#fff"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-33747cf6"], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/MCAKE/Macke/pages/lanmin_detail/lanmin_detail.vue"]]);
_sfc_main.__runtimeHooks = 3;
wx.createPage(MiniProgramPage);
