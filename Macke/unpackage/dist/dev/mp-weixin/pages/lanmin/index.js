"use strict";
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentGoods: [],
      goods: [],
      list: [],
      active: 0,
      flag: true,
      activeKey: 0
    };
  },
  created() {
    this.initGoods();
  },
  methods: {
    async initGoods() {
      let result = await common_js_requestHttp.GetRequest("/api/goods/category");
      result.code === 0 ? this.currentGoods = result.data : "";
      this.currentGoods[0].list.unshift({
        "bid": "1",
        "tgid": "1",
        "tid": "0",
        "tname": "\u5168\u90E8"
      });
      this.list = this.currentGoods[0].list;
      this.getGoods(0, 1);
    },
    async getGoods(idx, bid) {
      this.active = idx;
      let result = await common_js_requestHttp.GetRequest("/api/goods/load?bid=" + bid);
      result.code === 0 ? this.goods = result.data.data : "";
      if (idx !== 0) {
        this.flag = false;
      } else {
        this.flag = true;
        let result1 = await common_js_requestHttp.GetRequest("/api/goods/load?bid=" + bid + "&page=2");
        result1.code === 0 ? this.goods = [...this.goods, ...result1.data.data] : "";
      }
    },
    async getGoodsGroup(idx, fid) {
      this.activeKey = idx;
      if (fid == 0) {
        this.getGoods(0, 1);
      } else {
        let result = await common_js_requestHttp.GetRequest("/api/goods/load?bid=1&fid=" + fid);
        console.log(result, fid);
        result.code === 0 ? this.goods = result.data.data : "";
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.currentGoods, (item, index, i0) => {
      return {
        a: common_vendor.t(item.bname),
        b: common_vendor.n({
          active: $data.active === index
        }),
        c: index,
        d: common_vendor.o(($event) => $options.getGoods(index, item.bid))
      };
    }),
    b: $data.flag
  }, $data.flag ? {
    c: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.tname),
        b: common_vendor.n({
          active: $data.activeKey === index
        }),
        c: item.id,
        d: common_vendor.o(($event) => $options.getGoodsGroup(index, item.tid), item.id)
      };
    })
  } : {}, {
    d: common_vendor.n($data.flag ? "large-pad" : "small-pad"),
    e: common_vendor.f($data.goods, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.french),
        d: common_vendor.t(item.price),
        e: "768f9f56-0-" + i0,
        f: item.title,
        g: common_vendor.o(($event) => _ctx.goDetail(item.id), item.title)
      };
    }),
    f: common_vendor.p({
      type: "cart",
      size: "30"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-768f9f56"], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/MCAKE/Macke/pages/lanmin/index.vue"]]);
wx.createPage(MiniProgramPage);
