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
      opacity: 0,
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
      let result = await common_js_requestHttp.GetRequest(`/api/goods/detail?id=${id}`);
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
      this.$refs.popup1.change("bottom");
    },
    moveHandle() {
      return false;
    },
    goMore() {
      this.$refs.popup_top.open("top");
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
    },
    goBack() {
      common_vendor.index.navigateBack({
        delta: 1
      });
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
          that.opacity = 1;
        } else {
          that.opacity = e.scrollTop / res.windowHeight;
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
  },
  computed: {
    stausBarStyle() {
      return {
        "--stausBar-opacity": this.opacity
      };
    }
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_comments2 = common_vendor.resolveComponent("comments");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  const _easycom_carts2 = common_vendor.resolveComponent("carts");
  (_easycom_uni_popup2 + _easycom_uni_icons2 + _easycom_comments2 + _easycom_uni_goods_nav2 + _easycom_carts2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_comments = () => "../../components/comments/comments.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
const _easycom_carts = () => "../../components/carts/carts.js";
if (!Math) {
  (_easycom_uni_popup + _easycom_uni_icons + _easycom_comments + _easycom_uni_goods_nav + _easycom_carts)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.sr("popup_top", "33747cf6-0"),
    b: common_vendor.o($options.moveHandle),
    c: common_vendor.p({
      ["background-color"]: "#777"
    }),
    d: common_vendor.s($options.stausBarStyle),
    e: $data.goTop
  }, $data.goTop ? {
    f: common_vendor.o($options.goBack),
    g: common_vendor.p({
      type: "back",
      size: "18"
    }),
    h: common_vendor.o($options.goMore),
    i: common_vendor.p({
      type: "more-filled",
      size: "18"
    })
  } : {
    j: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    k: common_vendor.o((...args) => $options.goMore && $options.goMore(...args))
  }, {
    l: common_vendor.f($data.banner, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.previewImg(item)),
        b: item,
        c: index
      };
    }),
    m: $data.indicatorDots,
    n: $data.autoplay,
    o: $data.interval,
    p: $data.duration,
    q: common_vendor.t($data.goodsDetail.name),
    r: common_vendor.t($data.goodsDetail.french),
    s: common_vendor.o((...args) => $options.open && $options.open(...args)),
    t: common_vendor.t($data.goodsDetail.price),
    v: common_vendor.t($data.goodsDetail.spec),
    w: common_vendor.t($data.goodsDetail.weight),
    x: common_vendor.t($data.goodsDetail.brief),
    y: common_vendor.t($data.goodsDetail.frenchBrief),
    z: common_vendor.f($data.mater, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: item.id
      };
    }),
    A: common_vendor.f($data.basic, (item, index, i0) => {
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
    B: common_vendor.t($data.list.spec),
    C: common_vendor.t($data.list.weight),
    D: common_vendor.o(($event) => $options.toggle()),
    E: $data.list.tableware
  }, $data.list.tableware ? {
    F: common_vendor.t($data.list.tableware)
  } : {}, {
    G: $data.list.candle
  }, $data.list.candle ? {
    H: common_vendor.t($data.list.candle)
  } : {}, {
    I: $data.list.edible
  }, $data.list.edible ? {
    J: common_vendor.t($data.list.edible)
  } : {}, {
    K: $data.list.size
  }, $data.list.size ? {
    L: common_vendor.t($data.list.size)
  } : {}, {
    M: common_vendor.t($data.time),
    N: $data.hascomments
  }, $data.hascomments ? {
    O: common_vendor.t($data.comments.total),
    P: common_vendor.o(($event) => $options.toAllComment($data.twoId)),
    Q: common_vendor.o($options.goType),
    R: common_vendor.p({
      twoId: $data.twoId,
      comments: $data.comments.data
    })
  } : {}, {
    S: $data.goodsDetail.shopDesc
  }, $data.goodsDetail.shopDesc ? {
    T: $data.goodsDetail.shopDesc
  } : {}, {
    U: $data.goTop
  }, $data.goTop ? {
    V: common_vendor.o((...args) => $options.toTop && $options.toTop(...args))
  } : {}, {
    W: common_vendor.o($options.onOptionsClick),
    X: common_vendor.o($options.onbuttonClick),
    Y: common_vendor.p({
      fill: true,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    }),
    Z: common_vendor.sr("popup1", "33747cf6-5"),
    aa: common_vendor.p({
      goodsDetail: $data.goodsDetail,
      list: $data.list
    }),
    ab: common_vendor.sr("popup", "33747cf6-6"),
    ac: common_vendor.o($options.moveHandle),
    ad: common_vendor.p({
      ["background-color"]: "#fff"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-33747cf6"], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/MCAKE/Macke/pages/lanmin_detail/lanmin_detail.vue"]]);
_sfc_main.__runtimeHooks = 3;
wx.createPage(MiniProgramPage);
