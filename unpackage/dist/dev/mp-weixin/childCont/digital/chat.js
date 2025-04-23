(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["childCont/digital/chat"],{

/***/ 1072:
/*!**************************************************************************!*\
  !*** F:/G/company/umi-git/main.js?{"page":"childCont%2Fdigital%2Fchat"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./childCont/digital/chat.vue */ 1073));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 1073:
/*!*******************************************************!*\
  !*** F:/G/company/umi-git/childCont/digital/chat.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_86dae404_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=86dae404&scoped=true& */ 1074);
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ 1076);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_id_86dae404_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&id=86dae404&scoped=true&lang=less& */ 1078);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_86dae404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_86dae404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "86dae404",
  null,
  false,
  _chat_vue_vue_type_template_id_86dae404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "childCont/digital/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1074:
/*!**************************************************************************************************!*\
  !*** F:/G/company/umi-git/childCont/digital/chat.vue?vue&type=template&id=86dae404&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_86dae404_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=template&id=86dae404&scoped=true& */ 1075);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_86dae404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_86dae404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_86dae404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_86dae404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1075:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/childCont/digital/chat.vue?vue&type=template&id=86dae404&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 1802))
    },
    uRow: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-row/u-row */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-row/u-row")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-row/u-row.vue */ 1882))
    },
    uCol: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-col/u-col */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-col/u-col")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-col/u-col.vue */ 1890))
    },
    uTextarea: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-textarea/u-textarea */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-textarea/u-textarea")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-textarea/u-textarea.vue */ 1819))
    },
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 1856))
    },
    uPopup: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-popup/u-popup.vue */ 1811))
    },
    "u-Input": function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u--input/u--input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u--input/u--input")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u--input/u--input.vue */ 1827))
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
  var m0 = _vm.getImgUrl(_vm.infoSpeak.out_video_cover)
  var m1 = _vm.getImgUrl(_vm.infoSpeak.out_video)
  var m2 = _vm.getImgUrl(_vm.infoSpeak.out_video_speak)
  var m3 = _vm.top_tip == 1 ? _vm.getImgUrl(_vm.infoSpeak.wechat_code) : null
  var m4 = _vm.top_tip == 2 ? _vm.getImgUrl(_vm.infoSpeak.group_code) : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.chatChange = "keyboard"
    }
    _vm.e1 = function ($event) {
      _vm.messageShow = false
    }
    _vm.e2 = function ($event) {
      _vm.tipShow = false
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1,
        m2: m2,
        m3: m3,
        m4: m4,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1076:
/*!********************************************************************************!*\
  !*** F:/G/company/umi-git/childCont/digital/chat.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=script&lang=js& */ 1077);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1077:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/childCont/digital/chat.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, wx, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 55));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 57));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _user = __webpack_require__(/*! @/apis/user.js */ 172);
var _home = __webpack_require__(/*! @/apis/home.js */ 175);
var _chat = __webpack_require__(/*! @/apis/chat.js */ 165);
var TextEncoding = _interopRequireWildcard(__webpack_require__(/*! text-encoding-shim */ 186));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var SpeechTranscription = __webpack_require__(/*! ../../utils/st */ 346);
var sleep = __webpack_require__(/*! ../../utils/util */ 350).sleep;
var _default = {
  data: function data() {
    var _ref;
    return _ref = {
      picImg1: global.baseImg + '/xcx/com/message_center/%E6%9C%80%E6%96%B0%E5%8A%A8%E5%9B%BE.gif',
      phoneImg: global.baseImg + "/xcx/com/message_center/Frame 427321012.png",
      wxImg: global.baseImg + "/xcx/com/message_center/Frame 427319549.png",
      wxgImg: global.baseImg + "/xcx/com/message_center/users-group.png",
      webImg: global.baseImg + "/xcx/com/message_center/web_site.png",
      tabImg1: global.baseImg + "/xcx/com/message_center/minus-square.png",
      tabImg2: global.baseImg + "/xcx/com/message_center/消息 1.png",
      tabImg3: global.baseImg + "/xcx/com/message_center/分享 4.png",
      tabImg4: global.baseImg + "/xcx/com/message_center/记录 (1).png",
      tabImg5: global.baseImg + "/xcx/com/message_center/creat.png",
      chatChange: "keyboard",
      //对话状态  语音/文字输入
      isBtn: false,
      Height: 0,
      speak1: global.baseImg + '/xcx/com/message_center/speak1.mp4',
      speak2: global.baseImg + '/xcx/com/message_center/speak2.mp4',
      speak3: global.baseImg + '/xcx/com/message_center/speak3.mp4',
      messageShow: false,
      //留言框
      messageValue: "",
      //留言文本
      messagePhone: "",
      //留言电话

      chatInputValue: "",
      chat_type: -4,
      //4文心一言5讯飞星火8chatGlm
      loading: true,
      session_code: "",
      chat_group_code: "",
      supplement: {
        msg_list: []
      },
      prompt: '',
      isone: true,
      videoContext: '',
      videoContext_no: '',
      infoSpeak: '',
      token: '',
      voice_url: '',
      innerAudioContext: null,
      speakValue: '',
      stop_three: false,
      three_shi: 0,
      three_time: 0,
      requestTask_three: '',
      load_state: false
    }, (0, _defineProperty2.default)(_ref, "messageValue", ''), (0, _defineProperty2.default)(_ref, "chatValue", []), (0, _defineProperty2.default)(_ref, "voiceValue", []), (0, _defineProperty2.default)(_ref, "current", 0), (0, _defineProperty2.default)(_ref, "textIndex", 0), (0, _defineProperty2.default)(_ref, "text_val", ''), (0, _defineProperty2.default)(_ref, "noSpekLoad", true), (0, _defineProperty2.default)(_ref, "ySpeakLoad", true), (0, _defineProperty2.default)(_ref, "interact", ''), (0, _defineProperty2.default)(_ref, "is_click", false), (0, _defineProperty2.default)(_ref, "click_count", 0), (0, _defineProperty2.default)(_ref, "temp_id", ''), (0, _defineProperty2.default)(_ref, "tipShow", false), (0, _defineProperty2.default)(_ref, "top_tip", 1), (0, _defineProperty2.default)(_ref, "img_index", 9), (0, _defineProperty2.default)(_ref, "no_index", 8), (0, _defineProperty2.default)(_ref, "y_index", 7), (0, _defineProperty2.default)(_ref, "isPlay", true), (0, _defineProperty2.default)(_ref, "stResult", ''), (0, _defineProperty2.default)(_ref, "stStart", false), (0, _defineProperty2.default)(_ref, "rec_token", ''), (0, _defineProperty2.default)(_ref, "webSocketTask", ''), (0, _defineProperty2.default)(_ref, "webSendTask", ''), _ref;
  },
  onLoad: function () {
    var _onLoad = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(option) {
      var _this = this;
      var st;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (option.chatInfo) {
                this.infoSpeak = JSON.parse(option.chatInfo);
                this.speakValue = this.infoSpeak.model_greetings;
                this.interact = this.infoSpeak.model_greetings;
                if (!this.speakValue) {
                  this.speakValue = '你好我是数字分身，有什么问题可以向我提问';
                  this.interact = '你好我是数字分身，有什么问题可以向我提问';
                }
              }
              if (option.temp_id) {
                this.temp_id = option.temp_id;
              }

              //语音播放初始化
              this.init();

              //录音初始化
              wx.getRecorderManager().onFrameRecorded(function (res) {
                // console.log(res,66665)
                // console.log(this.st,5869)
                // console.log(this.stStart,63214)
                if (res.isLastFrame) {
                  console.log("record done");
                }
                if (_this.st && _this.stStart) {
                  // console.log("send " + res.frameBuffer.byteLength)
                  _this.st.sendAudio(res.frameBuffer);
                }
              });
              wx.getRecorderManager().onStart(function () {
                console.log("start recording...");
              });
              wx.getRecorderManager().onStop(function (res) {
                console.log(res, "stop recording...");
                // this.uploadVoice(res.tempFilePath);
                // console.log(this.stResult, 747474)
                // this.sendMessage()

                // if (res.tempFilePath) {
                // 	wx.removeSavedFile({
                // 		filePath:res.tempFilePath
                // 	})
                // }
              });

              wx.getRecorderManager().onError(function (res) {
                console.log("recording failed:" + res);
              });
              _context.prev = 7;
              _context.next = 10;
              return this.getToken();
            case 10:
              _context.next = 16;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](7);
              console.log("error on get token:", JSON.stringify(_context.t0));
              return _context.abrupt("return");
            case 16:
              st = new SpeechTranscription({
                url: 'wss://nls-gateway.cn-shanghai.aliyuncs.com/ws/v1',
                appkey: '',
                //填写后台提供的key
                token: this.rec_token
                // token: '9468efe7f4c84778a398d70f0d910c27'
              });

              st.on("started", function (msg) {
                console.log("Client recv started");
                // this.stResult = msg
              }), st.on("changed", function (msg) {
                console.log("Client recv changed:", msg);
                var result = JSON.parse(msg);
                // console.log(result,4158)
                if (result.header.name == 'TranscriptionResultChanged') {
                  // this.message = result.payload.result;
                }
              }), st.on("completed", function (msg) {
                console.log("Client recv completed:", msg);
                // this.testValue = JSON.stringify(msg)
              }), st.on("begin", function (msg) {
                console.log("Client recv sentenceBegin:", msg);
                var result = JSON.parse(msg);
                // console.log(result,4158)
                if (result.header.name == 'SentenceBegin') {
                  // this.message = ''
                  // this.$forceUpdate()
                }
                // this.stResult = msg
              });

              st.on("end", function (msg) {
                console.log("Client recv sentenceEnd:", msg);
                var result = JSON.parse(msg);
                // console.log(result,4158)
                if (result.header.name == 'SentenceEnd') {
                  _this.message = '';
                  _this.stResult = _this.stResult + result.payload.result;
                  _this.$forceUpdate();
                  // console.log(this.stResult, 9958)
                }
              });

              st.on("closed", function () {
                if (_this.stStart) {
                  // console.log('出现close')
                  // clearInterval(this.timer_li);
                  _this.continueRecord(); // 如果没有主动停止则继续录音
                } else {
                  _this.endRecord();
                  if (_this.st) {
                    _this.st.shutdown();
                  } else {
                    console.log("st is null");
                  }
                  // this.$api.msg('录音失败，请退出重试')
                }
              });

              st.on("failed", function (msg) {
                console.log("Client recv failed:", msg);
                // this.stResult = '写一首诗歌'
                var result = JSON.parse(msg);
                // this.sendMessage()
                if (result.header.status == '40000004' && _this.stStart) {
                  console.log('出现错误了');
                  _this.continueRecord(); // 如果没有主动停止则继续录音
                } else {
                  _this.endRecord();
                  if (_this.st) {
                    _this.st.shutdown();
                  } else {
                    console.log("st is null");
                  }
                  // this.$api.msg('录音失败，请退出重试')
                }
              });

              this.st = st;
            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[7, 12]]);
    }));
    function onLoad(_x) {
      return _onLoad.apply(this, arguments);
    }
    return onLoad;
  }(),
  onShow: function onShow() {
    var _this2 = this;
    this.videoContext_no = uni.createVideoContext('noVideo');
    this.videoContext = uni.createVideoContext('myVideo');
    if (this.infoSpeak == '') {
      // console.log(this.infoSpeak,663)
      this.getModelList();
    } else {
      // this.getRcordToken()
      setTimeout(function () {
        _this2.videoContext_no.play();
      }, 1000);
    }
  },
  onHide: function onHide() {
    // uni.closeSocket()
    this.voiceValue = [];
    this.stop();
  },
  onUnload: function onUnload() {
    // uni.closeSocket()
    this.voiceValue = [];
    this.stop();
  },
  methods: {
    init: function init() {
      var _this3 = this;
      this.innerAudioContext = uni.createInnerAudioContext();
      this.innerAudioContext.obeyMuteSwitch = false;
      this.innerAudioContext.onPlay(function () {
        console.log('开始播放');
      });
      this.innerAudioContext.onEnded(function () {
        console.log('播放停止了');
        // this.innerAudioContext.stop()
        _this3.current++;
        // console.log(this.voiceValue,5581)
        if (_this3.current < _this3.voiceValue.length) {
          if (_this3.chatValue[_this3.current]) {
            _this3.speakValue = _this3.chatValue[_this3.current];
            _this3.innerAudioContext.src = _this3.voiceValue[_this3.current];
            _this3.innerAudioContext.play();
          } else {
            // console.log('视频关闭66')
            _this3.speakValue = _this3.infoSpeak.model_greetings;
            if (!_this3.speakValue) {
              _this3.speakValue = '你好我是数字分身，有什么问题可以向我提问';
              _this3.interact = '你好我是数字分身，有什么问题可以向我提问';
            }
            _this3.videoContext.stop();
            _this3.videoContext_no.play(); //静默视频播放
            _this3.noSpekLoad = true;
            _this3.isPlay = true;
          }
        }
        //关闭视频
        if (_this3.current >= _this3.voiceValue.length) {
          // console.log('视频关闭')
          _this3.speakValue = _this3.infoSpeak.model_greetings;
          if (!_this3.speakValue) {
            _this3.speakValue = '你好我是数字分身，有什么问题可以向我提问';
            _this3.interact = '你好我是数字分身，有什么问题可以向我提问';
          }
          _this3.videoContext.stop();
          _this3.videoContext_no.play(); //静默视频播放
          _this3.noSpekLoad = true;
          _this3.isPlay = true;
        }
      });
      this.innerAudioContext.onStop(function (res) {
        console.log('出错了111');
      });
    },
    changeSpeak: function changeSpeak() {
      var _this4 = this;
      uni.authorize({
        scope: 'scope.record',
        fail: function fail() {
          uni.showToast({
            icon: 'none',
            title: '请在小程序设置中启用麦克风权限'
          });
        },
        success: function success() {
          console.log('开启成功');
          _this4.chatChange = 'audio';
        }
      });
    },
    longpressBtn: function longpressBtn(val) {
      this.readyGO();
      this.top_tip = val;
      this.tipShow = true;
    },
    touchendBtn: function touchendBtn() {
      var _this5 = this;
      // console.log('执行了')
      this.endRecord();
      setTimeout(function () {
        _this5.tipShow = false;
        _this5.stopSpeak();
      }, 2000);
    },
    readyGO: function readyGO() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //开始录音
                _this6.startRecord();
              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    startRecord: function () {
      var _startRecord = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var st;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.st) {
                  _context3.next = 3;
                  break;
                }
                console.log("st is null");
                return _context3.abrupt("return");
              case 3:
                if (!this.stStart) {
                  _context3.next = 6;
                  break;
                }
                console.log("st is started!");
                return _context3.abrupt("return");
              case 6:
                st = this.st;
                _context3.prev = 7;
                _context3.next = 10;
                return st.start(st.defaultStartParams());
              case 10:
                this.stStart = true;
                this.stResult = '';
                console.log('录音开始');
                _context3.next = 19;
                break;
              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](7);
                console.log("start failed:" + _context3.t0);
                return _context3.abrupt("return");
              case 19:
                wx.getRecorderManager().start({
                  duration: 600000,
                  numberOfChannels: 1,
                  sampleRate: 16000,
                  format: "PCM",
                  frameSize: 4
                });
              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[7, 15]]);
      }));
      function startRecord() {
        return _startRecord.apply(this, arguments);
      }
      return startRecord;
    }(),
    // 时间到后继续录音
    continueRecord: function () {
      var _continueRecord = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var st, that;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                st = this.st;
                that = this;
                _context4.prev = 2;
                _context4.next = 5;
                return st.start(st.defaultStartParams());
              case 5:
                console.log('录音继续');
                _context4.next = 12;
                break;
              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](2);
                console.log("start failed:" + _context4.t0);
                return _context4.abrupt("return");
              case 12:
                wx.getRecorderManager().start({
                  duration: 600000,
                  numberOfChannels: 1,
                  sampleRate: 16000,
                  format: "PCM",
                  frameSize: 4
                });
              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 8]]);
      }));
      function continueRecord() {
        return _continueRecord.apply(this, arguments);
      }
      return continueRecord;
    }(),
    stopSpeak: function stopSpeak() {
      this.chatInputValue = this.stResult;
      this.sendMessage();
    },
    // 结束录音
    endRecord: function () {
      var _endRecord = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                wx.getRecorderManager().stop();
                this.stStart = false;
                _context5.next = 4;
                return sleep(500);
              case 4:
                if (!(this.stStart && this.st)) {
                  _context5.next = 14;
                  break;
                }
                _context5.prev = 5;
                console.log("prepare close st");
                _context5.next = 9;
                return this.st.close();
              case 9:
                _context5.next = 14;
                break;
              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](5);
                console.log("close st failed:" + _context5.t0);
              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[5, 11]]);
      }));
      function endRecord() {
        return _endRecord.apply(this, arguments);
      }
      return endRecord;
    }(),
    // 获取token
    getToken: function getToken() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log('获取录音token');
                _context6.next = 3;
                return (0, _user.getToken)().then(function (res) {
                  if (res.code == 20000) {
                    _this7.rec_token = res.data.token;
                  } else {
                    _this7.$api.msg(res.msg);
                  }
                }).catch(function (err) {
                  _this7.$api.msg('获取token失败');
                });
              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getInteract: function getInteract() {
      var _this8 = this;
      var val = {
        'model_id': this.infoSpeak.model_id,
        'question': '',
        'is_click': 1
      };
      (0, _home.getInteract)(val).then(function (res) {
        if (res.code == 20000) {
          _this8.click_count++;
          if (_this8.click_count == 1 && _this8.infoSpeak.share_desc) {
            _this8.interact = _this8.infoSpeak.share_desc;
            _this8.speakValue = _this8.infoSpeak.share_desc;
          } else if (_this8.click_count == 2 && _this8.infoSpeak.model_function) {
            _this8.interact = _this8.infoSpeak.model_function;
            _this8.speakValue = _this8.infoSpeak.model_function;
            _this8.click_count = 0;
          } else if (_this8.click_count == 0 && _this8.infoSpeak.model_greetings) {
            _this8.interact = _this8.infoSpeak.model_greetings;
            _this8.speakValue = _this8.infoSpeak.model_function;
          } else {
            _this8.speakValue = '你好我是数字分身，有什么问题可以向我提问';
            _this8.interact = '你好我是数字分身，有什么问题可以向我提问';
          }
          if (_this8.interact) {
            _this8.innerAudioContext.stop();
            _this8.voiceValue = [];
            _this8.current = 0;
            _this8.getRcordToken();
          } else {
            _this8.innerAudioContext.play();
            _this8.videoContext.play();
          }
        } else {
          _this8.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this8.$api.msg('获取失败');
      });
    },
    play: function play(url) {
      this.innerAudioContext.src = url;
      this.innerAudioContext.play();
    },
    //原生停止
    stop: function stop() {
      this.innerAudioContext.stop();
      //关闭视频
      this.videoContext.stop(); //静默视频停止
      this.videoContext_no.play(); //静默视频停止
      this.noSpekLoad = true;
    },
    // 获取token
    getRcordToken: function getRcordToken() {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _user.getToken)().then(function (res) {
                  if (res.code == 20000) {
                    _this9.token = res.data.token;
                    _this9.speakSocket();
                  } else {
                    _this9.$api.msg(res.msg);
                  }
                }).catch(function (err) {
                  _this9.$api.msg('获取token失败');
                });
              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    speakSocket: function speakSocket() {
      var _this10 = this;
      //创建webSocket
      var that = this;
      // console.log(this.token,3333)
      that.webSocketTask = uni.connectSocket({
        url: 'wss://ai.umi6.com:28083/ws/ali/text_to_speech?token=' + this.token + '&long_tts=1&enable_ptts=1',
        // url: 'ws://192.168.31.165:8080/ws/ali/text_to_speech?token='+ this.token +'&long_tts=1&enable_ptts=1',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log('成功', res);
        }
      });
      // 监听WebSocket连接打开事件
      that.webSocketTask.onOpen(function (res) {
        console.log("监听WebSocket连接打开事件", res);
        // console.log(that.infoSpeak, 5548)
        if (that.interact != '') {
          that.text_val = that.interact;
        } else {
          that.text_val = '你好我是数字分身，有什么问题可以向我提问';
        }
        that.webSocketTask.send({
          data: JSON.stringify({
            "text": that.text_val,
            "voice": that.infoSpeak.audio_code,
            "action_type": "send"
          })
        });
        that.webSocketTask.send({
          data: JSON.stringify({
            "action_type": "stop"
          })
        });
      });
      // 监听WebSocket错误
      uni.onSocketError(function (res) {
        console.info("监听WebSocket错误" + res);
      });

      // 接收websocket消息及处理
      that.webSocketTask.onMessage(function (res) {
        console.log(res, 777);
        var type = (0, _typeof2.default)(res.data);
        if (type == 'string') {
          var info = JSON.parse(res.data);
          if (info) {
            var url = info.data;
            _this10.voice_url = global.baseImg + '/' + url;
            console.log(_this10.voice_url, 5589);
            that.webSocketTask.close();
            that.webSocketTask.onClose(function (res) {
              console.log('WebSocket 已关闭！');
            });
            //互动执行
            if (_this10.is_click) {
              _this10.videoContext.play();
              _this10.play(_this10.voice_url);
              _this10.is_click = false;
            }
          }
        }
      });
    },
    // 获取列表
    getModelList: function getModelList() {
      var _this11 = this;
      var userInfo = JSON.parse(uni.getStorageSync('userInfo'));
      var that = this;
      var val = '';
      if (this.temp_id != '') {
        val = {
          'user_id': userInfo.user_id,
          'model_id': this.temp_id,
          'is_visitor': 1,
          'get_default': 0
        };
      } else {
        val = {
          'user_id': userInfo.user_id,
          'is_visitor': 0,
          'get_default': 1
        };
      }
      (0, _home.getModelList)(val).then(function (res) {
        if (res.code == 20000) {
          if (res.data.length > 0) {
            _this11.infoSpeak = res.data[0];
            if (_this11.infoSpeak.model_greetings == '') {
              _this11.speakValue = '你好我是数字分身，有什么问题可以向我提问';
            } else {
              _this11.speakValue = _this11.infoSpeak.model_greetings;
            }
            setTimeout(function () {
              that.videoContext_no.play();
            }, 1000);
            // console.log(this.infoSpeak,8547)
            // this.getRcordToken()
          }
        } else {
          _this11.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this11.$api.msg('获取失败');
      });
    },
    playSpeak: function playSpeak() {
      this.getInteract();
      this.videoContext_no.stop();
      // this.videoContext.play() //第一段视频开始播放
      this.ySpeakLoad = true;
      this.is_click = true;
      // console.log('播放第一段视频111')
    },
    toSpeakN: function toSpeakN() {
      if (this.noSpekLoad) {
        // console.log('播放第一段视频2222')
        this.noSpekLoad = false;
        this.img_index = 8;
        this.no_index = 9;
        this.y_index = 7;
      }
    },
    speakOne: function speakOne() {
      if (this.isPlay) {
        this.getInteract();
        this.innerAudioContext.pause(); //点击关闭音频
        this.videoContext.pause(); // 点击暂停音频
        this.is_click = true;
      }
    },
    toSpeakY: function toSpeakY() {
      // console.log(this.ySpeakLoad,'播放中')

      if (this.ySpeakLoad) {
        // console.log('播放第2段视频')
        this.ySpeakLoad = false;
        this.img_index = 8;
        this.no_index = 7;
        this.y_index = 9;
        this.play(this.voice_url);
      }
    },
    // 跳转数字分身页面
    toDigital: function toDigital(index) {
      if (index == 0) {
        // 我的分身
        uni.navigateTo({
          url: '/childCont/digital/my'
        });
      } else if (index == 1) {
        //编辑数字人形象
        uni.navigateTo({
          url: '/childCont/digital/edit_digital?info=' + JSON.stringify(this.infoSpeak)
        });
      } else if (index == 2) {
        // 数字人分享
        uni.navigateTo({
          url: '/childCont/digital/share_digital?model_img=' + this.infoSpeak.out_video_cover + '&model_id=' + this.infoSpeak.model_id + '&greet=' + this.infoSpeak.share_desc
        });
      } else {
        // 数字人记录
        uni.navigateTo({
          url: '/childCont/digital/history_digital?model_id=' + this.infoSpeak.model_id
        });
      }
    },
    keyboardheightchange: function keyboardheightchange(e) {
      // console.log(e, '键盘高度变化');
      if (e.detail.height == 0) {
        // console.log(e);
        // uni.showTabBar({
        // 	// animation: true
        // })
        this.Height = 0;
        this.isBtn = false;
      } else {
        this.isBtn = true;
        this.Height = e.detail.height;
      }
    },
    inputBlur: function inputBlur(e) {
      var _this12 = this;
      this.$nextTick(function () {
        _this12.Height = 0;
      });
      uni.setStorageSync('talkInfo', '');
    },
    inputFocus: function inputFocus(e) {
      var _this13 = this;
      // console.log(e, 5879)
      if (this.isBtn) {
        this.$nextTick(function () {
          _this13.Height = e.detail.height;
        });
      } else {
        this.Height = 0;
      }
    },
    //点击留言
    message: function message() {
      this.messageShow = true;
      // console.log(this.messageShow)
    },
    getImgUrl: function getImgUrl(url) {
      return global.baseImg + '/' + url;
    },
    //发送消息
    sendMessage: function sendMessage() {
      var _this14 = this;
      if (this.chatInputValue.trim() == '') return this.$api.msg('请输入您要发送的内容');
      this.getsendToken();

      // const hide_cont = '(回答内容中不能出现：chatgpt、gpt、openai、Generative Pre-trained Transformer等文字)';
      var chat_cont = this.chatInputValue;
      var cont = {
        'model_id': this.infoSpeak.model_id,
        'question': chat_cont,
        'is_click': 0
      };
      uni.showLoading({
        title: '思考中'
      });
      (0, _home.getInteract)(cont).then(function (res) {
        if (res.code == 20000) {
          _this14.prompt = res.data.context;
          var data = {
            chat_type: _this14.chat_type,
            // action_type: '3',
            session_code: _this14.session_code,
            chat_group_code: "",
            content: chat_cont,
            stream_str: 1,
            is_decode: 1,
            msg_list: [{
              role: 'user',
              content: chat_cont,
              covert_content: _this14.prompt,
              agent_id: _this14.infoSpeak.model_id
            }]
          };
          data.msg_list = JSON.stringify(data.msg_list);
          _this14.creatChatFun(data, 'first');
        } else {
          _this14.$api.msg(res.msg);
          uni.hideLoading();
        }
      }).catch(function (err) {
        _this14.$api.msg('获取失败');
        uni.hideLoading();
      });
      this.chatInputValue = '';
      this.load_state = false;
      this.messageValue = '';
      this.chatValue = [];
      this.voiceValue = [];
      this.current = 0; // 当前播放的音频索引
      this.textIndex = 0;
    },
    // 获取token
    getsendToken: function getsendToken() {
      var _this15 = this;
      (0, _user.getToken)().then(function (res) {
        if (res.code == 20000) {
          _this15.token = res.data.token;
        } else {
          _this15.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this15.$api.msg('获取token失败');
      });
    },
    //对话发送
    sendSocket: function sendSocket() {
      var _this16 = this;
      //创建webSocket
      var that = this;
      // console.log(this.token,3333)
      that.webSendTask = uni.connectSocket({
        url: 'wss://ai.umi6.com:28083/ws/ali/text_to_speech?token=' + this.token + '&long_tts=1&enable_ptts=1',
        // url: 'ws://192.168.31.165:8080/ws/ali/text_to_speech?token='+ this.token +'&long_tts=1&enable_ptts=1',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log('成功', res);
        }
      });
      // 监听WebSocket连接打开事件
      that.webSendTask.onOpen(function (res) {
        console.log("监听WebSocket连接打开事件", res);
      });
      // 监听WebSocket错误
      uni.onSocketError(function (res) {
        console.info("监听WebSocket错误" + res);
      });

      // 接收websocket消息及处理
      that.webSendTask.onMessage(function (res) {
        console.log(res, 7778);
        var type = (0, _typeof2.default)(res.data);
        if (type == 'string') {
          var info = JSON.parse(res.data);
          if (info) {
            var url = info.data;
            var speak_url = global.baseImg + '/' + url;
            console.log(speak_url, 5589);
            _this16.voiceValue.push(speak_url);
            if (_this16.voiceValue.length == 1) {
              _this16.speakValue = _this16.chatValue[0];
              _this16.innerAudioContext.src = _this16.voiceValue[0];
              _this16.innerAudioContext.play();
              _this16.videoContext_no.stop(); //静默视频停止
              _this16.img_index = 8;
              _this16.no_index = 7;
              _this16.y_index = 9;
              _this16.ySpeakLoad = false;
              _this16.videoContext.play(); //第一段视频开始播放
              // console.log('开始播放666')
            }

            var _that = _this16;
            _that.webSendTask.close();
            _that.webSendTask.onClose(function (res) {
              // console.log('WebSocket 已关闭！22');

              _that.textIndex++;
              // console.log(that.textIndex, 1114)
              // console.log(that.chatValue.length, 2224)
              // setTimeout(() => {
              if (_that.textIndex < _that.chatValue.length) {
                _that.sendSocket();
                setTimeout(function () {
                  _that.webSendTask.send({
                    data: JSON.stringify({
                      "text": _that.chatValue[_that.textIndex],
                      "voice": _that.infoSpeak.audio_code,
                      "action_type": "send"
                    })
                  });
                  _that.webSendTask.send({
                    data: JSON.stringify({
                      "action_type": "stop"
                    })
                  });
                }, 1000);
              }
              // }, 800)
            });
          }
        }
      });
    },
    base64ToString: function base64ToString(encodedString) {
      // console.log(encodedString, 'encodedString');
      // Convert the Base64 string to a Uint8Array
      var decodedData = Uint8Array.from(this.atob(encodedString), function (c) {
        return c.charCodeAt(0);
      });

      // Create a TextDecoder instance with the appropriate character encoding
      var decoder = new TextEncoding.TextDecoder('utf8');

      // Decode the Uint8Array to a string
      var decodedString = decoder.decode(decodedData);

      // console.log(decodedString, 'decodedStringdecodedString');
      // console.log(decodedString, 'decodedStringdecodedString');
      return decodedString;
    },
    //解码
    atob: function atob(string) {
      string = String(string).replace(/[\t\n\f\r ]+/g, "");
      // console.log('解码string',string);
      var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
      if (!b64re.test(string)) throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
      string += "==".slice(2 - (string.length & 3));
      var bitmap,
        result = "",
        r1,
        r2,
        i = 0;
      for (; i < string.length;) {
        bitmap = b64.indexOf(string.charAt(i++)) << 18 | b64.indexOf(string.charAt(i++)) << 12 | (r1 = b64.indexOf(string.charAt(i++))) << 6 | (r2 = b64.indexOf(string.charAt(i++)));
        result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
      }
      return result;
    },
    //信息回调方法
    creatChatFun: function creatChatFun(data, state) {
      var _this17 = this;
      var userInfo = JSON.parse(uni.getStorageSync('userInfo'));
      // // console.log(userInfo,'userInfo');
      // data.model = this.chat_pro;
      data.scenario_type = 'chat';
      // data.model = '360GPT_S2_V9';
      data.model = 'chatglm_turbo';
      this.requestTask_three = uni.request({
        // url: global.baseUrl + '/api/chat/new_chat_session',
        url: global.baseUrl + '/api/chat/async_chat_completion',
        data: data,
        header: {
          'source': global.source,
          'Authorization': userInfo.token,
          'role': userInfo.role
        },
        method: 'POST',
        // responseType: 'ArrayBuffer',
        enableChunked: true,
        success: function success(response) {
          _this17.$forceUpdate();
        },
        fail: function fail(err) {
          console.log(err, 'err');
        },
        complete: function complete(_complete) {
          if (_complete.statusCode != 200 && JSON.stringify(_complete.statusCode) != 'null') {
            // 非手动停止才执行
            if (!_this17.stop_three) {
              (0, _chat.xfChat)(data).then(function (res) {
                if (res.code < 49999) {
                  var _userInfo = JSON.parse(uni.getStorageSync('userInfo'));
                  if (res.code == 40013) {
                    _this17.$api.msg('登录信息已过期，请重新登录');
                    setTimeout(function () {
                      uni.navigateTo({
                        url: '/pages/login/login'
                      });
                    }, 1500);
                    uni.hideLoading();
                  } else {
                    uni.hideLoading();
                  }
                  _this17.$forceUpdate();
                } else if (res.code > 49999) {
                  _this17.$api.msg('网络异常，请稍后重试');
                  uni.hideLoading();
                } else {
                  _this17.$api.msg(res.msg);
                  uni.hideLoading();
                }
              }).catch(function (err) {
                uni.hideLoading();
                console.log(err, 'err');
              });
              _this17.$forceUpdate();
            }
          }
        }
      });
      var strArr = [];
      var info = '';
      // let integral = 0
      // let completion_tokens = 0
      // let prompt_tokens = 0

      this.requestTask_three.onChunkReceived(function (response) {
        var arrayBuffer = response.data;
        var uint8Array = new Uint8Array(arrayBuffer);
        var str = new TextEncoding.TextDecoder('utf8').decode(uint8Array);
        var status = '';
        var session_code = '';
        var chat_group_code = '';
        var arr = str.match(/\{(.+?)\}/g);
        arr.map(function (item) {
          // console.log(JSON.parse(item), 'item');
          if (JSON.parse(item).content != 'null' && JSON.parse(item).content != null) info += _this17.base64ToString(JSON.parse(item).content);
          if (JSON.parse(item).finish_reason == 'stop') {
            console.log('结束了');
            _this17.load_state = true;
          } else {
            _this17.load_state = false;
          }
          var send_val = info.replace(_this17.messageValue, "");
          var new_val = '';
          var lastDotIndex = send_val.lastIndexOf("。");
          if (send_val.length > 40 && lastDotIndex != -1 || _this17.load_state == true) {
            if (_this17.load_state) {
              new_val = send_val;
            } else {
              new_val = send_val.substring(0, lastDotIndex + 1);
            }
            _this17.chatValue.push(new_val);
            if (_this17.chatValue.length == 1) {
              _this17.sendSocket();
              _this17.isPlay = false; //问题回答开始不再支持点击互动
              setTimeout(function () {
                uni.hideLoading();
                console.log(_this17.infoSpeak.audio_code, 99999);
                _this17.webSendTask.send({
                  data: JSON.stringify({
                    "text": new_val,
                    "voice": _this17.infoSpeak.audio_code,
                    "action_type": "send"
                  })
                });
                _this17.webSendTask.send({
                  data: JSON.stringify({
                    "action_type": "stop"
                  })
                });
              }, 1000);
            }
            console.log(new_val, 3333);
            _this17.messageValue = _this17.messageValue + new_val;
            // console.log(this.messageValue,4444)
          }
        });

        // console.log(new_val,3333)
      });
    },
    messageSubmit: function messageSubmit() {
      var _this18 = this;
      if (this.messageValue == '') {
        return this.$api.msg('请输入留言内容');
      }
      if (this.messagePhone == '') {
        return this.$api.msg('请输入联系方式');
      }
      var info = JSON.parse(uni.getStorageSync('userInfo'));
      var val = {
        'model_id': this.infoSpeak.model_id,
        'user_id': info.user_id,
        'content': this.messageValue,
        'user_mobile': this.messagePhone
      };
      (0, _home.creatMessage)(val).then(function (res) {
        if (res.code == 20000) {
          _this18.$api.msg('留言成功');
          _this18.messageShow = false;
        } else {
          _this18.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this18.$api.msg('留言失败');
      });
    },
    toPhone: function toPhone(phone) {
      uni.makePhoneCall({
        phoneNumber: phone
      });
    },
    checkInfo: function checkInfo(tip) {
      this.tipShow = true;
      this.top_tip = tip;
    },
    copyWebsite: function copyWebsite(val) {
      wx.setClipboardData({
        data: val,
        //要被复制的内容
        success: function success() {
          //复制成功的回调函数
          uni.showToast({
            //提示
            title: '复制成功'
          });
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 1078:
/*!*****************************************************************************************************************!*\
  !*** F:/G/company/umi-git/childCont/digital/chat.vue?vue&type=style&index=0&id=86dae404&scoped=true&lang=less& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_86dae404_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=style&index=0&id=86dae404&scoped=true&lang=less& */ 1079);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_86dae404_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_86dae404_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_86dae404_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_86dae404_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_86dae404_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1079:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/childCont/digital/chat.vue?vue&type=style&index=0&id=86dae404&scoped=true&lang=less& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

},[[1072,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/childCont/digital/chat.js.map