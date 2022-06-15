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
        var obj = {
          id: this.goodsDetail.id,
          price: this.goodsDetail.price,
          buynum: 1,
          name: this.goodsDetail.name
        };
        this.addCarts(obj);
        common_vendor.index.showToast({
          title: `\u6DFB\u52A0\u8D2D\u7269\u8F66\u6210\u529F`,
          mask: true
        });
      }
    },
    toggle(type) {
      this.type = type;
      this.$refs.popup1.open(type);
    },
    change(e) {
      this.show = e.show;
    },
    moveHandle() {
      return false;
    },
    changeValue(value) {
      this.carts = {
        id: this.goodsDetail.id,
        price: this.goodsDetail.price,
        buynum: value,
        name: this.goodsDetail.name
      };
    },
    addMoreCarts() {
      this.addCarts(this.carts);
      common_vendor.index.showToast({
        title: `\u6DFB\u52A0\u8D2D\u7269\u8F66\u6210\u529F`,
        mask: true
      });
    },
    open() {
      this.$refs.popup.open("bottom");
    }
  }),
  onLoad(options) {
    this.getDetail(options.id);
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
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_popup2 + _easycom_uni_number_box2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_popup + _easycom_uni_number_box + _easycom_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: "overflow:" + ($data.show ? "hidden" : "visible"),
    b: common_vendor.f($data.banner, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.previewImg(item)),
        b: item,
        c: index
      };
    }),
    c: $data.indicatorDots,
    d: $data.autoplay,
    e: $data.interval,
    f: $data.duration,
    g: common_vendor.t($data.goodsDetail.name),
    h: common_vendor.t($data.goodsDetail.french),
    i: common_vendor.o((...args) => $options.open && $options.open(...args)),
    j: common_vendor.sr("popup", "33747cf6-0"),
    k: common_vendor.o($options.change),
    l: common_vendor.o($options.moveHandle),
    m: common_vendor.p({
      ["background-color"]: "#fff",
      animation: "true"
    }),
    n: common_vendor.t($data.goodsDetail.price),
    o: common_vendor.t($data.goodsDetail.spec),
    p: common_vendor.t($data.goodsDetail.weight),
    q: common_vendor.t($data.goodsDetail.brief),
    r: common_vendor.t($data.goodsDetail.frenchBrief),
    s: common_vendor.f($data.mater, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: item.id
      };
    }),
    t: common_vendor.f($data.basic, (item, index, i0) => {
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
    v: common_vendor.t($data.list.spec),
    w: common_vendor.t($data.list.weight),
    x: common_vendor.o(($event) => $options.toggle("bottom")),
    y: $data.goodsDetail.img,
    z: common_vendor.t($data.goodsDetail.name),
    A: common_vendor.t($data.goodsDetail.french),
    B: common_vendor.t($data.goodsDetail.price),
    C: common_vendor.t($data.goodsDetail.saleTotal),
    D: common_vendor.t($data.goodsDetail.spec),
    E: common_vendor.t($data.goodsDetail.weight),
    F: $data.list.tableware
  }, $data.list.tableware ? {
    G: common_vendor.t($data.list.tableware)
  } : {}, {
    H: $data.list.candle
  }, $data.list.candle ? {
    I: common_vendor.t($data.list.candle)
  } : {}, {
    J: $data.list.edible
  }, $data.list.edible ? {
    K: common_vendor.t($data.list.edible)
  } : {}, {
    L: $data.list.size
  }, $data.list.size ? {
    M: common_vendor.t($data.list.size)
  } : {}, {
    N: common_vendor.o($options.changeValue),
    O: common_vendor.o((...args) => $options.addMoreCarts && $options.addMoreCarts(...args)),
    P: common_vendor.sr("popup1", "33747cf6-1"),
    Q: common_vendor.o($options.change),
    R: common_vendor.o($options.moveHandle),
    S: common_vendor.p({
      ["background-color"]: "#fff",
      animation: "true"
    }),
    T: $data.list.tableware
  }, $data.list.tableware ? {
    U: common_vendor.t($data.list.tableware)
  } : {}, {
    V: $data.list.candle
  }, $data.list.candle ? {
    W: common_vendor.t($data.list.candle)
  } : {}, {
    X: $data.list.edible
  }, $data.list.edible ? {
    Y: common_vendor.t($data.list.edible)
  } : {}, {
    Z: $data.list.size
  }, $data.list.size ? {
    aa: common_vendor.t($data.list.size)
  } : {}, {
    ab: common_vendor.t($data.time),
    ac: $data.goodsDetail.shopDesc
  }, $data.goodsDetail.shopDesc ? {
    ad: $data.goodsDetail.shopDesc
  } : {}, {
    ae: $data.goTop
  }, $data.goTop ? {
    af: common_vendor.o((...args) => $options.toTop && $options.toTop(...args))
  } : {}, {
    ag: common_vendor.o($options.onOptionsClick),
    ah: common_vendor.o($options.onbuttonClick),
    ai: common_vendor.p({
      fill: true,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-33747cf6"], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/MCAKE/Macke/pages/lanmin_detail/lanmin_detail.vue"]]);
_sfc_main.__runtimeHooks = 3;
wx.createPage(MiniProgramPage);
