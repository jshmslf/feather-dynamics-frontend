import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  Inject,
  Input,
  MarkdownComponent,
  MarkdownModule,
  PLATFORM_ID,
  isPlatformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JSI5HNZN.js";

// src/app/shared/legal-page/legal-page.ts
function LegalPageComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "markdown", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.meta.markdownSrc);
  }
}
var LEGAL_META = {
  "privacy-policy": {
    title: "Privacy Policy",
    subtitle: "How we collect, use, and protect your information.",
    effectiveDate: "January 2026",
    siteCovered: "featherdynamics.com, featherdynamic.com",
    markdownSrc: "assets/legal/privacy-policy.md"
  },
  "terms-and-conditions": {
    title: "Terms & Conditions",
    subtitle: "The rules and guidelines for using our services.",
    effectiveDate: "January 2026",
    siteCovered: "featherdynamics.com, featherdynamic.com",
    markdownSrc: "assets/legal/terms-and-conditions.md"
  }
};
var LegalPageComponent = class _LegalPageComponent {
  platformId;
  type = "privacy-policy";
  meta;
  isBrowser;
  constructor(platformId) {
    this.platformId = platformId;
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
    this.meta = LEGAL_META[this.type];
  }
  static \u0275fac = function LegalPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LegalPageComponent)(\u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LegalPageComponent, selectors: [["app-legal-page"]], inputs: { type: "type" }, decls: 29, vars: 6, consts: [[1, "legal"], [1, "legal__header"], [1, "legal__header-inner"], [1, "legal__label"], [1, "legal__title"], [1, "legal__subtitle"], [1, "legal__meta"], [1, "legal__meta-item"], [1, "legal__meta-label"], [1, "legal__meta-value"], ["aria-hidden", "true", 1, "legal__meta-divider"], ["aria-hidden", "true", 1, "legal__header-deco"], [1, "legal__header-deco-text"], [1, "legal__content-wrapper"], ["aria-hidden", "true", 1, "legal__sidebar"], [1, "legal__sidebar-line"], [1, "legal__body"], [1, "legal__markdown", 3, "src"]], template: function LegalPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "article", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Legal Document");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "span", 8);
      \u0275\u0275text(12, "Effective Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(15, "div", 10);
      \u0275\u0275elementStart(16, "div", 7)(17, "span", 8);
      \u0275\u0275text(18, "Site Covered");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 9);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 11)(22, "span", 12);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 13)(25, "aside", 14);
      \u0275\u0275element(26, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "main", 16);
      \u0275\u0275conditionalCreate(28, LegalPageComponent_Conditional_28_Template, 1, 1, "markdown", 17);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.meta.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.meta.subtitle);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.meta.effectiveDate);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.meta.siteCovered);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.meta.title);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isBrowser ? 28 : -1);
    }
  }, dependencies: [CommonModule, MarkdownModule, MarkdownComponent], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.legal[_ngcontent-%COMP%] {\n  --c-bg: #f5f2ec;\n  --c-ink: #1a1814;\n  --c-accent: var(--color-accent);\n  --c-muted: #7a766e;\n  --c-line: #d6d0c4;\n  --c-header-bg: #1a1814;\n  --c-header-ink: #f5f2ec;\n  --c-deco-ink: rgba(245, 242, 236, 0.06);\n  --text: 1.25rem;\n  --text-xl: 2rem;\n  --text-2xl: 4rem;\n  --font-display:\n    "DM Serif Display",\n    "Georgia",\n    serif;\n  --font-body:\n    "Sora",\n    "Helvetica Neue",\n    sans-serif;\n  background: var(--c-bg);\n  color: var(--c-ink);\n  font-family: var(--font-body);\n  min-height: 100vh;\n}\n.legal__header[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--c-header-bg);\n  color: var(--c-header-ink);\n  overflow: hidden;\n  padding: clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 4rem) clamp(2.5rem, 6vw, 4rem);\n}\n.legal__header-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 60rem;\n}\n.legal__label[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--c-accent);\n  margin-bottom: 1.5rem;\n}\n.legal__title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(var(--text-xl), 6vw, var(--text-2xl));\n  font-weight: 400;\n  line-height: 1.05;\n  margin: 0 0 1.25rem;\n  letter-spacing: -0.02em;\n}\n.legal__subtitle[_ngcontent-%COMP%] {\n  font-size: var(--text);\n  font-weight: 300;\n  color: rgba(245, 242, 236, 0.65);\n  margin: 0 0 2.5rem;\n  max-width: 38rem;\n  line-height: 1.6;\n}\n.legal__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 36em) {\n  .legal__meta[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    gap: 0;\n  }\n}\n.legal__meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.legal__meta-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--c-muted);\n}\n.legal__meta-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 300;\n  color: var(--c-header-ink);\n}\n.legal__meta-divider[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 36em) {\n  .legal__meta-divider[_ngcontent-%COMP%] {\n    display: block;\n    width: 1px;\n    height: 2.5rem;\n    background: rgba(245, 242, 236, 0.15);\n    margin: 0 2rem;\n  }\n}\n.legal__header-deco[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  pointer-events: none;\n  overflow: hidden;\n}\n.legal__header-deco-text[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(5rem, 16vw, 14rem);\n  font-weight: 400;\n  line-height: 0.85;\n  color: var(--c-deco-ink);\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n  letter-spacing: -0.04em;\n  transform: translateX(5%);\n}\n.legal__content-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  max-width: 80rem;\n  margin: 0 auto;\n}\n@media (min-width: 56em) {\n  .legal__content-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 5rem 1fr;\n  }\n}\n.legal__sidebar[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 56em) {\n  .legal__sidebar[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding-top: 5rem;\n  }\n}\n.legal__sidebar-line[_ngcontent-%COMP%] {\n  width: 1px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--c-accent) 0%,\n      var(--c-line) 30%,\n      transparent 100%);\n  min-height: 20rem;\n  align-self: flex-start;\n  position: sticky;\n  top: 10rem;\n}\n.legal__body[_ngcontent-%COMP%] {\n  padding: clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 8vw, 6rem);\n}\n.legal__markdown[_ngcontent-%COMP%]     * {\n  font-weight: 300;\n}\n.legal__markdown[_ngcontent-%COMP%]     h1, \n.legal__markdown[_ngcontent-%COMP%]     h2, \n.legal__markdown[_ngcontent-%COMP%]     h3, \n.legal__markdown[_ngcontent-%COMP%]     h4, \n.legal__markdown[_ngcontent-%COMP%]     h5, \n.legal__markdown[_ngcontent-%COMP%]     h6 {\n  font-family: var(--font-display);\n  font-weight: 400;\n  color: var(--c-ink);\n  line-height: 1.15;\n  letter-spacing: -0.01em;\n}\n.legal__markdown[_ngcontent-%COMP%]     h1 {\n  font-size: clamp(var(--text-xl), 4vw, 3rem);\n  margin: 0 0 1.5rem;\n}\n.legal__markdown[_ngcontent-%COMP%]     h2 {\n  font-size: clamp(var(--text), 3vw, var(--text-xl));\n  margin: 3.5rem 0 1rem;\n  padding-top: 3.5rem;\n  border-top: 1px solid var(--c-line);\n}\n.legal__markdown[_ngcontent-%COMP%]     h3 {\n  font-size: clamp(1rem, 2vw, 1.4rem);\n  margin: 2.5rem 0 0.75rem;\n  color: var(--c-accent);\n  font-family: var(--font-body);\n  letter-spacing: 0.01em;\n}\n.legal__markdown[_ngcontent-%COMP%]     h4 {\n  font-size: var(--text);\n  margin: 2rem 0 0.5rem;\n  font-family: var(--font-body);\n}\n.legal__markdown[_ngcontent-%COMP%]     p {\n  font-size: var(--text);\n  line-height: 1.75;\n  color: var(--c-ink);\n  margin: 0 0 1.25rem;\n}\n.legal__markdown[_ngcontent-%COMP%]     a {\n  color: var(--c-accent);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n  transition: opacity 0.2s;\n}\n.legal__markdown[_ngcontent-%COMP%]     a:hover {\n  opacity: 0.7;\n}\n.legal__markdown[_ngcontent-%COMP%]     ul, \n.legal__markdown[_ngcontent-%COMP%]     ol {\n  padding-left: 1.5rem;\n  margin: 0 0 1.25rem;\n}\n.legal__markdown[_ngcontent-%COMP%]     ul li, \n.legal__markdown[_ngcontent-%COMP%]     ol li {\n  font-size: var(--text);\n  line-height: 1.75;\n  margin-bottom: 0.5rem;\n  font-weight: 300;\n}\n.legal__markdown[_ngcontent-%COMP%]     ul li::marker, \n.legal__markdown[_ngcontent-%COMP%]     ol li::marker {\n  color: var(--c-accent);\n}\n.legal__markdown[_ngcontent-%COMP%]     blockquote {\n  margin: 2rem 0;\n  padding: 1.5rem 2rem;\n  border-left: 3px solid var(--c-accent);\n  background: rgba(201, 65, 10, 0.04);\n}\n.legal__markdown[_ngcontent-%COMP%]     blockquote p {\n  margin: 0;\n  font-size: var(--text);\n  color: var(--c-muted);\n}\n.legal__markdown[_ngcontent-%COMP%]     code {\n  font-family: "Courier New", monospace;\n  font-size: 0.9em;\n  background: rgba(26, 24, 20, 0.06);\n  padding: 0.15em 0.4em;\n}\n.legal__markdown[_ngcontent-%COMP%]     pre {\n  background: var(--c-ink);\n  color: var(--c-bg);\n  padding: 1.5rem;\n  overflow-x: auto;\n  margin: 1.5rem 0;\n}\n.legal__markdown[_ngcontent-%COMP%]     pre code {\n  background: none;\n  padding: 0;\n  color: inherit;\n  font-size: 0.875rem;\n}\n.legal__markdown[_ngcontent-%COMP%]     hr {\n  border: none;\n  border-top: 1px solid var(--c-line);\n  margin: 3rem 0;\n}\n.legal__markdown[_ngcontent-%COMP%]     table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1.5rem 0;\n  font-size: 0.95rem;\n}\n.legal__markdown[_ngcontent-%COMP%]     table th {\n  text-align: left;\n  padding: 0.75rem 1rem;\n  border-bottom: 2px solid var(--c-ink);\n  font-weight: 400;\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.legal__markdown[_ngcontent-%COMP%]     table td {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--c-line);\n  font-weight: 300;\n}\n.legal__markdown[_ngcontent-%COMP%]     strong, \n.legal__markdown[_ngcontent-%COMP%]     b {\n  font-weight: 400;\n  color: var(--c-ink);\n}\n/*# sourceMappingURL=legal-page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LegalPageComponent, [{
    type: Component,
    args: [{ selector: "app-legal-page", standalone: true, imports: [CommonModule, MarkdownModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<article class="legal">\r\n    <!-- HEADER -->\r\n    <header class="legal__header">\r\n        <div class="legal__header-inner">\r\n            <div class="legal__label">Legal Document</div>\r\n\r\n            <h1 class="legal__title">{{ meta.title }}</h1>\r\n\r\n            <p class="legal__subtitle">{{ meta.subtitle }}</p>\r\n\r\n            <div class="legal__meta">\r\n                <div class="legal__meta-item">\r\n                    <span class="legal__meta-label">Effective Date</span>\r\n                    <span class="legal__meta-value">{{ meta.effectiveDate }}</span>\r\n                </div>\r\n                <div class="legal__meta-divider" aria-hidden="true"></div>\r\n                <div class="legal__meta-item">\r\n                    <span class="legal__meta-label">Site Covered</span>\r\n                    <span class="legal__meta-value">{{ meta.siteCovered }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Decorative offset block -->\r\n        <div class="legal__header-deco" aria-hidden="true">\r\n            <span class="legal__header-deco-text">{{ meta.title }}</span>\r\n        </div>\r\n    </header>\r\n\r\n    <!-- CONTENT -->\r\n    <div class="legal__content-wrapper">\r\n        <aside class="legal__sidebar" aria-hidden="true">\r\n            <div class="legal__sidebar-line"></div>\r\n        </aside>\r\n\r\n        <main class="legal__body">\r\n            @if (isBrowser) {\r\n            <markdown [src]="meta.markdownSrc" class="legal__markdown"></markdown>\r\n            }\r\n        </main>\r\n    </div>\r\n</article>', styles: ['/* src/app/shared/legal-page/legal-page.scss */\n:host {\n  display: block;\n}\n.legal {\n  --c-bg: #f5f2ec;\n  --c-ink: #1a1814;\n  --c-accent: var(--color-accent);\n  --c-muted: #7a766e;\n  --c-line: #d6d0c4;\n  --c-header-bg: #1a1814;\n  --c-header-ink: #f5f2ec;\n  --c-deco-ink: rgba(245, 242, 236, 0.06);\n  --text: 1.25rem;\n  --text-xl: 2rem;\n  --text-2xl: 4rem;\n  --font-display:\n    "DM Serif Display",\n    "Georgia",\n    serif;\n  --font-body:\n    "Sora",\n    "Helvetica Neue",\n    sans-serif;\n  background: var(--c-bg);\n  color: var(--c-ink);\n  font-family: var(--font-body);\n  min-height: 100vh;\n}\n.legal__header {\n  position: relative;\n  background: var(--c-header-bg);\n  color: var(--c-header-ink);\n  overflow: hidden;\n  padding: clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 4rem) clamp(2.5rem, 6vw, 4rem);\n}\n.legal__header-inner {\n  position: relative;\n  z-index: 2;\n  max-width: 60rem;\n}\n.legal__label {\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--c-accent);\n  margin-bottom: 1.5rem;\n}\n.legal__title {\n  font-family: var(--font-display);\n  font-size: clamp(var(--text-xl), 6vw, var(--text-2xl));\n  font-weight: 400;\n  line-height: 1.05;\n  margin: 0 0 1.25rem;\n  letter-spacing: -0.02em;\n}\n.legal__subtitle {\n  font-size: var(--text);\n  font-weight: 300;\n  color: rgba(245, 242, 236, 0.65);\n  margin: 0 0 2.5rem;\n  max-width: 38rem;\n  line-height: 1.6;\n}\n.legal__meta {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 36em) {\n  .legal__meta {\n    flex-direction: row;\n    align-items: center;\n    gap: 0;\n  }\n}\n.legal__meta-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.legal__meta-label {\n  font-size: 0.7rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--c-muted);\n}\n.legal__meta-value {\n  font-size: 0.9rem;\n  font-weight: 300;\n  color: var(--c-header-ink);\n}\n.legal__meta-divider {\n  display: none;\n}\n@media (min-width: 36em) {\n  .legal__meta-divider {\n    display: block;\n    width: 1px;\n    height: 2.5rem;\n    background: rgba(245, 242, 236, 0.15);\n    margin: 0 2rem;\n  }\n}\n.legal__header-deco {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  pointer-events: none;\n  overflow: hidden;\n}\n.legal__header-deco-text {\n  font-family: var(--font-display);\n  font-size: clamp(5rem, 16vw, 14rem);\n  font-weight: 400;\n  line-height: 0.85;\n  color: var(--c-deco-ink);\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n  letter-spacing: -0.04em;\n  transform: translateX(5%);\n}\n.legal__content-wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  max-width: 80rem;\n  margin: 0 auto;\n}\n@media (min-width: 56em) {\n  .legal__content-wrapper {\n    grid-template-columns: 5rem 1fr;\n  }\n}\n.legal__sidebar {\n  display: none;\n}\n@media (min-width: 56em) {\n  .legal__sidebar {\n    display: flex;\n    justify-content: center;\n    padding-top: 5rem;\n  }\n}\n.legal__sidebar-line {\n  width: 1px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--c-accent) 0%,\n      var(--c-line) 30%,\n      transparent 100%);\n  min-height: 20rem;\n  align-self: flex-start;\n  position: sticky;\n  top: 10rem;\n}\n.legal__body {\n  padding: clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 8vw, 6rem);\n}\n.legal__markdown ::ng-deep * {\n  font-weight: 300;\n}\n.legal__markdown ::ng-deep h1,\n.legal__markdown ::ng-deep h2,\n.legal__markdown ::ng-deep h3,\n.legal__markdown ::ng-deep h4,\n.legal__markdown ::ng-deep h5,\n.legal__markdown ::ng-deep h6 {\n  font-family: var(--font-display);\n  font-weight: 400;\n  color: var(--c-ink);\n  line-height: 1.15;\n  letter-spacing: -0.01em;\n}\n.legal__markdown ::ng-deep h1 {\n  font-size: clamp(var(--text-xl), 4vw, 3rem);\n  margin: 0 0 1.5rem;\n}\n.legal__markdown ::ng-deep h2 {\n  font-size: clamp(var(--text), 3vw, var(--text-xl));\n  margin: 3.5rem 0 1rem;\n  padding-top: 3.5rem;\n  border-top: 1px solid var(--c-line);\n}\n.legal__markdown ::ng-deep h3 {\n  font-size: clamp(1rem, 2vw, 1.4rem);\n  margin: 2.5rem 0 0.75rem;\n  color: var(--c-accent);\n  font-family: var(--font-body);\n  letter-spacing: 0.01em;\n}\n.legal__markdown ::ng-deep h4 {\n  font-size: var(--text);\n  margin: 2rem 0 0.5rem;\n  font-family: var(--font-body);\n}\n.legal__markdown ::ng-deep p {\n  font-size: var(--text);\n  line-height: 1.75;\n  color: var(--c-ink);\n  margin: 0 0 1.25rem;\n}\n.legal__markdown ::ng-deep a {\n  color: var(--c-accent);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n  transition: opacity 0.2s;\n}\n.legal__markdown ::ng-deep a:hover {\n  opacity: 0.7;\n}\n.legal__markdown ::ng-deep ul,\n.legal__markdown ::ng-deep ol {\n  padding-left: 1.5rem;\n  margin: 0 0 1.25rem;\n}\n.legal__markdown ::ng-deep ul li,\n.legal__markdown ::ng-deep ol li {\n  font-size: var(--text);\n  line-height: 1.75;\n  margin-bottom: 0.5rem;\n  font-weight: 300;\n}\n.legal__markdown ::ng-deep ul li::marker,\n.legal__markdown ::ng-deep ol li::marker {\n  color: var(--c-accent);\n}\n.legal__markdown ::ng-deep blockquote {\n  margin: 2rem 0;\n  padding: 1.5rem 2rem;\n  border-left: 3px solid var(--c-accent);\n  background: rgba(201, 65, 10, 0.04);\n}\n.legal__markdown ::ng-deep blockquote p {\n  margin: 0;\n  font-size: var(--text);\n  color: var(--c-muted);\n}\n.legal__markdown ::ng-deep code {\n  font-family: "Courier New", monospace;\n  font-size: 0.9em;\n  background: rgba(26, 24, 20, 0.06);\n  padding: 0.15em 0.4em;\n}\n.legal__markdown ::ng-deep pre {\n  background: var(--c-ink);\n  color: var(--c-bg);\n  padding: 1.5rem;\n  overflow-x: auto;\n  margin: 1.5rem 0;\n}\n.legal__markdown ::ng-deep pre code {\n  background: none;\n  padding: 0;\n  color: inherit;\n  font-size: 0.875rem;\n}\n.legal__markdown ::ng-deep hr {\n  border: none;\n  border-top: 1px solid var(--c-line);\n  margin: 3rem 0;\n}\n.legal__markdown ::ng-deep table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1.5rem 0;\n  font-size: 0.95rem;\n}\n.legal__markdown ::ng-deep table th {\n  text-align: left;\n  padding: 0.75rem 1rem;\n  border-bottom: 2px solid var(--c-ink);\n  font-weight: 400;\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.legal__markdown ::ng-deep table td {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--c-line);\n  font-weight: 300;\n}\n.legal__markdown ::ng-deep strong,\n.legal__markdown ::ng-deep b {\n  font-weight: 400;\n  color: var(--c-ink);\n}\n/*# sourceMappingURL=legal-page.css.map */\n'] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { type: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LegalPageComponent, { className: "LegalPageComponent", filePath: "src/app/shared/legal-page/legal-page.ts", lineNumber: 48 });
})();

export {
  LegalPageComponent
};
//# sourceMappingURL=chunk-VPUUYIRC.js.map
