"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      one: 1,
      fontNum: 0,
      formData: {
        name: "",
        tel: "",
        msg: ""
      },
      rules: {
        msg: {
          rules: [
            {
              required: true,
              errorMessage: "\u8BF7\u63CF\u8FF0\u95EE\u9898"
            },
            {
              minLength: 8,
              maxLength: 200,
              errorMessage: "\u95EE\u9898\u63CF\u8FF0\u5FC5\u987B {minLength} \u5230 {maxLength} \u4E2A\u5B57\u7B26"
            }
          ]
        },
        name: {
          rules: [{
            required: true,
            errorMessage: "\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA"
          }]
        },
        tel: {
          rules: [{
            required: true,
            errorMessage: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
          }]
        }
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((res) => {
        console.log("\u8868\u5355\u6570\u636E\u4FE1\u606F\uFF1A", res);
      }).catch((err) => {
        console.log("\u8868\u5355\u9519\u8BEF\u4FE1\u606F\uFF1A", err);
      });
    },
    sumfontnum(e) {
      console.log(e.length);
      this.fontNum = e.length;
    },
    backTo() {
      common_vendor.index.navigateBack({});
    }
  }
};
if (!Array) {
  const _component_header_nav = common_vendor.resolveComponent("header-nav");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_component_header_nav + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.backTo && $options.backTo(...args)),
    b: common_vendor.p({
      one: $data.one
    }),
    c: common_vendor.o($options.sumfontnum),
    d: common_vendor.o(($event) => $data.formData.msg = $event),
    e: common_vendor.p({
      type: "textarea",
      placeholder: "\u6211\u5E0C\u671B\u52A0\u5165XXXX\u529F\u80FD,\u56E0\u4E3AXX\u60C5\u51B5\u4E0B,\u4F1A\u51FA\u73B0XX\u5F02\u5E38",
      maxlength: "200",
      modelValue: $data.formData.msg
    }),
    f: common_vendor.t($data.fontNum),
    g: common_vendor.p({
      label: "\u95EE\u9898\u63CF\u8FF0",
      name: "msg"
    }),
    h: common_vendor.o(($event) => $data.formData.name = $event),
    i: common_vendor.p({
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA",
      modelValue: $data.formData.name
    }),
    j: common_vendor.p({
      label: "\u8054\u7CFB\u4EBA",
      name: "name"
    }),
    k: common_vendor.o(($event) => $data.formData.tel = $event),
    l: common_vendor.p({
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",
      modelValue: $data.formData.tel
    }),
    m: common_vendor.p({
      label: "\u8054\u7CFB\u7535\u8BDD",
      name: "tel"
    }),
    n: common_vendor.sr("form", "2df4e250-1"),
    o: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    p: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2df4e250"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/zhaojing/question.vue"]]);
wx.createPage(MiniProgramPage);
