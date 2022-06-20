"use strict";
var common_js_requestHttp = require("../../../common/js/requestHttp.js");
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      orders: {},
      goods: {},
      master: {},
      member: {},
      checked: false
    };
  },
  created() {
    this.getOrder();
  },
  methods: {
    async getOrder() {
      let result = await common_js_requestHttp.GetRequestToken("/api/checkout/load");
      console.log(result);
      result.code == 0 ? this.orders = result.data : "";
      this.goods = this.orders.goods;
      this.master = this.orders.master;
      console.log(this.master);
      this.member = this.orders.member;
      console.log(this.member);
    },
    onChecked() {
      this.checked = !this.checked;
    },
    toggle() {
      this.$refs.popup.open();
    },
    toTips() {
      this.$refs.popup1.open();
    },
    toPoints() {
      this.$refs.popup2.open();
    },
    close() {
      this.$refs.popup.close();
      this.$refs.popup1.close();
      this.$refs.popup2.close();
    },
    onClick(e, value) {
    }
  }
};
if (!Array) {
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_notice_bar2 + _easycom_uni_list_item2 + _easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_notice_bar = () => "../../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_notice_bar + _easycom_uni_list_item + _easycom_uni_icons + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      text: "\u6E29\u99A8\u63D0\u793A:\u7531\u4E8E\u75AB\u60C5\u56E2\u8D2D\u4E3A\u7279\u6B8A\u65F6\u671F,\u86CB\u7CD5\u4FDD\u6E29\u5305\u5747\u514D\u8D39\u8D60\u9001,\u73B0\u6062\u590D\u5E38\u89C4\u914D\u9001,\u5982\u6709\u9700\u6C42\u5219\u9700\u4ED8\u8D39\u8D2D\u4E70,\u671B\u7406\u89E3"
    }),
    b: common_vendor.f($data.orders.send_type, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id
      };
    }),
    c: common_vendor.o(($event) => $options.onClick($event, 1)),
    d: common_vendor.p({
      link: "reLaunch",
      to: "/pages/vue/index/index"
    }),
    e: common_vendor.f($data.goods, (item, k0, i0) => {
      return common_vendor.e({
        a: item.img,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.spec),
        d: common_vendor.t(item.weight),
        e: item.tableware
      }, item.tableware ? {
        f: common_vendor.t(item.tableware),
        g: common_vendor.o((...args) => $options.toggle && $options.toggle(...args))
      } : {}, {
        h: item.candle
      }, item.candle ? {
        i: common_vendor.t(item.candle),
        j: common_vendor.o((...args) => $options.toggle && $options.toggle(...args))
      } : {}, {
        k: common_vendor.t(item.price),
        l: common_vendor.t(item.num),
        m: "1ea3ec8f-2-" + i0,
        n: "1ea3ec8f-3-" + i0,
        o: item.id
      });
    }),
    f: common_vendor.o(($event) => $options.onClick($event, 1)),
    g: common_vendor.p({
      to: "/pages/vue/index/index"
    }),
    h: common_vendor.t($data.master.goodsAmount),
    i: common_vendor.t($data.master.postAmount),
    j: $data.member.card === 0
  }, $data.member.card === 0 ? {} : {
    k: common_vendor.t($data.member.card)
  }, {
    l: $data.member.coupon === 0
  }, $data.member.coupon === 0 ? {} : {
    m: common_vendor.t($data.member.coupon)
  }, {
    n: common_vendor.t($data.member.balance),
    o: common_vendor.o($options.toTips),
    p: common_vendor.p({
      type: "info",
      size: "20"
    }),
    q: $data.member.balance === 0
  }, $data.member.balance === 0 ? {} : {
    r: common_vendor.t($data.member.balance)
  }, {
    s: common_vendor.t($data.member.points),
    t: common_vendor.o($options.toPoints),
    v: common_vendor.p({
      type: "info",
      size: "20"
    }),
    w: $data.checked === true
  }, $data.checked === true ? {
    x: common_vendor.t($data.member.pointsAmount)
  } : {}, {
    y: common_vendor.o((...args) => $options.onChecked && $options.onChecked(...args)),
    z: $data.checked,
    A: $data.checked === true
  }, $data.checked === true ? {
    B: common_vendor.t($data.master.receivableAmount)
  } : {
    C: common_vendor.t($data.master.goodsAmount)
  }, {
    D: common_vendor.o(($event) => $options.onClick($event, 1)),
    E: common_vendor.p({
      link: "reLaunch",
      to: "/pages/chenrenjun/invoicing/invoicing"
    }),
    F: common_vendor.o(($event) => $options.onClick($event, 1)),
    G: common_vendor.p({
      link: "reLaunch"
    }),
    H: $data.checked === true
  }, $data.checked === true ? {
    I: common_vendor.t($data.master.receivableAmount)
  } : {
    J: common_vendor.t($data.master.goodsAmount)
  }, {
    K: common_vendor.o((...args) => $options.close && $options.close(...args)),
    L: common_vendor.sr("popup", "1ea3ec8f-8"),
    M: common_vendor.p({
      ["background-color"]: "#fff"
    }),
    N: common_vendor.o((...args) => $options.close && $options.close(...args)),
    O: common_vendor.sr("popup1", "1ea3ec8f-9"),
    P: common_vendor.p({
      ["background-color"]: "#fff"
    }),
    Q: common_vendor.o((...args) => $options.close && $options.close(...args)),
    R: common_vendor.sr("popup2", "1ea3ec8f-10"),
    S: common_vendor.p({
      ["background-color"]: "#fff"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1ea3ec8f"], ["__file", "E:/vscode/\u524D\u7AEF/uni-app-06-13/Macke/pages/chenrenjun/placeorder/placeorder.vue"]]);
wx.createPage(MiniProgramPage);
