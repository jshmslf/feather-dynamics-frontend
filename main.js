import {
  gsapWithCSS
} from "./chunk-HKBT3BQG.js";
import {
  ScrollTrigger
} from "./chunk-I676EX5N.js";
import {
  APP_BOOTSTRAP_LISTENER,
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Compiler,
  Component,
  Console,
  ContentChildren,
  DOCUMENT,
  DatePipe,
  DecimalPipe,
  DestroyRef,
  Directive,
  EMPTY,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EmptyError,
  EnvironmentInjector,
  EventEmitter,
  HashLocationStrategy,
  Host,
  HostAttributeToken,
  HostListener,
  HttpClient,
  HttpClientModule,
  INTERNAL_APPLICATION_ERROR_HANDLER,
  IS_ENABLED_BLOCKING_INITIAL_NAVIGATION,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCATION_INITIALIZED,
  Location,
  LocationStrategy,
  MarkdownComponent,
  Meta,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgModuleFactory$1,
  NgStyle,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  PRECOMMIT_HANDLER_SUPPORTED,
  PathLocationStrategy,
  PendingTasksInternal,
  PlatformLocation,
  PlatformNavigation,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  Title,
  TitleCasePipe,
  UpperCasePipe,
  Version,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewportScroller,
  afterNextRender,
  booleanAttribute,
  bootstrapApplication,
  catchError,
  combineLatest,
  computed,
  concat,
  concatMap,
  createEnvironmentInjector,
  defer,
  effect,
  filter,
  finalize,
  first,
  forkJoin,
  formatRuntimeError,
  forwardRef,
  from,
  getDOM,
  inject,
  input,
  isInjectable,
  isNgModule,
  isObservable,
  isPlatformBrowser,
  isPromise,
  isStandalone,
  isSubscribable,
  linkedSignal,
  makeEnvironmentProviders,
  map,
  mergeAll,
  mergeMap,
  of,
  output,
  performanceMarkFeature,
  pipe,
  promiseWithResolvers,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideClientHydration,
  provideHttpClient,
  provideMarkdown,
  publishExternalGlobalUtil,
  reflectComponentType,
  runInInjectionContext,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  throwError,
  untracked,
  withEventReplay,
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinterpolate1,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵsanitizeUrlOrResourceUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-JSI5HNZN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@angular/router/fesm2022/_router-chunk.mjs
/**
 * @license Angular v21.2.10
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var PRIMARY_OUTLET = "primary";
var RouteTitleKey = /* @__PURE__ */ Symbol("RouteTitle");
var ParamsAsMap = class {
  params;
  constructor(params) {
    this.params = params || {};
  }
  has(name) {
    return Object.prototype.hasOwnProperty.call(this.params, name);
  }
  get(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v[0] : v;
    }
    return null;
  }
  getAll(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v : [v];
    }
    return [];
  }
  get keys() {
    return Object.keys(this.params);
  }
};
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
function matchParts(routeParts, urlSegments, posParams) {
  for (let i = 0; i < routeParts.length; i++) {
    const part = routeParts[i];
    const segment = urlSegments[i];
    const isParameter = part[0] === ":";
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      return false;
    }
  }
  return true;
}
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split("/");
  const wildcardIndex = parts.indexOf("**");
  if (wildcardIndex === -1) {
    if (parts.length > segments.length) {
      return null;
    }
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || parts.length < segments.length)) {
      return null;
    }
    const posParams2 = {};
    const consumed = segments.slice(0, parts.length);
    if (!matchParts(parts, consumed, posParams2)) {
      return null;
    }
    return {
      consumed,
      posParams: posParams2
    };
  }
  if (wildcardIndex !== parts.lastIndexOf("**")) {
    return null;
  }
  const pre = parts.slice(0, wildcardIndex);
  const post = parts.slice(wildcardIndex + 1);
  if (pre.length + post.length > segments.length) {
    return null;
  }
  if (route.pathMatch === "full" && segmentGroup.hasChildren() && route.path !== "**") {
    return null;
  }
  const posParams = {};
  if (!matchParts(pre, segments.slice(0, pre.length), posParams)) {
    return null;
  }
  if (!matchParts(post, segments.slice(segments.length - post.length), posParams)) {
    return null;
  }
  return {
    consumed: segments,
    posParams
  };
}
function firstValueFrom(source) {
  return new Promise((resolve, reject) => {
    source.pipe(first()).subscribe({
      next: (value) => resolve(value),
      error: (err) => reject(err)
    });
  });
}
function shallowEqualArrays(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i])) return false;
  }
  return true;
}
function shallowEqual(a, b) {
  const k1 = a ? getDataKeys(a) : void 0;
  const k2 = b ? getDataKeys(b) : void 0;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (!equalArraysOrString(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
function equalArraysOrString(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a === b;
  }
}
function last(a) {
  return a.length > 0 ? a[a.length - 1] : null;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
function wrapIntoPromise(value) {
  if (isObservable(value)) {
    return firstValueFrom(value);
  }
  return Promise.resolve(value);
}
var pathCompareMap = {
  "exact": equalSegmentGroups,
  "subset": containsSegmentGroup
};
var paramCompareMap = {
  "exact": equalParams,
  "subset": containsParams,
  "ignored": () => true
};
var exactMatchOptions = {
  paths: "exact",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "exact"
};
var subsetMatchOptions = {
  paths: "subset",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "subset"
};
function isActive(url, router, matchOptions) {
  const urlTree = url instanceof UrlTree ? url : router.parseUrl(url);
  return computed(() => containsTree(router.lastSuccessfulNavigation()?.finalUrl ?? new UrlTree(), urlTree, __spreadValues(__spreadValues({}, subsetMatchOptions), matchOptions)));
}
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === "exact" && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments)) return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren) return false;
  for (const c in containee.children) {
    if (!container.children[c]) return false;
    if (!equalSegmentGroups(container.children[c], containee.children[c], matrixParams)) return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every((key) => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths)) return false;
    if (containee.hasChildren()) return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams)) return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths)) return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams)) return false;
    for (const c in containee.children) {
      if (!container.children[c]) return false;
      if (!containsSegmentGroup(container.children[c], containee.children[c], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current)) return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams)) return false;
    if (!container.children[PRIMARY_OUTLET]) return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i) => {
    return paramCompareMap[options](containerPaths[i].parameters, containeeSegment.parameters);
  });
}
var UrlTree = class {
  root;
  queryParams;
  fragment;
  _queryParamMap;
  constructor(root = new UrlSegmentGroup([], {}), queryParams = {}, fragment = null) {
    this.root = root;
    this.queryParams = queryParams;
    this.fragment = fragment;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (root.segments.length > 0) {
        throw new RuntimeError(4015, "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.");
      }
    }
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    return DEFAULT_SERIALIZER.serialize(this);
  }
};
var UrlSegmentGroup = class {
  segments;
  children;
  parent = null;
  constructor(segments, children) {
    this.segments = segments;
    this.children = children;
    Object.values(children).forEach((v) => v.parent = this);
  }
  hasChildren() {
    return this.numberOfChildren > 0;
  }
  get numberOfChildren() {
    return Object.keys(this.children).length;
  }
  toString() {
    return serializePaths(this);
  }
};
var UrlSegment = class {
  path;
  parameters;
  _parameterMap;
  constructor(path, parameters) {
    this.path = path;
    this.parameters = parameters;
  }
  get parameterMap() {
    this._parameterMap ??= convertToParamMap(this.parameters);
    return this._parameterMap;
  }
  toString() {
    return serializePath(this);
  }
};
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length) return false;
  return as.every((a, i) => a.path === bs[i].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
var UrlSerializer = class _UrlSerializer {
  static \u0275fac = function UrlSerializer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlSerializer)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UrlSerializer,
    factory: () => (() => new DefaultUrlSerializer())(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new DefaultUrlSerializer()
    }]
  }], null, null);
})();
var DefaultUrlSerializer = class {
  parse(url) {
    const p = new UrlParser(url);
    return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
  }
  serialize(tree2) {
    const segment = `/${serializeSegment(tree2.root, true)}`;
    const query = serializeQueryParams(tree2.queryParams);
    const fragment = typeof tree2.fragment === `string` ? `#${encodeUriFragment(tree2.fragment)}` : "";
    return `${segment}${query}${fragment}`;
  }
};
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
function serializePaths(segment) {
  return segment.segments.map((p) => serializePath(p)).join("/");
}
function serializeSegment(segment, root) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : "";
    const children = [];
    Object.entries(segment.children).forEach(([k, v]) => {
      if (k !== PRIMARY_OUTLET) {
        children.push(`${k}:${serializeSegment(v, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join("//")})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v, k) => {
      if (k === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k}:${serializeSegment(v, false)}`];
    });
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join("//")})`;
  }
}
function encodeUriString(s) {
  return encodeURIComponent(s).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function encodeUriQuery(s) {
  return encodeUriString(s).replace(/%3B/gi, ";");
}
function encodeUriFragment(s) {
  return encodeURI(s);
}
function encodeUriSegment(s) {
  return encodeUriString(s).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function decode(s) {
  return decodeURIComponent(s);
}
function decodeQuery(s) {
  return decode(s.replace(/\+/g, "%20"));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.entries(params).map(([key, value]) => `;${encodeUriSegment(key)}=${encodeUriSegment(value)}`).join("");
}
function serializeQueryParams(params) {
  const strParams = Object.entries(params).map(([name, value]) => {
    return Array.isArray(value) ? value.map((v) => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join("&") : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter((s) => s);
  return strParams.length ? `?${strParams.join("&")}` : "";
}
var SEGMENT_RE = /^[^\/()?;#]+/;
function matchSegments(str) {
  const match2 = str.match(SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
function matchMatrixKeySegments(str) {
  const match2 = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
function matchQueryParams(str) {
  const match2 = str.match(QUERY_PARAM_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_VALUE_RE = /^[^&#]+/;
function matchUrlQueryParamValue(str) {
  const match2 = str.match(QUERY_PARAM_VALUE_RE);
  return match2 ? match2[0] : "";
}
var UrlParser = class {
  url;
  remaining;
  constructor(url) {
    this.url = url;
    this.remaining = url;
  }
  parseRootSegment() {
    while (this.consumeOptional("/")) {
    }
    if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
      return new UrlSegmentGroup([], {});
    }
    return new UrlSegmentGroup([], this.parseChildren());
  }
  parseQueryParams() {
    const params = {};
    if (this.consumeOptional("?")) {
      do {
        this.parseQueryParam(params);
      } while (this.consumeOptional("&"));
    }
    return params;
  }
  parseFragment() {
    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren(depth = 0) {
    if (depth > 50) {
      throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && "URL is too deep");
    }
    if (this.remaining === "") {
      return {};
    }
    this.consumeOptional("/");
    const segments = [];
    if (!this.peekStartsWith("(")) {
      segments.push(this.parseSegment());
    }
    while (this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(")) {
      this.capture("/");
      segments.push(this.parseSegment());
    }
    let children = {};
    if (this.peekStartsWith("/(")) {
      this.capture("/");
      children = this.parseParens(true, depth);
    }
    let res = {};
    if (this.peekStartsWith("(")) {
      res = this.parseParens(false, depth);
    }
    if (segments.length > 0 || Object.keys(children).length > 0) {
      res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
    }
    return res;
  }
  parseSegment() {
    const path = matchSegments(this.remaining);
    if (path === "" && this.peekStartsWith(";")) {
      throw new RuntimeError(4009, (typeof ngDevMode === "undefined" || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
    }
    this.capture(path);
    return new UrlSegment(decode(path), this.parseMatrixParams());
  }
  parseMatrixParams() {
    const params = {};
    while (this.consumeOptional(";")) {
      this.parseParam(params);
    }
    return params;
  }
  parseParam(params) {
    const key = matchMatrixKeySegments(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchSegments(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    params[decode(key)] = decode(value);
  }
  parseQueryParam(params) {
    const key = matchQueryParams(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchUrlQueryParamValue(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    const decodedKey = decodeQuery(key);
    const decodedVal = decodeQuery(value);
    if (params.hasOwnProperty(decodedKey)) {
      let currentVal = params[decodedKey];
      if (!Array.isArray(currentVal)) {
        currentVal = [currentVal];
        params[decodedKey] = currentVal;
      }
      currentVal.push(decodedVal);
    } else {
      params[decodedKey] = decodedVal;
    }
  }
  parseParens(allowPrimary, depth) {
    const segments = {};
    this.capture("(");
    while (!this.consumeOptional(")") && this.remaining.length > 0) {
      const path = matchSegments(this.remaining);
      const next = this.remaining[path.length];
      if (next !== "/" && next !== ")" && next !== ";") {
        throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot parse url '${this.url}'`);
      }
      let outletName;
      if (path.indexOf(":") > -1) {
        outletName = path.slice(0, path.indexOf(":"));
        this.capture(outletName);
        this.capture(":");
      } else if (allowPrimary) {
        outletName = PRIMARY_OUTLET;
      }
      const children = this.parseChildren(depth + 1);
      segments[outletName ?? PRIMARY_OUTLET] = Object.keys(children).length === 1 && children[PRIMARY_OUTLET] ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
      this.consumeOptional("//");
    }
    return segments;
  }
  peekStartsWith(str) {
    return this.remaining.startsWith(str);
  }
  consumeOptional(str) {
    if (this.peekStartsWith(str)) {
      this.remaining = this.remaining.substring(str.length);
      return true;
    }
    return false;
  }
  capture(str) {
    if (!this.consumeOptional(str)) {
      throw new RuntimeError(4011, (typeof ngDevMode === "undefined" || ngDevMode) && `Expected "${str}".`);
    }
  }
};
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], {
    [PRIMARY_OUTLET]: rootCandidate
  }) : rootCandidate;
}
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const [childOutlet, child] of Object.entries(segmentGroup.children)) {
    const childCandidate = squashSegmentGroup(child);
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        newChildren[grandChildOutlet] = grandChild;
      }
    } else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      newChildren[childOutlet] = childCandidate;
    }
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s);
}
function mergeTrivialChildren(s) {
  if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
    const c = s.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
  }
  return s;
}
function isUrlTree(v) {
  return v instanceof UrlTree;
}
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null, urlSerializer = new DefaultUrlSerializer()) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment, urlSerializer);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment, urlSerializer) {
  let root = relativeTo;
  while (root.parent) {
    root = root.parent;
  }
  if (commands.length === 0) {
    return tree(root, root, root, queryParams, fragment, urlSerializer);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root, root, new UrlSegmentGroup([], {}), queryParams, fragment, urlSerializer);
  }
  const position = findStartingPositionForTargetGroup(nav, root, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root, position.segmentGroup, newSegmentGroup, queryParams, fragment, urlSerializer);
}
function isMatrixParams(command) {
  return typeof command === "object" && command != null && !command.outlets && !command.segmentPath;
}
function isCommandWithOutlets(command) {
  return typeof command === "object" && command != null && command.outlets;
}
function normalizeQueryParams(k, v, urlSerializer) {
  k ||= "\u0275";
  const tree2 = new UrlTree();
  tree2.queryParams = {
    [k]: v
  };
  return urlSerializer.parse(urlSerializer.serialize(tree2)).queryParams[k];
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment, urlSerializer) {
  const qp = {};
  for (const [key, value] of Object.entries(queryParams ?? {})) {
    qp[key] = Array.isArray(value) ? value.map((v) => normalizeQueryParams(key, v, urlSerializer)) : normalizeQueryParams(key, value, urlSerializer);
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c]) => {
    if (c === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
var Navigation = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(isAbsolute, numberOfDoubleDots, commands) {
    this.isAbsolute = isAbsolute;
    this.numberOfDoubleDots = numberOfDoubleDots;
    this.commands = commands;
    if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
      throw new RuntimeError(4003, (typeof ngDevMode === "undefined" || ngDevMode) && "Root segment cannot have matrix parameters");
    }
    const cmdWithOutlet = commands.find(isCommandWithOutlets);
    if (cmdWithOutlet && cmdWithOutlet !== last(commands)) {
      throw new RuntimeError(4004, (typeof ngDevMode === "undefined" || ngDevMode) && "{outlets:{}} has to be the last command");
    }
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
  }
};
function computeNavigation(commands) {
  if (typeof commands[0] === "string" && commands.length === 1 && commands[0] === "/") {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res2, cmd, cmdIdx) => {
    if (typeof cmd === "object" && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands2]) => {
          outlets[name] = typeof commands2 === "string" ? commands2.split("/") : commands2;
        });
        return [...res2, {
          outlets
        }];
      }
      if (cmd.segmentPath) {
        return [...res2, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === "string")) {
      return [...res2, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split("/").forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === ".") ;
        else if (partIndex == 0 && urlPart === "") {
          isAbsolute = true;
        } else if (urlPart === "..") {
          numberOfDoubleDots++;
        } else if (urlPart != "") {
          res2.push(urlPart);
        }
      });
      return res2;
    }
    return [...res2, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = class {
  segmentGroup;
  processChildren;
  index;
  constructor(segmentGroup, processChildren, index) {
    this.segmentGroup = segmentGroup;
    this.processChildren = processChildren;
    this.index = index;
  }
};
function findStartingPositionForTargetGroup(nav, root, target) {
  if (nav.isAbsolute) {
    return new Position(root, true, 0);
  }
  if (!target) {
    return new Position(root, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g = g.parent;
    if (!g) {
      throw new RuntimeError(4005, (typeof ngDevMode === "undefined" || ngDevMode) && "Invalid number of '../'");
    }
    ci = g.segments.length;
  }
  return new Position(g, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return {
    [PRIMARY_OUTLET]: commands
  };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  segmentGroup ??= new UrlSegmentGroup([], {});
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m.commandIndex);
  if (m.match && m.pathIndex < segmentGroup.segments.length) {
    const g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
    g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g, 0, slicedCommands);
  } else if (m.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    if (Object.keys(outlets).some((o) => o !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands2]) => {
      if (typeof commands2 === "string") {
        commands2 = [commands2];
      }
      if (commands2 !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands2);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === void 0) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch2 = {
    match: false,
    pathIndex: 0,
    commandIndex: 0
  };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length) return noMatch2;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === void 0) break;
    if (curr && next && typeof next === "object" && next.outlets === void 0) {
      if (!compare(curr, next, path)) return noMatch2;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path)) return noMatch2;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return {
    match: true,
    pathIndex: currentPathIndex,
    commandIndex: currentCommandIndex
  };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i = 0;
  while (i < commands.length) {
    const command = commands[i];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    if (i === 0 && isMatrixParams(commands[0])) {
      const p = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p.path, stringify(commands[0])));
      i++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i < commands.length - 1 ? commands[i + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === "string") {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k, v]) => res[k] = `${v}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
var IMPERATIVE_NAVIGATION = "imperative";
var EventType;
(function(EventType2) {
  EventType2[EventType2["NavigationStart"] = 0] = "NavigationStart";
  EventType2[EventType2["NavigationEnd"] = 1] = "NavigationEnd";
  EventType2[EventType2["NavigationCancel"] = 2] = "NavigationCancel";
  EventType2[EventType2["NavigationError"] = 3] = "NavigationError";
  EventType2[EventType2["RoutesRecognized"] = 4] = "RoutesRecognized";
  EventType2[EventType2["ResolveStart"] = 5] = "ResolveStart";
  EventType2[EventType2["ResolveEnd"] = 6] = "ResolveEnd";
  EventType2[EventType2["GuardsCheckStart"] = 7] = "GuardsCheckStart";
  EventType2[EventType2["GuardsCheckEnd"] = 8] = "GuardsCheckEnd";
  EventType2[EventType2["RouteConfigLoadStart"] = 9] = "RouteConfigLoadStart";
  EventType2[EventType2["RouteConfigLoadEnd"] = 10] = "RouteConfigLoadEnd";
  EventType2[EventType2["ChildActivationStart"] = 11] = "ChildActivationStart";
  EventType2[EventType2["ChildActivationEnd"] = 12] = "ChildActivationEnd";
  EventType2[EventType2["ActivationStart"] = 13] = "ActivationStart";
  EventType2[EventType2["ActivationEnd"] = 14] = "ActivationEnd";
  EventType2[EventType2["Scroll"] = 15] = "Scroll";
  EventType2[EventType2["NavigationSkipped"] = 16] = "NavigationSkipped";
})(EventType || (EventType = {}));
var RouterEvent = class {
  id;
  url;
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
};
var NavigationStart = class extends RouterEvent {
  type = EventType.NavigationStart;
  navigationTrigger;
  restoredState;
  constructor(id, url, navigationTrigger = "imperative", restoredState = null) {
    super(id, url);
    this.navigationTrigger = navigationTrigger;
    this.restoredState = restoredState;
  }
  toString() {
    return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationEnd = class extends RouterEvent {
  urlAfterRedirects;
  type = EventType.NavigationEnd;
  constructor(id, url, urlAfterRedirects) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
  }
  toString() {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
};
var NavigationCancellationCode;
(function(NavigationCancellationCode2) {
  NavigationCancellationCode2[NavigationCancellationCode2["Redirect"] = 0] = "Redirect";
  NavigationCancellationCode2[NavigationCancellationCode2["SupersededByNewNavigation"] = 1] = "SupersededByNewNavigation";
  NavigationCancellationCode2[NavigationCancellationCode2["NoDataFromResolver"] = 2] = "NoDataFromResolver";
  NavigationCancellationCode2[NavigationCancellationCode2["GuardRejected"] = 3] = "GuardRejected";
  NavigationCancellationCode2[NavigationCancellationCode2["Aborted"] = 4] = "Aborted";
})(NavigationCancellationCode || (NavigationCancellationCode = {}));
var NavigationSkippedCode;
(function(NavigationSkippedCode2) {
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredSameUrlNavigation"] = 0] = "IgnoredSameUrlNavigation";
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredByUrlHandlingStrategy"] = 1] = "IgnoredByUrlHandlingStrategy";
})(NavigationSkippedCode || (NavigationSkippedCode = {}));
var NavigationCancel = class extends RouterEvent {
  reason;
  code;
  type = EventType.NavigationCancel;
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
  }
  toString() {
    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
  }
};
function isRedirectingEvent(event) {
  return event instanceof NavigationCancel && (event.code === NavigationCancellationCode.Redirect || event.code === NavigationCancellationCode.SupersededByNewNavigation);
}
var NavigationSkipped = class extends RouterEvent {
  reason;
  code;
  type = EventType.NavigationSkipped;
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
  }
};
var NavigationError = class extends RouterEvent {
  error;
  target;
  type = EventType.NavigationError;
  constructor(id, url, error, target) {
    super(id, url);
    this.error = error;
    this.target = target;
  }
  toString() {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
};
var RoutesRecognized = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.RoutesRecognized;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckStart = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.GuardsCheckStart;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckEnd = class extends RouterEvent {
  urlAfterRedirects;
  state;
  shouldActivate;
  type = EventType.GuardsCheckEnd;
  constructor(id, url, urlAfterRedirects, state, shouldActivate) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.shouldActivate = shouldActivate;
  }
  toString() {
    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
  }
};
var ResolveStart = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.ResolveStart;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var ResolveEnd = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.ResolveEnd;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var RouteConfigLoadStart = class {
  route;
  type = EventType.RouteConfigLoadStart;
  constructor(route) {
    this.route = route;
  }
  toString() {
    return `RouteConfigLoadStart(path: ${this.route.path})`;
  }
};
var RouteConfigLoadEnd = class {
  route;
  type = EventType.RouteConfigLoadEnd;
  constructor(route) {
    this.route = route;
  }
  toString() {
    return `RouteConfigLoadEnd(path: ${this.route.path})`;
  }
};
var ChildActivationStart = class {
  snapshot;
  type = EventType.ChildActivationStart;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationStart(path: '${path}')`;
  }
};
var ChildActivationEnd = class {
  snapshot;
  type = EventType.ChildActivationEnd;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationEnd(path: '${path}')`;
  }
};
var ActivationStart = class {
  snapshot;
  type = EventType.ActivationStart;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationStart(path: '${path}')`;
  }
};
var ActivationEnd = class {
  snapshot;
  type = EventType.ActivationEnd;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationEnd(path: '${path}')`;
  }
};
var Scroll = class {
  routerEvent;
  position;
  anchor;
  scrollBehavior;
  type = EventType.Scroll;
  constructor(routerEvent, position, anchor, scrollBehavior) {
    this.routerEvent = routerEvent;
    this.position = position;
    this.anchor = anchor;
    this.scrollBehavior = scrollBehavior;
  }
  toString() {
    const pos = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
    return `Scroll(anchor: '${this.anchor}', position: '${pos}')`;
  }
};
var BeforeActivateRoutes = class {
};
var BeforeRoutesRecognized = class {
};
var RedirectRequest = class {
  url;
  navigationBehaviorOptions;
  constructor(url, navigationBehaviorOptions) {
    this.url = url;
    this.navigationBehaviorOptions = navigationBehaviorOptions;
  }
};
function isPublicRouterEvent(e) {
  return !(e instanceof BeforeActivateRoutes) && !(e instanceof RedirectRequest) && !(e instanceof BeforeRoutesRecognized);
}
function stringifyEvent(routerEvent) {
  switch (routerEvent.type) {
    case EventType.ActivationEnd:
      return `ActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ActivationStart:
      return `ActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationEnd:
      return `ChildActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationStart:
      return `ChildActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.GuardsCheckEnd:
      return `GuardsCheckEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state}, shouldActivate: ${routerEvent.shouldActivate})`;
    case EventType.GuardsCheckStart:
      return `GuardsCheckStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.NavigationCancel:
      return `NavigationCancel(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationSkipped:
      return `NavigationSkipped(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationEnd:
      return `NavigationEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}')`;
    case EventType.NavigationError:
      return `NavigationError(id: ${routerEvent.id}, url: '${routerEvent.url}', error: ${routerEvent.error})`;
    case EventType.NavigationStart:
      return `NavigationStart(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.ResolveEnd:
      return `ResolveEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.ResolveStart:
      return `ResolveStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.RouteConfigLoadEnd:
      return `RouteConfigLoadEnd(path: ${routerEvent.route.path})`;
    case EventType.RouteConfigLoadStart:
      return `RouteConfigLoadStart(path: ${routerEvent.route.path})`;
    case EventType.RoutesRecognized:
      return `RoutesRecognized(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.Scroll:
      const pos = routerEvent.position ? `${routerEvent.position[0]}, ${routerEvent.position[1]}` : null;
      return `Scroll(anchor: '${routerEvent.anchor}', position: '${pos}')`;
  }
}
var OutletContext = class {
  rootInjector;
  outlet = null;
  route = null;
  children;
  attachRef = null;
  get injector() {
    return this.route?.snapshot._environmentInjector ?? this.rootInjector;
  }
  constructor(rootInjector) {
    this.rootInjector = rootInjector;
    this.children = new ChildrenOutletContexts(this.rootInjector);
  }
};
var ChildrenOutletContexts = class _ChildrenOutletContexts {
  rootInjector;
  contexts = /* @__PURE__ */ new Map();
  constructor(rootInjector) {
    this.rootInjector = rootInjector;
  }
  onChildOutletCreated(childName, outlet) {
    const context = this.getOrCreateContext(childName);
    context.outlet = outlet;
    this.contexts.set(childName, context);
  }
  onChildOutletDestroyed(childName) {
    const context = this.getContext(childName);
    if (context) {
      context.outlet = null;
      context.attachRef = null;
    }
  }
  onOutletDeactivated() {
    const contexts = this.contexts;
    this.contexts = /* @__PURE__ */ new Map();
    return contexts;
  }
  onOutletReAttached(contexts) {
    this.contexts = contexts;
  }
  getOrCreateContext(childName) {
    let context = this.getContext(childName);
    if (!context) {
      context = new OutletContext(this.rootInjector);
      this.contexts.set(childName, context);
    }
    return context;
  }
  getContext(childName) {
    return this.contexts.get(childName) || null;
  }
  static \u0275fac = function ChildrenOutletContexts_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChildrenOutletContexts)(\u0275\u0275inject(EnvironmentInjector));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ChildrenOutletContexts,
    factory: _ChildrenOutletContexts.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChildrenOutletContexts, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EnvironmentInjector
  }], null);
})();
var Tree = class {
  _root;
  constructor(root) {
    this._root = root;
  }
  get root() {
    return this._root.value;
  }
  parent(t) {
    const p = this.pathFromRoot(t);
    return p.length > 1 ? p[p.length - 2] : null;
  }
  children(t) {
    const n = findNode(t, this._root);
    return n ? n.children.map((t2) => t2.value) : [];
  }
  firstChild(t) {
    const n = findNode(t, this._root);
    return n && n.children.length > 0 ? n.children[0].value : null;
  }
  siblings(t) {
    const p = findPath(t, this._root);
    if (p.length < 2) return [];
    const c = p[p.length - 2].children.map((c2) => c2.value);
    return c.filter((cc) => cc !== t);
  }
  pathFromRoot(t) {
    return findPath(t, this._root).map((s) => s.value);
  }
};
function findNode(value, node) {
  if (value === node.value) return node;
  for (const child of node.children) {
    const node2 = findNode(value, child);
    if (node2) return node2;
  }
  return null;
}
function findPath(value, node) {
  if (value === node.value) return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
var TreeNode = class {
  value;
  children;
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function nodeChildrenAsMap(node) {
  const map2 = {};
  if (node) {
    node.children.forEach((child) => map2[child.value.outlet] = child);
  }
  return map2;
}
var RouterState = class extends Tree {
  snapshot;
  constructor(root, snapshot) {
    super(root);
    this.snapshot = snapshot;
    setRouterState(this, root);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function createEmptyState(rootComponent, injector) {
  const snapshot = createEmptyStateSnapshot(rootComponent, injector);
  const emptyUrl = new BehaviorSubject([new UrlSegment("", {})]);
  const emptyParams = new BehaviorSubject({});
  const emptyData = new BehaviorSubject({});
  const emptyQueryParams = new BehaviorSubject({});
  const fragment = new BehaviorSubject("");
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(rootComponent, injector) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = "";
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {}, injector);
  return new RouterStateSnapshot("", new TreeNode(activated, []));
}
var ActivatedRoute = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  snapshot;
  _futureSnapshot;
  _routerState;
  _paramMap;
  _queryParamMap;
  title;
  url;
  params;
  queryParams;
  fragment;
  data;
  constructor(urlSubject, paramsSubject, queryParamsSubject, fragmentSubject, dataSubject, outlet, component, futureSnapshot) {
    this.urlSubject = urlSubject;
    this.paramsSubject = paramsSubject;
    this.queryParamsSubject = queryParamsSubject;
    this.fragmentSubject = fragmentSubject;
    this.dataSubject = dataSubject;
    this.outlet = outlet;
    this.component = component;
    this._futureSnapshot = futureSnapshot;
    this.title = this.dataSubject?.pipe(map((d) => d[RouteTitleKey])) ?? of(void 0);
    this.url = urlSubject;
    this.params = paramsSubject;
    this.queryParams = queryParamsSubject;
    this.fragment = fragmentSubject;
    this.data = dataSubject;
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ??= this.params.pipe(map((p) => convertToParamMap(p)));
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ??= this.queryParams.pipe(map((p) => convertToParamMap(p)));
    return this._queryParamMap;
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
};
function getInherited(route, parent, paramsInheritanceStrategy = "emptyOnly") {
  let inherited;
  const {
    routeConfig
  } = route;
  if (parent !== null && (paramsInheritanceStrategy === "always" || routeConfig?.path === "" || !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: __spreadValues(__spreadValues({}, parent.params), route.params),
      data: __spreadValues(__spreadValues({}, parent.data), route.data),
      resolve: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, route.data), parent.data), routeConfig?.data), route._resolvedData)
    };
  } else {
    inherited = {
      params: __spreadValues({}, route.params),
      data: __spreadValues({}, route.data),
      resolve: __spreadValues(__spreadValues({}, route.data), route._resolvedData ?? {})
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
var ActivatedRouteSnapshot = class {
  url;
  params;
  queryParams;
  fragment;
  data;
  outlet;
  component;
  routeConfig;
  _resolve;
  _resolvedData;
  _routerState;
  _paramMap;
  _queryParamMap;
  _environmentInjector;
  get title() {
    return this.data?.[RouteTitleKey];
  }
  constructor(url, params, queryParams, fragment, data, outlet, component, routeConfig, resolve, environmentInjector) {
    this.url = url;
    this.params = params;
    this.queryParams = queryParams;
    this.fragment = fragment;
    this.data = data;
    this.outlet = outlet;
    this.component = component;
    this.routeConfig = routeConfig;
    this._resolve = resolve;
    this._environmentInjector = environmentInjector;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ??= convertToParamMap(this.params);
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    const url = this.url.map((segment) => segment.toString()).join("/");
    const matched = this.routeConfig ? this.routeConfig.path : "";
    return `Route(url:'${url}', path:'${matched}')`;
  }
};
var RouterStateSnapshot = class extends Tree {
  url;
  constructor(url, root) {
    super(root);
    this.url = url;
    setRouterState(this, root);
  }
  toString() {
    return serializeNode(this._root);
  }
};
function setRouterState(state, node) {
  node.value._routerState = state;
  node.children.forEach((c) => setRouterState(state, c));
}
function serializeNode(node) {
  const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : "";
  return `${node.value}${c}`;
}
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a, b) {
  const equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
  const parentsMismatch = !a.parent !== !b.parent;
  return equalUrlParams && !parentsMismatch && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === "string" || config.title === null;
}
var ROUTER_OUTLET_DATA = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "RouterOutlet data" : "");
var RouterOutlet = class _RouterOutlet {
  activated = null;
  get activatedComponentRef() {
    return this.activated;
  }
  _activatedRoute = null;
  name = PRIMARY_OUTLET;
  activateEvents = new EventEmitter();
  deactivateEvents = new EventEmitter();
  attachEvents = new EventEmitter();
  detachEvents = new EventEmitter();
  routerOutletData = input(...ngDevMode ? [void 0, {
    debugName: "routerOutletData"
  }] : []);
  parentContexts = inject(ChildrenOutletContexts);
  location = inject(ViewContainerRef);
  changeDetector = inject(ChangeDetectorRef);
  inputBinder = inject(INPUT_BINDER, {
    optional: true
  });
  supportsBindingToComponentInputs = true;
  ngOnChanges(changes) {
    if (changes["name"]) {
      const {
        firstChange,
        previousValue
      } = changes["name"];
      if (firstChange) {
        return;
      }
      if (this.isTrackedInParentContexts(previousValue)) {
        this.deactivate();
        this.parentContexts.onChildOutletDestroyed(previousValue);
      }
      this.initializeOutletWithName();
    }
  }
  ngOnDestroy() {
    if (this.isTrackedInParentContexts(this.name)) {
      this.parentContexts.onChildOutletDestroyed(this.name);
    }
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  isTrackedInParentContexts(outletName) {
    return this.parentContexts.getContext(outletName)?.outlet === this;
  }
  ngOnInit() {
    this.initializeOutletWithName();
  }
  initializeOutletWithName() {
    this.parentContexts.onChildOutletCreated(this.name, this);
    if (this.activated) {
      return;
    }
    const context = this.parentContexts.getContext(this.name);
    if (context?.route) {
      if (context.attachRef) {
        this.attach(context.attachRef, context.route);
      } else {
        this.activateWith(context.route, context.injector);
      }
    }
  }
  get isActivated() {
    return !!this.activated;
  }
  get component() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  detach() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    this.location.detach();
    const cmp = this.activated;
    this.activated = null;
    this._activatedRoute = null;
    this.detachEvents.emit(cmp.instance);
    return cmp;
  }
  attach(ref, activatedRoute) {
    this.activated = ref;
    this._activatedRoute = activatedRoute;
    this.location.insert(ref.hostView);
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.attachEvents.emit(ref.instance);
  }
  deactivate() {
    if (this.activated) {
      const c = this.component;
      this.activated.destroy();
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new RuntimeError(4013, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    const location = this.location;
    const snapshot = activatedRoute.snapshot;
    const component = snapshot.component;
    const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
    const injector = new OutletInjector(activatedRoute, childContexts, location.injector, this.routerOutletData);
    this.activated = location.createComponent(component, {
      index: location.length,
      injector,
      environmentInjector
    });
    this.changeDetector.markForCheck();
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activateEvents.emit(this.activated.instance);
  }
  static \u0275fac = function RouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterOutlet,
    selectors: [["router-outlet"]],
    inputs: {
      name: "name",
      routerOutletData: [1, "routerOutletData"]
    },
    outputs: {
      activateEvents: "activate",
      deactivateEvents: "deactivate",
      attachEvents: "attach",
      detachEvents: "detach"
    },
    exportAs: ["outlet"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterOutlet, [{
    type: Directive,
    args: [{
      selector: "router-outlet",
      exportAs: "outlet"
    }]
  }], null, {
    name: [{
      type: Input
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }],
    attachEvents: [{
      type: Output,
      args: ["attach"]
    }],
    detachEvents: [{
      type: Output,
      args: ["detach"]
    }],
    routerOutletData: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "routerOutletData",
        required: false
      }]
    }]
  });
})();
var OutletInjector = class {
  route;
  childContexts;
  parent;
  outletData;
  constructor(route, childContexts, parent, outletData) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
    this.outletData = outletData;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    if (token === ROUTER_OUTLET_DATA) {
      return this.outletData;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "Router Input Binder" : "");
var RoutedComponentInputBinder = class _RoutedComponentInputBinder {
  outletDataSubscriptions = /* @__PURE__ */ new Map();
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return of(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
  static \u0275fac = function RoutedComponentInputBinder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoutedComponentInputBinder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RoutedComponentInputBinder,
    factory: _RoutedComponentInputBinder.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{
    type: Injectable
  }], null, null);
})();
var \u0275EmptyOutletComponent = class _\u0275EmptyOutletComponent {
  static \u0275fac = function \u0275EmptyOutletComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275EmptyOutletComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _\u0275EmptyOutletComponent,
    selectors: [["ng-component"]],
    exportAs: ["emptyRouterOutlet"],
    decls: 1,
    vars: 0,
    template: function _EmptyOutletComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    },
    dependencies: [RouterOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275EmptyOutletComponent, [{
    type: Component,
    args: [{
      template: `<router-outlet />`,
      imports: [RouterOutlet],
      exportAs: "emptyRouterOutlet",
      changeDetection: ChangeDetectionStrategy.Eager
    }]
  }], null, null);
})();
function standardizeConfig(r) {
  const children = r.children && r.children.map(standardizeConfig);
  const c = children ? __spreadProps(__spreadValues({}, r), {
    children
  }) : __spreadValues({}, r);
  if (!c.component && !c.loadComponent && (children || c.loadChildren) && c.outlet && c.outlet !== PRIMARY_OUTLET) {
    c.component = \u0275EmptyOutletComponent;
  }
  return c;
}
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : void 0);
  return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree2 = detachedRouteHandle.route;
        tree2.value._futureSnapshot = curr.value;
        tree2.children = curr.children.map((c) => createNode(routeReuseStrategy, c));
        return tree2;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map((c) => createNode(routeReuseStrategy, c));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map((child) => {
    for (const p of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c) {
  return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
}
var RedirectCommand = class {
  redirectTo;
  navigationBehaviorOptions;
  constructor(redirectTo, navigationBehaviorOptions) {
    this.redirectTo = redirectTo;
    this.navigationBehaviorOptions = navigationBehaviorOptions;
  }
};
var NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
function redirectingNavigationError(urlSerializer, redirect) {
  const {
    redirectTo,
    navigationBehaviorOptions
  } = isUrlTree(redirect) ? {
    redirectTo: redirect,
    navigationBehaviorOptions: void 0
  } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, NavigationCancellationCode.Redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code) {
  const error = new Error(`NavigationCancelingError: ${message || ""}`);
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  return error;
}
function isRedirectingNavigationCancelingError(error) {
  return isNavigationCancelingError(error) && isUrlTree(error.url);
}
function isNavigationCancelingError(error) {
  return !!error && error[NAVIGATION_CANCELING_ERROR];
}
var warnedAboutUnsupportedInputBinding = false;
var ActivateRoutes = class {
  routeReuseStrategy;
  futureState;
  currState;
  forwardEvent;
  inputBindingEnabled;
  constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
    this.routeReuseStrategy = routeReuseStrategy;
    this.futureState = futureState;
    this.currState = currState;
    this.forwardEvent = forwardEvent;
    this.inputBindingEnabled = inputBindingEnabled;
  }
  activate(parentContexts) {
    const futureRoot = this.futureState._root;
    const currRoot = this.currState ? this.currState._root : null;
    this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
    advanceActivatedRoute(this.futureState.root);
    this.activateChildRoutes(futureRoot, currRoot, parentContexts);
  }
  deactivateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((futureChild) => {
      const childOutletName = futureChild.value.outlet;
      this.deactivateRoutes(futureChild, children[childOutletName], contexts);
      delete children[childOutletName];
    });
    Object.values(children).forEach((v) => {
      this.deactivateRouteAndItsChildren(v, contexts);
    });
  }
  deactivateRoutes(futureNode, currNode, parentContext) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    if (future === curr) {
      if (future.component) {
        const context = parentContext.getContext(future.outlet);
        if (context) {
          this.deactivateChildRoutes(futureNode, currNode, context.children);
        }
      } else {
        this.deactivateChildRoutes(futureNode, currNode, parentContext);
      }
    } else {
      if (curr) {
        this.deactivateRouteAndItsChildren(currNode, parentContext);
      }
    }
  }
  deactivateRouteAndItsChildren(route, parentContexts) {
    if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
      this.detachAndStoreRouteSubtree(route, parentContexts);
    } else {
      this.deactivateRouteAndOutlet(route, parentContexts);
    }
  }
  detachAndStoreRouteSubtree(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context && context.outlet) {
      const componentRef = context.outlet.detach();
      const contexts2 = context.children.onOutletDeactivated();
      this.routeReuseStrategy.store(route.value.snapshot, {
        componentRef,
        route,
        contexts: contexts2
      });
    }
  }
  deactivateRouteAndOutlet(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context) {
      if (context.outlet) {
        context.outlet.deactivate();
        context.children.onOutletDeactivated();
      }
      context.attachRef = null;
      context.route = null;
    }
  }
  activateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((c) => {
      this.activateRoutes(c, children[c.value.outlet], contexts);
      this.forwardEvent(new ActivationEnd(c.value.snapshot));
    });
    if (futureNode.children.length) {
      this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
    }
  }
  activateRoutes(futureNode, currNode, parentContexts) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    advanceActivatedRoute(future);
    if (future === curr) {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        this.activateChildRoutes(futureNode, currNode, context.children);
      } else {
        this.activateChildRoutes(futureNode, currNode, parentContexts);
      }
    } else {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
          const stored = this.routeReuseStrategy.retrieve(future.snapshot);
          this.routeReuseStrategy.store(future.snapshot, null);
          context.children.onOutletReAttached(stored.contexts);
          context.attachRef = stored.componentRef;
          context.route = stored.route.value;
          if (context.outlet) {
            context.outlet.attach(stored.componentRef, stored.route.value);
          }
          advanceActivatedRoute(stored.route.value);
          this.activateChildRoutes(futureNode, null, context.children);
        } else {
          context.attachRef = null;
          context.route = future;
          if (context.outlet) {
            context.outlet.activateWith(future, context.injector);
          }
          this.activateChildRoutes(futureNode, null, context.children);
        }
      } else {
        this.activateChildRoutes(futureNode, null, parentContexts);
      }
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const context = parentContexts.getOrCreateContext(future.outlet);
      const outlet = context.outlet;
      if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
        console.warn(`'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.`);
        warnedAboutUnsupportedInputBinding = true;
      }
    }
  }
};
var CanActivate = class {
  path;
  route;
  constructor(path) {
    this.path = path;
    this.route = this.path[this.path.length - 1];
  }
};
var CanDeactivate = class {
  component;
  route;
  constructor(component, route) {
    this.component = component;
    this.route = route;
  }
};
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p) {
  const canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0) return null;
  return {
    node: p,
    guards: canActivateChild
  };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = /* @__PURE__ */ Symbol();
  const result = injector.get(tokenOrFunction, NOT_FOUND);
  if (result === NOT_FOUND) {
    if (typeof tokenOrFunction === "function" && !isInjectable(tokenOrFunction)) {
      return tokenOrFunction;
    } else {
      return injector.get(tokenOrFunction);
    }
  }
  return result;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  futureNode.children.forEach((c) => {
    getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
    delete prevChildren[c.value.outlet];
  });
  Object.entries(prevChildren).forEach(([k, v]) => deactivateRouteAndItsChildren(v, contexts.getContext(k), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === "function") {
    return runInInjectionContext(future._environmentInjector, () => mode(curr, future));
  }
  switch (mode) {
    case "pathParamsChange":
      return !equalPath(curr.url, future.url);
    case "pathParamsOrQueryParamsChange":
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case "always":
      return true;
    case "paramsOrQueryParamsChange":
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case "paramsChange":
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  }
}
function isFunction(v) {
  return typeof v === "function";
}
function isBoolean(v) {
  return typeof v === "boolean";
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isEmptyError(e) {
  return e instanceof EmptyError || e?.name === "EmptyError";
}
var INITIAL_VALUE = /* @__PURE__ */ Symbol("INITIAL_VALUE");
function prioritizedGuardValue() {
  return switchMap((obs) => {
    return combineLatest(obs.map((o) => o.pipe(take(1), startWith(INITIAL_VALUE)))).pipe(map((results) => {
      for (const result of results) {
        if (result === true) {
          continue;
        } else if (result === INITIAL_VALUE) {
          return INITIAL_VALUE;
        } else if (result === false || isRedirect(result)) {
          return result;
        }
      }
      return true;
    }), filter((item) => item !== INITIAL_VALUE), take(1));
  });
}
function isRedirect(val) {
  return isUrlTree(val) || val instanceof RedirectCommand;
}
function abortSignalToObservable(signal2) {
  if (signal2.aborted) {
    return of(void 0).pipe(take(1));
  }
  return new Observable((subscriber) => {
    const handler = () => {
      subscriber.next();
      subscriber.complete();
    };
    signal2.addEventListener("abort", handler);
    return () => signal2.removeEventListener("abort", handler);
  });
}
function takeUntilAbort(signal2) {
  return takeUntil(abortSignalToObservable(signal2));
}
function checkGuards(forwardEvent) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      currentSnapshot,
      guards: {
        canActivateChecks,
        canDeactivateChecks
      }
    } = t;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return of(__spreadProps(__spreadValues({}, t), {
        guardsResult: true
      }));
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot).pipe(mergeMap((canDeactivate) => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, forwardEvent) : of(canDeactivate);
    }), map((guardsResult) => __spreadProps(__spreadValues({}, t), {
      guardsResult
    })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS) {
  return from(checks).pipe(mergeMap((check) => runCanDeactivate(check.component, check.route, currRSS, futureRSS)), first((result) => {
    return result !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, forwardEvent) {
  return from(checks).pipe(concatMap((check) => {
    return concat(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path), runCanActivate(futureSnapshot, check.route));
  }), first((result) => {
    return result !== true;
  }, true));
}
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return of(true);
}
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return of(true);
}
function runCanActivate(futureRSS, futureARS) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0) return of(true);
  const canActivateObservables = canActivate.map((canActivate2) => {
    return defer(() => {
      const closestInjector = futureARS._environmentInjector;
      const guard = getTokenOrFunctionIdentity(canActivate2, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe(first());
    });
  });
  return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map((p) => getCanActivateChild(p)).filter((_) => _ !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map((d) => {
    return defer(() => {
      const guardsMapped = d.guards.map((canActivateChild) => {
        const closestInjector = d.node._environmentInjector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe(first());
      });
      return of(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0) return of(true);
  const canDeactivateObservables = canDeactivate.map((c) => {
    const closestInjector = currARS._environmentInjector;
    const guard = getTokenOrFunctionIdentity(c, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : runInInjectionContext(closestInjector, () => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe(first());
  });
  return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer, abortSignal) {
  const canLoad = route.canLoad;
  if (canLoad === void 0 || canLoad.length === 0) {
    return of(true);
  }
  const canLoadObservables = canLoad.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    const obs$ = wrapIntoObservable(guardVal);
    return abortSignal ? obs$.pipe(takeUntilAbort(abortSignal)) : obs$;
  });
  return of(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return pipe(tap((result) => {
    if (typeof result === "boolean") return;
    throw redirectingNavigationError(urlSerializer, result);
  }), map((result) => result === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer, currentSnapshot, abortSignal) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0) return of(true);
  const canMatchObservables = canMatch.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments, currentSnapshot) : runInInjectionContext(injector, () => guard(route, segments, currentSnapshot));
    return wrapIntoObservable(guardVal).pipe(takeUntilAbort(abortSignal));
  });
  return of(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
var NoMatch = class _NoMatch extends Error {
  segmentGroup;
  constructor(segmentGroup) {
    super();
    this.segmentGroup = segmentGroup || null;
    Object.setPrototypeOf(this, _NoMatch.prototype);
  }
};
var AbsoluteRedirect = class _AbsoluteRedirect extends Error {
  urlTree;
  constructor(urlTree) {
    super();
    this.urlTree = urlTree;
    Object.setPrototypeOf(this, _AbsoluteRedirect.prototype);
  }
};
function namedOutletsRedirect(redirectTo) {
  throw new RuntimeError(4e3, (typeof ngDevMode === "undefined" || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`);
}
function canLoadFails(route) {
  throw navigationCancelingError((typeof ngDevMode === "undefined" || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`, NavigationCancellationCode.GuardRejected);
}
var ApplyRedirects = class {
  urlSerializer;
  urlTree;
  constructor(urlSerializer, urlTree) {
    this.urlSerializer = urlSerializer;
    this.urlTree = urlTree;
  }
  async lineralizeSegments(route, urlTree) {
    let res = [];
    let c = urlTree.root;
    while (true) {
      res = res.concat(c.segments);
      if (c.numberOfChildren === 0) {
        return res;
      }
      if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
        throw namedOutletsRedirect(`${route.redirectTo}`);
      }
      c = c.children[PRIMARY_OUTLET];
    }
  }
  async applyRedirectCommands(segments, redirectTo, posParams, currentSnapshot, injector) {
    const redirect = await getRedirectResult(redirectTo, currentSnapshot, injector);
    if (redirect instanceof UrlTree) {
      throw new AbsoluteRedirect(redirect);
    }
    const newTree = this.applyRedirectCreateUrlTree(redirect, this.urlSerializer.parse(redirect), segments, posParams);
    if (redirect[0] === "/") {
      throw new AbsoluteRedirect(newTree);
    }
    return newTree;
  }
  applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
    const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
    return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
  }
  createQueryParams(redirectToParams, actualParams) {
    const res = {};
    Object.entries(redirectToParams).forEach(([k, v]) => {
      const copySourceValue = typeof v === "string" && v[0] === ":";
      if (copySourceValue) {
        const sourceName = v.substring(1);
        res[k] = actualParams[sourceName];
      } else {
        res[k] = v;
      }
    });
    return res;
  }
  createSegmentGroup(redirectTo, group, segments, posParams) {
    const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
    let children = {};
    Object.entries(group.children).forEach(([name, child]) => {
      children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
    });
    return new UrlSegmentGroup(updatedSegments, children);
  }
  createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
    return redirectToSegments.map((s) => s.path[0] === ":" ? this.findPosParam(redirectTo, s, posParams) : this.findOrReturn(s, actualSegments));
  }
  findPosParam(redirectTo, redirectToUrlSegment, posParams) {
    const pos = posParams[redirectToUrlSegment.path.substring(1)];
    if (!pos) throw new RuntimeError(4001, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
    return pos;
  }
  findOrReturn(redirectToUrlSegment, actualSegments) {
    let idx = 0;
    for (const s of actualSegments) {
      if (s.path === redirectToUrlSegment.path) {
        actualSegments.splice(idx);
        return s;
      }
      idx++;
    }
    return redirectToUrlSegment;
  }
};
function getRedirectResult(redirectTo, currentSnapshot, injector) {
  if (typeof redirectTo === "string") {
    return Promise.resolve(redirectTo);
  }
  const redirectToFn = redirectTo;
  return firstValueFrom(wrapIntoObservable(runInInjectionContext(injector, () => redirectToFn(currentSnapshot))));
}
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = createEnvironmentInjector(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function validateConfig(config, parentPath = "", requireStandaloneComponents = false) {
  for (let i = 0; i < config.length; i++) {
    const route = config[i];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && isNgModule(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !isStandalone(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!route) {
      throw new RuntimeError(4014, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo) {
      if (route.component || route.loadComponent) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
      }
      if (route.canMatch || route.canActivate) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and ${route.canMatch ? "canMatch" : "canActivate"} cannot be used together.Redirects happen before guards are executed.`);
      }
    }
    if (route.path && route.matcher) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === "string" && route.path.charAt(0) === "/") {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === "" && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new RuntimeError(4014, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return "";
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
function sortByMatchingOutlets(routes2, outletName) {
  const sortedConfig = routes2.filter((r) => getOutlet(r) === outletName);
  sortedConfig.push(...routes2.filter((r) => getOutlet(r) !== outletName));
  return sortedConfig;
}
var noMatch = {
  matched: false,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {}
};
function createPreMatchRouteSnapshot(snapshot) {
  return {
    routeConfig: snapshot.routeConfig,
    url: snapshot.url,
    params: snapshot.params,
    queryParams: snapshot.queryParams,
    fragment: snapshot.fragment,
    data: snapshot.data,
    outlet: snapshot.outlet,
    title: snapshot.title,
    paramMap: snapshot.paramMap,
    queryParamMap: snapshot.queryParamMap
  };
}
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer, createSnapshot, abortSignal) {
  const result = match(segmentGroup, route, segments);
  if (!result.matched) {
    return of(result);
  }
  const currentSnapshot = createPreMatchRouteSnapshot(createSnapshot(result));
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer, currentSnapshot, abortSignal).pipe(map((v) => v === true ? result : __spreadValues({}, noMatch)));
}
function match(segmentGroup, route, segments) {
  if (route.path === "") {
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || segments.length > 0)) {
      return __spreadValues({}, noMatch);
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res) return __spreadValues({}, noMatch);
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k, v]) => {
    posParams[k] = v.path;
  });
  const parameters = res.consumed.length > 0 ? __spreadValues(__spreadValues({}, posParams), res.consumed[res.consumed.length - 1].parameters) : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config, outlet) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config, outlet)) {
    const s2 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return {
      segmentGroup: s2,
      slicedSegments: []
    };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
    return {
      segmentGroup: s2,
      slicedSegments
    };
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return {
    segmentGroup: s,
    slicedSegments
  };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes2, children) {
  const res = {};
  for (const r of routes2) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return __spreadValues(__spreadValues({}, children), res);
}
function createChildrenForEmptyPaths(routes2, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r of routes2) {
    if (r.path === "" && getOutlet(r) !== PRIMARY_OUTLET) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes2, outlet) {
  return routes2.some((r) => {
    const matchesEmpty = emptyPathMatch(segmentGroup, slicedSegments, r);
    if (!matchesEmpty) return false;
    const isNamedOutlet = getOutlet(r) !== PRIMARY_OUTLET;
    if (!isNamedOutlet) return false;
    const isSelfEvaluating = outlet !== void 0 && getOutlet(r) === outlet;
    return !isSelfEvaluating;
  });
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes2) {
  return routes2.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r));
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === "full") {
    return false;
  }
  return r.path === "";
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}
var NoLeftoversInUrl = class {
};
async function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = "emptyOnly", abortSignal) {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer, abortSignal).recognize();
}
var MAX_ALLOWED_REDIRECTS = 31;
var Recognizer = class {
  injector;
  configLoader;
  rootComponentType;
  config;
  urlTree;
  paramsInheritanceStrategy;
  urlSerializer;
  abortSignal;
  applyRedirects;
  absoluteRedirectCount = 0;
  allowRedirects = true;
  constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer, abortSignal) {
    this.injector = injector;
    this.configLoader = configLoader;
    this.rootComponentType = rootComponentType;
    this.config = config;
    this.urlTree = urlTree;
    this.paramsInheritanceStrategy = paramsInheritanceStrategy;
    this.urlSerializer = urlSerializer;
    this.abortSignal = abortSignal;
    this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
  }
  noMatchError(e) {
    return new RuntimeError(4002, typeof ngDevMode === "undefined" || ngDevMode ? `Cannot match any routes. URL Segment: '${e.segmentGroup}'` : `'${e.segmentGroup}'`);
  }
  async recognize() {
    const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
    const {
      children,
      rootSnapshot
    } = await this.match(rootSegmentGroup);
    const rootNode = new TreeNode(rootSnapshot, children);
    const routeState = new RouterStateSnapshot("", rootNode);
    const tree2 = createUrlTreeFromSnapshot(rootSnapshot, [], this.urlTree.queryParams, this.urlTree.fragment);
    tree2.queryParams = this.urlTree.queryParams;
    routeState.url = this.urlSerializer.serialize(tree2);
    return {
      state: routeState,
      tree: tree2
    };
  }
  async match(rootSegmentGroup) {
    const rootSnapshot = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), PRIMARY_OUTLET, this.rootComponentType, null, {}, this.injector);
    try {
      const children = await this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET, rootSnapshot);
      return {
        children,
        rootSnapshot
      };
    } catch (e) {
      if (e instanceof AbsoluteRedirect) {
        this.urlTree = e.urlTree;
        return this.match(e.urlTree.root);
      }
      if (e instanceof NoMatch) {
        throw this.noMatchError(e);
      }
      throw e;
    }
  }
  async processSegmentGroup(injector, config, segmentGroup, outlet, parentRoute) {
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
      return this.processChildren(injector, config, segmentGroup, parentRoute);
    }
    const child = await this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true, parentRoute);
    return child instanceof TreeNode ? [child] : [];
  }
  async processChildren(injector, config, segmentGroup, parentRoute) {
    const childOutlets = [];
    for (const child of Object.keys(segmentGroup.children)) {
      if (child === "primary") {
        childOutlets.unshift(child);
      } else {
        childOutlets.push(child);
      }
    }
    let children = [];
    for (const childOutlet of childOutlets) {
      const child = segmentGroup.children[childOutlet];
      const sortedConfig = sortByMatchingOutlets(config, childOutlet);
      const outletChildren = await this.processSegmentGroup(injector, sortedConfig, child, childOutlet, parentRoute);
      children.push(...outletChildren);
    }
    const mergedChildren = mergeEmptyPathMatches(children);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkOutletNameUniqueness(mergedChildren);
    }
    sortActivatedRouteSnapshots(mergedChildren);
    return mergedChildren;
  }
  async processSegment(injector, routes2, segmentGroup, segments, outlet, allowRedirects, parentRoute) {
    for (const r of routes2) {
      try {
        return await this.processSegmentAgainstRoute(r._injector ?? injector, routes2, r, segmentGroup, segments, outlet, allowRedirects, parentRoute);
      } catch (e) {
        if (e instanceof NoMatch || isEmptyError(e)) {
          continue;
        }
        throw e;
      }
    }
    if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
      return new NoLeftoversInUrl();
    }
    throw new NoMatch(segmentGroup);
  }
  async processSegmentAgainstRoute(injector, routes2, route, rawSegment, segments, outlet, allowRedirects, parentRoute) {
    if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
      throw new NoMatch(rawSegment);
    }
    if (route.redirectTo === void 0) {
      return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute);
    }
    if (this.allowRedirects && allowRedirects) {
      return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes2, route, segments, outlet, parentRoute);
    }
    throw new NoMatch(rawSegment);
  }
  async expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes2, route, segments, outlet, parentRoute) {
    const {
      matched,
      parameters,
      consumedSegments,
      positionalParamSegments,
      remainingSegments
    } = match(segmentGroup, route, segments);
    if (!matched) throw new NoMatch(segmentGroup);
    if (typeof route.redirectTo === "string" && route.redirectTo[0] === "/") {
      this.absoluteRedirectCount++;
      if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
        if (ngDevMode) {
          throw new RuntimeError(4016, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.
This is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`);
        }
        this.allowRedirects = false;
      }
    }
    const currentSnapshot = this.createSnapshot(injector, route, segments, parameters, parentRoute);
    if (this.abortSignal.aborted) {
      throw new Error(this.abortSignal.reason);
    }
    const newTree = await this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments, createPreMatchRouteSnapshot(currentSnapshot), injector);
    const newSegments = await this.applyRedirects.lineralizeSegments(route, newTree);
    return this.processSegment(injector, routes2, segmentGroup, newSegments.concat(remainingSegments), outlet, false, parentRoute);
  }
  createSnapshot(injector, route, segments, parameters, parentRoute) {
    const snapshot = new ActivatedRouteSnapshot(segments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route), injector);
    const inherited = getInherited(snapshot, parentRoute, this.paramsInheritanceStrategy);
    snapshot.params = Object.freeze(inherited.params);
    snapshot.data = Object.freeze(inherited.data);
    return snapshot;
  }
  async matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute) {
    if (this.abortSignal.aborted) {
      throw new Error(this.abortSignal.reason);
    }
    const createSnapshot = (result2) => this.createSnapshot(injector, route, result2.consumedSegments, result2.parameters, parentRoute);
    const result = await firstValueFrom(matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer, createSnapshot, this.abortSignal));
    if (route.path === "**") {
      rawSegment.children = {};
    }
    if (!result?.matched) {
      throw new NoMatch(rawSegment);
    }
    injector = route._injector ?? injector;
    const {
      routes: childConfig
    } = await this.getChildConfig(injector, route, segments);
    const childInjector = route._loadedInjector ?? injector;
    const {
      parameters,
      consumedSegments,
      remainingSegments
    } = result;
    const snapshot = this.createSnapshot(injector, route, consumedSegments, parameters, parentRoute);
    const {
      segmentGroup,
      slicedSegments
    } = split(rawSegment, consumedSegments, remainingSegments, childConfig, outlet);
    if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
      const children = await this.processChildren(childInjector, childConfig, segmentGroup, snapshot);
      return new TreeNode(snapshot, children);
    }
    if (childConfig.length === 0 && slicedSegments.length === 0) {
      return new TreeNode(snapshot, []);
    }
    const matchedOnOutlet = getOutlet(route) === outlet;
    const child = await this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true, snapshot);
    return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
  }
  async getChildConfig(injector, route, segments) {
    if (route.children) {
      return {
        routes: route.children,
        injector
      };
    }
    if (route.loadChildren) {
      if (route._loadedRoutes !== void 0) {
        const ngModuleFactory = route._loadedNgModuleFactory;
        if (ngModuleFactory && !route._loadedInjector) {
          route._loadedInjector = ngModuleFactory.create(injector).injector;
        }
        return {
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        };
      }
      if (this.abortSignal.aborted) {
        throw new Error(this.abortSignal.reason);
      }
      const shouldLoadResult = await firstValueFrom(runCanLoadGuards(injector, route, segments, this.urlSerializer, this.abortSignal));
      if (shouldLoadResult) {
        const cfg = await this.configLoader.loadChildren(injector, route);
        route._loadedRoutes = cfg.routes;
        route._loadedInjector = cfg.injector;
        route._loadedNgModuleFactory = cfg.factory;
        return cfg;
      }
      throw canLoadFails(route);
    }
    return {
      routes: [],
      injector
    };
  }
};
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a, b) => {
    if (a.value.outlet === PRIMARY_OUTLET) return -1;
    if (b.value.outlet === PRIMARY_OUTLET) return 1;
    return a.value.outlet.localeCompare(b.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === "";
}
function mergeEmptyPathMatches(nodes) {
  const result = [];
  const mergedNodes = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result.find((resultNode) => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== void 0) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result.push(node);
    }
  }
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result.filter((n) => !mergedNodes.has(n));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach((n) => {
    const routeWithSameOutletName = names[n.value.outlet];
    if (routeWithSameOutletName) {
      const p = routeWithSameOutletName.url.map((s) => s.toString()).join("/");
      const c = n.value.url.map((s) => s.toString()).join("/");
      throw new RuntimeError(4006, (typeof ngDevMode === "undefined" || ngDevMode) && `Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
    }
    names[n.value.outlet] = n.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy, abortSignal) {
  return mergeMap(async (t) => {
    const {
      state: targetSnapshot,
      tree: urlAfterRedirects
    } = await recognize$1(injector, configLoader, rootComponentType, config, t.extractedUrl, serializer, paramsInheritanceStrategy, abortSignal);
    return __spreadProps(__spreadValues({}, t), {
      targetSnapshot,
      urlAfterRedirects
    });
  });
}
function resolveData(paramsInheritanceStrategy) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      guards: {
        canActivateChecks
      }
    } = t;
    if (!canActivateChecks.length) {
      return of(t);
    }
    const routesWithResolversToRun = new Set(canActivateChecks.map((check) => check.route));
    const routesNeedingDataUpdates = /* @__PURE__ */ new Set();
    for (const route of routesWithResolversToRun) {
      if (routesNeedingDataUpdates.has(route)) {
        continue;
      }
      for (const newRoute of flattenRouteTree(route)) {
        routesNeedingDataUpdates.add(newRoute);
      }
    }
    let routesProcessed = 0;
    return from(routesNeedingDataUpdates).pipe(concatMap((route) => {
      if (routesWithResolversToRun.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return of(void 0);
      }
    }), tap(() => routesProcessed++), takeLast(1), mergeMap((_) => routesProcessed === routesNeedingDataUpdates.size ? of(t) : EMPTY));
  });
}
function flattenRouteTree(route) {
  const descendants = route.children.map((child) => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== void 0 && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return defer(() => {
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return resolveNode(resolve, futureARS, futureRSS).pipe(map((resolvedData) => {
      futureARS._resolvedData = resolvedData;
      futureARS.data = __spreadValues(__spreadValues({}, futureARS.data), resolvedData);
      return null;
    }));
  });
}
function resolveNode(resolve, futureARS, futureRSS) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return of({});
  }
  const data = {};
  return from(keys).pipe(mergeMap((key) => getResolver(resolve[key], futureARS, futureRSS).pipe(first(), tap((value) => {
    if (value instanceof RedirectCommand) {
      throw redirectingNavigationError(new DefaultUrlSerializer(), value);
    }
    data[key] = value;
  }))), takeLast(1), map(() => data), catchError((e) => isEmptyError(e) ? EMPTY : throwError(e)));
}
function getResolver(injectionToken, futureARS, futureRSS) {
  const closestInjector = futureARS._environmentInjector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}
function switchTap(next) {
  return switchMap((v) => {
    const nextResult = next(v);
    if (nextResult) {
      return from(nextResult).pipe(map(() => v));
    }
    return of(v);
  });
}
var TitleStrategy = class _TitleStrategy {
  buildTitle(snapshot) {
    let pageTitle;
    let route = snapshot.root;
    while (route !== void 0) {
      pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
      route = route.children.find((child) => child.outlet === PRIMARY_OUTLET);
    }
    return pageTitle;
  }
  getResolvedTitleForRoute(snapshot) {
    return snapshot.data[RouteTitleKey];
  }
  static \u0275fac = function TitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TitleStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TitleStrategy,
    factory: () => (() => inject(DefaultTitleStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultTitleStrategy)
    }]
  }], null, null);
})();
var DefaultTitleStrategy = class _DefaultTitleStrategy extends TitleStrategy {
  title;
  constructor(title) {
    super();
    this.title = title;
  }
  updateTitle(snapshot) {
    const title = this.buildTitle(snapshot);
    if (title !== void 0) {
      this.title.setTitle(title);
    }
  }
  static \u0275fac = function DefaultTitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultTitleStrategy)(\u0275\u0275inject(Title));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultTitleStrategy,
    factory: _DefaultTitleStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Title
  }], null);
})();
var ROUTER_CONFIGURATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router config" : "", {
  factory: () => ({})
});
var ROUTES = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "ROUTES" : "");
var RouterConfigLoader = class _RouterConfigLoader {
  componentLoaders = /* @__PURE__ */ new WeakMap();
  childrenLoaders = /* @__PURE__ */ new WeakMap();
  onLoadStartListener;
  onLoadEndListener;
  compiler = inject(Compiler);
  async loadComponent(injector, route) {
    if (this.componentLoaders.get(route)) {
      return this.componentLoaders.get(route);
    } else if (route._loadedComponent) {
      return Promise.resolve(route._loadedComponent);
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const loader = (async () => {
      try {
        const loaded = await wrapIntoPromise(runInInjectionContext(injector, () => route.loadComponent()));
        const component = await maybeResolveResources(maybeUnwrapDefaultExport(loaded));
        if (this.onLoadEndListener) {
          this.onLoadEndListener(route);
        }
        (typeof ngDevMode === "undefined" || ngDevMode) && assertStandalone(route.path ?? "", component);
        route._loadedComponent = component;
        return component;
      } finally {
        this.componentLoaders.delete(route);
      }
    })();
    this.componentLoaders.set(route, loader);
    return loader;
  }
  loadChildren(parentInjector, route) {
    if (this.childrenLoaders.get(route)) {
      return this.childrenLoaders.get(route);
    } else if (route._loadedRoutes) {
      return Promise.resolve({
        routes: route._loadedRoutes,
        injector: route._loadedInjector
      });
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const loader = (async () => {
      try {
        const result = await loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
        route._loadedRoutes = result.routes;
        route._loadedInjector = result.injector;
        route._loadedNgModuleFactory = result.factory;
        return result;
      } finally {
        this.childrenLoaders.delete(route);
      }
    })();
    this.childrenLoaders.set(route, loader);
    return loader;
  }
  static \u0275fac = function RouterConfigLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterConfigLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterConfigLoader,
    factory: _RouterConfigLoader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterConfigLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
async function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  const loaded = await wrapIntoPromise(runInInjectionContext(parentInjector, () => route.loadChildren()));
  const t = await maybeResolveResources(maybeUnwrapDefaultExport(loaded));
  let factoryOrRoutes;
  if (t instanceof NgModuleFactory$1 || Array.isArray(t)) {
    factoryOrRoutes = t;
  } else {
    factoryOrRoutes = await compiler.compileModuleAsync(t);
  }
  if (onLoadEndListener) {
    onLoadEndListener(route);
  }
  let injector;
  let rawRoutes;
  let requireStandaloneComponents = false;
  let factory = void 0;
  if (Array.isArray(factoryOrRoutes)) {
    rawRoutes = factoryOrRoutes;
    requireStandaloneComponents = true;
  } else {
    injector = factoryOrRoutes.create(parentInjector).injector;
    factory = factoryOrRoutes;
    rawRoutes = injector.get(ROUTES, [], {
      optional: true,
      self: true
    }).flat();
  }
  const routes2 = rawRoutes.map(standardizeConfig);
  (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(routes2, route.path, requireStandaloneComponents);
  return {
    routes: routes2,
    injector,
    factory
  };
}
function isWrappedDefaultExport(value) {
  return value && typeof value === "object" && "default" in value;
}
function maybeUnwrapDefaultExport(input2) {
  return isWrappedDefaultExport(input2) ? input2["default"] : input2;
}
async function maybeResolveResources(value) {
  if (false) {
    try {
      await resolveComponentResources(fetch);
    } catch (error) {
      console.error(error);
    }
  }
  return value;
}
var UrlHandlingStrategy = class _UrlHandlingStrategy {
  static \u0275fac = function UrlHandlingStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlHandlingStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UrlHandlingStrategy,
    factory: () => (() => inject(DefaultUrlHandlingStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultUrlHandlingStrategy)
    }]
  }], null, null);
})();
var DefaultUrlHandlingStrategy = class _DefaultUrlHandlingStrategy {
  shouldProcessUrl(url) {
    return true;
  }
  extract(url) {
    return url;
  }
  merge(newUrlPart, wholeUrl) {
    return newUrlPart;
  }
  static \u0275fac = function DefaultUrlHandlingStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultUrlHandlingStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultUrlHandlingStrategy,
    factory: _DefaultUrlHandlingStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultUrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CREATE_VIEW_TRANSITION = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "view transition helper" : "");
var VIEW_TRANSITION_OPTIONS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "view transition options" : "");
function createViewTransition(injector, from2, to) {
  const transitionOptions = injector.get(VIEW_TRANSITION_OPTIONS);
  const document2 = injector.get(DOCUMENT);
  if (!document2.startViewTransition || transitionOptions.skipNextTransition) {
    transitionOptions.skipNextTransition = false;
    return new Promise((resolve) => setTimeout(resolve));
  }
  let resolveViewTransitionStarted;
  const viewTransitionStarted = new Promise((resolve) => {
    resolveViewTransitionStarted = resolve;
  });
  const transition = document2.startViewTransition(() => {
    resolveViewTransitionStarted();
    return createRenderPromise(injector);
  });
  transition.updateCallbackDone.catch((error) => {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.error(error);
    }
  });
  transition.ready.catch((error) => {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.error(error);
    }
  });
  transition.finished.catch((error) => {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.error(error);
    }
  });
  const {
    onViewTransitionCreated
  } = transitionOptions;
  if (onViewTransitionCreated) {
    runInInjectionContext(injector, () => onViewTransitionCreated({
      transition,
      from: from2,
      to
    }));
  }
  return viewTransitionStarted;
}
function createRenderPromise(injector) {
  return new Promise((resolve) => {
    afterNextRender({
      read: () => setTimeout(resolve)
    }, {
      injector
    });
  });
}
var noop = () => {
};
var NAVIGATION_ERROR_HANDLER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "navigation error handler" : "");
var NavigationTransitions = class _NavigationTransitions {
  currentNavigation = signal(null, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "currentNavigation"
  } : {}), {
    equal: () => false
  }));
  currentTransition = null;
  lastSuccessfulNavigation = signal(null, ...ngDevMode ? [{
    debugName: "lastSuccessfulNavigation"
  }] : []);
  events = new Subject();
  transitionAbortWithErrorSubject = new Subject();
  configLoader = inject(RouterConfigLoader);
  environmentInjector = inject(EnvironmentInjector);
  destroyRef = inject(DestroyRef);
  urlSerializer = inject(UrlSerializer);
  rootContexts = inject(ChildrenOutletContexts);
  location = inject(Location);
  inputBindingEnabled = inject(INPUT_BINDER, {
    optional: true
  }) !== null;
  titleStrategy = inject(TitleStrategy);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  createViewTransition = inject(CREATE_VIEW_TRANSITION, {
    optional: true
  });
  navigationErrorHandler = inject(NAVIGATION_ERROR_HANDLER, {
    optional: true
  });
  navigationId = 0;
  get hasRequestedNavigation() {
    return this.navigationId !== 0;
  }
  transitions;
  afterPreactivation = () => of(void 0);
  rootComponentType = null;
  destroyed = false;
  constructor() {
    const onLoadStart = (r) => this.events.next(new RouteConfigLoadStart(r));
    const onLoadEnd = (r) => this.events.next(new RouteConfigLoadEnd(r));
    this.configLoader.onLoadEndListener = onLoadEnd;
    this.configLoader.onLoadStartListener = onLoadStart;
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
    });
  }
  complete() {
    this.transitions?.complete();
  }
  handleNavigationRequest(request) {
    const id = ++this.navigationId;
    untracked(() => {
      this.transitions?.next(__spreadProps(__spreadValues({}, request), {
        extractedUrl: this.urlHandlingStrategy.extract(request.rawUrl),
        targetSnapshot: null,
        targetRouterState: null,
        guards: {
          canActivateChecks: [],
          canDeactivateChecks: []
        },
        guardsResult: null,
        id,
        routesRecognizeHandler: {},
        beforeActivateHandler: {}
      }));
    });
  }
  setupNavigations(router) {
    this.transitions = new BehaviorSubject(null);
    return this.transitions.pipe(filter((t) => t !== null), switchMap((overallTransitionState) => {
      let completedOrAborted = false;
      const abortController = new AbortController();
      const shouldContinueNavigation = () => {
        return !completedOrAborted && this.currentTransition?.id === overallTransitionState.id;
      };
      return of(overallTransitionState).pipe(switchMap((t) => {
        if (this.navigationId > overallTransitionState.id) {
          const cancellationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
          this.cancelNavigationTransition(overallTransitionState, cancellationReason, NavigationCancellationCode.SupersededByNewNavigation);
          return EMPTY;
        }
        this.currentTransition = overallTransitionState;
        const lastSuccessfulNavigation = this.lastSuccessfulNavigation();
        this.currentNavigation.set({
          id: t.id,
          initialUrl: t.rawUrl,
          extractedUrl: t.extractedUrl,
          targetBrowserUrl: typeof t.extras.browserUrl === "string" ? this.urlSerializer.parse(t.extras.browserUrl) : t.extras.browserUrl,
          trigger: t.source,
          extras: t.extras,
          previousNavigation: !lastSuccessfulNavigation ? null : __spreadProps(__spreadValues({}, lastSuccessfulNavigation), {
            previousNavigation: null
          }),
          abort: () => abortController.abort(),
          routesRecognizeHandler: t.routesRecognizeHandler,
          beforeActivateHandler: t.beforeActivateHandler
        });
        const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
        const onSameUrlNavigation = t.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
        if (!urlTransition && onSameUrlNavigation !== "reload") {
          const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation to ${t.rawUrl} was ignored because it is the same as the current Router URL.` : "";
          this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.rawUrl), reason, NavigationSkippedCode.IgnoredSameUrlNavigation));
          t.resolve(false);
          return EMPTY;
        }
        if (this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) {
          return of(t).pipe(switchMap((t2) => {
            this.events.next(new NavigationStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), t2.source, t2.restoredState));
            if (t2.id !== this.navigationId) {
              return EMPTY;
            }
            return Promise.resolve(t2);
          }), recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy, abortController.signal), tap((t2) => {
            overallTransitionState.targetSnapshot = t2.targetSnapshot;
            overallTransitionState.urlAfterRedirects = t2.urlAfterRedirects;
            this.currentNavigation.update((nav) => {
              nav.finalUrl = t2.urlAfterRedirects;
              return nav;
            });
            this.events.next(new BeforeRoutesRecognized());
          }), switchMap((value) => from(overallTransitionState.routesRecognizeHandler.deferredHandle ?? of(void 0)).pipe(map(() => value))), tap(() => {
            const routesRecognized = new RoutesRecognized(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
            this.events.next(routesRecognized);
          }));
        } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t.currentRawUrl)) {
          const {
            id,
            extractedUrl,
            source,
            restoredState,
            extras
          } = t;
          const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
          this.events.next(navStart);
          const targetSnapshot = createEmptyState(this.rootComponentType, this.environmentInjector).snapshot;
          this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
            targetSnapshot,
            urlAfterRedirects: extractedUrl,
            extras: __spreadProps(__spreadValues({}, extras), {
              skipLocationChange: false,
              replaceUrl: false
            })
          });
          this.currentNavigation.update((nav) => {
            nav.finalUrl = extractedUrl;
            return nav;
          });
          return of(overallTransitionState);
        } else {
          const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t.currentRawUrl} nor target URL ${t.rawUrl} should be processed.` : "";
          this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, NavigationSkippedCode.IgnoredByUrlHandlingStrategy));
          t.resolve(false);
          return EMPTY;
        }
      }), map((t) => {
        const guardsStart = new GuardsCheckStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
        this.events.next(guardsStart);
        this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
          guards: getAllRouteGuards(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
        });
        return overallTransitionState;
      }), checkGuards((evt) => this.events.next(evt)), switchMap((t) => {
        overallTransitionState.guardsResult = t.guardsResult;
        if (t.guardsResult && typeof t.guardsResult !== "boolean") {
          throw redirectingNavigationError(this.urlSerializer, t.guardsResult);
        }
        const guardsEnd = new GuardsCheckEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
        this.events.next(guardsEnd);
        if (!shouldContinueNavigation()) {
          return EMPTY;
        }
        if (!t.guardsResult) {
          this.cancelNavigationTransition(t, "", NavigationCancellationCode.GuardRejected);
          return EMPTY;
        }
        if (t.guards.canActivateChecks.length === 0) {
          return of(t);
        }
        const resolveStart = new ResolveStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
        this.events.next(resolveStart);
        if (!shouldContinueNavigation()) {
          return EMPTY;
        }
        let dataResolved = false;
        return of(t).pipe(resolveData(this.paramsInheritanceStrategy), tap({
          next: () => {
            dataResolved = true;
            const resolveEnd = new ResolveEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
            this.events.next(resolveEnd);
          },
          complete: () => {
            if (!dataResolved) {
              this.cancelNavigationTransition(t, typeof ngDevMode === "undefined" || ngDevMode ? `At least one route resolver didn't emit any value.` : "", NavigationCancellationCode.NoDataFromResolver);
            }
          }
        }));
      }), switchTap((t) => {
        const loadComponents = (route) => {
          const loaders2 = [];
          if (route.routeConfig?._loadedComponent) {
            route.component = route.routeConfig?._loadedComponent;
          } else if (route.routeConfig?.loadComponent) {
            const injector = route._environmentInjector;
            loaders2.push(this.configLoader.loadComponent(injector, route.routeConfig).then((loadedComponent) => {
              route.component = loadedComponent;
            }));
          }
          for (const child of route.children) {
            loaders2.push(...loadComponents(child));
          }
          return loaders2;
        };
        const loaders = loadComponents(t.targetSnapshot.root);
        return loaders.length === 0 ? of(t) : from(Promise.all(loaders).then(() => t));
      }), switchTap(() => this.afterPreactivation()), switchMap(() => {
        const {
          currentSnapshot,
          targetSnapshot
        } = overallTransitionState;
        const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
        return viewTransitionStarted ? from(viewTransitionStarted).pipe(map(() => overallTransitionState)) : of(overallTransitionState);
      }), take(1), switchMap((t) => {
        const targetRouterState = createRouterState(router.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
        this.currentTransition = overallTransitionState = t = __spreadProps(__spreadValues({}, t), {
          targetRouterState
        });
        this.currentNavigation.update((nav) => {
          nav.targetRouterState = targetRouterState;
          return nav;
        });
        this.events.next(new BeforeActivateRoutes());
        const deferred = overallTransitionState.beforeActivateHandler.deferredHandle;
        return deferred ? from(deferred.then(() => t)) : of(t);
      }), tap((t) => {
        new ActivateRoutes(router.routeReuseStrategy, overallTransitionState.targetRouterState, overallTransitionState.currentRouterState, (evt) => this.events.next(evt), this.inputBindingEnabled).activate(this.rootContexts);
        if (!shouldContinueNavigation()) {
          return;
        }
        completedOrAborted = true;
        this.currentNavigation.update((nav) => {
          nav.abort = noop;
          return nav;
        });
        this.lastSuccessfulNavigation.set(untracked(this.currentNavigation));
        this.events.next(new NavigationEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects)));
        this.titleStrategy?.updateTitle(t.targetRouterState.snapshot);
        t.resolve(true);
      }), takeUntil(abortSignalToObservable(abortController.signal).pipe(filter(() => !completedOrAborted && !overallTransitionState.targetRouterState), tap(() => {
        this.cancelNavigationTransition(overallTransitionState, abortController.signal.reason + "", NavigationCancellationCode.Aborted);
      }))), tap({
        complete: () => {
          completedOrAborted = true;
        }
      }), takeUntil(this.transitionAbortWithErrorSubject.pipe(tap((err) => {
        throw err;
      }))), finalize(() => {
        abortController.abort();
        if (!completedOrAborted) {
          const cancelationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
          this.cancelNavigationTransition(overallTransitionState, cancelationReason, NavigationCancellationCode.SupersededByNewNavigation);
        }
        if (this.currentTransition?.id === overallTransitionState.id) {
          this.currentNavigation.set(null);
          this.currentTransition = null;
        }
      }), catchError((e) => {
        completedOrAborted = true;
        if (this.destroyed) {
          overallTransitionState.resolve(false);
          return EMPTY;
        }
        if (isNavigationCancelingError(e)) {
          this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e.message, e.cancellationCode));
          if (!isRedirectingNavigationCancelingError(e)) {
            overallTransitionState.resolve(false);
          } else {
            this.events.next(new RedirectRequest(e.url, e.navigationBehaviorOptions));
          }
        } else {
          const navigationError = new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e, overallTransitionState.targetSnapshot ?? void 0);
          try {
            const navigationErrorHandlerResult = runInInjectionContext(this.environmentInjector, () => this.navigationErrorHandler?.(navigationError));
            if (navigationErrorHandlerResult instanceof RedirectCommand) {
              const {
                message,
                cancellationCode
              } = redirectingNavigationError(this.urlSerializer, navigationErrorHandlerResult);
              this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), message, cancellationCode));
              this.events.next(new RedirectRequest(navigationErrorHandlerResult.redirectTo, navigationErrorHandlerResult.navigationBehaviorOptions));
            } else {
              this.events.next(navigationError);
              throw e;
            }
          } catch (ee) {
            if (this.options.resolveNavigationPromiseOnError) {
              overallTransitionState.resolve(false);
            } else {
              overallTransitionState.reject(ee);
            }
          }
        }
        return EMPTY;
      }));
    }));
  }
  cancelNavigationTransition(t, reason, code) {
    const navCancel = new NavigationCancel(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, code);
    this.events.next(navCancel);
    t.resolve(false);
  }
  isUpdatingInternalState() {
    return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
  }
  isUpdatedBrowserUrl() {
    const currentBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
    const currentNavigation = untracked(this.currentNavigation);
    const targetBrowserUrl = currentNavigation?.targetBrowserUrl ?? currentNavigation?.extractedUrl;
    return currentBrowserUrl.toString() !== targetBrowserUrl?.toString() && !currentNavigation?.extras.skipLocationChange;
  }
  static \u0275fac = function NavigationTransitions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationTransitions)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavigationTransitions,
    factory: _NavigationTransitions.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationTransitions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}
var ROUTE_INJECTOR_CLEANUP = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "RouteInjectorCleanup" : "");
var RouteReuseStrategy = class _RouteReuseStrategy {
  static \u0275fac = function RouteReuseStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouteReuseStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouteReuseStrategy,
    factory: () => (() => inject(DefaultRouteReuseStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultRouteReuseStrategy)
    }]
  }], null, null);
})();
var BaseRouteReuseStrategy = class {
  shouldDetach(route) {
    return false;
  }
  store(route, detachedTree) {
  }
  shouldAttach(route) {
    return false;
  }
  retrieve(route) {
    return null;
  }
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig;
  }
  shouldDestroyInjector(route) {
    return true;
  }
};
var DefaultRouteReuseStrategy = class _DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DefaultRouteReuseStrategy_BaseFactory;
    return function DefaultRouteReuseStrategy_Factory(__ngFactoryType__) {
      return (\u0275DefaultRouteReuseStrategy_BaseFactory || (\u0275DefaultRouteReuseStrategy_BaseFactory = \u0275\u0275getInheritedFactory(_DefaultRouteReuseStrategy)))(__ngFactoryType__ || _DefaultRouteReuseStrategy);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultRouteReuseStrategy,
    factory: _DefaultRouteReuseStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultRouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var StateManager = class _StateManager {
  urlSerializer = inject(UrlSerializer);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
  location = inject(Location);
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
  currentUrlTree = new UrlTree();
  getCurrentUrlTree() {
    return this.currentUrlTree;
  }
  rawUrlTree = this.currentUrlTree;
  getRawUrlTree() {
    return this.rawUrlTree;
  }
  createBrowserPath({
    finalUrl,
    initialUrl,
    targetBrowserUrl
  }) {
    const rawUrl = finalUrl !== void 0 ? this.urlHandlingStrategy.merge(finalUrl, initialUrl) : initialUrl;
    const url = targetBrowserUrl ?? rawUrl;
    const path = url instanceof UrlTree ? this.urlSerializer.serialize(url) : url;
    return path;
  }
  routerUrlState(navigation) {
    if (navigation?.targetBrowserUrl === void 0 || navigation?.finalUrl === void 0) {
      return {};
    }
    return {
      \u0275routerUrl: this.urlSerializer.serialize(navigation.finalUrl)
    };
  }
  commitTransition({
    targetRouterState,
    finalUrl,
    initialUrl
  }) {
    if (finalUrl && targetRouterState) {
      this.currentUrlTree = finalUrl;
      this.rawUrlTree = this.urlHandlingStrategy.merge(finalUrl, initialUrl);
      this.routerState = targetRouterState;
    } else {
      this.rawUrlTree = initialUrl;
    }
  }
  routerState = createEmptyState(null, inject(EnvironmentInjector));
  getRouterState() {
    return this.routerState;
  }
  _stateMemento = this.createStateMemento();
  get stateMemento() {
    return this._stateMemento;
  }
  updateStateMemento() {
    this._stateMemento = this.createStateMemento();
  }
  createStateMemento() {
    return {
      rawUrlTree: this.rawUrlTree,
      currentUrlTree: this.currentUrlTree,
      routerState: this.routerState
    };
  }
  restoredState() {
    return this.location.getState();
  }
  static \u0275fac = function StateManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StateManager)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StateManager,
    factory: () => (() => inject(HistoryStateManager))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(HistoryStateManager)
    }]
  }], null, null);
})();
var HistoryStateManager = class _HistoryStateManager extends StateManager {
  currentPageId = 0;
  lastSuccessfulId = -1;
  get browserPageId() {
    if (this.canceledNavigationResolution !== "computed") {
      return this.currentPageId;
    }
    return this.restoredState()?.\u0275routerPageId ?? this.currentPageId;
  }
  registerNonRouterCurrentEntryChangeListener(listener) {
    return this.location.subscribe((event) => {
      if (event["type"] === "popstate") {
        setTimeout(() => {
          listener(event["url"], event.state, "popstate", {
            replaceUrl: true
          });
        });
      }
    });
  }
  handleRouterEvent(e, currentTransition) {
    if (e instanceof NavigationStart) {
      this.updateStateMemento();
    } else if (e instanceof NavigationSkipped) {
      this.commitTransition(currentTransition);
    } else if (e instanceof RoutesRecognized) {
      if (this.urlUpdateStrategy === "eager") {
        if (!currentTransition.extras.skipLocationChange) {
          this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
        }
      }
    } else if (e instanceof BeforeActivateRoutes) {
      this.commitTransition(currentTransition);
      if (this.urlUpdateStrategy === "deferred" && !currentTransition.extras.skipLocationChange) {
        this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
      }
    } else if (e instanceof NavigationCancel && !isRedirectingEvent(e)) {
      this.restoreHistory(currentTransition);
    } else if (e instanceof NavigationError) {
      this.restoreHistory(currentTransition, true);
    } else if (e instanceof NavigationEnd) {
      this.lastSuccessfulId = e.id;
      this.currentPageId = this.browserPageId;
    }
  }
  setBrowserUrl(path, navigation) {
    const {
      extras,
      id
    } = navigation;
    const {
      replaceUrl,
      state
    } = extras;
    if (this.location.isCurrentPathEqualTo(path) || !!replaceUrl) {
      const currentBrowserPageId = this.browserPageId;
      const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, currentBrowserPageId, navigation));
      this.location.replaceState(path, "", newState);
    } else {
      const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, this.browserPageId + 1, navigation));
      this.location.go(path, "", newState);
    }
  }
  restoreHistory(navigation, restoringFromCaughtError = false) {
    if (this.canceledNavigationResolution === "computed") {
      const currentBrowserPageId = this.browserPageId;
      const targetPagePosition = this.currentPageId - currentBrowserPageId;
      if (targetPagePosition !== 0) {
        this.location.historyGo(targetPagePosition);
      } else if (this.getCurrentUrlTree() === navigation.finalUrl && targetPagePosition === 0) {
        this.resetInternalState(navigation);
        this.resetUrlToCurrentUrlTree();
      } else ;
    } else if (this.canceledNavigationResolution === "replace") {
      if (restoringFromCaughtError) {
        this.resetInternalState(navigation);
      }
      this.resetUrlToCurrentUrlTree();
    }
  }
  resetInternalState({
    finalUrl
  }) {
    this.routerState = this.stateMemento.routerState;
    this.currentUrlTree = this.stateMemento.currentUrlTree;
    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, finalUrl ?? this.rawUrlTree);
  }
  resetUrlToCurrentUrlTree() {
    this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
  }
  generateNgRouterState(navigationId, routerPageId, navigation) {
    if (this.canceledNavigationResolution === "computed") {
      return __spreadValues({
        navigationId,
        \u0275routerPageId: routerPageId
      }, this.routerUrlState(navigation));
    }
    return __spreadValues({
      navigationId
    }, this.routerUrlState(navigation));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275HistoryStateManager_BaseFactory;
    return function HistoryStateManager_Factory(__ngFactoryType__) {
      return (\u0275HistoryStateManager_BaseFactory || (\u0275HistoryStateManager_BaseFactory = \u0275\u0275getInheritedFactory(_HistoryStateManager)))(__ngFactoryType__ || _HistoryStateManager);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HistoryStateManager,
    factory: _HistoryStateManager.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function afterNextNavigation(router, action) {
  router.events.pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError || e instanceof NavigationSkipped), map((e) => {
    if (e instanceof NavigationEnd || e instanceof NavigationSkipped) {
      return 0;
    }
    const redirecting = e instanceof NavigationCancel ? e.code === NavigationCancellationCode.Redirect || e.code === NavigationCancellationCode.SupersededByNewNavigation : false;
    return redirecting ? 2 : 1;
  }), filter((result) => result !== 2), take(1)).subscribe(() => {
    action();
  });
}
var Router = class _Router {
  get currentUrlTree() {
    return this.stateManager.getCurrentUrlTree();
  }
  get rawUrlTree() {
    return this.stateManager.getRawUrlTree();
  }
  disposed = false;
  nonRouterCurrentEntryChangeSubscription;
  console = inject(Console);
  stateManager = inject(StateManager);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  pendingTasks = inject(PendingTasksInternal);
  urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
  navigationTransitions = inject(NavigationTransitions);
  urlSerializer = inject(UrlSerializer);
  location = inject(Location);
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  injector = inject(EnvironmentInjector);
  _events = new Subject();
  get events() {
    return this._events;
  }
  get routerState() {
    return this.stateManager.getRouterState();
  }
  navigated = false;
  routeReuseStrategy = inject(RouteReuseStrategy);
  injectorCleanup = inject(ROUTE_INJECTOR_CLEANUP, {
    optional: true
  });
  onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
  config = inject(ROUTES, {
    optional: true
  })?.flat() ?? [];
  componentInputBindingEnabled = !!inject(INPUT_BINDER, {
    optional: true
  });
  currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
  constructor() {
    this.resetConfig(this.config);
    this.navigationTransitions.setupNavigations(this).subscribe({
      error: (e) => {
      }
    });
    this.subscribeToNavigationEvents();
  }
  eventsSubscription = new Subscription();
  subscribeToNavigationEvents() {
    const subscription = this.navigationTransitions.events.subscribe((e) => {
      try {
        const currentTransition = this.navigationTransitions.currentTransition;
        const currentNavigation = untracked(this.navigationTransitions.currentNavigation);
        if (currentTransition !== null && currentNavigation !== null) {
          this.stateManager.handleRouterEvent(e, currentNavigation);
          if (e instanceof NavigationCancel && e.code !== NavigationCancellationCode.Redirect && e.code !== NavigationCancellationCode.SupersededByNewNavigation) {
            this.navigated = true;
          } else if (e instanceof NavigationEnd) {
            this.navigated = true;
            this.injectorCleanup?.(this.routeReuseStrategy, this.routerState, this.config);
          } else if (e instanceof RedirectRequest) {
            const opts = e.navigationBehaviorOptions;
            const mergedTree = this.urlHandlingStrategy.merge(e.url, currentTransition.currentRawUrl);
            const extras = __spreadValues({
              scroll: currentTransition.extras.scroll,
              browserUrl: currentTransition.extras.browserUrl,
              info: currentTransition.extras.info,
              skipLocationChange: currentTransition.extras.skipLocationChange,
              replaceUrl: currentTransition.extras.replaceUrl || this.urlUpdateStrategy === "eager" || isBrowserTriggeredNavigation(currentTransition.source)
            }, opts);
            this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras, {
              resolve: currentTransition.resolve,
              reject: currentTransition.reject,
              promise: currentTransition.promise
            });
          }
        }
        if (isPublicRouterEvent(e)) {
          this._events.next(e);
        }
      } catch (e2) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(e2);
      }
    });
    this.eventsSubscription.add(subscription);
  }
  resetRootComponentType(rootComponentType) {
    this.routerState.root.component = rootComponentType;
    this.navigationTransitions.rootComponentType = rootComponentType;
  }
  initialNavigation() {
    this.setUpLocationChangeListener();
    if (!this.navigationTransitions.hasRequestedNavigation) {
      this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState(), {
        replaceUrl: true
      });
    }
  }
  setUpLocationChangeListener() {
    this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state, source, extras) => {
      this.navigateToSyncWithBrowser(url, source, state, extras);
    });
  }
  navigateToSyncWithBrowser(url, source, state, extras) {
    const restoredState = state?.navigationId ? state : null;
    const routerUrl = state?.\u0275routerUrl ?? url;
    if (state?.\u0275routerUrl) {
      extras = __spreadProps(__spreadValues({}, extras), {
        browserUrl: url
      });
    }
    if (state) {
      const stateCopy = __spreadValues({}, state);
      delete stateCopy.navigationId;
      delete stateCopy.\u0275routerPageId;
      delete stateCopy.\u0275routerUrl;
      if (Object.keys(stateCopy).length !== 0) {
        extras.state = stateCopy;
      }
    }
    const urlTree = this.parseUrl(routerUrl);
    this.scheduleNavigation(urlTree, source, restoredState, extras).catch((e) => {
      if (this.disposed) {
        return;
      }
      this.injector.get(INTERNAL_APPLICATION_ERROR_HANDLER)(e);
    });
  }
  get url() {
    return this.serializeUrl(this.currentUrlTree);
  }
  getCurrentNavigation() {
    return untracked(this.navigationTransitions.currentNavigation);
  }
  get lastSuccessfulNavigation() {
    return this.navigationTransitions.lastSuccessfulNavigation;
  }
  resetConfig(config) {
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(config);
    this.config = config.map(standardizeConfig);
    this.navigated = false;
  }
  ngOnDestroy() {
    this.dispose();
  }
  dispose() {
    this._events.unsubscribe();
    this.navigationTransitions.complete();
    this.nonRouterCurrentEntryChangeSubscription?.unsubscribe();
    this.nonRouterCurrentEntryChangeSubscription = void 0;
    this.disposed = true;
    this.eventsSubscription.unsubscribe();
  }
  createUrlTree(commands, navigationExtras = {}) {
    const {
      relativeTo,
      queryParams,
      fragment,
      queryParamsHandling,
      preserveFragment
    } = navigationExtras;
    const f = preserveFragment ? this.currentUrlTree.fragment : fragment;
    let q = null;
    switch (queryParamsHandling ?? this.options.defaultQueryParamsHandling) {
      case "merge":
        q = __spreadValues(__spreadValues({}, this.currentUrlTree.queryParams), queryParams);
        break;
      case "preserve":
        q = this.currentUrlTree.queryParams;
        break;
      default:
        q = queryParams || null;
    }
    if (q !== null) {
      q = this.removeEmptyProps(q);
    }
    let relativeToUrlSegmentGroup;
    try {
      const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
      relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
    } catch (e) {
      if (typeof commands[0] !== "string" || commands[0][0] !== "/") {
        commands = [];
      }
      relativeToUrlSegmentGroup = this.currentUrlTree.root;
    }
    return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q, f ?? null, this.urlSerializer);
  }
  navigateByUrl(url, extras = {
    skipLocationChange: false
  }) {
    const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
    const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
    return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras);
  }
  navigate(commands, extras = {
    skipLocationChange: false
  }) {
    validateCommands(commands);
    return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
  }
  serializeUrl(url) {
    return this.urlSerializer.serialize(url);
  }
  parseUrl(url) {
    try {
      return this.urlSerializer.parse(url);
    } catch (e) {
      this.console.warn(formatRuntimeError(4018, ngDevMode && `Error parsing URL ${url}. Falling back to '/' instead. 
` + e));
      return this.urlSerializer.parse("/");
    }
  }
  isActive(url, matchOptions) {
    let options;
    if (matchOptions === true) {
      options = __spreadValues({}, exactMatchOptions);
    } else if (matchOptions === false) {
      options = __spreadValues({}, subsetMatchOptions);
    } else {
      options = __spreadValues(__spreadValues({}, subsetMatchOptions), matchOptions);
    }
    if (isUrlTree(url)) {
      return containsTree(this.currentUrlTree, url, options);
    }
    const urlTree = this.parseUrl(url);
    return containsTree(this.currentUrlTree, urlTree, options);
  }
  removeEmptyProps(params) {
    return Object.entries(params).reduce((result, [key, value]) => {
      if (value !== null && value !== void 0) {
        result[key] = value;
      }
      return result;
    }, {});
  }
  scheduleNavigation(rawUrl, source, restoredState, extras, priorPromise) {
    if (this.disposed) {
      return Promise.resolve(false);
    }
    let resolve;
    let reject;
    let promise;
    if (priorPromise) {
      resolve = priorPromise.resolve;
      reject = priorPromise.reject;
      promise = priorPromise.promise;
    } else {
      promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
    }
    const taskId = this.pendingTasks.add();
    afterNextNavigation(this, () => {
      queueMicrotask(() => this.pendingTasks.remove(taskId));
    });
    this.navigationTransitions.handleNavigationRequest({
      source,
      restoredState,
      currentUrlTree: this.currentUrlTree,
      currentRawUrl: this.currentUrlTree,
      rawUrl,
      extras,
      resolve,
      reject,
      promise,
      currentSnapshot: this.routerState.snapshot,
      currentRouterState: this.routerState
    });
    return promise.catch(Promise.reject.bind(Promise));
  }
  static \u0275fac = function Router_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Router)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Router,
    factory: _Router.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Router, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function validateCommands(commands) {
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd == null) {
      throw new RuntimeError(4008, (typeof ngDevMode === "undefined" || ngDevMode) && `The requested path contains ${cmd} segment at index ${i}`);
    }
  }
}

// node_modules/@angular/router/fesm2022/_router_module-chunk.mjs
/**
 * @license Angular v21.2.10
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var ReactiveRouterState = class _ReactiveRouterState {
  router = inject(Router);
  stateManager = inject(StateManager);
  fragment = signal("", ...ngDevMode ? [{
    debugName: "fragment"
  }] : []);
  queryParams = signal({}, ...ngDevMode ? [{
    debugName: "queryParams"
  }] : []);
  path = signal("", ...ngDevMode ? [{
    debugName: "path"
  }] : []);
  serializer = inject(UrlSerializer);
  constructor() {
    this.updateState();
    this.router.events?.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.updateState();
      }
    });
  }
  updateState() {
    const {
      fragment,
      root,
      queryParams
    } = this.stateManager.getCurrentUrlTree();
    this.fragment.set(fragment);
    this.queryParams.set(queryParams);
    this.path.set(this.serializer.serialize(new UrlTree(root)));
  }
  static \u0275fac = function ReactiveRouterState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveRouterState)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ReactiveRouterState,
    factory: _ReactiveRouterState.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveRouterState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var RouterLink = class _RouterLink {
  router;
  route;
  tabIndexAttribute;
  renderer;
  el;
  locationStrategy;
  hrefAttributeValue = inject(new HostAttributeToken("href"), {
    optional: true
  });
  reactiveHref = linkedSignal(() => {
    if (!this.isAnchorElement) {
      return this.hrefAttributeValue;
    }
    return this.computeHref(this._urlTree());
  }, ...ngDevMode ? [{
    debugName: "reactiveHref"
  }] : []);
  get href() {
    return untracked(this.reactiveHref);
  }
  set href(value) {
    this.reactiveHref.set(value);
  }
  set target(value) {
    this._target.set(value);
  }
  get target() {
    return untracked(this._target);
  }
  _target = signal(void 0, ...ngDevMode ? [{
    debugName: "_target"
  }] : []);
  set queryParams(value) {
    this._queryParams.set(value);
  }
  get queryParams() {
    return untracked(this._queryParams);
  }
  _queryParams = signal(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "_queryParams"
  } : {}), {
    equal: () => false
  }));
  set fragment(value) {
    this._fragment.set(value);
  }
  get fragment() {
    return untracked(this._fragment);
  }
  _fragment = signal(void 0, ...ngDevMode ? [{
    debugName: "_fragment"
  }] : []);
  set queryParamsHandling(value) {
    this._queryParamsHandling.set(value);
  }
  get queryParamsHandling() {
    return untracked(this._queryParamsHandling);
  }
  _queryParamsHandling = signal(void 0, ...ngDevMode ? [{
    debugName: "_queryParamsHandling"
  }] : []);
  set state(value) {
    this._state.set(value);
  }
  get state() {
    return untracked(this._state);
  }
  _state = signal(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "_state"
  } : {}), {
    equal: () => false
  }));
  set info(value) {
    this._info.set(value);
  }
  get info() {
    return untracked(this._info);
  }
  _info = signal(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "_info"
  } : {}), {
    equal: () => false
  }));
  set relativeTo(value) {
    this._relativeTo.set(value);
  }
  get relativeTo() {
    return untracked(this._relativeTo);
  }
  _relativeTo = signal(void 0, ...ngDevMode ? [{
    debugName: "_relativeTo"
  }] : []);
  set preserveFragment(value) {
    this._preserveFragment.set(value);
  }
  get preserveFragment() {
    return untracked(this._preserveFragment);
  }
  _preserveFragment = signal(false, ...ngDevMode ? [{
    debugName: "_preserveFragment"
  }] : []);
  set skipLocationChange(value) {
    this._skipLocationChange.set(value);
  }
  get skipLocationChange() {
    return untracked(this._skipLocationChange);
  }
  _skipLocationChange = signal(false, ...ngDevMode ? [{
    debugName: "_skipLocationChange"
  }] : []);
  set replaceUrl(value) {
    this._replaceUrl.set(value);
  }
  get replaceUrl() {
    return untracked(this._replaceUrl);
  }
  _replaceUrl = signal(false, ...ngDevMode ? [{
    debugName: "_replaceUrl"
  }] : []);
  isAnchorElement;
  onChanges = new Subject();
  applicationErrorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  });
  reactiveRouterState = inject(ReactiveRouterState);
  constructor(router, route, tabIndexAttribute, renderer, el, locationStrategy) {
    this.router = router;
    this.route = route;
    this.tabIndexAttribute = tabIndexAttribute;
    this.renderer = renderer;
    this.el = el;
    this.locationStrategy = locationStrategy;
    const tagName = el.nativeElement.tagName?.toLowerCase();
    this.isAnchorElement = tagName === "a" || tagName === "area" || !!(typeof customElements === "object" && customElements.get(tagName)?.observedAttributes?.includes?.("href"));
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      effect(() => {
        if (isUrlTree(this.routerLinkInput()) && (this._fragment() !== void 0 || this._queryParams() || this._queryParamsHandling() || this._preserveFragment() || this._relativeTo())) {
          throw new RuntimeError(4017, "Cannot configure queryParams or fragment when using a UrlTree as the routerLink input value.");
        }
      });
    }
  }
  setTabIndexIfNotOnNativeEl(newTabIndex) {
    if (this.tabIndexAttribute != null || this.isAnchorElement) {
      return;
    }
    this.applyAttributeValue("tabindex", newTabIndex);
  }
  ngOnChanges(changes) {
    this.onChanges.next(this);
  }
  routerLinkInput = signal(null, ...ngDevMode ? [{
    debugName: "routerLinkInput"
  }] : []);
  set routerLink(commandsOrUrlTree) {
    if (commandsOrUrlTree == null) {
      this.routerLinkInput.set(null);
      this.setTabIndexIfNotOnNativeEl(null);
    } else {
      if (isUrlTree(commandsOrUrlTree)) {
        this.routerLinkInput.set(commandsOrUrlTree);
      } else {
        this.routerLinkInput.set(Array.isArray(commandsOrUrlTree) ? commandsOrUrlTree : [commandsOrUrlTree]);
      }
      this.setTabIndexIfNotOnNativeEl("0");
    }
  }
  onClick(button, ctrlKey, shiftKey, altKey, metaKey) {
    const urlTree = this._urlTree();
    if (urlTree === null) {
      return true;
    }
    if (this.isAnchorElement) {
      if (button !== 0 || ctrlKey || shiftKey || altKey || metaKey) {
        return true;
      }
      if (typeof this.target === "string" && this.target != "_self") {
        return true;
      }
    }
    const extras = {
      skipLocationChange: this.skipLocationChange,
      replaceUrl: this.replaceUrl,
      state: this.state,
      info: this.info
    };
    this.router.navigateByUrl(urlTree, extras)?.catch((e) => {
      this.applicationErrorHandler(e);
    });
    return !this.isAnchorElement;
  }
  ngOnDestroy() {
  }
  applyAttributeValue(attrName, attrValue) {
    const renderer = this.renderer;
    const nativeElement = this.el.nativeElement;
    if (attrValue !== null) {
      renderer.setAttribute(nativeElement, attrName, attrValue);
    } else {
      renderer.removeAttribute(nativeElement, attrName);
    }
  }
  _urlTree = computed(() => {
    this.reactiveRouterState.path();
    if (this._preserveFragment()) {
      this.reactiveRouterState.fragment();
    }
    const shouldTrackParams = (handling) => handling === "preserve" || handling === "merge";
    if (shouldTrackParams(this._queryParamsHandling()) || shouldTrackParams(this.options?.defaultQueryParamsHandling)) {
      this.reactiveRouterState.queryParams();
    }
    const routerLinkInput = this.routerLinkInput();
    if (routerLinkInput === null || !this.router.createUrlTree) {
      return null;
    } else if (isUrlTree(routerLinkInput)) {
      return routerLinkInput;
    }
    return this.router.createUrlTree(routerLinkInput, {
      relativeTo: this._relativeTo() !== void 0 ? this._relativeTo() : this.route,
      queryParams: this._queryParams(),
      fragment: this._fragment(),
      queryParamsHandling: this._queryParamsHandling(),
      preserveFragment: this._preserveFragment()
    });
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "_urlTree"
  } : {}), {
    equal: (a, b) => this.computeHref(a) === this.computeHref(b)
  }));
  get urlTree() {
    return untracked(this._urlTree);
  }
  computeHref(urlTree) {
    return urlTree !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(urlTree)) ?? "" : null;
  }
  static \u0275fac = function RouterLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLink)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LocationStrategy));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLink,
    selectors: [["", "routerLink", ""]],
    hostVars: 2,
    hostBindings: function RouterLink_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function RouterLink_click_HostBindingHandler($event) {
          return ctx.onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("href", ctx.reactiveHref(), \u0275\u0275sanitizeUrlOrResourceUrl)("target", ctx._target());
      }
    },
    inputs: {
      target: "target",
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      state: "state",
      info: "info",
      relativeTo: "relativeTo",
      preserveFragment: [2, "preserveFragment", "preserveFragment", booleanAttribute],
      skipLocationChange: [2, "skipLocationChange", "skipLocationChange", booleanAttribute],
      replaceUrl: [2, "replaceUrl", "replaceUrl", booleanAttribute],
      routerLink: "routerLink"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLink, [{
    type: Directive,
    args: [{
      selector: "[routerLink]",
      host: {
        "[attr.href]": "reactiveHref()",
        "[attr.target]": "_target()"
      }
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    info: [{
      type: Input
    }],
    relativeTo: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    skipLocationChange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    replaceUrl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    routerLink: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.shiftKey", "$event.altKey", "$event.metaKey"]]
    }]
  });
})();
var RouterLinkActive = class _RouterLinkActive {
  router;
  element;
  renderer;
  cdr;
  links;
  classes = [];
  routerEventsSubscription;
  linkInputChangesSubscription;
  _isActive = false;
  get isActive() {
    return this._isActive;
  }
  routerLinkActiveOptions = {
    exact: false
  };
  ariaCurrentWhenActive;
  isActiveChange = new EventEmitter();
  link = inject(RouterLink, {
    optional: true
  });
  constructor(router, element, renderer, cdr) {
    this.router = router;
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
    this.routerEventsSubscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.update();
      }
    });
  }
  ngAfterContentInit() {
    of(this.links.changes, of(null)).pipe(mergeAll()).subscribe((_) => {
      this.update();
      this.subscribeToEachLinkOnChanges();
    });
  }
  subscribeToEachLinkOnChanges() {
    this.linkInputChangesSubscription?.unsubscribe();
    const allLinkChanges = [...this.links.toArray(), this.link].filter((link) => !!link).map((link) => link.onChanges);
    this.linkInputChangesSubscription = from(allLinkChanges).pipe(mergeAll()).subscribe((link) => {
      if (this._isActive !== this.isLinkActive(this.router)(link)) {
        this.update();
      }
    });
  }
  set routerLinkActive(data) {
    const classes = Array.isArray(data) ? data : data.split(" ");
    this.classes = classes.filter((c) => !!c);
  }
  ngOnChanges(changes) {
    this.update();
  }
  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
    this.linkInputChangesSubscription?.unsubscribe();
  }
  update() {
    if (!this.links || !this.router.navigated) return;
    queueMicrotask(() => {
      const hasActiveLinks = this.hasActiveLinks();
      this.classes.forEach((c) => {
        if (hasActiveLinks) {
          this.renderer.addClass(this.element.nativeElement, c);
        } else {
          this.renderer.removeClass(this.element.nativeElement, c);
        }
      });
      if (hasActiveLinks && this.ariaCurrentWhenActive !== void 0) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString());
      } else {
        this.renderer.removeAttribute(this.element.nativeElement, "aria-current");
      }
      if (this._isActive !== hasActiveLinks) {
        this._isActive = hasActiveLinks;
        this.cdr.markForCheck();
        this.isActiveChange.emit(hasActiveLinks);
      }
    });
  }
  isLinkActive(router) {
    const options = isActiveMatchOptions(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact ?? false ? __spreadValues({}, exactMatchOptions) : __spreadValues({}, subsetMatchOptions);
    return (link) => {
      const urlTree = link.urlTree;
      return urlTree ? untracked(isActive(urlTree, router, options)) : false;
    };
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.link && isActiveCheckFn(this.link) || this.links.some(isActiveCheckFn);
  }
  static \u0275fac = function RouterLinkActive_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkActive)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLinkActive,
    selectors: [["", "routerLinkActive", ""]],
    contentQueries: function RouterLinkActive_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, RouterLink, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.links = _t);
      }
    },
    inputs: {
      routerLinkActiveOptions: "routerLinkActiveOptions",
      ariaCurrentWhenActive: "ariaCurrentWhenActive",
      routerLinkActive: "routerLinkActive"
    },
    outputs: {
      isActiveChange: "isActiveChange"
    },
    exportAs: ["routerLinkActive"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkActive, [{
    type: Directive,
    args: [{
      selector: "[routerLinkActive]",
      exportAs: "routerLinkActive"
    }]
  }], () => [{
    type: Router
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], {
    links: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }],
    routerLinkActiveOptions: [{
      type: Input
    }],
    ariaCurrentWhenActive: [{
      type: Input
    }],
    isActiveChange: [{
      type: Output
    }],
    routerLinkActive: [{
      type: Input
    }]
  });
})();
function isActiveMatchOptions(options) {
  const o = options;
  return !!(o.paths || o.matrixParams || o.queryParams || o.fragment);
}
var PreloadingStrategy = class {
};
var PreloadAllModules = class _PreloadAllModules {
  preload(route, fn) {
    return fn().pipe(catchError(() => of(null)));
  }
  static \u0275fac = function PreloadAllModules_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreloadAllModules)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PreloadAllModules,
    factory: _PreloadAllModules.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadAllModules, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NoPreloading = class _NoPreloading {
  preload(route, fn) {
    return of(null);
  }
  static \u0275fac = function NoPreloading_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoPreloading)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoPreloading,
    factory: _NoPreloading.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoPreloading, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RouterPreloader = class _RouterPreloader {
  router;
  injector;
  preloadingStrategy;
  loader;
  subscription;
  constructor(router, injector, preloadingStrategy, loader) {
    this.router = router;
    this.injector = injector;
    this.preloadingStrategy = preloadingStrategy;
    this.loader = loader;
  }
  setUpPreloading() {
    this.subscription = this.router.events.pipe(filter((e) => e instanceof NavigationEnd), concatMap(() => this.preload())).subscribe(() => {
    });
  }
  preload() {
    return this.processRoutes(this.injector, this.router.config);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  processRoutes(injector, routes2) {
    const res = [];
    for (const route of routes2) {
      if (route.providers && !route._injector) {
        route._injector = createEnvironmentInjector(route.providers, injector, typeof ngDevMode === "undefined" || ngDevMode ? `Route: ${route.path}` : "");
      }
      const injectorForCurrentRoute = route._injector ?? injector;
      if (route._loadedNgModuleFactory && !route._loadedInjector) {
        route._loadedInjector = route._loadedNgModuleFactory.create(injectorForCurrentRoute).injector;
      }
      const injectorForChildren = route._loadedInjector ?? injectorForCurrentRoute;
      if (route.loadChildren && !route._loadedRoutes && route.canLoad === void 0 || route.loadComponent && !route._loadedComponent) {
        res.push(this.preloadConfig(injectorForCurrentRoute, route));
      }
      if (route.children || route._loadedRoutes) {
        res.push(this.processRoutes(injectorForChildren, route.children ?? route._loadedRoutes));
      }
    }
    return from(res).pipe(mergeAll());
  }
  preloadConfig(injector, route) {
    return this.preloadingStrategy.preload(route, () => {
      if (injector.destroyed) {
        return of(null);
      }
      let loadedChildren$;
      if (route.loadChildren && route.canLoad === void 0) {
        loadedChildren$ = from(this.loader.loadChildren(injector, route));
      } else {
        loadedChildren$ = of(null);
      }
      const recursiveLoadChildren$ = loadedChildren$.pipe(mergeMap((config) => {
        if (config === null) {
          return of(void 0);
        }
        route._loadedRoutes = config.routes;
        route._loadedInjector = config.injector;
        route._loadedNgModuleFactory = config.factory;
        return this.processRoutes(config.injector ?? injector, config.routes);
      }));
      if (route.loadComponent && !route._loadedComponent) {
        const loadComponent$ = this.loader.loadComponent(injector, route);
        return from([recursiveLoadChildren$, loadComponent$]).pipe(mergeAll());
      } else {
        return recursiveLoadChildren$;
      }
    });
  }
  static \u0275fac = function RouterPreloader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterPreloader)(\u0275\u0275inject(Router), \u0275\u0275inject(EnvironmentInjector), \u0275\u0275inject(PreloadingStrategy), \u0275\u0275inject(RouterConfigLoader));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterPreloader,
    factory: _RouterPreloader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterPreloader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: EnvironmentInjector
  }, {
    type: PreloadingStrategy
  }, {
    type: RouterConfigLoader
  }], null);
})();
var ROUTER_SCROLLER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "Router Scroller" : "");
var RouterScroller = class _RouterScroller {
  options;
  routerEventsSubscription;
  scrollEventsSubscription;
  lastId = 0;
  lastSource = IMPERATIVE_NAVIGATION;
  restoredId = 0;
  store = {};
  urlSerializer = inject(UrlSerializer);
  zone = inject(NgZone);
  viewportScroller = inject(ViewportScroller);
  transitions = inject(NavigationTransitions);
  constructor(options) {
    this.options = options;
    this.options.scrollPositionRestoration ||= "disabled";
    this.options.anchorScrolling ||= "disabled";
  }
  init() {
    if (this.options.scrollPositionRestoration !== "disabled") {
      this.viewportScroller.setHistoryScrollRestoration("manual");
    }
    this.routerEventsSubscription = this.createScrollEvents();
    this.scrollEventsSubscription = this.consumeScrollEvents();
  }
  createScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.store[this.lastId] = this.viewportScroller.getScrollPosition();
        this.lastSource = e.navigationTrigger;
        this.restoredId = e.restoredState ? e.restoredState.navigationId : 0;
      } else if (e instanceof NavigationEnd) {
        this.lastId = e.id;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment);
      } else if (e instanceof NavigationSkipped && e.code === NavigationSkippedCode.IgnoredSameUrlNavigation) {
        this.lastSource = void 0;
        this.restoredId = 0;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment);
      }
    });
  }
  consumeScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (!(e instanceof Scroll) || e.scrollBehavior === "manual") return;
      const instantScroll = {
        behavior: "instant"
      };
      if (e.position) {
        if (this.options.scrollPositionRestoration === "top") {
          this.viewportScroller.scrollToPosition([0, 0], instantScroll);
        } else if (this.options.scrollPositionRestoration === "enabled") {
          this.viewportScroller.scrollToPosition(e.position, instantScroll);
        }
      } else {
        if (e.anchor && this.options.anchorScrolling === "enabled") {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else if (this.options.scrollPositionRestoration !== "disabled") {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }
  scheduleScrollEvent(routerEvent, anchor) {
    const scroll = untracked(this.transitions.currentNavigation)?.extras.scroll;
    this.zone.runOutsideAngular(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve);
        if (typeof requestAnimationFrame !== "undefined") {
          requestAnimationFrame(resolve);
        }
      });
      this.zone.run(() => {
        this.transitions.events.next(new Scroll(routerEvent, this.lastSource === "popstate" ? this.store[this.restoredId] : null, anchor, scroll));
      });
    });
  }
  ngOnDestroy() {
    this.routerEventsSubscription?.unsubscribe();
    this.scrollEventsSubscription?.unsubscribe();
  }
  static \u0275fac = function RouterScroller_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterScroller,
    factory: _RouterScroller.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterScroller, [{
    type: Injectable
  }], () => [{
    type: void 0
  }], null);
})();
function getLoadedRoutes(route) {
  return route._loadedRoutes;
}
function getRouterInstance(injector) {
  return injector.get(Router, null, {
    optional: true
  });
}
function navigateByUrl(router, url) {
  if (!(router instanceof Router)) {
    throw new Error("The provided router is not an Angular Router.");
  }
  return router.navigateByUrl(url);
}
var NavigationStateManager = class _NavigationStateManager extends StateManager {
  injector = inject(EnvironmentInjector);
  navigation = inject(PlatformNavigation);
  inMemoryScrollingEnabled = inject(ROUTER_SCROLLER, {
    optional: true
  }) !== null;
  base = new URL(inject(PlatformLocation).href).origin;
  appRootURL = new URL(this.location.prepareExternalUrl?.("/") ?? "/", this.base).href;
  precommitHandlerSupported = inject(PRECOMMIT_HANDLER_SUPPORTED);
  activeHistoryEntry = this.navigation.currentEntry;
  currentNavigation = {};
  nonRouterCurrentEntryChangeSubject = new Subject();
  nonRouterEntryChangeListener;
  get registered() {
    return this.nonRouterEntryChangeListener !== void 0 && !this.nonRouterEntryChangeListener.closed;
  }
  constructor() {
    super();
    const navigateListener = (event) => {
      this.handleNavigate(event);
    };
    this.navigation.addEventListener("navigate", navigateListener);
    inject(DestroyRef).onDestroy(() => this.navigation.removeEventListener("navigate", navigateListener));
  }
  registerNonRouterCurrentEntryChangeListener(listener) {
    this.activeHistoryEntry = this.navigation.currentEntry;
    this.nonRouterEntryChangeListener = this.nonRouterCurrentEntryChangeSubject.subscribe(({
      path,
      state
    }) => {
      listener(path, state, "popstate", !this.precommitHandlerSupported ? {
        replaceUrl: true
      } : {});
    });
    return this.nonRouterEntryChangeListener;
  }
  async handleRouterEvent(e, transition) {
    this.currentNavigation = __spreadProps(__spreadValues({}, this.currentNavigation), {
      routerTransition: transition
    });
    if (e instanceof NavigationStart) {
      this.updateStateMemento();
      if (this.precommitHandlerSupported) {
        this.maybeCreateNavigationForTransition(transition);
      }
    } else if (e instanceof NavigationSkipped) {
      this.finishNavigation();
      this.commitTransition(transition);
    } else if (e instanceof BeforeRoutesRecognized) {
      transition.routesRecognizeHandler.deferredHandle = new Promise(async (resolve) => {
        if (this.urlUpdateStrategy === "eager") {
          try {
            this.maybeCreateNavigationForTransition(transition);
            await this.currentNavigation.commitUrl?.();
          } catch {
            return;
          }
        }
        resolve();
      });
    } else if (e instanceof BeforeActivateRoutes) {
      transition.beforeActivateHandler.deferredHandle = new Promise(async (resolve) => {
        if (this.urlUpdateStrategy === "deferred") {
          try {
            this.maybeCreateNavigationForTransition(transition);
            await this.currentNavigation.commitUrl?.();
          } catch {
            return;
          }
        }
        this.commitTransition(transition);
        resolve();
      });
    } else if (e instanceof NavigationCancel || e instanceof NavigationError) {
      const redirectingBeforeUrlCommit = e instanceof NavigationCancel && e.code === NavigationCancellationCode.Redirect && !!this.currentNavigation.commitUrl;
      if (redirectingBeforeUrlCommit) {
        return;
      }
      void this.cancel(transition, e);
    } else if (e instanceof NavigationEnd) {
      const {
        resolveHandler,
        removeAbortListener
      } = this.currentNavigation;
      this.currentNavigation = {};
      removeAbortListener?.();
      this.activeHistoryEntry = this.navigation.currentEntry;
      afterNextRender({
        read: () => resolveHandler?.()
      }, {
        injector: this.injector
      });
    }
  }
  maybeCreateNavigationForTransition(transition) {
    const {
      navigationEvent,
      commitUrl
    } = this.currentNavigation;
    if (commitUrl || navigationEvent && navigationEvent.navigationType === "traverse" && this.eventAndRouterDestinationsMatch(navigationEvent, transition)) {
      return;
    }
    this.currentNavigation.removeAbortListener?.();
    const path = this.createBrowserPath(transition);
    this.navigate(path, transition);
  }
  navigate(internalPath, transition) {
    const path = transition.extras.skipLocationChange ? this.navigation.currentEntry.url : this.location.prepareExternalUrl(internalPath);
    const state = __spreadValues(__spreadValues({}, transition.extras.state), this.generateNgRouterState(transition));
    const info = {
      \u0275routerInfo: {
        intercept: true
      }
    };
    if (!this.navigation.transition && this.currentNavigation.navigationEvent) {
      transition.extras.replaceUrl = false;
    }
    const history = this.location.isCurrentPathEqualTo(path) || transition.extras.replaceUrl || transition.extras.skipLocationChange ? "replace" : "push";
    handleResultRejections(this.navigation.navigate(path, {
      state,
      history,
      info
    }));
  }
  finishNavigation() {
    this.currentNavigation.commitUrl?.();
    this.currentNavigation?.resolveHandler?.();
    this.currentNavigation = {};
  }
  async cancel(transition, cause) {
    this.currentNavigation.rejectNavigateEvent?.();
    const clearedState = {};
    this.currentNavigation = clearedState;
    if (isRedirectingEvent(cause)) {
      return;
    }
    const isTraversalReset = this.canceledNavigationResolution === "computed" && this.navigation.currentEntry.key !== this.activeHistoryEntry.key;
    this.resetInternalState(transition.finalUrl, isTraversalReset);
    if (this.navigation.currentEntry.id === this.activeHistoryEntry.id) {
      return;
    }
    if (cause instanceof NavigationCancel && cause.code === NavigationCancellationCode.Aborted) {
      await Promise.resolve();
      if (this.currentNavigation !== clearedState) {
        return;
      }
    }
    if (isTraversalReset) {
      handleResultRejections(this.navigation.traverseTo(this.activeHistoryEntry.key, {
        info: {
          \u0275routerInfo: {
            intercept: false
          }
        }
      }));
    } else {
      const internalPath = this.urlSerializer.serialize(this.getCurrentUrlTree());
      const pathOrUrl = this.location.prepareExternalUrl(internalPath);
      handleResultRejections(this.navigation.navigate(pathOrUrl, {
        state: this.activeHistoryEntry.getState(),
        history: "replace",
        info: {
          \u0275routerInfo: {
            intercept: false
          }
        }
      }));
    }
  }
  resetInternalState(finalUrl, traversalReset) {
    this.routerState = this.stateMemento.routerState;
    this.currentUrlTree = this.stateMemento.currentUrlTree;
    this.rawUrlTree = traversalReset ? this.stateMemento.rawUrlTree : this.urlHandlingStrategy.merge(this.currentUrlTree, finalUrl ?? this.rawUrlTree);
  }
  handleNavigate(event) {
    if (!event.canIntercept || event.navigationType === "reload") {
      return;
    }
    const routerInfo = event?.info?.\u0275routerInfo;
    if (routerInfo && !routerInfo.intercept) {
      return;
    }
    const isTriggeredByRouterTransition = !!routerInfo;
    if (!isTriggeredByRouterTransition) {
      this.currentNavigation.routerTransition?.abort();
      if (!this.registered) {
        this.finishNavigation();
        return;
      }
    }
    this.currentNavigation = __spreadValues({}, this.currentNavigation);
    this.currentNavigation.navigationEvent = event;
    const abortHandler = () => {
      this.currentNavigation.routerTransition?.abort();
    };
    event.signal.addEventListener("abort", abortHandler);
    this.currentNavigation.removeAbortListener = () => event.signal.removeEventListener("abort", abortHandler);
    let scroll = this.inMemoryScrollingEnabled ? "manual" : this.currentNavigation.routerTransition?.extras.scroll ?? "after-transition";
    const interceptOptions = {
      scroll
    };
    const {
      promise: handlerPromise,
      resolve: resolveHandler,
      reject: rejectHandler
    } = promiseWithResolvers();
    const {
      promise: precommitHandlerPromise,
      resolve: resolvePrecommitHandler,
      reject: rejectPrecommitHandler
    } = promiseWithResolvers();
    this.currentNavigation.rejectNavigateEvent = () => {
      event.signal.removeEventListener("abort", abortHandler);
      rejectPrecommitHandler();
      rejectHandler();
    };
    this.currentNavigation.resolveHandler = () => {
      this.currentNavigation.removeAbortListener?.();
      resolveHandler();
    };
    handlerPromise.catch(() => {
    });
    precommitHandlerPromise.catch(() => {
    });
    interceptOptions.handler = () => handlerPromise;
    if (this.deferredCommitSupported(event)) {
      const redirect = new Promise((resolve) => {
        interceptOptions.precommitHandler = (controller) => {
          if (this.navigation.transition?.navigationType === "traverse") {
            resolve(() => {
            });
          } else {
            resolve(controller.redirect.bind(controller));
          }
          return precommitHandlerPromise;
        };
      });
      this.currentNavigation.commitUrl = async () => {
        this.currentNavigation.commitUrl = void 0;
        const transition = this.currentNavigation.routerTransition;
        if (transition && !transition.extras.skipLocationChange) {
          const internalPath = this.createBrowserPath(transition);
          const history = this.location.isCurrentPathEqualTo(internalPath) || !!transition.extras.replaceUrl ? "replace" : "push";
          const state = __spreadValues(__spreadValues({}, transition.extras.state), this.generateNgRouterState(transition));
          const pathOrUrl = this.location.prepareExternalUrl(internalPath);
          (await redirect)(pathOrUrl, {
            state,
            history
          });
        }
        resolvePrecommitHandler();
        return await this.navigation.transition?.committed;
      };
    }
    event.intercept(interceptOptions);
    if (!isTriggeredByRouterTransition) {
      this.handleNavigateEventTriggeredOutsideRouterAPIs(event);
    }
  }
  handleNavigateEventTriggeredOutsideRouterAPIs(event) {
    const path = event.destination.url.substring(this.appRootURL.length - 1);
    const state = event.destination.getState();
    this.nonRouterCurrentEntryChangeSubject.next({
      path,
      state
    });
  }
  eventAndRouterDestinationsMatch(navigateEvent, transition) {
    const internalPath = this.createBrowserPath(transition);
    const eventDestination = new URL(navigateEvent.destination.url);
    const routerDestination = this.location.prepareExternalUrl(internalPath);
    return new URL(routerDestination, eventDestination.origin).href === eventDestination.href;
  }
  generateNgRouterState(transition) {
    return __spreadProps(__spreadValues({}, this.routerUrlState(transition)), {
      navigationId: transition.id
    });
  }
  deferredCommitSupported(event) {
    return this.precommitHandlerSupported && event.cancelable;
  }
  static \u0275fac = function NavigationStateManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationStateManager)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavigationStateManager,
    factory: _NavigationStateManager.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function handleResultRejections(result) {
  result.finished?.catch(() => {
  });
  result.committed?.catch(() => {
  });
  return result;
}
function provideRouter(routes2, ...features) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    publishExternalGlobalUtil("\u0275getLoadedRoutes", getLoadedRoutes);
    publishExternalGlobalUtil("\u0275getRouterInstance", getRouterInstance);
    publishExternalGlobalUtil("\u0275navigateByUrl", navigateByUrl);
  }
  return makeEnvironmentProviders([{
    provide: ROUTES,
    multi: true,
    useValue: routes2
  }, typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : [], {
    provide: ActivatedRoute,
    useFactory: rootRoute
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: getBootstrapListener
  }, features.map((feature) => feature.\u0275providers)]);
}
function rootRoute() {
  return inject(Router).routerState.root;
}
function routerFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
var ROUTER_IS_PROVIDED = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "Router is provided" : "", {
  factory: () => false
});
function withInMemoryScrolling(options = {}) {
  const providers = [{
    provide: ROUTER_SCROLLER,
    useFactory: () => new RouterScroller(options)
  }];
  return routerFeature(4, providers);
}
function getBootstrapListener() {
  const injector = inject(Injector);
  return (bootstrappedComponentRef) => {
    const ref = injector.get(ApplicationRef);
    if (bootstrappedComponentRef !== ref.components[0]) {
      return;
    }
    const router = injector.get(Router);
    const bootstrapDone = injector.get(BOOTSTRAP_DONE);
    if (injector.get(INITIAL_NAVIGATION) === 1) {
      router.initialNavigation();
    }
    injector.get(ROUTER_PRELOADER, null, {
      optional: true
    })?.setUpPreloading();
    injector.get(ROUTER_SCROLLER, null, {
      optional: true
    })?.init();
    router.resetRootComponentType(ref.componentTypes[0]);
    if (!bootstrapDone.closed) {
      bootstrapDone.next();
      bootstrapDone.complete();
      bootstrapDone.unsubscribe();
    }
  };
}
var BOOTSTRAP_DONE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "bootstrap done indicator" : "", {
  factory: () => {
    return new Subject();
  }
});
var INITIAL_NAVIGATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "initial navigation" : "", {
  factory: () => 1
});
function withEnabledBlockingInitialNavigation() {
  const providers = [{
    provide: IS_ENABLED_BLOCKING_INITIAL_NAVIGATION,
    useValue: true
  }, {
    provide: INITIAL_NAVIGATION,
    useValue: 0
  }, provideAppInitializer(() => {
    const injector = inject(Injector);
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve());
    return locationInitialized.then(() => {
      return new Promise((resolve) => {
        const router = injector.get(Router);
        const bootstrapDone = injector.get(BOOTSTRAP_DONE);
        afterNextNavigation(router, () => {
          resolve(true);
        });
        injector.get(NavigationTransitions).afterPreactivation = () => {
          resolve(true);
          return bootstrapDone.closed ? of(void 0) : bootstrapDone;
        };
        router.initialNavigation();
      });
    });
  })];
  return routerFeature(2, providers);
}
function withDisabledInitialNavigation() {
  const providers = [provideAppInitializer(() => {
    inject(Router).setUpLocationChangeListener();
  }), {
    provide: INITIAL_NAVIGATION,
    useValue: 2
  }];
  return routerFeature(3, providers);
}
function withDebugTracing() {
  let providers = [];
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    providers = [{
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const router = inject(Router);
        return () => router.events.subscribe((e) => {
          console.group?.(`Router Event: ${e.constructor.name}`);
          console.log(stringifyEvent(e));
          console.log(e);
          console.groupEnd?.();
        });
      }
    }];
  } else {
    providers = [];
  }
  return routerFeature(1, providers);
}
var ROUTER_PRELOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router preloader" : "");
function withPreloading(preloadingStrategy) {
  const providers = [{
    provide: ROUTER_PRELOADER,
    useExisting: RouterPreloader
  }, {
    provide: PreloadingStrategy,
    useExisting: preloadingStrategy
  }];
  return routerFeature(0, providers);
}
function withComponentInputBinding() {
  const providers = [RoutedComponentInputBinder, {
    provide: INPUT_BINDER,
    useExisting: RoutedComponentInputBinder
  }];
  return routerFeature(8, providers);
}
function withViewTransitions(options) {
  performanceMarkFeature("NgRouterViewTransitions");
  const providers = [{
    provide: CREATE_VIEW_TRANSITION,
    useValue: createViewTransition
  }, {
    provide: VIEW_TRANSITION_OPTIONS,
    useValue: __spreadValues({
      skipNextTransition: !!options?.skipInitialTransition
    }, options)
  }];
  return routerFeature(9, providers);
}
var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent];
var ROUTER_FORROOT_GUARD = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router duplicate forRoot guard" : "");
var ROUTER_PROVIDERS = [Location, {
  provide: UrlSerializer,
  useClass: DefaultUrlSerializer
}, Router, ChildrenOutletContexts, {
  provide: ActivatedRoute,
  useFactory: rootRoute
}, RouterConfigLoader, typeof ngDevMode === "undefined" || ngDevMode ? {
  provide: ROUTER_IS_PROVIDED,
  useValue: true
} : []];
var RouterModule = class _RouterModule {
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      inject(ROUTER_FORROOT_GUARD, {
        optional: true
      });
    }
  }
  static forRoot(routes2, config) {
    return {
      ngModule: _RouterModule,
      providers: [ROUTER_PROVIDERS, typeof ngDevMode === "undefined" || ngDevMode ? config?.enableTracing ? withDebugTracing().\u0275providers : [] : [], {
        provide: ROUTES,
        multi: true,
        useValue: routes2
      }, typeof ngDevMode === "undefined" || ngDevMode ? {
        provide: ROUTER_FORROOT_GUARD,
        useFactory: provideForRootGuard
      } : [], config?.errorHandler ? {
        provide: NAVIGATION_ERROR_HANDLER,
        useValue: config.errorHandler
      } : [], {
        provide: ROUTER_CONFIGURATION,
        useValue: config ? config : {}
      }, config?.useHash ? provideHashLocationStrategy() : providePathLocationStrategy(), provideRouterScroller(), config?.preloadingStrategy ? withPreloading(config.preloadingStrategy).\u0275providers : [], config?.initialNavigation ? provideInitialNavigation(config) : [], config?.bindToComponentInputs ? withComponentInputBinding().\u0275providers : [], config?.enableViewTransitions ? withViewTransitions().\u0275providers : [], provideRouterInitializer()]
    };
  }
  static forChild(routes2) {
    return {
      ngModule: _RouterModule,
      providers: [{
        provide: ROUTES,
        multi: true,
        useValue: routes2
      }]
    };
  }
  static \u0275fac = function RouterModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RouterModule,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent],
    exports: [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterModule, [{
    type: NgModule,
    args: [{
      imports: ROUTER_DIRECTIVES,
      exports: ROUTER_DIRECTIVES
    }]
  }], () => [], null);
})();
function provideRouterScroller() {
  return {
    provide: ROUTER_SCROLLER,
    useFactory: () => {
      const viewportScroller = inject(ViewportScroller);
      const config = inject(ROUTER_CONFIGURATION);
      if (config.scrollOffset) {
        viewportScroller.setOffset(config.scrollOffset);
      }
      return new RouterScroller(config);
    }
  };
}
function provideHashLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  };
}
function providePathLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  };
}
function provideForRootGuard() {
  const router = inject(Router, {
    optional: true,
    skipSelf: true
  });
  if (router) {
    throw new RuntimeError(4007, `The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.`);
  }
  return "guarded";
}
function provideInitialNavigation(config) {
  return [config.initialNavigation === "disabled" ? withDisabledInitialNavigation().\u0275providers : [], config.initialNavigation === "enabledBlocking" ? withEnabledBlockingInitialNavigation().\u0275providers : []];
}
var ROUTER_INITIALIZER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "Router Initializer" : "");
function provideRouterInitializer() {
  return [{
    provide: ROUTER_INITIALIZER,
    useFactory: getBootstrapListener
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useExisting: ROUTER_INITIALIZER
  }];
}

// node_modules/@angular/router/fesm2022/router.mjs
/**
 * @license Angular v21.2.10
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */

// src/app/shared/blur-text/blur-text.ts
function BlurText_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\xA0");
    \u0275\u0275elementContainerEnd();
  }
}
function BlurText_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BlurText_ng_container_1_ng_container_3_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const segment_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(segment_r1 === " " ? "\xA0" : segment_r1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.animateBy === "words" && i_r2 < ctx_r2.spans.length - 1);
  }
}
var BlurText = class _BlurText {
  el;
  text = "";
  delay = 200;
  animateBy = "words";
  direction = "top";
  stepDuration = 0.35;
  easing = "ease-out";
  customClass = "";
  animationDone = new EventEmitter();
  spans = [];
  observer;
  platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  inView = signal(false, ...ngDevMode ? [{ debugName: "inView" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    this.spans = this.animateBy === "words" ? this.text.split(" ") : this.text.split("");
  }
  ngAfterViewInit() {
    if (!this.isBrowser)
      return;
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.inView.set(true);
        this.observer?.disconnect();
        this.animateSpans();
      }
    }, { threshold: 0.1 });
    this.observer.observe(this.el.nativeElement);
  }
  ngOnDestroy() {
    if (this.isBrowser)
      this.observer?.disconnect();
  }
  getTransformValues() {
    switch (this.direction) {
      case "top":
        return { start: "translateY(-50px)", mid: "translateY(5px)", end: "translateY(0)" };
      case "bottom":
        return { start: "translateY(50px)", mid: "translateY(-5px)", end: "translateY(0)" };
      case "left":
        return { start: "translateX(-50px)", mid: "translateX(5px)", end: "translateX(0)" };
      case "right":
        return { start: "translateX(50px)", mid: "translateX(-5px)", end: "translateX(0)" };
      default:
        return { start: "translateY(-50px)", mid: "translateY(5px)", end: "translateY(0)" };
    }
  }
  animateSpans() {
    if (!this.isBrowser)
      return;
    const children = this.el.nativeElement.querySelectorAll("span");
    const transforms = this.getTransformValues();
    children.forEach((span, index) => {
      const delayMs = index * this.delay;
      const animation = span.animate([
        { filter: "blur(10px)", opacity: 0, transform: transforms.start },
        { filter: "blur(5px)", opacity: 0.5, transform: transforms.mid },
        { filter: "blur(0px)", opacity: 1, transform: transforms.end }
      ], {
        duration: this.stepDuration * 1e3 * 2,
        easing: this.easing,
        delay: delayMs,
        fill: "forwards"
      });
      if (index === children.length - 1) {
        animation.onfinish = () => this.animationDone.emit();
      }
    });
  }
  static \u0275fac = function BlurText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlurText)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlurText, selectors: [["app-blur-text"]], inputs: { text: "text", delay: "delay", animateBy: "animateBy", direction: "direction", stepDuration: "stepDuration", easing: "easing", customClass: "customClass" }, outputs: { animationDone: "animationDone" }, decls: 2, vars: 2, consts: [[1, "blur-text", 3, "ngClass"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function BlurText_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p", 0);
      \u0275\u0275template(1, BlurText_ng_container_1_Template, 4, 2, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.customClass);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.spans);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n.blur-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #ffffff;\n  font-family: var(--font-secondary);\n}\n.blur-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  will-change:\n    transform,\n    filter,\n    opacity;\n  opacity: 0;\n}\n.blur-text.accent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n/*# sourceMappingURL=blur-text.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlurText, [{
    type: Component,
    args: [{ selector: "app-blur-text", standalone: true, imports: [CommonModule], template: `<p class="blur-text" [ngClass]="customClass">\r
    <ng-container *ngFor="let segment of spans; let i = index">\r
        <span>{{ segment === ' ' ? '\\u00A0' : segment }}</span>\r
        <ng-container *ngIf="animateBy === 'words' && i < spans.length - 1">&nbsp;</ng-container>\r
    </ng-container>\r
</p>`, styles: ["/* src/app/shared/blur-text/blur-text.scss */\n.blur-text {\n  font-weight: 600;\n  color: #ffffff;\n  font-family: var(--font-secondary);\n}\n.blur-text span {\n  display: inline-block;\n  will-change:\n    transform,\n    filter,\n    opacity;\n  opacity: 0;\n}\n.blur-text.accent span {\n  color: var(--color-accent);\n}\n/*# sourceMappingURL=blur-text.css.map */\n"] }]
  }], () => [{ type: ElementRef }], { text: [{
    type: Input
  }], delay: [{
    type: Input
  }], animateBy: [{
    type: Input
  }], direction: [{
    type: Input
  }], stepDuration: [{
    type: Input
  }], easing: [{
    type: Input
  }], customClass: [{
    type: Input
  }], animationDone: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlurText, { className: "BlurText", filePath: "src/app/shared/blur-text/blur-text.ts", lineNumber: 23 });
})();

// src/app/shared/reveal/reveal.ts
var _c0 = ["*"];
gsapWithCSS.registerPlugin(ScrollTrigger);
var RevealComponent = class _RevealComponent {
  // Layout
  display = "block";
  // Movement (AnimatedContent)
  distance = 100;
  direction = "vertical";
  reverse = false;
  scale = 1;
  // Fade (FadeContent)
  blur = false;
  initialOpacity = 0;
  animateOpacity = true;
  // Timing
  duration = 0.8;
  ease = "power3.out";
  delay = 0;
  // Scroll
  threshold = 0.1;
  scroller = null;
  // CSS selector string
  // Disappear
  disappearAfter = 0;
  disappearDuration = 0.5;
  disappearEase = "power3.in";
  // Events
  onComplete = output();
  onDisappearanceComplete = output();
  el = inject(ElementRef);
  platformId = inject(PLATFORM_ID);
  st;
  tl;
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId))
      return;
    const el = this.el.nativeElement;
    const scrollerTarget = this.scroller ? document.querySelector(this.scroller) ?? window : document.getElementById("snap-main-container") ?? window;
    const axis = this.direction === "horizontal" ? "x" : "y";
    const offset = this.reverse ? -this.distance : this.distance;
    const startPct = (1 - this.threshold) * 100;
    gsapWithCSS.set(el, {
      [axis]: this.distance !== 0 ? offset : 0,
      scale: this.scale !== 1 ? this.scale : 1,
      opacity: this.animateOpacity ? this.initialOpacity : 1,
      filter: this.blur ? "blur(10px)" : "blur(0px)",
      visibility: "hidden",
      willChange: "opacity, filter, transform"
    });
    this.tl = gsapWithCSS.timeline({
      paused: true,
      delay: this.delay,
      onComplete: () => {
        this.onComplete.emit();
        if (this.disappearAfter > 0) {
          gsapWithCSS.to(el, {
            [axis]: this.reverse ? this.distance : -this.distance,
            scale: this.scale !== 1 ? this.scale : 0.8,
            opacity: this.animateOpacity ? this.initialOpacity : 0,
            filter: this.blur ? "blur(10px)" : "blur(0px)",
            delay: this.disappearAfter,
            duration: this.disappearDuration,
            ease: this.disappearEase,
            onComplete: () => this.onDisappearanceComplete.emit()
          });
        }
      }
    });
    this.tl.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: this.duration,
      ease: this.ease,
      visibility: "visible"
    });
    this.st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget,
      start: `top ${startPct}%`,
      once: true,
      onEnter: () => this.tl?.play()
    });
  }
  ngOnDestroy() {
    this.st?.kill();
    this.tl?.kill();
    if (this.el?.nativeElement) {
      gsapWithCSS.killTweensOf(this.el.nativeElement);
    }
  }
  static \u0275fac = function RevealComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RevealComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevealComponent, selectors: [["app-reveal"]], hostVars: 4, hostBindings: function RevealComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("visibility", "hidden")("display", ctx.display);
    }
  }, inputs: { display: "display", distance: "distance", direction: "direction", reverse: "reverse", scale: "scale", blur: "blur", initialOpacity: "initialOpacity", animateOpacity: "animateOpacity", duration: "duration", ease: "ease", delay: "delay", threshold: "threshold", scroller: "scroller", disappearAfter: "disappearAfter", disappearDuration: "disappearDuration", disappearEase: "disappearEase" }, outputs: { onComplete: "onComplete", onDisappearanceComplete: "onDisappearanceComplete" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function RevealComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevealComponent, [{
    type: Component,
    args: [{ selector: "app-reveal", standalone: true, template: `<ng-content />`, host: {
      "[style.visibility]": '"hidden"',
      "[style.display]": "display"
    } }]
  }], null, { display: [{
    type: Input
  }], distance: [{
    type: Input
  }], direction: [{
    type: Input
  }], reverse: [{
    type: Input
  }], scale: [{
    type: Input
  }], blur: [{
    type: Input
  }], initialOpacity: [{
    type: Input
  }], animateOpacity: [{
    type: Input
  }], duration: [{
    type: Input
  }], ease: [{
    type: Input
  }], delay: [{
    type: Input
  }], threshold: [{
    type: Input
  }], scroller: [{
    type: Input
  }], disappearAfter: [{
    type: Input
  }], disappearDuration: [{
    type: Input
  }], disappearEase: [{
    type: Input
  }], onComplete: [{ type: Output, args: ["onComplete"] }], onDisappearanceComplete: [{ type: Output, args: ["onDisappearanceComplete"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevealComponent, { className: "RevealComponent", filePath: "src/app/shared/reveal/reveal.ts", lineNumber: 27 });
})();

// src/app/shared/hero/hero.ts
var _c02 = ["videoRef"];
var Hero = class _Hero {
  videoRef;
  isBrowser;
  ticking = false;
  constructor(platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngAfterViewInit() {
    if (!this.isBrowser)
      return;
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }
  ngOnDestroy() {
    if (!this.isBrowser)
      return;
    window.removeEventListener("scroll", this.handleScroll);
  }
  // Parallax
  handleScroll = () => {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.updateParallax();
        this.ticking = false;
      });
      this.ticking = true;
    }
  };
  updateParallax() {
    const scrollY = window.scrollY;
    const speed = 0.35;
    const offset = scrollY * speed;
    if (this.videoRef) {
      this.videoRef.nativeElement.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
    }
  }
  static \u0275fac = function Hero_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Hero)(\u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero, selectors: [["app-hero"]], viewQuery: function Hero_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoRef = _t.first);
    }
  }, decls: 29, vars: 18, consts: [["heroSection", ""], ["videoRef", ""], ["tiltEl", ""], [1, "hero"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", 1, "hero-video"], ["src", "/assets/videos/fd-hero-vid.mp4"], [1, "overlay"], [1, "hero-deco", "hero-deco-1", 3, "blur", "delay"], ["src", "/assets/decos/video-deco-4.png", "alt", "decorative element", 1, "tilt"], [1, "hero-content"], [1, "hero-blur-wrapper"], ["direction", "horizontal", 3, "blur", "delay", "reverse"], ["src", "/assets/decos/deco-bracket.png", "alt", "left brackets", 1, "bracket", "bracket-left", "tilt"], [1, "text-wrapper"], [1, "headline"], ["text", "INTELLIGENT MACHINES", 1, "blur-text", 3, "animateBy", "direction", "delay", "stepDuration"], ["text", "ARE NOW", "customClass", "accent", 1, "blur-text", 3, "animateBy", "direction", "delay", "stepDuration"], [3, "blur", "delay", "threshold"], [1, "subtitle", "text"], ["direction", "horizontal", 3, "blur", "delay"], ["src", "/assets/decos/deco-bracket.png", "alt", "right brackets", 1, "bracket", "bracket-right", "tilt"], [1, "hero-scroll"], [1, "hero-scroll__label"], [1, "hero-scroll__mouse"], [1, "hero-scroll__wheel"]], template: function Hero_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 3, 0)(2, "video", 4, 1);
      \u0275\u0275element(4, "source", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "div", 6);
      \u0275\u0275elementStart(6, "app-reveal", 7);
      \u0275\u0275element(7, "img", 8, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "app-reveal", 11);
      \u0275\u0275element(12, "img", 12, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 13)(15, "div", 14);
      \u0275\u0275element(16, "app-blur-text", 15)(17, "app-blur-text", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "app-reveal", 17)(19, "span", 18);
      \u0275\u0275text(20, "Engineering next-generation IUVs with superior precision, and agility.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "app-reveal", 19);
      \u0275\u0275element(22, "img", 20, 2);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 21)(25, "span", 22);
      \u0275\u0275text(26, "SCROLL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 23);
      \u0275\u0275element(28, "div", 24);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("blur", true)("delay", 2);
      \u0275\u0275advance(5);
      \u0275\u0275property("blur", true)("delay", 2)("reverse", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("animateBy", "letters")("direction", "bottom")("delay", 100)("stepDuration", 0.65);
      \u0275\u0275advance();
      \u0275\u0275property("animateBy", "letters")("direction", "bottom")("delay", 300)("stepDuration", 0.55);
      \u0275\u0275advance();
      \u0275\u0275property("blur", true)("delay", 1.5)("threshold", 0.2);
      \u0275\u0275advance(3);
      \u0275\u0275property("blur", true)("delay", 2);
    }
  }, dependencies: [BlurText, RevealComponent], styles: ["\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: white;\n}\n.hero-video[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 120%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  object-fit: cover;\n  will-change: transform;\n  z-index: 0;\n}\n.hero[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  z-index: 1;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  padding: 0 2rem;\n}\n.hero-deco[_ngcontent-%COMP%] {\n  position: absolute;\n  width: clamp(80px, 12vw, 250px);\n  height: auto;\n  object-fit: contain;\n  pointer-events: none;\n  z-index: 5;\n}\n.hero-deco-1[_ngcontent-%COMP%] {\n  bottom: 2%;\n  right: 2%;\n}\n.hero-blur-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: nowrap;\n}\n.hero-blur-wrapper[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 50px;\n}\n.hero-blur-wrapper[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.hero-blur-wrapper[_ngcontent-%COMP%]   app-blur-text[_ngcontent-%COMP%] {\n  font-size: clamp(1.7rem, 5vw, 6rem);\n  line-height: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hero-blur-wrapper[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(1rem, 3vw, 1.5rem);\n  opacity: 0.8;\n  margin-top: 1rem;\n}\n.hero-blur-wrapper[_ngcontent-%COMP%]   .bracket[_ngcontent-%COMP%] {\n  height: clamp(100px, 20vw, 300px);\n  width: auto;\n  object-fit: contain;\n  transform: translateY(-75px);\n  animation: _ngcontent-%COMP%_floatBracketLeft 6s ease-in-out infinite;\n  will-change: transform;\n}\n.hero-blur-wrapper[_ngcontent-%COMP%]   .bracket-right[_ngcontent-%COMP%] {\n  transform: translateY(-75px) scaleX(-1);\n  animation: _ngcontent-%COMP%_floatBracketRight 6s ease-in-out infinite;\n}\n.hero-deco[_ngcontent-%COMP%], \n.bracket[_ngcontent-%COMP%] {\n  animation: floatIdle 6s ease-in-out infinite;\n  will-change: transform;\n}\n@keyframes _ngcontent-%COMP%_floatBracketLeft {\n  0% {\n    transform: translateY(-75px);\n  }\n  50% {\n    transform: translateY(-83px);\n  }\n  100% {\n    transform: translateY(-75px);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatBracketRight {\n  0% {\n    transform: translateY(-75px) scaleX(-1);\n  }\n  50% {\n    transform: translateY(-83px) scaleX(-1);\n  }\n  100% {\n    transform: translateY(-75px) scaleX(-1);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatDeco {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n.hero-scroll[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  animation: _ngcontent-%COMP%_fadeInScroll 1s ease 3.5s both;\n}\n.hero-scroll__label[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.6rem;\n  letter-spacing: 0.25em;\n  color: rgba(255, 255, 255, 0.45);\n}\n.hero-scroll__mouse[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 34px;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n}\n.hero-scroll__wheel[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 6px;\n  background: var(--color-accent);\n  border-radius: 2px;\n  animation: _ngcontent-%COMP%_scrollWheel 1.6s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_scrollWheel {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  80% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInScroll {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n/*# sourceMappingURL=hero.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero, [{
    type: Component,
    args: [{ selector: "app-hero", imports: [BlurText, RevealComponent], template: `<section #heroSection class="hero">\r
    <video #videoRef class="hero-video" autoplay muted loop playsinline>\r
        <source src="/assets/videos/fd-hero-vid.mp4" />\r
    </video>\r
\r
    <div class="overlay"></div>\r
    \r
    <app-reveal [blur]="true" [delay]="2"  class="hero-deco hero-deco-1">\r
        <img \r
            #tiltEl\r
            class="tilt"\r
            src="/assets/decos/video-deco-4.png" \r
            alt="decorative element">\r
    </app-reveal>\r
\r
    <div class="hero-content">\r
        <div class="hero-blur-wrapper">\r
            <app-reveal\r
                [blur]="true"\r
                [delay]="2"\r
                direction="horizontal"\r
                [reverse]="true"\r
            >\r
                <img \r
                    #tiltEl\r
                    src="/assets/decos/deco-bracket.png" \r
                    alt="left brackets" \r
                    class="bracket bracket-left tilt">\r
            </app-reveal>\r
            <div class="text-wrapper">\r
                <div class="headline">\r
                    <app-blur-text text="INTELLIGENT MACHINES" [animateBy]="'letters'" [direction]="'bottom'" [delay]="100"\r
                        [stepDuration]="0.65" class="blur-text"></app-blur-text>\r
    \r
                    <app-blur-text text="ARE NOW" [animateBy]="'letters'" [direction]="'bottom'" [delay]="300"\r
                        [stepDuration]="0.55" customClass="accent" class="blur-text"></app-blur-text>\r
                </div>\r
\r
                <app-reveal [blur]="true" [delay]="1.5" [threshold]="0.2">\r
                    <span class="subtitle text">Engineering next-generation IUVs with superior precision, and agility.</span>\r
                </app-reveal>\r
            </div>\r
            <app-reveal [blur]="true" [delay]="2" direction="horizontal" >\r
                <img\r
                    #tiltEl \r
                    src="/assets/decos/deco-bracket.png" \r
                    alt="right brackets" \r
                    class="bracket bracket-right tilt">\r
            </app-reveal>\r
        </div>\r
    </div>\r
\r
    <div class="hero-scroll">\r
        <span class="hero-scroll__label">SCROLL</span>\r
        <div class="hero-scroll__mouse">\r
            <div class="hero-scroll__wheel"></div>\r
        </div>\r
    </div>\r
</section>`, styles: ["/* src/app/shared/hero/hero.scss */\n.hero {\n  position: relative;\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: white;\n}\n.hero-video {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 120%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  object-fit: cover;\n  will-change: transform;\n  z-index: 0;\n}\n.hero .overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  z-index: 1;\n}\n.hero-content {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  padding: 0 2rem;\n}\n.hero-deco {\n  position: absolute;\n  width: clamp(80px, 12vw, 250px);\n  height: auto;\n  object-fit: contain;\n  pointer-events: none;\n  z-index: 5;\n}\n.hero-deco-1 {\n  bottom: 2%;\n  right: 2%;\n}\n.hero-blur-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: nowrap;\n}\n.hero-blur-wrapper .text-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 50px;\n}\n.hero-blur-wrapper .text-wrapper .headline {\n  margin-bottom: 60px;\n}\n.hero-blur-wrapper app-blur-text {\n  font-size: clamp(1.7rem, 5vw, 6rem);\n  line-height: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hero-blur-wrapper .subtitle {\n  font-size: clamp(1rem, 3vw, 1.5rem);\n  opacity: 0.8;\n  margin-top: 1rem;\n}\n.hero-blur-wrapper .bracket {\n  height: clamp(100px, 20vw, 300px);\n  width: auto;\n  object-fit: contain;\n  transform: translateY(-75px);\n  animation: floatBracketLeft 6s ease-in-out infinite;\n  will-change: transform;\n}\n.hero-blur-wrapper .bracket-right {\n  transform: translateY(-75px) scaleX(-1);\n  animation: floatBracketRight 6s ease-in-out infinite;\n}\n.hero-deco,\n.bracket {\n  animation: floatIdle 6s ease-in-out infinite;\n  will-change: transform;\n}\n@keyframes floatBracketLeft {\n  0% {\n    transform: translateY(-75px);\n  }\n  50% {\n    transform: translateY(-83px);\n  }\n  100% {\n    transform: translateY(-75px);\n  }\n}\n@keyframes floatBracketRight {\n  0% {\n    transform: translateY(-75px) scaleX(-1);\n  }\n  50% {\n    transform: translateY(-83px) scaleX(-1);\n  }\n  100% {\n    transform: translateY(-75px) scaleX(-1);\n  }\n}\n@keyframes floatDeco {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n.hero-scroll {\n  position: absolute;\n  bottom: 2.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  animation: fadeInScroll 1s ease 3.5s both;\n}\n.hero-scroll__label {\n  font-family: var(--font-secondary);\n  font-size: 0.6rem;\n  letter-spacing: 0.25em;\n  color: rgba(255, 255, 255, 0.45);\n}\n.hero-scroll__mouse {\n  width: 22px;\n  height: 34px;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n}\n.hero-scroll__wheel {\n  width: 3px;\n  height: 6px;\n  background: var(--color-accent);\n  border-radius: 2px;\n  animation: scrollWheel 1.6s ease-in-out infinite;\n}\n@keyframes scrollWheel {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  80% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 0;\n  }\n}\n@keyframes fadeInScroll {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n/*# sourceMappingURL=hero.css.map */\n"] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { videoRef: [{
    type: ViewChild,
    args: ["videoRef"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero, { className: "Hero", filePath: "src/app/shared/hero/hero.ts", lineNumber: 12 });
})();

// node_modules/lucide-angular/fesm2020/lucide-angular.mjs
var _c03 = ["*"];
var ArrowRight = [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}], ["path", {
  d: "m12 5 7 7-7 7",
  key: "xquz4c"
}]];
var CircleCheckBig = [["path", {
  d: "M21.801 10A10 10 0 1 1 17 3.335",
  key: "yps3ct"
}], ["path", {
  d: "m9 11 3 3L22 4",
  key: "1pflzl"
}]];
var CircleX = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m15 9-6 6",
  key: "1uzhvr"
}], ["path", {
  d: "m9 9 6 6",
  key: "z0biqf"
}]];
var Cpu = [["path", {
  d: "M12 20v2",
  key: "1lh1kg"
}], ["path", {
  d: "M12 2v2",
  key: "tus03m"
}], ["path", {
  d: "M17 20v2",
  key: "1rnc9c"
}], ["path", {
  d: "M17 2v2",
  key: "11trls"
}], ["path", {
  d: "M2 12h2",
  key: "1t8f8n"
}], ["path", {
  d: "M2 17h2",
  key: "7oei6x"
}], ["path", {
  d: "M2 7h2",
  key: "asdhe0"
}], ["path", {
  d: "M20 12h2",
  key: "1q8mjw"
}], ["path", {
  d: "M20 17h2",
  key: "1fpfkl"
}], ["path", {
  d: "M20 7h2",
  key: "1o8tra"
}], ["path", {
  d: "M7 20v2",
  key: "4gnj0m"
}], ["path", {
  d: "M7 2v2",
  key: "1i4yhu"
}], ["rect", {
  x: "4",
  y: "4",
  width: "16",
  height: "16",
  rx: "2",
  key: "1vbyd7"
}], ["rect", {
  x: "8",
  y: "8",
  width: "8",
  height: "8",
  rx: "1",
  key: "z9xiuo"
}]];
var Info = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M12 16v-4",
  key: "1dtifu"
}], ["path", {
  d: "M12 8h.01",
  key: "e9boi3"
}]];
var Mail = [["path", {
  d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
  key: "132q7q"
}], ["rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2",
  key: "izxlao"
}]];
var MapPin = [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
  key: "1r0f0z"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}]];
var PenLine = [["path", {
  d: "M13 21h8",
  key: "1jsn5i"
}], ["path", {
  d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
  key: "1a8usu"
}]];
var Phone = [["path", {
  d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
  key: "9njp5v"
}]];
var Send = [["path", {
  d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
  key: "1ffxy3"
}], ["path", {
  d: "m21.854 2.147-10.94 10.939",
  key: "12cjpa"
}]];
var Shield = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}]];
var Target = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "6",
  key: "1vlfrh"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}]];
var User = [["path", {
  d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
  key: "975kel"
}], ["circle", {
  cx: "12",
  cy: "7",
  r: "4",
  key: "17ys0d"
}]];
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var LUCIDE_ICONS = new InjectionToken("LucideIcons", {
  factory: () => new LucideIconProvider({})
});
var LucideIconProvider = class {
  constructor(icons) {
    this.icons = icons;
  }
  getIcon(name) {
    return this.hasIcon(name) ? this.icons[name] : null;
  }
  hasIcon(name) {
    return typeof this.icons === "object" && name in this.icons;
  }
};
var LucideIconConfig = class {
  constructor() {
    this.color = defaultAttributes.stroke;
    this.size = defaultAttributes.width;
    this.strokeWidth = defaultAttributes["stroke-width"];
    this.absoluteStrokeWidth = false;
  }
};
LucideIconConfig.\u0275fac = function LucideIconConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LucideIconConfig)();
};
LucideIconConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: LucideIconConfig,
  factory: LucideIconConfig.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LucideIconConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
function formatFixed(number, decimals = 3) {
  return parseFloat(number.toFixed(decimals)).toString(10);
}
var LucideAngularComponent = class {
  constructor(elem, renderer, changeDetector, iconProviders, iconConfig) {
    this.elem = elem;
    this.renderer = renderer;
    this.changeDetector = changeDetector;
    this.iconProviders = iconProviders;
    this.iconConfig = iconConfig;
    this.absoluteStrokeWidth = false;
    this.defaultSize = defaultAttributes.height;
  }
  get size() {
    return this._size ?? this.iconConfig.size;
  }
  set size(value) {
    if (value) {
      this._size = this.parseNumber(value);
    } else {
      delete this._size;
    }
  }
  get strokeWidth() {
    return this._strokeWidth ?? this.iconConfig.strokeWidth;
  }
  set strokeWidth(value) {
    if (value) {
      this._strokeWidth = this.parseNumber(value);
    } else {
      delete this._strokeWidth;
    }
  }
  ngOnChanges(changes) {
    if (changes.name || changes.img || changes.color || changes.size || changes.absoluteStrokeWidth || changes.strokeWidth || changes.class) {
      this.color = this.color ?? this.iconConfig.color;
      this.size = this.parseNumber(this.size ?? this.iconConfig.size);
      this.strokeWidth = this.parseNumber(this.strokeWidth ?? this.iconConfig.strokeWidth);
      this.absoluteStrokeWidth = this.absoluteStrokeWidth ?? this.iconConfig.absoluteStrokeWidth;
      const nameOrIcon = this.img ?? this.name;
      const restAttributes = this.getRestAttributes();
      if (!hasA11yProp(restAttributes)) {
        this.renderer.setAttribute(this.elem.nativeElement, "aria-hidden", "true");
      }
      if (typeof nameOrIcon === "string") {
        const icoOfName = this.getIcon(this.toPascalCase(nameOrIcon));
        if (icoOfName) {
          this.replaceElement(icoOfName);
        } else {
          throw new Error(`The "${nameOrIcon}" icon has not been provided by any available icon providers.`);
        }
      } else if (Array.isArray(nameOrIcon)) {
        this.replaceElement(nameOrIcon);
      } else {
        throw new Error(`No icon name or image has been provided.`);
      }
    }
    this.changeDetector.markForCheck();
  }
  replaceElement(img) {
    const childElements = this.elem.nativeElement.childNodes;
    const attributes = __spreadProps(__spreadValues({}, defaultAttributes), {
      width: this.size,
      height: this.size,
      stroke: this.color ?? this.iconConfig.color,
      "stroke-width": this.absoluteStrokeWidth ? formatFixed(this.strokeWidth / (this.size / this.defaultSize)) : this.strokeWidth.toString(10)
    });
    const icoElement = this.createElement(["svg", attributes, img]);
    icoElement.classList.add("lucide");
    if (typeof this.name === "string") {
      icoElement.classList.add(`lucide-${this.name.replace("_", "-")}`);
    }
    if (this.class) {
      icoElement.classList.add(...this.class.split(/ /).map((a) => a.trim()).filter((a) => a.length > 0));
    }
    for (const child of childElements) {
      this.renderer.removeChild(this.elem.nativeElement, child);
    }
    this.renderer.appendChild(this.elem.nativeElement, icoElement);
  }
  getRestAttributes() {
    const restAttributeMap = this.elem.nativeElement.attributes;
    const restAttributes = Object.fromEntries(Array.from(restAttributeMap).map((item) => [item.name, item.value]));
    return restAttributes;
  }
  toPascalCase(str) {
    return str.replace(/(\w)([a-z0-9]*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
  }
  parseNumber(value) {
    if (typeof value === "string") {
      const parsedValue = parseInt(value, 10);
      if (isNaN(parsedValue)) {
        throw new Error(`${value} is not numeric.`);
      }
      return parsedValue;
    }
    return value;
  }
  getIcon(name) {
    for (const iconProvider of Array.isArray(this.iconProviders) ? this.iconProviders : [this.iconProviders]) {
      if (iconProvider.hasIcon(name)) {
        return iconProvider.getIcon(name);
      }
    }
    return null;
  }
  createElement([tag, attrs, children = []]) {
    const element = this.renderer.createElement(tag, "http://www.w3.org/2000/svg");
    Object.keys(attrs).forEach((name) => {
      const attrValue = typeof attrs[name] === "string" ? attrs[name] : attrs[name].toString(10);
      this.renderer.setAttribute(element, name, attrValue);
    });
    if (children.length) {
      children.forEach((child) => {
        const childElement = this.createElement(child);
        this.renderer.appendChild(element, childElement);
      });
    }
    return element;
  }
};
LucideAngularComponent.\u0275fac = function LucideAngularComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LucideAngularComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(LUCIDE_ICONS), \u0275\u0275directiveInject(LucideIconConfig));
};
LucideAngularComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: LucideAngularComponent,
  selectors: [["lucide-angular"], ["lucide-icon"], ["i-lucide"], ["span-lucide"]],
  inputs: {
    class: "class",
    name: "name",
    img: "img",
    color: "color",
    absoluteStrokeWidth: "absoluteStrokeWidth",
    size: "size",
    strokeWidth: "strokeWidth"
  },
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function LucideAngularComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LucideAngularComponent, [{
    type: Component,
    args: [{
      selector: "lucide-angular, lucide-icon, i-lucide, span-lucide",
      template: "<ng-content></ng-content>"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Renderer2,
      decorators: [{
        type: Inject,
        args: [Renderer2]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LUCIDE_ICONS]
      }]
    }, {
      type: LucideIconConfig,
      decorators: [{
        type: Inject,
        args: [LucideIconConfig]
      }]
    }];
  }, {
    class: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    img: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    absoluteStrokeWidth: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }]
  });
})();
var Icons = class {
  constructor(icons) {
    this.icons = icons;
  }
};
var legacyIconProviderFactory = (icons) => {
  return new LucideIconProvider(icons ?? {});
};
var LucideAngularModule = class _LucideAngularModule {
  static pick(icons) {
    return {
      ngModule: _LucideAngularModule,
      providers: [{
        provide: LUCIDE_ICONS,
        multi: true,
        useValue: new LucideIconProvider(icons)
      }, {
        provide: LUCIDE_ICONS,
        multi: true,
        useFactory: legacyIconProviderFactory,
        deps: [[new Optional(), Icons]]
      }]
    };
  }
};
LucideAngularModule.\u0275fac = function LucideAngularModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LucideAngularModule)();
};
LucideAngularModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: LucideAngularModule,
  declarations: [LucideAngularComponent],
  exports: [LucideAngularComponent]
});
LucideAngularModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LucideAngularModule, [{
    type: NgModule,
    args: [{
      declarations: [LucideAngularComponent],
      imports: [],
      exports: [LucideAngularComponent]
    }]
  }], null, null);
})();

// src/app/shared/who-we-are/who-we-are.ts
var _c04 = ["whoSection"];
var _c1 = ["whoImageRef"];
var WhoWeAre = class _WhoWeAre {
  platformId;
  whoSection;
  whoImageGroup;
  Target = Target;
  Shield = Shield;
  Cpu = Cpu;
  ArrowRight = ArrowRight;
  constructor(platformId) {
    this.platformId = platformId;
  }
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId))
      return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active", "in-view");
        }
      });
    }, { threshold: 0 });
    observer.observe(this.whoSection.nativeElement);
    if (this.whoImageGroup?.nativeElement) {
      observer.observe(this.whoImageGroup.nativeElement);
    }
  }
  static \u0275fac = function WhoWeAre_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhoWeAre)(\u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhoWeAre, selectors: [["app-who-we-are"]], viewQuery: function WhoWeAre_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5)(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.whoSection = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.whoImageGroup = _t.first);
    }
  }, decls: 29, vars: 4, consts: [["whoSection", ""], ["whoImageRef", ""], [1, "who"], ["src", "/assets/decos/video-deco-back-1.png", "alt", "Background decoration", 1, "who__bg"], [1, "who__container"], [1, "who__group", "who__group--left"], [1, "who__top"], [3, "blur"], [1, "who__label", "text-lg"], [1, "who__title"], [1, "who__bottom"], [3, "blur", "threshold"], [1, "who__description", "text"], [1, "btn_wrapper"], ["href", "/who-we-are", 1, "who__btn"], [1, "who__group", "who__group--right"], ["src", "/assets/images/ril_photo4_ext.jpg", "alt", ""], [1, "who__overlay"], [1, "who__caption"]], template: function WhoWeAre_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 2, 0);
      \u0275\u0275element(2, "img", 3);
      \u0275\u0275elementStart(3, "app-reveal")(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "app-reveal", 7)(8, "span", 8);
      \u0275\u0275text(9, "WHO WE ARE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h2", 9);
      \u0275\u0275text(11, "Feather");
      \u0275\u0275element(12, "br");
      \u0275\u0275text(13, "Dynamics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 10)(15, "app-reveal", 11)(16, "p", 12);
      \u0275\u0275text(17, " Feather Dynamics has been innovating unmanned vehicle technology for nearly three decades, serving both commercial and defense applications. With a long-standing history of advancing autonomous systems, the company has consistently contributed to shaping the future of next-generation autonomous vehicles through design excellence, technical innovation, and mission-driven development. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "app-reveal", 7)(19, "div", 13)(20, "a", 14)(21, "span");
      \u0275\u0275text(22, "Learn More");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(23, "div", 15, 1);
      \u0275\u0275element(25, "img", 16)(26, "div", 17);
      \u0275\u0275elementStart(27, "div", 18);
      \u0275\u0275text(28, " 2004 - First Electric Powered UAV ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(8);
      \u0275\u0275property("blur", true)("threshold", 0.2);
      \u0275\u0275advance(3);
      \u0275\u0275property("blur", true);
    }
  }, dependencies: [LucideAngularModule, RevealComponent], styles: ["\n.who[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 4rem 1.5rem;\n  overflow: visible;\n  z-index: 2;\n}\n.who__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  pointer-events: none;\n  z-index: 0;\n}\n.who__container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 1580px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  height: 100%;\n}\n@media (min-width: 1024px) {\n  .who__container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: stretch;\n    gap: 7rem;\n  }\n}\n.who__group--left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  flex: 0 0 auto;\n}\n@media (min-width: 1024px) {\n  .who__group--left[_ngcontent-%COMP%] {\n    width: 38%;\n  }\n}\n.who__label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-secondary);\n  letter-spacing: 0.25em;\n  color: var(--color-black);\n  margin-bottom: 1rem;\n}\n.who__title[_ngcontent-%COMP%] {\n  font-size: clamp(2.4rem, 5vw, 4rem);\n  line-height: 1.05;\n  font-weight: 300;\n  color: var(--color-black);\n  letter-spacing: -0.02em;\n  margin: 0;\n}\n.who__bottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  align-self: flex-end;\n}\n.who__description[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  color: var(--color-black);\n  font-weight: 300;\n  margin: 0;\n  max-width: 480px;\n}\n.who[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.who__btn[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-left: auto;\n  gap: 0.6rem;\n  padding: 0.75rem 1.75rem;\n  border: 1px solid rgba(36, 36, 36, 0.2);\n  background: transparent;\n  color: var(--color-black);\n  font-family: var(--font-header);\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition:\n    background 0.25s,\n    border-color 0.25s,\n    color 0.25s;\n}\n.who__btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-accent);\n  border-color: var(--color-accent);\n  color: var(--color-white);\n}\n.who__group--right[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  min-height: 300px;\n  opacity: 0;\n  transform: translateX(48px);\n  transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.who__group--right.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n@media (min-width: 1024px) {\n  .who__group--right[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: -10rem;\n    width: 52%;\n    z-index: 2;\n  }\n}\n.who__group--right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n.who__group--right[_ngcontent-%COMP%] {\n}\n.who__group--right[_ngcontent-%COMP%]   .who__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.65) 0%,\n      rgba(0, 0, 0, 0.35) 30%,\n      rgba(0, 0, 0, 0) 60%);\n  opacity: 1;\n  z-index: 1;\n}\n.who__group--right[_ngcontent-%COMP%] {\n}\n.who__group--right[_ngcontent-%COMP%]   .who__caption[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 2rem;\n  bottom: 2rem;\n  color: white;\n  font-family: var(--font-secondary);\n  font-size: 1.3rem;\n  letter-spacing: 0.05em;\n  font-weight: 300;\n  opacity: 1;\n  transform: translateY(0);\n  z-index: 2;\n}\n/*# sourceMappingURL=who-we-are.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhoWeAre, [{
    type: Component,
    args: [{ selector: "app-who-we-are", standalone: true, imports: [LucideAngularModule, RevealComponent], template: '<section class="who" #whoSection>\r\n    <img class="who__bg" src="/assets/decos/video-deco-back-1.png" alt="Background decoration" />\r\n    <app-reveal>\r\n\r\n        <div class="who__container">\r\n            \r\n            <div class="who__group who__group--left">\r\n                <div class="who__top">\r\n                <app-reveal [blur]="true">\r\n                    <span class="who__label text-lg">WHO WE ARE</span>\r\n                    <h2 class="who__title">Feather<br />Dynamics</h2>\r\n                </app-reveal>\r\n            </div>\r\n            \r\n            <div class="who__bottom">\r\n                <app-reveal [blur]="true" [threshold]="0.2">\r\n                    <p class="who__description text">\r\n                        Feather Dynamics has been innovating unmanned vehicle technology for nearly three decades,\r\n                        serving both commercial and defense applications. With a long-standing history of advancing\r\n                        autonomous systems, the company has consistently contributed to shaping the future of\r\n                        next-generation autonomous vehicles through design excellence, technical innovation, and\r\n                        mission-driven development.\r\n                    </p>\r\n                </app-reveal>\r\n                <app-reveal [blur]="true">\r\n                    <div class="btn_wrapper">\r\n                        <a class="who__btn" href="/who-we-are">\r\n                            <span>Learn More</span>\r\n                        </a>\r\n                    </div>\r\n                </app-reveal>\r\n                \r\n            </div>\r\n        </div>\r\n        \r\n        <div class="who__group who__group--right" #whoImageRef>\r\n            <img src="/assets/images/ril_photo4_ext.jpg" alt="">\r\n\r\n            <div class="who__overlay"></div>\r\n\r\n            <div class="who__caption">\r\n                2004 - First Electric Powered UAV\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</app-reveal>\r\n</section>', styles: ["/* src/app/shared/who-we-are/who-we-are.scss */\n.who {\n  position: relative;\n  padding: 4rem 1.5rem;\n  overflow: visible;\n  z-index: 2;\n}\n.who__bg {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  pointer-events: none;\n  z-index: 0;\n}\n.who__container {\n  position: relative;\n  z-index: 1;\n  max-width: 1580px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  height: 100%;\n}\n@media (min-width: 1024px) {\n  .who__container {\n    flex-direction: row;\n    align-items: stretch;\n    gap: 7rem;\n  }\n}\n.who__group--left {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  flex: 0 0 auto;\n}\n@media (min-width: 1024px) {\n  .who__group--left {\n    width: 38%;\n  }\n}\n.who__label {\n  display: block;\n  font-family: var(--font-secondary);\n  letter-spacing: 0.25em;\n  color: var(--color-black);\n  margin-bottom: 1rem;\n}\n.who__title {\n  font-size: clamp(2.4rem, 5vw, 4rem);\n  line-height: 1.05;\n  font-weight: 300;\n  color: var(--color-black);\n  letter-spacing: -0.02em;\n  margin: 0;\n}\n.who__bottom {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  align-self: flex-end;\n}\n.who__description {\n  line-height: 1.8;\n  color: var(--color-black);\n  font-weight: 300;\n  margin: 0;\n  max-width: 480px;\n}\n.who .btn_wrapper {\n  display: flex;\n  justify-content: flex-end;\n}\n.who__btn {\n  align-items: center;\n  margin-left: auto;\n  gap: 0.6rem;\n  padding: 0.75rem 1.75rem;\n  border: 1px solid rgba(36, 36, 36, 0.2);\n  background: transparent;\n  color: var(--color-black);\n  font-family: var(--font-header);\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition:\n    background 0.25s,\n    border-color 0.25s,\n    color 0.25s;\n}\n.who__btn:hover {\n  background: var(--color-accent);\n  border-color: var(--color-accent);\n  color: var(--color-white);\n}\n.who__group--right {\n  flex: 1;\n  position: relative;\n  min-height: 300px;\n  opacity: 0;\n  transform: translateX(48px);\n  transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.who__group--right.in-view {\n  opacity: 1;\n  transform: translateX(0);\n}\n@media (min-width: 1024px) {\n  .who__group--right {\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: -10rem;\n    width: 52%;\n    z-index: 2;\n  }\n}\n.who__group--right img {\n  display: block;\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n.who__group--right {\n}\n.who__group--right .who__overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.65) 0%,\n      rgba(0, 0, 0, 0.35) 30%,\n      rgba(0, 0, 0, 0) 60%);\n  opacity: 1;\n  z-index: 1;\n}\n.who__group--right {\n}\n.who__group--right .who__caption {\n  position: absolute;\n  left: 2rem;\n  bottom: 2rem;\n  color: white;\n  font-family: var(--font-secondary);\n  font-size: 1.3rem;\n  letter-spacing: 0.05em;\n  font-weight: 300;\n  opacity: 1;\n  transform: translateY(0);\n  z-index: 2;\n}\n/*# sourceMappingURL=who-we-are.css.map */\n"] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { whoSection: [{
    type: ViewChild,
    args: ["whoSection"]
  }], whoImageGroup: [{
    type: ViewChild,
    args: ["whoImageRef"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhoWeAre, { className: "WhoWeAre", filePath: "src/app/shared/who-we-are/who-we-are.ts", lineNumber: 13 });
})();

// src/app/shared/what-we-do/what-we-do.ts
var _c05 = ["whatSection"];
function WhatWeDo_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-image", "url(" + item_r1.image + ")");
    \u0275\u0275classProp("active", i_r2 === ctx_r2.activeIndex());
  }
}
function WhatWeDo_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("mouseenter", function WhatWeDo_div_13_Template_div_mouseenter_0_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeIndex.set(i_r5));
    })("focus", function WhatWeDo_div_13_Template_div_focus_0_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeIndex.set(i_r5));
    });
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementStart(2, "div", 15)(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "span", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r6.number, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r6.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r6.number, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r6.title, " ");
  }
}
var WhatWeDo = class _WhatWeDo {
  platformId;
  whatSection;
  constructor(platformId) {
    this.platformId = platformId;
  }
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId))
      return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.2 });
    observer.observe(this.whatSection.nativeElement);
  }
  items = [
    {
      number: "01",
      title: "Defence & Security",
      image: "/assets/images/uavmodel.jpg"
    },
    {
      number: "02",
      title: "Transport & Mobility",
      image: "/assets/images/ril_photo1.jpg"
    },
    {
      number: "03",
      title: "Payloads & Integrated",
      image: "/assets/images/ril_p4.jpg"
    },
    {
      number: "04",
      title: "Research & Development",
      image: "/assets/images/4.jpg"
    }
  ];
  activeIndex = signal(0, ...ngDevMode ? [{ debugName: "activeIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function WhatWeDo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhatWeDo)(\u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhatWeDo, selectors: [["app-what-we-do"]], viewQuery: function WhatWeDo_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c05, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.whatSection = _t.first);
    }
  }, decls: 14, vars: 5, consts: [["whatSection", ""], [1, "what-wrapper"], [1, "what-header"], [3, "blur"], [1, "what-header__title"], [3, "blur", "threshold"], [1, "what-header__subtitle"], [1, "what"], ["class", "what__bg", 3, "background-image", "active", 4, "ngFor", "ngForOf"], [1, "what__overlay"], [1, "what__grid"], ["class", "what__card", 3, "mouseenter", "focus", 4, "ngFor", "ngForOf"], [1, "what__bg"], [1, "what__card", 3, "mouseenter", "focus"], [1, "what__hover-overlay"], [1, "what__base"], [1, "what__number"], [1, "what__title", "text"], [1, "what__hover"], [1, "what__title", "text-xl"]], template: function WhatWeDo_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1, 0)(2, "div", 2)(3, "app-reveal", 3)(4, "h2", 4);
      \u0275\u0275text(5, " WHAT WE DO ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "app-reveal", 5)(7, "p", 6);
      \u0275\u0275text(8, " Advanced Systems Engineered for Mission Success ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "section", 7);
      \u0275\u0275template(10, WhatWeDo_div_10_Template, 1, 4, "div", 8);
      \u0275\u0275element(11, "div", 9);
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275template(13, WhatWeDo_div_13_Template, 12, 4, "div", 11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("blur", true)("threshold", 0.2);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.items);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.items);
    }
  }, dependencies: [CommonModule, NgForOf, RevealComponent], styles: ["\n.what-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--color-black);\n  background-image: url(/assets/decos/aerial-deco-back-2.png);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  opacity: 0;\n  transform: translateY(80px);\n  transition: opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.what-wrapper.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.what-header[_ngcontent-%COMP%] {\n  padding: 80px 24px 40px;\n  text-align: center;\n  color: #ffffff;\n}\n.what-header__title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  letter-spacing: 2px;\n  margin-bottom: 12px;\n  font-weight: 400;\n  font-family: var(--font-secondary);\n}\n.what-header__subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  letter-spacing: 1px;\n  opacity: 0.7;\n  font-weight: 400;\n}\n.what[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 600px;\n  overflow: hidden;\n}\n.what__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n  z-index: 0;\n}\n.what__bg.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.what__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(5, 10, 18, 0.55);\n  z-index: 1;\n}\n.what__grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: 1fr;\n}\n.what__card[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 260px;\n  padding: 40px 24px;\n  cursor: pointer;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  overflow: hidden;\n  opacity: 0;\n  transform: translateY(60px);\n  transition: opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.what__card[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.what[_ngcontent-%COMP%] {\n}\n.what-wrapper.active[_ngcontent-%COMP%]   .what__card[_ngcontent-%COMP%]:nth-child(1) {\n  opacity: 1;\n  transform: translateY(0);\n  transition-delay: 0.2s;\n}\n.what-wrapper.active[_ngcontent-%COMP%]   .what__card[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 1;\n  transform: translateY(0);\n  transition-delay: 0.4s;\n}\n.what-wrapper.active[_ngcontent-%COMP%]   .what__card[_ngcontent-%COMP%]:nth-child(3) {\n  opacity: 1;\n  transform: translateY(0);\n  transition-delay: 0.6s;\n}\n.what-wrapper.active[_ngcontent-%COMP%]   .what__card[_ngcontent-%COMP%]:nth-child(4) {\n  opacity: 1;\n  transform: translateY(0);\n  transition-delay: 0.8s;\n}\n.what[_ngcontent-%COMP%] {\n}\n.what__hover-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 180, 255, 0);\n  transition: background 0.3s ease;\n  z-index: 1;\n}\n.what__card[_ngcontent-%COMP%]:hover   .what__hover-overlay[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--accent-secondary), transparent 40%);\n}\n.what__base[_ngcontent-%COMP%], \n.what__hover[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  padding: 40px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  z-index: 2;\n  color: #fff;\n  transition: opacity 0.3s ease;\n}\n.what__title[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n}\n.what__hover[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  opacity: 0;\n}\n.what__card[_ngcontent-%COMP%]:hover   .what__base[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.what__card[_ngcontent-%COMP%]:hover   .what__hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (min-width: 992px) {\n  .what-header[_ngcontent-%COMP%] {\n    padding: 160px 40px 60px;\n  }\n  .what-header__title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .what-header__subtitle[_ngcontent-%COMP%] {\n    font-size: var(--text);\n  }\n  .what__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  .what__card[_ngcontent-%COMP%] {\n    min-height: 600px;\n    border-bottom: none;\n    border-right: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  .what__card[_ngcontent-%COMP%]:last-child {\n    border-right: none;\n  }\n}\n/*# sourceMappingURL=what-we-do.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhatWeDo, [{
    type: Component,
    args: [{ selector: "app-what-we-do", imports: [CommonModule, RevealComponent], template: `<section class="what-wrapper" #whatSection>\r
\r
    <!-- Section Header -->\r
    <div class="what-header">\r
        <app-reveal [blur]="true">\r
            <h2 class="what-header__title">\r
                WHAT WE DO\r
            </h2>\r
        </app-reveal>\r
\r
        <app-reveal [blur]="true" [threshold]="0.2">\r
\r
            <p class="what-header__subtitle">\r
                Advanced Systems Engineered for Mission Success\r
            </p>\r
        </app-reveal>\r
    </div>\r
\r
    <!-- Interactive Section -->\r
    <section class="what">\r
        <div class="what__bg" *ngFor="let item of items; let i = index" [style.background-image]="'url(' + item.image + ')'"\r
            [class.active]="i === activeIndex()">\r
        </div>\r
\r
        <div class="what__overlay"></div>\r
\r
        \r
        <div class="what__grid">\r
                <div class="what__card" *ngFor="let item of items; let i = index" (mouseenter)="activeIndex.set(i)"\r
                    (focus)="activeIndex.set(i)">\r
\r
                    <div class="what__hover-overlay"></div>\r
\r
                    <!-- Base Layer -->\r
                    <div class="what__base">\r
                        <span class="what__number">\r
                            {{ item.number }}\r
                        </span>\r
\r
                        <h3 class="what__title text">\r
                            {{ item.title }}\r
                        </h3>\r
                    </div>\r
\r
                    <!-- Hover Layer -->\r
                    <div class="what__hover">\r
                        <span class="what__number">\r
                            {{ item.number }}\r
                        </span>\r
\r
                        <h3 class="what__title text-xl">\r
                            {{ item.title }}\r
                        </h3>\r
                    </div>\r
\r
                </div>\r
            </div>\r
    </section>\r
</section>`, styles: ["/* src/app/shared/what-we-do/what-we-do.scss */\n.what-wrapper {\n  width: 100%;\n  background: var(--color-black);\n  background-image: url(/assets/decos/aerial-deco-back-2.png);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  opacity: 0;\n  transform: translateY(80px);\n  transition: opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.what-wrapper.active {\n  opacity: 1;\n  transform: translateY(0);\n}\n.what-header {\n  padding: 80px 24px 40px;\n  text-align: center;\n  color: #ffffff;\n}\n.what-header__title {\n  font-size: 2rem;\n  letter-spacing: 2px;\n  margin-bottom: 12px;\n  font-weight: 400;\n  font-family: var(--font-secondary);\n}\n.what-header__subtitle {\n  font-size: 1rem;\n  letter-spacing: 1px;\n  opacity: 0.7;\n  font-weight: 400;\n}\n.what {\n  position: relative;\n  width: 100%;\n  min-height: 600px;\n  overflow: hidden;\n}\n.what__bg {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n  z-index: 0;\n}\n.what__bg.active {\n  opacity: 1;\n}\n.what__overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(5, 10, 18, 0.55);\n  z-index: 1;\n}\n.what__grid {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: 1fr;\n}\n.what__card {\n  position: relative;\n  min-height: 260px;\n  padding: 40px 24px;\n  cursor: pointer;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  overflow: hidden;\n  opacity: 0;\n  transform: translateY(60px);\n  transition: opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.what__card:last-child {\n  border-bottom: none;\n}\n.what {\n}\n.what-wrapper.active .what__card:nth-child(1) {\n  opacity: 1;\n  transform: translateY(0);\n  transition-delay: 0.2s;\n}\n.what-wrapper.active .what__card:nth-child(2) {\n  opacity: 1;\n  transform: translateY(0);\n  transition-delay: 0.4s;\n}\n.what-wrapper.active .what__card:nth-child(3) {\n  opacity: 1;\n  transform: translateY(0);\n  transition-delay: 0.6s;\n}\n.what-wrapper.active .what__card:nth-child(4) {\n  opacity: 1;\n  transform: translateY(0);\n  transition-delay: 0.8s;\n}\n.what {\n}\n.what__hover-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 180, 255, 0);\n  transition: background 0.3s ease;\n  z-index: 1;\n}\n.what__card:hover .what__hover-overlay {\n  background: color-mix(in srgb, var(--accent-secondary), transparent 40%);\n}\n.what__base,\n.what__hover {\n  position: absolute;\n  inset: 0;\n  padding: 40px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  z-index: 2;\n  color: #fff;\n  transition: opacity 0.3s ease;\n}\n.what__title {\n  font-family: var(--font-secondary);\n}\n.what__hover {\n  justify-content: flex-end;\n  opacity: 0;\n}\n.what__card:hover .what__base {\n  opacity: 0;\n}\n.what__card:hover .what__hover {\n  opacity: 1;\n}\n@media (min-width: 992px) {\n  .what-header {\n    padding: 160px 40px 60px;\n  }\n  .what-header__title {\n    font-size: 2.5rem;\n  }\n  .what-header__subtitle {\n    font-size: var(--text);\n  }\n  .what__grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  .what__card {\n    min-height: 600px;\n    border-bottom: none;\n    border-right: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  .what__card:last-child {\n    border-right: none;\n  }\n}\n/*# sourceMappingURL=what-we-do.css.map */\n"] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { whatSection: [{
    type: ViewChild,
    args: ["whatSection"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhatWeDo, { className: "WhatWeDo", filePath: "src/app/shared/what-we-do/what-we-do.ts", lineNumber: 11 });
})();

// src/app/shared/cta/cta.ts
var Cta = class _Cta {
  static \u0275fac = function Cta_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Cta)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Cta, selectors: [["app-cta"]], decls: 8, vars: 2, consts: [[1, "cta"], [1, "cta__overlay"], [1, "cta__content"], [3, "blur", "duration"], [1, "cta__title"], ["routerLink", "/contact-us", 1, "cta__button"]], template: function Cta_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "app-reveal", 3)(4, "h2", 4);
      \u0275\u0275text(5, "What's Your Mission?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 5);
      \u0275\u0275text(7, "Contact Us");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("blur", true)("duration", 1);
    }
  }, dependencies: [RevealComponent, RouterModule, RouterLink], styles: ["\n.cta[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  text-align: center;\n  padding: 60px 24px;\n  background-image: url(/assets/images/landscape-pov.jpg);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  overflow: hidden;\n}\n.cta__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(5, 10, 18, 0) 15%,\n      rgb(5, 10, 18) 66%);\n  z-index: 0;\n}\n.cta__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.cta__subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  letter-spacing: 2px;\n  opacity: 0.8;\n  text-transform: uppercase;\n}\n.cta__title[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 5vw, 3rem);\n  margin: 0;\n  line-height: 1.2;\n}\n.cta__button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 14px 32px;\n  background: var(--color-accent);\n  color: #fff;\n  text-decoration: none;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  transition: all 0.3s ease;\n  align-self: center;\n  cursor: pointer;\n}\n.cta__button[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n  transform: translateY(-2px);\n  background-color: var(--color-white);\n  color: var(--color-black);\n}\n@media (min-width: 992px) {\n  .cta[_ngcontent-%COMP%] {\n    padding: 100px 60px;\n  }\n  .cta__subtitle[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .cta__title[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .cta__button[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    padding: 16px 36px;\n  }\n}\n/*# sourceMappingURL=cta.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Cta, [{
    type: Component,
    args: [{ selector: "app-cta", imports: [RevealComponent, RouterModule], template: `<section class="cta">\r
    <div class="cta__overlay"></div>\r
\r
    <div class="cta__content">\r
        <app-reveal\r
            [blur]="true" [duration]="1"\r
        >\r
            <!-- <span class="cta__subtitle">Let's Fly</span> -->\r
            <h2 class="cta__title">What's Your Mission?</h2>\r
            <a routerLink="/contact-us" class="cta__button">Contact Us</a>\r
        </app-reveal>\r
    </div>\r
</section>`, styles: ["/* src/app/shared/cta/cta.scss */\n.cta {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  text-align: center;\n  padding: 60px 24px;\n  background-image: url(/assets/images/landscape-pov.jpg);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  overflow: hidden;\n}\n.cta__overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(5, 10, 18, 0) 15%,\n      rgb(5, 10, 18) 66%);\n  z-index: 0;\n}\n.cta__content {\n  position: relative;\n  z-index: 1;\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.cta__subtitle {\n  font-size: 1.1rem;\n  letter-spacing: 2px;\n  opacity: 0.8;\n  text-transform: uppercase;\n}\n.cta__title {\n  font-size: clamp(2rem, 5vw, 3rem);\n  margin: 0;\n  line-height: 1.2;\n}\n.cta__button {\n  display: inline-block;\n  padding: 14px 32px;\n  background: var(--color-accent);\n  color: #fff;\n  text-decoration: none;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  transition: all 0.3s ease;\n  align-self: center;\n  cursor: pointer;\n}\n.cta__button:hover {\n  opacity: 0.85;\n  transform: translateY(-2px);\n  background-color: var(--color-white);\n  color: var(--color-black);\n}\n@media (min-width: 992px) {\n  .cta {\n    padding: 100px 60px;\n  }\n  .cta__subtitle {\n    font-size: 1.3rem;\n  }\n  .cta__title {\n    font-size: 3rem;\n  }\n  .cta__button {\n    font-size: 1.1rem;\n    padding: 16px 36px;\n  }\n}\n/*# sourceMappingURL=cta.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Cta, { className: "Cta", filePath: "src/app/shared/cta/cta.ts", lineNumber: 11 });
})();

// src/app/shared/logo-loop/logo-loop.ts
var _c06 = ["containerRef"];
var _c12 = ["trackRef"];
var _c2 = ["seqRef"];
function LogoLoopComponent_For_5_For_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const logo_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", logo_r1.src, \u0275\u0275sanitizeUrl)("alt", logo_r1.alt || "");
    \u0275\u0275attribute("srcset", logo_r1.srcSet)("sizes", logo_r1.sizes)("width", logo_r1.width)("height", logo_r1.height);
  }
}
function LogoLoopComponent_For_5_For_3_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const logo_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(logo_r1.label);
  }
}
function LogoLoopComponent_For_5_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275conditionalCreate(1, LogoLoopComponent_For_5_For_3_Conditional_1_Conditional_1_Template, 1, 6, "img", 8)(2, LogoLoopComponent_For_5_For_3_Conditional_1_Conditional_2_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const logo_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", logo_r1.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", logo_r1.alt || logo_r1.title || "logo link")("title", logo_r1.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(logo_r1.src ? 1 : logo_r1.label ? 2 : -1);
  }
}
function LogoLoopComponent_For_5_For_3_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const logo_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", logo_r1.src, \u0275\u0275sanitizeUrl)("alt", logo_r1.alt || "");
    \u0275\u0275attribute("srcset", logo_r1.srcSet)("sizes", logo_r1.sizes)("width", logo_r1.width)("height", logo_r1.height)("title", logo_r1.title);
  }
}
function LogoLoopComponent_For_5_For_3_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const logo_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(logo_r1.label);
  }
}
function LogoLoopComponent_For_5_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LogoLoopComponent_For_5_For_3_Conditional_2_Conditional_0_Template, 1, 7, "img", 8)(1, LogoLoopComponent_For_5_For_3_Conditional_2_Conditional_1_Template, 2, 1, "span", 9);
  }
  if (rf & 2) {
    const logo_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(logo_r1.src ? 0 : logo_r1.label ? 1 : -1);
  }
}
function LogoLoopComponent_For_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 6);
    \u0275\u0275conditionalCreate(1, LogoLoopComponent_For_5_For_3_Conditional_1_Template, 3, 4, "a", 7)(2, LogoLoopComponent_For_5_For_3_Conditional_2_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const logo_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(logo_r1.href ? 1 : 2);
  }
}
function LogoLoopComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 5, 2);
    \u0275\u0275repeaterCreate(2, LogoLoopComponent_For_5_For_3_Template, 3, 1, "li", 6, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const copy_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-hidden", copy_r2 > 0 ? true : null)("data-seq", copy_r2 === 0 ? "" : null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.logos);
  }
}
var LogoLoopComponent = class _LogoLoopComponent {
  logos = [];
  speed = 120;
  direction = "left";
  width = "100%";
  logoHeight = 28;
  gap = 32;
  pauseOnHover = true;
  hoverSpeed;
  fadeOut = false;
  fadeOutColor;
  scaleOnHover = false;
  ariaLabel = "Partner logos";
  grayscale = false;
  containerRef;
  trackRef;
  seqRef;
  platformId = inject(PLATFORM_ID);
  zone = inject(NgZone);
  cdr = inject(ChangeDetectorRef);
  copyCount = signal(2, ...ngDevMode ? [{ debugName: "copyCount" }] : (
    /* istanbul ignore next */
    []
  ));
  isHovered = false;
  seqWidth = 0;
  seqHeight = 0;
  rafId = null;
  lastTimestamp = null;
  offset = 0;
  velocity = 0;
  resizeObserver;
  SMOOTH_TAU = 0.25;
  get isVertical() {
    return this.direction === "up" || this.direction === "down";
  }
  get targetVelocity() {
    const magnitude = Math.abs(this.speed);
    const dir = this.isVertical ? this.direction === "up" ? 1 : -1 : this.direction === "left" ? 1 : -1;
    return magnitude * dir * (this.speed < 0 ? -1 : 1);
  }
  get effectiveHoverSpeed() {
    if (this.hoverSpeed !== void 0)
      return this.hoverSpeed;
    if (this.pauseOnHover)
      return 0;
    return void 0;
  }
  get containerStyle() {
    const styles = {
      "--logoloop-gap": `${this.gap}px`,
      "--logoloop-logoHeight": `${this.logoHeight}px`
    };
    if (this.fadeOutColor)
      styles["--logoloop-fadeColor"] = this.fadeOutColor;
    if (!this.isVertical)
      styles["width"] = typeof this.width === "number" ? `${this.width}px` : this.width;
    return styles;
  }
  get copies() {
    return Array.from({ length: this.copyCount() }, (_, i) => i);
  }
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId))
      return;
    this.zone.runOutsideAngular(() => {
      this.setupResizeObserver();
      this.waitForImages();
    });
  }
  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId))
      return;
    if (this.rafId !== null)
      cancelAnimationFrame(this.rafId);
    this.resizeObserver?.disconnect();
  }
  onMouseEnter() {
    if (this.effectiveHoverSpeed !== void 0)
      this.isHovered = true;
  }
  onMouseLeave() {
    if (this.effectiveHoverSpeed !== void 0)
      this.isHovered = false;
  }
  setupResizeObserver() {
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver(() => this.updateDimensions());
      if (this.containerRef?.nativeElement)
        this.resizeObserver.observe(this.containerRef.nativeElement);
      if (this.seqRef?.nativeElement)
        this.resizeObserver.observe(this.seqRef.nativeElement);
    } else {
      window.addEventListener("resize", () => this.updateDimensions());
    }
    this.updateDimensions();
  }
  waitForImages() {
    const images = this.seqRef?.nativeElement?.querySelectorAll("img") ?? [];
    if (images.length === 0) {
      this.updateDimensions();
      return;
    }
    let remaining = images.length;
    const onLoad = () => {
      if (--remaining === 0)
        this.updateDimensions();
    };
    images.forEach((img) => {
      if (img.complete)
        onLoad();
      else {
        img.addEventListener("load", onLoad, { once: true });
        img.addEventListener("error", onLoad, { once: true });
      }
    });
  }
  updateDimensions() {
    const container = this.containerRef?.nativeElement;
    const seq = this.seqRef?.nativeElement;
    if (!container || !seq)
      return;
    const rect = seq.getBoundingClientRect();
    if (this.isVertical) {
      const parentHeight = container.parentElement?.clientHeight ?? 0;
      if (parentHeight > 0)
        container.style.height = `${Math.ceil(parentHeight)}px`;
      const seqH = Math.ceil(rect.height);
      if (seqH > 0) {
        this.seqHeight = seqH;
        const viewport = container.clientHeight || parentHeight || seqH;
        const copies = Math.max(2, Math.ceil(viewport / seqH) + 2);
        this.copyCount.set(copies);
      }
    } else {
      const seqW = Math.ceil(rect.width);
      if (seqW > 0) {
        this.seqWidth = seqW;
        const copies = Math.max(2, Math.ceil(container.clientWidth / seqW) + 2);
        this.copyCount.set(copies);
      }
    }
    this.cdr.markForCheck();
    if (this.rafId === null)
      this.startAnimation();
  }
  startAnimation() {
    const step = (timestamp) => {
      if (this.lastTimestamp === null)
        this.lastTimestamp = timestamp;
      const dt = Math.max(0, timestamp - this.lastTimestamp) / 1e3;
      this.lastTimestamp = timestamp;
      const target = this.isHovered && this.effectiveHoverSpeed !== void 0 ? this.effectiveHoverSpeed : this.targetVelocity;
      const ease = 1 - Math.exp(-dt / this.SMOOTH_TAU);
      this.velocity += (target - this.velocity) * ease;
      const seqSize = this.isVertical ? this.seqHeight : this.seqWidth;
      if (seqSize > 0) {
        let next = this.offset + this.velocity * dt;
        next = (next % seqSize + seqSize) % seqSize;
        this.offset = next;
        const transform = this.isVertical ? `translate3d(0, ${-next}px, 0)` : `translate3d(${-next}px, 0, 0)`;
        if (this.trackRef?.nativeElement) {
          this.trackRef.nativeElement.style.transform = transform;
        }
      }
      this.rafId = requestAnimationFrame(step);
    };
    this.rafId = requestAnimationFrame(step);
  }
  static \u0275fac = function LogoLoopComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogoLoopComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogoLoopComponent, selectors: [["app-logo-loop"]], viewQuery: function LogoLoopComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5)(_c12, 5)(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.trackRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.seqRef = _t.first);
    }
  }, inputs: { logos: "logos", speed: "speed", direction: "direction", width: "width", logoHeight: "logoHeight", gap: "gap", pauseOnHover: "pauseOnHover", hoverSpeed: "hoverSpeed", fadeOut: "fadeOut", fadeOutColor: "fadeOutColor", scaleOnHover: "scaleOnHover", ariaLabel: "ariaLabel", grayscale: "grayscale" }, decls: 6, vars: 12, consts: [["containerRef", ""], ["trackRef", ""], ["seqRef", ""], ["role", "region", 1, "logoloop", 3, "ngStyle"], [1, "logoloop__track", 3, "mouseenter", "mouseleave"], ["role", "list", 1, "logoloop__list"], ["role", "listitem", 1, "logoloop__item"], ["target", "_blank", "rel", "noreferrer noopener", 1, "logoloop__link", 3, "href"], ["loading", "lazy", "decoding", "async", "draggable", "false", 3, "src", "alt"], [1, "logoloop__node"]], template: function LogoLoopComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3, 0)(2, "div", 4, 1);
      \u0275\u0275listener("mouseenter", function LogoLoopComponent_Template_div_mouseenter_2_listener() {
        return ctx.onMouseEnter();
      })("mouseleave", function LogoLoopComponent_Template_div_mouseleave_2_listener() {
        return ctx.onMouseLeave();
      });
      \u0275\u0275repeaterCreate(4, LogoLoopComponent_For_5_Template, 4, 2, "ul", 5, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("logoloop--vertical", ctx.isVertical)("logoloop--horizontal", !ctx.isVertical)("logoloop--fade", ctx.fadeOut)("logoloop--scale-hover", ctx.scaleOnHover)("logoloop--grayscale", ctx.grayscale);
      \u0275\u0275property("ngStyle", ctx.containerStyle);
      \u0275\u0275attribute("aria-label", ctx.ariaLabel);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.copies);
    }
  }, dependencies: [CommonModule, NgStyle], styles: ['\n.logoloop[_ngcontent-%COMP%] {\n  position: relative;\n  --logoloop-gap: 32px;\n  --logoloop-logoHeight: 28px;\n  --logoloop-fadeColorAuto: #ffffff;\n}\n@media (prefers-color-scheme: dark) {\n  .logoloop[_ngcontent-%COMP%] {\n    --logoloop-fadeColorAuto: #e6e6e6;\n  }\n}\n.logoloop--grayscale[_ngcontent-%COMP%]   .logoloop__item[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.logoloop--grayscale[_ngcontent-%COMP%]   .logoloop__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n  opacity: 0.6;\n  transition:\n    filter 0.3s ease,\n    opacity 0.5s ease,\n    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.logoloop--grayscale[_ngcontent-%COMP%]   .logoloop__item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  filter: grayscale(0%);\n  opacity: 1;\n}\n.logoloop--vertical[_ngcontent-%COMP%] {\n  height: 100%;\n  display: inline-block;\n}\n.logoloop--scale-hover[_ngcontent-%COMP%] {\n  padding-top: calc(var(--logoloop-logoHeight) * 0.1);\n  padding-bottom: calc(var(--logoloop-logoHeight) * 0.1);\n}\n.logoloop__track[_ngcontent-%COMP%] {\n  display: flex;\n  width: max-content;\n  will-change: transform;\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  z-index: 0;\n}\n.logoloop--vertical[_ngcontent-%COMP%]   .logoloop__track[_ngcontent-%COMP%] {\n  flex-direction: column;\n  height: max-content;\n  width: 100%;\n}\n.logoloop__list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.logoloop--vertical[_ngcontent-%COMP%]   .logoloop__list[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.logoloop__item[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin-right: var(--logoloop-gap);\n  font-size: var(--logoloop-logoHeight);\n  line-height: 1;\n  color: var(--color-white);\n}\n.logoloop--vertical[_ngcontent-%COMP%]   .logoloop__item[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-bottom: var(--logoloop-gap);\n}\n.logoloop__item[_ngcontent-%COMP%]:last-child {\n  margin-right: var(--logoloop-gap);\n}\n.logoloop--vertical[_ngcontent-%COMP%]   .logoloop__item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n  margin-bottom: var(--logoloop-gap);\n}\n.logoloop__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: var(--logoloop-logoHeight);\n  width: auto;\n  display: block;\n  object-fit: contain;\n  -webkit-user-drag: none;\n  pointer-events: none;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.logoloop__node[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n.logoloop__link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2s ease;\n}\n.logoloop__link[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.logoloop__link[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}\n.logoloop--scale-hover[_ngcontent-%COMP%]   .logoloop__item[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.logoloop--scale-hover[_ngcontent-%COMP%]   .logoloop__item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], \n.logoloop--scale-hover[_ngcontent-%COMP%]   .logoloop__item[_ngcontent-%COMP%]:hover   .logoloop__node[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  transform-origin: center center;\n}\n.logoloop--scale-hover[_ngcontent-%COMP%]   .logoloop__node[_ngcontent-%COMP%] {\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.logoloop--fade[_ngcontent-%COMP%]::before, \n.logoloop--fade[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: clamp(24px, 8%, 120px);\n  pointer-events: none;\n  z-index: 10;\n}\n.logoloop--fade[_ngcontent-%COMP%]::before {\n  left: 0;\n  background:\n    linear-gradient(\n      to right,\n      var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.logoloop--fade[_ngcontent-%COMP%]::after {\n  right: 0;\n  background:\n    linear-gradient(\n      to left,\n      var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.logoloop--fade.logoloop--vertical[_ngcontent-%COMP%]::before, \n.logoloop--fade.logoloop--vertical[_ngcontent-%COMP%]::after {\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: clamp(24px, 8%, 120px);\n}\n.logoloop--fade.logoloop--vertical[_ngcontent-%COMP%]::before {\n  top: 0;\n  bottom: auto;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.logoloop--fade.logoloop--vertical[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  top: auto;\n  background:\n    linear-gradient(\n      to top,\n      var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,\n      rgba(0, 0, 0, 0) 100%);\n}\n@media (prefers-reduced-motion: reduce) {\n  .logoloop__track[_ngcontent-%COMP%] {\n    transform: translate3d(0, 0, 0) !important;\n  }\n  .logoloop__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .logoloop__node[_ngcontent-%COMP%] {\n    transition: none !important;\n  }\n}\n/*# sourceMappingURL=logo-loop.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogoLoopComponent, [{
    type: Component,
    args: [{ selector: "app-logo-loop", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div #containerRef class="logoloop" [class.logoloop--vertical]="isVertical" [class.logoloop--horizontal]="!isVertical"\r
    [class.logoloop--fade]="fadeOut" [class.logoloop--scale-hover]="scaleOnHover" [ngStyle]="containerStyle"\r
    role="region" [class.logoloop--grayscale]="grayscale" [attr.aria-label]="ariaLabel">\r
    <div #trackRef class="logoloop__track" (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()">\r
        @for (copy of copies; track copy) {\r
        <ul class="logoloop__list" role="list" [attr.aria-hidden]="copy > 0 ? true : null"\r
            [attr.data-seq]="copy === 0 ? '' : null" #seqRef>\r
            @for (logo of logos; track $index) {\r
            <li class="logoloop__item" role="listitem">\r
                @if (logo.href) {\r
                <a\r
                class="logoloop__link"\r
                [href]="logo.href"\r
                [attr.aria-label]="logo.alt || logo.title || 'logo link'"\r
                [attr.title]="logo.title"\r
                target="_blank"\r
                rel="noreferrer noopener"\r
                >\r
                @if (logo.src) {\r
                <img [src]="logo.src" [attr.srcset]="logo.srcSet" [attr.sizes]="logo.sizes" [attr.width]="logo.width"\r
                    [attr.height]="logo.height" [alt]="logo.alt || ''" loading="lazy" decoding="async"\r
                    draggable="false" />\r
                } @else if (logo.label) {\r
                <span class="logoloop__node">{{ logo.label }}</span>\r
                }\r
                </a>\r
                } @else {\r
                @if (logo.src) {\r
                <img [src]="logo.src" [attr.srcset]="logo.srcSet" [attr.sizes]="logo.sizes" [attr.width]="logo.width"\r
                    [attr.height]="logo.height" [alt]="logo.alt || ''" [attr.title]="logo.title" loading="lazy"\r
                    decoding="async" draggable="false" />\r
                } @else if (logo.label) {\r
                <span class="logoloop__node">{{ logo.label }}</span>\r
                }\r
                }\r
            </li>\r
            }\r
        </ul>\r
        }\r
    </div>\r
</div>`, styles: ['/* src/app/shared/logo-loop/logo-loop.scss */\n.logoloop {\n  position: relative;\n  --logoloop-gap: 32px;\n  --logoloop-logoHeight: 28px;\n  --logoloop-fadeColorAuto: #ffffff;\n}\n@media (prefers-color-scheme: dark) {\n  .logoloop {\n    --logoloop-fadeColorAuto: #e6e6e6;\n  }\n}\n.logoloop--grayscale .logoloop__item {\n  pointer-events: auto;\n}\n.logoloop--grayscale .logoloop__item img {\n  filter: grayscale(100%);\n  opacity: 0.6;\n  transition:\n    filter 0.3s ease,\n    opacity 0.5s ease,\n    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.logoloop--grayscale .logoloop__item:hover img {\n  filter: grayscale(0%);\n  opacity: 1;\n}\n.logoloop--vertical {\n  height: 100%;\n  display: inline-block;\n}\n.logoloop--scale-hover {\n  padding-top: calc(var(--logoloop-logoHeight) * 0.1);\n  padding-bottom: calc(var(--logoloop-logoHeight) * 0.1);\n}\n.logoloop__track {\n  display: flex;\n  width: max-content;\n  will-change: transform;\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  z-index: 0;\n}\n.logoloop--vertical .logoloop__track {\n  flex-direction: column;\n  height: max-content;\n  width: 100%;\n}\n.logoloop__list {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.logoloop--vertical .logoloop__list {\n  flex-direction: column;\n}\n.logoloop__item {\n  flex: 0 0 auto;\n  margin-right: var(--logoloop-gap);\n  font-size: var(--logoloop-logoHeight);\n  line-height: 1;\n  color: var(--color-white);\n}\n.logoloop--vertical .logoloop__item {\n  margin-right: 0;\n  margin-bottom: var(--logoloop-gap);\n}\n.logoloop__item:last-child {\n  margin-right: var(--logoloop-gap);\n}\n.logoloop--vertical .logoloop__item:last-child {\n  margin-right: 0;\n  margin-bottom: var(--logoloop-gap);\n}\n.logoloop__item img {\n  height: var(--logoloop-logoHeight);\n  width: auto;\n  display: block;\n  object-fit: contain;\n  -webkit-user-drag: none;\n  pointer-events: none;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.logoloop__node {\n  display: inline-flex;\n  align-items: center;\n}\n.logoloop__link {\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2s ease;\n}\n.logoloop__link:hover {\n  opacity: 0.8;\n}\n.logoloop__link:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}\n.logoloop--scale-hover .logoloop__item {\n  overflow: visible;\n}\n.logoloop--scale-hover .logoloop__item:hover img,\n.logoloop--scale-hover .logoloop__item:hover .logoloop__node {\n  transform: scale(1.2);\n  transform-origin: center center;\n}\n.logoloop--scale-hover .logoloop__node {\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.logoloop--fade::before,\n.logoloop--fade::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: clamp(24px, 8%, 120px);\n  pointer-events: none;\n  z-index: 10;\n}\n.logoloop--fade::before {\n  left: 0;\n  background:\n    linear-gradient(\n      to right,\n      var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.logoloop--fade::after {\n  right: 0;\n  background:\n    linear-gradient(\n      to left,\n      var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.logoloop--fade.logoloop--vertical::before,\n.logoloop--fade.logoloop--vertical::after {\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: clamp(24px, 8%, 120px);\n}\n.logoloop--fade.logoloop--vertical::before {\n  top: 0;\n  bottom: auto;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.logoloop--fade.logoloop--vertical::after {\n  bottom: 0;\n  top: auto;\n  background:\n    linear-gradient(\n      to top,\n      var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,\n      rgba(0, 0, 0, 0) 100%);\n}\n@media (prefers-reduced-motion: reduce) {\n  .logoloop__track {\n    transform: translate3d(0, 0, 0) !important;\n  }\n  .logoloop__item img,\n  .logoloop__node {\n    transition: none !important;\n  }\n}\n/*# sourceMappingURL=logo-loop.css.map */\n'] }]
  }], null, { logos: [{
    type: Input
  }], speed: [{
    type: Input
  }], direction: [{
    type: Input
  }], width: [{
    type: Input
  }], logoHeight: [{
    type: Input
  }], gap: [{
    type: Input
  }], pauseOnHover: [{
    type: Input
  }], hoverSpeed: [{
    type: Input
  }], fadeOut: [{
    type: Input
  }], fadeOutColor: [{
    type: Input
  }], scaleOnHover: [{
    type: Input
  }], ariaLabel: [{
    type: Input
  }], grayscale: [{
    type: Input
  }], containerRef: [{
    type: ViewChild,
    args: ["containerRef"]
  }], trackRef: [{
    type: ViewChild,
    args: ["trackRef"]
  }], seqRef: [{
    type: ViewChild,
    args: ["seqRef"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogoLoopComponent, { className: "LogoLoopComponent", filePath: "src/app/shared/logo-loop/logo-loop.ts", lineNumber: 42 });
})();

// src/app/shared/partners/partners.ts
var Partners = class _Partners {
  logos = [
    { src: "/assets/client-logo/air_force.png", alt: "Air Force" },
    { src: "/assets/client-logo/army.png", alt: "Army" },
    { src: "/assets/client-logo/cia.png", alt: "CIA" },
    { src: "/assets/client-logo/darpa.png", alt: "DARPA" },
    { src: "/assets/client-logo/defense.png", alt: "Department of Defense" },
    { src: "/assets/client-logo/marine_corps.png", alt: "Marine Corps" },
    { src: "/assets/client-logo/nasa_logo.png", alt: "NASA" },
    { src: "/assets/client-logo/navy.png", alt: "NAVY" },
    { src: "/assets/client-logo/security_agency.png", alt: "National Security Agency" },
    { src: "/assets/client-logo/space_force.png", alt: "United States Space Force" }
  ];
  static \u0275fac = function Partners_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Partners)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Partners, selectors: [["app-partners"]], decls: 8, vars: 11, consts: [[1, "partners"], ["src", "/assets/decos/aerial-deco-1.png", "alt", "", "aria-hidden", "true", 1, "partners__deco"], [3, "blur"], [1, "partners__header"], [1, "partners__title"], [3, "blur", "direction", "delay"], ["direction", "left", 3, "logos", "speed", "logoHeight", "gap", "fadeOut", "pauseOnHover", "grayscale"]], template: function Partners_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "img", 1);
      \u0275\u0275elementStart(2, "app-reveal", 2)(3, "div", 3)(4, "h2", 4);
      \u0275\u0275text(5, "PARTNERS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "app-reveal", 5);
      \u0275\u0275element(7, "app-logo-loop", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("blur", true)("direction", "horizontal")("delay", 0.5);
      \u0275\u0275advance();
      \u0275\u0275property("logos", ctx.logos)("speed", 36)("logoHeight", 150)("gap", 160)("fadeOut", false)("pauseOnHover", false)("grayscale", true);
    }
  }, dependencies: [LogoLoopComponent, RevealComponent], styles: ["\n.partners[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 4rem 1.5rem;\n  background: var(--color-black);\n  overflow: hidden;\n  background: var(--color-white);\n}\n.partners__deco[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  transform: rotate(180deg);\n  width: 150px;\n  height: auto;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  z-index: 0;\n}\n.partners__header[_ngcontent-%COMP%], \napp-reveal[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.partners__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.partners__title[_ngcontent-%COMP%] {\n  font-size: 1.8rem !important;\n  font-weight: 400;\n  letter-spacing: 0.08em;\n  font-family: var(--font-secondary);\n  color: var(--color-black);\n}\n@media (min-width: 1200px) {\n  .partners[_ngcontent-%COMP%] {\n    padding: 3rem 1.5rem 8rem 1.5rem;\n  }\n  .partners__deco[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .partners__title[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n/*# sourceMappingURL=partners.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Partners, [{
    type: Component,
    args: [{ selector: "app-partners", imports: [LogoLoopComponent, RevealComponent], template: `<div class="partners">\r
    <img src="/assets/decos/aerial-deco-1.png" alt="" class="partners__deco" aria-hidden="true" />\r
\r
    <app-reveal [blur]="true">\r
        <div class="partners__header">\r
            <h2 class="partners__title">PARTNERS</h2>\r
        </div>\r
    </app-reveal>\r
        \r
    <app-reveal [blur]="true" [direction]="'horizontal'" [delay]="0.5">\r
        <app-logo-loop \r
            [logos]="logos"\r
            [speed]="36" \r
            direction="left" \r
            [logoHeight]="150"\r
            [gap]="160"\r
            [fadeOut]="false"\r
            [pauseOnHover]="false" \r
            [grayscale]="true">\r
        </app-logo-loop>\r
    </app-reveal>\r
    \r
</div>`, styles: ["/* src/app/shared/partners/partners.scss */\n.partners {\n  position: relative;\n  padding: 4rem 1.5rem;\n  background: var(--color-black);\n  overflow: hidden;\n  background: var(--color-white);\n}\n.partners__deco {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  transform: rotate(180deg);\n  width: 150px;\n  height: auto;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  z-index: 0;\n}\n.partners__header,\napp-reveal {\n  position: relative;\n  z-index: 1;\n}\n.partners__header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.partners__title {\n  font-size: 1.8rem !important;\n  font-weight: 400;\n  letter-spacing: 0.08em;\n  font-family: var(--font-secondary);\n  color: var(--color-black);\n}\n@media (min-width: 1200px) {\n  .partners {\n    padding: 3rem 1.5rem 8rem 1.5rem;\n  }\n  .partners__deco {\n    width: 250px;\n  }\n  .partners__title {\n    font-size: 3rem;\n  }\n}\n/*# sourceMappingURL=partners.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Partners, { className: "Partners", filePath: "src/app/shared/partners/partners.ts", lineNumber: 11 });
})();

// src/app/shared/tag/tag.ts
var Tag = class _Tag {
  logos = [
    { label: "YOUR VISION IS OUR MISSION." }
  ];
  static \u0275fac = function Tag_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tag)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tag, selectors: [["app-tag"]], decls: 3, vars: 6, consts: [[1, "tag"], [3, "logos", "speed", "pauseOnHover", "direction", "logoHeight", "gap"]], template: function Tag_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-reveal");
      \u0275\u0275element(2, "app-logo-loop", 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("logos", ctx.logos)("speed", 50)("pauseOnHover", false)("direction", "right")("logoHeight", 100)("gap", 80);
    }
  }, dependencies: [LogoLoopComponent, RevealComponent], styles: ["\n[_nghost-%COMP%] {\n  font-family: var(--font-secondary);\n}\n.tag[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=tag.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{ selector: "app-tag", imports: [LogoLoopComponent, RevealComponent], template: `<div class="tag">\r
    <app-reveal>\r
        <app-logo-loop \r
        [logos]="logos" \r
        [speed]="50" \r
        [pauseOnHover]="false"\r
        [direction]="'right'" \r
        [logoHeight]="100" \r
        [gap]="80">\r
    </app-logo-loop>\r
</app-reveal>\r
</div>`, styles: ["/* src/app/shared/tag/tag.scss */\n:host {\n  font-family: var(--font-secondary);\n}\n.tag {\n  overflow: hidden;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=tag.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tag, { className: "Tag", filePath: "src/app/shared/tag/tag.ts", lineNumber: 11 });
})();

// src/app/core/services/news.service.ts
var NewsService = class _NewsService {
  news = [
    {
      id: 1,
      title: "Feather Dynamics joins DARPA Lift 2026",
      slug: "feather-dynamics-joins-darpa-lift-2026",
      excerpt: "Team Feather to Compete in the DARPA LIFT Challenge",
      content: `
Feather Dynamics is proud to announce that **Team Feather** will be participating in the prestigious **DARPA LIFT Challenge**, an advanced aerospace competition led by the Defense Advanced Research Projects Agency (DARPA). The LIFT Challenge is designed to accelerate breakthrough innovation in vertical take-off and landing (VTOL) systems and autonomous flight capabilities, technologies that will define the future of mobility, logistics, and national infrastructure.

As a company dedicated to redefining mid-mile logistics through autonomous air cargo solutions, this challenge represents a pivotal opportunity to demonstrate our novel technology on a national stage.

## **Meeting a Critical Industry Need**

The global logistics ecosystem is under unprecedented strain. Workforce shortages, infrastructure limitations, land transport congestion, and rising e-commerce demand are placing immense pressure on warehouse-to-warehouse operations. Despite rapid technological progress in other sectors, mid-mile cargo transport remains constrained by outdated systems and ground-based bottlenecks.

The DARPA LIFT Challenge aligns directly with our mission:

_To provide efficient solutions for air cargo transportation and streamline logistics operations through autonomous aircraft._

Our solution is a long-endurance, heavy-lift autonomous VTOL aircraft capable of efficiently and reliably transporting up to 500 pounds of cargo between warehouses. Designed for multiple missions per day, our aircraft integrates:

- A highly efficient electric propulsion system
- Hybrid-optional power support for extended endurance
- A proprietary ultra-quiet propeller system
- Full-Fuselage Integrated Cargo Bay utilizing 85% of fuselage capacity
- Autonomous flight operations enabling a single trained operator to manage multiple aircraft simultaneously

## **Why the DARPA LIFT Challenge Matters**

DARPA has long been a catalyst for transformative innovation. Programs initiated by DARPA have historically shaped aerospace, defense systems, and advanced mobility technologies. The LIFT Challenge continues that legacy by pushing teams to rethink vertical flight, payload efficiency, endurance, and operational scalability.

For Team Feather Dynamics, this challenge represents:

- Validation of our aircraft architecture and propulsion efficiency
- An opportunity to showcase low-noise VTOL performance (below 50db at 500 meters)
- A platform to demonstrate scalable autonomous logistics solutions
- Alignment with national efforts to strengthen supply chain resilience

Our participation reinforces our commitment to innovation and positions Feather Dynamics among emerging aerospace leaders working to redefine air mobility.

## **A Milestone in Feather Dynamics' Growth**

Since January 2023, our team has been dedicated to solving some of the most pressing challenges facing the cargo transportation industry. Guided by strong leadership, deep engineering expertise, and global strategic experience, Feather Dynamics continues to push the boundaries of what autonomous aerospace systems can accomplish.

Team Feather Dynamics' participation in the DARPA LIFT Challenge signals:

- Technical maturity
- Operational readiness
- Competitive confidence
- A commitment to national and global innovation

## **Taking Logistics to New Heights**

Feather Dynamics approaches innovation with intelligent precision and entrepreneurial boldness. We are building aircraft that are efficient, scalable, quiet, and purpose-built for modern logistics.

The DARPA LIFT Challenge allows us to showcase our capabilities alongside other innovators shaping the future of vertical flight. It reinforces our belief that autonomous air cargo will play a defining role in strengthening supply chains, enabling humanitarian response, and advancing air mobility worldwide.

We are honored to compete.  
And we are committed to advancing the future of autonomous air logistics.
            `,
      image: "/assets/news/news-1.png",
      publishedAt: /* @__PURE__ */ new Date("2026-02-19"),
      category: "article"
    }
  ];
  constructor() {
  }
  getAll() {
    return [...this.news].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }
  getBySlug(slug) {
    return this.news.find((n) => n.slug === slug);
  }
  getLatest(limit = 3) {
    return this.getAll().slice(0, limit);
  }
  getLatestFour() {
    return this.getLatest(4);
  }
  getByCategory(category) {
    return this.getAll().filter((n) => n.category === category);
  }
  static \u0275fac = function NewsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NewsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NewsService, factory: _NewsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/blog/blog.ts
var _c07 = ["viewport"];
var _c13 = (a0, a1) => ["/news", a0, a1];
function Blog_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "div", 12);
    \u0275\u0275element(2, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15)(5, "p", 16);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h3", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 20);
    \u0275\u0275text(15, " Read More ");
    \u0275\u0275elementStart(16, "span", 21);
    \u0275\u0275text(17, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("no-pointer", ctx_r1.isDraggingActive);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(12, _c13, item_r1.category, item_r1.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl)("alt", item_r1.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 9, item_r1.publishedAt, "longDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r1.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.excerpt, " ");
  }
}
function Blog_div_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275listener("click", function Blog_div_12_span_1_Template_span_click_0_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(i_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", i_r4 === ctx_r1.currentPage);
  }
}
function Blog_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, Blog_div_12_span_1_Template, 1, 2, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pages);
  }
}
var Blog = class _Blog {
  newsService = inject(NewsService);
  platformId = inject(PLATFORM_ID);
  isDraggingActive = false;
  viewport;
  news = [];
  itemsPerPage = 3;
  currentPage = 0;
  pageCount = 0;
  pages = [];
  isDragging = false;
  startX = 0;
  scrollLeft = 0;
  constructor() {
    this.news = this.newsService.getAll();
    this.pageCount = Math.ceil(this.news.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.pageCount });
  }
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId))
      return;
    if (this.pageCount > 1) {
      this.initDrag();
      this.updateCurrentPage();
    }
  }
  goToPage(index) {
    if (!this.viewport)
      return;
    const width = this.viewport.nativeElement.clientWidth;
    this.viewport.nativeElement.scrollTo({
      left: width * index,
      behavior: "smooth"
    });
    this.currentPage = index;
  }
  updateCurrentPage() {
    this.viewport.nativeElement.addEventListener("scroll", () => {
      const width = this.viewport.nativeElement.clientWidth;
      this.currentPage = Math.round(this.viewport.nativeElement.scrollLeft / width);
    });
  }
  initDrag() {
    const el = this.viewport.nativeElement;
    el.addEventListener("mousedown", (e) => {
      this.isDragging = true;
      this.startX = e.pageX - el.offsetLeft;
      this.scrollLeft = el.scrollLeft;
      this.isDraggingActive = false;
    });
    el.addEventListener("mouseleave", () => {
      this.isDragging = false;
    });
    el.addEventListener("mouseup", () => {
      this.isDragging = false;
      setTimeout(() => this.isDraggingActive = false, 0);
    });
    el.addEventListener("mousemove", (e) => {
      if (!this.isDragging)
        return;
      e.preventDefault();
      this.isDraggingActive = true;
      const x = e.pageX - el.offsetLeft;
      const walk = (x - this.startX) * 1.2;
      el.scrollLeft = this.scrollLeft - walk;
    });
  }
  static \u0275fac = function Blog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Blog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Blog, selectors: [["app-blog"]], viewQuery: function Blog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c07, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewport = _t.first);
    }
  }, decls: 13, vars: 8, consts: [["viewport", ""], [1, "blog"], ["src", "/assets/decos/aerial-deco-1.png", "alt", "", "aria-hidden", "true", 1, "blog__deco"], [1, "blog__inner"], [3, "blur"], [1, "blog__header"], [1, "blog__title"], [1, "blog__viewport"], [1, "blog__grid"], ["class", "blog-item", "draggable", "false", 3, "routerLink", "no-pointer", 4, "ngFor", "ngForOf"], ["class", "blog__dots", 4, "ngIf"], ["draggable", "false", 1, "blog-item", 3, "routerLink"], [1, "blog-item__image"], [3, "src", "alt"], [1, "blog-item__content"], [1, "blog-item__meta"], [1, "blog-item__date"], [1, "blog-item__category"], [1, "blog-item__title"], [1, "blog-item__excerpt"], [1, "blog-item__link"], [1, "arrow"], [1, "blog__dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "dot", 3, "click"]], template: function Blog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1);
      \u0275\u0275element(1, "img", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "app-reveal", 4)(4, "header", 5)(5, "h2", 6);
      \u0275\u0275text(6, "NEWS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "app-reveal", 4)(8, "div", 7, 0)(10, "div", 8);
      \u0275\u0275template(11, Blog_a_11_Template, 18, 15, "a", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, Blog_div_12_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance();
      \u0275\u0275classProp("is-draggable", ctx.pageCount > 1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("center-single", ctx.news.length === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.news);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pageCount > 1);
    }
  }, dependencies: [RevealComponent, RouterModule, RouterLink, CommonModule, NgForOf, NgIf, DatePipe], styles: ['@charset "UTF-8";\n\n\n.blog[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 5rem;\n  padding-bottom: 2rem;\n  overflow: hidden;\n}\n.blog__inner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1300px;\n  position: relative;\n  z-index: 1;\n}\n.blog__header[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  text-align: center;\n}\n.blog__title[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 1.8rem !important;\n  font-weight: 400;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #000000;\n}\n.blog-item.no-pointer[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.blog__viewport[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  cursor: default;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.blog__viewport[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.blog__viewport.is-draggable[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n.blog__viewport.is-draggable[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.blog__viewport[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.blog__grid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 3rem;\n  width: max-content;\n}\n.blog__grid.center-single[_ngcontent-%COMP%] {\n  justify-content: center;\n  width: 100%;\n}\n.blog-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  text-decoration: none;\n  color: inherit;\n  transition: transform 0.3s ease;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.blog-item__image[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.blog-item__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  transition: transform 0.6s ease;\n  -webkit-user-drag: none;\n  pointer-events: none;\n}\n.blog-item[_ngcontent-%COMP%]:hover   .blog-item__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.blog-item__content[_ngcontent-%COMP%] {\n  margin-top: 1.2rem;\n}\n.blog-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  margin-bottom: 0.6rem;\n}\n.blog-item__date[_ngcontent-%COMP%], \n.blog-item__category[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 0.08rem;\n  text-transform: uppercase;\n  color: #666666;\n}\n.blog-item__category[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 0.8rem;\n}\n.blog-item__category[_ngcontent-%COMP%]::before {\n  content: "\\2022";\n  position: absolute;\n  left: 0;\n  color: rgba(0, 0, 0, 0.4);\n}\n.blog-item__date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.blog-item__title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 400;\n  margin-bottom: 1rem;\n  color: #000000;\n}\n.blog-item__excerpt[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.6;\n  color: #666666;\n  margin-bottom: 1rem;\n}\n.blog-item__link[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.blog-item__link[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: transform 0.3s ease;\n}\n.blog-item[_ngcontent-%COMP%]:hover   .blog-item__link[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n}\n.blog__dots[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n  gap: 0.6rem;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, 0.3);\n  transition: background 0.3s ease, transform 0.3s ease;\n  cursor: pointer;\n}\n.dot.active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.8);\n  transform: scale(1.4);\n}\n.blog__deco[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 120px;\n  pointer-events: none;\n}\n@media (min-width: 992px) {\n  .blog__title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .blog-item[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n  .blog__deco[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n/*# sourceMappingURL=blog.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Blog, [{
    type: Component,
    args: [{ selector: "app-blog", imports: [RevealComponent, RouterModule, CommonModule, DatePipe], template: `<section class="blog">\r
    <img src="/assets/decos/aerial-deco-1.png" alt="" class="blog__deco" aria-hidden="true" />\r
\r
    <div class="blog__inner">\r
\r
        <app-reveal [blur]="true">\r
            <header class="blog__header">\r
                <h2 class="blog__title">NEWS</h2>\r
            </header>\r
        </app-reveal>\r
\r
        <app-reveal [blur]="true">\r
            <div class="blog__viewport" #viewport [class.is-draggable]="pageCount > 1">\r
                <div class="blog__grid" [class.center-single]="news.length === 1">\r
                    <a class="blog-item" *ngFor="let item of news; let i = index" [routerLink]="['/news', item.category, item.slug]" [class.no-pointer]="isDraggingActive" draggable="false">\r
                        <div class="blog-item__image">\r
                            <img [src]="item.image" [alt]="item.title" />\r
                        </div>\r
                        <div class="blog-item__content">\r
                            <div class="blog-item__meta">\r
                                <p class="blog-item__date">\r
                                    {{ item.publishedAt | date:'longDate' }}\r
                                </p>\r
                                \r
                                <span class="blog-item__category">\r
                                    {{item.category}}\r
                                </span>\r
                            </div>\r
                            <h3 class="blog-item__title">\r
                                {{ item.title }}\r
                            </h3>\r
                            <p class="blog-item__excerpt">\r
                                {{ item.excerpt }}\r
                            </p>\r
                            <span class="blog-item__link">\r
                                Read More \r
                                <span class="arrow">\u2192</span>\r
                        </span>\r
                    </div>\r
                </a>\r
            </div>\r
        </div>\r
\r
        <!-- Pagination Dots -->\r
        <div class="blog__dots" *ngIf="pageCount > 1">\r
            <span \r
                *ngFor="let _ of pages; let i = index" \r
                class="dot"\r
                [class.active]="i === currentPage"\r
                (click)="goToPage(i)"\r
                >\r
            </span>\r
        </div>\r
    </app-reveal>\r
\r
    </div>\r
</section>`, styles: ['@charset "UTF-8";\n\n/* src/app/shared/blog/blog.scss */\n.blog {\n  position: relative;\n  background: #ffffff;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 5rem;\n  padding-bottom: 2rem;\n  overflow: hidden;\n}\n.blog__inner {\n  margin: 0 auto;\n  max-width: 1300px;\n  position: relative;\n  z-index: 1;\n}\n.blog__header {\n  margin-bottom: 3rem;\n  text-align: center;\n}\n.blog__title {\n  font-family: var(--font-secondary);\n  font-size: 1.8rem !important;\n  font-weight: 400;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #000000;\n}\n.blog-item.no-pointer {\n  pointer-events: none;\n}\n.blog__viewport {\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  cursor: default;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.blog__viewport:active {\n  cursor: grabbing;\n}\n.blog__viewport.is-draggable {\n  cursor: grab;\n}\n.blog__viewport.is-draggable:active {\n  cursor: grabbing;\n}\n.blog__viewport::-webkit-scrollbar {\n  display: none;\n}\n.blog__grid {\n  display: flex;\n  align-items: flex-start;\n  gap: 3rem;\n  width: max-content;\n}\n.blog__grid.center-single {\n  justify-content: center;\n  width: 100%;\n}\n.blog-item {\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  text-decoration: none;\n  color: inherit;\n  transition: transform 0.3s ease;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.blog-item__image {\n  overflow: hidden;\n}\n.blog-item__image img {\n  width: 100%;\n  height: auto;\n  display: block;\n  transition: transform 0.6s ease;\n  -webkit-user-drag: none;\n  pointer-events: none;\n}\n.blog-item:hover .blog-item__image img {\n  transform: scale(1.05);\n}\n.blog-item__content {\n  margin-top: 1.2rem;\n}\n.blog-item__meta {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  margin-bottom: 0.6rem;\n}\n.blog-item__date,\n.blog-item__category {\n  font-size: 0.75rem;\n  letter-spacing: 0.08rem;\n  text-transform: uppercase;\n  color: #666666;\n}\n.blog-item__category {\n  position: relative;\n  padding-left: 0.8rem;\n}\n.blog-item__category::before {\n  content: "\\2022";\n  position: absolute;\n  left: 0;\n  color: rgba(0, 0, 0, 0.4);\n}\n.blog-item__date {\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.blog-item__title {\n  font-size: 1.4rem;\n  font-weight: 400;\n  margin-bottom: 1rem;\n  color: #000000;\n}\n.blog-item__excerpt {\n  font-size: 0.95rem;\n  line-height: 1.6;\n  color: #666666;\n  margin-bottom: 1rem;\n}\n.blog-item__link {\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.blog-item__link .arrow {\n  display: inline-block;\n  transition: transform 0.3s ease;\n}\n.blog-item:hover .blog-item__link .arrow {\n  transform: rotate(-45deg);\n}\n.blog__dots {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n  gap: 0.6rem;\n}\n.dot {\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, 0.3);\n  transition: background 0.3s ease, transform 0.3s ease;\n  cursor: pointer;\n}\n.dot.active {\n  background: rgba(0, 0, 0, 0.8);\n  transform: scale(1.4);\n}\n.blog__deco {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 120px;\n  pointer-events: none;\n}\n@media (min-width: 992px) {\n  .blog__title {\n    font-size: 2.5rem;\n  }\n  .blog-item {\n    width: 400px;\n  }\n  .blog__deco {\n    width: 200px;\n  }\n}\n/*# sourceMappingURL=blog.css.map */\n'] }]
  }], () => [], { viewport: [{
    type: ViewChild,
    args: ["viewport", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Blog, { className: "Blog", filePath: "src/app/shared/blog/blog.ts", lineNumber: 13 });
})();

// src/app/shared/about-us/about-us.ts
var AboutUs = class _AboutUs {
  static \u0275fac = function AboutUs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutUs)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutUs, selectors: [["app-about-us"]], decls: 17, vars: 5, consts: [[1, "about-us"], [1, "container"], [3, "blur"], [1, "group", "group-left"], ["src", "assets/images/ril_p8.JPG", "alt", "UAV aerial view"], [1, "group", "group-right"], [1, "label", "text-lg"], [1, "text"], ["src", "/assets/images/3.jpg", "alt", "UAV technology detail"]], template: function AboutUs_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "app-reveal", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5)(6, "app-reveal", 2)(7, "span", 6);
      \u0275\u0275text(8, "ABOUT US");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "app-reveal", 2)(10, "h2");
      \u0275\u0275text(11, "Legacy of Innovation Powering Modern Unmanned Systems");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "app-reveal", 2)(13, "p", 7);
      \u0275\u0275text(14, " With over twenty years of experience, Feather Dynamics has evolved from a UAV specialist into a pioneer of multi-domain unmanned systems. By leveraging patented technologies and extensive expertise in both commercial and defense sectors, they now develop intelligent solutions across land, air, sea, space, and cyber domains. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "app-reveal", 2);
      \u0275\u0275element(16, "img", 8);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("blur", true);
    }
  }, dependencies: [RevealComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.about-us[_ngcontent-%COMP%] {\n  background: #000;\n  background-image: url(/assets/decos/aerial-deco-back-2.png);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  padding: 9rem 1.5rem;\n  color: #fff;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n.group[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.group-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  display: block;\n}\n.group-right[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.group-right[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  letter-spacing: 0.2rem;\n  display: block;\n  margin-bottom: 1rem;\n}\n.group-right[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 5vw, 2.5rem);\n  line-height: 1.2;\n  margin-bottom: 1.5rem;\n  font-weight: 400;\n}\n.group-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  opacity: 0.8;\n  max-width: 100%;\n  margin-bottom: 2rem;\n}\n.group-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  display: block;\n}\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n  .group-left[_ngcontent-%COMP%], \n   .group-right[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .group-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 210%;\n    height: 650px;\n  }\n  .group-right[_ngcontent-%COMP%] {\n    margin-top: 0;\n    padding-left: 4rem;\n  }\n  .group-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 520px;\n  }\n  .group-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n/*# sourceMappingURL=about-us.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutUs, [{
    type: Component,
    args: [{ selector: "app-about-us", imports: [RevealComponent], template: '<section class="about-us">\r\n  <div class="container">\r\n    <app-reveal [blur]="true">\r\n      <!-- Group 1 -->\r\n      <div class="group group-left">\r\n        <img src="assets/images/ril_p8.JPG" alt="UAV aerial view" />\r\n      </div>\r\n    </app-reveal>\r\n\r\n    <!-- Group 2 -->\r\n    <div class="group group-right">\r\n      <app-reveal [blur]="true">\r\n        <span class="label text-lg">ABOUT US</span>\r\n      </app-reveal>\r\n\r\n      <app-reveal [blur]="true">\r\n        <h2>Legacy of Innovation Powering Modern Unmanned Systems</h2>\r\n      </app-reveal>\r\n\r\n      <app-reveal [blur]="true">\r\n        <p class="text">\r\n          With over twenty years of experience, Feather Dynamics has evolved from a UAV specialist\r\n          into a pioneer of multi-domain unmanned systems. By leveraging patented technologies and\r\n          extensive expertise in both commercial and defense sectors, they now develop intelligent\r\n          solutions across land, air, sea, space, and cyber domains.\r\n        </p>\r\n      </app-reveal>\r\n      <app-reveal [blur]="true">\r\n        <img src="/assets/images/3.jpg" alt="UAV technology detail" />\r\n      </app-reveal>\r\n    </div>\r\n  </div>\r\n</section>\r\n', styles: ["/* src/app/shared/about-us/about-us.scss */\n:host {\n  display: block;\n}\n.about-us {\n  background: #000;\n  background-image: url(/assets/decos/aerial-deco-back-2.png);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  padding: 9rem 1.5rem;\n  color: #fff;\n}\n.container {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n.group {\n  width: 100%;\n}\n.group-left img {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  display: block;\n}\n.group-right {\n  margin-top: 2rem;\n}\n.group-right .label {\n  font-family: var(--font-secondary);\n  letter-spacing: 0.2rem;\n  display: block;\n  margin-bottom: 1rem;\n}\n.group-right h2 {\n  font-size: clamp(1.6rem, 5vw, 2.5rem);\n  line-height: 1.2;\n  margin-bottom: 1.5rem;\n  font-weight: 400;\n}\n.group-right p {\n  line-height: 1.6;\n  opacity: 0.8;\n  max-width: 100%;\n  margin-bottom: 2rem;\n}\n.group-right img {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  display: block;\n}\n@media (min-width: 992px) {\n  .container {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n  .group-left,\n  .group-right {\n    width: 50%;\n  }\n  .group-left img {\n    width: 210%;\n    height: 650px;\n  }\n  .group-right {\n    margin-top: 0;\n    padding-left: 4rem;\n  }\n  .group-right p {\n    max-width: 520px;\n  }\n  .group-right img {\n    height: 350px;\n  }\n}\n/*# sourceMappingURL=about-us.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutUs, { className: "AboutUs", filePath: "src/app/shared/about-us/about-us.ts", lineNumber: 10 });
})();

// src/app/shared/countup/countup.ts
var CountupComponent = class _CountupComponent {
  el;
  to;
  from = 0;
  duration = 2;
  delay = 0;
  decimals = 0;
  direction = "up";
  separator = "";
  startWhen = true;
  started = new EventEmitter();
  ended = new EventEmitter();
  /** Rendered server-side so the DOM matches what Angular hydrates */
  ssrValue = "";
  span;
  observer;
  animationFrame;
  isBrowser;
  constructor(el, platformId) {
    this.el = el;
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    const finalValue = this.direction === "down" ? this.from : this.to;
    if (!this.isBrowser) {
      this.ssrValue = this.formatValue(finalValue);
    } else {
      const startValue = this.direction === "down" ? this.to : this.from;
      this.ssrValue = this.formatValue(startValue);
    }
  }
  ngAfterViewInit() {
    if (!this.isBrowser)
      return;
    this.span = this.el.nativeElement.querySelector("span");
    this.initObserver();
  }
  initObserver() {
    if (!("IntersectionObserver" in window)) {
      this.startAnimation();
      return;
    }
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && this.startWhen) {
        this.startAnimation();
        this.observer?.disconnect();
      }
    }, { threshold: 0.3 });
    this.observer.observe(this.el.nativeElement);
  }
  startAnimation() {
    this.started.emit();
    const startValue = this.direction === "down" ? this.to : this.from;
    const endValue = this.direction === "down" ? this.from : this.to;
    const startTime = performance.now() + this.delay * 1e3;
    const durationMs = this.duration * 1e3;
    const animate = (time) => {
      if (time < startTime) {
        this.animationFrame = requestAnimationFrame(animate);
        return;
      }
      const linear = Math.min((time - startTime) / durationMs, 1);
      const progress = 1 - Math.pow(1 - linear, 3);
      this.updateSpan(startValue + (endValue - startValue) * progress);
      if (linear < 1) {
        this.animationFrame = requestAnimationFrame(animate);
      } else {
        this.ended.emit();
      }
    };
    this.animationFrame = requestAnimationFrame(animate);
  }
  updateSpan(value) {
    if (this.span) {
      this.span.textContent = this.formatValue(value);
    }
  }
  formatValue(value) {
    const dec = this.decimals > 0 ? this.decimals : this.getDecimalPlaces(this.to) > 0 || this.getDecimalPlaces(this.from) > 0 ? 1 : 0;
    const formatted = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: dec,
      maximumFractionDigits: dec
    }).format(value);
    return this.separator ? formatted.replace(/,/g, this.separator) : formatted;
  }
  getDecimalPlaces(num) {
    const str = num.toString();
    return str.includes(".") ? str.split(".")[1].length : 0;
  }
  ngOnDestroy() {
    if (this.animationFrame)
      cancelAnimationFrame(this.animationFrame);
    this.observer?.disconnect();
  }
  static \u0275fac = function CountupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CountupComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountupComponent, selectors: [["app-countup"]], inputs: { to: "to", from: "from", duration: "duration", delay: "delay", decimals: "decimals", direction: "direction", separator: "separator", startWhen: "startWhen" }, outputs: { started: "started", ended: "ended" }, decls: 2, vars: 1, template: function CountupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "span");
      \u0275\u0275text(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.ssrValue);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountupComponent, [{
    type: Component,
    args: [{
      selector: "app-countup",
      standalone: true,
      template: `<span>{{ ssrValue }}</span>`
    }]
  }], () => [{ type: ElementRef }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { to: [{
    type: Input
  }], from: [{
    type: Input
  }], duration: [{
    type: Input
  }], delay: [{
    type: Input
  }], decimals: [{
    type: Input
  }], direction: [{
    type: Input
  }], separator: [{
    type: Input
  }], startWhen: [{
    type: Input
  }], started: [{
    type: Output
  }], ended: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountupComponent, { className: "CountupComponent", filePath: "src/app/shared/countup/countup.ts", lineNumber: 20 });
})();

// src/app/shared/research-development/research-development.ts
function ResearchDevelopmentComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
}
var ResearchDevelopmentComponent = class _ResearchDevelopmentComponent {
  platformId;
  isBrowser = false;
  gridLines = Array(6).fill(0);
  constructor(platformId) {
    this.platformId = platformId;
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
  }
  static \u0275fac = function ResearchDevelopmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResearchDevelopmentComponent)(\u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResearchDevelopmentComponent, selectors: [["app-research-development"]], decls: 50, vars: 17, consts: [[3, "blur"], [1, "rd-section"], [1, "rd-image-panel"], [1, "rd-image-overlay"], [1, "rd-grid-lines"], [4, "ngFor", "ngForOf"], [1, "rd-content-panel"], [1, "rd-eyebrow", "text-lg"], [1, "rd-heading"], [1, "rd-heading__line"], [1, "rd-heading__line", "rd-heading__line--accent"], [1, "rd-divider"], [1, "rd-description"], [1, "rd-stats"], [1, "rd-stat"], [1, "rd-stat__value"], [3, "from", "to", "duration", "delay"], [1, "rd-stat__suffix"], [1, "rd-stat__label"], [1, "rd-tag"]], template: function ResearchDevelopmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-reveal", 0)(1, "section", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275template(5, ResearchDevelopmentComponent_span_5_Template, 1, 0, "span", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 6)(7, "app-reveal")(8, "div", 7);
      \u0275\u0275text(9, "RESEARCH & DEVELOPMENT");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "app-reveal")(11, "h2", 8)(12, "span", 9);
      \u0275\u0275text(13, "PUSHING");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 9);
      \u0275\u0275text(15, "THE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275text(17, "BOUNDARY");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(18, "div", 11);
      \u0275\u0275elementStart(19, "app-reveal")(20, "p", 12);
      \u0275\u0275text(21, " Our R&D division engineers next-generation IUVs at the intersection of autonomy, precision mechanics, and AI-driven decision systems. Every system we build is forged from first principles. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 13)(23, "app-reveal", 0)(24, "div", 14)(25, "div", 15);
      \u0275\u0275element(26, "app-countup", 16);
      \u0275\u0275elementStart(27, "span", 17);
      \u0275\u0275text(28, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 18);
      \u0275\u0275text(30, "Active Patents");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "app-reveal", 0)(32, "div", 14)(33, "div", 15);
      \u0275\u0275element(34, "app-countup", 16);
      \u0275\u0275elementStart(35, "span", 17);
      \u0275\u0275text(36, "ms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 18);
      \u0275\u0275text(38, "Response Latency");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "app-reveal", 0)(40, "div", 14)(41, "div", 15);
      \u0275\u0275element(42, "app-countup", 16);
      \u0275\u0275elementStart(43, "span", 17);
      \u0275\u0275text(44, "%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 18);
      \u0275\u0275text(46, "Precision Rate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(47, "div", 19)(48, "span");
      \u0275\u0275text(49, "IUV \xB7 AUTONOMOUS \xB7 AI");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.gridLines);
      \u0275\u0275advance(18);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("from", 0)("to", 14)("duration", 2)("delay", 0.3);
      \u0275\u0275advance(5);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("from", 0)("to", 200)("duration", 2)("delay", 0.5);
      \u0275\u0275advance(5);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("from", 0)("to", 98.7)("duration", 2.5)("delay", 0.7);
    }
  }, dependencies: [CommonModule, NgForOf, CountupComponent, RevealComponent], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.rd-section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 100vh;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  background: #000;\n  background-image: url(/assets/decos/aerial-deco-back-2.png);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.rd-image-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 55%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 10, 18, 0.6) 0%,\n      transparent 60%),\n    url(/assets/images/uav_6.png) center/cover no-repeat;\n  filter: grayscale(75%);\n}\n@media (max-width: 900px) {\n  .rd-image-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45%;\n    top: auto;\n    bottom: 0;\n    filter: grayscale(100%) brightness(0.4);\n  }\n}\n.rd-image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to right,\n      var(--color-black) 0%,\n      rgba(5, 10, 18, 0.5) 40%,\n      transparent 100%);\n}\n@media (max-width: 900px) {\n  .rd-image-overlay[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        to bottom,\n        var(--color-black) 0%,\n        rgba(5, 10, 18, 0.3) 50%,\n        transparent 100%);\n  }\n}\n.rd-grid-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  pointer-events: none;\n  opacity: 0.06;\n}\n.rd-grid-lines[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--color-white);\n}\n.rd-content-panel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 55%;\n  max-width: 640px;\n  padding: 5rem 3rem 5rem 6vw;\n  clip-path: polygon(0 0, calc(100% - 60px) 0, 100% 100%, 0 100%);\n}\n@media (max-width: 1100px) {\n  .rd-content-panel[_ngcontent-%COMP%] {\n    width: 65%;\n    padding: 4rem 3rem 4rem 4vw;\n  }\n}\n@media (max-width: 900px) {\n  .rd-content-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 3rem 1.5rem 10rem;\n    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 0px) 100%, 0 100%);\n  }\n}\n.rd-eyebrow[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  letter-spacing: 0.25em;\n  color: var(--color-white);\n  margin-bottom: 1rem;\n}\n.rd-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: clamp(3rem, 6vw, var(--text-2xl));\n  line-height: 0.95;\n  margin: 0 0 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rd-heading__line[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--color-white);\n  letter-spacing: 0.04em;\n}\n.rd-heading__line--accent[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.rd-divider[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 2px;\n  background: var(--color-accent);\n  margin-bottom: 1.75rem;\n}\n.rd-description[_ngcontent-%COMP%] {\n  font-family: var(--font-header);\n  font-size: var(--text);\n  color: var(--color-gray);\n  line-height: 1.7;\n  font-weight: 300;\n  max-width: 420px;\n  margin-bottom: 2.5rem;\n}\n.rd-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2.5rem;\n  margin-bottom: 2.75rem;\n  flex-wrap: wrap;\n}\n.rd-stat__value[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: var(--text-2xl);\n  color: var(--color-white);\n  line-height: 1;\n  letter-spacing: 0.02em;\n  position: relative;\n}\n.rd-stat__value[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: var(--color-accent);\n  margin-top: 0.3rem;\n}\n.rd-stat__label[_ngcontent-%COMP%] {\n  font-family: var(--font-header);\n  font-size: 0.85rem;\n  letter-spacing: 0.2em;\n  color: var(--color-gray);\n  margin-top: 0.5rem;\n  font-weight: 300;\n  text-transform: uppercase;\n}\n.rd-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  right: 2rem;\n  z-index: 3;\n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n  transform: rotate(180deg);\n}\n.rd-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-header);\n  font-size: 0.6rem;\n  letter-spacing: 0.25em;\n  color: rgba(255, 255, 255, 0.2);\n  font-weight: 300;\n}\n@media (max-width: 900px) {\n  .rd-tag[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=research-development.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResearchDevelopmentComponent, [{
    type: Component,
    args: [{ selector: "app-research-development", standalone: true, imports: [CommonModule, CountupComponent, RevealComponent], template: '<app-reveal [blur]="true">\r\n<section class="rd-section">\r\n    <!-- Offset background image panel -->\r\n        <div class="rd-image-panel">\r\n            <div class="rd-image-overlay"></div>\r\n            <div class="rd-grid-lines">\r\n                <span *ngFor="let i of gridLines"></span>\r\n            </div>\r\n        </div>\r\n\r\n    <!-- Content panel \u2014 overlaps the image -->\r\n    <div class="rd-content-panel">\r\n        <app-reveal>\r\n            <div class="rd-eyebrow text-lg">RESEARCH &amp; DEVELOPMENT</div>\r\n        </app-reveal>\r\n\r\n        <app-reveal>\r\n            <h2 class="rd-heading">\r\n                <span class="rd-heading__line">PUSHING</span>\r\n                <span class="rd-heading__line">THE</span>\r\n                <span class="rd-heading__line rd-heading__line--accent">BOUNDARY</span>\r\n            </h2>\r\n        </app-reveal>\r\n\r\n        <div class="rd-divider"></div>\r\n\r\n        <app-reveal>\r\n            <p class="rd-description">\r\n                Our R&amp;D division engineers next-generation IUVs at the intersection of\r\n                autonomy, precision mechanics, and AI-driven decision systems.\r\n                Every system we build is forged from first principles.\r\n            </p>\r\n        </app-reveal>\r\n\r\n        <div class="rd-stats">\r\n\r\n            <app-reveal [blur]="true">\r\n                <div class="rd-stat">\r\n                    <div class="rd-stat__value">\r\n                        <app-countup [from]="0" [to]="14" [duration]="2" [delay]="0.3"></app-countup><span\r\n                        class="rd-stat__suffix">+</span>\r\n                    </div>\r\n                    <div class="rd-stat__label">Active Patents</div>\r\n                </div>\r\n            </app-reveal>\r\n\r\n            <app-reveal [blur]="true">\r\n                <div class="rd-stat">\r\n                    <div class="rd-stat__value">\r\n                    <app-countup [from]="0" [to]="200" [duration]="2" [delay]="0.5"></app-countup><span\r\n                    class="rd-stat__suffix">ms</span>\r\n                </div>\r\n                <div class="rd-stat__label">Response Latency</div>\r\n            </div>\r\n        </app-reveal>\r\n\r\n            <app-reveal [blur]="true">\r\n                <div class="rd-stat">\r\n                    <div class="rd-stat__value">\r\n                        <app-countup [from]="0" [to]="98.7" [duration]="2.5" [delay]="0.7"></app-countup><span class="rd-stat__suffix">%</span>\r\n                    </div>\r\n                    <div class="rd-stat__label">Precision Rate</div>\r\n                </div>\r\n            </app-reveal>\r\n                \r\n        </div>\r\n    </div>\r\n\r\n    <!-- Floating label tag -->\r\n    <div class="rd-tag">\r\n        <span>IUV \xB7 AUTONOMOUS \xB7 AI</span>\r\n    </div>\r\n</section>\r\n    </app-reveal>', styles: ['/* src/app/shared/research-development/research-development.scss */\n:host {\n  display: block;\n}\n.rd-section {\n  position: relative;\n  width: 100%;\n  min-height: 100vh;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  background: #000;\n  background-image: url(/assets/decos/aerial-deco-back-2.png);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.rd-image-panel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 55%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(5, 10, 18, 0.6) 0%,\n      transparent 60%),\n    url(/assets/images/uav_6.png) center/cover no-repeat;\n  filter: grayscale(75%);\n}\n@media (max-width: 900px) {\n  .rd-image-panel {\n    width: 100%;\n    height: 45%;\n    top: auto;\n    bottom: 0;\n    filter: grayscale(100%) brightness(0.4);\n  }\n}\n.rd-image-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to right,\n      var(--color-black) 0%,\n      rgba(5, 10, 18, 0.5) 40%,\n      transparent 100%);\n}\n@media (max-width: 900px) {\n  .rd-image-overlay {\n    background:\n      linear-gradient(\n        to bottom,\n        var(--color-black) 0%,\n        rgba(5, 10, 18, 0.3) 50%,\n        transparent 100%);\n  }\n}\n.rd-grid-lines {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  pointer-events: none;\n  opacity: 0.06;\n}\n.rd-grid-lines span {\n  border-right: 1px solid var(--color-white);\n}\n.rd-content-panel {\n  position: relative;\n  z-index: 2;\n  width: 55%;\n  max-width: 640px;\n  padding: 5rem 3rem 5rem 6vw;\n  clip-path: polygon(0 0, calc(100% - 60px) 0, 100% 100%, 0 100%);\n}\n@media (max-width: 1100px) {\n  .rd-content-panel {\n    width: 65%;\n    padding: 4rem 3rem 4rem 4vw;\n  }\n}\n@media (max-width: 900px) {\n  .rd-content-panel {\n    width: 100%;\n    padding: 3rem 1.5rem 10rem;\n    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 0px) 100%, 0 100%);\n  }\n}\n.rd-eyebrow {\n  font-family: var(--font-secondary);\n  letter-spacing: 0.25em;\n  color: var(--color-white);\n  margin-bottom: 1rem;\n}\n.rd-heading {\n  font-family: var(--font-secondary);\n  font-size: clamp(3rem, 6vw, var(--text-2xl));\n  line-height: 0.95;\n  margin: 0 0 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rd-heading__line {\n  display: block;\n  color: var(--color-white);\n  letter-spacing: 0.04em;\n}\n.rd-heading__line--accent {\n  color: var(--color-accent);\n}\n.rd-divider {\n  width: 3rem;\n  height: 2px;\n  background: var(--color-accent);\n  margin-bottom: 1.75rem;\n}\n.rd-description {\n  font-family: var(--font-header);\n  font-size: var(--text);\n  color: var(--color-gray);\n  line-height: 1.7;\n  font-weight: 300;\n  max-width: 420px;\n  margin-bottom: 2.5rem;\n}\n.rd-stats {\n  display: flex;\n  gap: 2.5rem;\n  margin-bottom: 2.75rem;\n  flex-wrap: wrap;\n}\n.rd-stat__value {\n  font-family: var(--font-secondary);\n  font-size: var(--text-2xl);\n  color: var(--color-white);\n  line-height: 1;\n  letter-spacing: 0.02em;\n  position: relative;\n}\n.rd-stat__value::after {\n  content: "";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: var(--color-accent);\n  margin-top: 0.3rem;\n}\n.rd-stat__label {\n  font-family: var(--font-header);\n  font-size: 0.85rem;\n  letter-spacing: 0.2em;\n  color: var(--color-gray);\n  margin-top: 0.5rem;\n  font-weight: 300;\n  text-transform: uppercase;\n}\n.rd-tag {\n  position: absolute;\n  bottom: 2rem;\n  right: 2rem;\n  z-index: 3;\n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n  transform: rotate(180deg);\n}\n.rd-tag span {\n  font-family: var(--font-header);\n  font-size: 0.6rem;\n  letter-spacing: 0.25em;\n  color: rgba(255, 255, 255, 0.2);\n  font-weight: 300;\n}\n@media (max-width: 900px) {\n  .rd-tag {\n    display: none;\n  }\n}\n/*# sourceMappingURL=research-development.css.map */\n'] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResearchDevelopmentComponent, { className: "ResearchDevelopmentComponent", filePath: "src/app/shared/research-development/research-development.ts", lineNumber: 13 });
})();

// src/app/shared/darpa-banner/darpa-banner.ts
var DarpaBanner = class _DarpaBanner {
  static \u0275fac = function DarpaBanner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DarpaBanner)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DarpaBanner, selectors: [["app-darpa-banner"]], decls: 11, vars: 0, consts: [["routerLink", "/darpa-lift", 1, "darpa-banner"], [1, "darpa-banner__left"], [1, "darpa-banner__accent-bar"], [1, "darpa-banner__label"], [1, "darpa-banner__text"], [1, "darpa-banner__cta"], [1, "fa-solid", "fa-arrow-right"]], template: function DarpaBanner_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div")(4, "p", 3);
      \u0275\u0275text(5, "DARPA LIFT Challenge");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Follow our journey to the competition \u2014 see the latest updates");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, " Read Updates ");
      \u0275\u0275element(10, "i", 6);
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterModule, RouterLink], styles: ['\n.darpa-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n  padding: 2rem 10%;\n  background: var(--color-white);\n  text-decoration: none;\n  position: relative;\n  overflow: hidden;\n}\n.darpa-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      100deg,\n      transparent 0%,\n      rgba(4, 64, 178, 0.05) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  transition: transform 0.6s ease;\n}\n.darpa-banner[_ngcontent-%COMP%]:hover::before {\n  transform: translateX(100%);\n}\n.darpa-banner__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n.darpa-banner__accent-bar[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 2.5rem;\n  background: var(--color-accent);\n  flex-shrink: 0;\n}\n.darpa-banner__label[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.7rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  margin-bottom: 0.35rem;\n}\n.darpa-banner__text[_ngcontent-%COMP%] {\n  font-family: var(--font-header);\n  font-size: clamp(0.95rem, 1.8vw, 1.15rem);\n  font-weight: 500;\n  color: var(--color-black);\n  letter-spacing: 0.01em;\n}\n.darpa-banner__cta[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.72rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--color-black);\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  white-space: nowrap;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  padding: 0.65rem 1.4rem;\n  transition: border-color 0.25s, color 0.25s;\n}\n.darpa-banner__cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.25s;\n}\n.darpa-banner[_ngcontent-%COMP%]:hover   .darpa-banner__cta[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.darpa-banner[_ngcontent-%COMP%]:hover   .darpa-banner__cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: translateX(5px);\n}\n/*# sourceMappingURL=darpa-banner.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DarpaBanner, [{
    type: Component,
    args: [{ selector: "app-darpa-banner", imports: [RouterModule], template: '<a routerLink="/darpa-lift" class="darpa-banner">\n    <div class="darpa-banner__left">\n        <span class="darpa-banner__accent-bar"></span>\n        <div>\n            <p class="darpa-banner__label">DARPA LIFT Challenge</p>\n            <p class="darpa-banner__text">Follow our journey to the competition \u2014 see the latest updates</p>\n        </div>\n    </div>\n    <span class="darpa-banner__cta">\n        Read Updates <i class="fa-solid fa-arrow-right"></i>\n    </span>\n</a>\n', styles: ['/* src/app/shared/darpa-banner/darpa-banner.scss */\n.darpa-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n  padding: 2rem 10%;\n  background: var(--color-white);\n  text-decoration: none;\n  position: relative;\n  overflow: hidden;\n}\n.darpa-banner::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      100deg,\n      transparent 0%,\n      rgba(4, 64, 178, 0.05) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  transition: transform 0.6s ease;\n}\n.darpa-banner:hover::before {\n  transform: translateX(100%);\n}\n.darpa-banner__left {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n.darpa-banner__accent-bar {\n  width: 3px;\n  height: 2.5rem;\n  background: var(--color-accent);\n  flex-shrink: 0;\n}\n.darpa-banner__label {\n  font-family: var(--font-secondary);\n  font-size: 0.7rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  margin-bottom: 0.35rem;\n}\n.darpa-banner__text {\n  font-family: var(--font-header);\n  font-size: clamp(0.95rem, 1.8vw, 1.15rem);\n  font-weight: 500;\n  color: var(--color-black);\n  letter-spacing: 0.01em;\n}\n.darpa-banner__cta {\n  font-family: var(--font-secondary);\n  font-size: 0.72rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--color-black);\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  white-space: nowrap;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  padding: 0.65rem 1.4rem;\n  transition: border-color 0.25s, color 0.25s;\n}\n.darpa-banner__cta i {\n  transition: transform 0.25s;\n}\n.darpa-banner:hover .darpa-banner__cta {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.darpa-banner:hover .darpa-banner__cta i {\n  transform: translateX(5px);\n}\n/*# sourceMappingURL=darpa-banner.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DarpaBanner, { className: "DarpaBanner", filePath: "src/app/shared/darpa-banner/darpa-banner.ts", lineNumber: 10 });
})();

// src/app/core/services/seo.service.ts
var SeoService = class _SeoService {
  meta;
  title;
  router;
  doc;
  constructor(meta, title, router, doc) {
    this.meta = meta;
    this.title = title;
    this.router = router;
    this.doc = doc;
  }
  updateSeo(config) {
    const url = `https://featherdynamics.com${this.router.url}`;
    this.title.setTitle(config.title);
    this.setCanonical(url);
    const tags = [
      { name: "description", content: config.description },
      { name: "keywords", content: config.keywords || "" },
      { name: "robots", content: "index, follow" },
      // Open Graph
      { property: "og:title", content: config.title },
      { property: "og:description", content: config.description },
      { property: "og:url", content: url },
      { property: "og:type", content: config.type || "website" },
      { property: "og:image", content: config.image || "https://featherdynamics.com/assets/default-og.jpg" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: config.title },
      { name: "twitter:description", content: config.description },
      { name: "twitter:image", content: config.image || "https://featherdynamics.com/assets/default-og.jpg" }
    ];
    if (config.type === "article") {
      tags.push({ property: "article:published_time", content: config.publishedAt || "" }, { property: "article:author", content: config.author || "" });
    }
    tags.forEach((tag) => {
      if (tag.property) {
        this.meta.updateTag({ property: tag.property, content: tag.content });
      } else {
        this.meta.updateTag({ name: tag.name, content: tag.content });
      }
    });
  }
  setJsonLd(data, id = "default") {
    const existing = this.doc.querySelector(`script[type="application/ld+json"][data-id="${id}"]`);
    if (existing)
      existing.remove();
    const script = this.doc.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-id", id);
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
  removeJsonLd(id = "default") {
    const el = this.doc.querySelector(`script[type="application/ld+json"][data-id="${id}"]`);
    if (el)
      el.remove();
  }
  setCanonical(url) {
    let link = this.doc.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.doc.createElement("link");
      link.setAttribute("rel", "canonical");
      this.doc.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }
  // Call on route changes to clean stale tags
  removeArticleTags() {
    ["article:published_time", "article:author"].forEach((p) => this.meta.removeTag(`property='${p}'`));
  }
  getPageName(url) {
    switch (url) {
      case "/who-we-are":
        return "About";
      case "/what-we-do":
        return "Technology";
      case "/darpa-lift":
        return "DARPA Lift";
      case "/news":
        return "News";
      case "/contact-us":
        return "Contact";
      default:
        return "Home";
    }
  }
  generateBreadcrumbs() {
    const url = this.router.url;
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://featherdynamics.com"
      }
    ];
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": this.getPageName(url),
      "item": `https://featherdynamics.com${url}`
    });
    this.setJsonLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    }, "breadcrumb");
  }
  setOrganizationSchema() {
    this.setJsonLd({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Feather Dynamics",
      "url": "https://featherdynamics.com",
      "logo": "https://featherdynamics.com/assets/fdmetapic.jpg",
      "description": "Feather Dynamics develops intelligent UAV systems and adaptive flight technologies.",
      "foundingDate": "2025",
      "sameAs": [
        "https://www.linkedin.com/company/feather-dynamics"
      ],
      "contactPoint": [{
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "info@featherdynamics.com"
      }]
    }, "organization");
  }
  setWebsiteSchema() {
    this.setJsonLd({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Feather Dynamics",
      "url": "https://featherdynamics.com"
    }, "website");
  }
  static \u0275fac = function SeoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeoService)(\u0275\u0275inject(Meta), \u0275\u0275inject(Title), \u0275\u0275inject(Router), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Meta }, { type: Title }, { type: Router }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();

// src/app/pages/home/home.ts
var Home = class _Home {
  seo;
  constructor(seo) {
    this.seo = seo;
  }
  ngOnInit() {
    this.seo.updateSeo({
      title: "Feather Dynamics",
      description: "Feather Dynamics leads the industry in unmanned vehicle technology and autonomous systems. With 30 years of innovation, we deliver mission-driven design for commercial and defense applications. Explore our next-gen solutions today.",
      image: "https://featherdynamics.com/assets/fdmetapic.jpg",
      keywords: "unmanned vehicles, autonomous systems, UAV, defense technology, unmanned aerial systems, UAS, autonomous vehicle design, robotic defense systems, next-gen autonomous technology, mission-critical unmanned vehicles, commercial autonomous flight solutions, tactical UAV development, autonomous ISR, autonomous system integration, edge computing for unmanned systems, UAV payload engineering, multi-domain autonomous platforms, autonomous innovation, UAV manufacturers, defense applications, autonomous mission-driven development"
    });
    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Feather Dynamics",
          "url": "https://featherdynamics.com",
          "logo": "https://featherdynamics.com/assets/fdmetapic.jpg",
          "sameAs": [
            "https://www.linkedin.com/company/featherdynamics"
          ]
        },
        {
          "@type": "WebSite",
          "name": "Feather Dynamics",
          "url": "https://featherdynamics.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://featherdynamics.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      ]
    });
    this.seo.setOrganizationSchema();
    this.seo.setWebsiteSchema();
  }
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)(\u0275\u0275directiveInject(SeoService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], decls: 10, vars: 0, template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-hero")(1, "app-who-we-are")(2, "app-what-we-do")(3, "app-about-us")(4, "app-research-development")(5, "app-tag")(6, "app-blog")(7, "app-darpa-banner")(8, "app-partners")(9, "app-cta");
    }
  }, dependencies: [Hero, WhoWeAre, WhatWeDo, Cta, Partners, Tag, Blog, AboutUs, ResearchDevelopmentComponent, DarpaBanner], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", imports: [Hero, WhoWeAre, WhatWeDo, Cta, Partners, Tag, Blog, AboutUs, ResearchDevelopmentComponent, DarpaBanner], template: "<app-hero></app-hero>\r\n<app-who-we-are></app-who-we-are>\r\n<app-what-we-do></app-what-we-do>\r\n<app-about-us></app-about-us>\r\n<app-research-development></app-research-development>\r\n<app-tag></app-tag>\r\n<app-blog></app-blog>\r\n<app-darpa-banner></app-darpa-banner>\r\n<app-partners></app-partners>\r\n<app-cta></app-cta>" }]
  }], () => [{ type: SeoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/pages/home/home.ts", lineNumber: 20 });
})();

// src/app/shared/page-header/page-header.ts
var PageHeader = class _PageHeader {
  router;
  activatedRoute;
  bgImage = "";
  title = "";
  // manual title input
  breadcrumbs = [];
  isBrowser;
  constructor(router, activatedRoute, platformId) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.isBrowser = isPlatformBrowser(platformId);
    if (!this.isBrowser)
      return;
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.generateBreadcrumbs();
    });
  }
  generateBreadcrumbs() {
    const segments = [];
    let route = this.activatedRoute.root;
    while (route.firstChild) {
      route = route.firstChild;
      if (route.snapshot.url.length > 0) {
        segments.push(route.snapshot.url.map((s) => s.path).join("/"));
      }
    }
    this.breadcrumbs = segments.map((seg) => this.formatSegment(seg));
  }
  formatSegment(segment) {
    return segment.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
  }
  static \u0275fac = function PageHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageHeader)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageHeader, selectors: [["app-page-header"]], inputs: { bgImage: "bgImage", title: "title" }, decls: 13, vars: 6, consts: [[1, "page-header"], [1, "overlay"], [1, "title-row"], [3, "blur"], [1, "bracket"], [1, "content"], [1, "title"]], template: function PageHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "app-reveal", 3)(4, "span", 4);
      \u0275\u0275text(5, "[ ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "app-reveal", 3)(8, "h1", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "app-reveal", 3)(11, "span", 4);
      \u0275\u0275text(12, " ]");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("background-image", "url(" + ctx.bgImage + ")");
      \u0275\u0275advance(3);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("blur", true);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance();
      \u0275\u0275property("blur", true);
    }
  }, dependencies: [CommonModule, RevealComponent], styles: ['\n.page-header[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 375px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: inherit;\n  background-size: cover;\n  background-position: center;\n  filter: grayscale(100%);\n  z-index: 0;\n}\n.page-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.432);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.75rem;\n  position: relative;\n  z-index: 2;\n}\n.page-header[_ngcontent-%COMP%]   .bracket[_ngcontent-%COMP%] {\n  color: var(--accent-highlight);\n  font-weight: 500;\n  font-size: clamp(4rem, 9vw, 7rem);\n  margin-bottom: 0.2em;\n}\n.page-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem 2rem;\n}\n.page-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.2);\n  padding: 0.5rem 1rem;\n  font-size: clamp(1.8rem, 4vw, 3rem);\n  line-height: 1.2;\n  color: white;\n  margin-bottom: 0.5rem;\n  letter-spacing: 2px;\n}\n.page-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.25rem;\n  font-size: 0.95rem;\n  color: white;\n  flex-wrap: wrap;\n}\n.page-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0.25rem;\n}\n@media (max-width: 767px) {\n  .page-header[_ngcontent-%COMP%] {\n    min-height: 180px;\n  }\n  .page-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: clamp(1.5rem, 6vw, 2rem);\n  }\n  .page-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n/*# sourceMappingURL=page-header.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageHeader, [{
    type: Component,
    args: [{ selector: "app-page-header", imports: [CommonModule, RevealComponent], template: `<section class="page-header" [style.background-image]="'url(' + bgImage + ')'">\r
    <div class="overlay">\r
        <div class="title-row">\r
            <app-reveal [blur]="true">\r
                <span class="bracket">[ </span>\r
            </app-reveal>\r
            <div class="content">\r
                <app-reveal [blur]="true">\r
                    <h1 class="title">{{ title }}</h1>\r
                </app-reveal>\r
            </div>\r
\r
            <app-reveal [blur]="true">\r
                <span class="bracket"> ]</span>\r
            </app-reveal>\r
        </div>\r
    </div>\r
</section>`, styles: ['/* src/app/shared/page-header/page-header.scss */\n.page-header {\n  width: 100%;\n  min-height: 375px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-header::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: inherit;\n  background-size: cover;\n  background-position: center;\n  filter: grayscale(100%);\n  z-index: 0;\n}\n.page-header .overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.432);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n.page-header .title-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.75rem;\n  position: relative;\n  z-index: 2;\n}\n.page-header .bracket {\n  color: var(--accent-highlight);\n  font-weight: 500;\n  font-size: clamp(4rem, 9vw, 7rem);\n  margin-bottom: 0.2em;\n}\n.page-header .content {\n  text-align: center;\n  padding: 1rem 2rem;\n}\n.page-header .content .title {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.2);\n  padding: 0.5rem 1rem;\n  font-size: clamp(1.8rem, 4vw, 3rem);\n  line-height: 1.2;\n  color: white;\n  margin-bottom: 0.5rem;\n  letter-spacing: 2px;\n}\n.page-header .content .breadcrumbs {\n  display: flex;\n  justify-content: center;\n  gap: 0.25rem;\n  font-size: 0.95rem;\n  color: white;\n  flex-wrap: wrap;\n}\n.page-header .content .breadcrumbs span:not(:last-child) {\n  margin-right: 0.25rem;\n}\n@media (max-width: 767px) {\n  .page-header {\n    min-height: 180px;\n  }\n  .page-header .content .title {\n    font-size: clamp(1.5rem, 6vw, 2rem);\n  }\n  .page-header .content .breadcrumbs {\n    font-size: 0.85rem;\n  }\n}\n/*# sourceMappingURL=page-header.css.map */\n'] }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { bgImage: [{
    type: Input
  }], title: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageHeader, { className: "PageHeader", filePath: "src/app/shared/page-header/page-header.ts", lineNumber: 13 });
})();

// src/app/pages/news/news.ts
var _c08 = ["newsSidebar"];
var _c14 = ["newsCard"];
var _c22 = (a0, a1) => ["/news", a0, a1];
function News_div_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, ' for "');
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, '"');
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.searchTerm);
  }
}
function News_div_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " in ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r1.activeCategory));
  }
}
function News_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275template(3, News_div_4_ng_container_3_Template, 5, 1, "ng-container", 29)(4, News_div_4_ng_container_4_Template, 5, 3, "ng-container", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function News_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.clearSearch();
      ctx_r1.activeCategory = null;
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(6, " Clear filters ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.resultCount, " result", ctx_r1.resultCount !== 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeCategory);
  }
}
function News_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "span");
    \u0275\u0275text(2, "No articles found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 30);
    \u0275\u0275listener("click", function News_div_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.clearSearch();
      ctx_r1.activeCategory = null;
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(4, " Clear filters ");
    \u0275\u0275elementEnd()();
  }
}
function News_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32, 1)(2, "div", 33);
    \u0275\u0275element(3, "img", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "span", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "time", 39);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(10, _c22, item_r4.category, item_r4.slug));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r4.image, \u0275\u0275sanitizeUrl)("alt", item_r4.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.excerpt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 7, item_r4.publishedAt, "longDate"), " ");
  }
}
function News_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function News_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 41);
    \u0275\u0275element(2, "line", 42)(3, "line", 43);
    \u0275\u0275elementEnd()();
  }
}
function News_li_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 44);
    \u0275\u0275listener("click", function News_li_21_Template_li_click_0_listener() {
      const cat_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByCategory(cat_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeCategory === cat_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, cat_r7), " ");
  }
}
function News_li_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 45)(1, "a", 46)(2, "div", 47);
    \u0275\u0275element(3, "img", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 48)(5, "div", 49)(6, "span", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 51);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(9, _c22, item_r8.category, item_r8.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r8.image, \u0275\u0275sanitizeUrl)("alt", item_r8.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r8.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 6, item_r8.publishedAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.title);
  }
}
function News_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r9);
  }
}
var News = class _News {
  platformId;
  seo;
  newsService = inject(NewsService);
  cdr = inject(ChangeDetectorRef);
  newsCards;
  newsSidebar;
  news = [];
  filteredNews = [];
  categories = ["article", "announcement"];
  recentNews = [];
  tags = ["UAV", "Defense", "AI", "Aerial"];
  searchTerm = "";
  activeCategory = null;
  resultCount = 0;
  observer;
  debounceTimer = null;
  constructor(platformId, seo) {
    this.platformId = platformId;
    this.seo = seo;
    this.news = this.newsService.getAll();
    this.filteredNews = [...this.news];
    this.recentNews = this.news.slice(0, 5);
    this.resultCount = this.filteredNews.length;
  }
  ngOnInit() {
    this.seo.updateSeo({
      title: "News | Feathery Dynamics",
      description: "Stay updated on the latest breakthroughs from Feather Dynamics. From pioneering autonomous vehicle design to mission-critical defense technology, explore our recent news, project milestones, and three decades of innovation in unmanned systems.",
      keywords: "Feather Dynamics news, autonomous technology updates, unmanned systems breakthroughs, UAV industry milestones, defense technology press releases, next-gen autonomous vehicle launches, aerospace innovation news, mission-driven development updates, autonomous system flight tests, AI-driven defense solutions, physical AI integration, loyal wingman technology, edge computing resilience, multi-domain autonomous platforms, robotics engineering news, unmanned vehicle safety standards, strategic defense partnerships, autonomous ISR news, UAS pilot programs, drone-as-a-service (DaaS) expansion, 30 years of autonomous excellence."
    });
    this.seo.generateBreadcrumbs();
    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "News | Feather Dynamics",
      "url": "https://featherdynamics.com/news",
      "description": "Latest news from Feather Dynamics.",
      "publisher": {
        "@type": "Organization",
        "name": "Feather Dynamics",
        "url": "https://featherdynamics.com"
      }
    });
  }
  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId))
      return;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -60px 0px" });
    setTimeout(() => this.observeAll(), 100);
    this.newsCards.changes.subscribe(() => {
      setTimeout(() => this.observeAll(), 50);
    });
  }
  observeAll() {
    this.newsCards?.forEach((card) => {
      card.nativeElement.classList.remove("in-view");
      this.observer.observe(card.nativeElement);
    });
    if (this.newsSidebar?.nativeElement) {
      this.observer.observe(this.newsSidebar.nativeElement);
    }
  }
  onSearch(value) {
    this.searchTerm = value;
    if (this.debounceTimer)
      clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.applyFilters();
    }, 250);
  }
  clearSearch() {
    this.searchTerm = "";
  }
  filterByCategory(category) {
    this.activeCategory = this.activeCategory === category ? null : category;
    this.applyFilters();
  }
  applyFilters() {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredNews = this.news.filter((item) => {
      const matchesSearch = !term || item.title.toLowerCase().includes(term) || item.excerpt.toLowerCase().includes(term);
      const matchesCategory = !this.activeCategory || item.category === this.activeCategory;
      return matchesSearch && matchesCategory;
    });
    this.resultCount = this.filteredNews.length;
    this.cdr.detectChanges();
    setTimeout(() => this.observeAll(), 50);
  }
  get isFiltered() {
    return !!this.searchTerm.trim() || !!this.activeCategory;
  }
  trackBySlug(_, item) {
    return item.slug;
  }
  static \u0275fac = function News_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _News)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(SeoService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _News, selectors: [["app-news"]], viewQuery: function News_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c08, 5)(_c14, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.newsSidebar = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.newsCards = _t);
    }
  }, decls: 34, vars: 11, consts: [["newsSidebar", ""], ["newsCard", ""], [3, "title", "bgImage"], [1, "news-page"], [1, "news-page__inner"], [1, "news-list"], ["class", "news-results", 4, "ngIf"], ["class", "news-empty", 4, "ngIf"], ["class", "news-card", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "news-sidebar"], [1, "news-sidebar__inner"], [1, "sidebar-block"], [1, "sidebar-search-wrap"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6", 1, "sidebar-search-icon"], ["cx", "11", "cy", "11", "r", "7"], ["x1", "16.5", "y1", "16.5", "x2", "22", "y2", "22"], ["type", "text", "placeholder", "Search articles\u2026", 1, "sidebar-search", 3, "input", "value"], ["class", "sidebar-search-clear", "aria-label", "Clear search", 3, "click", 4, "ngIf"], [1, "sidebar-title"], [1, "sidebar-list"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "sidebar-recent"], ["class", "recent-item", 4, "ngFor", "ngForOf"], [1, "sidebar-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "sidebar-icon"], ["src", "/assets/logo-text-black.png", "alt", ""], [1, "news-results"], [1, "news-results__count"], [4, "ngIf"], [1, "news-results__clear", 3, "click"], [1, "news-empty"], [1, "news-card", 3, "routerLink"], [1, "news-card__image"], [3, "src", "alt"], [1, "news-card__content"], [1, "news-card__category"], [1, "news-card__title"], [1, "news-card__excerpt"], [1, "news-card__date"], ["aria-label", "Clear search", 1, "sidebar-search-clear", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [3, "click"], [1, "recent-item"], [1, "recent-item__link", 3, "routerLink"], [1, "recent-item__image"], [1, "recent-item__content"], [1, "recent-item__meta"], [1, "recent-item__category"], [1, "recent-item__date"], [1, "recent-item__title"], [1, "tag"]], template: function News_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-page-header", 2);
      \u0275\u0275elementStart(1, "section", 3)(2, "div", 4)(3, "div", 5);
      \u0275\u0275template(4, News_div_4_Template, 7, 4, "div", 6)(5, News_div_5_Template, 5, 0, "div", 7)(6, News_a_6_Template, 14, 13, "a", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "aside", 9, 0)(9, "div", 10)(10, "div", 11)(11, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 13);
      \u0275\u0275element(13, "circle", 14)(14, "line", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "input", 16);
      \u0275\u0275listener("input", function News_Template_input_input_15_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, News_button_16_Template, 4, 0, "button", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11)(18, "h3", 18);
      \u0275\u0275text(19, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "ul", 19);
      \u0275\u0275template(21, News_li_21_Template, 3, 5, "li", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 11)(23, "h3", 18);
      \u0275\u0275text(24, "Recent Posts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "ul", 21);
      \u0275\u0275template(26, News_li_26_Template, 13, 12, "li", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 11)(28, "h3", 18);
      \u0275\u0275text(29, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 23);
      \u0275\u0275template(31, News_span_31_Template, 2, 1, "span", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 25);
      \u0275\u0275element(33, "img", 26);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("title", "News")("bgImage", "/assets/images/uavmodel.jpg");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isFiltered);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredNews.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredNews)("ngForTrackBy", ctx.trackBySlug);
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.recentNews);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.tags);
    }
  }, dependencies: [PageHeader, CommonModule, NgForOf, NgIf, RouterModule, RouterLink, TitleCasePipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n.news-page[_ngcontent-%COMP%] {\n  padding: 4rem 1.5rem;\n  background: #fff;\n}\n.news-page__inner[_ngcontent-%COMP%] {\n  max-width: 1300px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 3rem;\n}\n.news-results[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #eaeaea;\n  animation: _ngcontent-%COMP%_fadeSlideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.news-results__count[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #666;\n  letter-spacing: 0.02em;\n}\n.news-results__count[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 500;\n}\n.news-results__clear[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: none;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0.35rem 0.7rem;\n  cursor: pointer;\n  font-family: var(--font-header);\n  color: #666;\n  transition: color 0.2s, border-color 0.2s;\n  white-space: nowrap;\n}\n.news-results__clear[_ngcontent-%COMP%]:hover {\n  color: #000;\n  border-color: #000;\n}\n.news-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 4rem 2rem;\n  text-align: center;\n  color: #666;\n  font-size: 0.95rem;\n  animation: _ngcontent-%COMP%_fadeSlideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.news-empty[_ngcontent-%COMP%]   .news-results__clear[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.news-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n.news-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  text-decoration: none;\n  color: inherit;\n  opacity: 0;\n  transform: translateY(28px);\n  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.news-card[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 0s;\n}\n.news-card[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 0.08s;\n}\n.news-card[_ngcontent-%COMP%]:nth-child(3) {\n  transition-delay: 0.14s;\n}\n.news-card[_ngcontent-%COMP%]:nth-child(4) {\n  transition-delay: 0.19s;\n}\n.news-card[_ngcontent-%COMP%]:nth-child(n+5) {\n  transition-delay: 0.23s;\n}\n.news-card.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.news-card__image[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.news-card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.news-card[_ngcontent-%COMP%]:hover   .news-card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.news-card__content[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.news-card__category[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  font-size: 0.7rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  background: var(--color-accent);\n  padding: 0.4rem 0.6rem;\n  color: white;\n}\n.news-card__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: #000;\n}\n.news-card__excerpt[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.6;\n  color: #666;\n}\n.news-card__date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #666;\n}\n.news-sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0;\n  transform: translateX(24px);\n  transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;\n}\n.news-sidebar.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.news-sidebar__inner[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\n.sidebar-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.sidebar-title[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  font-weight: 400;\n}\n.sidebar-search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  transition: border-color 0.2s;\n}\n.sidebar-search-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: #000;\n}\n.sidebar-search-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  color: #666;\n  flex-shrink: 0;\n  margin-right: 0.5rem;\n  pointer-events: none;\n  transition: color 0.2s;\n}\n.sidebar-search-wrap[_ngcontent-%COMP%]:focus-within   .sidebar-search-icon[_ngcontent-%COMP%] {\n  color: #000;\n}\n.sidebar-search[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.8rem 0;\n  border: none;\n  font-size: 1rem;\n  font-family: var(--font-header);\n  background: transparent;\n}\n.sidebar-search[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.sidebar-search[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n  transition: color 0.2s;\n}\n.sidebar-search[_ngcontent-%COMP%]:focus::placeholder {\n  color: #ccc;\n}\n.sidebar-search-clear[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  padding: 0.4rem;\n  cursor: pointer;\n  color: #666;\n  flex-shrink: 0;\n  transition: color 0.2s;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) both;\n}\n.sidebar-search-clear[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.sidebar-search-clear[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.sidebar-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.sidebar-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  cursor: pointer;\n  transition: color 0.2s, padding-left 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.sidebar-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: #000;\n  padding-left: 8px;\n  border-left: 1px solid #000;\n}\n.sidebar-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  background: #eaeaea;\n  padding: 0.3rem 0.5rem;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.sidebar-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  opacity: 0.5;\n}\n.sidebar-recent[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n.recent-item[_ngcontent-%COMP%] {\n  display: block;\n}\n.recent-item__link[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 64px 1fr;\n  gap: 0.8rem;\n  align-items: center;\n  text-decoration: none;\n  color: inherit;\n  transition: opacity 0.2s;\n}\n.recent-item__link[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.recent-item__image[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: #eaeaea;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.recent-item__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  filter: grayscale(100%);\n}\n.recent-item__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.3rem;\n}\n.recent-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.7rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #666;\n}\n.recent-item__category[_ngcontent-%COMP%] {\n  background: #eaeaea;\n  padding: 0.2rem 0.4rem;\n}\n.recent-item__title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1.4;\n  color: #000;\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_fadeSlideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@media (min-width: 992px) {\n  .news-page__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 2.5fr 1fr;\n    align-items: start;\n  }\n  .news-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1.2fr 1fr;\n  }\n  .news-card__content[_ngcontent-%COMP%] {\n    padding: 2.5rem;\n    justify-content: space-between;\n  }\n}\n/*# sourceMappingURL=news.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(News, [{
    type: Component,
    args: [{ selector: "app-news", standalone: true, imports: [PageHeader, CommonModule, RouterModule], template: `<app-page-header [title]="'News'" [bgImage]="'/assets/images/uavmodel.jpg'"></app-page-header>\r
\r
<section class="news-page">\r
    <div class="news-page__inner">\r
\r
        <!-- LEFT: News List -->\r
        <div class="news-list">\r
\r
            <!-- Result count bar -->\r
            <div class="news-results" *ngIf="isFiltered">\r
                <span class="news-results__count">\r
                    {{ resultCount }} result{{ resultCount !== 1 ? 's' : '' }}\r
                    <ng-container *ngIf="searchTerm"> for "<strong>{{ searchTerm }}</strong>"</ng-container>\r
                    <ng-container *ngIf="activeCategory"> in <strong>{{ activeCategory | titlecase\r
                            }}</strong></ng-container>\r
                </span>\r
                <button class="news-results__clear" (click)="clearSearch(); activeCategory = null; applyFilters()">\r
                    Clear filters\r
                </button>\r
            </div>\r
\r
            <!-- Empty state \u2014 show whenever list is empty -->\r
            <div class="news-empty" *ngIf="filteredNews.length === 0">\r
                <span>No articles found.</span>\r
                <button class="news-results__clear" (click)="clearSearch(); activeCategory = null; applyFilters()">\r
                    Clear filters\r
                </button>\r
            </div>\r
\r
            <a class="news-card" *ngFor="let item of filteredNews; trackBy: trackBySlug"\r
                [routerLink]="['/news', item.category, item.slug]" #newsCard>\r
\r
                <div class="news-card__image">\r
                    <img [src]="item.image" [alt]="item.title" />\r
                </div>\r
\r
                <div class="news-card__content">\r
                    <span class="news-card__category">{{ item.category }}</span>\r
                    <h2 class="news-card__title">{{ item.title }}</h2>\r
                    <p class="news-card__excerpt">{{ item.excerpt }}</p>\r
                    <time class="news-card__date">\r
                        {{ item.publishedAt | date:'longDate' }}\r
                    </time>\r
                </div>\r
            </a>\r
        </div>\r
\r
        <!-- RIGHT: Navigator -->\r
        <aside class="news-sidebar" #newsSidebar>\r
            <div class="news-sidebar__inner">\r
\r
                <!-- Search -->\r
                <div class="sidebar-block">\r
                    <div class="sidebar-search-wrap">\r
                        <svg class="sidebar-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                            stroke-width="1.6">\r
                            <circle cx="11" cy="11" r="7" />\r
                            <line x1="16.5" y1="16.5" x2="22" y2="22" />\r
                        </svg>\r
                        <input type="text" placeholder="Search articles\u2026" class="sidebar-search" [value]="searchTerm"\r
                            (input)="onSearch($any($event.target).value)" />\r
                        <button class="sidebar-search-clear" *ngIf="searchTerm" (click)="clearSearch()"\r
                            aria-label="Clear search">\r
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">\r
                                <line x1="18" y1="6" x2="6" y2="18" />\r
                                <line x1="6" y1="6" x2="18" y2="18" />\r
                            </svg>\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                <!-- Categories -->\r
                <div class="sidebar-block">\r
                    <h3 class="sidebar-title">Category</h3>\r
                    <ul class="sidebar-list">\r
                        <li *ngFor="let cat of categories" [class.active]="activeCategory === cat"\r
                            (click)="filterByCategory(cat)">\r
                            {{ cat | titlecase }}\r
                        </li>\r
                    </ul>\r
                </div>\r
\r
                <!-- Recent -->\r
                <div class="sidebar-block">\r
                    <h3 class="sidebar-title">Recent Posts</h3>\r
                    <ul class="sidebar-recent">\r
                        <li class="recent-item" *ngFor="let item of recentNews">\r
                            <a class="recent-item__link" [routerLink]="['/news', item.category, item.slug]">\r
                                <div class="recent-item__image">\r
                                    <img [src]="item.image" [alt]="item.title" />\r
                                </div>\r
                                <div class="recent-item__content">\r
                                    <div class="recent-item__meta">\r
                                        <span class="recent-item__category">{{ item.category }}</span>\r
                                        <span class="recent-item__date">{{ item.publishedAt | date:'mediumDate'\r
                                            }}</span>\r
                                    </div>\r
                                    <p class="recent-item__title">{{ item.title }}</p>\r
                                </div>\r
                            </a>\r
                        </li>\r
                    </ul>\r
                </div>\r
\r
                <!-- Tags -->\r
                <div class="sidebar-block">\r
                    <h3 class="sidebar-title">Tags</h3>\r
                    <div class="sidebar-tags">\r
                        <span class="tag" *ngFor="let tag of tags">{{ tag }}</span>\r
                    </div>\r
                </div>\r
\r
                <!-- Icon -->\r
                <div class="sidebar-icon">\r
                    <img src="/assets/logo-text-black.png" alt="" />\r
                </div>\r
\r
            </div>\r
        </aside>\r
\r
    </div>\r
</section>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/news/news.scss */\n.news-page {\n  padding: 4rem 1.5rem;\n  background: #fff;\n}\n.news-page__inner {\n  max-width: 1300px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 3rem;\n}\n.news-results {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #eaeaea;\n  animation: fadeSlideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.news-results__count {\n  font-size: 0.85rem;\n  color: #666;\n  letter-spacing: 0.02em;\n}\n.news-results__count strong {\n  color: #000;\n  font-weight: 500;\n}\n.news-results__clear {\n  font-size: 0.75rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: none;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0.35rem 0.7rem;\n  cursor: pointer;\n  font-family: var(--font-header);\n  color: #666;\n  transition: color 0.2s, border-color 0.2s;\n  white-space: nowrap;\n}\n.news-results__clear:hover {\n  color: #000;\n  border-color: #000;\n}\n.news-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 4rem 2rem;\n  text-align: center;\n  color: #666;\n  font-size: 0.95rem;\n  animation: fadeSlideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.news-empty .news-results__clear {\n  align-self: center;\n}\n.news-list {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n.news-card {\n  display: grid;\n  grid-template-columns: 1fr;\n  text-decoration: none;\n  color: inherit;\n  opacity: 0;\n  transform: translateY(28px);\n  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.news-card:nth-child(1) {\n  transition-delay: 0s;\n}\n.news-card:nth-child(2) {\n  transition-delay: 0.08s;\n}\n.news-card:nth-child(3) {\n  transition-delay: 0.14s;\n}\n.news-card:nth-child(4) {\n  transition-delay: 0.19s;\n}\n.news-card:nth-child(n+5) {\n  transition-delay: 0.23s;\n}\n.news-card.in-view {\n  opacity: 1;\n  transform: translateY(0);\n}\n.news-card__image {\n  overflow: hidden;\n}\n.news-card__image img {\n  width: 100%;\n  display: block;\n  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.news-card:hover .news-card__image img {\n  transform: scale(1.04);\n}\n.news-card__content {\n  background: #f4f4f4;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.news-card__category {\n  align-self: flex-start;\n  font-size: 0.7rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  background: var(--color-accent);\n  padding: 0.4rem 0.6rem;\n  color: white;\n}\n.news-card__title {\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: #000;\n}\n.news-card__excerpt {\n  font-size: 0.95rem;\n  line-height: 1.6;\n  color: #666;\n}\n.news-card__date {\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #666;\n}\n.news-sidebar {\n  position: relative;\n  opacity: 0;\n  transform: translateX(24px);\n  transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;\n}\n.news-sidebar.in-view {\n  opacity: 1;\n  transform: translateX(0);\n}\n.news-sidebar__inner {\n  position: sticky;\n  top: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\n.sidebar-block {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.sidebar-title {\n  font-family: var(--font-secondary);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  font-weight: 400;\n}\n.sidebar-search-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  transition: border-color 0.2s;\n}\n.sidebar-search-wrap:focus-within {\n  border-color: #000;\n}\n.sidebar-search-icon {\n  width: 15px;\n  height: 15px;\n  color: #666;\n  flex-shrink: 0;\n  margin-right: 0.5rem;\n  pointer-events: none;\n  transition: color 0.2s;\n}\n.sidebar-search-wrap:focus-within .sidebar-search-icon {\n  color: #000;\n}\n.sidebar-search {\n  flex: 1;\n  padding: 0.8rem 0;\n  border: none;\n  font-size: 1rem;\n  font-family: var(--font-header);\n  background: transparent;\n}\n.sidebar-search:focus {\n  outline: none;\n}\n.sidebar-search::placeholder {\n  color: #aaa;\n  transition: color 0.2s;\n}\n.sidebar-search:focus::placeholder {\n  color: #ccc;\n}\n.sidebar-search-clear {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  padding: 0.4rem;\n  cursor: pointer;\n  color: #666;\n  flex-shrink: 0;\n  transition: color 0.2s;\n  animation: fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) both;\n}\n.sidebar-search-clear svg {\n  width: 14px;\n  height: 14px;\n}\n.sidebar-search-clear:hover {\n  color: #000;\n}\n.sidebar-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.sidebar-list li {\n  font-size: 0.9rem;\n  color: #666;\n  cursor: pointer;\n  transition: color 0.2s, padding-left 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.sidebar-list li.active {\n  color: #000;\n  padding-left: 8px;\n  border-left: 1px solid #000;\n}\n.sidebar-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.tag {\n  font-size: 0.7rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  background: #eaeaea;\n  padding: 0.3rem 0.5rem;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.sidebar-icon img {\n  width: 120px;\n  opacity: 0.5;\n}\n.sidebar-recent {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n.recent-item {\n  display: block;\n}\n.recent-item__link {\n  display: grid;\n  grid-template-columns: 64px 1fr;\n  gap: 0.8rem;\n  align-items: center;\n  text-decoration: none;\n  color: inherit;\n  transition: opacity 0.2s;\n}\n.recent-item__link:hover {\n  opacity: 0.7;\n}\n.recent-item__image {\n  width: 64px;\n  height: 64px;\n  background: #eaeaea;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.recent-item__image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  filter: grayscale(100%);\n}\n.recent-item__content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.3rem;\n}\n.recent-item__meta {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.7rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #666;\n}\n.recent-item__category {\n  background: #eaeaea;\n  padding: 0.2rem 0.4rem;\n}\n.recent-item__title {\n  font-size: 0.85rem;\n  line-height: 1.4;\n  color: #000;\n  margin: 0;\n}\n@keyframes fadeSlideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@media (min-width: 992px) {\n  .news-page__inner {\n    grid-template-columns: 2.5fr 1fr;\n    align-items: start;\n  }\n  .news-card {\n    grid-template-columns: 1.2fr 1fr;\n  }\n  .news-card__content {\n    padding: 2.5rem;\n    justify-content: space-between;\n  }\n}\n/*# sourceMappingURL=news.css.map */\n'] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: SeoService }], { newsCards: [{
    type: ViewChildren,
    args: ["newsCard"]
  }], newsSidebar: [{
    type: ViewChild,
    args: ["newsSidebar"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(News, { className: "News", filePath: "src/app/pages/news/news.ts", lineNumber: 27 });
})();

// src/app/core/services/bento.service.ts
var BentoService = class _BentoService {
  getImages() {
    return [
      {
        src: "/assets/images/ril_p3.JPG",
        title: "Unmanned Dirigible National Security"
      },
      {
        src: "/assets/images/3.jpg",
        title: "DARPA Grand Challenge"
      },
      {
        src: "/assets/images/ril_p11.jpg",
        title: "Gen-1 3-Axis Gimbal"
      },
      {
        src: "/assets/images/ril_p1.jpg",
        title: "3-Axis EO-IR Dirigible"
      },
      {
        src: "/assets/images/fd_team.jpg",
        title: "Space & Missile Systems Center 2019"
      },
      {
        src: "/assets/images/ril_p6.JPG",
        title: "Gen-4 EO/IR Gimbal & Control Panel"
      },
      {
        src: "/assets/images/ril_p5.jpg",
        title: "Tethered Aerostat Aerial Imagery"
      },
      {
        src: "/assets/images/4.jpg",
        title: "20M UAV Dirigible National Security"
      },
      {
        src: "/assets/images/ril_p7.JPG",
        title: "EO/IR Gimbal Ground Control Panel"
      },
      {
        src: "/assets/images/ril_photo6.JPG",
        title: "Heavy-List Petrol Aerial Imagery"
      },
      {
        src: "/assets/images/ril_p2.jpg",
        title: "Aerial Research Aerostat"
      },
      {
        src: "/assets/images/1.jpg",
        title: "Ultralight 2-Axis Gimbal"
      },
      {
        src: "/assets/images/ril_p8.JPG",
        title: "UAV Petrol Configuration"
      },
      // {
      //     src: '/assets/images/fd_ceo.jpg',
      //     title: 'Air Force and Space Day 2018',
      // },
      {
        src: "/assets/images/ril_p14.png",
        title: "DARPA Grand Challenge Guide"
      },
      {
        src: "/assets/images/6.jpg",
        title: "Monterey CA Lab"
      },
      {
        src: "/assets/images/ril_p9.JPG",
        title: "Optical/IR Ground Control Panel"
      },
      {
        src: "/assets/images/2.jpg",
        title: "NASA Research Aims"
      },
      {
        src: "/assets/images/ril_p4.jpg",
        title: "Unmanned Helo Aerial Imagery"
      },
      {
        src: "/assets/images/5.jpg",
        title: "Stealth Single-Rotor UAV Recon"
      },
      {
        src: "/assets/images/ril_photo1.jpg",
        title: "First Electric Single-Rotor UAV"
      }
    ];
  }
  static \u0275fac = function BentoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BentoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BentoService, factory: _BentoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BentoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/scroll-reveal/scroll-reveal.ts
var _c09 = ["container"];
var _c15 = (a0, a1, a2) => ({ "max-width": a0, "margin-left": a1, "margin-right": a2 });
function ScrollRevealComponent_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 5);
  }
  if (rf & 2) {
    const word_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerHTML", word_r1, \u0275\u0275sanitizeHtml);
  }
}
function ScrollRevealComponent_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const word_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(word_r1);
  }
}
function ScrollRevealComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ScrollRevealComponent_ng_container_3_span_1_Template, 1, 1, "span", 3)(2, ScrollRevealComponent_ng_container_3_span_2_Template, 2, 1, "span", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const word_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !word_r1.trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", word_r1.trim());
  }
}
var ScrollRevealComponent = class _ScrollRevealComponent {
  containerRef;
  text = "";
  enableBlur = true;
  baseOpacity = 0.1;
  baseRotation = 3;
  blurStrength = 4;
  containerClassName = "";
  textClassName = "";
  rotationEnd = "bottom bottom";
  wordAnimationEnd = "bottom bottom";
  maxWidth = "100%";
  align = "left";
  isBrowser;
  triggers = [];
  constructor(platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      gsapWithCSS.registerPlugin(ScrollTrigger);
    }
  }
  get words() {
    return this.text.split(/(\s+)/);
  }
  ngAfterViewInit() {
    if (!this.isBrowser)
      return;
    const el = this.containerRef.nativeElement;
    const wordElements = el.querySelectorAll(".word");
    const rotationTween = gsapWithCSS.fromTo(el, { transformOrigin: "0% 50%", rotate: this.baseRotation }, {
      ease: "none",
      rotate: 0,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: this.rotationEnd,
        scrub: true
      }
    });
    this.triggers.push(rotationTween.scrollTrigger);
    const opacityTween = gsapWithCSS.fromTo(wordElements, { opacity: this.baseOpacity, willChange: "opacity" }, {
      ease: "none",
      opacity: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=20%",
        end: this.wordAnimationEnd,
        scrub: true
      }
    });
    this.triggers.push(opacityTween.scrollTrigger);
    if (this.enableBlur) {
      const blurTween = gsapWithCSS.fromTo(wordElements, { filter: `blur(${this.blurStrength}px)` }, {
        ease: "none",
        filter: "blur(0px)",
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=20%",
          end: this.wordAnimationEnd,
          scrub: true
        }
      });
      this.triggers.push(blurTween.scrollTrigger);
    }
  }
  ngOnDestroy() {
    this.triggers.forEach((trigger) => trigger.kill());
  }
  static \u0275fac = function ScrollRevealComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollRevealComponent)(\u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrollRevealComponent, selectors: [["app-scroll-reveal"]], viewQuery: function ScrollRevealComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c09, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerRef = _t.first);
    }
  }, inputs: { text: "text", enableBlur: "enableBlur", baseOpacity: "baseOpacity", baseRotation: "baseRotation", blurStrength: "blurStrength", containerClassName: "containerClassName", textClassName: "textClassName", rotationEnd: "rotationEnd", wordAnimationEnd: "wordAnimationEnd", maxWidth: "maxWidth", align: "align" }, decls: 4, vars: 12, consts: [["container", ""], [3, "ngStyle"], [4, "ngFor", "ngForOf"], [3, "innerHTML", 4, "ngIf"], ["class", "word", 4, "ngIf"], [3, "innerHTML"], [1, "word"]], template: function ScrollRevealComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 1, 0)(2, "p");
      \u0275\u0275template(3, ScrollRevealComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(\u0275\u0275interpolate1("scroll-reveal ", ctx.containerClassName));
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction3(8, _c15, ctx.maxWidth, ctx.align === "center" ? "auto" : null, ctx.align === "center" ? "auto" : null));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(\u0275\u0275interpolate1("scroll-reveal-text ", ctx.textClassName));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.words);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle], styles: ["\n.scroll-reveal[_ngcontent-%COMP%] {\n  margin: 4rem 1.5rem;\n}\n.scroll-reveal-text[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 4vw, 2.4rem);\n  line-height: 1.7;\n  letter-spacing: -0.01em;\n}\n.word[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=scroll-reveal.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollRevealComponent, [{
    type: Component,
    args: [{ selector: "app-scroll-reveal", standalone: true, imports: [CommonModule], template: `<h2 #container class="scroll-reveal {{ containerClassName }}" [ngStyle]="{\r
    'max-width': maxWidth,\r
    'margin-left': align === 'center' ? 'auto' : null,\r
    'margin-right': align === 'center' ? 'auto' : null\r
  }">\r
    <p class="scroll-reveal-text {{ textClassName }}">\r
        <ng-container *ngFor="let word of words">\r
            <span *ngIf="!word.trim()" [innerHTML]="word"></span>\r
            <span *ngIf="word.trim()" class="word">{{ word }}</span>\r
        </ng-container>\r
    </p>\r
</h2>`, styles: ["/* src/app/shared/scroll-reveal/scroll-reveal.scss */\n.scroll-reveal {\n  margin: 4rem 1.5rem;\n}\n.scroll-reveal-text {\n  font-size: clamp(1.6rem, 4vw, 2.4rem);\n  line-height: 1.7;\n  letter-spacing: -0.01em;\n}\n.word {\n  display: inline-block;\n}\n/*# sourceMappingURL=scroll-reveal.css.map */\n"] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { containerRef: [{
    type: ViewChild,
    args: ["container"]
  }], text: [{
    type: Input
  }], enableBlur: [{
    type: Input
  }], baseOpacity: [{
    type: Input
  }], baseRotation: [{
    type: Input
  }], blurStrength: [{
    type: Input
  }], containerClassName: [{
    type: Input
  }], textClassName: [{
    type: Input
  }], rotationEnd: [{
    type: Input
  }], wordAnimationEnd: [{
    type: Input
  }], maxWidth: [{
    type: Input
  }], align: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrollRevealComponent, { className: "ScrollRevealComponent", filePath: "src/app/shared/scroll-reveal/scroll-reveal.ts", lineNumber: 23 });
})();

// src/app/core/services/timeline.service.ts
var TimelineService = class _TimelineService {
  getItems() {
    return [
      {
        date: "2000",
        title: "Early Experimentation and First Flight",
        content: "Stemmed from a lifelong passion for aerospace, spanning rocket science to aircraft design, the foundation of the company was built on early experimentation and hands-on innovation. This interest led to the development of unmanned aircraft systems focused on security, surveillance, and aerial filming. The first milestone was the creation of a single-rotor UAV powered by a nitromethane engine, designed and deployed for aerial imagery. This early platform established the technical groundwork and mission-driven approach that would guide the evolution of more advanced unmanned systems in the years to follow.",
        image: "/assets/images/1.jpg"
      },
      {
        date: "2002",
        title: "Advancing Payload, Endurance, and Imaging",
        content: "With early success validating both the platform and mission, operations formally advanced with the establishment of a legal entity under the name Remote Intelligence Labs (RIL). This period marked a transition from experimentation to structured development and early commercialization. Building on initial learnings, the next generation was developed as a heavy-payload, single-rotor UAV powered by a petrol engine, significantly expanding lift capacity, endurance, and overall operational capability. In parallel, a  2-axis mechanically stabilized camera gimbal, utilizing a dual-flywheel system within a hermetically sealed chamber, was engineered to deliver smoother, higher-quality aerial imagery and improved reconnaissance performance. Together, these milestones represented a critical step toward scalable, mission-ready unmanned systems.",
        image: "/assets/images/2.jpg"
      },
      {
        date: "2004",
        title: "Part of a Defining Era in Autonomous Technology",
        content: "As capabilities matured, RIL entered the national innovation stage by participating in the 2004 Department of Advanced Research Program Agency (DARPA) Grand Challenge. This milestone marked the company\u2019s early involvement in advanced autonomous systems and complex unmanned operations, contributing to the broader evolution of autonomous vehicle technology. During this generation, RIL also achieved a significant technical breakthrough with the development of a 3-axis gyro\u2013stabilized electro-optical gimbal, dramatically improving stabilization, targeting accuracy, and imaging performance. These advancements further positioned the organization at the forefront of autonomous sensing and unmanned system development.",
        image: "/assets/images/3.jpg"
      },
      {
        date: "2006",
        title: "Scaling Capability Across Commercial and Defense Domains",
        content: "As unmanned systems matured, development advanced toward platforms and payloads optimized for both cinematic and defence applications. Some of the first electric-powered single-rotor UAV was introduced, delivering quieter operation, improved reliability, and enhanced suitability for sensitive filming environments as well as tactical missions. During this period, a more advanced generation of gyro-stabilized electro-optical gimbals was developed and deployed across UAV platforms and professional film productions, enabling smooth, high-fidelity imagery and precise sensor control. Defense capabilities expanded with the development of a gyro-stabilized two-axis weapons turret, supporting accurate integration of mission-critical payloads for security and tactical operations. In parallel, the company entered the electronic warfare domain, advancing payload integration and platform concepts designed to support sensing and countermeasure missions. This phase also included a collaboration with Lockheed Martin on an advanced weaponized VTOL UAV, marking a significant step into next-generation defense platforms and reinforcing the company\u2019s role in dual-use, electronic warfare, and military-grade unmanned systems.",
        image: "/assets/images/ril_photo4.JPG"
      },
      {
        date: "2008",
        title: "Commercial Scaling and Advanced Autonomous Systems",
        content: "Building on proven dual-use platforms, the company entered a phase of commercial scaling and advanced autonomy, expanding its technology portfolio into higher-reliability, mission-critical systems. During this period, an electronic remote camera control system was developed and adopted for specialized applications, including use by NASA Research Aims, demonstrating the adaptability and precision of the company\u2019s imaging and control technologies. This also saw the development of a 3-axis, fully stabilized and aerodynamic electro-optical gimbal, designed for high-performance surveillance and operational resilience in demanding environments. Complementing the gimbal, an advanced remote command panel was engineered to provide precise, real-time control of both gimbal and camera systems. Expanding platform versatility, an unmanned dirigible equipped with video surveillance gimbal was successfully deployed, showcasing long-endurance aerial surveillance capabilities and further advancing next-generation defense and commercial reconnaissance solutions.",
        image: "/assets/images/4.jpg"
      },
      {
        date: "2010",
        title: "Navigating Economic Disruption and Emerging Stronger",
        content: "Following this period of rapid advancement, the 2009 global recession introduced a temporary slowdown in development and deployment as market conditions tightened across both commercial and defense sectors. Despite these challenges, core research and strategic planning continued, preserving critical technical expertise and long-term vision. As market conditions recovered, the company re-emerged with renewed focus and rebranded as SIStem Laboratories (SIS Labs), signaling a strategic evolution toward advanced defense capabilities. Under this new identity, SIS Labs accelerated efforts to modernize unmanned aerial vehicles for defense applications, emphasizing robustness, integration, and next-generation mission readiness. This phase marked a resilient transition from early innovation into a more focused role supporting modern defense and security operations.",
        image: "/assets/images/5.jpg"
      },
      {
        date: "2020",
        title: "Resilience and Strategic Refocus",
        content: "After more than a decade dedicated to research and development across both commercial and defense sectors, the company entered a new chapter by rebranding as Feather Dynamics, reflecting a broader vision for the future of unmanned and autonomous flight. Alongside continued defense innovation, strategic focus expanded into Advanced Air Mobility (AAM), targeting next-generation logistics, cargo transport, and scalable aerial operations. To support this growth, Feather Dynamics established a new research and development laboratory at the decommissioned military airbase in Monterey, California, providing a dedicated environment for rapid prototyping, flight testing, and systems integration. This milestone marked the transition into a modern era of innovation, positioning the company at the intersection of autonomous air power, logistics, and advanced mobility solutions.",
        image: "/assets/images/6.jpg"
      },
      {
        date: "TODAY",
        title: "Strengthening Foundations for Modern Defense Systems",
        content: "Today, as the global security environment grows increasingly complex, from the ongoing conflict between Ukraine and Russia to escalating geopolitical tensions and emerging asymmetric threats facing the United States and its allied partners, Feather Dynamics has intensified its focus on defense innovation. The company is actively developing and deploying patent-pending, next-generation unmanned aerial systems engineered for modern and contested operational environments. These advanced UAVs deliver unmatched precision, agility, and mission adaptability, supporting intelligence, surveillance, reconnaissance, and tactical operations. In parallel, Feather Dynamics continues to advance unmanned logistics and transport platforms, designed to reliably deliver critical supplies to personnel on the ground in austere and high-risk conditions. This current phase underscores Feather Dynamics\u2019 commitment to strengthening national and allied defense capabilities through proprietary technology and forward-looking unmanned solutions built for today\u2019s evolving global threats.",
        image: "/assets/images/fd-skeleton.png"
      }
    ];
  }
  static \u0275fac = function TimelineService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TimelineService, factory: _TimelineService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/timeline-2/timeline-2.ts
var _c010 = ["timelineSection"];
var _c16 = ["spineFill"];
var _c23 = ["timelineItem"];
function Timeline2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10, 3)(2, "div", 11)(3, "div", 12);
    \u0275\u0275element(4, "img", 13)(5, "div", 14);
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 16)(9, "div", 17);
    \u0275\u0275element(10, "div", 18)(11, "div", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 20)(13, "div", 21);
    \u0275\u0275element(14, "div", 22);
    \u0275\u0275elementStart(15, "h3", 23);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 24);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275classProp("timeline2__item--odd", i_r2 % 2 === 0)("timeline2__item--even", i_r2 % 2 !== 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl)("alt", item_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.date);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.content);
  }
}
var Timeline2 = class _Timeline2 {
  timelineService;
  platformId;
  sectionRef;
  spineFill;
  itemRefs;
  items = [];
  isBrowser;
  scrollHandler;
  observer;
  constructor(timelineService, platformId) {
    this.timelineService = timelineService;
    this.platformId = platformId;
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.items = this.timelineService.getItems();
  }
  ngAfterViewInit() {
    if (!this.isBrowser)
      return;
    setTimeout(() => {
      this.initItemObserver();
      this.initSpineFill();
    }, 100);
  }
  ngOnDestroy() {
    if (this.isBrowser) {
      if (this.scrollHandler)
        window.removeEventListener("scroll", this.scrollHandler);
      if (this.observer)
        this.observer.disconnect();
    }
  }
  // ── Scroll-driven spine fill ──────────────────────────────────
  initSpineFill() {
    if (!this.spineFill?.nativeElement || !this.sectionRef?.nativeElement)
      return;
    this.scrollHandler = () => {
      const section = this.sectionRef.nativeElement;
      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      const total = rect.height + winH;
      const elapsed = winH - rect.top;
      const progress = Math.min(1, Math.max(0, elapsed / total));
      this.spineFill.nativeElement.style.height = `${progress * 100}%`;
    };
    window.addEventListener("scroll", this.scrollHandler, { passive: true });
    this.scrollHandler();
  }
  // ── Item reveal observer ──────────────────────────────────────
  initItemObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    this.itemRefs?.forEach((ref) => {
      if (ref?.nativeElement)
        this.observer.observe(ref.nativeElement);
    });
  }
  static \u0275fac = function Timeline2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Timeline2)(\u0275\u0275directiveInject(TimelineService), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Timeline2, selectors: [["app-timeline-2"]], viewQuery: function Timeline2_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c010, 5)(_c16, 5)(_c23, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sectionRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.spineFill = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemRefs = _t);
    }
  }, decls: 9, vars: 1, consts: [["timelineSection", ""], ["spine", ""], ["spineFill", ""], ["timelineItem", ""], [1, "timeline2"], [1, "timeline2__spine"], [1, "timeline2__spine-track"], [1, "timeline2__spine-fill"], [1, "timeline2__items"], ["class", "timeline2__item", 3, "timeline2__item--odd", "timeline2__item--even", 4, "ngFor", "ngForOf"], [1, "timeline2__item"], [1, "timeline2__image-col"], [1, "timeline2__image-wrap"], ["loading", "lazy", 1, "timeline2__image", 3, "src", "alt"], [1, "timeline2__image-veil"], [1, "timeline2__date-badge"], [1, "timeline2__node-col"], [1, "timeline2__node"], [1, "timeline2__node-dot"], [1, "timeline2__node-ring"], [1, "timeline2__content-col"], [1, "timeline2__content"], [1, "timeline2__content-rule"], [1, "timeline2__title"], [1, "timeline2__body"]], template: function Timeline2_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 4, 0)(2, "div", 5, 1);
      \u0275\u0275element(4, "div", 6)(5, "div", 7, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 8);
      \u0275\u0275template(8, Timeline2_div_8_Template, 19, 9, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.items);
    }
  }, dependencies: [CommonModule, NgForOf], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  background: var(--color-black);\n  font-family:\n    "Montserrat",\n    "Helvetica Neue",\n    sans-serif;\n}\n.timeline2[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 80px 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.timeline2__spine[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 1024px) {\n  .timeline2__spine[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 0;\n    bottom: 0;\n    width: 1px;\n    pointer-events: none;\n    z-index: 1;\n  }\n}\n.timeline2__spine-track[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.08);\n}\n.timeline2__spine-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0%;\n  background: var(--color-accent);\n  transition: height 0.1s linear;\n}\n.timeline2__items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 80px;\n}\n@media (min-width: 1024px) {\n  .timeline2__items[_ngcontent-%COMP%] {\n    gap: 0;\n  }\n}\n.timeline2__item[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 24px;\n  opacity: 0;\n  transform: translateY(32px);\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.timeline2__item.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n@media (min-width: 1024px) {\n  .timeline2__item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 80px 1fr;\n    align-items: center;\n    gap: 0;\n    padding: 60px 0;\n  }\n  .timeline2__item--odd[_ngcontent-%COMP%]   .timeline2__image-col[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 1;\n  }\n  .timeline2__item--odd[_ngcontent-%COMP%]   .timeline2__node-col[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row: 1;\n  }\n  .timeline2__item--odd[_ngcontent-%COMP%]   .timeline2__content-col[_ngcontent-%COMP%] {\n    grid-column: 3;\n    grid-row: 1;\n  }\n  .timeline2__item--odd[_ngcontent-%COMP%]   .timeline2__image-wrap[_ngcontent-%COMP%] {\n    opacity: 0;\n    transform: translateX(-40px);\n    transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1) 0.05s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.05s;\n  }\n  .timeline2__item--odd[_ngcontent-%COMP%]   .timeline2__content[_ngcontent-%COMP%] {\n    opacity: 0;\n    transform: translateX(40px);\n    transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;\n    padding-left: 48px;\n    padding-right: 0;\n  }\n  .timeline2__item--odd.in-view[_ngcontent-%COMP%]   .timeline2__image-wrap[_ngcontent-%COMP%], \n   .timeline2__item--odd.in-view[_ngcontent-%COMP%]   .timeline2__content[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  .timeline2__item--even[_ngcontent-%COMP%]   .timeline2__image-col[_ngcontent-%COMP%] {\n    grid-column: 3;\n    grid-row: 1;\n  }\n  .timeline2__item--even[_ngcontent-%COMP%]   .timeline2__node-col[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row: 1;\n  }\n  .timeline2__item--even[_ngcontent-%COMP%]   .timeline2__content-col[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 1;\n  }\n  .timeline2__item--even[_ngcontent-%COMP%]   .timeline2__image-wrap[_ngcontent-%COMP%] {\n    opacity: 0;\n    transform: translateX(40px);\n    transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1) 0.05s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.05s;\n  }\n  .timeline2__item--even[_ngcontent-%COMP%]   .timeline2__content[_ngcontent-%COMP%] {\n    opacity: 0;\n    transform: translateX(-40px);\n    transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;\n    text-align: right;\n    padding-right: 48px;\n    padding-left: 0;\n  }\n  .timeline2__item--even.in-view[_ngcontent-%COMP%]   .timeline2__image-wrap[_ngcontent-%COMP%], \n   .timeline2__item--even.in-view[_ngcontent-%COMP%]   .timeline2__content[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  .timeline2__item--even[_ngcontent-%COMP%]   .timeline2__content-rule[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: 0;\n  }\n}\n.timeline2__image-col[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.timeline2__image-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n}\n@media (min-width: 1024px) {\n  .timeline2__image-wrap[_ngcontent-%COMP%] {\n    aspect-ratio: 16/10;\n  }\n}\n.timeline2__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  filter: grayscale(30%) brightness(0.6);\n  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.timeline2__item[_ngcontent-%COMP%]:hover   .timeline2__image[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n  filter: grayscale(0%) brightness(0.8);\n}\n.timeline2__image-veil[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.5) 0%,\n      transparent 60%);\n  pointer-events: none;\n}\n.timeline2__date-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  font-family: var(--font-display);\n  font-size: var(--text-xl);\n  font-weight: 400;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n  background: var(--color-accent);\n  padding: 6px 20px 4px;\n  line-height: 1;\n  pointer-events: none;\n}\n.timeline2__node-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n}\n@media (min-width: 1024px) {\n  .timeline2__node-col[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n}\n.timeline2__node[_ngcontent-%COMP%] {\n  position: relative;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.timeline2__node-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--color-accent);\n  position: relative;\n  z-index: 2;\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.timeline2__node-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -4px;\n  border: 1px solid var(--color-accent);\n  opacity: 0;\n  transform: scale(0.6);\n  transition: opacity 0.3s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.timeline2__item.in-view[_ngcontent-%COMP%]   .timeline2__node-ring[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  transform: scale(1);\n}\n.timeline2__item[_ngcontent-%COMP%]:hover   .timeline2__node-dot[_ngcontent-%COMP%] {\n  transform: scale(1.5);\n}\n.timeline2__item[_ngcontent-%COMP%]:hover   .timeline2__node-ring[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.timeline2__content-col[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.timeline2__content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n@media (min-width: 1024px) {\n  .timeline2__content[_ngcontent-%COMP%] {\n    padding-left: 48px;\n  }\n}\n.timeline2__content-rule[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 1px;\n  background: var(--color-accent);\n  margin-bottom: 20px;\n}\n.timeline2__title[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: var(--text-xl);\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  color: #f1f5f9;\n  line-height: 1;\n  margin: 0 0 20px;\n}\n.timeline2__body[_ngcontent-%COMP%] {\n  font-size: var(--text);\n  line-height: 1.85;\n  color: #94a3b8;\n  font-weight: 300;\n  margin: 0;\n}\n@media (max-width: 1023px) {\n  .timeline2__node-col[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .timeline2__item--even[_ngcontent-%COMP%]   .timeline2__content[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n@media (min-width: 640px) {\n  .timeline2[_ngcontent-%COMP%] {\n    padding: 100px 48px;\n  }\n}\n@media (min-width: 1440px) {\n  .timeline2[_ngcontent-%COMP%] {\n    padding: 120px 80px;\n  }\n}\n/*# sourceMappingURL=timeline-2.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Timeline2, [{
    type: Component,
    args: [{ selector: "app-timeline-2", standalone: true, imports: [CommonModule], template: '<section class="timeline2" #timelineSection>\r\n\r\n    <!-- Vertical spine -->\r\n    <div class="timeline2__spine" #spine>\r\n        <div class="timeline2__spine-track"></div>\r\n        <div class="timeline2__spine-fill" #spineFill></div>\r\n    </div>\r\n\r\n    <!-- Items -->\r\n    <div class="timeline2__items">\r\n        <div *ngFor="let item of items; let i = index" class="timeline2__item"\r\n            [class.timeline2__item--odd]="i % 2 === 0" [class.timeline2__item--even]="i % 2 !== 0" #timelineItem>\r\n\r\n            <!-- Image side -->\r\n            <div class="timeline2__image-col">\r\n                <div class="timeline2__image-wrap">\r\n                    <img [src]="item.image" [alt]="item.title" class="timeline2__image" loading="lazy" />\r\n                    <div class="timeline2__image-veil"></div>\r\n                    <!-- Date badge overlapping image -->\r\n                    <div class="timeline2__date-badge">{{ item.date }}</div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Node on the spine -->\r\n            <div class="timeline2__node-col">\r\n                <div class="timeline2__node">\r\n                    <div class="timeline2__node-dot"></div>\r\n                    <div class="timeline2__node-ring"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Content side -->\r\n            <div class="timeline2__content-col">\r\n                <div class="timeline2__content">\r\n                    <div class="timeline2__content-rule"></div>\r\n                    <h3 class="timeline2__title">{{ item.title }}</h3>\r\n                    <p class="timeline2__body">{{ item.content }}</p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</section>', styles: ['/* src/app/shared/timeline-2/timeline-2.scss */\n:host {\n  display: block;\n  background: var(--color-black);\n  font-family:\n    "Montserrat",\n    "Helvetica Neue",\n    sans-serif;\n}\n.timeline2 {\n  position: relative;\n  padding: 80px 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.timeline2__spine {\n  display: none;\n}\n@media (min-width: 1024px) {\n  .timeline2__spine {\n    display: block;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 0;\n    bottom: 0;\n    width: 1px;\n    pointer-events: none;\n    z-index: 1;\n  }\n}\n.timeline2__spine-track {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.08);\n}\n.timeline2__spine-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0%;\n  background: var(--color-accent);\n  transition: height 0.1s linear;\n}\n.timeline2__items {\n  display: flex;\n  flex-direction: column;\n  gap: 80px;\n}\n@media (min-width: 1024px) {\n  .timeline2__items {\n    gap: 0;\n  }\n}\n.timeline2__item {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 24px;\n  opacity: 0;\n  transform: translateY(32px);\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.timeline2__item.in-view {\n  opacity: 1;\n  transform: translateY(0);\n}\n@media (min-width: 1024px) {\n  .timeline2__item {\n    grid-template-columns: 1fr 80px 1fr;\n    align-items: center;\n    gap: 0;\n    padding: 60px 0;\n  }\n  .timeline2__item--odd .timeline2__image-col {\n    grid-column: 1;\n    grid-row: 1;\n  }\n  .timeline2__item--odd .timeline2__node-col {\n    grid-column: 2;\n    grid-row: 1;\n  }\n  .timeline2__item--odd .timeline2__content-col {\n    grid-column: 3;\n    grid-row: 1;\n  }\n  .timeline2__item--odd .timeline2__image-wrap {\n    opacity: 0;\n    transform: translateX(-40px);\n    transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1) 0.05s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.05s;\n  }\n  .timeline2__item--odd .timeline2__content {\n    opacity: 0;\n    transform: translateX(40px);\n    transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;\n    padding-left: 48px;\n    padding-right: 0;\n  }\n  .timeline2__item--odd.in-view .timeline2__image-wrap,\n  .timeline2__item--odd.in-view .timeline2__content {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  .timeline2__item--even .timeline2__image-col {\n    grid-column: 3;\n    grid-row: 1;\n  }\n  .timeline2__item--even .timeline2__node-col {\n    grid-column: 2;\n    grid-row: 1;\n  }\n  .timeline2__item--even .timeline2__content-col {\n    grid-column: 1;\n    grid-row: 1;\n  }\n  .timeline2__item--even .timeline2__image-wrap {\n    opacity: 0;\n    transform: translateX(40px);\n    transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1) 0.05s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.05s;\n  }\n  .timeline2__item--even .timeline2__content {\n    opacity: 0;\n    transform: translateX(-40px);\n    transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;\n    text-align: right;\n    padding-right: 48px;\n    padding-left: 0;\n  }\n  .timeline2__item--even.in-view .timeline2__image-wrap,\n  .timeline2__item--even.in-view .timeline2__content {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  .timeline2__item--even .timeline2__content-rule {\n    margin-left: auto;\n    margin-right: 0;\n  }\n}\n.timeline2__image-col {\n  width: 100%;\n}\n.timeline2__image-wrap {\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n}\n@media (min-width: 1024px) {\n  .timeline2__image-wrap {\n    aspect-ratio: 16/10;\n  }\n}\n.timeline2__image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  filter: grayscale(30%) brightness(0.6);\n  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.timeline2__item:hover .timeline2__image {\n  transform: scale(1.04);\n  filter: grayscale(0%) brightness(0.8);\n}\n.timeline2__image-veil {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.5) 0%,\n      transparent 60%);\n  pointer-events: none;\n}\n.timeline2__date-badge {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  font-family: var(--font-display);\n  font-size: var(--text-xl);\n  font-weight: 400;\n  letter-spacing: 0.05em;\n  color: #ffffff;\n  background: var(--color-accent);\n  padding: 6px 20px 4px;\n  line-height: 1;\n  pointer-events: none;\n}\n.timeline2__node-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n}\n@media (min-width: 1024px) {\n  .timeline2__node-col {\n    grid-column: 2;\n  }\n}\n.timeline2__node {\n  position: relative;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.timeline2__node-dot {\n  width: 8px;\n  height: 8px;\n  background: var(--color-accent);\n  position: relative;\n  z-index: 2;\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.timeline2__node-ring {\n  position: absolute;\n  inset: -4px;\n  border: 1px solid var(--color-accent);\n  opacity: 0;\n  transform: scale(0.6);\n  transition: opacity 0.3s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.timeline2__item.in-view .timeline2__node-ring {\n  opacity: 0.4;\n  transform: scale(1);\n}\n.timeline2__item:hover .timeline2__node-dot {\n  transform: scale(1.5);\n}\n.timeline2__item:hover .timeline2__node-ring {\n  opacity: 1;\n}\n.timeline2__content-col {\n  width: 100%;\n}\n.timeline2__content {\n  padding: 0;\n}\n@media (min-width: 1024px) {\n  .timeline2__content {\n    padding-left: 48px;\n  }\n}\n.timeline2__content-rule {\n  width: 36px;\n  height: 1px;\n  background: var(--color-accent);\n  margin-bottom: 20px;\n}\n.timeline2__title {\n  font-family: var(--font-secondary);\n  font-size: var(--text-xl);\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  color: #f1f5f9;\n  line-height: 1;\n  margin: 0 0 20px;\n}\n.timeline2__body {\n  font-size: var(--text);\n  line-height: 1.85;\n  color: #94a3b8;\n  font-weight: 300;\n  margin: 0;\n}\n@media (max-width: 1023px) {\n  .timeline2__node-col {\n    display: none;\n  }\n  .timeline2__item--even .timeline2__content {\n    text-align: left;\n  }\n}\n@media (min-width: 640px) {\n  .timeline2 {\n    padding: 100px 48px;\n  }\n}\n@media (min-width: 1440px) {\n  .timeline2 {\n    padding: 120px 80px;\n  }\n}\n/*# sourceMappingURL=timeline-2.css.map */\n'] }]
  }], () => [{ type: TimelineService }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { sectionRef: [{
    type: ViewChild,
    args: ["timelineSection"]
  }], spineFill: [{
    type: ViewChild,
    args: ["spineFill"]
  }], itemRefs: [{
    type: ViewChildren,
    args: ["timelineItem"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Timeline2, { className: "Timeline2", filePath: "src/app/shared/timeline-2/timeline-2.ts", lineNumber: 23 });
})();

// src/app/pages/who/who.ts
var _c011 = ["bentoContainer"];
function Who_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(image_r1.title);
  }
}
function Who_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "img", 8)(2, "div", 9);
    \u0275\u0275template(3, Who_div_4_div_3_Template, 3, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275attribute("data-index", i_r2);
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r1.src, \u0275\u0275sanitizeUrl)("alt", image_r1.title || "UAV Image");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", image_r1.title);
  }
}
var Who = class _Who {
  seo;
  platformId = inject(PLATFORM_ID);
  bentoService = inject(BentoService);
  constructor(seo) {
    this.seo = seo;
  }
  bentoContainer;
  images = this.bentoService.getImages();
  isBrowser = isPlatformBrowser(this.platformId);
  observer = null;
  ngOnInit() {
    this.seo.updateSeo({
      title: "Who We Are | Feather Dynamics",
      description: "Feather Dynamics is a next-generation defense technology company developing revolutionary unmanned aerial platforms. Learn about our mission, values, and commitment to advancing autonomous systems for military and commercial applications.",
      keywords: "Feather Dynamics, who we are, defense technology company, unmanned aerial platforms, autonomous systems, UAV development, next-generation robotics, military technology innovation, aerospace engineering, defense contractors, autonomous vehicle technology, unmanned aircraft systems, tactical UAV development, defense applications, autonomous ISR, mission-critical systems, edge computing for defense, multi-domain platforms, autonomous innovation, UAV payload engineering, strategic defense partnerships, loyal wingman technology, autonomous flight solutions, 30 years of defense excellence"
    });
    this.seo.generateBreadcrumbs();
    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Who We Are | Feather Dynamics",
      "url": "https://featherdynamics.com/who-we-are",
      "description": "Learn about the team and mission behind Feather Dynamics.",
      "publisher": {
        "@type": "Organization",
        "name": "Feather Dynamics",
        "url": "https://featherdynamics.com"
      }
    });
  }
  ngAfterViewInit() {
    if (!this.isBrowser)
      return;
    const items = this.bentoContainer.nativeElement.querySelectorAll(".bento__item");
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const index = Number(el.dataset["index"] ?? 0);
          setTimeout(() => {
            el.classList.add("is-visible");
          }, index * 60);
          this.observer?.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    items.forEach((item) => this.observer.observe(item));
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  static \u0275fac = function Who_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Who)(\u0275\u0275directiveInject(SeoService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Who, selectors: [["app-who"]], viewQuery: function Who_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c011, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bentoContainer = _t.first);
    }
  }, decls: 9, vars: 7, consts: [["bentoContainer", ""], [3, "title", "bgImage"], [1, "bento"], [1, "bento__container"], ["class", "bento__item", 4, "ngFor", "ngForOf"], [1, "who-desc"], ["text", "Feather Dynamics has been advancing unmanned systems for more than two decades, evolving from early UAV platforms and advanced payload integration to the development of transformative, next-generation technologies. Building on deep experience in both commercial and defense programs, the company now pioneers patented capabilities that extend across land, air, sea, space, and cyber domains\u2014enabling a new class of intelligent, multi-domain systems designed for future operational challenges.", "containerClassName", "who-reveal", "textClassName", "who-reveal__text", 3, "enableBlur", "baseOpacity", "baseRotation", "maxWidth"], [1, "bento__item"], ["loading", "lazy", 3, "src", "alt"], [1, "bento__overlay"], ["class", "bento__content", 4, "ngIf"], [1, "bento__content"], [1, "bento__title"]], template: function Who_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-page-header", 1);
      \u0275\u0275elementStart(1, "section", 2)(2, "div", 3, 0);
      \u0275\u0275template(4, Who_div_4_Template, 4, 4, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275element(6, "app-scroll-reveal", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "app-timeline-2")(8, "app-cta");
    }
    if (rf & 2) {
      \u0275\u0275property("title", "Who We Are")("bgImage", "/assets/images/uav_9.png");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.images);
      \u0275\u0275advance(2);
      \u0275\u0275property("enableBlur", true)("baseOpacity", 0.15)("baseRotation", 2)("maxWidth", "1400px");
    }
  }, dependencies: [PageHeader, CommonModule, NgForOf, NgIf, ScrollRevealComponent, Timeline2, Cta], styles: ["\n.bento[_ngcontent-%COMP%] {\n  padding: 5rem 1.5rem;\n  background: var(--color-black);\n  color: var(--color-white);\n}\n.bento__container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.75rem;\n}\n.bento__item[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n  opacity: 0;\n  transform: translateY(40px);\n  transition: opacity 0.7s ease, transform 0.7s ease;\n}\n.bento__item.is-visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.bento[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: grayscale(100%);\n  display: block;\n  transition: transform 0.6s ease, filter 0.5s ease;\n}\n.bento__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.75),\n      rgba(0, 0, 0, 0.2),\n      transparent);\n  z-index: 1;\n}\n.bento__content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.25rem;\n  left: 1.25rem;\n  right: 1.25rem;\n  z-index: 2;\n  transition: opacity 0.4s ease, transform 0.4s ease;\n}\n.bento__title[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 1.1rem;\n  font-weight: 300;\n  letter-spacing: 0.04em;\n  line-height: 1.4;\n}\n@media (hover: hover) and (pointer: fine) {\n  .bento__content[_ngcontent-%COMP%] {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  .bento__item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    transform: scale(1.05);\n    filter: grayscale(0);\n  }\n  .bento__item[_ngcontent-%COMP%]:hover   .bento__content[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (min-width: 768px) {\n  .bento__container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .bento[_ngcontent-%COMP%] {\n    padding: 5rem 2rem;\n  }\n  .bento__container[_ngcontent-%COMP%] {\n    max-width: 1400px;\n    grid-template-columns: repeat(12, 1fr);\n    grid-auto-rows: 200px;\n    grid-auto-flow: dense;\n    gap: 0.75rem;\n  }\n  .bento__item[_ngcontent-%COMP%] {\n    aspect-ratio: unset;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(1) {\n    grid-column: span 6;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(2) {\n    grid-column: span 3;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(3) {\n    grid-column: span 3;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(4) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(5) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(6) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(7) {\n    grid-column: span 5;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(8) {\n    grid-column: span 3;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(9) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(10) {\n    grid-column: span 3;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(11) {\n    grid-column: span 3;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(12) {\n    grid-column: span 6;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(13) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(14) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(15) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(16) {\n    grid-column: span 5;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(17) {\n    grid-column: span 3;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(18) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(19) {\n    grid-column: span 6;\n    grid-row: span 2;\n  }\n  .bento__item[_ngcontent-%COMP%]:nth-child(20) {\n    grid-column: span 6;\n    grid-row: span 2;\n  }\n}\n.who-desc[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 4rem 1.5rem;\n}\n.who-reveal[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n[_nghost-%COMP%]     .who-reveal__text {\n  color: var(--color-white);\n  font-weight: 300;\n  word-spacing: 0.5rem;\n}\n[_nghost-%COMP%] {\n  background-color: white !important;\n}\n/*# sourceMappingURL=who.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Who, [{
    type: Component,
    args: [{ selector: "app-who", imports: [PageHeader, CommonModule, ScrollRevealComponent, Timeline2, Cta], template: `<app-page-header [title]="'Who We Are'" [bgImage]="'/assets/images/uav_9.png'"></app-page-header>\r
\r
<section class="bento">\r
    <div class="bento__container" #bentoContainer>\r
\r
        <div class="bento__item" *ngFor="let image of images; let i = index" [attr.data-index]="i">\r
\r
            <img [src]="image.src" [alt]="image.title || 'UAV Image'" loading="lazy" />\r
\r
            <div class="bento__overlay"></div>\r
\r
            <div class="bento__content" *ngIf="image.title">\r
                <span class="bento__title">{{ image.title }}</span>\r
            </div>\r
\r
        </div>\r
\r
    </div>\r
</section>\r
\r
<div class="who-desc">\r
    <app-scroll-reveal\r
        text="Feather Dynamics has been advancing unmanned systems for more than two decades, evolving from early UAV platforms and advanced payload integration to the development of transformative, next-generation technologies. Building on deep experience in both commercial and defense programs, the company now pioneers patented capabilities that extend across land, air, sea, space, and cyber domains\u2014enabling a new class of intelligent, multi-domain systems designed for future operational challenges."\r
        [enableBlur]="true"\r
        [baseOpacity]="0.15"\r
        [baseRotation]="2"\r
        [maxWidth]="'1400px'"\r
        containerClassName="who-reveal"\r
        textClassName="who-reveal__text"\r
        >\r
    </app-scroll-reveal>\r
</div>\r
\r
<app-timeline-2></app-timeline-2>\r
<app-cta></app-cta>`, styles: ["/* src/app/pages/who/who.scss */\n.bento {\n  padding: 5rem 1.5rem;\n  background: var(--color-black);\n  color: var(--color-white);\n}\n.bento__container {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.75rem;\n}\n.bento__item {\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n  opacity: 0;\n  transform: translateY(40px);\n  transition: opacity 0.7s ease, transform 0.7s ease;\n}\n.bento__item.is-visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n.bento img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: grayscale(100%);\n  display: block;\n  transition: transform 0.6s ease, filter 0.5s ease;\n}\n.bento__overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.75),\n      rgba(0, 0, 0, 0.2),\n      transparent);\n  z-index: 1;\n}\n.bento__content {\n  position: absolute;\n  bottom: 1.25rem;\n  left: 1.25rem;\n  right: 1.25rem;\n  z-index: 2;\n  transition: opacity 0.4s ease, transform 0.4s ease;\n}\n.bento__title {\n  font-family: var(--font-secondary);\n  font-size: 1.1rem;\n  font-weight: 300;\n  letter-spacing: 0.04em;\n  line-height: 1.4;\n}\n@media (hover: hover) and (pointer: fine) {\n  .bento__content {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  .bento__item:hover img {\n    transform: scale(1.05);\n    filter: grayscale(0);\n  }\n  .bento__item:hover .bento__content {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (min-width: 768px) {\n  .bento__container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .bento {\n    padding: 5rem 2rem;\n  }\n  .bento__container {\n    max-width: 1400px;\n    grid-template-columns: repeat(12, 1fr);\n    grid-auto-rows: 200px;\n    grid-auto-flow: dense;\n    gap: 0.75rem;\n  }\n  .bento__item {\n    aspect-ratio: unset;\n  }\n  .bento__item:nth-child(1) {\n    grid-column: span 6;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(2) {\n    grid-column: span 3;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(3) {\n    grid-column: span 3;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(4) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(5) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(6) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(7) {\n    grid-column: span 5;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(8) {\n    grid-column: span 3;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(9) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(10) {\n    grid-column: span 3;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(11) {\n    grid-column: span 3;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(12) {\n    grid-column: span 6;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(13) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(14) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(15) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(16) {\n    grid-column: span 5;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(17) {\n    grid-column: span 3;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(18) {\n    grid-column: span 4;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(19) {\n    grid-column: span 6;\n    grid-row: span 2;\n  }\n  .bento__item:nth-child(20) {\n    grid-column: span 6;\n    grid-row: span 2;\n  }\n}\n.who-desc {\n  display: flex;\n  justify-content: center;\n  padding: 4rem 1.5rem;\n}\n.who-reveal {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n:host ::ng-deep .who-reveal__text {\n  color: var(--color-white);\n  font-weight: 300;\n  word-spacing: 0.5rem;\n}\n:host {\n  background-color: white !important;\n}\n/*# sourceMappingURL=who.css.map */\n"] }]
  }], () => [{ type: SeoService }], { bentoContainer: [{
    type: ViewChild,
    args: ["bentoContainer", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Who, { className: "Who", filePath: "src/app/pages/who/who.ts", lineNumber: 25 });
})();

// src/app/pages/what/what.ts
var _c012 = ["headerRule"];
var _c17 = ["headerMeta"];
var _c24 = ["sectionTitle"];
var _c3 = ["sectionSub"];
var _c4 = ["sectionFooter"];
var _c5 = ["platformCard"];
function What_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16, 3);
    \u0275\u0275listener("click", function What_div_13_Template_div_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActive(i_r2));
    });
    \u0275\u0275elementStart(2, "div", 17)(3, "div", 18);
    \u0275\u0275element(4, "img", 19)(5, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22)(8, "div", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 24)(11, "span", 25);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 26);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h3", 27);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 28);
    \u0275\u0275element(18, "div", 29);
    \u0275\u0275elementStart(19, "span", 30);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 31)(22, "p", 32);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const platform_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.isActive(i_r2));
    \u0275\u0275advance(4);
    \u0275\u0275property("src", platform_r4.image, \u0275\u0275sanitizeUrl)("alt", platform_r4.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(platform_r4.index);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(platform_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(platform_r4.tag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(platform_r4.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.isActive(i_r2) ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r2.isActive(i_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(platform_r4.body);
  }
}
var What = class _What {
  platformId;
  seo;
  cards;
  // Header element refs for intro animations
  headerRuleRef;
  headerMetaRef;
  sectionTitleRef;
  sectionSubRef;
  sectionFooterRef;
  isBrowser;
  activeIndex = -1;
  observer;
  platforms = [
    {
      index: "01",
      category: "Aerial Systems",
      title: "Defence & Security Platforms",
      tag: "Patented Technology",
      image: "/assets/images/uavmodel.jpg",
      body: `Feather Dynamics' Defense & Security Platforms comprise a family of advanced aerial UAVs engineered to support the evolving operational needs of the United States Department of War and its allied partners. Made in the USA, these systems are built on patented technologies and developed under strict standards, delivering durability, survivability, and reliability in contested and austere environments. Each platform features a modular airframe architecture, enabling rapid configuration for intelligence, surveillance, reconnaissance and tactical support missions. AI-enabled autonomy enhances intelligent flight performance, target tracking, and mission execution, while advanced secure communications and onboard processing deliver superior situational awareness in real time.`
    },
    {
      index: "02",
      category: "Logistics & Transport",
      title: "Cargo & Mobility Platform",
      tag: "Commercial \xB7 Defense \xB7 Unmanned",
      image: "/assets/images/ril_photo1.jpg",
      body: `Feather Dynamics' Cargo & Mobility Platforms are unmanned aerial systems designed to support reliable cargo transport and operational mobility across both commercial and defense applications. Designed and manufactured in the United States, these platforms are built to perform consistently in demanding, time-sensitive environments. The aircraft feature a cargo-first, modular airframe that enables efficient transport of equipment, supplies, and specialized payloads over short- and medium-range distances. AI-driven autonomy supports precise navigation, autonomous flight operations, and adaptive route planning, allowing transport and resupply missions to be carried out with reduced operator involvement.`
    },
    {
      index: "03",
      category: "Mission Systems",
      title: "Payloads & Integrated Systems",
      tag: "EO/IR \xB7 Sensor Fusion \xB7 Modular",
      image: "/assets/images/ril_p4.jpg",
      body: `Feather Dynamics' Payloads & Integrated Systems portfolio delivers a range of mission-focused subsystems designed to enhance UAV capability, effectiveness, and situational awareness across defense and security operations. Core offerings include advanced electro-optical and infrared surveillance systems, gyro-stabilized weapons turret assemblies, and other modular mission payloads deployed on unmanned aircraft for intelligence, surveillance, reconnaissance, and force protection roles. AI-enabled sensor fusion supports real-time data analysis, target tracking, and operator decision support, while stabilized mounting ensures consistent performance during dynamic flight conditions.`
    },
    {
      index: "04",
      category: "Innovation",
      title: "Research & Development Capabilities",
      tag: "Next-Gen \xB7 Licensing \xB7 Procurement",
      image: "/assets/images/4.jpg",
      body: `Feather Dynamics' Research & Development division delivers cutting-edge technical research and innovation for defense, security, and commercial applications. Focused on exploring advanced UAV technologies, autonomous systems, sensor integration, and mission-specific solutions, this team drives the creation of next-generation mission critical technologies. Many R&D initiatives are designed to transition seamlessly into commercial products, offering customers access through direct procurement or licensing agreements. By combining deep technical expertise with practical operational insight, Feather Dynamics' R&D efforts accelerate the development of innovative, scalable, and mission-ready solutions.`
    }
  ];
  constructor(platformId, seo) {
    this.platformId = platformId;
    this.seo = seo;
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
    this.seo.updateSeo({
      title: "What We Do | Feather Dynamics",
      description: "Explore Feather Dynamics' capabilities in autonomous vehicle design, defense systems, and commercial UAV development.",
      keywords: "unmanned aerial vehicles, UAV, autonomous systems, defense technology, commercial UAV, Feather Dynamics, aerospace engineering, robotics, mission systems, R&D, sensor fusion, AI autonomy, secure communications, UAV payloads, defense platforms, cargo transport drones, surveillance systems, ISR, tactical support, unmanned vehicle technology, next-generation UAV, autonomous flight, mission-critical systems, UAV manufacturers, defense applications, UAV development, autonomous vehicle design"
    });
    this.seo.generateBreadcrumbs();
    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Unmanned Vehicle Technology",
      "url": "https://featherdynamics.com/what-we-do",
      "description": "Autonomous vehicle design, defense systems, and commercial UAV development.",
      "provider": {
        "@type": "Organization",
        "name": "Feather Dynamics",
        "url": "https://featherdynamics.com"
      },
      "areaServed": "Worldwide",
      "serviceType": [
        "Autonomous UAV Systems",
        "Defense Technology",
        "Commercial Unmanned Vehicles"
      ]
    });
  }
  ngAfterViewInit() {
    if (this.isBrowser) {
      setTimeout(() => this.initScrollObserver(), 100);
    }
  }
  ngOnDestroy() {
    if (this.isBrowser && this.observer) {
      this.observer.disconnect();
    }
  }
  initScrollObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, { threshold: 0.1 });
    this.cards?.forEach((card) => {
      this.observer.observe(card.nativeElement);
    });
    const headerTargets = [
      this.headerRuleRef,
      this.headerMetaRef,
      this.sectionTitleRef,
      this.sectionSubRef,
      this.sectionFooterRef
    ];
    headerTargets.forEach((ref) => {
      if (ref?.nativeElement) {
        this.observer.observe(ref.nativeElement);
      }
    });
  }
  setActive(index) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
  isActive(index) {
    return this.activeIndex === index;
  }
  static \u0275fac = function What_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _What)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(SeoService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _What, selectors: [["app-what"]], viewQuery: function What_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c012, 5)(_c17, 5)(_c24, 5)(_c3, 5)(_c4, 5)(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerRuleRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerMetaRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sectionTitleRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sectionSubRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sectionFooterRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cards = _t);
    }
  }, decls: 20, vars: 3, consts: [["sectionTitle", ""], ["sectionSub", ""], ["sectionFooter", ""], ["platformCard", ""], [3, "title", "bgImage"], [1, "what-section"], [1, "section-header"], [1, "section-title"], [1, "title-line"], [1, "title-line", "accent"], [1, "section-sub"], [1, "platforms-container"], ["class", "platform-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "section-footer"], [1, "footer-line"], [1, "footer-note"], [1, "platform-card", 3, "click"], [1, "card-image-wrapper"], [1, "card-image-frame"], ["loading", "lazy", 1, "card-image", 3, "src", "alt"], [1, "image-overlay"], [1, "image-accent-bar"], [1, "card-content"], [1, "card-number"], [1, "card-header"], [1, "card-category"], [1, "card-tag"], [1, "card-title"], [1, "card-divider"], [1, "divider-line"], [1, "expand-icon"], [1, "card-body"], [1, "card-text"]], template: function What_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-page-header", 4);
      \u0275\u0275elementStart(1, "section", 5)(2, "div", 6)(3, "h2", 7, 0)(5, "span", 8);
      \u0275\u0275text(6, "Engineering the");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 9);
      \u0275\u0275text(8, "Future of Flight");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p", 10, 1);
      \u0275\u0275text(11, " From autonomous defense systems to next-generation R&D, Feather Dynamics operates across four interconnected capability domains \u2014 each built on patented technology, AI-driven intelligence, and a commitment to performance in the most demanding environments on Earth. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275template(13, What_div_13_Template, 24, 12, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 13, 2);
      \u0275\u0275element(16, "div", 14);
      \u0275\u0275elementStart(17, "span", 15);
      \u0275\u0275text(18, "Feather Dynamics");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "div", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("title", "What We Do")("bgImage", "/assets/images/uav_8.png");
      \u0275\u0275advance(13);
      \u0275\u0275property("ngForOf", ctx.platforms);
    }
  }, dependencies: [CommonModule, NgForOf, PageHeader], styles: [`
.what-section[_ngcontent-%COMP%] {
  background: #ffffff;
  min-height: 100vh;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
  font-family:
    "Montserrat",
    "Helvetica Neue",
    sans-serif;
}
.what-section[_ngcontent-%COMP%]::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.6;
}
.what-section[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.015) 1px,
      transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
}
.what-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
}
.section-header[_ngcontent-%COMP%] {
  max-width: 1400px;
  margin: 0 auto 64px;
  padding: 0 4px;
}
.section-title[_ngcontent-%COMP%] {
  font-family: var(--font-secondary);
  font-size: var(--text-2xl);
  font-weight: 600;
  line-height: 0.92;
  color: #0f172a;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) 0.18s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.18s;
}
.section-title.in-view[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(0);
}
.section-title[_ngcontent-%COMP%]   .title-line[_ngcontent-%COMP%] {
  display: block;
}
.section-title[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {
  color: var(--color-accent);
  display: inline-block;
  transform: skewX(-2deg);
}
.section-sub[_ngcontent-%COMP%] {
  max-width: 640px;
  font-size: var(--text);
  line-height: 1.85;
  color: #475569;
  font-weight: 300;
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.28s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.28s;
}
.section-sub.in-view[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(0);
}
.platforms-container[_ngcontent-%COMP%] {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.platform-card[_ngcontent-%COMP%] {
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.platform-card[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-accent);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
}
.platform-card.in-view[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(0);
}
.platform-card[_ngcontent-%COMP%]:nth-child(1) {
  transition-delay: 0s;
}
.platform-card[_ngcontent-%COMP%]:nth-child(2) {
  transition-delay: 0.08s;
}
.platform-card[_ngcontent-%COMP%]:nth-child(3) {
  transition-delay: 0.16s;
}
.platform-card[_ngcontent-%COMP%]:nth-child(4) {
  transition-delay: 0.24s;
}
.platform-card[_ngcontent-%COMP%]:last-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.platform-card[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.018);
}
.platform-card[_ngcontent-%COMP%]:hover::before {
  transform: scaleY(1);
}
.platform-card[_ngcontent-%COMP%]:hover   .card-number[_ngcontent-%COMP%] {
  color: var(--color-accent);
}
.platform-card[_ngcontent-%COMP%]:hover   .divider-line[_ngcontent-%COMP%] {
  background: rgba(0, 0, 0, 0.16);
}
.platform-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%] {
  transform: scale(1.04);
}
.platform-card[_ngcontent-%COMP%]:hover   .image-accent-bar[_ngcontent-%COMP%] {
  width: 40px;
}
.platform-card.active[_ngcontent-%COMP%] {
  background: #eef1f5;
}
.platform-card.active[_ngcontent-%COMP%]::before {
  transform: scaleY(1);
}
.platform-card.active[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%] {
  color: var(--color-accent);
}
.platform-card.active[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {
  color: var(--color-accent);
}
.platform-card.active[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {
  transform: scale(1.02);
}
.platform-card.active[_ngcontent-%COMP%]   .card-image-frame[_ngcontent-%COMP%] {
  border-color: rgba(184, 155, 94, 0.3);
}
.card-image-wrapper[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: visible;
  flex-shrink: 0;
}
.card-image-frame[_ngcontent-%COMP%] {
  position: relative;
  width: calc(100% - 24px);
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: border-color 0.3s;
}
.card-image[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  filter: grayscale(20%) brightness(0.75);
}
.image-overlay[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to bottom,
      transparent 40%,
      rgba(255, 255, 255, 0.85) 100%);
  pointer-events: none;
}
.image-accent-bar[_ngcontent-%COMP%] {
  position: absolute;
  right: 0;
  bottom: 20px;
  width: 24px;
  height: 2px;
  background: var(--color-accent);
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.card-content[_ngcontent-%COMP%] {
  padding: 28px 20px 32px;
}
.card-number[_ngcontent-%COMP%] {
  font-family: var(--font-secondary);
  font-size: 10px;
  letter-spacing: 0.15em;
  color: #94a3b8;
  margin-bottom: 14px;
  transition: color 0.3s;
}
.card-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.card-category[_ngcontent-%COMP%] {
  font-family: var(--font-secondary);
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
}
.card-tag[_ngcontent-%COMP%] {
  font-family: var(--font-secondary);
  font-size: 9px;
  letter-spacing: 0.1em;
  color: #94a3b8;
  padding: 2px 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  white-space: nowrap;
}
.card-title[_ngcontent-%COMP%] {
  font-family: var(--font-secondary);
  font-size: 3rem;
  font-weight: 500;
  color: #0f172a;
  margin: 0 0 20px;
  line-height: 1;
  text-transform: uppercase;
  max-width: 720px;
}
.card-divider[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
}
.divider-line[_ngcontent-%COMP%] {
  flex: 1;
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
  transition: background 0.3s;
}
.expand-icon[_ngcontent-%COMP%] {
  font-family: var(--font-secondary);
  font-size: var(--text);
  color: #94a3b8;
  line-height: 1;
  transition: color 0.3s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  min-width: 20px;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
}
.card-body[_ngcontent-%COMP%] {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}
.card-body.expanded[_ngcontent-%COMP%] {
  max-height: 600px;
  opacity: 1;
}
.card-text[_ngcontent-%COMP%] {
  font-size: var(--text);
  line-height: 1.85;
  color: #475569;
  font-weight: 300;
  margin: 24px 0 28px;
  max-width: 800px;
}
.card-cta[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-secondary);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(200, 169, 110, 0.3);
  transition: gap 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s;
}
.card-cta[_ngcontent-%COMP%]:hover {
  gap: 16px;
  border-color: var(--color-accent);
}
.card-cta[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-cta[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {
  transform: translateX(4px);
}
.section-footer[_ngcontent-%COMP%] {
  max-width: 1400px;
  margin: 64px auto 0;
  display: flex;
  align-items: center;
  gap: 24px;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}
.section-footer.in-view[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(0);
}
.footer-line[_ngcontent-%COMP%] {
  flex: 1;
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
}
.footer-note[_ngcontent-%COMP%] {
  font-family: var(--font-secondary);
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #94a3b8;
  white-space: nowrap;
}
@media (min-width: 640px) {
  .what-section[_ngcontent-%COMP%] {
    padding: 100px 40px;
  }
  .card-image-wrapper[_ngcontent-%COMP%] {
    height: 240px;
  }
  .card-content[_ngcontent-%COMP%] {
    padding: 32px 36px 40px;
  }
}
@media (min-width: 1024px) {
  .what-section[_ngcontent-%COMP%] {
    padding: 120px 64px;
  }
  .section-header[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    margin-bottom: 80px;
  }
  .section-title[_ngcontent-%COMP%] {
    grid-column: 1;
    grid-row: 1;
    margin-bottom: 0;
  }
  .section-sub[_ngcontent-%COMP%] {
    grid-column: 2;
    grid-row: 1/4;
    align-self: end;
    padding-top: 12px;
    max-width: none;
  }
  .platform-card[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
    align-items: stretch;
    height: 200px;
    overflow: hidden;
    transition:
      height 0.55s cubic-bezier(0.16, 1, 0.3, 1),
      background 0.35s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .platform-card.active[_ngcontent-%COMP%] {
    height: auto;
    min-height: 200px;
  }
  .platform-card[_ngcontent-%COMP%]::before {
    left: 0;
  }
  .card-image-wrapper[_ngcontent-%COMP%] {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 100%;
    min-height: unset;
    position: relative;
    padding: 16px 0;
    display: flex;
    align-items: stretch;
    overflow: hidden;
  }
  .card-image-frame[_ngcontent-%COMP%] {
    width: calc(100% - 20px);
    height: 100%;
    min-height: unset;
    margin: 0;
    overflow: hidden;
  }
  .card-content[_ngcontent-%COMP%] {
    grid-column: 2;
    grid-row: 1;
    padding: 28px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
  }
  .image-accent-bar[_ngcontent-%COMP%] {
    position: absolute;
    right: 16px;
    bottom: auto;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 24px;
    transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .platform-card[_ngcontent-%COMP%]:hover   .image-accent-bar[_ngcontent-%COMP%], 
   .platform-card.active[_ngcontent-%COMP%]   .image-accent-bar[_ngcontent-%COMP%] {
    height: 48px;
    width: 2px;
  }
  .platform-card[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%] {
    display: block;
    margin-bottom: 10px;
  }
}
@media (min-width: 1440px) {
  .what-section[_ngcontent-%COMP%] {
    padding: 140px 80px;
  }
  .platform-card[_ngcontent-%COMP%] {
    grid-template-columns: 500px 1fr;
    height: 300px;
  }
  .platform-card.active[_ngcontent-%COMP%] {
    height: auto;
    min-height: 220px;
  }
  .card-content[_ngcontent-%COMP%] {
    padding: 52px 64px;
  }
}
/*# sourceMappingURL=what.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(What, [{
    type: Component,
    args: [{ selector: "app-what", standalone: true, imports: [CommonModule, PageHeader], template: `<app-page-header [title]="'What We Do'" [bgImage]="'/assets/images/uav_8.png'"></app-page-header>\r
\r
<section class="what-section">\r
\r
    <!-- Section Header -->\r
    <div class="section-header">\r
        <h2 class="section-title" #sectionTitle>\r
            <span class="title-line">Engineering the</span>\r
            <span class="title-line accent">Future of Flight</span>\r
        </h2>\r
        <p class="section-sub" #sectionSub>\r
            From autonomous defense systems to next-generation R&amp;D, Feather Dynamics operates across four\r
            interconnected capability domains \u2014 each built on patented technology, AI-driven intelligence, and a\r
            commitment to performance in the most demanding environments on Earth.\r
        </p>\r
    </div>\r
\r
    <!-- Platform Grid -->\r
    <div class="platforms-container">\r
\r
        <div *ngFor="let platform of platforms; let i = index" class="platform-card" [class.active]="isActive(i)"\r
            #platformCard (click)="setActive(i)">\r
\r
            <!-- Image Panel (offset) -->\r
            <div class="card-image-wrapper">\r
                <div class="card-image-frame">\r
                    <img [src]="platform.image" [alt]="platform.title" class="card-image" loading="lazy" />\r
                    <div class="image-overlay"></div>\r
                </div>\r
                <div class="image-accent-bar"></div>\r
            </div>\r
\r
            <!-- Content Panel -->\r
            <div class="card-content">\r
\r
                <!-- Card Number -->\r
                <div class="card-number">{{ platform.index }}</div>\r
\r
                <!-- Card Top Row -->\r
                <div class="card-header">\r
                    <span class="card-category">{{ platform.category }}</span>\r
                    <span class="card-tag">{{ platform.tag }}</span>\r
                </div>\r
\r
                <!-- Card Title -->\r
                <h3 class="card-title">{{ platform.title }}</h3>\r
\r
                <!-- Divider -->\r
                <div class="card-divider">\r
                    <div class="divider-line"></div>\r
                    <span class="expand-icon">{{ isActive(i) ? '\u2212' : '+' }}</span>\r
                </div>\r
\r
                <!-- Expandable Body -->\r
                <div class="card-body" [class.expanded]="isActive(i)">\r
                    <p class="card-text">{{ platform.body }}</p>\r
                </div>\r
\r
            </div>\r
\r
        </div>\r
\r
    </div>\r
\r
    <!-- Bottom Accent -->\r
    <div class="section-footer" #sectionFooter>\r
        <div class="footer-line"></div>\r
        <span class="footer-note">Feather Dynamics</span>\r
        <div class="footer-line"></div>\r
    </div>\r
\r
</section>`, styles: [`/* src/app/pages/what/what.scss */
.what-section {
  background: #ffffff;
  min-height: 100vh;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
  font-family:
    "Montserrat",
    "Helvetica Neue",
    sans-serif;
}
.what-section::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.6;
}
.what-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.015) 1px,
      transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
}
.what-section > * {
  position: relative;
  z-index: 1;
}
.section-header {
  max-width: 1400px;
  margin: 0 auto 64px;
  padding: 0 4px;
}
.section-title {
  font-family: var(--font-secondary);
  font-size: var(--text-2xl);
  font-weight: 600;
  line-height: 0.92;
  color: #0f172a;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) 0.18s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.18s;
}
.section-title.in-view {
  opacity: 1;
  transform: translateY(0);
}
.section-title .title-line {
  display: block;
}
.section-title .accent {
  color: var(--color-accent);
  display: inline-block;
  transform: skewX(-2deg);
}
.section-sub {
  max-width: 640px;
  font-size: var(--text);
  line-height: 1.85;
  color: #475569;
  font-weight: 300;
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.28s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.28s;
}
.section-sub.in-view {
  opacity: 1;
  transform: translateY(0);
}
.platforms-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.platform-card {
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.platform-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-accent);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
}
.platform-card.in-view {
  opacity: 1;
  transform: translateY(0);
}
.platform-card:nth-child(1) {
  transition-delay: 0s;
}
.platform-card:nth-child(2) {
  transition-delay: 0.08s;
}
.platform-card:nth-child(3) {
  transition-delay: 0.16s;
}
.platform-card:nth-child(4) {
  transition-delay: 0.24s;
}
.platform-card:last-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.platform-card:hover {
  background: rgba(255, 255, 255, 0.018);
}
.platform-card:hover::before {
  transform: scaleY(1);
}
.platform-card:hover .card-number {
  color: var(--color-accent);
}
.platform-card:hover .divider-line {
  background: rgba(0, 0, 0, 0.16);
}
.platform-card:hover .card-image {
  transform: scale(1.04);
}
.platform-card:hover .image-accent-bar {
  width: 40px;
}
.platform-card.active {
  background: #eef1f5;
}
.platform-card.active::before {
  transform: scaleY(1);
}
.platform-card.active .card-number {
  color: var(--color-accent);
}
.platform-card.active .expand-icon {
  color: var(--color-accent);
}
.platform-card.active .card-image {
  transform: scale(1.02);
}
.platform-card.active .card-image-frame {
  border-color: rgba(184, 155, 94, 0.3);
}
.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: visible;
  flex-shrink: 0;
}
.card-image-frame {
  position: relative;
  width: calc(100% - 24px);
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: border-color 0.3s;
}
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  filter: grayscale(20%) brightness(0.75);
}
.image-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to bottom,
      transparent 40%,
      rgba(255, 255, 255, 0.85) 100%);
  pointer-events: none;
}
.image-accent-bar {
  position: absolute;
  right: 0;
  bottom: 20px;
  width: 24px;
  height: 2px;
  background: var(--color-accent);
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.card-content {
  padding: 28px 20px 32px;
}
.card-number {
  font-family: var(--font-secondary);
  font-size: 10px;
  letter-spacing: 0.15em;
  color: #94a3b8;
  margin-bottom: 14px;
  transition: color 0.3s;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.card-category {
  font-family: var(--font-secondary);
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
}
.card-tag {
  font-family: var(--font-secondary);
  font-size: 9px;
  letter-spacing: 0.1em;
  color: #94a3b8;
  padding: 2px 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  white-space: nowrap;
}
.card-title {
  font-family: var(--font-secondary);
  font-size: 3rem;
  font-weight: 500;
  color: #0f172a;
  margin: 0 0 20px;
  line-height: 1;
  text-transform: uppercase;
  max-width: 720px;
}
.card-divider {
  display: flex;
  align-items: center;
  gap: 16px;
}
.divider-line {
  flex: 1;
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
  transition: background 0.3s;
}
.expand-icon {
  font-family: var(--font-secondary);
  font-size: var(--text);
  color: #94a3b8;
  line-height: 1;
  transition: color 0.3s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  min-width: 20px;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
}
.card-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}
.card-body.expanded {
  max-height: 600px;
  opacity: 1;
}
.card-text {
  font-size: var(--text);
  line-height: 1.85;
  color: #475569;
  font-weight: 300;
  margin: 24px 0 28px;
  max-width: 800px;
}
.card-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-secondary);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(200, 169, 110, 0.3);
  transition: gap 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s;
}
.card-cta:hover {
  gap: 16px;
  border-color: var(--color-accent);
}
.card-cta svg {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-cta:hover svg {
  transform: translateX(4px);
}
.section-footer {
  max-width: 1400px;
  margin: 64px auto 0;
  display: flex;
  align-items: center;
  gap: 24px;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}
.section-footer.in-view {
  opacity: 1;
  transform: translateY(0);
}
.footer-line {
  flex: 1;
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
}
.footer-note {
  font-family: var(--font-secondary);
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #94a3b8;
  white-space: nowrap;
}
@media (min-width: 640px) {
  .what-section {
    padding: 100px 40px;
  }
  .card-image-wrapper {
    height: 240px;
  }
  .card-content {
    padding: 32px 36px 40px;
  }
}
@media (min-width: 1024px) {
  .what-section {
    padding: 120px 64px;
  }
  .section-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    margin-bottom: 80px;
  }
  .section-title {
    grid-column: 1;
    grid-row: 1;
    margin-bottom: 0;
  }
  .section-sub {
    grid-column: 2;
    grid-row: 1/4;
    align-self: end;
    padding-top: 12px;
    max-width: none;
  }
  .platform-card {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
    align-items: stretch;
    height: 200px;
    overflow: hidden;
    transition:
      height 0.55s cubic-bezier(0.16, 1, 0.3, 1),
      background 0.35s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .platform-card.active {
    height: auto;
    min-height: 200px;
  }
  .platform-card::before {
    left: 0;
  }
  .card-image-wrapper {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 100%;
    min-height: unset;
    position: relative;
    padding: 16px 0;
    display: flex;
    align-items: stretch;
    overflow: hidden;
  }
  .card-image-frame {
    width: calc(100% - 20px);
    height: 100%;
    min-height: unset;
    margin: 0;
    overflow: hidden;
  }
  .card-content {
    grid-column: 2;
    grid-row: 1;
    padding: 28px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
  }
  .image-accent-bar {
    position: absolute;
    right: 16px;
    bottom: auto;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 24px;
    transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .platform-card:hover .image-accent-bar,
  .platform-card.active .image-accent-bar {
    height: 48px;
    width: 2px;
  }
  .platform-card .card-number {
    display: block;
    margin-bottom: 10px;
  }
}
@media (min-width: 1440px) {
  .what-section {
    padding: 140px 80px;
  }
  .platform-card {
    grid-template-columns: 500px 1fr;
    height: 300px;
  }
  .platform-card.active {
    height: auto;
    min-height: 220px;
  }
  .card-content {
    padding: 52px 64px;
  }
}
/*# sourceMappingURL=what.css.map */
`] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: SeoService }], { cards: [{
    type: ViewChildren,
    args: ["platformCard"]
  }], headerRuleRef: [{
    type: ViewChild,
    args: ["headerRule"]
  }], headerMetaRef: [{
    type: ViewChild,
    args: ["headerMeta"]
  }], sectionTitleRef: [{
    type: ViewChild,
    args: ["sectionTitle"]
  }], sectionSubRef: [{
    type: ViewChild,
    args: ["sectionSub"]
  }], sectionFooterRef: [{
    type: ViewChild,
    args: ["sectionFooter"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(What, { className: "What", filePath: "src/app/pages/what/what.ts", lineNumber: 33 });
})();

// node_modules/@angular/forms/fesm2022/forms.mjs
/**
 * @license Angular v21.2.10
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  _renderer;
  _elementRef;
  onChange = (_) => {
  };
  onTouched = () => {
  };
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
  }
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static \u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseControlValueAccessor
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BuiltInControlValueAccessor_BaseFactory;
    return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BuiltInControlValueAccessor,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxControlValueAccessor_BaseFactory;
    return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxControlValueAccessor,
    selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
    hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.checked);
        })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($any($event.target).checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  _compositionMode;
  _composing = false;
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  _compositionStart() {
    this._composing = true;
  }
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static \u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DefaultValueAccessor,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      host: {
        "(input)": "_handleInput($any($event.target).value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "_compositionStart()",
        "(compositionend)": "_compositionEnd($any($event.target).value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
var NG_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return {
        "maxlength": {
          "requiredLength": maxLength,
          "actualLength": length
        }
      };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  get value() {
    return this.control ? this.control.value : null;
  }
  get valid() {
    return this.control ? this.control.valid : null;
  }
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  get pending() {
    return this.control ? this.control.pending : null;
  }
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  get errors() {
    return this.control ? this.control.errors : null;
  }
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  get touched() {
    return this.control ? this.control.touched : null;
  }
  get status() {
    return this.control ? this.control.status : null;
  }
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  get path() {
    return null;
  }
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators = [];
  _rawAsyncValidators = [];
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  get validator() {
    return this._composedValidatorFn || null;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  _onDestroyCallbacks = [];
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  reset(value = void 0) {
    this.control?.reset(value);
  }
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  name;
  get formDirective() {
    return null;
  }
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  _parent = null;
  name = null;
  valueAccessor = null;
};
var AbstractControlStatus = class {
  _cd;
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatus,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost,
      standalone: false
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatusGroup,
    selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["", "formArray", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
    hostVars: 16,
    hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]",
      host: __spreadProps(__spreadValues({}, ngControlStatusHost), {
        "[class.ng-submitted]": "isSubmitted"
      }),
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
var VERSION = /* @__PURE__ */ new Version("21.2.10");
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup or formArray directive. You'll want to add a formGroup/formArray
      directive and pass it an existing FormGroup/FormArray instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  const versionSubDomain = VERSION.major !== "0" ? `v${VERSION.major}.` : "";
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://${versionSubDomain}angular.dev/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  value;
  source;
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  pristine;
  source;
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  touched;
  source;
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  status;
  source;
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(-1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  _pendingDirty = false;
  _hasOwnPendingAsyncValidator = null;
  _pendingTouched = false;
  _onCollectionChange = () => {
  };
  _updateOn;
  _parent = null;
  _asyncValidationSubscription;
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators;
  _rawAsyncValidators;
  value;
  constructor(validators, asyncValidators) {
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  get parent() {
    return this._parent;
  }
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  _status = computed(() => this.statusReactive(), ...ngDevMode ? [{
    debugName: "_status"
  }] : []);
  statusReactive = signal(void 0, ...ngDevMode ? [{
    debugName: "statusReactive"
  }] : []);
  get valid() {
    return this.status === VALID;
  }
  get invalid() {
    return this.status === INVALID;
  }
  get pending() {
    return this.status === PENDING;
  }
  get disabled() {
    return this.status === DISABLED;
  }
  get enabled() {
    return this.status !== DISABLED;
  }
  errors;
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  _pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{
    debugName: "_pristine"
  }] : []);
  pristineReactive = signal(true, ...ngDevMode ? [{
    debugName: "pristineReactive"
  }] : []);
  get dirty() {
    return !this.pristine;
  }
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  _touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{
    debugName: "_touched"
  }] : []);
  touchedReactive = signal(false, ...ngDevMode ? [{
    debugName: "touchedReactive"
  }] : []);
  get untouched() {
    return !this.touched;
  }
  _events = new Subject();
  events = this._events.asObservable();
  valueChanges;
  statusChanges;
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  setValidators(validators) {
    this._assignValidators(validators);
  }
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  clearValidators() {
    this.validator = null;
  }
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  markAllAsDirty(opts = {}) {
    this.markAsDirty({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsDirty(opts));
  }
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent?._updatePristine({}, sourceControl);
      }
      this._parent?._updateTouched({}, sourceControl);
    }
  }
  setParent(parent) {
    this._parent = parent;
  }
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false,
        shouldHaveEmitted: shouldHaveEmitted !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control?.errors ? control.errors[errorCode] : null;
  }
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, changedControl);
    }
  }
  _onDisabledChange = [];
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  _parentMarkedDirty(onlySelf) {
    return !onlySelf && !!this._parent?.dirty && !this._parent._anyControlsDirty();
  }
  _find(name) {
    return null;
  }
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  _updateValue() {
    this.value = this._reduceValue();
  }
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop2 = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  dir?.valueAccessor?.registerOnChange(noop2);
  dir?.valueAccessor?.registerOnTouched(noop2);
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop2 = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop2);
  registerOnValidatorChange(dir._rawAsyncValidators, noop2);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$2 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this.submittedReactive);
  }
  _submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "submittedReactive"
  }] : []);
  _directives = /* @__PURE__ */ new Set();
  form;
  ngSubmit = new EventEmitter();
  options;
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  get formDirective() {
    return this;
  }
  get control() {
    return this.form;
  }
  get path() {
    return [];
  }
  get controls() {
    return this.form.controls;
  }
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl(dir.name);
      this._directives.delete(dir);
    });
  }
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl?.(dir.name);
    });
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  setValue(value) {
    this.control.setValue(value);
  }
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static \u0275fac = function NgForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgForm,
    selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", "", 3, "formArray", ""], ["ng-form"], ["", "ngForm", ""]],
    hostBindings: function NgForm_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function NgForm_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      options: [0, "ngFormOptions", "options"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$2]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]):not([formArray]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$2],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  defaultValue = null;
  _onChange = [];
  _pendingValue;
  _pendingChange = false;
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    if (options.overwriteDefaultValue) {
      this.defaultValue = this.value;
    }
    this._pendingChange = false;
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  _updateValue() {
  }
  _anyControls(condition) {
    return false;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  _forEachChild(cb) {
  }
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  _parent;
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormGroup(this);
  }
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AbstractFormGroupDirective_BaseFactory;
    return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormGroupDirective,
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive,
    args: [{
      standalone: false
    }]
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  name = "";
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static \u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModelGroup,
    selectors: [["", "ngModelGroup", ""]],
    inputs: {
      name: [0, "ngModelGroup", "name"]
    },
    exportAs: ["ngModelGroup"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  _changeDetectorRef;
  callSetDisabledState;
  control = new FormControl();
  static ngAcceptInputType_isDisabled;
  _registered = false;
  viewModel;
  name = "";
  isDisabled;
  model;
  options;
  update = new EventEmitter();
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  get path() {
    return this._getPath(this.name);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
      checkParentType$1(this._parent);
    }
    this._checkName();
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static \u0275fac = function NgModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModel,
    selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
    inputs: {
      name: "name",
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"],
      options: [0, "ngModelOptions", "options"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngModel"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static \u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgNoValidate)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgNoValidate,
    selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
    hostAttrs: ["novalidate", ""],
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      },
      standalone: false
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NumberValueAccessor_BaseFactory;
    return function NumberValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NumberValueAccessor,
    selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
    hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  _accessors = [];
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  _registry;
  _injector;
  _state;
  _control;
  _fn;
  setDisabledStateFired = false;
  onChange = () => {
  };
  name;
  formControlName;
  value;
  callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
    optional: true
  }) ?? setDisabledStateDefault;
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  ngOnDestroy() {
    this._registry.remove(this);
  }
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static \u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RadioControlValueAccessor,
    selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
    hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
          return ctx.onChange();
        })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      name: "name",
      formControlName: "formControlName",
      value: "value"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RangeValueAccessor_BaseFactory;
    return function RangeValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RangeValueAccessor,
    selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
    hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  push(control, options = {}) {
    if (Array.isArray(control)) {
      control.forEach((ctrl) => {
        this.controls.push(ctrl);
        this._registerControl(ctrl);
      });
    } else {
      this.controls.push(control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  get length() {
    return this.controls.length;
  }
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  _find(name) {
    return this.at(name) ?? null;
  }
};
var AbstractFormDirective = class _AbstractFormDirective extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this._submittedReactive);
  }
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  _submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  _submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "_submittedReactive"
  }] : []);
  _oldForm;
  _onCollectionChange = () => this._updateDomValue();
  directives = [];
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnChanges(changes) {
    this.onChanges(changes);
  }
  ngOnDestroy() {
    this.onDestroy();
  }
  onChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  onDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  get formDirective() {
    return this;
  }
  get path() {
    return [];
  }
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    cleanUpControl(dir.control || null, dir, false);
    removeListItem$1(this.directives, dir);
  }
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0, options = {}) {
    this.form.reset(value, options);
    this._submittedReactive.set(false);
  }
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    const ctrl = this.form?.get(dir.path);
    if (ctrl) {
      const isControlUpdated = cleanUpFormContainer(ctrl, dir);
      if (isControlUpdated) {
        ctrl.updateValueAndValidity({
          emitEvent: false
        });
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    this._oldForm?._registerOnCollectionChange(() => {
    });
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static \u0275fac = function AbstractFormDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractFormDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormDirective,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormDirective, [{
    type: Directive
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], null);
})();
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayDirective)
};
var FormArrayDirective = class _FormArrayDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormArrayDirective_BaseFactory;
    return function FormArrayDirective_Factory(__ngFactoryType__) {
      return (\u0275FormArrayDirective_BaseFactory || (\u0275FormArrayDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormArrayDirective)))(__ngFactoryType__ || _FormArrayDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayDirective,
    selectors: [["", "formArray", ""]],
    hostBindings: function FormArrayDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormArrayDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormArrayDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formArray", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayDirective, [{
    type: Directive,
    args: [{
      selector: "[formArray]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formArray"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  _ngModelWarningConfig;
  callSetDisabledState;
  viewModel;
  form;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(previousForm, this, false);
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(this.form, this, false);
    }
  }
  get path() {
    return [];
  }
  get control() {
    return this.form;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static \u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlDirective,
    selectors: [["", "formControl", ""]],
    inputs: {
      form: [0, "formControl", "form"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static \u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupName,
    selectors: [["", "formGroupName", ""]],
    inputs: {
      name: [0, "formGroupName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  _parent;
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnInit() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
    this.formDirective.addFormArray(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormArray(this);
  }
  get control() {
    return this.formDirective.getFormArray(this);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  static \u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayName,
    selectors: [["", "formArrayName", ""]],
    inputs: {
      name: [0, "formArrayName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  _ngModelWarningConfig;
  _added = false;
  viewModel;
  control;
  name = null;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _setUpControl() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkParentType(this._parent, this.name);
    }
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static \u0275fac = function FormControlName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlName,
    selectors: [["", "formControlName", ""]],
    inputs: {
      name: [0, "formControlName", "name"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormGroupDirective_BaseFactory;
    return function FormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275FormGroupDirective_BaseFactory || (\u0275FormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormGroupDirective)))(__ngFactoryType__ || _FormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupDirective,
    selectors: [["", "formGroup", ""]],
    hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormGroupDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formGroup", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  appRefInjector = inject(ApplicationRef).injector;
  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);
  _queuedWrite = false;
  _writeValueAfterRender() {
    if (this._queuedWrite || this.appRefInjector.destroyed) {
      return;
    }
    this._queuedWrite = true;
    afterNextRender({
      write: () => {
        if (this.destroyRef.destroyed) {
          return;
        }
        this._queuedWrite = false;
        this.writeValue(this.value);
      }
    }, {
      injector: this.appRefInjector
    });
  }
  writeValue(value) {
    this.cdr.markForCheck();
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  _registerOption() {
    return (this._idCounter++).toString();
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectControlValueAccessor_BaseFactory;
    return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectControlValueAccessor,
    selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
    hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  _element;
  _renderer;
  _select;
  id;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select._writeValueAfterRender();
  }
  set value(value) {
    this._setElementValue(value);
    this._select?._writeValueAfterRender();
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  ngOnDestroy() {
    this._select?._optionMap.delete(this.id);
    this._select?._writeValueAfterRender();
  }
  static \u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgSelectOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectMultipleControlValueAccessor_BaseFactory;
    return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectMultipleControlValueAccessor,
    selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
    hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target);
        })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  _element;
  _renderer;
  _select;
  id;
  _value;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static \u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgSelectMultipleOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  _validator = nullValidator;
  _onChange;
  _enabled;
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input2 = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input2);
      this._validator = this._enabled ? this.createValidator(input2) : nullValidator;
      this._onChange?.();
    }
  }
  validate(control) {
    return this._validator(control);
  }
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  enabled(input2) {
    return input2 != null;
  }
  static \u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractValidatorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractValidatorDirective,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  max;
  inputName = "max";
  normalizeInput = (input2) => toFloat(input2);
  createValidator = (max) => maxValidator(max);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxValidator_BaseFactory;
    return function MaxValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxValidator,
    selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    inputs: {
      max: "max"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      },
      standalone: false
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  min;
  inputName = "min";
  normalizeInput = (input2) => toFloat(input2);
  createValidator = (min) => minValidator(min);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinValidator_BaseFactory;
    return function MinValidator_Factory(__ngFactoryType__) {
      return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinValidator,
    selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    inputs: {
      min: "min"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      },
      standalone: false
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  required;
  inputName = "required";
  normalizeInput = booleanAttribute;
  createValidator = (input2) => requiredValidator;
  enabled(input2) {
    return input2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RequiredValidator_BaseFactory;
    return function RequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RequiredValidator,
    selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
    hostVars: 1,
    hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    inputs: {
      required: "required"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  createValidator = (input2) => requiredTrueValidator;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxRequiredValidator_BaseFactory;
    return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxRequiredValidator,
    selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  email;
  inputName = "email";
  normalizeInput = booleanAttribute;
  createValidator = (input2) => emailValidator;
  enabled(input2) {
    return input2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EmailValidator_BaseFactory;
    return function EmailValidator_Factory(__ngFactoryType__) {
      return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EmailValidator,
    selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
    inputs: {
      email: "email"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR],
      standalone: false
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  minlength;
  inputName = "minlength";
  normalizeInput = (input2) => toInteger(input2);
  createValidator = (minlength) => minLengthValidator(minlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinLengthValidator_BaseFactory;
    return function MinLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinLengthValidator,
    selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
      }
    },
    inputs: {
      minlength: "minlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      },
      standalone: false
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  maxlength;
  inputName = "maxlength";
  normalizeInput = (input2) => toInteger(input2);
  createValidator = (maxlength) => maxLengthValidator(maxlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxLengthValidator_BaseFactory;
    return function MaxLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxLengthValidator,
    selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
      }
    },
    inputs: {
      maxlength: "maxlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      },
      standalone: false
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  pattern;
  inputName = "pattern";
  normalizeInput = (input2) => input2;
  createValidator = (input2) => patternValidator(input2);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PatternValidator_BaseFactory;
    return function PatternValidator_Factory(__ngFactoryType__) {
      return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PatternValidator,
    selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function PatternValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
      }
    },
    inputs: {
      pattern: "pattern"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      },
      standalone: false
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static \u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _\u0275InternalFormsSharedModule,
    declarations: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
    exports: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  useNonNullable = false;
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static \u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FormBuilder,
    factory: _FormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static \u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NonNullableFormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NonNullableFormBuilder,
    factory: () => (() => inject(FormBuilder).nonNullable)(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UntypedFormBuilder_BaseFactory;
    return function UntypedFormBuilder_Factory(__ngFactoryType__) {
      return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UntypedFormBuilder,
    factory: _UntypedFormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FormsModule = class _FormsModule {
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function FormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FormsModule,
    declarations: [NgModel, NgModelGroup, NgForm],
    exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveFormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ReactiveFormsModule,
    declarations: [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName],
    exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/core/services/contact.service.ts
var ContactService = class _ContactService {
  http;
  endpoint = `/api/v1/contact`;
  constructor(http) {
    this.http = http;
  }
  send(payload) {
    const fd = new FormData();
    fd.append("name", payload.name);
    fd.append("email", payload.email);
    fd.append("phone", payload.phone ?? "");
    fd.append("subject", payload.subject ?? "");
    fd.append("message", payload.message ?? "");
    return this.http.post(this.endpoint, fd);
  }
  static \u0275fac = function ContactService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactService, factory: _ContactService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/contact-us/contact-us.ts
var _c013 = ["infoPanel"];
var _c18 = ["infoEyebrow"];
var _c25 = ["infoTitle"];
var _c32 = ["infoLead"];
var _c42 = ["infoItems"];
var _c52 = ["formPanel"];
function ContactUs_i_lucide_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i-lucide", 58);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("img", ctx_r1.checkCircle);
  }
}
function ContactUs_i_lucide_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i-lucide", 58);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("img", ctx_r1.xCircle);
  }
}
var ContactUs = class _ContactUs {
  platformId;
  contactService;
  seo;
  // ── Lucide icons ──────────────────────────────────────────────
  mail = Mail;
  map_pin = MapPin;
  user = User;
  phone = Phone;
  info = Info;
  penline = PenLine;
  send = Send;
  checkCircle = CircleCheckBig;
  xCircle = CircleX;
  // ── View refs for scroll animations ──────────────────────────
  infoPanel;
  infoEyebrow;
  infoTitle;
  infoLead;
  infoItems;
  formPanel;
  // ── Form state ────────────────────────────────────────────────
  formData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false
  };
  nameValue = "";
  emailValue = "";
  phoneValue = "";
  subjectValue = "";
  messageValue = "";
  // ── Submission state ──────────────────────────────────────────
  isLoading = false;
  popupVisible = false;
  popupType = "success";
  popupMessage = "";
  // ── Logo loop ─────────────────────────────────────────────────
  logos = [
    { label: "YOUR VISION IS OUR MISSION." }
  ];
  isBrowser;
  observer;
  constructor(platformId, contactService, seo) {
    this.platformId = platformId;
    this.contactService = contactService;
    this.seo = seo;
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
    this.seo.updateSeo({
      title: "Contact Us | Feather Dynamics",
      description: "Get in touch with Feather Dynamics for inquiries about our autonomous vehicle solutions, defense technology, or partnership opportunities. Our team is ready to discuss your next-generation UAV projects.",
      keywords: "contact Feather Dynamics, UAV inquiry, autonomous vehicle company contact, defense technology partners, unmanned systems consultation, feather dynamics contact form, military drone technology, autonomous cargo delivery, VTOL aircraft development, aerospace innovation contact, feather dynamics support, defense contractor contact, UAV research and development, autonomous flight systems, next-gen unmanned vehicles, feather dynamics partnership, military robotics contact, autonomous vehicle consulting, defense innovation contact, feather dynamics engineering, UAV design collaboration, autonomous system development, feather dynamics technical support, defense technology solutions, feather dynamics sales, UAV technology contact, autonomous vehicle research, feather dynamics customer service, defense systems contact, UAV development partners, feather dynamics engineering contact, autonomous flight technology, feather dynamics innovation, defense technology partners, UAV industry contact, feather dynamics corporate contact, autonomous vehicle development, feather dynamics defense solutions, UAV research contact, feather dynamics aerospace contact"
    });
    this.seo.generateBreadcrumbs();
    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Us | Feather Dynamics",
      "url": "https://featherdynamics.com/contact-us",
      "description": "Get in touch with Feather Dynamics.",
      "publisher": {
        "@type": "Organization",
        "name": "Feather Dynamics",
        "url": "https://featherdynamics.com"
      }
    });
  }
  ngAfterViewInit() {
    if (this.isBrowser) {
      setTimeout(() => this.initScrollObserver(), 100);
    }
  }
  ngOnDestroy() {
    if (this.isBrowser && this.observer) {
      this.observer.disconnect();
    }
  }
  initScrollObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("in-view");
      });
    }, { threshold: 0.12 });
    [this.infoEyebrow, this.infoTitle, this.infoLead, this.infoItems, this.formPanel].forEach((ref) => {
      if (ref?.nativeElement)
        this.observer.observe(ref.nativeElement);
    });
  }
  // ── Submit ────────────────────────────────────────────────────
  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.consent) {
      this.showPopup("error", "Please fill in all required fields and accept the data policy.");
      return;
    }
    this.isLoading = true;
    this.contactService.send({
      name: this.formData.name,
      email: this.formData.email,
      phone: this.formData.phone,
      subject: this.formData.subject,
      message: this.formData.message
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.showPopup("success", "Your message has been sent. We'll be in touch within one business day.");
        this.resetForm();
      },
      error: () => {
        this.isLoading = false;
        this.showPopup("error", "Something went wrong. Please try again or email us directly.");
      }
    });
  }
  showPopup(type, message) {
    this.popupType = type;
    this.popupMessage = message;
    this.popupVisible = true;
  }
  closePopup() {
    this.popupVisible = false;
  }
  resetForm() {
    this.formData = { name: "", email: "", phone: "", subject: "", message: "", consent: false };
    this.nameValue = "";
    this.emailValue = "";
    this.phoneValue = "";
    this.subjectValue = "";
    this.messageValue = "";
  }
  static \u0275fac = function ContactUs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactUs)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ContactService), \u0275\u0275directiveInject(SeoService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactUs, selectors: [["app-contact-us"]], viewQuery: function ContactUs_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c013, 5)(_c18, 5)(_c25, 5)(_c32, 5)(_c42, 5)(_c52, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.infoPanel = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.infoEyebrow = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.infoTitle = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.infoLead = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.infoItems = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.formPanel = _t.first);
    }
  }, decls: 108, vars: 45, consts: [["infoPanel", ""], ["infoTitle", ""], ["infoLead", ""], ["infoItems", ""], ["formPanel", ""], ["contactForm", "ngForm"], [1, "contact-us-section"], [3, "title", "bgImage"], [1, "contact-us"], [1, "contact-grid"], [1, "info-panel"], [1, "info-title"], [1, "title-line"], [1, "title-line", "accent"], [1, "info-lead"], [1, "info-items"], [1, "info-item"], [1, "item-icon"], [3, "img"], [1, "item-content"], [1, "item-label"], [1, "item-value"], ["aria-hidden", "true", 1, "info-deco-num"], [1, "form-panel"], ["novalidate", "", 1, "contact-form", 3, "ngSubmit"], [1, "form-row"], [1, "field-group"], [1, "field-label"], [1, "field-inner"], [1, "field-icon", 3, "img"], ["type", "text", "name", "name", "placeholder", "Your Name", "required", "", 3, "ngModelChange", "input", "ngModel"], [1, "field-line"], ["type", "email", "name", "email", "placeholder", "Email Address", "required", "", 3, "ngModelChange", "input", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "Phone Number", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "name", "subject", "placeholder", "Subject", 3, "ngModelChange", "input", "ngModel"], [1, "field-group", "full-width"], [1, "field-inner", "align-top"], [1, "field-icon", "icon-top", 3, "img"], ["name", "message", "placeholder", "How can we help you?", "rows", "5", 3, "ngModelChange", "input", "ngModel"], [1, "form-row", "checkbox-row"], [1, "checkbox-label"], ["type", "checkbox", "name", "consent", "required", "", 3, "ngModelChange", "ngModel"], [1, "checkbox-box"], [1, "checkbox-text"], ["href", "/privacy-policy"], [1, "form-row", "submit-row"], ["type", "submit", 1, "submit-btn"], [1, "btn-text"], [1, "btn-icon", 3, "img"], [3, "logos", "speed", "pauseOnHover", "direction", "logoHeight", "gap"], ["aria-live", "polite", 1, "popup-overlay", 3, "click"], [1, "popup-card", 3, "click"], [1, "popup-icon-wrap"], ["class", "popup-icon", 3, "img", 4, "ngIf"], [1, "popup-rule"], [1, "popup-title"], [1, "popup-body"], [1, "popup-close", 3, "click"], [1, "popup-icon", 3, "img"]], template: function ContactUs_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 6);
      \u0275\u0275element(1, "app-page-header", 7);
      \u0275\u0275elementStart(2, "section", 8)(3, "div", 9)(4, "div", 10, 0)(6, "h2", 11, 1)(8, "span", 12);
      \u0275\u0275text(9, "Let's");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 13);
      \u0275\u0275text(11, "Connect.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p", 14, 2);
      \u0275\u0275text(14, " Have questions about our platforms or capabilities? Reach out \u2014 our team responds within one business day. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 15, 3)(17, "div", 16)(18, "div", 17);
      \u0275\u0275element(19, "i-lucide", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 19)(21, "span", 20);
      \u0275\u0275text(22, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 21);
      \u0275\u0275text(24, "Monterey, California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 21);
      \u0275\u0275text(26, "Santa Barbara, California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 21);
      \u0275\u0275text(28, "Austin, Texas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 16)(30, "div", 17);
      \u0275\u0275element(31, "i-lucide", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 19)(33, "span", 20);
      \u0275\u0275text(34, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 21);
      \u0275\u0275text(36, "info@featherdynamics.com");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 22);
      \u0275\u0275text(38, "FD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 23, 4)(41, "form", 24, 5);
      \u0275\u0275listener("ngSubmit", function ContactUs_Template_form_ngSubmit_41_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(43, "div", 25)(44, "div", 26)(45, "label", 27);
      \u0275\u0275text(46, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 28);
      \u0275\u0275element(48, "i-lucide", 29);
      \u0275\u0275elementStart(49, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function ContactUs_Template_input_ngModelChange_49_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.name, $event) || (ctx.formData.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function ContactUs_Template_input_input_49_listener() {
        return ctx.nameValue = ctx.formData.name;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(50, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 26)(52, "label", 27);
      \u0275\u0275text(53, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 28);
      \u0275\u0275element(55, "i-lucide", 29);
      \u0275\u0275elementStart(56, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function ContactUs_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.email, $event) || (ctx.formData.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function ContactUs_Template_input_input_56_listener() {
        return ctx.emailValue = ctx.formData.email;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(57, "div", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 25)(59, "div", 26)(60, "label", 27);
      \u0275\u0275text(61, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 28);
      \u0275\u0275element(63, "i-lucide", 29);
      \u0275\u0275elementStart(64, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function ContactUs_Template_input_ngModelChange_64_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.phone, $event) || (ctx.formData.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function ContactUs_Template_input_input_64_listener() {
        return ctx.phoneValue = ctx.formData.phone;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(65, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 26)(67, "label", 27);
      \u0275\u0275text(68, "Subject");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 28);
      \u0275\u0275element(70, "i-lucide", 29);
      \u0275\u0275elementStart(71, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function ContactUs_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.subject, $event) || (ctx.formData.subject = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function ContactUs_Template_input_input_71_listener() {
        return ctx.subjectValue = ctx.formData.subject;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(72, "div", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 25)(74, "div", 35)(75, "label", 27);
      \u0275\u0275text(76, "Message");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 36);
      \u0275\u0275element(78, "i-lucide", 37);
      \u0275\u0275elementStart(79, "textarea", 38);
      \u0275\u0275twoWayListener("ngModelChange", function ContactUs_Template_textarea_ngModelChange_79_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.message, $event) || (ctx.formData.message = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function ContactUs_Template_textarea_input_79_listener() {
        return ctx.messageValue = ctx.formData.message;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(80, "div", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 39)(82, "label", 40)(83, "input", 41);
      \u0275\u0275twoWayListener("ngModelChange", function ContactUs_Template_input_ngModelChange_83_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.consent, $event) || (ctx.formData.consent = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "span", 42);
      \u0275\u0275elementStart(85, "span", 43);
      \u0275\u0275text(86, " I agree that my data is ");
      \u0275\u0275elementStart(87, "a", 44);
      \u0275\u0275text(88, "collected and stored.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(89, "div", 45)(90, "button", 46)(91, "span", 47);
      \u0275\u0275text(92);
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "i-lucide", 48);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(94, "app-reveal");
      \u0275\u0275element(95, "app-logo-loop", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 50);
      \u0275\u0275listener("click", function ContactUs_Template_div_click_96_listener() {
        return ctx.closePopup();
      });
      \u0275\u0275elementStart(97, "div", 51);
      \u0275\u0275listener("click", function ContactUs_Template_div_click_97_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(98, "div", 52);
      \u0275\u0275template(99, ContactUs_i_lucide_99_Template, 1, 1, "i-lucide", 53)(100, ContactUs_i_lucide_100_Template, 1, 1, "i-lucide", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275element(101, "div", 54);
      \u0275\u0275elementStart(102, "h3", 55);
      \u0275\u0275text(103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "p", 56);
      \u0275\u0275text(105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "button", 57);
      \u0275\u0275listener("click", function ContactUs_Template_button_click_106_listener() {
        return ctx.closePopup();
      });
      \u0275\u0275text(107, "Dismiss");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", "Contact Us")("bgImage", "/assets/images/6-cropped.jpg");
      \u0275\u0275advance(18);
      \u0275\u0275property("img", ctx.map_pin);
      \u0275\u0275advance(12);
      \u0275\u0275property("img", ctx.mail);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("has-value", ctx.nameValue);
      \u0275\u0275advance(4);
      \u0275\u0275property("img", ctx.user);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.name);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("has-value", ctx.emailValue);
      \u0275\u0275advance(4);
      \u0275\u0275property("img", ctx.mail);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.email);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("has-value", ctx.phoneValue);
      \u0275\u0275advance(4);
      \u0275\u0275property("img", ctx.phone);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.phone);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("has-value", ctx.subjectValue);
      \u0275\u0275advance(4);
      \u0275\u0275property("img", ctx.info);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.subject);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("has-value", ctx.messageValue);
      \u0275\u0275advance(4);
      \u0275\u0275property("img", ctx.penline);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.message);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.consent);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("loading", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isLoading ? "Sending\u2026" : "Send Message");
      \u0275\u0275advance();
      \u0275\u0275property("img", ctx.send);
      \u0275\u0275advance(2);
      \u0275\u0275property("logos", ctx.logos)("speed", 50)("pauseOnHover", false)("direction", "left")("logoHeight", 100)("gap", 80);
      \u0275\u0275advance();
      \u0275\u0275classProp("visible", ctx.popupVisible);
      \u0275\u0275advance();
      \u0275\u0275classProp("success", ctx.popupType === "success")("error", ctx.popupType === "error");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.popupType === "success");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.popupType === "error");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.popupType === "success" ? "Message Sent" : "Submission Failed");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.popupMessage);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    CheckboxRequiredValidator,
    NgModel,
    NgForm,
    HttpClientModule,
    PageHeader,
    LucideAngularModule,
    LucideAngularComponent,
    LogoLoopComponent,
    RevealComponent
  ], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  background: #ffffff;\n  font-family:\n    "Montserrat",\n    "Helvetica Neue",\n    sans-serif;\n}\napp-logo-loop[_ngcontent-%COMP%]     .logoloop__item {\n  color: var(--color-black);\n  font-family: var(--font-secondary);\n}\n.contact-us-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.contact-us[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 72px 24px 96px;\n  max-width: 1400px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.bg-deco[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n  overflow: hidden;\n}\n.bg-deco-img[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  object-fit: contain;\n  object-position: bottom;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.contact-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 56px;\n}\n@media (min-width: 1024px) {\n  .contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1.4fr;\n    gap: 80px;\n    align-items: start;\n  }\n}\n.info-panel[_ngcontent-%COMP%] {\n  position: relative;\n}\n.info-title[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: var(--text-2xl);\n  font-weight: 500;\n  line-height: 0.9;\n  text-transform: uppercase;\n  color: #0f172a;\n  margin: 0 0 28px;\n  display: flex;\n  flex-direction: column;\n  opacity: 0;\n  transform: translateY(24px);\n  transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) 0.08s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.08s;\n}\n.info-title.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.info-title[_ngcontent-%COMP%]   .title-line[_ngcontent-%COMP%] {\n  display: block;\n}\n.info-title[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  display: inline-block;\n  transform: skewX(-2deg);\n}\n.info-lead[_ngcontent-%COMP%] {\n  font-size: var(--text);\n  line-height: 1.8;\n  color: #475569;\n  font-weight: 300;\n  margin: 0 0 40px;\n  max-width: 440px;\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;\n}\n.info-lead.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.info-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.22s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.22s;\n}\n.info-items.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n}\n.item-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid rgba(0, 0, 0, 0.09);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: border-color 0.3s;\n}\n.item-icon[_ngcontent-%COMP%]   i-lucide[_ngcontent-%COMP%] {\n  height: 22px;\n  color: var(--color-accent);\n}\n.item-icon[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n}\n.item-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.item-label[_ngcontent-%COMP%] {\n  font-family:\n    "DM Mono",\n    "Courier New",\n    monospace;\n  font-size: 9px;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.item-value[_ngcontent-%COMP%] {\n  font-size: var(--text);\n  color: #0f172a;\n  font-weight: 300;\n}\n.info-deco-num[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -20px;\n  left: -12px;\n  font-family: var(--font-secondary);\n  font-size: 120px;\n  line-height: 1;\n  color: rgba(0, 0, 0, 0.03);\n  letter-spacing: 0.05em;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.form-panel[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateX(32px);\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;\n}\n.form-panel.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.contact-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n@media (max-width: 639px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-family:\n    "DM Mono",\n    "Courier New",\n    monospace;\n  font-size: 9px;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  transition: color 0.3s;\n}\n.field-group[_ngcontent-%COMP%]:focus-within   .field-label[_ngcontent-%COMP%], \n.field-group.has-value[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.field-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.field-inner.align-top[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  padding-top: 4px;\n}\n.field-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: #94a3b8;\n  flex-shrink: 0;\n  transition: color 0.3s;\n}\n.field-icon.icon-top[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.field-group[_ngcontent-%COMP%]:focus-within   .field-icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  padding: 8px 0;\n  font-size: var(--text);\n  font-family:\n    "Montserrat",\n    "Helvetica Neue",\n    sans-serif;\n  font-weight: 300;\n  background: transparent;\n  color: #0f172a;\n  outline: none;\n  line-height: 1.6;\n}\ninput[_ngcontent-%COMP%]::placeholder, \ntextarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n  font-weight: 300;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n.field-line[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(0, 0, 0, 0.09);\n  position: relative;\n  transition: background 0.3s;\n}\n.field-line[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--color-accent);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.field-group[_ngcontent-%COMP%]:focus-within   .field-line[_ngcontent-%COMP%]::after, \n.field-group.has-value[_ngcontent-%COMP%]   .field-line[_ngcontent-%COMP%]::after {\n  transform: scaleX(1);\n}\n.checkbox-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.checkbox-box[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 1px solid rgba(0, 0, 0, 0.09);\n  flex-shrink: 0;\n  position: relative;\n  transition: border-color 0.3s;\n  margin-top: 2px;\n}\n.checkbox-box[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 3px;\n  background: var(--color-accent);\n  opacity: 0;\n  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .checkbox-box[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .checkbox-box[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.checkbox-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #475569;\n  font-weight: 300;\n  line-height: 1.6;\n}\n.checkbox-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0f172a;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.checkbox-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-accent);\n}\n.submit-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 40px;\n  background: #0f172a;\n  color: #ffffff;\n  border: none;\n  cursor: pointer;\n  font-family:\n    "Montserrat",\n    "Helvetica Neue",\n    sans-serif;\n  font-size: 15px;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1), gap 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.submit-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--color-accent);\n  transform: translateX(-101%);\n  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.submit-btn[_ngcontent-%COMP%]:hover::before {\n  transform: translateX(0);\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  gap: 20px;\n}\n.submit-btn.loading[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.7;\n}\n.submit-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%], \n.submit-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.submit-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  height: 22px;\n}\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.popup-overlay.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n}\n.popup-overlay.visible[_ngcontent-%COMP%]   .popup-card[_ngcontent-%COMP%] {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n}\n.popup-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 48px 40px;\n  max-width: 420px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n  border-top: 2px solid #0f172a;\n  transform: translateY(24px) scale(0.97);\n  opacity: 0;\n  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.popup-card.success[_ngcontent-%COMP%] {\n  border-top-color: var(--color-accent);\n}\n.popup-card.success[_ngcontent-%COMP%]   .popup-icon-wrap[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.popup-card.error[_ngcontent-%COMP%] {\n  border-top-color: #c0392b;\n}\n.popup-card.error[_ngcontent-%COMP%]   .popup-icon-wrap[_ngcontent-%COMP%] {\n  color: #c0392b;\n}\n.popup-icon-wrap[_ngcontent-%COMP%]   i-lucide[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.popup-rule[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.09);\n}\n.popup-title[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: var(--text-xl);\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: #0f172a;\n  margin: 0;\n  line-height: 1;\n}\n.popup-body[_ngcontent-%COMP%] {\n  font-size: var(--text);\n  color: #475569;\n  font-weight: 300;\n  line-height: 1.75;\n  margin: 0;\n}\n.popup-close[_ngcontent-%COMP%] {\n  font-family:\n    "DM Mono",\n    "Courier New",\n    monospace;\n  font-size: 10px;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #0f172a;\n  background: none;\n  border: 1px solid rgba(0, 0, 0, 0.09);\n  padding: 10px 24px;\n  cursor: pointer;\n  transition: border-color 0.3s, color 0.3s;\n  margin-top: 8px;\n}\n.popup-close[_ngcontent-%COMP%]:hover {\n  border-color: #0f172a;\n}\n@media (min-width: 640px) {\n  .contact-us[_ngcontent-%COMP%] {\n    padding: 96px 48px 120px;\n  }\n}\n@media (min-width: 1024px) {\n  .contact-us[_ngcontent-%COMP%] {\n    padding: 120px 64px 140px;\n  }\n}\n@media (min-width: 1440px) {\n  .contact-us[_ngcontent-%COMP%] {\n    padding: 140px 80px 50px;\n  }\n}\n/*# sourceMappingURL=contact-us.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactUs, [{
    type: Component,
    args: [{ selector: "app-contact-us", standalone: true, imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      PageHeader,
      LucideAngularModule,
      LogoLoopComponent,
      RevealComponent
    ], template: `<div class="contact-us-section">\r
    <app-page-header [title]="'Contact Us'" [bgImage]="'/assets/images/6-cropped.jpg'"></app-page-header>\r
\r
    <section class="contact-us">\r
\r
        <div class="contact-grid">\r
\r
            <!-- \u2500\u2500 Info Panel \u2500\u2500 -->\r
            <div class="info-panel" #infoPanel>\r
\r
                <h2 class="info-title" #infoTitle>\r
                    <span class="title-line">Let's</span>\r
                    <span class="title-line accent">Connect.</span>\r
                </h2>\r
\r
                <p class="info-lead" #infoLead>\r
                    Have questions about our platforms or capabilities? Reach out \u2014 our team responds within one\r
                    business day.\r
                </p>\r
\r
                <div class="info-items" #infoItems>\r
                    <div class="info-item">\r
                        <div class="item-icon">\r
                            <i-lucide [img]="map_pin"></i-lucide>\r
                        </div>\r
                        <div class="item-content">\r
                            <span class="item-label">Location</span>\r
                            <span class="item-value">Monterey, California</span>\r
                            <span class="item-value">Santa Barbara, California</span>\r
                            <span class="item-value">Austin, Texas</span>\r
                        </div>\r
                    </div>\r
\r
                    <div class="info-item">\r
                        <div class="item-icon">\r
                            <i-lucide [img]="mail"></i-lucide>\r
                        </div>\r
                        <div class="item-content">\r
                            <span class="item-label">Email</span>\r
                            <span class="item-value">info&#64;featherdynamics.com</span>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Decorative index -->\r
                <div class="info-deco-num" aria-hidden="true">FD</div>\r
            </div>\r
\r
            <!-- \u2500\u2500 Form Panel \u2500\u2500 -->\r
            <div class="form-panel" #formPanel>\r
                <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm" novalidate>\r
\r
                    <!-- Row 1 -->\r
                    <div class="form-row">\r
                        <div class="field-group" [class.has-value]="nameValue">\r
                            <label class="field-label">Name</label>\r
                            <div class="field-inner">\r
                                <i-lucide [img]="user" class="field-icon"></i-lucide>\r
                                <input type="text" name="name" [(ngModel)]="formData.name"\r
                                    (input)="nameValue = formData.name" placeholder="Your Name" required />\r
                            </div>\r
                            <div class="field-line"></div>\r
                        </div>\r
\r
                        <div class="field-group" [class.has-value]="emailValue">\r
                            <label class="field-label">Email</label>\r
                            <div class="field-inner">\r
                                <i-lucide [img]="mail" class="field-icon"></i-lucide>\r
                                <input type="email" name="email" [(ngModel)]="formData.email"\r
                                    (input)="emailValue = formData.email" placeholder="Email Address" required />\r
                            </div>\r
                            <div class="field-line"></div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Row 2 -->\r
                    <div class="form-row">\r
                        <div class="field-group" [class.has-value]="phoneValue">\r
                            <label class="field-label">Phone</label>\r
                            <div class="field-inner">\r
                                <i-lucide [img]="phone" class="field-icon"></i-lucide>\r
                                <input type="tel" name="phone" [(ngModel)]="formData.phone"\r
                                    (input)="phoneValue = formData.phone" placeholder="Phone Number" />\r
                            </div>\r
                            <div class="field-line"></div>\r
                        </div>\r
\r
                        <div class="field-group" [class.has-value]="subjectValue">\r
                            <label class="field-label">Subject</label>\r
                            <div class="field-inner">\r
                                <i-lucide [img]="info" class="field-icon"></i-lucide>\r
                                <input type="text" name="subject" [(ngModel)]="formData.subject"\r
                                    (input)="subjectValue = formData.subject" placeholder="Subject" />\r
                            </div>\r
                            <div class="field-line"></div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Row 3: Message -->\r
                    <div class="form-row">\r
                        <div class="field-group full-width" [class.has-value]="messageValue">\r
                            <label class="field-label">Message</label>\r
                            <div class="field-inner align-top">\r
                                <i-lucide [img]="penline" class="field-icon icon-top"></i-lucide>\r
                                <textarea name="message" [(ngModel)]="formData.message"\r
                                    (input)="messageValue = formData.message" placeholder="How can we help you?"\r
                                    rows="5"></textarea>\r
                            </div>\r
                            <div class="field-line"></div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Row 4: Checkbox -->\r
                    <div class="form-row checkbox-row">\r
                        <label class="checkbox-label">\r
                            <input type="checkbox" name="consent" [(ngModel)]="formData.consent" required />\r
                            <span class="checkbox-box"></span>\r
                            <span class="checkbox-text">\r
                                I agree that my data is\r
                                <a href="/privacy-policy">collected and stored.</a>\r
                            </span>\r
                        </label>\r
                    </div>\r
\r
                    <!-- Row 5: Submit -->\r
                    <div class="form-row submit-row">\r
                        <button type="submit" class="submit-btn" [class.loading]="isLoading">\r
                            <span class="btn-text">{{ isLoading ? 'Sending\u2026' : 'Send Message' }}</span>\r
                            <i-lucide [img]="send" class="btn-icon"></i-lucide>\r
                        </button>\r
                    </div>\r
\r
                </form>\r
            </div>\r
\r
        </div>\r
    </section>\r
\r
    <app-reveal>\r
        <app-logo-loop [logos]="logos" [speed]="50" [pauseOnHover]="false" [direction]="'left'" [logoHeight]="100"\r
            [gap]="80">\r
        </app-logo-loop>\r
    </app-reveal>\r
</div>\r
\r
<!-- \u2500\u2500 Popup Overlay \u2500\u2500 -->\r
<div class="popup-overlay" [class.visible]="popupVisible" (click)="closePopup()" aria-live="polite">\r
    <div class="popup-card" [class.success]="popupType === 'success'" [class.error]="popupType === 'error'"\r
        (click)="$event.stopPropagation()">\r
        <div class="popup-icon-wrap">\r
            <i-lucide *ngIf="popupType === 'success'" [img]="checkCircle" class="popup-icon"></i-lucide>\r
            <i-lucide *ngIf="popupType === 'error'" [img]="xCircle" class="popup-icon"></i-lucide>\r
        </div>\r
        <div class="popup-rule"></div>\r
        <h3 class="popup-title">{{ popupType === 'success' ? 'Message Sent' : 'Submission Failed' }}</h3>\r
        <p class="popup-body">{{ popupMessage }}</p>\r
        <button class="popup-close" (click)="closePopup()">Dismiss</button>\r
    </div>\r
</div>`, styles: ['/* src/app/pages/contact-us/contact-us.scss */\n:host {\n  display: block;\n  background: #ffffff;\n  font-family:\n    "Montserrat",\n    "Helvetica Neue",\n    sans-serif;\n}\napp-logo-loop ::ng-deep .logoloop__item {\n  color: var(--color-black);\n  font-family: var(--font-secondary);\n}\n.contact-us-section {\n  overflow: hidden;\n}\n.contact-us {\n  position: relative;\n  padding: 72px 24px 96px;\n  max-width: 1400px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.bg-deco {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n  overflow: hidden;\n}\n.bg-deco-img {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  object-fit: contain;\n  object-position: bottom;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.contact-grid {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 56px;\n}\n@media (min-width: 1024px) {\n  .contact-grid {\n    grid-template-columns: 1fr 1.4fr;\n    gap: 80px;\n    align-items: start;\n  }\n}\n.info-panel {\n  position: relative;\n}\n.info-title {\n  font-family: var(--font-secondary);\n  font-size: var(--text-2xl);\n  font-weight: 500;\n  line-height: 0.9;\n  text-transform: uppercase;\n  color: #0f172a;\n  margin: 0 0 28px;\n  display: flex;\n  flex-direction: column;\n  opacity: 0;\n  transform: translateY(24px);\n  transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) 0.08s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.08s;\n}\n.info-title.in-view {\n  opacity: 1;\n  transform: translateY(0);\n}\n.info-title .title-line {\n  display: block;\n}\n.info-title .accent {\n  color: var(--color-accent);\n  display: inline-block;\n  transform: skewX(-2deg);\n}\n.info-lead {\n  font-size: var(--text);\n  line-height: 1.8;\n  color: #475569;\n  font-weight: 300;\n  margin: 0 0 40px;\n  max-width: 440px;\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;\n}\n.info-lead.in-view {\n  opacity: 1;\n  transform: translateY(0);\n}\n.info-items {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.22s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.22s;\n}\n.info-items.in-view {\n  opacity: 1;\n  transform: translateY(0);\n}\n.info-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n}\n.item-icon {\n  width: 40px;\n  height: 40px;\n  border: 1px solid rgba(0, 0, 0, 0.09);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: border-color 0.3s;\n}\n.item-icon i-lucide {\n  height: 22px;\n  color: var(--color-accent);\n}\n.item-icon:hover {\n  border-color: var(--color-accent);\n}\n.item-content {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.item-label {\n  font-family:\n    "DM Mono",\n    "Courier New",\n    monospace;\n  font-size: 9px;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.item-value {\n  font-size: var(--text);\n  color: #0f172a;\n  font-weight: 300;\n}\n.info-deco-num {\n  position: absolute;\n  bottom: -20px;\n  left: -12px;\n  font-family: var(--font-secondary);\n  font-size: 120px;\n  line-height: 1;\n  color: rgba(0, 0, 0, 0.03);\n  letter-spacing: 0.05em;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.form-panel {\n  opacity: 0;\n  transform: translateX(32px);\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;\n}\n.form-panel.in-view {\n  opacity: 1;\n  transform: translateX(0);\n}\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n@media (max-width: 639px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.field-group {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field-group.full-width {\n  grid-column: 1/-1;\n}\n.field-label {\n  font-family:\n    "DM Mono",\n    "Courier New",\n    monospace;\n  font-size: 9px;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  transition: color 0.3s;\n}\n.field-group:focus-within .field-label,\n.field-group.has-value .field-label {\n  color: var(--color-accent);\n}\n.field-inner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.field-inner.align-top {\n  align-items: flex-start;\n  padding-top: 4px;\n}\n.field-icon {\n  width: 16px;\n  height: 16px;\n  color: #94a3b8;\n  flex-shrink: 0;\n  transition: color 0.3s;\n}\n.field-icon.icon-top {\n  margin-top: 2px;\n}\n.field-group:focus-within .field-icon {\n  color: var(--color-accent);\n}\ninput,\ntextarea {\n  flex: 1;\n  border: none;\n  padding: 8px 0;\n  font-size: var(--text);\n  font-family:\n    "Montserrat",\n    "Helvetica Neue",\n    sans-serif;\n  font-weight: 300;\n  background: transparent;\n  color: #0f172a;\n  outline: none;\n  line-height: 1.6;\n}\ninput::placeholder,\ntextarea::placeholder {\n  color: #94a3b8;\n  font-weight: 300;\n}\ntextarea {\n  resize: none;\n}\n.field-line {\n  height: 1px;\n  background: rgba(0, 0, 0, 0.09);\n  position: relative;\n  transition: background 0.3s;\n}\n.field-line::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--color-accent);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.field-group:focus-within .field-line::after,\n.field-group.has-value .field-line::after {\n  transform: scaleX(1);\n}\n.checkbox-row {\n  grid-template-columns: 1fr;\n}\n.checkbox-label {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  cursor: pointer;\n}\n.checkbox-label input[type=checkbox] {\n  display: none;\n}\n.checkbox-box {\n  width: 18px;\n  height: 18px;\n  border: 1px solid rgba(0, 0, 0, 0.09);\n  flex-shrink: 0;\n  position: relative;\n  transition: border-color 0.3s;\n  margin-top: 2px;\n}\n.checkbox-box::after {\n  content: "";\n  position: absolute;\n  inset: 3px;\n  background: var(--color-accent);\n  opacity: 0;\n  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.checkbox-label input[type=checkbox]:checked ~ .checkbox-box {\n  border-color: var(--color-accent);\n}\n.checkbox-label input[type=checkbox]:checked ~ .checkbox-box::after {\n  opacity: 1;\n}\n.checkbox-text {\n  font-size: 0.85rem;\n  color: #475569;\n  font-weight: 300;\n  line-height: 1.6;\n}\n.checkbox-text a {\n  color: #0f172a;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.checkbox-text a:hover {\n  color: var(--color-accent);\n}\n.submit-row {\n  grid-template-columns: 1fr;\n}\n.submit-btn {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 40px;\n  background: #0f172a;\n  color: #ffffff;\n  border: none;\n  cursor: pointer;\n  font-family:\n    "Montserrat",\n    "Helvetica Neue",\n    sans-serif;\n  font-size: 15px;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1), gap 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.submit-btn::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--color-accent);\n  transform: translateX(-101%);\n  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.submit-btn:hover::before {\n  transform: translateX(0);\n}\n.submit-btn:hover {\n  gap: 20px;\n}\n.submit-btn.loading {\n  pointer-events: none;\n  opacity: 0.7;\n}\n.submit-btn .btn-text,\n.submit-btn .btn-icon {\n  position: relative;\n  z-index: 1;\n}\n.submit-btn .btn-icon {\n  height: 22px;\n}\n.popup-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.popup-overlay.visible {\n  opacity: 1;\n  pointer-events: all;\n}\n.popup-overlay.visible .popup-card {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n}\n.popup-card {\n  background: #ffffff;\n  padding: 48px 40px;\n  max-width: 420px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n  border-top: 2px solid #0f172a;\n  transform: translateY(24px) scale(0.97);\n  opacity: 0;\n  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.popup-card.success {\n  border-top-color: var(--color-accent);\n}\n.popup-card.success .popup-icon-wrap {\n  color: var(--color-accent);\n}\n.popup-card.error {\n  border-top-color: #c0392b;\n}\n.popup-card.error .popup-icon-wrap {\n  color: #c0392b;\n}\n.popup-icon-wrap i-lucide {\n  width: 32px;\n  height: 32px;\n}\n.popup-rule {\n  width: 32px;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.09);\n}\n.popup-title {\n  font-family: var(--font-secondary);\n  font-size: var(--text-xl);\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: #0f172a;\n  margin: 0;\n  line-height: 1;\n}\n.popup-body {\n  font-size: var(--text);\n  color: #475569;\n  font-weight: 300;\n  line-height: 1.75;\n  margin: 0;\n}\n.popup-close {\n  font-family:\n    "DM Mono",\n    "Courier New",\n    monospace;\n  font-size: 10px;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #0f172a;\n  background: none;\n  border: 1px solid rgba(0, 0, 0, 0.09);\n  padding: 10px 24px;\n  cursor: pointer;\n  transition: border-color 0.3s, color 0.3s;\n  margin-top: 8px;\n}\n.popup-close:hover {\n  border-color: #0f172a;\n}\n@media (min-width: 640px) {\n  .contact-us {\n    padding: 96px 48px 120px;\n  }\n}\n@media (min-width: 1024px) {\n  .contact-us {\n    padding: 120px 64px 140px;\n  }\n}\n@media (min-width: 1440px) {\n  .contact-us {\n    padding: 140px 80px 50px;\n  }\n}\n/*# sourceMappingURL=contact-us.css.map */\n'] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: ContactService }, { type: SeoService }], { infoPanel: [{
    type: ViewChild,
    args: ["infoPanel"]
  }], infoEyebrow: [{
    type: ViewChild,
    args: ["infoEyebrow"]
  }], infoTitle: [{
    type: ViewChild,
    args: ["infoTitle"]
  }], infoLead: [{
    type: ViewChild,
    args: ["infoLead"]
  }], infoItems: [{
    type: ViewChild,
    args: ["infoItems"]
  }], formPanel: [{
    type: ViewChild,
    args: ["formPanel"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactUs, { className: "ContactUs", filePath: "src/app/pages/contact-us/contact-us.ts", lineNumber: 56 });
})();

// src/app/pages/news-article/news-article.ts
var _c014 = ["heroImg"];
var _c19 = ["titleBlock"];
var _c26 = ["sidebar"];
var _c33 = ["prose"];
var _c43 = ["articleFooter"];
function NewsArticle_nav_22_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 42);
    \u0275\u0275listener("click", function NewsArticle_nav_22_a_3_Template_a_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.scrollToHeading(i_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeHeading === i_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", h_r4, " ");
  }
}
function NewsArticle_nav_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 39)(1, "span", 40);
    \u0275\u0275text(2, "Contents");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NewsArticle_nav_22_a_3_Template, 2, 3, "a", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.headings);
  }
}
function NewsArticle__svg_svg_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 44)(2, "path", 45);
    \u0275\u0275elementEnd();
  }
}
function NewsArticle__svg_svg_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "polyline", 46);
    \u0275\u0275elementEnd();
  }
}
var NewsArticle = class _NewsArticle {
  route;
  newsService;
  seo;
  platformId;
  heroImg;
  titleBlock;
  sidebar;
  prose;
  articleFooter;
  article;
  headings = [];
  activeHeading = 0;
  copySuccess = false;
  isBrowser;
  headingEls = [];
  revealObserver;
  constructor(route, newsService, seo, platformId) {
    this.route = route;
    this.newsService = newsService;
    this.seo = seo;
    this.platformId = platformId;
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug") ?? "";
    this.article = this.newsService.getBySlug(slug);
    if (this.article) {
      this.seo.updateSeo({
        title: `${this.article.title} | Feather Dynamics`,
        description: this.article.excerpt,
        image: `https://featherdynamics.com${this.article.image}`,
        type: "article",
        publishedAt: this.article.publishedAt.toISOString(),
        author: "Feather Dynamics",
        keywords: "UAV, autonomous cargo, VTOL, logistics, Feather Dynamics"
      });
      this.seo.setJsonLd({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": this.article.title,
        "description": this.article.excerpt,
        "image": `https://featherdynamics.com${this.article.image}`,
        "datePublished": this.article.publishedAt.toISOString(),
        "author": {
          "@type": "Organization",
          "name": "Feather Dynamics"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Feather Dynamics",
          "logo": {
            "@type": "ImageObject",
            "url": "https://featherdynamics.com/assets/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "@id",
          "@id": `https://featherdynamics.com/news/${slug}`
        }
      });
      this.seo.generateBreadcrumbs();
    }
  }
  ngOnDestroy() {
    this.seo.removeArticleTags();
    this.seo.removeJsonLd();
  }
  ngAfterViewInit() {
    if (!this.isBrowser)
      return;
    setTimeout(() => {
      this.initReveal();
      this.extractHeadings();
      this.initHeadingTracker();
    }, 80);
  }
  // ── Share actions ─────────────────────────────────────────────
  get currentUrl() {
    return this.isBrowser ? window.location.href : "";
  }
  shareLinkedIn() {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.currentUrl)}`;
    window.open(url, "_blank", "width=600,height=500");
  }
  shareTwitter() {
    const text = encodeURIComponent(this.article?.title ?? "");
    const url = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(this.currentUrl)}`;
    window.open(url, "_blank", "width=600,height=400");
  }
  async copyLink() {
    try {
      await navigator.clipboard.writeText(this.currentUrl);
      this.copySuccess = true;
      setTimeout(() => this.copySuccess = false, 2200);
    } catch {
      const el = document.createElement("textarea");
      el.value = this.currentUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.copySuccess = true;
      setTimeout(() => this.copySuccess = false, 2200);
    }
  }
  // ── Scroll reveal ─────────────────────────────────────────────
  initReveal() {
    this.revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          this.revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -60px 0px" });
    [this.heroImg, this.titleBlock, this.sidebar, this.prose, this.articleFooter].forEach((ref) => {
      if (ref?.nativeElement)
        this.revealObserver.observe(ref.nativeElement);
    });
  }
  extractHeadings() {
    if (!this.prose?.nativeElement)
      return;
    this.headingEls = Array.from(this.prose.nativeElement.querySelectorAll("h2, h3"));
    this.headings = this.headingEls.map((h) => h.textContent?.trim() ?? "");
    this.headingEls.forEach((h, i) => h.setAttribute("id", `heading-${i}`));
  }
  initHeadingTracker() {
    if (!this.headingEls.length)
      return;
    const tracker = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = this.headingEls.indexOf(entry.target);
          if (idx !== -1)
            this.activeHeading = idx;
        }
      });
    }, { threshold: 1, rootMargin: "-20% 0px -60% 0px" });
    this.headingEls.forEach((h) => tracker.observe(h));
  }
  scrollToHeading(index) {
    this.headingEls[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  static \u0275fac = function NewsArticle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NewsArticle)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NewsService), \u0275\u0275directiveInject(SeoService), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsArticle, selectors: [["app-news-article"]], viewQuery: function NewsArticle_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c014, 5)(_c19, 5)(_c26, 5)(_c33, 5)(_c43, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.heroImg = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleBlock = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sidebar = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.prose = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.articleFooter = _t.first);
    }
  }, decls: 54, vars: 18, consts: [["articleRoot", ""], ["heroImg", ""], ["titleBlock", ""], ["sidebar", ""], ["prose", ""], ["articleFooter", ""], [1, "article"], [1, "article__hero"], [1, "article__hero-img", 3, "src", "alt"], [1, "article__hero-veil"], [1, "article__title-block"], [1, "article__meta-strip"], [1, "article__category"], [1, "article__meta-sep"], [1, "article__date"], [1, "article__title"], [1, "article__body"], [1, "article__sidebar"], [1, "article__sidebar-rule"], ["class", "article__toc", 4, "ngIf"], ["routerLink", "/news", 1, "article__back"], [1, "article__back-arrow"], [1, "article__prose"], [1, "article__excerpt"], [1, "article__content", 3, "data"], [1, "article__footer"], [1, "article__footer-rule"], [1, "article__footer-row"], [1, "article__footer-tag"], [1, "article__share"], [1, "article__share-label"], ["aria-label", "Share on LinkedIn", 1, "share-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"], ["aria-label", "Share on X", 1, "share-btn", 3, "click"], ["d", "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.02 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"], ["aria-label", "Copy link", 1, "share-btn", "share-btn--copy", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6", 4, "ngIf"], ["routerLink", "/news", 1, "article__footer-back"], [1, "article__toc"], [1, "article__toc-label"], ["class", "article__toc-link", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "article__toc-link", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6"], ["d", "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"], ["d", "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"], ["points", "20 6 9 17 4 12"]], template: function NewsArticle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 6, 0)(2, "div", 7);
      \u0275\u0275element(3, "img", 8, 1)(5, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 10, 2)(8, "div", 11)(9, "span", 12);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 13);
      \u0275\u0275text(12, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "time", 14);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "h1", 15);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 16)(19, "aside", 17, 3);
      \u0275\u0275element(21, "div", 18);
      \u0275\u0275template(22, NewsArticle_nav_22_Template, 4, 1, "nav", 19);
      \u0275\u0275elementStart(23, "a", 20)(24, "span", 21);
      \u0275\u0275text(25, "\u2190");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " All News ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "main", 22, 4)(29, "p", 23);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "markdown", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "footer", 25, 5);
      \u0275\u0275element(34, "div", 26);
      \u0275\u0275elementStart(35, "div", 27)(36, "span", 28);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "uppercase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 29)(40, "span", 30);
      \u0275\u0275text(41, "Share");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 31);
      \u0275\u0275listener("click", function NewsArticle_Template_button_click_42_listener() {
        return ctx.shareLinkedIn();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 32);
      \u0275\u0275element(44, "path", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "button", 34);
      \u0275\u0275listener("click", function NewsArticle_Template_button_click_45_listener() {
        return ctx.shareTwitter();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(46, "svg", 32);
      \u0275\u0275element(47, "path", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(48, "button", 36);
      \u0275\u0275listener("click", function NewsArticle_Template_button_click_48_listener() {
        return ctx.copyLink();
      });
      \u0275\u0275template(49, NewsArticle__svg_svg_49_Template, 3, 0, "svg", 37)(50, NewsArticle__svg_svg_50_Template, 2, 0, "svg", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "a", 38);
      \u0275\u0275text(52, "\u2190 Back to News");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(53, "app-cta");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.article == null ? null : ctx.article.image, \u0275\u0275sanitizeUrl)("alt", ctx.article == null ? null : ctx.article.title);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.article == null ? null : ctx.article.category);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 13, ctx.article == null ? null : ctx.article.publishedAt, "MMMM d, yyyy"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.article == null ? null : ctx.article.title);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.headings.length);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.article == null ? null : ctx.article.excerpt);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.article == null ? null : ctx.article.content);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(38, 16, ctx.article == null ? null : ctx.article.category), " \xB7 FEATHER DYNAMICS");
      \u0275\u0275advance(11);
      \u0275\u0275classProp("copied", ctx.copySuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.copySuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.copySuccess);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, Cta, MarkdownComponent, UpperCasePipe, DatePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  background: #f5f4f0;\n  font-family:\n    "Montserrat",\n    "Helvetica Neue",\n    sans-serif;\n}\n.article[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.article__hero[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 56vw;\n  max-height: 600px;\n  min-height: 260px;\n  overflow: hidden;\n  background: #0f172a;\n}\n.article__hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  filter: grayscale(25%) brightness(0.5);\n  display: block;\n  transform: scale(1.1);\n  transition: transform 1.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.article__hero-img.in-view[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.article__hero-veil[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent 35%,\n      rgba(245, 244, 240, 0.5) 80%,\n      #f5f4f0 100%);\n  pointer-events: none;\n}\n.article__title-block[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  background: #f5f4f0;\n  max-width: 860px;\n  margin: -64px 24px 0;\n  padding: 40px 0 0;\n  opacity: 0;\n  transform: translateY(28px);\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;\n}\n.article__title-block.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n@media (min-width: 640px) {\n  .article__title-block[_ngcontent-%COMP%] {\n    margin: -80px 48px 0;\n  }\n}\n@media (min-width: 1024px) {\n  .article__title-block[_ngcontent-%COMP%] {\n    margin: -100px 80px 0;\n    padding-top: 52px;\n  }\n}\n@media (min-width: 1280px) {\n  .article__title-block[_ngcontent-%COMP%] {\n    margin: -100px auto 0;\n    padding-left: 80px;\n    max-width: 1200px;\n  }\n}\n.article__meta-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.article__category[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 9px;\n  letter-spacing: 0.26em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  border: 1px solid rgba(184, 155, 94, 0.3);\n  padding: 4px 10px;\n}\n.article__meta-sep[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 10px;\n  color: #94a3b8;\n}\n.article__date[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 9px;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.article__title[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: clamp(2rem, 5vw, 3rem);\n  font-weight: 500;\n  line-height: 0.92;\n  text-transform: uppercase;\n  color: #0f172a;\n  margin: 0;\n}\n.article__body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 52px 24px 80px;\n  gap: 48px;\n}\n@media (min-width: 640px) {\n  .article__body[_ngcontent-%COMP%] {\n    padding: 60px 48px 96px;\n  }\n}\n@media (min-width: 1024px) {\n  .article__body[_ngcontent-%COMP%] {\n    grid-template-columns: 200px 1fr;\n    gap: 72px;\n    padding: 72px 80px 120px;\n    align-items: start;\n  }\n}\n.article__sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n@media (min-width: 1024px) {\n  .article__sidebar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 32px;\n    position: sticky;\n    top: 96px;\n    opacity: 0;\n    transform: translateX(-18px);\n    transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;\n  }\n  .article__sidebar.in-view[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.article__sidebar-rule[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 1024px) {\n  .article__sidebar-rule[_ngcontent-%COMP%] {\n    display: block;\n    width: 28px;\n    height: 1px;\n    background: var(--color-accent);\n  }\n}\n.article__toc[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 1024px) {\n  .article__toc[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n}\n.article__toc-label[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 9px;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  margin-bottom: 6px;\n}\n.article__toc-link[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  cursor: pointer;\n  line-height: 1.5;\n  padding-left: 0;\n  border-left: 1px solid transparent;\n  transition:\n    color 0.25s,\n    padding-left 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n    border-color 0.25s;\n}\n.article__toc-link[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  padding-left: 10px;\n}\n.article__toc-link.active[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  border-left-color: var(--color-accent);\n  padding-left: 10px;\n}\n.article__back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--font-secondary);\n  font-size: 10px;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  text-decoration: none;\n  transition: color 0.25s, gap 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.article__back[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  gap: 14px;\n}\n.article__back-arrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.article__back[_ngcontent-%COMP%]:hover   .article__back-arrow[_ngcontent-%COMP%] {\n  transform: translateX(-5px);\n}\n.article__prose[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(22px);\n  transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;\n}\n.article__prose.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.article__excerpt[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  line-height: 1.55;\n  color: #475569;\n  font-weight: 300;\n  margin: 0 0 44px;\n  padding-bottom: 44px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  max-width: 680px;\n}\n.article__content[_ngcontent-%COMP%] {\n  font-size: var(--text);\n  line-height: 1.9;\n  color: #475569;\n  font-weight: 300;\n  max-width: 720px;\n}\n.article__content[_ngcontent-%COMP%]     h2 {\n  font-family: var(--font-secondary);\n  font-size: var(--text-xl);\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: #0f172a;\n  margin: 2.75em 0 0.75em;\n  line-height: 1;\n}\n.article__content[_ngcontent-%COMP%]     h3 {\n  font-family: var(--font-secondary);\n  font-size: var(--text);\n  font-weight: 400;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #0f172a;\n  margin: 2em 0 0.6em;\n}\n.article__content[_ngcontent-%COMP%]     p {\n  margin: 0 0 1.6em;\n}\n.article__content[_ngcontent-%COMP%]     a {\n  color: #0f172a;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n  transition: color 0.2s;\n}\n.article__content[_ngcontent-%COMP%]     a:hover {\n  color: var(--color-accent);\n}\n.article__content[_ngcontent-%COMP%]     blockquote {\n  margin: 2.5em 0;\n  padding: 0 0 0 24px;\n  border-left: 2px solid var(--color-accent);\n  font-style: italic;\n  color: #475569;\n}\n.article__content[_ngcontent-%COMP%]     img {\n  width: 100%;\n  height: auto;\n  display: block;\n  margin: 2.5em 0;\n  filter: grayscale(15%);\n}\n.article__content[_ngcontent-%COMP%]     ul, \n.article__content[_ngcontent-%COMP%]     ol {\n  padding-left: 1.4em;\n  margin: 0 0 1.6em;\n}\n.article__content[_ngcontent-%COMP%]     ul li, \n.article__content[_ngcontent-%COMP%]     ol li {\n  margin-bottom: 0.5em;\n}\n.article__content[_ngcontent-%COMP%]     strong {\n  font-weight: 500;\n  color: #0f172a;\n}\n.article__content[_ngcontent-%COMP%]     hr {\n  border: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  margin: 3em 0;\n}\n.article__footer[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px 80px;\n  opacity: 0;\n  transform: translateY(14px);\n  transition: opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.article__footer.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n@media (min-width: 640px) {\n  .article__footer[_ngcontent-%COMP%] {\n    padding: 0 48px 80px;\n  }\n}\n@media (min-width: 1024px) {\n  .article__footer[_ngcontent-%COMP%] {\n    padding: 0 80px 100px;\n  }\n}\n.article__footer-rule[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(0, 0, 0, 0.08);\n  margin-bottom: 28px;\n}\n.article__footer-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.article__footer-tag[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 9px;\n  letter-spacing: 0.22em;\n  color: #94a3b8;\n}\n.article__footer-back[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 10px;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #475569;\n  text-decoration: none;\n  transition: color 0.25s;\n}\n.article__footer-back[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.article__share[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.article__share-label[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 9px;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  margin-right: 4px;\n}\n.share-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  background: transparent;\n  cursor: pointer;\n  color: #94a3b8;\n  transition:\n    color 0.2s,\n    border-color 0.2s,\n    background 0.2s;\n}\n.share-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n}\n.share-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  border-color: rgba(0, 0, 0, 0.3);\n}\n.share-btn--copy.copied[_ngcontent-%COMP%] {\n  color: #2d6a4f;\n  border-color: #2d6a4f;\n  background: rgba(45, 106, 79, 0.06);\n}\n/*# sourceMappingURL=news-article.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewsArticle, [{
    type: Component,
    args: [{ selector: "app-news-article", standalone: true, imports: [CommonModule, RouterModule, DatePipe, Cta, MarkdownComponent], template: `<div class="article" #articleRoot>\r
\r
    <!-- \u2500\u2500 Hero \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="article__hero">\r
        <img [src]="article?.image" [alt]="article?.title" class="article__hero-img" #heroImg />\r
        <div class="article__hero-veil"></div>\r
    </div>\r
\r
    <!-- \u2500\u2500 Offset Title Block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="article__title-block" #titleBlock>\r
        <div class="article__meta-strip">\r
            <span class="article__category">{{ article?.category }}</span>\r
            <span class="article__meta-sep">\u2014</span>\r
            <time class="article__date">{{ article?.publishedAt | date:'MMMM d, yyyy' }}</time>\r
        </div>\r
        <h1 class="article__title">{{ article?.title }}</h1>\r
    </div>\r
\r
    <!-- \u2500\u2500 Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="article__body">\r
\r
        <!-- Sidebar -->\r
        <aside class="article__sidebar" #sidebar>\r
            <div class="article__sidebar-rule"></div>\r
\r
            <nav class="article__toc" *ngIf="headings.length">\r
                <span class="article__toc-label">Contents</span>\r
                <a *ngFor="let h of headings; let i = index" class="article__toc-link"\r
                    [class.active]="activeHeading === i" (click)="scrollToHeading(i)">\r
                    {{ h }}\r
                </a>\r
            </nav>\r
\r
            <a routerLink="/news" class="article__back">\r
                <span class="article__back-arrow">\u2190</span>\r
                All News\r
            </a>\r
        </aside>\r
\r
        <!-- Prose -->\r
        <main class="article__prose" #prose>\r
            <p class="article__excerpt">{{ article?.excerpt }}</p>\r
            <!-- <div class="article__content" [innerHTML]="article?.content"></div> -->\r
            <markdown [data]="article?.content" class="article__content"/>\r
        </main>\r
\r
    </div>\r
\r
<!-- \u2500\u2500 Footer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<footer class="article__footer" #articleFooter>\r
    <div class="article__footer-rule"></div>\r
    <div class="article__footer-row">\r
        <span class="article__footer-tag">{{ article?.category | uppercase }} \xB7 FEATHER DYNAMICS</span>\r
\r
        <!-- Share bar -->\r
        <div class="article__share">\r
            <span class="article__share-label">Share</span>\r
\r
            <!-- LinkedIn -->\r
            <button class="share-btn" (click)="shareLinkedIn()" aria-label="Share on LinkedIn">\r
                <svg viewBox="0 0 24 24" fill="currentColor">\r
                    <path\r
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />\r
                </svg>\r
            </button>\r
\r
            <!-- X / Twitter -->\r
            <button class="share-btn" (click)="shareTwitter()" aria-label="Share on X">\r
                <svg viewBox="0 0 24 24" fill="currentColor">\r
                    <path\r
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.02 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />\r
                </svg>\r
            </button>\r
\r
            <!-- Copy link -->\r
            <button class="share-btn share-btn--copy" [class.copied]="copySuccess" (click)="copyLink()"\r
                aria-label="Copy link">\r
                <svg *ngIf="!copySuccess" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">\r
                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />\r
                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />\r
                </svg>\r
                <svg *ngIf="copySuccess" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">\r
                    <polyline points="20 6 9 17 4 12" />\r
                </svg>\r
            </button>\r
        </div>\r
\r
        <a routerLink="/news" class="article__footer-back">\u2190 Back to News</a>\r
    </div>\r
</footer>\r
\r
    <app-cta></app-cta>\r
</div>\r
`, styles: ['/* src/app/pages/news-article/news-article.scss */\n:host {\n  display: block;\n  background: #f5f4f0;\n  font-family:\n    "Montserrat",\n    "Helvetica Neue",\n    sans-serif;\n}\n.article {\n  min-height: 100vh;\n}\n.article__hero {\n  position: relative;\n  width: 100%;\n  height: 56vw;\n  max-height: 600px;\n  min-height: 260px;\n  overflow: hidden;\n  background: #0f172a;\n}\n.article__hero-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  filter: grayscale(25%) brightness(0.5);\n  display: block;\n  transform: scale(1.1);\n  transition: transform 1.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.article__hero-img.in-view {\n  transform: scale(1);\n}\n.article__hero-veil {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent 35%,\n      rgba(245, 244, 240, 0.5) 80%,\n      #f5f4f0 100%);\n  pointer-events: none;\n}\n.article__title-block {\n  position: relative;\n  z-index: 2;\n  background: #f5f4f0;\n  max-width: 860px;\n  margin: -64px 24px 0;\n  padding: 40px 0 0;\n  opacity: 0;\n  transform: translateY(28px);\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;\n}\n.article__title-block.in-view {\n  opacity: 1;\n  transform: translateY(0);\n}\n@media (min-width: 640px) {\n  .article__title-block {\n    margin: -80px 48px 0;\n  }\n}\n@media (min-width: 1024px) {\n  .article__title-block {\n    margin: -100px 80px 0;\n    padding-top: 52px;\n  }\n}\n@media (min-width: 1280px) {\n  .article__title-block {\n    margin: -100px auto 0;\n    padding-left: 80px;\n    max-width: 1200px;\n  }\n}\n.article__meta-strip {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.article__category {\n  font-family: var(--font-secondary);\n  font-size: 9px;\n  letter-spacing: 0.26em;\n  text-transform: uppercase;\n  color: var(--color-accent);\n  border: 1px solid rgba(184, 155, 94, 0.3);\n  padding: 4px 10px;\n}\n.article__meta-sep {\n  font-family: var(--font-secondary);\n  font-size: 10px;\n  color: #94a3b8;\n}\n.article__date {\n  font-family: var(--font-secondary);\n  font-size: 9px;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.article__title {\n  font-family: var(--font-secondary);\n  font-size: clamp(2rem, 5vw, 3rem);\n  font-weight: 500;\n  line-height: 0.92;\n  text-transform: uppercase;\n  color: #0f172a;\n  margin: 0;\n}\n.article__body {\n  display: grid;\n  grid-template-columns: 1fr;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 52px 24px 80px;\n  gap: 48px;\n}\n@media (min-width: 640px) {\n  .article__body {\n    padding: 60px 48px 96px;\n  }\n}\n@media (min-width: 1024px) {\n  .article__body {\n    grid-template-columns: 200px 1fr;\n    gap: 72px;\n    padding: 72px 80px 120px;\n    align-items: start;\n  }\n}\n.article__sidebar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n@media (min-width: 1024px) {\n  .article__sidebar {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 32px;\n    position: sticky;\n    top: 96px;\n    opacity: 0;\n    transform: translateX(-18px);\n    transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;\n  }\n  .article__sidebar.in-view {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.article__sidebar-rule {\n  display: none;\n}\n@media (min-width: 1024px) {\n  .article__sidebar-rule {\n    display: block;\n    width: 28px;\n    height: 1px;\n    background: var(--color-accent);\n  }\n}\n.article__toc {\n  display: none;\n}\n@media (min-width: 1024px) {\n  .article__toc {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n}\n.article__toc-label {\n  font-family: var(--font-secondary);\n  font-size: 9px;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  margin-bottom: 6px;\n}\n.article__toc-link {\n  font-family: var(--font-secondary);\n  font-size: 10px;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  cursor: pointer;\n  line-height: 1.5;\n  padding-left: 0;\n  border-left: 1px solid transparent;\n  transition:\n    color 0.25s,\n    padding-left 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n    border-color 0.25s;\n}\n.article__toc-link:hover {\n  color: #0f172a;\n  padding-left: 10px;\n}\n.article__toc-link.active {\n  color: var(--color-accent);\n  border-left-color: var(--color-accent);\n  padding-left: 10px;\n}\n.article__back {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--font-secondary);\n  font-size: 10px;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  text-decoration: none;\n  transition: color 0.25s, gap 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.article__back:hover {\n  color: #0f172a;\n  gap: 14px;\n}\n.article__back-arrow {\n  display: inline-block;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.article__back:hover .article__back-arrow {\n  transform: translateX(-5px);\n}\n.article__prose {\n  opacity: 0;\n  transform: translateY(22px);\n  transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;\n}\n.article__prose.in-view {\n  opacity: 1;\n  transform: translateY(0);\n}\n.article__excerpt {\n  font-size: var(--text-xl);\n  line-height: 1.55;\n  color: #475569;\n  font-weight: 300;\n  margin: 0 0 44px;\n  padding-bottom: 44px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  max-width: 680px;\n}\n.article__content {\n  font-size: var(--text);\n  line-height: 1.9;\n  color: #475569;\n  font-weight: 300;\n  max-width: 720px;\n}\n.article__content ::ng-deep h2 {\n  font-family: var(--font-secondary);\n  font-size: var(--text-xl);\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: #0f172a;\n  margin: 2.75em 0 0.75em;\n  line-height: 1;\n}\n.article__content ::ng-deep h3 {\n  font-family: var(--font-secondary);\n  font-size: var(--text);\n  font-weight: 400;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #0f172a;\n  margin: 2em 0 0.6em;\n}\n.article__content ::ng-deep p {\n  margin: 0 0 1.6em;\n}\n.article__content ::ng-deep a {\n  color: #0f172a;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n  transition: color 0.2s;\n}\n.article__content ::ng-deep a:hover {\n  color: var(--color-accent);\n}\n.article__content ::ng-deep blockquote {\n  margin: 2.5em 0;\n  padding: 0 0 0 24px;\n  border-left: 2px solid var(--color-accent);\n  font-style: italic;\n  color: #475569;\n}\n.article__content ::ng-deep img {\n  width: 100%;\n  height: auto;\n  display: block;\n  margin: 2.5em 0;\n  filter: grayscale(15%);\n}\n.article__content ::ng-deep ul,\n.article__content ::ng-deep ol {\n  padding-left: 1.4em;\n  margin: 0 0 1.6em;\n}\n.article__content ::ng-deep ul li,\n.article__content ::ng-deep ol li {\n  margin-bottom: 0.5em;\n}\n.article__content ::ng-deep strong {\n  font-weight: 500;\n  color: #0f172a;\n}\n.article__content ::ng-deep hr {\n  border: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  margin: 3em 0;\n}\n.article__footer {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px 80px;\n  opacity: 0;\n  transform: translateY(14px);\n  transition: opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.article__footer.in-view {\n  opacity: 1;\n  transform: translateY(0);\n}\n@media (min-width: 640px) {\n  .article__footer {\n    padding: 0 48px 80px;\n  }\n}\n@media (min-width: 1024px) {\n  .article__footer {\n    padding: 0 80px 100px;\n  }\n}\n.article__footer-rule {\n  height: 1px;\n  background: rgba(0, 0, 0, 0.08);\n  margin-bottom: 28px;\n}\n.article__footer-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.article__footer-tag {\n  font-family: var(--font-secondary);\n  font-size: 9px;\n  letter-spacing: 0.22em;\n  color: #94a3b8;\n}\n.article__footer-back {\n  font-family: var(--font-secondary);\n  font-size: 10px;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #475569;\n  text-decoration: none;\n  transition: color 0.25s;\n}\n.article__footer-back:hover {\n  color: #0f172a;\n}\n.article__share {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.article__share-label {\n  font-family: var(--font-secondary);\n  font-size: 9px;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  margin-right: 4px;\n}\n.share-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  background: transparent;\n  cursor: pointer;\n  color: #94a3b8;\n  transition:\n    color 0.2s,\n    border-color 0.2s,\n    background 0.2s;\n}\n.share-btn svg {\n  width: 13px;\n  height: 13px;\n}\n.share-btn:hover {\n  color: #0f172a;\n  border-color: rgba(0, 0, 0, 0.3);\n}\n.share-btn--copy.copied {\n  color: #2d6a4f;\n  border-color: #2d6a4f;\n  background: rgba(45, 106, 79, 0.06);\n}\n/*# sourceMappingURL=news-article.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: NewsService }, { type: SeoService }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { heroImg: [{
    type: ViewChild,
    args: ["heroImg"]
  }], titleBlock: [{
    type: ViewChild,
    args: ["titleBlock"]
  }], sidebar: [{
    type: ViewChild,
    args: ["sidebar"]
  }], prose: [{
    type: ViewChild,
    args: ["prose"]
  }], articleFooter: [{
    type: ViewChild,
    args: ["articleFooter"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsArticle, { className: "NewsArticle", filePath: "src/app/pages/news-article/news-article.ts", lineNumber: 19 });
})();

// src/app/pages/not-found/not-found.ts
var NotFound = class _NotFound {
  static \u0275fac = function NotFound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFound)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFound, selectors: [["app-not-found"]], decls: 8, vars: 0, consts: [[1, "not-found"], [1, "not-found__content"], ["routerLink", "/", 1, "not-found__link"]], template: function NotFound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Page not found");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 2);
      \u0275\u0275text(7, " Back to home ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterModule, RouterLink], styles: ["\n.not-found[_ngcontent-%COMP%] {\n  min-height: 100dvh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  background: #000;\n  color: #fff;\n}\n.not-found__content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 420px;\n  width: 100%;\n}\n.not-found[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  line-height: 1;\n  margin-bottom: 0.75rem;\n  font-weight: 400;\n  color: #fff;\n}\n.not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text);\n  opacity: 0.75;\n  margin-bottom: 2rem;\n  color: #fff;\n}\n.not-found__link[_ngcontent-%COMP%] {\n  font-size: var(--text);\n  text-decoration: none;\n  color: #fff;\n  cursor: pointer;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  padding: 0.75rem 1.75rem;\n  display: inline-block;\n  background: transparent;\n}\n/*# sourceMappingURL=not-found.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFound, [{
    type: Component,
    args: [{ selector: "app-not-found", imports: [RouterModule, RouterLink], template: '<section class="not-found">\r\n    <div class="not-found__content">\r\n        <h1>404</h1>\r\n        <p>Page not found</p>\r\n\r\n        <a routerLink="/" class="not-found__link">\r\n            Back to home\r\n        </a>\r\n    </div>\r\n</section>', styles: ["/* src/app/pages/not-found/not-found.scss */\n.not-found {\n  min-height: 100dvh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  background: #000;\n  color: #fff;\n}\n.not-found__content {\n  text-align: center;\n  max-width: 420px;\n  width: 100%;\n}\n.not-found h1 {\n  font-size: var(--text-2xl);\n  line-height: 1;\n  margin-bottom: 0.75rem;\n  font-weight: 400;\n  color: #fff;\n}\n.not-found p {\n  font-size: var(--text);\n  opacity: 0.75;\n  margin-bottom: 2rem;\n  color: #fff;\n}\n.not-found__link {\n  font-size: var(--text);\n  text-decoration: none;\n  color: #fff;\n  cursor: pointer;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  padding: 0.75rem 1.75rem;\n  display: inline-block;\n  background: transparent;\n}\n/*# sourceMappingURL=not-found.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFound, { className: "NotFound", filePath: "src/app/pages/not-found/not-found.ts", lineNumber: 10 });
})();

// src/app/core/services/gtm.service.ts
var GtmService = class _GtmService {
  platformId;
  constructor(platformId) {
    this.platformId = platformId;
  }
  push(event) {
    if (isPlatformBrowser(this.platformId) && typeof dataLayer !== "undefined") {
      dataLayer.push(event);
    }
  }
  trackPageView(url, title) {
    this.push({
      event: "page_view",
      page_path: url,
      page_title: title
    });
  }
  trackEvent(eventName, params) {
    this.push(__spreadValues({
      event: eventName
    }, params));
  }
  static \u0275fac = function GtmService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GtmService)(\u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GtmService, factory: _GtmService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GtmService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();

// src/app/pages/darpa/darpa.ts
var _c015 = ["timelineItem"];
function Darpa_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11, 0)(2, "div", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 16);
    \u0275\u0275element(11, "div", 17)(12, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 19)(14, "p", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h3", 21);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 22);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 23);
    \u0275\u0275element(21, "span", 24);
    \u0275\u0275elementStart(22, "span", 25);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275classMap("tl__entry--" + entry_r1.status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 11, i_r2 + 1, "2.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r1.date);
    \u0275\u0275advance();
    \u0275\u0275classMap("tl__tag--" + entry_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r1.tag);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(entry_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", entry_r1.status === "completed" ? "Completed" : entry_r1.status === "active" ? "In Progress" : "Upcoming", " ");
  }
}
var Darpa = class _Darpa {
  seo;
  gtm;
  platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  observer;
  constructor(seo, gtm) {
    this.seo = seo;
    this.gtm = gtm;
  }
  timelineItems;
  entries = [
    {
      date: "2026",
      label: "Development",
      title: "Development with CSUMB Mechatronics Department",
      description: "Active collaboration with the California State University Monterey Bay Mechatronics Department to design, build, and iterate on the platform competing in the DARPA LIFT Challenge.",
      status: "active",
      tag: "In Progress"
    },
    {
      date: "May 2026",
      label: "Flight Test",
      title: "First Flight",
      description: "First full flight of the Feather Dynamics platform developed in collaboration with the CSUMB Mechatronics Department. A critical milestone validating the complete system integration.",
      status: "upcoming",
      tag: "Upcoming"
    },
    {
      date: "August 2026",
      label: "Challenge Event",
      title: "DARPA LIFT Challenge Event",
      description: "Live demonstration and evaluation at the DARPA LIFT Challenge event. Feather Dynamics competes on the national stage with its next-generation unmanned platform.",
      status: "upcoming",
      tag: "Target"
    }
  ];
  ngOnInit() {
    this.seo.updateSeo({
      title: "DARPA LIFT Challenge | Feather Dynamics",
      description: "Feather Dynamics is developing the next generation of unmanned aerial platforms for the DARPA LIFT Challenge. Learn about our progress and upcoming milestones.",
      image: "https://featherdynamics.com/assets/fdmetapic-darpa.png",
      keywords: "DARPA LIFT, unmanned aerial platforms, Feather Dynamics, robotics, autonomous systems, UAV, defense technology, next-generation flight, aerospace engineering, CSUMB, mechatronics, unmanned vehicle technology, autonomous vehicle design, defense applications, UAV payload engineering, multi-domain autonomous platforms, autonomous innovation, UAV manufacturers, tactical UAV development, autonomous ISR, autonomous system integration, edge computing for unmanned systems, mission-critical unmanned vehicles, commercial autonomous flight solutions"
    });
    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "DARPA LiFT | Feather Dynamics",
      "url": "https://featherdynamics.com/darpa-lift",
      "description": "Feather Dynamics is a participant in the DARPA Lifting Insect-inspired Flight Technology (LiFT) program, developing next-generation autonomous micro aerial vehicle systems for defense applications.",
      "image": "https://featherdynamics.com/assets/fdmetapic-darpa.png",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Feather Dynamics",
        "url": "https://featherdynamics.com"
      },
      "about": {
        "@type": "ResearchProject",
        "name": "DARPA LiFT Program",
        "url": "https://www.darpa.mil",
        "funder": {
          "@type": "GovernmentOrganization",
          "name": "Defense Advanced Research Projects Agency (DARPA)",
          "url": "https://www.darpa.mil"
        }
      },
      "author": {
        "@type": "Organization",
        "name": "Feather Dynamics",
        "url": "https://featherdynamics.com",
        "logo": "https://featherdynamics.com/assets/fdmetapic.jpg"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://featherdynamics.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "DARPA LiFT",
            "item": "https://featherdynamics.com/darpa-lift"
          }
        ]
      }
    });
    this.seo.generateBreadcrumbs();
  }
  onLearnMoreClick() {
    this.gtm.trackEvent("cta_label", {
      cta_label: "Learn More",
      page: "/darpa-lift"
    });
  }
  ngAfterViewInit() {
    if (!this.isBrowser)
      return;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          this.observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    this.timelineItems.forEach((item) => this.observer.observe(item.nativeElement));
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  static \u0275fac = function Darpa_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Darpa)(\u0275\u0275directiveInject(SeoService), \u0275\u0275directiveInject(GtmService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Darpa, selectors: [["app-darpa"]], viewQuery: function Darpa_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c015, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.timelineItems = _t);
    }
  }, decls: 15, vars: 3, consts: [["timelineItem", ""], [3, "title", "bgImage"], [1, "darpa"], [1, "darpa__intro", "global-container"], [1, "darpa__label"], [1, "darpa__heading"], [1, "accent"], [1, "darpa__body"], [1, "darpa__timeline", "global-container"], [1, "tl"], ["class", "tl__entry", 3, "class", 4, "ngFor", "ngForOf"], [1, "tl__entry"], [1, "tl__index"], [1, "tl__meta"], [1, "tl__date"], [1, "tl__tag"], [1, "tl__divider"], [1, "tl__dot"], [1, "tl__line"], [1, "tl__content"], [1, "tl__label"], [1, "tl__title"], [1, "tl__desc"], [1, "tl__status"], [1, "tl__status-dot"], [1, "tl__status-text"]], template: function Darpa_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-page-header", 1);
      \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "p", 4);
      \u0275\u0275text(4, "[ PROGRAM OVERVIEW ]");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 5);
      \u0275\u0275text(6, " Road to the ");
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "DARPA LIFT Challenge");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " Feather Dynamics is actively competing in the DARPA LIFT Challenge \u2014 a national program pushing the boundaries of unmanned aerial systems. Below is a live view of our journey from inception to the challenge event, showing the most recent updates first. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "div", 9);
      \u0275\u0275template(13, Darpa_div_13_Template, 24, 14, "div", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(14, "app-cta");
    }
    if (rf & 2) {
      \u0275\u0275property("title", "DARPA LIFT")("bgImage", "/assets/images/darpa-lift.png");
      \u0275\u0275advance(13);
      \u0275\u0275property("ngForOf", ctx.entries);
    }
  }, dependencies: [CommonModule, NgForOf, PageHeader, Cta, DecimalPipe], styles: ["\n.darpa[_ngcontent-%COMP%] {\n  background: var(--color-black);\n  background-image: url(/assets/decos/aerial-deco-back-2.png);\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n}\n.darpa__intro[_ngcontent-%COMP%] {\n  max-width: 860px;\n  padding-top: 5rem;\n  padding-bottom: 4rem;\n  text-align: center;\n  margin: 0 auto;\n}\n.darpa__label[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.75rem;\n  letter-spacing: 0.2em;\n  color: var(--color-accent);\n  margin-bottom: 1.5rem;\n}\n.darpa__heading[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: clamp(2rem, 5vw, 3.75rem);\n  font-weight: 700;\n  color: var(--color-white);\n  line-height: 1.1;\n  margin-bottom: 2rem;\n  letter-spacing: -0.02em;\n}\n.darpa__heading[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.darpa__body[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: clamp(0.875rem, 1.2vw, 1rem);\n  color: rgba(255, 255, 255, 0.45);\n  line-height: 1.9;\n  font-weight: 300;\n  max-width: 680px;\n  margin: 0 auto;\n}\n.darpa__timeline[_ngcontent-%COMP%] {\n  padding-bottom: 7rem;\n}\n.tl[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 860px;\n  margin: 0 auto;\n}\n.tl__entry[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3rem 1fr;\n  grid-template-rows: auto auto;\n  gap: 0 1.5rem;\n  padding: 2.5rem 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  opacity: 0;\n  transform: translateY(30px);\n  transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.tl__entry.in-view[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.tl__entry[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n@media (min-width: 768px) {\n  .tl__entry[_ngcontent-%COMP%] {\n    grid-template-columns: 3rem 200px 1px 1fr;\n    grid-template-rows: 1fr;\n    gap: 0 2rem;\n    align-items: start;\n    padding: 3rem 0;\n  }\n}\n.tl__index[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.06);\n  line-height: 1;\n  grid-column: 1;\n  grid-row: 1;\n  align-self: start;\n  padding-top: 0.1em;\n}\n.tl__entry--active[_ngcontent-%COMP%]   .tl__index[_ngcontent-%COMP%] {\n  color: var(--accent-highlight);\n}\n.tl__meta[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  padding-top: 0.25rem;\n}\n@media (min-width: 768px) {\n  .tl__meta[_ngcontent-%COMP%] {\n    padding-top: 0.15rem;\n  }\n}\n.tl__date[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  color: rgba(255, 255, 255, 0.3);\n}\n.tl__tag[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.6rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  padding: 0.2rem 0.55rem;\n  border: 1px solid;\n  align-self: flex-start;\n}\n.tl__tag--completed[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  border-color: rgba(4, 64, 178, 0.4);\n  background: rgba(4, 64, 178, 0.08);\n}\n.tl__tag--active[_ngcontent-%COMP%] {\n  color: var(--accent-highlight);\n  border-color: rgba(0, 180, 216, 0.35);\n  background: rgba(0, 180, 216, 0.07);\n}\n.tl__tag--upcoming[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.tl__divider[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) {\n  .tl__divider[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-column: 3;\n    grid-row: 1;\n    height: 100%;\n  }\n}\n.tl__dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 0.3rem;\n}\n.tl__entry--completed[_ngcontent-%COMP%]   .tl__dot[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n  box-shadow: 0 0 8px rgba(4, 64, 178, 0.5);\n}\n.tl__entry--active[_ngcontent-%COMP%]   .tl__dot[_ngcontent-%COMP%] {\n  background: var(--accent-highlight);\n  box-shadow: 0 0 12px rgba(0, 180, 216, 0.6);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.tl__entry--upcoming[_ngcontent-%COMP%]   .tl__dot[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.tl__line[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin-top: 0.4rem;\n}\n.tl__entry[_ngcontent-%COMP%]:last-child   .tl__line[_ngcontent-%COMP%] {\n  display: none;\n}\n.tl__content[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 2;\n  padding-top: 1.25rem;\n}\n@media (min-width: 768px) {\n  .tl__content[_ngcontent-%COMP%] {\n    grid-column: 4;\n    grid-row: 1;\n    padding-top: 0;\n  }\n}\n.tl__label[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.2);\n  margin-bottom: 0.5rem;\n}\n.tl__title[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: clamp(1rem, 2vw, 1.2rem);\n  font-weight: 600;\n  color: var(--color-white);\n  letter-spacing: 0.01em;\n  margin-bottom: 0.85rem;\n  line-height: 1.3;\n}\n.tl__entry--upcoming[_ngcontent-%COMP%]   .tl__title[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.35);\n}\n.tl__desc[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: clamp(0.85rem, 1.1vw, 0.95rem);\n  color: rgba(255, 255, 255, 0.38);\n  line-height: 1.85;\n  font-weight: 300;\n  margin-bottom: 1.25rem;\n  max-width: 620px;\n}\n.tl__entry--active[_ngcontent-%COMP%]   .tl__desc[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n.tl__status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.tl__status-dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.tl__entry--completed[_ngcontent-%COMP%]   .tl__status-dot[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n}\n.tl__entry--active[_ngcontent-%COMP%]   .tl__status-dot[_ngcontent-%COMP%] {\n  background: var(--accent-highlight);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.tl__entry--upcoming[_ngcontent-%COMP%]   .tl__status-dot[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n}\n.tl__status-text[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.65rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.tl__entry--completed[_ngcontent-%COMP%]   .tl__status-text[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.tl__entry--active[_ngcontent-%COMP%]   .tl__status-text[_ngcontent-%COMP%] {\n  color: var(--accent-highlight);\n}\n.tl__entry--upcoming[_ngcontent-%COMP%]   .tl__status-text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.18);\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.35;\n  }\n}\n/*# sourceMappingURL=darpa.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Darpa, [{
    type: Component,
    args: [{ selector: "app-darpa", imports: [CommonModule, PageHeader, Cta], template: `<app-page-header [title]="'DARPA LIFT'" [bgImage]="'/assets/images/darpa-lift.png'"></app-page-header>

<section class="darpa">
    <div class="darpa__intro global-container">
        <p class="darpa__label">[ PROGRAM OVERVIEW ]</p>
        <h2 class="darpa__heading">
            Road to the <span class="accent">DARPA LIFT Challenge</span>
        </h2>
        <p class="darpa__body">
            Feather Dynamics is actively competing in the DARPA LIFT Challenge \u2014 a national program pushing the
            boundaries of unmanned aerial systems. Below is a live view of our journey from inception to the
            challenge event, showing the most recent updates first.
        </p>
    </div>

    <div class="darpa__timeline global-container">
        <div class="tl">
            <div
                class="tl__entry"
                *ngFor="let entry of entries; let i = index"
                [class]="'tl__entry--' + entry.status"
                #timelineItem
            >
                <div class="tl__index">{{ (i + 1) | number:'2.0-0' }}</div>

                <div class="tl__meta">
                    <span class="tl__date">{{ entry.date }}</span>
                    <span class="tl__tag" [class]="'tl__tag--' + entry.status">{{ entry.tag }}</span>
                </div>

                <div class="tl__divider">
                    <div class="tl__dot"></div>
                    <div class="tl__line"></div>
                </div>

                <div class="tl__content">
                    <p class="tl__label">{{ entry.label }}</p>
                    <h3 class="tl__title">{{ entry.title }}</h3>
                    <p class="tl__desc">{{ entry.description }}</p>
                    <div class="tl__status">
                        <span class="tl__status-dot"></span>
                        <span class="tl__status-text">
                            {{ entry.status === 'completed' ? 'Completed' : entry.status === 'active' ? 'In Progress' : 'Upcoming' }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<app-cta></app-cta>
`, styles: ["/* src/app/pages/darpa/darpa.scss */\n.darpa {\n  background: var(--color-black);\n  background-image: url(/assets/decos/aerial-deco-back-2.png);\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n}\n.darpa__intro {\n  max-width: 860px;\n  padding-top: 5rem;\n  padding-bottom: 4rem;\n  text-align: center;\n  margin: 0 auto;\n}\n.darpa__label {\n  font-family: var(--font-secondary);\n  font-size: 0.75rem;\n  letter-spacing: 0.2em;\n  color: var(--color-accent);\n  margin-bottom: 1.5rem;\n}\n.darpa__heading {\n  font-family: var(--font-secondary);\n  font-size: clamp(2rem, 5vw, 3.75rem);\n  font-weight: 700;\n  color: var(--color-white);\n  line-height: 1.1;\n  margin-bottom: 2rem;\n  letter-spacing: -0.02em;\n}\n.darpa__heading .accent {\n  color: var(--color-accent);\n}\n.darpa__body {\n  font-family: var(--font-body);\n  font-size: clamp(0.875rem, 1.2vw, 1rem);\n  color: rgba(255, 255, 255, 0.45);\n  line-height: 1.9;\n  font-weight: 300;\n  max-width: 680px;\n  margin: 0 auto;\n}\n.darpa__timeline {\n  padding-bottom: 7rem;\n}\n.tl {\n  display: flex;\n  flex-direction: column;\n  max-width: 860px;\n  margin: 0 auto;\n}\n.tl__entry {\n  display: grid;\n  grid-template-columns: 3rem 1fr;\n  grid-template-rows: auto auto;\n  gap: 0 1.5rem;\n  padding: 2.5rem 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  opacity: 0;\n  transform: translateY(30px);\n  transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.tl__entry.in-view {\n  opacity: 1;\n  transform: translateY(0);\n}\n.tl__entry:last-child {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n@media (min-width: 768px) {\n  .tl__entry {\n    grid-template-columns: 3rem 200px 1px 1fr;\n    grid-template-rows: 1fr;\n    gap: 0 2rem;\n    align-items: start;\n    padding: 3rem 0;\n  }\n}\n.tl__index {\n  font-family: var(--font-secondary);\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.06);\n  line-height: 1;\n  grid-column: 1;\n  grid-row: 1;\n  align-self: start;\n  padding-top: 0.1em;\n}\n.tl__entry--active .tl__index {\n  color: var(--accent-highlight);\n}\n.tl__meta {\n  grid-column: 2;\n  grid-row: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  padding-top: 0.25rem;\n}\n@media (min-width: 768px) {\n  .tl__meta {\n    padding-top: 0.15rem;\n  }\n}\n.tl__date {\n  font-family: var(--font-secondary);\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  color: rgba(255, 255, 255, 0.3);\n}\n.tl__tag {\n  font-family: var(--font-secondary);\n  font-size: 0.6rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  padding: 0.2rem 0.55rem;\n  border: 1px solid;\n  align-self: flex-start;\n}\n.tl__tag--completed {\n  color: var(--color-accent);\n  border-color: rgba(4, 64, 178, 0.4);\n  background: rgba(4, 64, 178, 0.08);\n}\n.tl__tag--active {\n  color: var(--accent-highlight);\n  border-color: rgba(0, 180, 216, 0.35);\n  background: rgba(0, 180, 216, 0.07);\n}\n.tl__tag--upcoming {\n  color: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.tl__divider {\n  display: none;\n}\n@media (min-width: 768px) {\n  .tl__divider {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-column: 3;\n    grid-row: 1;\n    height: 100%;\n  }\n}\n.tl__dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 0.3rem;\n}\n.tl__entry--completed .tl__dot {\n  background: var(--color-accent);\n  box-shadow: 0 0 8px rgba(4, 64, 178, 0.5);\n}\n.tl__entry--active .tl__dot {\n  background: var(--accent-highlight);\n  box-shadow: 0 0 12px rgba(0, 180, 216, 0.6);\n  animation: pulse 2s ease-in-out infinite;\n}\n.tl__entry--upcoming .tl__dot {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.tl__line {\n  flex: 1;\n  width: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin-top: 0.4rem;\n}\n.tl__entry:last-child .tl__line {\n  display: none;\n}\n.tl__content {\n  grid-column: 2;\n  grid-row: 2;\n  padding-top: 1.25rem;\n}\n@media (min-width: 768px) {\n  .tl__content {\n    grid-column: 4;\n    grid-row: 1;\n    padding-top: 0;\n  }\n}\n.tl__label {\n  font-family: var(--font-secondary);\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.2);\n  margin-bottom: 0.5rem;\n}\n.tl__title {\n  font-family: var(--font-secondary);\n  font-size: clamp(1rem, 2vw, 1.2rem);\n  font-weight: 600;\n  color: var(--color-white);\n  letter-spacing: 0.01em;\n  margin-bottom: 0.85rem;\n  line-height: 1.3;\n}\n.tl__entry--upcoming .tl__title {\n  color: rgba(255, 255, 255, 0.35);\n}\n.tl__desc {\n  font-family: var(--font-body);\n  font-size: clamp(0.85rem, 1.1vw, 0.95rem);\n  color: rgba(255, 255, 255, 0.38);\n  line-height: 1.85;\n  font-weight: 300;\n  margin-bottom: 1.25rem;\n  max-width: 620px;\n}\n.tl__entry--active .tl__desc {\n  color: rgba(255, 255, 255, 0.85);\n}\n.tl__status {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.tl__status-dot {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.tl__entry--completed .tl__status-dot {\n  background: var(--color-accent);\n}\n.tl__entry--active .tl__status-dot {\n  background: var(--accent-highlight);\n  animation: pulse 2s ease-in-out infinite;\n}\n.tl__entry--upcoming .tl__status-dot {\n  background: rgba(255, 255, 255, 0.18);\n}\n.tl__status-text {\n  font-family: var(--font-secondary);\n  font-size: 0.65rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.tl__entry--completed .tl__status-text {\n  color: var(--color-accent);\n}\n.tl__entry--active .tl__status-text {\n  color: var(--accent-highlight);\n}\n.tl__entry--upcoming .tl__status-text {\n  color: rgba(255, 255, 255, 0.18);\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.35;\n  }\n}\n/*# sourceMappingURL=darpa.css.map */\n"] }]
  }], () => [{ type: SeoService }, { type: GtmService }], { timelineItems: [{
    type: ViewChildren,
    args: ["timelineItem"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Darpa, { className: "Darpa", filePath: "src/app/pages/darpa/darpa.ts", lineNumber: 33 });
})();

// src/app/shared/model-viewer/model-viewer.ts
var _c016 = ["canvas"];
function ModelViewer_div_2_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "\u2713 copied!");
    \u0275\u0275elementEnd();
  }
}
function ModelViewer_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "\u2699 Model Debug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "span", 6);
    \u0275\u0275text(5, "rot.x");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.rx, $event) || (ctx_r1.debug.rx = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.rx, $event) || (ctx_r1.debug.rx = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5)(11, "span", 6);
    \u0275\u0275text(12, "rot.y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.ry, $event) || (ctx_r1.debug.ry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.ry, $event) || (ctx_r1.debug.ry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 9);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 5)(18, "span", 6);
    \u0275\u0275text(19, "rot.z");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.rz, $event) || (ctx_r1.debug.rz = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.rz, $event) || (ctx_r1.debug.rz = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 9);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 5)(25, "span", 6);
    \u0275\u0275text(26, "pos.x");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.px, $event) || (ctx_r1.debug.px = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.px, $event) || (ctx_r1.debug.px = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 5)(30, "span", 6);
    \u0275\u0275text(31, "pos.y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.py, $event) || (ctx_r1.debug.py = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.py, $event) || (ctx_r1.debug.py = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 5)(35, "span", 6);
    \u0275\u0275text(36, "scale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.scale, $event) || (ctx_r1.debug.scale = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.scale, $event) || (ctx_r1.debug.scale = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 5)(40, "span", 6);
    \u0275\u0275text(41, "cam.z");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.camZ, $event) || (ctx_r1.debug.camZ = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.debug.camZ, $event) || (ctx_r1.debug.camZ = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ModelViewer_div_2_Template_input_ngModelChange_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyDebug());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "button", 16);
    \u0275\u0275listener("click", function ModelViewer_div_2_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyValues());
    });
    \u0275\u0275text(45, "Copy values");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, ModelViewer_div_2_div_46_Template, 2, 0, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.rx);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.rx);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.deg(ctx_r1.debug.rx), "\xB0");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.ry);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.ry);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.deg(ctx_r1.debug.ry), "\xB0");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.rz);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.rz);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.deg(ctx_r1.debug.rz), "\xB0");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.px);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.px);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.py);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.py);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.scale);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.scale);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.camZ);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.debug.camZ);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.copied);
  }
}
var ModelViewer = class _ModelViewer {
  canvasRef;
  /** Mouse parallax — normalized -1..1, written by parent, smoothed in render loop */
  mouseLookX = 0;
  mouseLookY = 0;
  _smoothX = 0;
  _smoothY = 0;
  /** GSAP tweens this object directly — render loop reads it every frame */
  animState = {
    positionX: 0,
    positionY: 10,
    scaleValue: 1,
    rotationX: -1.05,
    rotationY: 0,
    rotationZ: 1.57,
    cameraZ: 220
  };
  /** Set to a truthy object to show the debug panel. null = production mode. */
  debug = null;
  copied = false;
  platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  renderer = null;
  scene = null;
  camera = null;
  model = null;
  baseScale = 1;
  animationId = 0;
  resizeObserver;
  async ngOnInit() {
    if (!this.isBrowser)
      return;
    await this.initScene();
    this.startLoop();
  }
  ngOnDestroy() {
    if (!this.isBrowser)
      return;
    cancelAnimationFrame(this.animationId);
    this.resizeObserver?.disconnect();
    this.renderer?.dispose();
  }
  deg(rad) {
    return Math.round(rad * 180 / Math.PI);
  }
  applyDebug() {
    if (!this.debug || !this.model || !this.camera)
      return;
    this.model.rotation.x = this.debug.rx;
    this.model.rotation.y = this.debug.ry;
    this.model.rotation.z = this.debug.rz;
    this.model.position.x = this.debug.px;
    this.model.position.y = this.debug.py;
    this.model.scale.setScalar(this.baseScale * this.debug.scale);
    this.camera.position.z = this.debug.camZ;
    this.camera.lookAt(0, 0, 0);
  }
  copyValues() {
    if (!this.debug)
      return;
    const txt = `rotation.x = ${this.debug.rx.toFixed(4)};  // ${this.deg(this.debug.rx)}\xB0
rotation.y = ${this.debug.ry.toFixed(4)};  // ${this.deg(this.debug.ry)}\xB0
rotation.z = ${this.debug.rz.toFixed(4)};  // ${this.deg(this.debug.rz)}\xB0
position.x = ${this.debug.px};
position.y = ${this.debug.py};
scale      = ${this.debug.scale.toFixed(2)};
camera.z   = ${this.debug.camZ};`;
    navigator.clipboard.writeText(txt).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 1800);
    });
  }
  async initScene() {
    const THREE = await import("./chunk-XLUWEGBW.js");
    const { STLLoader } = await import("./chunk-VTX6PD46.js");
    const canvas = this.canvasRef.nativeElement;
    const w = canvas.clientWidth || 800;
    const h = canvas.clientHeight || 600;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h, false);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 2e3);
    this.camera.position.set(0, 30, 220);
    this.camera.lookAt(0, 0, 0);
    const ambient = new THREE.AmbientLight(16777215, 0.45);
    this.scene.add(ambient);
    const key = new THREE.DirectionalLight(16777215, 1.5);
    key.position.set(80, 120, 80);
    this.scene.add(key);
    const fill = new THREE.DirectionalLight(4491519, 0.5);
    fill.position.set(-80, 40, 60);
    this.scene.add(fill);
    const rim = new THREE.DirectionalLight(46296, 0.45);
    rim.position.set(0, -60, -100);
    this.scene.add(rim);
    const loader = new STLLoader();
    loader.load("/assets/DeltaV3_BodyM_ASSM.stl", (geometry) => {
      geometry.computeVertexNormals();
      geometry.center();
      const box = new THREE.Box3().setFromObject(new THREE.Mesh(geometry));
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      this.baseScale = 120 / maxDim;
      const material = new THREE.MeshPhongMaterial({
        color: 11581636,
        specular: 16777215,
        shininess: 160,
        emissive: 1119e3
      });
      this.model = new THREE.Mesh(geometry, material);
      this.scene.add(this.model);
      if (this.debug) {
        this.debug.rx = this.model.rotation.x;
        this.debug.scale = this.animState.scaleValue;
      }
    });
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(canvas);
  }
  onResize() {
    const canvas = this.canvasRef.nativeElement;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h || !this.renderer || !this.camera)
      return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }
  startLoop() {
    let t = 0;
    const tick = () => {
      this.animationId = requestAnimationFrame(tick);
      t += 4e-3;
      if (this.model) {
        if (this.debug) {
          this.applyDebug();
        } else {
          this._smoothX += (this.mouseLookX - this._smoothX) * 0.06;
          this._smoothY += (this.mouseLookY - this._smoothY) * 0.06;
          const idleX = Math.sin(t * 0.75) * 0.022;
          const idleZ = Math.cos(t * 0.55) * 0.016;
          this.model.rotation.x = this.animState.rotationX + this._smoothY * 0.1 + idleX;
          this.model.rotation.y = this.animState.rotationY + this._smoothX * 0.18;
          this.model.rotation.z = this.animState.rotationZ + this._smoothX * 0.06 + idleZ;
          this.model.position.x = this.animState.positionX + this._smoothX * 6;
          this.model.position.y = this.animState.positionY + Math.sin(t) * 1.5 + this._smoothY * 2;
          this.model.scale.setScalar(this.baseScale * this.animState.scaleValue);
          if (this.camera) {
            this.camera.position.z = this.animState.cameraZ;
            this.camera.lookAt(0, 0, 0);
          }
        }
      }
      this.renderer?.render(this.scene, this.camera);
    };
    tick();
  }
  static \u0275fac = function ModelViewer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModelViewer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModelViewer, selectors: [["app-model-viewer"]], viewQuery: function ModelViewer_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c016, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
    }
  }, decls: 3, vars: 1, consts: [["canvas", ""], [1, "model-canvas"], ["class", "dbg", 4, "ngIf"], [1, "dbg"], [1, "dbg__title"], [1, "dbg__row"], [1, "dbg__label"], ["type", "range", "min", "-3.15", "max", "3.15", "step", "0.01", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.01", 1, "dbg__num", 3, "ngModelChange", "ngModel"], [1, "dbg__deg"], ["type", "range", "min", "-200", "max", "200", "step", "1", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "1", 1, "dbg__num", 3, "ngModelChange", "ngModel"], ["type", "range", "min", "-100", "max", "100", "step", "1", 3, "ngModelChange", "ngModel"], ["type", "range", "min", "0.1", "max", "3", "step", "0.01", 3, "ngModelChange", "ngModel"], ["type", "range", "min", "50", "max", "600", "step", "5", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "5", 1, "dbg__num", 3, "ngModelChange", "ngModel"], [1, "dbg__copy", 3, "click"], ["class", "dbg__copied", 4, "ngIf"], [1, "dbg__copied"]], template: function ModelViewer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "canvas", 1, 0);
      \u0275\u0275template(2, ModelViewer_div_2_Template, 47, 18, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.debug);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, NgControlStatus, NgModel], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.model-canvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.dbg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: rgba(5, 10, 18, 0.92);\n  border: 1px solid rgba(0, 180, 216, 0.3);\n  padding: 12px 14px;\n  width: 300px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  color: #ccc;\n  z-index: 99;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.dbg__title[_ngcontent-%COMP%] {\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  color: #00b4d8;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n.dbg__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 36px 1fr 58px 32px;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 7px;\n}\n.dbg__label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 10px;\n}\n.dbg__deg[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 10px;\n  text-align: right;\n}\n.dbg__row[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  accent-color: #0440b2;\n  cursor: pointer;\n  width: 100%;\n}\n.dbg__num[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #fff;\n  font-family: inherit;\n  font-size: 10px;\n  padding: 2px 4px;\n  width: 100%;\n  text-align: right;\n  outline: none;\n  -moz-appearance: textfield;\n}\n.dbg__num[_ngcontent-%COMP%]:focus {\n  border-color: #0440b2;\n}\n.dbg__num[_ngcontent-%COMP%]::-webkit-inner-spin-button, \n.dbg__num[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  opacity: 0.4;\n}\n.dbg__copy[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  width: 100%;\n  background: rgba(4, 64, 178, 0.25);\n  border: 1px solid rgba(4, 64, 178, 0.5);\n  color: #fff;\n  font-family: inherit;\n  font-size: 10px;\n  letter-spacing: 0.1em;\n  padding: 5px 0;\n  cursor: pointer;\n}\n.dbg__copy[_ngcontent-%COMP%]:hover {\n  background: rgba(4, 64, 178, 0.45);\n}\n.dbg__copied[_ngcontent-%COMP%] {\n  color: #00c896;\n  font-size: 10px;\n  margin-top: 4px;\n  text-align: center;\n}\n/*# sourceMappingURL=model-viewer.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModelViewer, [{
    type: Component,
    args: [{ selector: "app-model-viewer", standalone: true, imports: [CommonModule, FormsModule], template: `
    <canvas #canvas class="model-canvas"></canvas>

    <!-- DEBUG PANEL \u2014 remove when done tuning -->
    <div class="dbg" *ngIf="debug">
      <div class="dbg__title">\u2699 Model Debug</div>

      <div class="dbg__row">
        <span class="dbg__label">rot.x</span>
        <input type="range" min="-3.15" max="3.15" step="0.01"
               [(ngModel)]="debug.rx" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="0.01"
               [(ngModel)]="debug.rx" (ngModelChange)="applyDebug()" />
        <span class="dbg__deg">{{ deg(debug.rx) }}\xB0</span>
      </div>

      <div class="dbg__row">
        <span class="dbg__label">rot.y</span>
        <input type="range" min="-3.15" max="3.15" step="0.01"
               [(ngModel)]="debug.ry" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="0.01"
               [(ngModel)]="debug.ry" (ngModelChange)="applyDebug()" />
        <span class="dbg__deg">{{ deg(debug.ry) }}\xB0</span>
      </div>

      <div class="dbg__row">
        <span class="dbg__label">rot.z</span>
        <input type="range" min="-3.15" max="3.15" step="0.01"
               [(ngModel)]="debug.rz" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="0.01"
               [(ngModel)]="debug.rz" (ngModelChange)="applyDebug()" />
        <span class="dbg__deg">{{ deg(debug.rz) }}\xB0</span>
      </div>

      <div class="dbg__row">
        <span class="dbg__label">pos.x</span>
        <input type="range" min="-200" max="200" step="1"
               [(ngModel)]="debug.px" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="1"
               [(ngModel)]="debug.px" (ngModelChange)="applyDebug()" />
      </div>

      <div class="dbg__row">
        <span class="dbg__label">pos.y</span>
        <input type="range" min="-100" max="100" step="1"
               [(ngModel)]="debug.py" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="1"
               [(ngModel)]="debug.py" (ngModelChange)="applyDebug()" />
      </div>

      <div class="dbg__row">
        <span class="dbg__label">scale</span>
        <input type="range" min="0.1" max="3" step="0.01"
               [(ngModel)]="debug.scale" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="0.01"
               [(ngModel)]="debug.scale" (ngModelChange)="applyDebug()" />
      </div>

      <div class="dbg__row">
        <span class="dbg__label">cam.z</span>
        <input type="range" min="50" max="600" step="5"
               [(ngModel)]="debug.camZ" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="5"
               [(ngModel)]="debug.camZ" (ngModelChange)="applyDebug()" />
      </div>

      <button class="dbg__copy" (click)="copyValues()">Copy values</button>
      <div class="dbg__copied" *ngIf="copied">\u2713 copied!</div>
    </div>
  `, styles: ['/* angular:styles/component:scss;3fa2e768521ab944d62bbb65fead7b361607f95b1e6c55e5c6af9e72b4853330;C:/Users/User/OneDrive/Documents/_work/feather-dynamics/fd-2/src/app/shared/model-viewer/model-viewer.ts */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.model-canvas {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.dbg {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: rgba(5, 10, 18, 0.92);\n  border: 1px solid rgba(0, 180, 216, 0.3);\n  padding: 12px 14px;\n  width: 300px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  color: #ccc;\n  z-index: 99;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.dbg__title {\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  color: #00b4d8;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n.dbg__row {\n  display: grid;\n  grid-template-columns: 36px 1fr 58px 32px;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 7px;\n}\n.dbg__label {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 10px;\n}\n.dbg__deg {\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 10px;\n  text-align: right;\n}\n.dbg__row input[type=range] {\n  accent-color: #0440b2;\n  cursor: pointer;\n  width: 100%;\n}\n.dbg__num {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #fff;\n  font-family: inherit;\n  font-size: 10px;\n  padding: 2px 4px;\n  width: 100%;\n  text-align: right;\n  outline: none;\n  -moz-appearance: textfield;\n}\n.dbg__num:focus {\n  border-color: #0440b2;\n}\n.dbg__num::-webkit-inner-spin-button,\n.dbg__num::-webkit-outer-spin-button {\n  opacity: 0.4;\n}\n.dbg__copy {\n  margin-top: 8px;\n  width: 100%;\n  background: rgba(4, 64, 178, 0.25);\n  border: 1px solid rgba(4, 64, 178, 0.5);\n  color: #fff;\n  font-family: inherit;\n  font-size: 10px;\n  letter-spacing: 0.1em;\n  padding: 5px 0;\n  cursor: pointer;\n}\n.dbg__copy:hover {\n  background: rgba(4, 64, 178, 0.45);\n}\n.dbg__copied {\n  color: #00c896;\n  font-size: 10px;\n  margin-top: 4px;\n  text-align: center;\n}\n/*# sourceMappingURL=model-viewer.css.map */\n'] }]
  }], null, { canvasRef: [{
    type: ViewChild,
    args: ["canvas", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModelViewer, { className: "ModelViewer", filePath: "src/app/shared/model-viewer/model-viewer.ts", lineNumber: 157 });
})();

// src/app/pages/delta-y4/delta-y4.ts
var _c017 = ["scrollSection"];
var _c110 = ["stage"];
var _c27 = ["panelIntro"];
var _c34 = ["panelSpecs"];
var _c44 = ["panelFeatures"];
var _c53 = ["panelOrigin"];
var _c6 = ["hudFill"];
var _c7 = ["bgText"];
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.index;
var _forTrack2 = ($index, $item) => $item.requirement;
var _forTrack3 = ($index, $item) => $item.param;
function DeltaY4_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const spec_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r1.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r1.label);
  }
}
function DeltaY4_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "span", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r2.index);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feat_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r2.tag);
  }
}
function DeltaY4_For_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 56);
    \u0275\u0275text(6, "\u2713 Targeted");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.requirement);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.capability);
  }
}
function DeltaY4_For_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const spec_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r4.param);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r4.value);
  }
}
function DeltaY4_For_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "span", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5, " ");
  }
}
var DeltaY4 = class _DeltaY4 {
  seo;
  platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  scrollSectionRef;
  stageRef;
  viewer;
  panelIntroRef;
  panelSpecsRef;
  panelFeaturesRef;
  panelOriginRef;
  hudFillRef;
  bgTextRef;
  gsapInstance = null;
  scrollTriggers = [];
  onMouseMove = (e) => {
    const rect = this.stageRef.nativeElement.getBoundingClientRect();
    this.viewer.mouseLookX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    this.viewer.mouseLookY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };
  specs = [
    { label: "Endurance", value: "~16", unit: "min" },
    { label: "Dash Speed", value: "25\u201335", unit: "mph" },
    { label: "Payload Cap.", value: "\u22650.5", unit: "kg" },
    { label: "Footprint", value: "18\xD718\xD74", unit: "in" },
    { label: "Unit Cost", value: "~$3,400", unit: "" },
    { label: "Readiness", value: "TRL", unit: "6" }
  ];
  capabilityMatrix = [
    { requirement: "CQB Find, Fix & Finish", capability: "Optimized for controlled indoor and outdoor maneuvering" },
    { requirement: "Mission Range < 2 km", capability: "Practical radius 0.5\u20131.5 km; max operational range under 2 km" },
    { requirement: "Indoor + Outdoor Use", capability: "Low speed controllability with rapid dash capability" },
    { requirement: "Squad / Team Packable", capability: "~18 \xD7 18 \xD7 4 in portable form factor" },
    { requirement: "Dirty EM Spectrum Ops", capability: "Inertial and optical flow navigation primary" },
    { requirement: "GNSS Denial Resilient", capability: "GNSS optional with inertial fallback navigation" },
    { requirement: "Payload \u2265 0.5 kg", capability: "Payload target 0.5\u20130.6 kg (1.1\u20131.3 lb)" }
  ];
  technicalSpecs = [
    { param: "Configuration", value: "Delta Y4 Multirotor" },
    { param: "Dimensions (L \xD7 W \xD7 H)", value: "~18 \xD7 18 \xD7 4 in" },
    { param: "Main Rotors", value: "Dual 10 in counter-rotating coaxial" },
    { param: "Outer Propulsion", value: "Dual 4 in pusher rotors" },
    { param: "Airframe", value: "Contact-tolerant wrapped perimeter geometry" },
    { param: "Empty Weight", value: "~2.8\u20133.6 lb (1.27\u20131.63 kg)" },
    { param: "Battery Weight", value: "~1.0\u20131.5 lb (0.45\u20130.68 kg)" },
    { param: "Payload Capacity", value: "\u2265 0.5 kg (1.1\u20131.5 lb target)" },
    { param: "Max Takeoff Weight", value: "~5.0\u20136.5 lb" },
    { param: "Endurance (No Payload)", value: "~15\u201320 min" },
    { param: "Endurance (Payload)", value: "Up to ~16 min" },
    { param: "Mission Radius", value: "~0.5\u20131.5 km  |  RFS < 2 km" },
    { param: "Dash Speed", value: "~25\u201335 mph" },
    { param: "Indoor Tactical Speed", value: "~3\u201312 mph" },
    { param: "Control Modes", value: "Manual Assisted / Stabilized / Semi-Autonomous" },
    { param: "Navigation", value: "GNSS Optional / Inertial / Optical Flow / Visual Ref." },
    { param: "Sensor Coverage", value: "Forward + rear housings \u2014 near 360\xB0" },
    { param: "Lighting", value: "Day / Low Light / Night capable" },
    { param: "Cost Target", value: "~$3,400 excl. payloads & effects" }
  ];
  productionItems = [
    "NDAA-oriented component sourcing",
    "Domestic supplier integration",
    "Vertically integrated manufacturing expansion",
    "Low rate production scalability",
    "Modular subsystem architecture for rapid field maintenance",
    "Production-representative prototype maturation"
  ];
  features = [
    { index: "01", title: "Contact-Tolerant Airframe", tag: "CQB Design" },
    { index: "02", title: "GNSS-Denied Navigation", tag: "Resilience" },
    { index: "03", title: "Dual-Domain Agility", tag: "Indoor/Outdoor" },
    { index: "04", title: "Near-360\xB0 Sensor Coverage", tag: "Situational Awr" },
    { index: "05", title: "Squad-Portable Form Factor", tag: "Mobility" },
    { index: "06", title: "Modular Payload Interface", tag: "EO / IR / ISR" }
  ];
  constructor(seo) {
    this.seo = seo;
  }
  ngOnInit() {
    this.seo.updateSeo({
      title: "Delta Y4 Tactical UAV | Feather Dynamics",
      description: "The Delta Y4 is a compact multirotor tactical UAS engineered for CQB Find, Fix, and Finish missions in contested environments. GNSS-denied resilient, contact-tolerant, and squad-portable.",
      keywords: "Delta Y4, tactical UAV, CQB UAS, close quarters drone, GNSS denied, Feather Dynamics, Area B RFS, Drone Dominance, S2MARTS, indoor drone, tactical reconnaissance"
    });
    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Delta Y4",
      description: "Next-generation unmanned aerial vehicle by Feather Dynamics.",
      brand: { "@type": "Organization", name: "Feather Dynamics", url: "https://featherdynamics.com" },
      url: "https://featherdynamics.com/delta-y4"
    });
    this.seo.generateBreadcrumbs();
  }
  async ngAfterViewInit() {
    if (!this.isBrowser)
      return;
    this.stageRef.nativeElement.addEventListener("mousemove", this.onMouseMove);
    await this.initGsapTimeline();
    await this.initSummaryAnimations();
  }
  ngOnDestroy() {
    this.scrollTriggers.forEach((st) => st.kill());
    if (this.isBrowser) {
      this.stageRef.nativeElement.removeEventListener("mousemove", this.onMouseMove);
    }
  }
  async initGsapTimeline() {
    const { gsap } = await import("./chunk-WSUS6CID.js");
    const { ScrollTrigger: ScrollTrigger2 } = await import("./chunk-HH3G3X5G.js");
    gsap.registerPlugin(ScrollTrigger2);
    this.gsapInstance = gsap;
    const scroll = this.scrollSectionRef.nativeElement;
    const stage = this.stageRef.nativeElement;
    const intro = this.panelIntroRef.nativeElement;
    const specs = this.panelSpecsRef.nativeElement;
    const features = this.panelFeaturesRef.nativeElement;
    const origin = this.panelOriginRef.nativeElement;
    const hudFill = this.hudFillRef.nativeElement;
    const bgText = this.bgTextRef.nativeElement;
    const state = this.viewer.animState;
    gsap.set(intro, { x: 80, opacity: 0 });
    gsap.set(specs, { y: 60, opacity: 0 });
    gsap.set(features, { x: -80, opacity: 0 });
    gsap.set(origin, { x: 60, yPercent: -50, opacity: 0 });
    gsap.set(hudFill, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(bgText, { x: 0, opacity: 1 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scroll,
        pin: stage,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        onUpdate: (self) => {
          gsap.set(hudFill, { scaleX: self.progress });
        }
      }
    });
    tl.to(bgText, { x: -140, opacity: 0.25, duration: 1 }, 0).to(bgText, { x: 80, opacity: 0.18, duration: 1 }, 1).to(bgText, { x: 200, opacity: 0.12, duration: 1 }, 2).to(bgText, { x: 0, opacity: 0.65, duration: 0.7 }, 3.3);
    tl.to(state, { positionX: -43, positionY: 10, rotationX: -0.99, rotationY: 0, rotationZ: 1.26, scaleValue: 1, cameraZ: 220, duration: 1 }, 0).to(intro, { x: 0, opacity: 1, duration: 0.4 }, 0.15).to(intro, { opacity: 0, x: -30, duration: 0.3 }, 0.7);
    tl.to(state, { positionX: 0, positionY: 20, rotationX: -1.12, rotationY: 0, rotationZ: 0, scaleValue: 1.13, cameraZ: 220, duration: 1 }, 1).to(specs, { y: 0, opacity: 1, duration: 0.4 }, 1.2).to(specs, { opacity: 0, y: -20, duration: 0.3 }, 1.7);
    tl.to(state, { positionX: 30, positionY: 10, rotationX: -0.43, rotationY: -0.07, rotationZ: -1.57, scaleValue: 0.94, cameraZ: 210, duration: 1 }, 2).to(features, { x: 0, opacity: 1, duration: 0.4 }, 2.2).to(features, { opacity: 0, x: 40, duration: 0.3 }, 2.7);
    tl.to(state, { positionX: -48, positionY: 10, rotationX: -1, rotationY: 0.15, rotationZ: 1.57, scaleValue: 0.91, cameraZ: 210, duration: 1 }, 3).to(origin, { x: 0, opacity: 1, duration: 0.5 }, 3.3);
    this.scrollTriggers.push(ScrollTrigger2.getAll().at(-1));
  }
  async initSummaryAnimations() {
    const { gsap } = await import("./chunk-WSUS6CID.js");
    const { ScrollTrigger: ScrollTrigger2 } = await import("./chunk-HH3G3X5G.js");
    const ease = "power2.out";
    gsap.from(".dy4-summary__mission", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease,
      scrollTrigger: { trigger: ".dy4-summary__mission", start: "top 88%" }
    });
    document.querySelectorAll(".dy4-summary__section").forEach((section) => {
      gsap.from(section, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease,
        scrollTrigger: { trigger: section, start: "top 88%" }
      });
    });
    gsap.from(".dy4-summary__matrix-row", {
      y: 24,
      opacity: 0,
      duration: 0.5,
      stagger: 0.07,
      ease,
      scrollTrigger: { trigger: ".dy4-summary__matrix", start: "top 88%" }
    });
    gsap.from(".dy4-summary__spec-row", {
      y: 18,
      opacity: 0,
      duration: 0.4,
      stagger: 0.035,
      ease,
      scrollTrigger: { trigger: ".dy4-summary__specs-table", start: "top 88%" }
    });
    gsap.from(".dy4-summary__prod-item", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.09,
      ease,
      scrollTrigger: { trigger: ".dy4-summary__prod-list", start: "top 88%" }
    });
    gsap.from(".dy4-summary__prod-note", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease,
      scrollTrigger: { trigger: ".dy4-summary__production", start: "top 88%" }
    });
    ScrollTrigger2.getAll().forEach((st) => {
      if (!this.scrollTriggers.includes(st))
        this.scrollTriggers.push(st);
    });
  }
  static \u0275fac = function DeltaY4_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeltaY4)(\u0275\u0275directiveInject(SeoService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeltaY4, selectors: [["app-delta-y4"]], viewQuery: function DeltaY4_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c017, 5)(_c110, 5)(ModelViewer, 5)(_c27, 5)(_c34, 5)(_c44, 5)(_c53, 5)(_c6, 5)(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollSectionRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stageRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panelIntroRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panelSpecsRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panelFeaturesRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panelOriginRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hudFillRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bgTextRef = _t.first);
    }
  }, decls: 107, vars: 2, consts: [["scrollSection", ""], ["stage", ""], ["viewer", ""], ["bgText", ""], ["panelIntro", ""], ["panelSpecs", ""], ["panelFeatures", ""], ["panelOrigin", ""], ["hudFill", ""], [3, "title", "bgImage"], [1, "dy4"], [1, "dy4__scroll"], [1, "dy4__stage"], [1, "dy4__bg-text"], [1, "dy4__panel", "dy4__panel--intro"], [1, "dy4__p-label"], [1, "dy4__p-heading"], [1, "accent"], [1, "dy4__p-body"], [1, "dy4__intro-tags"], [1, "dy4__panel", "dy4__panel--specs"], [1, "dy4__specs-grid"], [1, "dy4__spec-card"], [1, "dy4__panel", "dy4__panel--features"], [1, "dy4__feat-list"], [1, "dy4__feat-row"], [1, "dy4__panel", "dy4__panel--origin"], [1, "dy4__origin-rule"], [1, "dy4__p-body", "dy4__origin-text"], ["src", "/assets/decos/madeinusa.png", "alt", "Made in USA", 1, "dy4__origin-badge"], [1, "dy4__hud"], [1, "dy4__hud-label"], [1, "dy4__hud-bar"], [1, "dy4__hud-fill"], [1, "dy4__hud-hint"], [1, "dy4-summary"], [1, "dy4-summary__inner", "global-container"], [1, "dy4-summary__mission"], [1, "dy4-summary__section"], [1, "dy4-summary__matrix"], [1, "dy4-summary__matrix-row"], [1, "dy4-summary__specs-table"], [1, "dy4-summary__spec-row"], [1, "dy4-summary__production"], [1, "dy4-summary__prod-list"], [1, "dy4-summary__prod-item"], [1, "dy4__p-body", "dy4-summary__prod-note"], [1, "dy4__spec-value"], [1, "dy4__spec-unit"], [1, "dy4__spec-label"], [1, "dy4__feat-index"], [1, "dy4__feat-info"], [1, "dy4__feat-title"], [1, "dy4__feat-tag"], [1, "dy4-summary__matrix-req"], [1, "dy4-summary__matrix-cap"], [1, "dy4-summary__matrix-status"], [1, "dy4-summary__spec-param"], [1, "dy4-summary__spec-val"], [1, "dy4-summary__prod-dot"]], template: function DeltaY4_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-page-header", 9);
      \u0275\u0275elementStart(1, "section", 10)(2, "div", 11, 0)(4, "div", 12, 1);
      \u0275\u0275element(6, "app-model-viewer", null, 2);
      \u0275\u0275elementStart(8, "div", 13, 3);
      \u0275\u0275text(10, "DELTA-Y4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 14, 4)(13, "p", 15);
      \u0275\u0275text(14, "[ AREA B CQB UAS ]");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h2", 16);
      \u0275\u0275text(16, " Engineered for");
      \u0275\u0275element(17, "br");
      \u0275\u0275elementStart(18, "span", 17);
      \u0275\u0275text(19, "Close Quarters.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p", 18);
      \u0275\u0275text(21, " The Delta Y4 is a compact multirotor platform built for squad and team-level Find, Fix, and Finish missions in contested environments \u2014 interior recon, hallway and stairwell navigation, trench inspection, and urban overwatch. Optimized for obstacle-dense spaces where speed, resilience, and simplicity matter. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 19)(23, "span");
      \u0275\u0275text(24, "S2MARTS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "Drone Dominance G2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Area B RFS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 20, 5)(31, "p", 15);
      \u0275\u0275text(32, "[ TARGET SPECIFICATIONS ]");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 21);
      \u0275\u0275repeaterCreate(34, DeltaY4_For_35_Template, 7, 3, "div", 22, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 23, 6)(38, "p", 15);
      \u0275\u0275text(39, "[ KEY CAPABILITIES ]");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 24);
      \u0275\u0275repeaterCreate(41, DeltaY4_For_42_Template, 8, 3, "div", 25, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 26, 7);
      \u0275\u0275element(45, "div", 27);
      \u0275\u0275elementStart(46, "p", 15);
      \u0275\u0275text(47, "[ PRODUCTION & READINESS ]");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 28);
      \u0275\u0275text(49, " NDAA-oriented sourcing. Domestic supplier integration. Advancing toward ");
      \u0275\u0275elementStart(50, "span", 17);
      \u0275\u0275text(51, "TRL 6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " through integrated subsystem validation and relevant environment testing. Approved for flight testing at ");
      \u0275\u0275elementStart(53, "span", 17);
      \u0275\u0275text(54, "Camp Roberts");
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " via the JIFX program in coordination with NPS Monterey. ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 30)(58, "span", 31);
      \u0275\u0275text(59, "[ DELTA Y4 ]");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 32);
      \u0275\u0275element(61, "div", 33, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span", 34);
      \u0275\u0275text(64, "scroll to explore");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "section", 35)(66, "div", 36)(67, "div", 37)(68, "p", 15);
      \u0275\u0275text(69, "[ MISSION OVERVIEW ]");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "h2", 16);
      \u0275\u0275text(71, "Built for the ");
      \u0275\u0275elementStart(72, "span", 17);
      \u0275\u0275text(73, "Last 100 Meters.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "p", 18);
      \u0275\u0275text(75, " The Delta Y4 Tactical UAV is a compact multirotor platform engineered for close-quarters Find, Fix, and Finish missions in contested operational environments. The system supports squad and team-level operations requiring rapid reconnaissance, confined-space maneuvering, and degraded-environment performance \u2014 including building entry, hallway and stairwell navigation, trench and tunnel inspection, urban overwatch, and short-range denied-area sensing. Developed under the ");
      \u0275\u0275elementStart(76, "span", 17);
      \u0275\u0275text(77, "S2MARTS Drone Dominance G2 RFS");
      \u0275\u0275elementEnd();
      \u0275\u0275text(78, " aligned with Area B operational requirements. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 38)(80, "p", 15);
      \u0275\u0275text(81, "[ AREA B RFS CAPABILITY ALIGNMENT ]");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 39);
      \u0275\u0275repeaterCreate(83, DeltaY4_For_84_Template, 7, 2, "div", 40, _forTrack2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 38)(86, "p", 15);
      \u0275\u0275text(87, "[ TECHNICAL SPECIFICATIONS ]");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 41);
      \u0275\u0275repeaterCreate(89, DeltaY4_For_90_Template, 5, 2, "div", 42, _forTrack3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 38)(92, "p", 15);
      \u0275\u0275text(93, "[ PRODUCTION & READINESS ]");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 43)(95, "div", 44);
      \u0275\u0275repeaterCreate(96, DeltaY4_For_97_Template, 3, 1, "div", 45, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p", 46);
      \u0275\u0275text(99, " The Delta Y4 is progressing through integrated subsystem validation and relevant environment testing supporting advancement toward ");
      \u0275\u0275elementStart(100, "span", 17);
      \u0275\u0275text(101, "TRL 6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(102, ". Feather Dynamics has been approved to conduct flight testing through the ");
      \u0275\u0275elementStart(103, "span", 17);
      \u0275\u0275text(104, "JIFX program at Camp Roberts");
      \u0275\u0275elementEnd();
      \u0275\u0275text(105, " in coordination with the Naval Postgraduate School in Monterey, California. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(106, "app-cta");
    }
    if (rf & 2) {
      \u0275\u0275property("title", "Delta Y4 Tactical UAV")("bgImage", "/assets/images/uavmodel.jpg");
      \u0275\u0275advance(34);
      \u0275\u0275repeater(ctx.specs);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.features);
      \u0275\u0275advance(42);
      \u0275\u0275repeater(ctx.capabilityMatrix);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.technicalSpecs);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.productionItems);
    }
  }, dependencies: [CommonModule, PageHeader, Cta, ModelViewer], styles: ["\n.dy4[_ngcontent-%COMP%] {\n  background: var(--color-black);\n}\n.dy4__scroll[_ngcontent-%COMP%] {\n  height: 400vh;\n  position: relative;\n}\n.dy4__stage[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  position: relative;\n  background: var(--color-black);\n  background-image: url(/assets/decos/aerial-deco-back-2.png);\n  background-size: cover;\n  background-position: center;\n}\n.dy4__stage[_ngcontent-%COMP%]   app-model-viewer[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.dy4__panel[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n}\n.dy4__panel--intro[_ngcontent-%COMP%] {\n  right: 7%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: min(400px, 38vw);\n}\n@media (max-width: 768px) {\n  .dy4__panel--intro[_ngcontent-%COMP%] {\n    right: 5%;\n    width: min(260px, 55vw);\n    top: 55%;\n  }\n}\n.dy4__panel--specs[_ngcontent-%COMP%] {\n  bottom: 7%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: min(920px, 96vw);\n  text-align: center;\n}\n.dy4__panel--features[_ngcontent-%COMP%] {\n  left: 5%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: min(400px, 40vw);\n}\n@media (max-width: 768px) {\n  .dy4__panel--features[_ngcontent-%COMP%] {\n    left: 5%;\n    width: min(240px, 52vw);\n    top: 15%;\n    transform: none;\n  }\n}\n.dy4__panel--origin[_ngcontent-%COMP%] {\n  left: 52%;\n  top: 50%;\n  text-align: left;\n  width: min(420px, 40vw);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1.25rem;\n  background: rgba(4, 8, 16, 0.55);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  padding: 1.75rem 2rem;\n  border-radius: 2px;\n}\n@media (max-width: 768px) {\n  .dy4__panel--origin[_ngcontent-%COMP%] {\n    left: 5%;\n    width: min(260px, 55vw);\n    top: 12%;\n  }\n}\n.dy4__panel--origin[_ngcontent-%COMP%]   .dy4__p-body[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: clamp(0.82rem, 1vw, 0.94rem);\n  line-height: 2;\n}\n.dy4__p-label[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.78rem;\n  letter-spacing: 0.18em;\n  color: var(--color-accent);\n  margin-bottom: 1.25rem;\n}\n.dy4__p-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: clamp(1.8rem, 3.5vw, 3rem);\n  font-weight: 700;\n  color: var(--color-white);\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  margin-bottom: 1.25rem;\n}\n.dy4__p-heading[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.dy4__p-body[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: clamp(0.8rem, 1vw, 0.9rem);\n  color: rgba(255, 255, 255, 0.42);\n  line-height: 1.85;\n  font-weight: 300;\n}\n.dy4__p-body[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: var(--color-white);\n}\n.dy4__intro-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 1.25rem;\n}\n.dy4__intro-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.55rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.35);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 0.2rem 0.5rem;\n}\n.dy4__specs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  margin-top: 1rem;\n}\n@media (max-width: 768px) {\n  .dy4__specs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.dy4__spec-card[_ngcontent-%COMP%] {\n  background: rgba(5, 10, 18, 0.75);\n  padding: 1rem 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.dy4__spec-value[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: clamp(1.6rem, 2.8vw, 2.2rem);\n  font-weight: 700;\n  color: var(--color-white);\n  letter-spacing: -0.02em;\n  line-height: 1;\n}\n.dy4__spec-unit[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.68rem;\n  letter-spacing: 0.15em;\n  color: var(--accent-highlight);\n  text-transform: uppercase;\n}\n.dy4__spec-label[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.63rem;\n  letter-spacing: 0.1em;\n  color: rgba(255, 255, 255, 0.22);\n  text-transform: uppercase;\n  margin-top: 0.35rem;\n}\n.dy4__feat-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  margin-top: 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n}\n.dy4__feat-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n.dy4__feat-index[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.15);\n  letter-spacing: 0.1em;\n  flex-shrink: 0;\n}\n.dy4__feat-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n.dy4__feat-title[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: clamp(0.9rem, 1.35vw, 1.05rem);\n  font-weight: 600;\n  color: var(--color-white);\n  letter-spacing: 0.01em;\n}\n.dy4__feat-tag[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.65rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--accent-highlight);\n  border: 1px solid rgba(0, 180, 216, 0.28);\n  background: rgba(0, 180, 216, 0.06);\n  padding: 0.2rem 0.5rem;\n}\n.dy4__origin-rule[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 1px;\n  background: var(--color-accent);\n}\n.dy4__origin-text[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.dy4__origin-badge[_ngcontent-%COMP%] {\n  height: 44px;\n  opacity: 0.6;\n}\n.dy4__hud[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.75rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  z-index: 3;\n  pointer-events: none;\n}\n.dy4__hud-label[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.6rem;\n  letter-spacing: 0.25em;\n  color: var(--color-accent);\n}\n.dy4__hud-bar[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.1);\n  overflow: hidden;\n}\n.dy4__hud-fill[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: var(--accent-highlight);\n  transform-origin: left center;\n  transform: scaleX(0);\n}\n.dy4__hud-hint[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.55rem;\n  letter-spacing: 0.15em;\n  color: rgba(255, 255, 255, 0.2);\n  animation: _ngcontent-%COMP%_blink 2.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.15;\n  }\n}\n.dy4__bg-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: var(--font-secondary);\n  font-size: clamp(5.5rem, 17vw, 17rem);\n  font-weight: 900;\n  letter-spacing: 0.08em;\n  color: rgba(255, 255, 255, 0.055);\n  white-space: nowrap;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  z-index: 1;\n}\n.dy4-summary[_ngcontent-%COMP%] {\n  background: var(--color-black);\n  padding: 6rem 0 7rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n}\n.dy4-summary__inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4.5rem;\n}\n.dy4-summary__mission[_ngcontent-%COMP%] {\n  max-width: 740px;\n}\n.dy4-summary__mission[_ngcontent-%COMP%]   .dy4__p-body[_ngcontent-%COMP%] {\n  font-size: clamp(0.88rem, 1.1vw, 1rem);\n  color: rgba(255, 255, 255, 0.58);\n}\n.dy4-summary__section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.dy4-summary__matrix[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n}\n.dy4-summary__matrix-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr auto;\n  gap: 1.5rem;\n  padding: 0.85rem 1.25rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  align-items: center;\n}\n.dy4-summary__matrix-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dy4-summary__matrix-row[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(255, 255, 255, 0.02);\n}\n@media (max-width: 768px) {\n  .dy4-summary__matrix-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.3rem;\n  }\n}\n.dy4-summary__matrix-req[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--color-white);\n  letter-spacing: 0.04em;\n}\n.dy4-summary__matrix-cap[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.52);\n  line-height: 1.5;\n}\n.dy4-summary__matrix-status[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.62rem;\n  letter-spacing: 0.12em;\n  color: var(--color-accent);\n  white-space: nowrap;\n}\n.dy4-summary__specs-table[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n@media (max-width: 640px) {\n  .dy4-summary__specs-table[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dy4-summary__spec-row[_ngcontent-%COMP%] {\n  background: rgba(5, 10, 18, 0.8);\n  padding: 0.7rem 1.1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 1rem;\n}\n.dy4-summary__spec-param[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.65rem;\n  letter-spacing: 0.08em;\n  color: rgba(255, 255, 255, 0.35);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.dy4-summary__spec-val[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--color-white);\n  text-align: right;\n}\n.dy4-summary__production[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .dy4-summary__production[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dy4-summary__prod-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  padding-top: 1rem;\n}\n.dy4-summary__prod-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-family: var(--font-secondary);\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.65);\n  letter-spacing: 0.02em;\n}\n.dy4-summary__prod-dot[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  background: var(--color-accent);\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dy4-summary__prod-note[_ngcontent-%COMP%] {\n  font-size: clamp(0.85rem, 1vw, 0.95rem);\n  color: rgba(255, 255, 255, 0.58);\n  line-height: 2;\n}\n/*# sourceMappingURL=delta-y4.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeltaY4, [{
    type: Component,
    args: [{ selector: "app-delta-y4", standalone: true, imports: [CommonModule, PageHeader, Cta, ModelViewer], template: `<app-page-header [title]="'Delta Y4 Tactical UAV'" [bgImage]="'/assets/images/uavmodel.jpg'"></app-page-header>

<section class="dy4">
  <div class="dy4__scroll" #scrollSection>
    <div class="dy4__stage" #stage>

      <!-- Full-stage 3D canvas -->
      <app-model-viewer #viewer></app-model-viewer>

      <!-- Background watermark text \u2014 GSAP-animated -->
      <div class="dy4__bg-text" #bgText>DELTA-Y4</div>

      <!-- Panel A: Intro \u2014 slides in from right -->
      <div class="dy4__panel dy4__panel--intro" #panelIntro>
        <p class="dy4__p-label">[ AREA B CQB UAS ]</p>
        <h2 class="dy4__p-heading">
          Engineered for<br /><span class="accent">Close Quarters.</span>
        </h2>
        <p class="dy4__p-body">
          The Delta Y4 is a compact multirotor platform built for squad and team-level
          Find, Fix, and Finish missions in contested environments \u2014 interior recon,
          hallway and stairwell navigation, trench inspection, and urban overwatch.
          Optimized for obstacle-dense spaces where speed, resilience, and simplicity matter.
        </p>
        <div class="dy4__intro-tags">
          <span>S2MARTS</span><span>Drone Dominance G2</span><span>Area B RFS</span>
        </div>
      </div>

      <!-- Panel B: Specs \u2014 slides up from bottom -->
      <div class="dy4__panel dy4__panel--specs" #panelSpecs>
        <p class="dy4__p-label">[ TARGET SPECIFICATIONS ]</p>
        <div class="dy4__specs-grid">
          @for (spec of specs; track spec.label) {
            <div class="dy4__spec-card">
              <span class="dy4__spec-value">{{ spec.value }}</span>
              <span class="dy4__spec-unit">{{ spec.unit }}</span>
              <span class="dy4__spec-label">{{ spec.label }}</span>
            </div>
          }
        </div>
      </div>

      <!-- Panel C: Features \u2014 slides in from left -->
      <div class="dy4__panel dy4__panel--features" #panelFeatures>
        <p class="dy4__p-label">[ KEY CAPABILITIES ]</p>
        <div class="dy4__feat-list">
          @for (feat of features; track feat.index) {
            <div class="dy4__feat-row">
              <span class="dy4__feat-index">{{ feat.index }}</span>
              <div class="dy4__feat-info">
                <span class="dy4__feat-title">{{ feat.title }}</span>
                <span class="dy4__feat-tag">{{ feat.tag }}</span>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Panel D: Origin \u2014 fades in center -->
      <div class="dy4__panel dy4__panel--origin" #panelOrigin>
        <div class="dy4__origin-rule"></div>
        <p class="dy4__p-label">[ PRODUCTION & READINESS ]</p>
        <p class="dy4__p-body dy4__origin-text">
          NDAA-oriented sourcing. Domestic supplier integration.
          Advancing toward <span class="accent">TRL 6</span> through integrated subsystem validation
          and relevant environment testing. Approved for flight testing at
          <span class="accent">Camp Roberts</span> via the JIFX program in coordination with NPS Monterey.
        </p>
        <img class="dy4__origin-badge" src="/assets/decos/madeinusa.png" alt="Made in USA" />
      </div>

      <!-- HUD \u2014 always visible -->
      <div class="dy4__hud">
        <span class="dy4__hud-label">[ DELTA Y4 ]</span>
        <div class="dy4__hud-bar">
          <div class="dy4__hud-fill" #hudFill></div>
        </div>
        <span class="dy4__hud-hint">scroll to explore</span>
      </div>

    </div>
  </div>
</section>

<section class="dy4-summary">
  <div class="dy4-summary__inner global-container">

    <!-- Mission Overview -->
    <div class="dy4-summary__mission">
      <p class="dy4__p-label">[ MISSION OVERVIEW ]</p>
      <h2 class="dy4__p-heading">Built for the <span class="accent">Last 100 Meters.</span></h2>
      <p class="dy4__p-body">
        The Delta Y4 Tactical UAV is a compact multirotor platform engineered for close-quarters
        Find, Fix, and Finish missions in contested operational environments. The system supports
        squad and team-level operations requiring rapid reconnaissance, confined-space maneuvering,
        and degraded-environment performance \u2014 including building entry, hallway and stairwell
        navigation, trench and tunnel inspection, urban overwatch, and short-range denied-area sensing.
        Developed under the <span class="accent">S2MARTS Drone Dominance G2 RFS</span> aligned with
        Area B operational requirements.
      </p>
    </div>

    <!-- Capability Matrix -->
    <div class="dy4-summary__section">
      <p class="dy4__p-label">[ AREA B RFS CAPABILITY ALIGNMENT ]</p>
      <div class="dy4-summary__matrix">
        @for (item of capabilityMatrix; track item.requirement) {
          <div class="dy4-summary__matrix-row">
            <span class="dy4-summary__matrix-req">{{ item.requirement }}</span>
            <span class="dy4-summary__matrix-cap">{{ item.capability }}</span>
            <span class="dy4-summary__matrix-status">\u2713 Targeted</span>
          </div>
        }
      </div>
    </div>

    <!-- Technical Specifications -->
    <div class="dy4-summary__section">
      <p class="dy4__p-label">[ TECHNICAL SPECIFICATIONS ]</p>
      <div class="dy4-summary__specs-table">
        @for (spec of technicalSpecs; track spec.param) {
          <div class="dy4-summary__spec-row">
            <span class="dy4-summary__spec-param">{{ spec.param }}</span>
            <span class="dy4-summary__spec-val">{{ spec.value }}</span>
          </div>
        }
      </div>
    </div>

    <!-- Production & Readiness -->
    <div class="dy4-summary__section">
      <p class="dy4__p-label">[ PRODUCTION & READINESS ]</p>
      <div class="dy4-summary__production">
        <div class="dy4-summary__prod-list">
          @for (item of productionItems; track item) {
            <div class="dy4-summary__prod-item">
              <span class="dy4-summary__prod-dot"></span>
              {{ item }}
            </div>
          }
        </div>
        <p class="dy4__p-body dy4-summary__prod-note">
          The Delta Y4 is progressing through integrated subsystem validation and relevant
          environment testing supporting advancement toward <span class="accent">TRL 6</span>.
          Feather Dynamics has been approved to conduct flight testing through the
          <span class="accent">JIFX program at Camp Roberts</span> in coordination with the
          Naval Postgraduate School in Monterey, California.
        </p>
      </div>
    </div>

  </div>
</section>

<app-cta></app-cta>
`, styles: ["/* src/app/pages/delta-y4/delta-y4.scss */\n.dy4 {\n  background: var(--color-black);\n}\n.dy4__scroll {\n  height: 400vh;\n  position: relative;\n}\n.dy4__stage {\n  height: 100vh;\n  overflow: hidden;\n  position: relative;\n  background: var(--color-black);\n  background-image: url(/assets/decos/aerial-deco-back-2.png);\n  background-size: cover;\n  background-position: center;\n}\n.dy4__stage app-model-viewer {\n  position: absolute;\n  inset: 0;\n}\n.dy4__panel {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n}\n.dy4__panel--intro {\n  right: 7%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: min(400px, 38vw);\n}\n@media (max-width: 768px) {\n  .dy4__panel--intro {\n    right: 5%;\n    width: min(260px, 55vw);\n    top: 55%;\n  }\n}\n.dy4__panel--specs {\n  bottom: 7%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: min(920px, 96vw);\n  text-align: center;\n}\n.dy4__panel--features {\n  left: 5%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: min(400px, 40vw);\n}\n@media (max-width: 768px) {\n  .dy4__panel--features {\n    left: 5%;\n    width: min(240px, 52vw);\n    top: 15%;\n    transform: none;\n  }\n}\n.dy4__panel--origin {\n  left: 52%;\n  top: 50%;\n  text-align: left;\n  width: min(420px, 40vw);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1.25rem;\n  background: rgba(4, 8, 16, 0.55);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  padding: 1.75rem 2rem;\n  border-radius: 2px;\n}\n@media (max-width: 768px) {\n  .dy4__panel--origin {\n    left: 5%;\n    width: min(260px, 55vw);\n    top: 12%;\n  }\n}\n.dy4__panel--origin .dy4__p-body {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: clamp(0.82rem, 1vw, 0.94rem);\n  line-height: 2;\n}\n.dy4__p-label {\n  font-family: var(--font-secondary);\n  font-size: 0.78rem;\n  letter-spacing: 0.18em;\n  color: var(--color-accent);\n  margin-bottom: 1.25rem;\n}\n.dy4__p-heading {\n  font-family: var(--font-secondary);\n  font-size: clamp(1.8rem, 3.5vw, 3rem);\n  font-weight: 700;\n  color: var(--color-white);\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  margin-bottom: 1.25rem;\n}\n.dy4__p-heading .accent {\n  color: var(--color-accent);\n}\n.dy4__p-body {\n  font-family: var(--font-body);\n  font-size: clamp(0.8rem, 1vw, 0.9rem);\n  color: rgba(255, 255, 255, 0.42);\n  line-height: 1.85;\n  font-weight: 300;\n}\n.dy4__p-body .accent {\n  color: var(--color-white);\n}\n.dy4__intro-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 1.25rem;\n}\n.dy4__intro-tags span {\n  font-family: var(--font-secondary);\n  font-size: 0.55rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.35);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 0.2rem 0.5rem;\n}\n.dy4__specs-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  margin-top: 1rem;\n}\n@media (max-width: 768px) {\n  .dy4__specs-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.dy4__spec-card {\n  background: rgba(5, 10, 18, 0.75);\n  padding: 1rem 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.dy4__spec-value {\n  font-family: var(--font-secondary);\n  font-size: clamp(1.6rem, 2.8vw, 2.2rem);\n  font-weight: 700;\n  color: var(--color-white);\n  letter-spacing: -0.02em;\n  line-height: 1;\n}\n.dy4__spec-unit {\n  font-family: var(--font-secondary);\n  font-size: 0.68rem;\n  letter-spacing: 0.15em;\n  color: var(--accent-highlight);\n  text-transform: uppercase;\n}\n.dy4__spec-label {\n  font-family: var(--font-secondary);\n  font-size: 0.63rem;\n  letter-spacing: 0.1em;\n  color: rgba(255, 255, 255, 0.22);\n  text-transform: uppercase;\n  margin-top: 0.35rem;\n}\n.dy4__feat-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  margin-top: 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n}\n.dy4__feat-row {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.7rem 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n.dy4__feat-index {\n  font-family: var(--font-secondary);\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.15);\n  letter-spacing: 0.1em;\n  flex-shrink: 0;\n}\n.dy4__feat-info {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n.dy4__feat-title {\n  font-family: var(--font-secondary);\n  font-size: clamp(0.9rem, 1.35vw, 1.05rem);\n  font-weight: 600;\n  color: var(--color-white);\n  letter-spacing: 0.01em;\n}\n.dy4__feat-tag {\n  font-family: var(--font-secondary);\n  font-size: 0.65rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--accent-highlight);\n  border: 1px solid rgba(0, 180, 216, 0.28);\n  background: rgba(0, 180, 216, 0.06);\n  padding: 0.2rem 0.5rem;\n}\n.dy4__origin-rule {\n  width: 2rem;\n  height: 1px;\n  background: var(--color-accent);\n}\n.dy4__origin-text {\n  max-width: 420px;\n}\n.dy4__origin-badge {\n  height: 44px;\n  opacity: 0.6;\n}\n.dy4__hud {\n  position: absolute;\n  bottom: 1.75rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  z-index: 3;\n  pointer-events: none;\n}\n.dy4__hud-label {\n  font-family: var(--font-secondary);\n  font-size: 0.6rem;\n  letter-spacing: 0.25em;\n  color: var(--color-accent);\n}\n.dy4__hud-bar {\n  width: 120px;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.1);\n  overflow: hidden;\n}\n.dy4__hud-fill {\n  width: 100%;\n  height: 100%;\n  background: var(--accent-highlight);\n  transform-origin: left center;\n  transform: scaleX(0);\n}\n.dy4__hud-hint {\n  font-family: var(--font-secondary);\n  font-size: 0.55rem;\n  letter-spacing: 0.15em;\n  color: rgba(255, 255, 255, 0.2);\n  animation: blink 2.5s ease-in-out infinite;\n}\n@keyframes blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.15;\n  }\n}\n.dy4__bg-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: var(--font-secondary);\n  font-size: clamp(5.5rem, 17vw, 17rem);\n  font-weight: 900;\n  letter-spacing: 0.08em;\n  color: rgba(255, 255, 255, 0.055);\n  white-space: nowrap;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  z-index: 1;\n}\n.dy4-summary {\n  background: var(--color-black);\n  padding: 6rem 0 7rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n}\n.dy4-summary__inner {\n  display: flex;\n  flex-direction: column;\n  gap: 4.5rem;\n}\n.dy4-summary__mission {\n  max-width: 740px;\n}\n.dy4-summary__mission .dy4__p-body {\n  font-size: clamp(0.88rem, 1.1vw, 1rem);\n  color: rgba(255, 255, 255, 0.58);\n}\n.dy4-summary__section {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.dy4-summary__matrix {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n}\n.dy4-summary__matrix-row {\n  display: grid;\n  grid-template-columns: 1fr 2fr auto;\n  gap: 1.5rem;\n  padding: 0.85rem 1.25rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  align-items: center;\n}\n.dy4-summary__matrix-row:last-child {\n  border-bottom: none;\n}\n.dy4-summary__matrix-row:nth-child(even) {\n  background: rgba(255, 255, 255, 0.02);\n}\n@media (max-width: 768px) {\n  .dy4-summary__matrix-row {\n    grid-template-columns: 1fr;\n    gap: 0.3rem;\n  }\n}\n.dy4-summary__matrix-req {\n  font-family: var(--font-secondary);\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--color-white);\n  letter-spacing: 0.04em;\n}\n.dy4-summary__matrix-cap {\n  font-family: var(--font-body);\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.52);\n  line-height: 1.5;\n}\n.dy4-summary__matrix-status {\n  font-family: var(--font-secondary);\n  font-size: 0.62rem;\n  letter-spacing: 0.12em;\n  color: var(--color-accent);\n  white-space: nowrap;\n}\n.dy4-summary__specs-table {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n@media (max-width: 640px) {\n  .dy4-summary__specs-table {\n    grid-template-columns: 1fr;\n  }\n}\n.dy4-summary__spec-row {\n  background: rgba(5, 10, 18, 0.8);\n  padding: 0.7rem 1.1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 1rem;\n}\n.dy4-summary__spec-param {\n  font-family: var(--font-secondary);\n  font-size: 0.65rem;\n  letter-spacing: 0.08em;\n  color: rgba(255, 255, 255, 0.35);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.dy4-summary__spec-val {\n  font-family: var(--font-secondary);\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--color-white);\n  text-align: right;\n}\n.dy4-summary__production {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .dy4-summary__production {\n    grid-template-columns: 1fr;\n  }\n}\n.dy4-summary__prod-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  padding-top: 1rem;\n}\n.dy4-summary__prod-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-family: var(--font-secondary);\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.65);\n  letter-spacing: 0.02em;\n}\n.dy4-summary__prod-dot {\n  width: 4px;\n  height: 4px;\n  background: var(--color-accent);\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dy4-summary__prod-note {\n  font-size: clamp(0.85rem, 1vw, 0.95rem);\n  color: rgba(255, 255, 255, 0.58);\n  line-height: 2;\n}\n/*# sourceMappingURL=delta-y4.css.map */\n"] }]
  }], () => [{ type: SeoService }], { scrollSectionRef: [{
    type: ViewChild,
    args: ["scrollSection"]
  }], stageRef: [{
    type: ViewChild,
    args: ["stage"]
  }], viewer: [{
    type: ViewChild,
    args: [ModelViewer]
  }], panelIntroRef: [{
    type: ViewChild,
    args: ["panelIntro"]
  }], panelSpecsRef: [{
    type: ViewChild,
    args: ["panelSpecs"]
  }], panelFeaturesRef: [{
    type: ViewChild,
    args: ["panelFeatures"]
  }], panelOriginRef: [{
    type: ViewChild,
    args: ["panelOrigin"]
  }], hudFillRef: [{
    type: ViewChild,
    args: ["hudFill"]
  }], bgTextRef: [{
    type: ViewChild,
    args: ["bgText"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeltaY4, { className: "DeltaY4", filePath: "src/app/pages/delta-y4/delta-y4.ts", lineNumber: 36 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: Home },
  { path: "news", component: News },
  { path: "news/:category/:slug", component: NewsArticle },
  { path: "who-we-are", component: Who },
  { path: "what-we-do", component: What },
  { path: "contact-us", component: ContactUs },
  { path: "darpa-lift", component: Darpa },
  { path: "delta-y4", component: DeltaY4 },
  __spreadValues({
    path: "privacy-policy",
    loadComponent: () => import("./chunk-TBDQZXDF.js").then((m) => m.PrivacyPolicyPage),
    title: "Privacy Policy"
  }, false ? { \u0275entryName: "src/app/pages/privacy-policy.page.ts" } : {}),
  __spreadValues({
    path: "terms-and-conditions",
    loadComponent: () => import("./chunk-ZSNSEXGT.js").then((m) => m.TermsAndConditionsPage),
    title: "Terms & Conditions"
  }, false ? { \u0275entryName: "src/app/pages/terms-and-conditions.page.ts" } : {}),
  { path: "**", component: NotFound }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "top",
      anchorScrolling: "enabled"
    })),
    provideClientHydration(withEventReplay()),
    provideMarkdown(),
    provideHttpClient(withFetch())
  ]
};

// src/app/shared/header/header.ts
var _c018 = (a0, a1, a2) => ({ "sticky-on": a0, "hidden": a1, "menu-open": a2 });
var _c111 = () => ({ exact: true });
var Header = class _Header {
  isSticky = false;
  isHidden = false;
  isMenuOpen = false;
  isNewsOpen = false;
  isBrowser;
  lastScrollY = 0;
  constructor(platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  onWindowScroll() {
    if (!this.isBrowser)
      return;
    const currentScroll = window.scrollY;
    this.isSticky = currentScroll > 0;
    this.isHidden = currentScroll > this.lastScrollY && currentScroll > 80;
    this.lastScrollY = currentScroll;
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".nav__item--has-dropdown")) {
      this.isNewsOpen = false;
    }
  }
  toggleNews(event) {
    event.preventDefault();
    this.isNewsOpen = !this.isNewsOpen;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
    this.isNewsOpen = false;
  }
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)(\u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], hostBindings: function Header_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function Header_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, \u0275\u0275resolveWindow)("click", function Header_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 34, vars: 10, consts: [[1, "header", 3, "ngClass"], [1, "global-container", "header-inner"], [1, "logo"], ["href", "/"], ["src", "/assets/logo-text-black.png", "alt", "Feather Dynamics", 1, "logo-black"], ["src", "/assets/logo-text-white.png", "alt", "Feather Dynamics", 1, "logo-white"], ["aria-label", "Toggle navigation", 1, "burger", 3, "click"], [1, "fa-solid", 3, "ngClass"], [1, "nav"], [1, "nav__item", "nav__item--has-dropdown"], [1, "nav__trigger", 3, "click"], [1, "nav__dropdown"], ["routerLink", "/news", "routerLinkActive", "active", 3, "click", "routerLinkActiveOptions"], [1, "nav__dropdown-title"], [1, "nav__dropdown-sub"], ["routerLink", "/darpa-lift", "routerLinkActive", "active", 3, "click"], ["routerLink", "/delta-y4", "routerLinkActive", "active", 3, "click"], ["routerLink", "/who-we-are", "routerLinkActive", "active", 3, "click"], ["routerLink", "/what-we-do", "routerLinkActive", "active", 3, "click"], ["routerLink", "/contact-us", "routerLinkActive", "active", 3, "click"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275element(4, "img", 4)(5, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 6);
      \u0275\u0275listener("click", function Header_Template_button_click_6_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nav", 8)(9, "div", 9)(10, "button", 10);
      \u0275\u0275listener("click", function Header_Template_button_click_10_listener($event) {
        return ctx.toggleNews($event);
      });
      \u0275\u0275text(11, "NEWS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 11)(13, "a", 12);
      \u0275\u0275listener("click", function Header_Template_a_click_13_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(14, "span", 13);
      \u0275\u0275text(15, "All News");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 14);
      \u0275\u0275text(17, "Latest articles & updates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "a", 15);
      \u0275\u0275listener("click", function Header_Template_a_click_18_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(19, "span", 13);
      \u0275\u0275text(20, "DARPA LIFT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 14);
      \u0275\u0275text(22, "Challenge progress & timeline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "a", 16);
      \u0275\u0275listener("click", function Header_Template_a_click_23_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(24, "span", 13);
      \u0275\u0275text(25, "Delta Y4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 14);
      \u0275\u0275text(27, "Next-gen aerial platform");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "a", 17);
      \u0275\u0275listener("click", function Header_Template_a_click_28_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(29, "WHO WE ARE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 18);
      \u0275\u0275listener("click", function Header_Template_a_click_30_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(31, "WHAT WE DO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 19);
      \u0275\u0275listener("click", function Header_Template_a_click_32_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(33, "CONTACT US");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c018, ctx.isSticky, ctx.isHidden, ctx.isMenuOpen));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngClass", ctx.isMenuOpen ? "fa-xmark" : "fa-bars");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("open", ctx.isNewsOpen);
      \u0275\u0275advance();
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(9, _c111));
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterLink, RouterLinkActive], styles: ['\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  background: transparent;\n  padding: 1.25rem 0;\n  transition: background 0.3s ease, transform 0.3s ease;\n  transform: translateX(0);\n}\n.header.hidden[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n.header.sticky-on[_ngcontent-%COMP%] {\n  background: var(--color-white);\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);\n}\n.header.sticky-on[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-black);\n}\n.header.sticky-on[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-black[_ngcontent-%COMP%] {\n  display: block;\n}\n.header.sticky-on[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-white[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%]   .header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 115;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 43px;\n  transition: height 0.3s ease;\n}\n.header[_ngcontent-%COMP%]   .logo-black[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%]   .logo-white[_ngcontent-%COMP%] {\n  display: block;\n}\n.header.menu-open[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-black[_ngcontent-%COMP%] {\n  display: block;\n}\n.header.menu-open[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-white[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%] {\n}\n.header[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.6rem;\n  color: var(--color-white);\n  cursor: pointer;\n  z-index: 115;\n  position: relative;\n}\n.header.sticky-on[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%] {\n  color: var(--color-black);\n}\n.header.menu-open[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%] {\n  color: var(--color-black);\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 105;\n  background: var(--color-white);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 2.5rem;\n  gap: 1.8rem;\n  transform: translateX(100%);\n  transition: transform 0.35s ease;\n}\n.header.menu-open[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  height: 100vh;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  font-family: var(--font-secondary);\n  color: var(--color-black);\n  text-decoration: none;\n  position: relative;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before, \n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n  font-weight: 300;\n  color: var(--color-accent);\n  font-size: 1.4em;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: "[";\n  left: -1rem;\n  transform: translateY(-50%) translateX(4px);\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: "]";\n  right: -1rem;\n  transform: translateY(-50%) translateX(-4px);\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before, \n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: translateY(-50%) translateX(0);\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after, \n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after {\n  opacity: 1;\n  transform: translateY(-50%) translateX(0);\n}\n.header[_ngcontent-%COMP%]   .nav__trigger[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  font-size: 1rem;\n  font-family: var(--font-secondary);\n  color: var(--color-black);\n  position: relative;\n}\n.header[_ngcontent-%COMP%]   .nav__trigger[_ngcontent-%COMP%]::before, \n.header[_ngcontent-%COMP%]   .nav__trigger[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 50%;\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n  font-weight: 300;\n  color: var(--color-accent);\n  font-size: 1.4em;\n}\n.header[_ngcontent-%COMP%]   .nav__trigger[_ngcontent-%COMP%]::before {\n  content: "[";\n  left: -1rem;\n  transform: translateY(-50%) translateX(4px);\n}\n.header[_ngcontent-%COMP%]   .nav__trigger[_ngcontent-%COMP%]::after {\n  content: "]";\n  right: -1rem;\n  transform: translateY(-50%) translateX(-4px);\n}\n.header[_ngcontent-%COMP%]   .nav__trigger[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  transform: translateY(-50%) translateX(0);\n}\n.header[_ngcontent-%COMP%]   .nav__trigger[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transform: translateY(-50%) translateX(0);\n}\n.header[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.header[_ngcontent-%COMP%]   .nav__dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding-left: 1rem;\n  border-left: 2px solid var(--color-accent);\n}\n.header[_ngcontent-%COMP%]   .nav__dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.85rem !important;\n  color: rgba(0, 0, 0, 0.6) !important;\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.header[_ngcontent-%COMP%]   .nav__dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before, \n.header[_ngcontent-%COMP%]   .nav__dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.header[_ngcontent-%COMP%]   .nav__dropdown-title[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-size: 0.8rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--color-black);\n}\n.header[_ngcontent-%COMP%]   .nav__dropdown-sub[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(0, 0, 0, 0.4);\n  font-family: var(--font-body);\n}\n@media (max-width: 991px) {\n  .header.sticky-on[_ngcontent-%COMP%] {\n    background: transparent;\n    box-shadow: none;\n  }\n}\n@media (min-width: 992px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 1.2rem 0;\n  }\n  .header[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    position: static;\n    flex-direction: row;\n    transform: none;\n    background: transparent;\n    gap: 3.75rem;\n    z-index: auto;\n  }\n  .header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: var(--text);\n    color: var(--color-white);\n  }\n  .header[_ngcontent-%COMP%]   .nav__trigger[_ngcontent-%COMP%] {\n    color: var(--color-white);\n  }\n  .header.sticky-on[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .header.sticky-on[_ngcontent-%COMP%]   .nav__trigger[_ngcontent-%COMP%] {\n    color: var(--color-black);\n  }\n  .header[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .header[_ngcontent-%COMP%]   .nav__item--has-dropdown[_ngcontent-%COMP%]::after {\n    content: "";\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    height: 1.2rem;\n    background: transparent;\n  }\n  .header[_ngcontent-%COMP%]   .nav__dropdown[_ngcontent-%COMP%] {\n    position: absolute;\n    top: calc(100% + 1rem);\n    left: 50%;\n    transform: translateX(-50%);\n    width: 240px;\n    background: var(--accent-background);\n    border: 1px solid var(--accent-tertiary);\n    display: flex;\n    flex-direction: column;\n    opacity: 0;\n    pointer-events: none;\n    transform: translateX(-50%) translateY(-6px);\n    transition: opacity 0.2s ease, transform 0.2s ease;\n    z-index: 200;\n  }\n  .header[_ngcontent-%COMP%]   .nav__dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.2rem;\n    padding: 1rem 1.25rem;\n    border-bottom: 1px solid rgba(155, 93, 229, 0.15);\n    color: var(--color-white) !important;\n    font-size: 0.75rem !important;\n  }\n  .header[_ngcontent-%COMP%]   .nav__dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .header[_ngcontent-%COMP%]   .nav__dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before, \n   .header[_ngcontent-%COMP%]   .nav__dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .nav__dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background: rgba(155, 93, 229, 0.08);\n  }\n  .header[_ngcontent-%COMP%]   .nav__dropdown[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   .nav__dropdown-title[_ngcontent-%COMP%] {\n    color: var(--accent-tertiary);\n  }\n  .header[_ngcontent-%COMP%]   .nav__dropdown-title[_ngcontent-%COMP%] {\n    font-family: var(--font-secondary);\n    font-size: 0.75rem;\n    letter-spacing: 0.1em;\n    color: var(--color-white);\n    text-transform: uppercase;\n  }\n  .header[_ngcontent-%COMP%]   .nav__dropdown-sub[_ngcontent-%COMP%] {\n    font-family: var(--font-body);\n    font-size: 0.7rem;\n    color: rgba(255, 255, 255, 0.4);\n    letter-spacing: 0;\n    text-transform: none;\n  }\n  .header[_ngcontent-%COMP%]   .nav__item--has-dropdown[_ngcontent-%COMP%]:hover   .nav__dropdown[_ngcontent-%COMP%], \n   .header[_ngcontent-%COMP%]   .nav__dropdown.open[_ngcontent-%COMP%] {\n    opacity: 1;\n    pointer-events: all;\n    transform: translateX(-50%) translateY(0);\n  }\n  .header[_ngcontent-%COMP%] {\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    z-index: auto;\n  }\n  .header[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%] {\n    z-index: auto;\n  }\n}\n/*# sourceMappingURL=header.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", imports: [CommonModule, RouterModule], template: `<header class="header" [ngClass]="{\r
        'sticky-on': isSticky,\r
        'hidden': isHidden,\r
        'menu-open': isMenuOpen\r
    }">\r
    <div class="global-container header-inner">\r
        <!-- Logo -->\r
        <div class="logo">\r
            <a href="/">\r
                <img class="logo-black" src="/assets/logo-text-black.png" alt="Feather Dynamics" />\r
                <img class="logo-white" src="/assets/logo-text-white.png" alt="Feather Dynamics" />\r
            </a>\r
        </div>\r
\r
        <!-- Burger -->\r
        <button class="burger" aria-label="Toggle navigation" (click)="toggleMenu()">\r
            <i class="fa-solid" [ngClass]="isMenuOpen ? 'fa-xmark' : 'fa-bars'"></i>\r
        </button>\r
\r
        <!-- Navigation -->\r
        <nav class="nav">\r
            <div class="nav__item nav__item--has-dropdown">\r
                <button class="nav__trigger" (click)="toggleNews($event)">NEWS</button>\r
                <div class="nav__dropdown" [class.open]="isNewsOpen">\r
                    <a routerLink="/news" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="closeMenu()">\r
                        <span class="nav__dropdown-title">All News</span>\r
                        <span class="nav__dropdown-sub">Latest articles & updates</span>\r
                    </a>\r
                    <a routerLink="/darpa-lift" routerLinkActive="active" (click)="closeMenu()">\r
                        <span class="nav__dropdown-title">DARPA LIFT</span>\r
                        <span class="nav__dropdown-sub">Challenge progress & timeline</span>\r
                    </a>\r
                    <a routerLink="/delta-y4" routerLinkActive="active" (click)="closeMenu()">\r
                        <span class="nav__dropdown-title">Delta Y4</span>\r
                        <span class="nav__dropdown-sub">Next-gen aerial platform</span>\r
                    </a>\r
                </div>\r
            </div>\r
            <a routerLink="/who-we-are" routerLinkActive="active" (click)="closeMenu()">WHO WE ARE</a>\r
            <a routerLink="/what-we-do" routerLinkActive="active" (click)="closeMenu()">WHAT WE DO</a>\r
            <a routerLink="/contact-us" routerLinkActive="active" (click)="closeMenu()">CONTACT US</a>\r
        </nav>\r
    </div>\r
</header>`, styles: ['/* src/app/shared/header/header.scss */\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  background: transparent;\n  padding: 1.25rem 0;\n  transition: background 0.3s ease, transform 0.3s ease;\n  transform: translateX(0);\n}\n.header.hidden {\n  transform: translateY(-100%);\n}\n.header.sticky-on {\n  background: var(--color-white);\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);\n}\n.header.sticky-on .nav a {\n  color: var(--color-black);\n}\n.header.sticky-on .logo .logo-black {\n  display: block;\n}\n.header.sticky-on .logo .logo-white {\n  display: none;\n}\n.header .header-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header .logo {\n  position: relative;\n  z-index: 115;\n}\n.header .logo img {\n  height: 43px;\n  transition: height 0.3s ease;\n}\n.header .logo-black {\n  display: none;\n}\n.header .logo-white {\n  display: block;\n}\n.header.menu-open .logo .logo-black {\n  display: block;\n}\n.header.menu-open .logo .logo-white {\n  display: none;\n}\n.header {\n}\n.header .burger {\n  background: none;\n  border: none;\n  font-size: 1.6rem;\n  color: var(--color-white);\n  cursor: pointer;\n  z-index: 115;\n  position: relative;\n}\n.header.sticky-on .burger {\n  color: var(--color-black);\n}\n.header.menu-open .burger {\n  color: var(--color-black);\n}\n.header .nav {\n  position: fixed;\n  inset: 0;\n  z-index: 105;\n  background: var(--color-white);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 2.5rem;\n  gap: 1.8rem;\n  transform: translateX(100%);\n  transition: transform 0.35s ease;\n}\n.header.menu-open .nav {\n  transform: translateX(0);\n  height: 100vh;\n}\n.header .nav a {\n  font-size: 1rem !important;\n  font-family: var(--font-secondary);\n  color: var(--color-black);\n  text-decoration: none;\n  position: relative;\n}\n.header .nav a::before,\n.header .nav a::after {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n  font-weight: 300;\n  color: var(--color-accent);\n  font-size: 1.4em;\n}\n.header .nav a::before {\n  content: "[";\n  left: -1rem;\n  transform: translateY(-50%) translateX(4px);\n}\n.header .nav a::after {\n  content: "]";\n  right: -1rem;\n  transform: translateY(-50%) translateX(-4px);\n}\n.header .nav a:hover::before,\n.header .nav a.active::before {\n  opacity: 1;\n  transform: translateY(-50%) translateX(0);\n}\n.header .nav a:hover::after,\n.header .nav a.active::after {\n  opacity: 1;\n  transform: translateY(-50%) translateX(0);\n}\n.header .nav__trigger {\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  font-size: 1rem;\n  font-family: var(--font-secondary);\n  color: var(--color-black);\n  position: relative;\n}\n.header .nav__trigger::before,\n.header .nav__trigger::after {\n  position: absolute;\n  top: 50%;\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n  font-weight: 300;\n  color: var(--color-accent);\n  font-size: 1.4em;\n}\n.header .nav__trigger::before {\n  content: "[";\n  left: -1rem;\n  transform: translateY(-50%) translateX(4px);\n}\n.header .nav__trigger::after {\n  content: "]";\n  right: -1rem;\n  transform: translateY(-50%) translateX(-4px);\n}\n.header .nav__trigger:hover::before {\n  opacity: 1;\n  transform: translateY(-50%) translateX(0);\n}\n.header .nav__trigger:hover::after {\n  opacity: 1;\n  transform: translateY(-50%) translateX(0);\n}\n.header .nav__item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.header .nav__dropdown {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding-left: 1rem;\n  border-left: 2px solid var(--color-accent);\n}\n.header .nav__dropdown a {\n  font-size: 0.85rem !important;\n  color: rgba(0, 0, 0, 0.6) !important;\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.header .nav__dropdown a::before,\n.header .nav__dropdown a::after {\n  display: none;\n}\n.header .nav__dropdown-title {\n  font-family: var(--font-secondary);\n  font-size: 0.8rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--color-black);\n}\n.header .nav__dropdown-sub {\n  font-size: 0.7rem;\n  color: rgba(0, 0, 0, 0.4);\n  font-family: var(--font-body);\n}\n@media (max-width: 991px) {\n  .header.sticky-on {\n    background: transparent;\n    box-shadow: none;\n  }\n}\n@media (min-width: 992px) {\n  .header {\n    padding: 1.2rem 0;\n  }\n  .header .burger {\n    display: none;\n  }\n  .header .nav {\n    position: static;\n    flex-direction: row;\n    transform: none;\n    background: transparent;\n    gap: 3.75rem;\n    z-index: auto;\n  }\n  .header .nav a {\n    font-size: var(--text);\n    color: var(--color-white);\n  }\n  .header .nav__trigger {\n    color: var(--color-white);\n  }\n  .header.sticky-on .nav a,\n  .header.sticky-on .nav__trigger {\n    color: var(--color-black);\n  }\n  .header .nav__item {\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n  .header .nav__item--has-dropdown::after {\n    content: "";\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    height: 1.2rem;\n    background: transparent;\n  }\n  .header .nav__dropdown {\n    position: absolute;\n    top: calc(100% + 1rem);\n    left: 50%;\n    transform: translateX(-50%);\n    width: 240px;\n    background: var(--accent-background);\n    border: 1px solid var(--accent-tertiary);\n    display: flex;\n    flex-direction: column;\n    opacity: 0;\n    pointer-events: none;\n    transform: translateX(-50%) translateY(-6px);\n    transition: opacity 0.2s ease, transform 0.2s ease;\n    z-index: 200;\n  }\n  .header .nav__dropdown a {\n    display: flex;\n    flex-direction: column;\n    gap: 0.2rem;\n    padding: 1rem 1.25rem;\n    border-bottom: 1px solid rgba(155, 93, 229, 0.15);\n    color: var(--color-white) !important;\n    font-size: 0.75rem !important;\n  }\n  .header .nav__dropdown a:last-child {\n    border-bottom: none;\n  }\n  .header .nav__dropdown a::before,\n  .header .nav__dropdown a::after {\n    display: none;\n  }\n  .header .nav__dropdown a:hover {\n    background: rgba(155, 93, 229, 0.08);\n  }\n  .header .nav__dropdown a.active .nav__dropdown-title {\n    color: var(--accent-tertiary);\n  }\n  .header .nav__dropdown-title {\n    font-family: var(--font-secondary);\n    font-size: 0.75rem;\n    letter-spacing: 0.1em;\n    color: var(--color-white);\n    text-transform: uppercase;\n  }\n  .header .nav__dropdown-sub {\n    font-family: var(--font-body);\n    font-size: 0.7rem;\n    color: rgba(255, 255, 255, 0.4);\n    letter-spacing: 0;\n    text-transform: none;\n  }\n  .header .nav__item--has-dropdown:hover .nav__dropdown,\n  .header .nav__dropdown.open {\n    opacity: 1;\n    pointer-events: all;\n    transform: translateX(-50%) translateY(0);\n  }\n  .header {\n  }\n  .header .logo {\n    z-index: auto;\n  }\n  .header .burger {\n    z-index: auto;\n  }\n}\n/*# sourceMappingURL=header.css.map */\n'] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll"]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/shared/header/header.ts", lineNumber: 19 });
})();

// src/app/shared/footer/footer.ts
var Footer = class _Footer {
  platformId;
  isBrowser = false;
  constructor(platformId) {
    this.platformId = platformId;
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  year = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)(\u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 37, vars: 1, consts: [[1, "footer"], [1, "footer__container"], [1, "footer__group", "footer__group--logo"], ["src", "/assets/logo-text-white.png", "alt", "Feather Dynamics Logo"], [1, "footer__group", "footer__group--info"], [1, "title"], ["href", "mailto:info@featherdynamics.com"], [1, "footer__group", "footer__group--links"], ["routerLink", "/what-we-do"], ["routerLink", "/contact-us"], ["href", "https://www.linkedin.com/company/featherdynamics/", "target", "_blank", "rel", "noopener"], ["src", "/assets/decos/madeinusa.png", "alt", "Made in USA", 1, "footer__usa"], [1, "footer__bottom"], [1, "footer__bottom-inner"], [1, "footer__copyright"], [1, "footer__legal"], ["routerLink", "/privacy-policy"], ["routerLink", "/terms-and-conditions"]], template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "INFO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Monterey, CA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Santa Barbara, CA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, "Austin, TX");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 6);
      \u0275\u0275text(14, " info@featherdynamics.com ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 7)(16, "span", 5);
      \u0275\u0275text(17, "LINKS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 8);
      \u0275\u0275text(19, "What We Do");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 9);
      \u0275\u0275text(21, "Contact Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 10);
      \u0275\u0275text(23, " LinkedIn ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div");
      \u0275\u0275element(25, "img", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 12)(27, "div", 13)(28, "div", 14);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 15)(31, "a", 16);
      \u0275\u0275text(32, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 17);
      \u0275\u0275text(36, "Terms & Conditions");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275textInterpolate1(" Copyright \xA9 ", ctx.year, " Feather Dynamics - All Rights Reserved. ");
    }
  }, dependencies: [RouterModule, RouterLink], styles: ['\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--color-black);\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  position: relative;\n  overflow: hidden;\n}\n.footer[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.045) 1px,\n      transparent 1px);\n  background-size: 60px 60px;\n  z-index: 0;\n}\n.footer[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 120% 60% at 50% 0%,\n      var(--color-black) 30%,\n      transparent 100%);\n  z-index: 1;\n}\n.footer[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: opacity 0.3s ease;\n}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n.footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  font-weight: 500;\n  opacity: 0.9;\n  padding-bottom: 10px;\n  position: relative;\n}\n.footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 28px;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.3);\n}\n.footer[_ngcontent-%COMP%] {\n}\n.footer__container[_ngcontent-%COMP%] {\n  max-width: 1380px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n  padding: 60px 24px;\n}\n.footer__group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.footer__group--logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 160px;\n  max-width: 100%;\n}\n.footer__group--info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.footer__group--links[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.footer__usa[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  width: 120px;\n  opacity: 0.9;\n}\n.footer[_ngcontent-%COMP%] {\n}\n.footer__bottom[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.footer__bottom-inner[_ngcontent-%COMP%] {\n  max-width: 1380px;\n  margin: 0 auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  font-size: 0.85rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.footer__legal[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.footer__legal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@media (min-width: 992px) {\n  .footer__container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: space-between;\n    padding: 100px 60px;\n    gap: 80px;\n  }\n  .footer__group[_ngcontent-%COMP%] {\n    flex: unset;\n  }\n  .footer__group--logo[_ngcontent-%COMP%] {\n    flex: 0 0 220px;\n  }\n  .footer__group--info[_ngcontent-%COMP%] {\n    flex: 0 0 280px;\n  }\n  .footer__group--links[_ngcontent-%COMP%] {\n    flex: 0 0 220px;\n  }\n  .footer[_ngcontent-%COMP%] {\n  }\n  .footer__usa[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n  .footer__bottom-inner[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 32px 60px;\n  }\n}\n/*# sourceMappingURL=footer.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [RouterModule], template: '<footer class="footer">\r\n    <div class="footer__container">\r\n\r\n        <!-- GROUP 1: LOGO -->\r\n        <div class="footer__group footer__group--logo">\r\n            <img src="/assets/logo-text-white.png" alt="Feather Dynamics Logo" />\r\n        </div>\r\n\r\n        <!-- GROUP 2: INFO -->\r\n        <div class="footer__group footer__group--info">\r\n            <span class="title">INFO</span>\r\n            <p>Monterey, CA</p>\r\n            <p>Santa Barbara, CA</p>\r\n            <p>Austin, TX</p>\r\n            <a href="mailto:info@featherdynamics.com">\r\n                info@featherdynamics.com\r\n            </a>\r\n\r\n        </div>\r\n\r\n        <!-- GROUP 3: LINKS -->\r\n        <div class="footer__group footer__group--links">\r\n            <span class="title">LINKS</span>\r\n            <a routerLink="/what-we-do">What We Do</a>\r\n            <a routerLink="/contact-us">Contact Us</a>\r\n            <a href="https://www.linkedin.com/company/featherdynamics/" target="_blank" rel="noopener">\r\n                LinkedIn\r\n            </a>\r\n        </div>\r\n\r\n        <div>\r\n            <img src="/assets/decos/madeinusa.png" alt="Made in USA" class="footer__usa" />\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- BOTTOM BAR -->\r\n    <div class="footer__bottom">\r\n        <div class="footer__bottom-inner">\r\n            <div class="footer__copyright">\r\n                Copyright \xA9 {{year}} Feather Dynamics - All Rights Reserved.\r\n            </div>\r\n\r\n            <div class="footer__legal">\r\n                <a routerLink="/privacy-policy">Privacy Policy</a>\r\n                <span>|</span>\r\n                <a routerLink="/terms-and-conditions">Terms &amp; Conditions</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>', styles: ['/* src/app/shared/footer/footer.scss */\n.footer {\n  width: 100%;\n  background: var(--color-black);\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  position: relative;\n  overflow: hidden;\n}\n.footer::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.045) 1px,\n      transparent 1px);\n  background-size: 60px 60px;\n  z-index: 0;\n}\n.footer::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 120% 60% at 50% 0%,\n      var(--color-black) 30%,\n      transparent 100%);\n  z-index: 1;\n}\n.footer > * {\n  position: relative;\n  z-index: 2;\n}\n.footer a {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: opacity 0.3s ease;\n}\n.footer a:hover {\n  opacity: 0.6;\n}\n.footer .title {\n  font-size: 1.2rem;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  font-weight: 500;\n  opacity: 0.9;\n  padding-bottom: 10px;\n  position: relative;\n}\n.footer .title::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 28px;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.3);\n}\n.footer {\n}\n.footer__container {\n  max-width: 1380px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n  padding: 60px 24px;\n}\n.footer__group {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.footer__group--logo img {\n  width: 160px;\n  max-width: 100%;\n}\n.footer__group--info p {\n  margin: 0;\n}\n.footer__group--links {\n  gap: 10px;\n}\n.footer__usa {\n  margin-top: 8px;\n  width: 120px;\n  opacity: 0.9;\n}\n.footer {\n}\n.footer__bottom {\n  width: 100%;\n}\n.footer__bottom-inner {\n  max-width: 1380px;\n  margin: 0 auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  font-size: 0.85rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.footer__legal {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.footer__legal a {\n  cursor: pointer;\n}\n@media (min-width: 992px) {\n  .footer__container {\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: space-between;\n    padding: 100px 60px;\n    gap: 80px;\n  }\n  .footer__group {\n    flex: unset;\n  }\n  .footer__group--logo {\n    flex: 0 0 220px;\n  }\n  .footer__group--info {\n    flex: 0 0 280px;\n  }\n  .footer__group--links {\n    flex: 0 0 220px;\n  }\n  .footer {\n  }\n  .footer__usa {\n    margin-top: 16px;\n  }\n  .footer__bottom-inner {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 32px 60px;\n  }\n}\n/*# sourceMappingURL=footer.css.map */\n'] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/shared/footer/footer.ts", lineNumber: 11 });
})();

// src/app/shared/news-bar/news-bar.ts
var _c019 = (a0, a1) => ["/news", a0, a1];
function NewsBar_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2)(2, "div", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "span", 8);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 9);
    \u0275\u0275text(12, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 11)(16, "a", 12);
    \u0275\u0275listener("click", function NewsBar_div_0_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275elementStart(17, "span", 13);
    \u0275\u0275text(18, "Read Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 14);
    \u0275\u0275text(20, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 15);
    \u0275\u0275listener("click", function NewsBar_div_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275element(22, "span", 16)(23, "span", 16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("news-bar--visible", ctx_r1.visible)("news-bar--hidden", !ctx_r1.visible);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.item.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, ctx_r1.item.publishedAt, "MMM d, yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.item.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(11, _c019, ctx_r1.item.category, ctx_r1.item.slug));
  }
}
var STORAGE_KEY = "fd_news_bar_last_dismissed";
var EXPIRY_HOURS = 12;
var NewsBar = class _NewsBar {
  newsService;
  platformId;
  item;
  visible = false;
  constructor(newsService, platformId) {
    this.newsService = newsService;
    this.platformId = platformId;
  }
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId))
      return;
    const all = this.newsService.getAll();
    if (!all.length)
      return;
    const latest = all.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())[0];
    this.item = latest;
    const lastDismissed = localStorage.getItem(STORAGE_KEY);
    if (lastDismissed) {
      const diff = Date.now() - Number(lastDismissed);
      const hoursPassed = diff / (1e3 * 60 * 60);
      if (hoursPassed < EXPIRY_HOURS) {
        return;
      }
    }
    setTimeout(() => {
      this.visible = true;
    }, 1800);
  }
  dismiss() {
    this.visible = false;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    }
  }
  static \u0275fac = function NewsBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NewsBar)(\u0275\u0275directiveInject(NewsService), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsBar, selectors: [["app-news-bar"]], decls: 1, vars: 1, consts: [["class", "news-bar", 3, "news-bar--visible", "news-bar--hidden", 4, "ngIf"], [1, "news-bar"], ["aria-hidden", "true", 1, "news-bar__gradient"], ["aria-hidden", "true", 1, "news-bar__noise"], [1, "news-bar__inner"], [1, "news-bar__left"], [1, "news-bar__tag"], [1, "news-bar__text"], [1, "news-bar__date"], ["aria-hidden", "true", 1, "news-bar__sep"], [1, "news-bar__title"], [1, "news-bar__actions"], [1, "news-bar__cta", 3, "click", "routerLink"], [1, "news-bar__cta-text"], [1, "news-bar__cta-arrow"], ["aria-label", "Dismiss notification", 1, "news-bar__close", 3, "click"], [1, "news-bar__close-line"]], template: function NewsBar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NewsBar_div_0_Template, 24, 14, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.item);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, DatePipe], styles: [`
.news-bar[_ngcontent-%COMP%] {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 800;
  font-family:
    "Montserrat",
    "Helvetica Neue",
    sans-serif;
  overflow: hidden;
  transform: translateY(100%);
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}
.news-bar--visible[_ngcontent-%COMP%] {
  transform: translateY(0);
}
.news-bar--hidden[_ngcontent-%COMP%] {
  transform: translateY(100%);
  pointer-events: none;
}
.news-bar__gradient[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      110deg,
      #0f172a 0%,
      #1a1f35 20%,
      #1e2d40 40%,
      #0f2027 60%,
      #1a1a2e 80%,
      #0f172a 100%);
  background-size: 300% 300%;
  animation: _ngcontent-%COMP%_gradientShift 8s ease infinite;
}
@keyframes _ngcontent-%COMP%_gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.news-bar[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      var(--color-accent) 30%,
      rgba(255, 255, 255, 0.3) 50%,
      var(--color-accent) 70%,
      transparent 100%);
  background-size: 200% 100%;
  animation: _ngcontent-%COMP%_seam 4s linear infinite;
  z-index: 2;
}
@keyframes _ngcontent-%COMP%_seam {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
.news-bar__noise[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.5;
}
.news-bar__inner[_ngcontent-%COMP%] {
  position: relative;
  z-index: 3;
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
@media (min-width: 768px) {
  .news-bar__inner[_ngcontent-%COMP%] {
    padding: 18px 48px;
  }
}
@media (min-width: 1024px) {
  .news-bar__inner[_ngcontent-%COMP%] {
    padding: 15px 64px;
  }
}
.news-bar__left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
  flex: 1;
}
.news-bar__tag[_ngcontent-%COMP%] {
  font-family:
    "DM Mono",
    "Courier New",
    monospace;
  font-size: 8px;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--color-accent);
  border: 1px solid rgba(184, 155, 94, 0.4);
  padding: 3px 8px;
  white-space: nowrap;
  flex-shrink: 0;
}
.news-bar__text[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  overflow: hidden;
}
.news-bar__date[_ngcontent-%COMP%] {
  font-family:
    "DM Mono",
    "Courier New",
    monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.4);
  white-space: nowrap;
  flex-shrink: 0;
  display: none;
}
@media (min-width: 640px) {
  .news-bar__date[_ngcontent-%COMP%] {
    display: block;
  }
}
.news-bar__sep[_ngcontent-%COMP%] {
  color: rgba(255, 255, 255, 0.2);
  font-size: 10px;
  flex-shrink: 0;
  display: none;
}
@media (min-width: 640px) {
  .news-bar__sep[_ngcontent-%COMP%] {
    display: block;
  }
}
.news-bar__title[_ngcontent-%COMP%] {
  font-family:
    "Montserrat",
    "Helvetica Neue",
    sans-serif;
  font-size: var(--text);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.88);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.news-bar__actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}
.news-bar__cta[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family:
    "DM Mono",
    "Courier New",
    monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  padding: 8px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition:
    border-color 0.3s,
    gap 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s;
}
.news-bar__cta[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--color-accent);
  transform: translateX(-101%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
}
.news-bar__cta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.news-bar__cta[_ngcontent-%COMP%]   .news-bar__cta-arrow[_ngcontent-%COMP%], 
.news-bar__cta[_ngcontent-%COMP%]   .news-bar__cta-text[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
}
.news-bar__cta[_ngcontent-%COMP%]:hover {
  border-color: var(--color-accent);
  gap: 16px;
}
.news-bar__cta[_ngcontent-%COMP%]:hover::before {
  transform: translateX(0);
}
.news-bar__cta-arrow[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transform: translateY(-1px);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.news-bar__cta[_ngcontent-%COMP%]:hover   .news-bar__cta-arrow[_ngcontent-%COMP%] {
  transform: translateX(4px);
}
.news-bar__close[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  flex-shrink: 0;
  transition: border-color 0.25s;
}
.news-bar__close[_ngcontent-%COMP%]:hover {
  border-color: rgba(255, 255, 255, 0.5);
}
.news-bar__close[_ngcontent-%COMP%]:hover   .news-bar__close-line[_ngcontent-%COMP%]:first-child {
  transform: rotate(45deg) translate(3.5px, 3.5px);
}
.news-bar__close[_ngcontent-%COMP%]:hover   .news-bar__close-line[_ngcontent-%COMP%]:last-child {
  transform: rotate(-45deg) translate(3.5px, -3.5px);
}
.news-bar__close-line[_ngcontent-%COMP%] {
  display: block;
  width: 14px;
  height: 1px;
  background: rgba(255, 255, 255, 0.7);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
/*# sourceMappingURL=news-bar.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewsBar, [{
    type: Component,
    args: [{ selector: "app-news-bar", standalone: true, imports: [CommonModule, RouterModule, DatePipe], template: `<div class="news-bar" [class.news-bar--visible]="visible" [class.news-bar--hidden]="!visible" *ngIf="item">\r
\r
    <!-- Gradient background layers -->\r
    <div class="news-bar__gradient" aria-hidden="true"></div>\r
    <div class="news-bar__noise" aria-hidden="true"></div>\r
\r
    <div class="news-bar__inner">\r
\r
        <!-- Left: label + content -->\r
        <div class="news-bar__left">\r
            <span class="news-bar__tag">{{ item.category }}</span>\r
            <div class="news-bar__text">\r
                <span class="news-bar__date">{{ item.publishedAt | date:'MMM d, yyyy' }}</span>\r
                <span class="news-bar__sep" aria-hidden="true">\u2014</span>\r
                <span class="news-bar__title">{{ item.title }}</span>\r
            </div>\r
        </div>\r
\r
        <!-- Right: CTA + close -->\r
        <div class="news-bar__actions">\r
            <a class="news-bar__cta" [routerLink]="['/news', item.category, item.slug]" (click)="dismiss()">\r
                <span class="news-bar__cta-text">Read Article</span>\r
                <span class="news-bar__cta-arrow">\u2192</span>\r
            </a>\r
\r
            <button class="news-bar__close" (click)="dismiss()" aria-label="Dismiss notification">\r
                <span class="news-bar__close-line"></span>\r
                <span class="news-bar__close-line"></span>\r
            </button>\r
        </div>\r
\r
    </div>\r
\r
</div>`, styles: [`/* src/app/shared/news-bar/news-bar.scss */
.news-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 800;
  font-family:
    "Montserrat",
    "Helvetica Neue",
    sans-serif;
  overflow: hidden;
  transform: translateY(100%);
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}
.news-bar--visible {
  transform: translateY(0);
}
.news-bar--hidden {
  transform: translateY(100%);
  pointer-events: none;
}
.news-bar__gradient {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      110deg,
      #0f172a 0%,
      #1a1f35 20%,
      #1e2d40 40%,
      #0f2027 60%,
      #1a1a2e 80%,
      #0f172a 100%);
  background-size: 300% 300%;
  animation: gradientShift 8s ease infinite;
}
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.news-bar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      var(--color-accent) 30%,
      rgba(255, 255, 255, 0.3) 50%,
      var(--color-accent) 70%,
      transparent 100%);
  background-size: 200% 100%;
  animation: seam 4s linear infinite;
  z-index: 2;
}
@keyframes seam {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
.news-bar__noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.5;
}
.news-bar__inner {
  position: relative;
  z-index: 3;
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
@media (min-width: 768px) {
  .news-bar__inner {
    padding: 18px 48px;
  }
}
@media (min-width: 1024px) {
  .news-bar__inner {
    padding: 15px 64px;
  }
}
.news-bar__left {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
  flex: 1;
}
.news-bar__tag {
  font-family:
    "DM Mono",
    "Courier New",
    monospace;
  font-size: 8px;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--color-accent);
  border: 1px solid rgba(184, 155, 94, 0.4);
  padding: 3px 8px;
  white-space: nowrap;
  flex-shrink: 0;
}
.news-bar__text {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  overflow: hidden;
}
.news-bar__date {
  font-family:
    "DM Mono",
    "Courier New",
    monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.4);
  white-space: nowrap;
  flex-shrink: 0;
  display: none;
}
@media (min-width: 640px) {
  .news-bar__date {
    display: block;
  }
}
.news-bar__sep {
  color: rgba(255, 255, 255, 0.2);
  font-size: 10px;
  flex-shrink: 0;
  display: none;
}
@media (min-width: 640px) {
  .news-bar__sep {
    display: block;
  }
}
.news-bar__title {
  font-family:
    "Montserrat",
    "Helvetica Neue",
    sans-serif;
  font-size: var(--text);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.88);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.news-bar__actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}
.news-bar__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family:
    "DM Mono",
    "Courier New",
    monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  padding: 8px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition:
    border-color 0.3s,
    gap 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s;
}
.news-bar__cta::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--color-accent);
  transform: translateX(-101%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
}
.news-bar__cta span,
.news-bar__cta .news-bar__cta-arrow,
.news-bar__cta .news-bar__cta-text {
  position: relative;
  z-index: 2;
}
.news-bar__cta:hover {
  border-color: var(--color-accent);
  gap: 16px;
}
.news-bar__cta:hover::before {
  transform: translateX(0);
}
.news-bar__cta-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transform: translateY(-1px);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.news-bar__cta:hover .news-bar__cta-arrow {
  transform: translateX(4px);
}
.news-bar__close {
  width: 32px;
  height: 32px;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  flex-shrink: 0;
  transition: border-color 0.25s;
}
.news-bar__close:hover {
  border-color: rgba(255, 255, 255, 0.5);
}
.news-bar__close:hover .news-bar__close-line:first-child {
  transform: rotate(45deg) translate(3.5px, 3.5px);
}
.news-bar__close:hover .news-bar__close-line:last-child {
  transform: rotate(-45deg) translate(3.5px, -3.5px);
}
.news-bar__close-line {
  display: block;
  width: 14px;
  height: 1px;
  background: rgba(255, 255, 255, 0.7);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
/*# sourceMappingURL=news-bar.css.map */
`] }]
  }], () => [{ type: NewsService }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsBar, { className: "NewsBar", filePath: "src/app/shared/news-bar/news-bar.ts", lineNumber: 21 });
})();

// src/app/shared/scroll-top/scroll-top.ts
var ScrollTopComponent = class _ScrollTopComponent {
  visible = signal(false, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  isBrowser;
  constructor(platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  onScroll() {
    if (!this.isBrowser)
      return;
    const offset = window.scrollY || document.documentElement.scrollTop;
    this.visible.set(offset > 400);
  }
  scrollToTop() {
    if (!this.isBrowser)
      return;
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  static \u0275fac = function ScrollTopComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollTopComponent)(\u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrollTopComponent, selectors: [["app-scroll-top"]], hostBindings: function ScrollTopComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function ScrollTopComponent_scroll_HostBindingHandler() {
        return ctx.onScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 2, vars: 2, consts: [["aria-label", "Scroll to top", 1, "scroll-top", 3, "click"]], template: function ScrollTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function ScrollTopComponent_Template_button_click_0_listener() {
        return ctx.scrollToTop();
      });
      \u0275\u0275text(1, " \u2191\n");
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("is-visible", ctx.visible());
    }
  }, dependencies: [CommonModule], styles: ["\n[_nghost-%COMP%] {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: 1000;\n}\n.scroll-top[_ngcontent-%COMP%] {\n  width: 3.25rem;\n  height: 3.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-secondary);\n  font-size: var(--text);\n  font-weight: 400;\n  background: var(--accent-background);\n  border: 2px solid var(--color-accent);\n  color: var(--color-white);\n  cursor: pointer;\n  opacity: 0;\n  transform: translateY(20px);\n  pointer-events: none;\n  transition:\n    opacity 0.4s ease,\n    transform 0.4s ease,\n    background 0.3s ease;\n}\n.scroll-top.is-visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n}\n@media (hover: hover) {\n  .scroll-top[_ngcontent-%COMP%]:hover {\n    transform: translateY(-6px);\n    background: var(--accent-background);\n  }\n}\n.scroll-top[_ngcontent-%COMP%]:active {\n  transform: translateY(-2px);\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%] {\n    bottom: 2rem;\n    right: 2rem;\n  }\n  .scroll-top[_ngcontent-%COMP%] {\n    width: 3.75rem;\n    height: 3.75rem;\n    font-size: var(--text-xl);\n  }\n}\n/*# sourceMappingURL=scroll-top.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollTopComponent, [{
    type: Component,
    args: [{ selector: "app-scroll-top", standalone: true, imports: [CommonModule], template: '<button class="scroll-top" [class.is-visible]="visible()" (click)="scrollToTop()" aria-label="Scroll to top">\r\n    \u2191\r\n</button>', styles: ["/* src/app/shared/scroll-top/scroll-top.scss */\n:host {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: 1000;\n}\n.scroll-top {\n  width: 3.25rem;\n  height: 3.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-secondary);\n  font-size: var(--text);\n  font-weight: 400;\n  background: var(--accent-background);\n  border: 2px solid var(--color-accent);\n  color: var(--color-white);\n  cursor: pointer;\n  opacity: 0;\n  transform: translateY(20px);\n  pointer-events: none;\n  transition:\n    opacity 0.4s ease,\n    transform 0.4s ease,\n    background 0.3s ease;\n}\n.scroll-top.is-visible {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n}\n@media (hover: hover) {\n  .scroll-top:hover {\n    transform: translateY(-6px);\n    background: var(--accent-background);\n  }\n}\n.scroll-top:active {\n  transform: translateY(-2px);\n}\n@media (min-width: 768px) {\n  :host {\n    bottom: 2rem;\n    right: 2rem;\n  }\n  .scroll-top {\n    width: 3.75rem;\n    height: 3.75rem;\n    font-size: var(--text-xl);\n  }\n}\n/*# sourceMappingURL=scroll-top.css.map */\n"] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { onScroll: [{
    type: HostListener,
    args: ["window:scroll"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrollTopComponent, { className: "ScrollTopComponent", filePath: "src/app/shared/scroll-top/scroll-top.ts", lineNumber: 17 });
})();

// src/app/app.ts
var App = class _App {
  router;
  title_route;
  gtm;
  seo;
  title = signal("fd-2", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor(router, title_route, gtm, seo) {
    this.router = router;
    this.title_route = title_route;
    this.gtm = gtm;
    this.seo = seo;
  }
  ngOnInit() {
    this.seo.updateSeo({
      title: "Feather Dynamics",
      description: "Feather Dynamics leads the industry in unmanned vehicle technology and autonomous systems. With 30 years of innovation, we deliver mission-driven design for commercial and defense applications. Explore our next-gen solutions today.",
      image: "https://featherdynamics.com/assets/fdmetapic.jpg",
      keywords: "unmanned vehicles, autonomous systems, UAV, defense technology, unmanned aerial systems, UAS, autonomous vehicle design, robotic defense systems, next-gen autonomous technology, mission-critical unmanned vehicles, commercial autonomous flight solutions, tactical UAV development, autonomous ISR, autonomous system integration, edge computing for unmanned systems, UAV payload engineering, multi-domain autonomous platforms, autonomous innovation, UAV manufacturers, defense applications, autonomous mission-driven development"
    });
    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://featherdynamics.com/#website",
          url: "https://featherdynamics.com",
          name: "Feather Dynamics",
          description: "Feather Dynamics leads the industry in unmanned vehicle technology and autonomous systems. With 30 years of innovation, we deliver mission-driven design for commercial and defense applications."
        },
        {
          "@type": "WebPage",
          "@id": "https://featherdynamics.com/#webpage",
          url: "https://featherdynamics.com",
          name: "Feather Dynamics | Unmanned Vehicle Technology",
          description: "Feather Dynamics leads the industry in unmanned vehicle technology and autonomous systems. With 30 years of innovation, we deliver mission-driven design for commercial and defense applications.",
          isPartOf: { "@id": "https://featherdynamics.com/#website" }
        },
        {
          "@type": "Organization",
          "@id": "https://featherdynamics.com/#organization",
          name: "Feather Dynamics",
          url: "https://featherdynamics.com",
          logo: {
            "@type": "ImageObject",
            url: "https://featherdynamics.com/assets/fdmetapic.jpg"
          },
          description: "Feather Dynamics has been innovating unmanned vehicle technology for nearly three decades, serving both commercial and defense applications. With a long-standing history of advancing autonomous systems, the company has consistently contributed to shaping the future of next-generation autonomous vehicles through design excellence, technical innovation, and mission-driven development.",
          founder: {
            "@type": "Person",
            name: "Rhandal Sayat",
            jobTitle: "Chief Executive Officer",
            worksFor: { "@id": "https://featherdynamics.com/#organization" }
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Investor Relations",
            email: "info@featherdynamics.com",
            availableLanguage: "English"
          },
          sameAs: [
            "https://www.linkedin.com/company/featherdynamics"
          ]
        }
      ]
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.gtm.trackPageView(event.urlAfterRedirects, this.title_route.getTitle());
    });
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(GtmService), \u0275\u0275directiveInject(SeoService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 5, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header")(1, "app-news-bar")(2, "router-outlet")(3, "app-scroll-top")(4, "app-footer");
    }
  }, dependencies: [RouterOutlet, Header, Footer, NewsBar, ScrollTopComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, Header, Footer, NewsBar, ScrollTopComponent], template: "<app-header></app-header>\r\n<app-news-bar></app-news-bar>\r\n<router-outlet></router-outlet>\r\n<app-scroll-top></app-scroll-top>\r\n<app-footer></app-footer>" }]
  }], () => [{ type: Router }, { type: Title }, { type: GtmService }, { type: SeoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 18 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
