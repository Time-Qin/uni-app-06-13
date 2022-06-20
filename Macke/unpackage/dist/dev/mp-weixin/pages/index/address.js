"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      addressDatas: [],
      city: "",
      inputV: "",
      myAddress: ""
    };
  },
  created() {
    this.getAddress();
  },
  computed() {
  },
  methods: {
    async getAddress() {
      let result = await common_js_requestHttp.GetRequest("/api/region/city");
      result.msg === "Success" ? this.addressDatas = result.data : "";
      console.log(result);
    },
    backTo() {
      common_vendor.index.navigateBack();
    },
    changeAddress() {
      this.$refs.popup.open();
    },
    close() {
      this.$refs.popup.close();
    },
    getGPS() {
      common_vendor.index.getLocation({
        type: "wgs84",
        success: (res) => {
          var getAddressUrl = "https://apis.map.qq.com/ws/geocoder/v1/?location=" + res.latitude + "," + res.longitude + "&key=U5SBZ-5RA3Q-4LK5M-GKWJY-ULARS-6HFIH&get_poi:1";
          console.log(res, getAddressUrl);
          common_vendor.index.request({
            url: getAddressUrl,
            method: "GET",
            success: (res2) => {
              this.myAddress = res2.data.result;
              console.log(res2);
            }
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.backTo && $options.backTo(...args)),
    b: common_vendor.t($data.city || "\u8BF7\u9009\u62E9\u57CE\u5E02"),
    c: common_vendor.o((...args) => $options.changeAddress && $options.changeAddress(...args)),
    d: $data.inputV,
    e: common_vendor.t($data.myAddress.address || "\u8BF7\u9009\u62E9\u6536\u83B7\u5730\u5740"),
    f: common_vendor.o((...args) => $options.getGPS && $options.getGPS(...args)),
    g: common_vendor.f($data.addressDatas, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.o(($event) => $data.city = item.name, item.id),
        c: item.id
      };
    }),
    h: common_vendor.o((...args) => $options.close && $options.close(...args)),
    i: common_vendor.sr("popup", "0630f88e-0"),
    j: common_vendor.p({
      type: "bottom"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0630f88e"], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/Mcake/Macke/pages/index/address.vue"]]);
wx.createPage(MiniProgramPage);
