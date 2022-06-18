"use strict";
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "comments",
  props: ["twoId", "comments"],
  emits: ["goType"],
  data() {
    return {
      commentTag: [],
      activeKey: 0
    };
  },
  methods: {
    async getCommentTag(twoId) {
      let result = await common_js_requestHttp.GetRequest("/api/comment/total?twoId=" + twoId);
      result.code === 0 ? this.commentTag = result.data.list : "";
    },
    goType(type, idx) {
      this.$emit("goType", type);
      this.activeKey = idx;
    }
  },
  created() {
    this.getCommentTag(this.twoId);
  },
  updated() {
    this.getCommentTag(this.twoId);
  }
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.commentTag, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.total),
        c: common_vendor.n({
          active: $data.activeKey === index
        }),
        d: item.title,
        e: common_vendor.o(($event) => $options.goType(item.type, index), item.title)
      };
    }),
    b: common_vendor.f($props.comments, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.content),
        b: common_vendor.t(item.spec),
        c: item.img && item.img.length > 0
      }, item.img && item.img.length > 0 ? {
        d: common_vendor.f(item.img, (img, k1, i1) => {
          return {
            a: img.src,
            b: img.src
          };
        })
      } : {}, {
        e: item.cid,
        f: "10c9fc84-0-" + i0,
        g: common_vendor.p({
          isFull: true,
          title: item.uname,
          ["sub-title"]: "",
          extra: item.ctime,
          thumbnail: item.uhead
        })
      });
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-10c9fc84"], ["__file", "D:/2022_03file/hx/Project/Macke/components/comments/comments.vue"]]);
wx.createComponent(Component);
