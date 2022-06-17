"use strict";
var common_vendor = require("../../../common/vendor.js");
var common_js_requestHttp = require("../../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      datalist: {},
      banner: {},
      comment: {},
      total: {},
      activeKey: 0,
      active: 0,
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
          backgroundColor: "#fff566",
          color: "#333"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#bae7ff",
          color: "#333"
        }
      ]
    };
  },
  created() {
  },
  onLoad(options) {
    this.getDetails(options.id);
  },
  methods: {
    async getDetails(id) {
      let result = await common_js_requestHttp.GetRequest("/api/goods/detail?id=" + id);
      result.code == 0 ? this.datalist = result.data : "";
      this.banner = this.datalist.banner;
      this.getComment(this.datalist.twoId);
      this.getTotal(this.datalist.twoId);
    },
    async getTotal(twoId) {
      let result = await common_js_requestHttp.GetRequest(`/api/comment/total?twoId=${twoId}`);
      result.code == 0 ? this.total = result.data : "";
    },
    async getComment(twoId) {
      let result = await common_js_requestHttp.GetRequest(`/api/comment/load?twoId=${twoId}&type=0&page=1&count=3`);
      result.code == 0 ? this.comment = result.data : "";
    },
    async goTotal(twoId, type) {
      this.activeKey = type;
      let result = await common_js_requestHttp.GetRequest(`/api/comment/load?twoId=${twoId}&type=${type}&page=1&count=3`);
      result.code == 0 ? this.comment = result.data : "";
    },
    goAllTotal(twoId) {
      common_vendor.index.navigateTo({
        url: `/pages/chenrenjun/alltotal/alltotal?twoId=${twoId}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  const _component_car_view = common_vendor.resolveComponent("car-view");
  (_easycom_uni_icons2 + _easycom_uni_goods_nav2 + _component_car_view)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_goods_nav = () => "../../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.banner, (item, index, i0) => {
      return {
        a: item,
        b: item.mainId
      };
    }),
    b: common_vendor.t($data.datalist.name),
    c: common_vendor.t($data.datalist.french),
    d: common_vendor.t($data.datalist.price),
    e: common_vendor.t($data.datalist.spec),
    f: common_vendor.t($data.datalist.weight),
    g: common_vendor.t($data.datalist.brief),
    h: common_vendor.t($data.datalist.frenchBrief),
    i: common_vendor.f($data.datalist.mater, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: item.id
      };
    }),
    j: common_vendor.f($data.datalist.basic, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.title),
        b: item.value === "1" || item.value == "2" || item.value == "3"
      }, item.value === "1" || item.value == "2" || item.value == "3" ? {
        c: common_vendor.f(parseInt(item.value), (bbt, k1, i1) => {
          return {
            a: bbt
          };
        })
      } : {
        d: common_vendor.t(item.value)
      }, {
        e: item.id
      });
    }),
    k: common_vendor.t($data.datalist.spec),
    l: common_vendor.t($data.datalist.weight),
    m: common_vendor.t($data.datalist.tableware),
    n: common_vendor.t($data.datalist.candle),
    o: common_vendor.t($data.datalist.edible),
    p: common_vendor.t($data.datalist.size),
    q: common_vendor.t($data.datalist.sendStartDate),
    r: common_vendor.t($data.datalist.sendStartTime),
    s: $data.total.total != 0
  }, $data.total.total != 0 ? {
    t: common_vendor.t($data.total.total),
    v: common_vendor.o(($event) => $options.goAllTotal($data.datalist.twoId)),
    w: common_vendor.p({
      type: "forward",
      size: "16",
      color: "#888"
    }),
    x: common_vendor.f($data.total.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.total),
        c: common_vendor.n({
          active: $data.activeKey === item.type
        }),
        d: item.type,
        e: common_vendor.o(($event) => $options.goTotal($data.datalist.twoId, item.type), item.type)
      };
    }),
    y: common_vendor.f($data.comment.data, (item, k0, i0) => {
      return {
        a: item.uhead,
        b: common_vendor.t(item.uname),
        c: common_vendor.t(item.ctime),
        d: common_vendor.t(item.content),
        e: common_vendor.t(item.spec),
        f: common_vendor.f(item.img, (i, k1, i1) => {
          return {
            a: i.src,
            b: i
          };
        }),
        g: item.cid
      };
    })
  } : {}, {
    z: $data.datalist.wapDesc,
    A: common_vendor.o(_ctx.onClick),
    B: common_vendor.o(_ctx.buttonClick),
    C: common_vendor.p({
      fill: true,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    }),
    D: common_vendor.sr("popup4", "6191eb62-2"),
    E: common_vendor.p({
      contentDatas: _ctx.contentDatas
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6191eb62"], ["__file", "E:/vscode/\u524D\u7AEF/uni-app-06-13/Macke/pages/chenrenjun/mcakedetails/mcakedetails.vue"]]);
wx.createPage(MiniProgramPage);
