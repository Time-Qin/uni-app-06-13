"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      talkeDatas: [],
      titleDatas: [],
      twoId: 0,
      typeId: 0,
      pageIndex: 1,
      newData: [],
      changeIndex: 0
    };
  },
  onLoad(options) {
    console.log(options, "111111111", this.newData);
    this.getTalkeDatas(options);
  },
  methods: {
    async getTalkeDatas(twoId) {
      this.twoId = twoId;
      let result3 = await common_js_requestHttp.GetRequest(`/api/comment/load?twoId=${twoId.twoId}&type=0&page=1&count=10`);
      result3.msg === "Success" ? this.talkeDatas = result3.data : "";
      let result4 = await common_js_requestHttp.GetRequest(`/api/comment/total?twoId=${twoId.twoId}`);
      result4.msg === "Success" ? this.titleDatas = result4.data : "";
      console.log(result3, this.talkeDatas, this.titleDatas);
    },
    backTo() {
      common_vendor.index.navigateBack({});
    },
    async changeTitle(typeId, idx) {
      if (this.changeIndex === idx)
        return false;
      this.typeId = typeId;
      this.pageIndex = 1;
      this.newData = [];
      let result3 = await common_js_requestHttp.GetRequest(`/api/comment/load?twoId=${this.twoId.twoId}&type=${typeId}&page=${this.pageIndex}&count=10`);
      result3.msg === "Success" ? this.newData = result3.data.data : "";
      console.log(this.newData, result3.data);
    }
  },
  async onReachBottom() {
    this.pageIndex++;
    let result3 = await common_js_requestHttp.GetRequest(`/api/comment/load?twoId=${this.twoId.twoId}&type=${this.typeId}&page=${this.pageIndex}&count=10`);
    result3.msg === "Success" ? this.newData = [...this.newData, ...result3.data.data] : "";
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.backTo && $options.backTo(...args)),
    b: common_vendor.f($data.titleDatas.list, (item, idx, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.total),
        c: common_vendor.o(($event) => $options.changeTitle(item.type, idx)),
        d: common_vendor.n({
          active: $data.changeIndex === idx
        }),
        e: item.title,
        f: common_vendor.o(($event) => $data.changeIndex = idx, item.title)
      };
    }),
    c: common_vendor.f($data.newData.length == 0 ? $data.talkeDatas.data : $data.newData, (item, k0, i0) => {
      return common_vendor.e({
        a: item.uhead,
        b: common_vendor.t(item.uname),
        c: common_vendor.t(item.ctime),
        d: common_vendor.t(item.content),
        e: item.img != ""
      }, item.img != "" ? {
        f: common_vendor.f(item.img, (i, k1, i1) => {
          return {
            a: i.src,
            b: i
          };
        })
      } : {}, {
        g: common_vendor.t(item.spec),
        h: item.cid
      });
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c55ea85a"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/index/talke.vue"]]);
wx.createPage(MiniProgramPage);
