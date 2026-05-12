import {
  LegalPageComponent
} from "./chunk-VPUUYIRC.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-JSI5HNZN.js";
import "./chunk-GOMI4DH3.js";

// src/app/pages/terms-and-conditions.page.ts
var TermsAndConditionsPage = class _TermsAndConditionsPage {
  static \u0275fac = function TermsAndConditionsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TermsAndConditionsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TermsAndConditionsPage, selectors: [["app-terms-and-conditions"]], decls: 1, vars: 0, consts: [["type", "terms-and-conditions"]], template: function TermsAndConditionsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-legal-page", 0);
    }
  }, dependencies: [LegalPageComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TermsAndConditionsPage, [{
    type: Component,
    args: [{
      selector: "app-terms-and-conditions",
      standalone: true,
      imports: [LegalPageComponent],
      template: `<app-legal-page type="terms-and-conditions" />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TermsAndConditionsPage, { className: "TermsAndConditionsPage", filePath: "src/app/pages/terms-and-conditions.page.ts", lineNumber: 10 });
})();
export {
  TermsAndConditionsPage
};
//# sourceMappingURL=chunk-ZSNSEXGT.js.map
