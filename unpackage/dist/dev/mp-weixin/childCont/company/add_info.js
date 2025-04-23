(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["childCont/company/add_info"],{

/***/ 1288:
/*!******************************************************************************!*\
  !*** F:/G/company/umi-git/main.js?{"page":"childCont%2Fcompany%2Fadd_info"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _add_info = _interopRequireDefault(__webpack_require__(/*! ./childCont/company/add_info.vue */ 1289));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_add_info.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 1289:
/*!***********************************************************!*\
  !*** F:/G/company/umi-git/childCont/company/add_info.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_info_vue_vue_type_template_id_7a87e8ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_info.vue?vue&type=template&id=7a87e8ed&scoped=true& */ 1290);
/* harmony import */ var _add_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_info.vue?vue&type=script&lang=js& */ 1292);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _add_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _add_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _add_info_vue_vue_type_style_index_0_id_7a87e8ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_info.vue?vue&type=style&index=0&id=7a87e8ed&lang=less&scoped=true& */ 1294);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_info_vue_vue_type_template_id_7a87e8ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_info_vue_vue_type_template_id_7a87e8ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7a87e8ed",
  null,
  false,
  _add_info_vue_vue_type_template_id_7a87e8ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "childCont/company/add_info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1290:
/*!******************************************************************************************************!*\
  !*** F:/G/company/umi-git/childCont/company/add_info.vue?vue&type=template&id=7a87e8ed&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_template_id_7a87e8ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add_info.vue?vue&type=template&id=7a87e8ed&scoped=true& */ 1291);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_template_id_7a87e8ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_template_id_7a87e8ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_template_id_7a87e8ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_template_id_7a87e8ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1291:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/childCont/company/add_info.vue?vue&type=template&id=7a87e8ed&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    "u-Input": function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u--input/u--input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u--input/u--input")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u--input/u--input.vue */ 1827))
    },
    uIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 1802))
    },
    uTextarea: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-textarea/u-textarea */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-textarea/u-textarea")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-textarea/u-textarea.vue */ 1819))
    },
    uPicker: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-picker/u-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-picker/u-picker")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-picker/u-picker.vue */ 1980))
    },
    uModal: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-modal/u-modal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-modal/u-modal")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-modal/u-modal.vue */ 1898))
    },
    uInput: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-input/u-input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-input/u-input")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-input/u-input.vue */ 1928))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 =
    _vm.current == 1
      ? _vm.__map(_vm.wxImg, function (val, index) {
          var $orig = _vm.__get_orig(val)
          var m0 = _vm.getImgUrl(val.file_url)
          return {
            $orig: $orig,
            m0: m0,
          }
        })
      : null
  var g0 = _vm.current == 1 ? _vm.wxImg.length : null
  var m1 =
    _vm.current == 1 && g0 == 0 ? __webpack_require__(/*! @/static/user/upload.png */ 437) : null
  var l1 =
    _vm.current == 1
      ? _vm.__map(_vm.gzhImg, function (val, index) {
          var $orig = _vm.__get_orig(val)
          var m2 = _vm.getImgUrl(val.file_url)
          return {
            $orig: $orig,
            m2: m2,
          }
        })
      : null
  var g1 = _vm.current == 1 ? _vm.gzhImg.length : null
  var m3 =
    _vm.current == 1 && g1 == 0 ? __webpack_require__(/*! @/static/user/upload.png */ 437) : null
  var l2 =
    _vm.current == 1
      ? _vm.__map(_vm.logoImg, function (val, index) {
          var $orig = _vm.__get_orig(val)
          var m4 = _vm.getImgUrl(val.file_url)
          return {
            $orig: $orig,
            m4: m4,
          }
        })
      : null
  var g2 = _vm.current == 1 ? _vm.logoImg.length : null
  var m5 =
    _vm.current == 1 && g2 == 0 ? __webpack_require__(/*! @/static/user/upload.png */ 437) : null
  var l3 =
    _vm.current == 1
      ? _vm.__map(_vm.companyImg, function (val, index) {
          var $orig = _vm.__get_orig(val)
          var m6 = _vm.getImgUrl(val.file_url)
          return {
            $orig: $orig,
            m6: m6,
          }
        })
      : null
  var g3 = _vm.current == 1 ? _vm.companyImg.length : null
  var m7 =
    _vm.current == 1 && g3 < 10 ? __webpack_require__(/*! @/static/user/upload.png */ 437) : null
  var g4 = _vm.current == 1 ? _vm.fileList.length : null
  var g5 = _vm.current == 1 ? _vm.fileList.length : null
  var g6 = _vm.current == 1 ? _vm.fileImg.length : null
  var g7 = _vm.current == 1 ? _vm.fileImg.length : null
  var l4 =
    _vm.current == 1 && g7 > 0
      ? _vm.__map(_vm.fileImg, function (val, index) {
          var $orig = _vm.__get_orig(val)
          var m8 = _vm.getImgUrl(val.file_url)
          return {
            $orig: $orig,
            m8: m8,
          }
        })
      : null
  var g8 = _vm.current == 1 ? _vm.vidioList.length : null
  var g9 = _vm.current == 1 ? _vm.vidioList.length : null
  var l5 =
    _vm.current == 1 && g9 > 0
      ? _vm.__map(_vm.vidioList, function (val, index) {
          var $orig = _vm.__get_orig(val)
          var m9 = _vm.getImgUrl(val.file_url)
          return {
            $orig: $orig,
            m9: m9,
          }
        })
      : null
  var g10 = _vm.current == 1 ? _vm.company_website.length : null
  var l9 =
    _vm.current == 2
      ? _vm.__map(_vm.project_list, function (item, tip) {
          var $orig = _vm.__get_orig(item)
          var l6 = _vm.__map(item.project_image_list, function (val, index) {
            var $orig = _vm.__get_orig(val)
            var m10 = _vm.getImgUrl(val.file_url)
            return {
              $orig: $orig,
              m10: m10,
            }
          })
          var g11 = item.project_image_list.length
          var m11 = g11 < 10 ? __webpack_require__(/*! @/static/user/upload.png */ 437) : null
          var g12 = item.file_list.length
          var g13 = item.file_list.length
          var g14 = item.image_list.length
          var g15 = item.image_list.length
          var l7 =
            g15 > 0
              ? _vm.__map(item.image_list, function (val, index) {
                  var $orig = _vm.__get_orig(val)
                  var m12 = _vm.getImgUrl(val.file_url)
                  return {
                    $orig: $orig,
                    m12: m12,
                  }
                })
              : null
          var g16 = item.vlog_list.length
          var g17 = item.vlog_list.length
          var l8 =
            g17 > 0
              ? _vm.__map(item.vlog_list, function (val, index) {
                  var $orig = _vm.__get_orig(val)
                  var m13 = _vm.getImgUrl(val.file_url)
                  return {
                    $orig: $orig,
                    m13: m13,
                  }
                })
              : null
          var g18 = item.website_list.length
          return {
            $orig: $orig,
            l6: l6,
            g11: g11,
            m11: m11,
            g12: g12,
            g13: g13,
            g14: g14,
            g15: g15,
            l7: l7,
            g16: g16,
            g17: g17,
            l8: l8,
            g18: g18,
          }
        })
      : null
  var l13 =
    _vm.current == 3
      ? _vm.__map(_vm.info, function (item, tip) {
          var $orig = _vm.__get_orig(item)
          var l10 = _vm.__map(
            item.information_image_list,
            function (val, index) {
              var $orig = _vm.__get_orig(val)
              var m14 = _vm.getImgUrl(val.file_url)
              return {
                $orig: $orig,
                m14: m14,
              }
            }
          )
          var g19 = item.information_image_list.length
          var m15 = g19 < 10 ? __webpack_require__(/*! @/static/user/upload.png */ 437) : null
          var g20 = item.file_list.length
          var g21 = item.file_list.length
          var g22 = item.image_list.length
          var g23 = item.image_list.length
          var l11 =
            g23 > 0
              ? _vm.__map(item.image_list, function (val, index) {
                  var $orig = _vm.__get_orig(val)
                  var m16 = _vm.getImgUrl(val.file_url)
                  return {
                    $orig: $orig,
                    m16: m16,
                  }
                })
              : null
          var g24 = item.vlog_list.length
          var g25 = item.vlog_list.length
          var l12 =
            g25 > 0
              ? _vm.__map(item.vlog_list, function (val, index) {
                  var $orig = _vm.__get_orig(val)
                  var m17 = _vm.getImgUrl(val.file_url)
                  return {
                    $orig: $orig,
                    m17: m17,
                  }
                })
              : null
          var g26 = item.website_list.length
          return {
            $orig: $orig,
            l10: l10,
            g19: g19,
            m15: m15,
            g20: g20,
            g21: g21,
            g22: g22,
            g23: g23,
            l11: l11,
            g24: g24,
            g25: g25,
            l12: l12,
            g26: g26,
          }
        })
      : null
  var l15 =
    _vm.current == 4
      ? _vm.__map(_vm.knowInfo, function (item, tip) {
          var $orig = _vm.__get_orig(item)
          var g27 = item.file_list.length
          var g28 = item.file_list.length
          var g29 = item.image_list.length
          var g30 = item.image_list.length
          var l14 =
            g30 > 0
              ? _vm.__map(item.image_list, function (val, index) {
                  var $orig = _vm.__get_orig(val)
                  var m18 = _vm.getImgUrl(val.file_url)
                  return {
                    $orig: $orig,
                    m18: m18,
                  }
                })
              : null
          var g31 = item.website_list.length
          return {
            $orig: $orig,
            g27: g27,
            g28: g28,
            g29: g29,
            g30: g30,
            l14: l14,
            g31: g31,
          }
        })
      : null
  var a0 = {
    padding: "8px",
    width: "100%",
  }
  if (!_vm._isMounted) {
    _vm.e0 = function ($event, index) {
      var _temp = arguments[arguments.length - 1].currentTarget.dataset,
        _temp2 = _temp.eventParams || _temp["event-params"],
        index = _temp2.index
      var _temp, _temp2
      return _vm.wxImg.splice(index, 1)
    }
    _vm.e1 = function ($event, index) {
      var _temp3 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp4 = _temp3.eventParams || _temp3["event-params"],
        index = _temp4.index
      var _temp3, _temp4
      return _vm.gzhImg.splice(index, 1)
    }
    _vm.e2 = function ($event, index) {
      var _temp5 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp6 = _temp5.eventParams || _temp5["event-params"],
        index = _temp6.index
      var _temp5, _temp6
      return _vm.logoImg.splice(index, 1)
    }
    _vm.e3 = function ($event, index) {
      var _temp7 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp8 = _temp7.eventParams || _temp7["event-params"],
        index = _temp8.index
      var _temp7, _temp8
      return _vm.companyImg.splice(index, 1)
    }
    _vm.e4 = function ($event, index) {
      var _temp9 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp10 = _temp9.eventParams || _temp9["event-params"],
        index = _temp10.index
      var _temp9, _temp10
      return _vm.fileList.splice(index, 1)
    }
    _vm.e5 = function ($event, index) {
      var _temp11 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp12 = _temp11.eventParams || _temp11["event-params"],
        index = _temp12.index
      var _temp11, _temp12
      return _vm.fileImg.splice(index, 1)
    }
    _vm.e6 = function ($event, index) {
      var _temp13 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp14 = _temp13.eventParams || _temp13["event-params"],
        index = _temp14.index
      var _temp13, _temp14
      return _vm.vidioList.splice(index, 1)
    }
    _vm.e7 = function ($event, index) {
      var _temp15 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp16 = _temp15.eventParams || _temp15["event-params"],
        index = _temp16.index
      var _temp15, _temp16
      return _vm.company_website.splice(index, 1)
    }
    _vm.e8 = function ($event, tip) {
      var _temp17 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp18 = _temp17.eventParams || _temp17["event-params"],
        tip = _temp18.tip
      var _temp17, _temp18
      return _vm.project_list.splice(tip, 1)
    }
    _vm.e9 = function ($event, tip, index) {
      var _temp19 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp20 = _temp19.eventParams || _temp19["event-params"],
        tip = _temp20.tip,
        index = _temp20.index
      var _temp19, _temp20
      return _vm.project_list[tip].project_image_list.splice(index, 1)
    }
    _vm.e10 = function ($event, tip, index) {
      var _temp21 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp22 = _temp21.eventParams || _temp21["event-params"],
        tip = _temp22.tip,
        index = _temp22.index
      var _temp21, _temp22
      return _vm.project_list[tip].file_list.splice(index, 1)
    }
    _vm.e11 = function ($event, tip, index) {
      var _temp23 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp24 = _temp23.eventParams || _temp23["event-params"],
        tip = _temp24.tip,
        index = _temp24.index
      var _temp23, _temp24
      return _vm.project_list[tip].image_list.splice(index, 1)
    }
    _vm.e12 = function ($event, tip, index) {
      var _temp25 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp26 = _temp25.eventParams || _temp25["event-params"],
        tip = _temp26.tip,
        index = _temp26.index
      var _temp25, _temp26
      return _vm.project_list[tip].vlog_list.splice(index, 1)
    }
    _vm.e13 = function ($event, tip, index) {
      var _temp27 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp28 = _temp27.eventParams || _temp27["event-params"],
        tip = _temp28.tip,
        index = _temp28.index
      var _temp27, _temp28
      return _vm.project_list[tip].website_list.splice(index, 1)
    }
    _vm.e14 = function ($event, tip) {
      var _temp29 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp30 = _temp29.eventParams || _temp29["event-params"],
        tip = _temp30.tip
      var _temp29, _temp30
      return _vm.info.splice(tip, 1)
    }
    _vm.e15 = function ($event, tip, index) {
      var _temp31 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp32 = _temp31.eventParams || _temp31["event-params"],
        tip = _temp32.tip,
        index = _temp32.index
      var _temp31, _temp32
      return _vm.info[tip].information_image_list.splice(index, 1)
    }
    _vm.e16 = function ($event, tip, index) {
      var _temp33 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp34 = _temp33.eventParams || _temp33["event-params"],
        tip = _temp34.tip,
        index = _temp34.index
      var _temp33, _temp34
      return _vm.info[tip].file_list.splice(index, 1)
    }
    _vm.e17 = function ($event, tip, index) {
      var _temp35 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp36 = _temp35.eventParams || _temp35["event-params"],
        tip = _temp36.tip,
        index = _temp36.index
      var _temp35, _temp36
      return _vm.info[tip].image_list.splice(index, 1)
    }
    _vm.e18 = function ($event, tip, index) {
      var _temp37 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp38 = _temp37.eventParams || _temp37["event-params"],
        tip = _temp38.tip,
        index = _temp38.index
      var _temp37, _temp38
      return _vm.info[tip].vlog_list.splice(index, 1)
    }
    _vm.e19 = function ($event, tip, index) {
      var _temp39 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp40 = _temp39.eventParams || _temp39["event-params"],
        tip = _temp40.tip,
        index = _temp40.index
      var _temp39, _temp40
      return _vm.info[tip].website_list.splice(index, 1)
    }
    _vm.e20 = function ($event, tip) {
      var _temp41 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp42 = _temp41.eventParams || _temp41["event-params"],
        tip = _temp42.tip
      var _temp41, _temp42
      return _vm.knowInfo.splice(tip, 1)
    }
    _vm.e21 = function ($event, tip, index) {
      var _temp43 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp44 = _temp43.eventParams || _temp43["event-params"],
        tip = _temp44.tip,
        index = _temp44.index
      var _temp43, _temp44
      return _vm.knowInfo[tip].file_list.splice(index, 1)
    }
    _vm.e22 = function ($event, item, index) {
      var _temp45 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp46 = _temp45.eventParams || _temp45["event-params"],
        item = _temp46.item,
        index = _temp46.index
      var _temp45, _temp46
      return item.image_list.splice(index, 1)
    }
    _vm.e23 = function ($event, tip, index) {
      var _temp47 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp48 = _temp47.eventParams || _temp47["event-params"],
        tip = _temp48.tip,
        index = _temp48.index
      var _temp47, _temp48
      return _vm.knowInfo[tip].website_list.splice(index, 1)
    }
    _vm.e24 = function ($event) {
      _vm.industryShow = false
    }
    _vm.e25 = function ($event) {
      _vm.hzShow = false
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g0: g0,
        m1: m1,
        l1: l1,
        g1: g1,
        m3: m3,
        l2: l2,
        g2: g2,
        m5: m5,
        l3: l3,
        g3: g3,
        m7: m7,
        g4: g4,
        g5: g5,
        g6: g6,
        g7: g7,
        l4: l4,
        g8: g8,
        g9: g9,
        l5: l5,
        g10: g10,
        l9: l9,
        l13: l13,
        l15: l15,
        a0: a0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1292:
/*!************************************************************************************!*\
  !*** F:/G/company/umi-git/childCont/company/add_info.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add_info.vue?vue&type=script&lang=js& */ 1293);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1293:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/childCont/company/add_info.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni, wx) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _user = __webpack_require__(/*! @/apis/user.js */ 172);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
      current: 1,
      // 第一步
      company_code: '',
      companyName: '',
      sortName: '',
      job: '',
      registeredAddress: '',
      companyDesc: '',
      companyWebsite: '',
      companyIcp: '',
      companyPhone: '',
      companyEmail: '',
      companyAddress: '',
      industryValue: '',
      industryIndex: '',
      industryShow: false,
      industryList: [],
      wxImg: [],
      //小程序二维码
      gzhImg: [],
      // 公众号二维码
      logoImg: [],
      // logo图片
      companyImg: [],
      // 公司图片
      fileImg: [],
      //文件图片
      vidioList: [],
      // 视频文件
      fileList: [],
      //文件
      company_website: [{
        file_url: ''
      }],
      // 第二步
      project_list: [{
        project_code: '',
        // 项目唯一编号，不传为创建，传了为修改，删除时将此字典删除
        category_name: '',
        // 类目名称
        project_name: '',
        // 项目名称
        brief_introduction: '',
        // 简介
        project_image_list: [],
        // 项目产品图，字段内容同上
        file_list: [],
        //文件图片
        vlog_list: [],
        // 视频文件
        image_list: [],
        //文件
        website_list: [{
          file_url: ''
        }]
      }],
      //第三步
      info: [{
        information_code: '',
        //资讯编号，不传为创建，传了为修改，删除时将此字典删除
        label: '',
        label_code: '',
        //资讯信息编号，下拉获取
        information_name: '',
        //资讯名称
        content_desc: '',
        //内容描述
        information_image_list: [],
        //资讯产品图，字段内容同上
        selectIndex: 0,
        infoShow: false,
        file_list: [],
        //文件图片
        vlog_list: [],
        // 视频文件
        image_list: [],
        //文件
        website_list: [{
          file_url: ''
        }]
      }],
      infoList: [],
      //第四步
      knowInfo: [{
        knowledge_code: '',
        category: '',
        category_name: '',
        title: '',
        content_desc: '',
        purpose: '',
        typeIndex: 0,
        file_list: [],
        //文件图片
        vlog_list: [],
        // 视频文件
        image_list: [],
        //文件
        website_list: [{
          file_url: ''
        }]
      }],
      tagName: '',
      tagShow: false,
      typeList: [],
      copyTypeList: [],
      // 复制分类列表

      // 商务合作
      hzShow: false,
      hzValue: '城市运营商',
      hzIndex: 0,
      userName: '',
      phone: '',
      remark: '',
      hzList: [[{
        label: "城市运营商",
        id: 1
      }, {
        label: "源码定制开发",
        id: 2
      }, {
        label: "API 接口",
        id: 3
      }]],
      leftImg: global.baseImg + '/xcx/24487314-1f72-473d-9886-57f8dbcb493a.jpg',
      rightImg: global.baseImg + '/xcx/3cf875c1-422f-43a0-88c9-ea9aa063f69e.jpg',
      backImg: 'background-image: url("' + global.baseImg + '/xcx/b98957ec-aba4-4bf5-88ca-c57d4255440b.jpg")',
      addImg: global.baseImg + '/xcx/01fece57-06c7-4eff-ab60-671230d86f80.jpg',
      delImg: global.baseImg + '/xcx/853ff4b9-283a-4917-b922-f2329cbcb562.jpg',
      isClick: true
    };
  },
  components: {},
  onLoad: function onLoad(option) {
    if (Object.keys(option).length > 0) {
      if (option.companyName) {
        this.companyName = option.companyName;
      }
      if (option.phone) {
        this.companyPhone = option.phone;
      }
      if (option.job) {
        this.job = option.job;
      }
      if (option.company_code) {
        this.company_code = option.company_code;
        this.current = 4;
      }
    }
    // this.getRetrieve()
    this.getLabel();
  },
  onShow: function onShow() {},
  methods: {
    // 获取行业、资讯、分类
    getLabel: function getLabel(index) {
      var _this = this;
      // let data = { label_type: index }
      (0, _user.getLabel)().then(function (res) {
        if (res.code == 20000) {
          _this.industryList = [];
          _this.industryList.push(res.data.industry);
          if (_this.company_code == '') {
            _this.industryValue = res.data.industry[0].label, _this.industryIndex = res.data.industry[0].label_code;
          }
          _this.infoList = [];
          _this.infoList.push(res.data.information);
          if (_this.info[0].information_code == '') {
            _this.info[0].label = res.data.information[0].label;
            _this.info[0].label_code = res.data.information[0].label_code;
          }
          _this.typeList = [];
          _this.typeList = res.data.category;
          _this.copyTypeList = res.data.category;
          if (_this.company_code != '') {
            _this.getRetrieve(_this.company_code);
          }
        } else {
          _this.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this.$api.msg('获取失败！');
      });
    },
    // 获取详情
    getRetrieve: function getRetrieve(code) {
      var _this2 = this;
      var val = {
        company_code: code
      };
      (0, _user.getRetrieve)(val).then(function (res) {
        if (res.code == 20000) {
          // 第一步
          if (res.data != null) {
            _this2.company_code = res.data.company_code;
            _this2.companyName = res.data.company_name;
            _this2.sortName = res.data.company_abbreviation;
            _this2.job = res.data.position;
            _this2.industryIndex = res.data.industry_code;
            _this2.industryValue = res.data.label;
            _this2.registeredAddress = res.data.registered_address;
            _this2.companyDesc = res.data.company_desc;
            _this2.companyWebsite = res.data.company_url;
            _this2.companyIcp = res.data.ipc_code;
            _this2.companyEmail = res.data.company_mailbox;
            _this2.companyAddress = res.data.company_address;
            _this2.companyPhone = res.data.company_mobile;
            _this2.wxImg = res.data.company_applet_list;
            _this2.gzhImg = res.data.company_official_account_list;
            _this2.logoImg = res.data.company_log_list;
            _this2.companyImg = res.data.company_image_list;
            _this2.fileList = res.data.file_list;
            _this2.fileImg = res.data.image_list;
            _this2.vidioList = res.data.vlog_list;
            if (res.data.website_list.length > 0) {
              _this2.company_website = res.data.website_list;
            } else {
              _this2.company_website = [{
                file_url: ''
              }];
            }

            // 第二步
            _this2.project_list = res.data.project_list; // 项目信息

            if (_this2.project_list.length > 0) {
              _this2.project_list.forEach(function (val, index) {
                // this.project_list[index].product_fileList = val.file_list;
                // this.project_list[index].product_fileImg = val.image_list;
                // this.project_list[index].product_vidioList = val.vlog_list;
                if (val.website_list.length > 0) {
                  _this2.project_list[index].website_list = val.website_list;
                } else {
                  _this2.project_list[index].website_list = [{
                    file_url: ''
                  }];
                }
              });
            } else {
              _this2.project_list = [{
                project_code: '',
                // 项目唯一编号，不传为创建，传了为修改，删除时将此字典删除
                category_name: '',
                // 类目名称
                project_name: '',
                // 项目名称
                brief_introduction: '',
                // 简介
                project_image_list: [],
                // 项目产品图，字段内容同上
                file_list: [],
                //文件图片
                vlog_list: [],
                // 视频文件
                image_list: [],
                //文件
                website_list: [{
                  file_url: ''
                }]
              }];
            }

            // 第三步
            _this2.info = res.data.information_list; // 项目信息
            if (_this2.info.length > 0) {
              _this2.info.forEach(function (val, index) {
                val.infoShow = false;
                // this.info[index].info_fileList = val.file_list;
                // this.info[index].info_fileImg = val.image_list;
                // this.info[index].info_vidioList = val.vlog_list;
                if (val.website_list.length > 0) {
                  _this2.info[index].website_list = val.website_list;
                } else {
                  _this2.info[index].website_list = [{
                    file_url: ''
                  }];
                }
              });
            } else {
              _this2.info = [{
                information_code: '',
                //资讯编号，不传为创建，传了为修改，删除时将此字典删除
                label: '',
                label_code: '',
                //资讯信息编号，下拉获取
                information_name: '',
                //资讯名称
                content_desc: '',
                //内容描述
                information_image_list: [],
                //资讯产品图，字段内容同上
                infoShow: false,
                file_list: [],
                //文件图片
                vlog_list: [],
                // 视频文件
                image_list: [],
                //文件
                website_list: [{
                  file_url: ''
                }]
              }];
            }

            // 第四步

            _this2.knowInfo = res.data.knowledge_list;
            if (_this2.knowInfo.length > 0) {
              _this2.knowInfo.forEach(function (item, tip) {
                if (item.website_list.length > 0) {
                  _this2.knowInfo[tip].website_list = item.website_list;
                } else {
                  _this2.knowInfo[tip].website_list = [{
                    file_url: ''
                  }];
                }
                if (item.category != '') {
                  _this2.typeList.forEach(function (val, index) {
                    if (val.label == item.category_name) {
                      _this2.knowInfo[tip].typeIndex = index;
                    }
                  });
                } else {
                  var data = {
                    'label_code': '',
                    'label': item.category_name
                  };
                  _this2.typeList.push(data);
                  _this2.knowInfo[tip].typeIndex = _this2.typeList.length - 1;
                }
              });
            } else {
              _this2.knowInfo = [{
                knowledge_code: '',
                category: '',
                category_name: '',
                title: '',
                content_desc: '',
                purpose: '',
                typeIndex: 0,
                file_list: [],
                //文件图片
                vlog_list: [],
                // 视频文件
                image_list: [],
                //文件
                website_list: [{
                  file_url: ''
                }]
              }];
            }
          }
        } else {
          _this2.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this2.$api.msg('获取失败！');
      });
    },
    // 切换步骤
    changeTab: function changeTab(val) {
      // console.log(this.company_code,3325)
      if (this.company_code == '') {
        this.$api.msg('填写公司名称并保存后才可以操作后续步骤');
      } else {
        this.current = val;
      }
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 0
      });
    },
    prevStep: function prevStep() {
      this.current -= 1;
      uni.pageScrollTo({
        // 回到页面顶部
        scrollTop: 0,
        duration: 0
      });
    },
    nextStep: function nextStep() {
      if (this.current == 1) {
        if (this.companyName == '') {
          this.$api.msg('请上传公司名称');
          return;
        }
        this.saveCompanyInfo();
      } else if (this.current == 2) {
        if (this.project_list[0].project_name == '') {
          this.$api.msg('请输入产品名称');
          return;
        }
        if (this.project_list[0].brief_introduction == '') {
          this.$api.msg('请输入产品描述');
          return;
        }
        this.saveProductInfo();
      } else if (this.current == 3) {
        if (this.info[0].infoName == '') {
          this.$api.msg('请输入资讯名称');
          return;
        }
        if (this.info[0].infoDesc == '') {
          this.$api.msg('请输入资讯描述');
          return;
        }
        this.saveInfo();
      }
      this.current += 1;
      uni.pageScrollTo({
        // 回到页面顶部
        scrollTop: 0,
        duration: 0
      });
    },
    getImgUrl: function getImgUrl(url) {
      return global.baseImg + '/' + url;
    },
    // -----------------------------第一步--------------------------------------------------			
    // 打开行业弹窗
    openIndustry: function openIndustry() {
      this.industryShow = true;
    },
    industrySubmit: function industrySubmit(e) {
      this.industryIndex = e.value[0].label_code;
      this.industryValue = e.value[0].label;
      this.industryShow = false;
    },
    // 新增网址
    addCompanyWebsite: function addCompanyWebsite() {
      this.company_website.push({
        file_url: ''
      });
    },
    // 第一步保存
    saveCompanyInfo: function saveCompanyInfo() {
      var _this3 = this;
      var webArr = [];
      if (this.company_website[0].file_url == '') {
        webArr = [];
      } else {
        webArr = this.company_website;
      }
      var data = {
        "action": "save",
        "company_code": this.company_code,
        "company_name": this.companyName,
        // 公司名称
        "company_abbreviation": this.sortName,
        //公司简称
        "position": this.job,
        //职位
        "industry_code": this.industryIndex,
        // 行业编号
        "registered_address": this.registeredAddress,
        //注册地址
        "company_desc": this.companyDesc,
        //公司描述
        "company_url": this.companyWebsite,
        // 公司网址
        "ipc_code": this.companyIcp,
        // 公司icp
        "company_mailbox": this.companyEmail,
        // 公司邮箱
        "company_address": this.companyAddress,
        //公司地址
        "company_mobile": this.companyPhone,
        // 公司电话
        "company_applet_list": this.wxImg,
        // 公司小程序图片列表
        "company_official_account_list": this.gzhImg,
        //公司公众号
        "company_log_list": this.logoImg,
        //公司log
        "company_image_list": this.companyImg,
        //公司图片
        "file_list": this.fileList,
        "image_list": this.fileImg,
        "vlog_list": this.vidioList,
        "website_list": webArr
      };
      (0, _user.companyInfo)(data).then(function (res) {
        console.log(res, 66666666);
        if (res.code == 20000) {
          _this3.getRetrieve(res.data);
          _this3.$api.msg('保存成功');
        } else {
          _this3.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this3.$api.msg('保存失败');
      });
    },
    // -----------------------------第二步--------------------------------------------------		
    // 新增产品
    addProduct: function addProduct() {
      var val = {
        project_code: '',
        // 项目唯一编号，不传为创建，传了为修改，删除时将此字典删除
        category_name: '',
        // 类目名称
        project_name: '',
        // 项目名称
        brief_introduction: '',
        // 简介
        project_image_list: [],
        file_list: [],
        // 项目资料文件
        image_list: [],
        //项目资料图片
        vlog_list: [],
        //项目资料视频
        website_list: [{
          file_url: ''
        }] //项目资料网址
      };

      this.project_list.push(val);
    },
    // 新增网址
    addWebsite: function addWebsite(tip) {
      this.project_list[tip].website_list.push({
        file_url: ''
      });
    },
    // 第二步保存
    saveProductInfo: function saveProductInfo() {
      var _this4 = this;
      // console.log(this.project_list,9956)
      this.project_list.forEach(function (val, index) {
        if (val.website_list[0].file_url == '') {
          val.website_list = [];
        }
      });
      var data = {
        "company_code": this.company_code,
        "project_list": this.project_list
      };
      (0, _user.projectInfo)(data).then(function (res) {
        if (res.code == 20000) {
          _this4.getRetrieve(_this4.company_code);
          _this4.$api.msg('保存成功');
        } else {
          _this4.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this4.$api.msg('保存失败');
      });
    },
    // -----------------------------第三步--------------------------------------------------				
    pickSelect: function pickSelect(e) {
      this.info[this.selectIndex].label_code = e.value[0].label_code;
      this.info[this.selectIndex].label = e.value[0].label;
      this.info[this.selectIndex].infoShow = false;
      this.$forceUpdate();
    },
    closePick: function closePick(index) {
      this.info[index].infoShow = false;
      this.$forceUpdate();
    },
    openInfo: function openInfo(index) {
      this.info[index].infoShow = true;
      this.selectIndex = index;
      this.$forceUpdate();
    },
    // 新增资讯
    addInfo: function addInfo() {
      var val = {
        information_code: '',
        //资讯编号，不传为创建，传了为修改，删除时将此字典删除
        label: '',
        label_code: '',
        //资讯信息编号，下拉获取
        information_name: '',
        //资讯名称
        content_desc: '',
        //内容描述
        information_image_list: [],
        //资讯产品图，字段内容同上
        infoShow: false,
        selectIndex: 0,
        file_list: [],
        //文件图片
        vlog_list: [],
        // 视频文件
        image_list: [],
        //文件
        website_list: [{
          file_url: ''
        }]
      };
      this.info.push(val);
    },
    // 新增网址
    addInfoWebsite: function addInfoWebsite(tip) {
      this.info[tip].website_list.push({
        file_url: ''
      });
    },
    // 第三步保存
    saveInfo: function saveInfo() {
      var _this5 = this;
      this.info.forEach(function (val, index) {
        if (val.website_list[0].file_url == '') {
          val.website_list = [];
        }
      });
      var data = {
        "company_code": this.company_code,
        "information_list": this.info
      };
      (0, _user.informationInfo)(data).then(function (res) {
        if (res.code == 20000) {
          _this5.getRetrieve(_this5.company_code);
          _this5.$api.msg('保存成功');
        } else {
          _this5.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this5.$api.msg('保存失败');
      });
    },
    // -----------------------------第四步--------------------------------------------------			
    addKnowInfo: function addKnowInfo() {
      var val = {
        knowledge_code: '',
        //知识库编号，不传为创建，传了为修改，删除时将此字典删除
        category: '',
        //分类编号下拉获取
        category_name: '',
        //分类名称下拉获取
        title: '',
        //名称
        content_desc: '',
        //描述
        purpose: '',
        // 用途
        typeIndex: 0,
        file_list: [],
        //文件图片
        vlog_list: [],
        // 视频文件
        image_list: [],
        //文件
        website_list: [{
          file_url: ''
        }]
      };
      this.knowInfo.push(val);
    },
    selectType: function selectType(index, tip) {
      // console.log(index,2589)
      this.knowInfo[tip].typeIndex = index;
      this.knowInfo[tip].category = this.typeList[index].label_code;
      this.knowInfo[tip].category_name = this.typeList[index].label;
      this.$forceUpdate();
    },
    addType: function addType() {
      this.tagShow = true;
    },
    closeTag: function closeTag() {
      this.tagName = '';
      this.tagShow = false;
    },
    confirmTag: function confirmTag() {
      if (this.tagName.trim() == '') {
        this.$api.msg('请输入类型名称');
        return;
      }
      var data = {
        'label': this.tagName,
        'label_code': ''
      };
      this.typeList.push(data);
      this.tagShow = false;
      this.tagName = '';
      this.$forceUpdate();
    },
    // 新增网址
    addKonwWebsite: function addKonwWebsite(tip) {
      this.knowInfo[tip].website_list.push({
        file_url: ''
      });
    },
    // 第四步保存
    saveKnow: function saveKnow() {
      var _this6 = this;
      var isFile = false;
      this.knowInfo.forEach(function (val, index) {
        if (val.file_list.length == 0) {
          isFile = true;
        }
        // console.log(val,8889)
        if (val.website_list.length == 0) {
          val.website_list = [];
        }
      });
      if (isFile) {
        this.$api.msg('请上传知识库相关文档');
        return;
      }
      var data = {
        "company_code": this.company_code,
        "knowledge_list": this.knowInfo
      };
      (0, _user.knowledgeInfo)(data).then(function (res) {
        if (res.code == 20000) {
          _this6.typeList = _this6.copyTypeList;
          // this.getRetrieve(this.company_code)
          _this6.$api.msg('保存成功');
          setTimeout(function () {
            uni.navigateTo({
              url: '/childCont/company/company_list'
            });
          }, 1000);
        } else {
          _this6.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this6.$api.msg('保存失败');
      });
    },
    // --------------------商务合作--------------------------------------------------
    openShow: function openShow() {
      this.hzShow = true;
    },
    hzSubmit: function hzSubmit(e) {
      this.hzIndex = e.value[0].id;
      this.hzValue = e.value[0].label;
      this.hzShow = false;
    },
    addSumbit: function addSumbit() {
      var _this7 = this;
      if (this.userName == "") {
        this.$api.msg('姓名不能为空！');
        return;
      }
      if (this.phone == "") {
        this.$api.msg('手机号不能为空！');
        return;
      }
      var TEL_REGEXP = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
      if (!TEL_REGEXP.test(this.phone)) {
        this.$api.msg('手机号格式不正确！');
        return;
      }
      if (this.isClick == false) {
        return false;
      }
      this.isClick = false;
      var val = {
        'name': this.userName,
        'phone': this.phone,
        'details': this.remark,
        "type": this.hzIndex
      };
      (0, _user.business)(val).then(function (res) {
        if (res.code == 20000) {
          // console.log(JSON.stringify(res.data),789);
          uni.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 1500
          });
          _this7.userName = '';
          _this7.phone = '';
          _this7.remark = '';
          _this7.isClick = true;
          _this7.type = '';
        } else {
          _this7.isClick = true;
          _this7.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this7.isClick = true;
        _this7.$api.msg('信息提交失败');
      });
    },
    // 上传图片
    uploadImg: function uploadImg(val, tip) {
      var that = this;
      uni.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album', 'camera'],
        maxDuration: 30,
        camera: 'back',
        success: function success(res) {
          // console.log(res.tempFiles)
          console.log(res, 589);
          var tempFilePaths = res.tempFiles[0].tempFilePath;
          var size = res.tempFiles[0].size;
          if (size > 5242880) {
            // 图片文件最大只能上传5M
            that.$api.msg('该文件已超过5M，不能上传');
            return;
          }
          uni.showLoading({
            title: '上传中'
          });
          uni.uploadFile({
            url: global.loginUrl + '/api/user/oss_upload',
            filePath: tempFilePaths,
            name: 'image',
            formData: {
              "image": tempFilePaths,
              "oss_dir": 'static',
              "cate": 'create_character'
            },
            success: function success(uploadFileRes) {
              var imgData = JSON.parse(uploadFileRes.data);
              console.log(imgData, 333);
              if (imgData.code == 20000) {
                // let url = global.baseImg + '/'+ imgData.data.new_url
                var url = imgData.data.new_url;
                var data = {
                  file_url: url
                };
                uni.hideLoading();
                if (that.current == 1) {
                  if (val == 1) {
                    that.wxImg.push(data);
                  } else if (val == 2) {
                    that.gzhImg.push(data);
                  } else if (val == 3) {
                    that.logoImg.push(data);
                  } else if (val == 4) {
                    that.companyImg.push(data);
                  } else if (val == 5) {
                    that.fileImg.push(data);
                  }
                } else if (that.current == 2) {
                  if (val == 1) {
                    that.project_list[tip].project_image_list.push(data);
                  } else if (val == 2) {
                    that.project_list[tip].image_list.push(data);
                  }
                } else if (that.current == 3) {
                  if (val == 1) {
                    that.info[tip].information_image_list.push(data);
                  } else if (val == 2) {
                    that.info[tip].image_list.push(data);
                  }
                } else if (that.current == 4) {
                  if (val == 1) {
                    that.knowInfo[tip].image_list.push(data);
                  }
                }
              } else {
                that.$api.msg(imgData.msg);
                uni.hideLoading();
              }
            }
          });
        }
      });
    },
    // 上传视频
    uploadVideo: function uploadVideo(tip) {
      var that = this;
      uni.chooseMedia({
        count: 1,
        mediaType: ['video'],
        sourceType: ['album', 'camera'],
        maxDuration: 30,
        camera: 'back',
        success: function success(res) {
          // console.log(res.tempFiles)
          console.log(res, 589);
          var tempFilePaths = res.tempFiles[0].tempFilePath;
          var size = res.tempFiles[0].size;
          if (size > 1073741824) {
            // 视频文件最大只能上传1GB
            that.$api.msg('该文件已超过1GB，不能上传');
            return;
          }
          uni.showLoading({
            title: '上传中'
          });
          uni.uploadFile({
            url: global.loginUrl + '/api/user/oss_upload',
            filePath: tempFilePaths,
            name: 'image',
            formData: {
              "image": tempFilePaths,
              "oss_dir": 'static',
              "cate": 'create_character'
            },
            success: function success(uploadFileRes) {
              var imgData = JSON.parse(uploadFileRes.data);
              // console.log(imgData,333)
              uni.hideLoading();
              if (imgData.code == 20000) {
                // let url = global.baseImg + '/'+ imgData.data.new_url
                var url = imgData.data.new_url;
                var data = {
                  file_url: url
                };
                if (that.current == 1) {
                  that.vidioList.push(data);
                } else if (that.current == 2) {
                  that.project_list[tip].vlog_list.push(data);
                } else if (that.current == 3) {
                  that.info[tip].vlog_list.push(data);
                } else if (that.current == 4) {
                  that.knowInfo[tip].vlog_list.push(data);
                }
              } else {
                that.$api.msg(imgData.msg);
                uni.hideLoading();
              }
            }
          });
        }
      });
    },
    // 上传文件
    uploadFile: function uploadFile(tip) {
      var that = this;
      wx.chooseMessageFile({
        count: 9,
        type: 'file',
        extension: ["docx", "doc", "ppt", "pptx", "xlsx", "xlx", "txt", "md", "pdf"],
        success: function success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          // console.log(res,7458)
          var tempFilePaths = res.tempFiles[0].path;
          var image_name = res.tempFiles[0].name;
          // console.log(image_name,774)
          uni.showLoading({
            title: '上传中'
          });
          uni.uploadFile({
            url: global.loginUrl + '/api/user/oss_upload',
            filePath: tempFilePaths,
            name: 'image',
            formData: {
              "image": tempFilePaths,
              "image_name": image_name,
              "oss_dir": 'static',
              "cate": 'create_character'
            },
            success: function success(uploadFileRes) {
              var imgData = JSON.parse(uploadFileRes.data);
              console.log(imgData, 1258);
              uni.hideLoading();
              if (imgData.code == 20000) {
                var name = imgData.data.name;
                var url = imgData.data.new_url;
                var data = {
                  file_url: url,
                  file_name: name
                };
                if (that.current == 1) {
                  that.fileList.push(data);
                } else if (that.current == 2) {
                  that.project_list[tip].file_list.push(data);
                } else if (that.current == 3) {
                  that.info[tip].file_list.push(data);
                } else if (that.current == 4) {
                  that.knowInfo[tip].file_list.push(data);
                }
              } else {
                that.$api.msg(imgData.msg);
                uni.hideLoading();
              }
            }
          });
        }
      });
    },
    // 保存
    addSave: function addSave() {
      if (this.current == 1) {
        if (this.companyName == '') {
          this.$api.msg('请上传公司名称');
          return;
        }
        this.saveCompanyInfo();
      } else if (this.current == 2) {
        if (this.project_list[0].project_name == '') {
          this.$api.msg('请输入产品名称');
          return;
        }
        if (this.project_list[0].brief_introduction == '') {
          this.$api.msg('请输入产品描述');
          return;
        }
        this.saveProductInfo();
      } else if (this.current == 3) {
        if (this.info[0].infoName == '') {
          this.$api.msg('请输入资讯名称');
          return;
        }
        if (this.info[0].infoDesc == '') {
          this.$api.msg('请输入资讯描述');
          return;
        }
        this.saveInfo();
      } else {
        if (this.knowInfo[0].title == '') {
          this.$api.msg('请输入知识库名称');
          return;
        }
        if (this.knowInfo[0].knowDesc == '') {
          this.$api.msg('请输入描述信息');
          return;
        }
        this.saveKnow();
      }
    },
    toIdea: function toIdea() {
      uni.navigateTo({
        url: '/childPage/answer/answer'
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 1294:
/*!*********************************************************************************************************************!*\
  !*** F:/G/company/umi-git/childCont/company/add_info.vue?vue&type=style&index=0&id=7a87e8ed&lang=less&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_style_index_0_id_7a87e8ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add_info.vue?vue&type=style&index=0&id=7a87e8ed&lang=less&scoped=true& */ 1295);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_style_index_0_id_7a87e8ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_style_index_0_id_7a87e8ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_style_index_0_id_7a87e8ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_style_index_0_id_7a87e8ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_info_vue_vue_type_style_index_0_id_7a87e8ed_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1295:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/childCont/company/add_info.vue?vue&type=style&index=0&id=7a87e8ed&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 167:
/*!**************************************************!*\
  !*** F:/G/company/umi-git/pages/login/login.vue ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=b237504c&scoped=true& */ 168);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 170);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& */ 173);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b237504c",
  null,
  false,
  _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 168:
/*!*********************************************************************************************!*\
  !*** F:/G/company/umi-git/pages/login/login.vue?vue&type=template&id=b237504c&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=b237504c&scoped=true& */ 169);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 169:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/pages/login/login.vue?vue&type=template&id=b237504c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 1856))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var a0 = {
    height: "48px",
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        a0: a0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 170:
/*!***************************************************************************!*\
  !*** F:/G/company/umi-git/pages/login/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 171);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 171:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/pages/login/login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _chat = __webpack_require__(/*! ../../apis/chat.js */ 165);
var _user = __webpack_require__(/*! @/apis/user.js */ 172);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
      selectCheck: 0,
      getPhoneNumber: '',
      loginImg: global.baseImg + '/xcx/com/message_center/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%96%B0logo2.png'
    };
  },
  onShow: function onShow() {
    if (uni.getStorageSync('userInfo') == null || uni.getStorageSync('userInfo') == '') {
      console.log(999);
      this.guessLogin();
    }
  },
  methods: {
    phoneLogin: function phoneLogin() {
      // console.log('手机登录');
      uni.navigateTo({
        url: '/pages/login/phoneLogin'
      });
    },
    getphonenumber: function getphonenumber(e) {
      console.log(e.detail, '获取手机号码');
      var that = this;
      if (e.detail.errMsg == 'getPhoneNumber:ok') {
        var userInfo = JSON.parse(uni.getStorageSync('userInfo'));
        (0, _chat.wx_xcx_mobile)({
          code: e.detail.code,
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv
        }).then(function (res) {
          // console.log(res.data.phone_info.purePhoneNumber,'purePhoneNumber');
          var query = uni.getStorageSync('loginCode');
          uni.login({
            provider: 'weixin',
            success: function success(loginRes) {
              // let code = loginRes.code;
              // that.wxLogin(code);
              var val = {
                'code': loginRes.code,
                'user_code': userInfo.user_code,
                'mobile': res.data.phone_info.purePhoneNumber
              };
              if (query) {
                if (query.role == 'user') {
                  val.parent_user_code = query.parent_user_code;
                }
              }
              uni.showLoading({
                title: '登录中...'
              });
              (0, _chat.wxLogin)(val).then(function (res) {
                if (res.code == 20000) {
                  uni.setStorageSync("userInfo", JSON.stringify(res.data));
                  uni.setStorageSync('memberInfo', JSON.stringify(res.data));
                  uni.setStorageSync('loginCode', '');
                  if (res.data.is_tutor == 1) {
                    //是否已经绑定导师 1是0否
                    uni.navigateBack({
                      // 返回上一页
                      delta: 1
                    });
                    uni.hideLoading();
                  } else {
                    that.creatMe(res.data.user_id, res.data.nick_name, res.data.avatar_url);
                  }
                  // uni.getUserInfo({
                  // 	provider: "weixin",
                  // 	success: res => {
                  // 		const userWeiXinAccInfo = res.userInfo;
                  // 		console.log(res);
                  // 	},
                  // 	fail: err => {
                  // 		console.log("获取用户信息失败");
                  // 	}
                  // })
                } else {
                  uni.hideLoading();
                  that.$api.msg(res.msg);
                }
              }).catch(function (err) {
                uni.hideLoading();
                that.$api.msg('登录失败');
              });
            }
          });
        });
      }
    },
    toLogin: function toLogin() {
      if (this.selectCheck == 1) {
        var that = this;
      } else {
        this.$api.msg('请先阅读后并同意用户协议和隐私政策');
      }
    },
    creatMe: function creatMe(user_id, name, imgUrl) {
      var _this = this;
      var data = {
        'user_id': user_id,
        'photo': imgUrl,
        'name': name,
        'greeting': '我是您的孪生数字人，遇事不决的时候，您可以问我，我会给您回答，供您参考，现在开始问我吧！'
      };
      (0, _user.creatMe)(data).then(function (res) {
        if (res.code == 20000) {
          _this.batchTutor(user_id, res.data.me_id);
        } else {
          _this.$api.msg(res.msg);
          uni.hideLoading();
        }
      }).catch(function (err) {
        _this.$api.msg('创建失败');
        uni.hideLoading();
      });
    },
    //批量绑定导师
    batchTutor: function batchTutor(user_id, me_id) {
      var _this2 = this;
      (0, _user.batchTutor)({
        user_id: user_id,
        me_id: me_id
      }).then(function (res) {
        if (res.code == 20000) {
          uni.hideLoading();
          uni.navigateBack({
            // 返回上一页
            delta: 1
          });
        } else {
          uni.hideLoading();
          _this2.$api.msg(res.msg);
        }
      });
    },
    radioChange: function radioChange(evt) {
      this.selectCheck = evt.detail.value[0];
      // console.log(evt);
      this.selectCheck == 1 ? this.getPhoneNumber = 'getPhoneNumber' : this.getPhoneNumber = '1';
    },
    // 游客登录
    guessLogin: function guessLogin() {
      var headers = {
        'content-type': 'application/x-www-form-urlencoded',
        'source': 'xcx'
      };
      var val = {
        time: new Date().getTime()
      };
      uni.request({
        url: global.loginUrl + '/api/user/create_temp_user',
        data: val,
        header: headers,
        method: 'POST',
        success: function success(res) {
          if (res.data.code == 20000) {
            uni.setStorageSync("userInfo", JSON.stringify(res.data.data));
            uni.setStorageSync("avatarUrl", res.data.data.avatar_url);
          } else {
            console.log('登录失败');
          }
        }
      });
    },
    checkAgree: function checkAgree() {
      uni.navigateTo({
        url: '/pages/agree/agree?agree_type=4'
      });
    },
    checkSecret: function checkSecret() {
      uni.navigateTo({
        url: '/pages/agree/agree?agree_type=1'
      });
    },
    toIdea: function toIdea() {
      uni.navigateTo({
        url: '/childPage/answer/answer'
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 173:
/*!************************************************************************************************************!*\
  !*** F:/G/company/umi-git/pages/login/login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& */ 174);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 174:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/pages/login/login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[1288,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/childCont/company/add_info.js.map