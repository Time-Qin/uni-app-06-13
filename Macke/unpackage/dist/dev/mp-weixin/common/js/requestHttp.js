"use strict";
var common_vendor = require("../vendor.js");
const BaseUrl = "https://interface.mcake.com";
function GetRequest(url, data) {
  return new Promise((resolve, reject) => {
    url = BaseUrl + url;
    common_vendor.index.request({
      url,
      method: "GET",
      data,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {
      }
    });
  });
}
exports.GetRequest = GetRequest;
