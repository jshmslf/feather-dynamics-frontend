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

// src/app/pages/privacy-policy.page.ts
var PrivacyPolicyPage = class _PrivacyPolicyPage {
  static \u0275fac = function PrivacyPolicyPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrivacyPolicyPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrivacyPolicyPage, selectors: [["app-privacy-policy"]], decls: 1, vars: 0, consts: [["type", "privacy-policy"]], template: function PrivacyPolicyPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-legal-page", 0);
    }
  }, dependencies: [LegalPageComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrivacyPolicyPage, [{
    type: Component,
    args: [{
      selector: "app-privacy-policy",
      standalone: true,
      imports: [LegalPageComponent],
      template: `<app-legal-page type="privacy-policy" />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrivacyPolicyPage, { className: "PrivacyPolicyPage", filePath: "src/app/pages/privacy-policy.page.ts", lineNumber: 10 });
})();
export {
  PrivacyPolicyPage
};
//# sourceMappingURL=chunk-TBDQZXDF.js.map
