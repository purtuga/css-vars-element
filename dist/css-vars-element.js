!function(root, factory) {
    "object" === typeof exports && "object" === typeof module ? module.exports = factory() : "function" === typeof define && define.amd ? define([], factory) : "object" === typeof exports ? exports.CssVarsElement = factory() : root.CssVarsElement = factory();
}("undefined" !== typeof self ? self : this, function() {
    /******/
    return function(modules) {
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId]) /******/
            return installedModules[moduleId].exports;
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
            };
            /******/
            /******/
            // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/
            // Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/
            // Return the exports of the module
            /******/
            return module.exports;
        }
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/
        // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/
        // define getter function for harmony exports
        /******/
        __webpack_require__.d = function(exports, name, getter) {
            /******/
            __webpack_require__.o(exports, name) || /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
            });
        };
        /******/
        /******/
        // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ? /******/
            function() {
                return module.default;
            } : /******/
            function() {
                return module;
            };
            /******/
            __webpack_require__.d(getter, "a", getter);
            /******/
            return getter;
        };
        /******/
        /******/
        // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/
        // __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/
        // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 7);
    }([ /* 0 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export functionBind */
        /* unused harmony export functionBindCall */
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "e", function() {
            return objectDefineProperty;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "d", function() {
            return objectDefineProperties;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "f", function() {
            return objectKeys;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "c", function() {
            return isArray;
        });
        /* unused harmony export arrayForEach */
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "b", function() {
            return arrayIndexOf;
        });
        /* unused harmony export arraySplice */
        /* unused harmony export consoleLog */
        /* unused harmony export consoleError */
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return SymbolIterator;
        });
        // Function
        // functionBind(fn, fnParent)
        var functionBind = Function.bind.call.bind(Function.bind);
        // usage: functionBindCall(Array.prototype.forEach) // generates a bound function to Array.prototype.forEach.call
        var functionBindCall = functionBind(Function.call.bind, Function.call);
        // Object
        var objectDefineProperty = Object.defineProperty;
        var objectDefineProperties = Object.defineProperties;
        var objectKeys = Object.keys;
        // Array
        var arr = [];
        var isArray = Array.isArray;
        functionBindCall(arr.forEach);
        var arrayIndexOf = functionBindCall(arr.indexOf);
        functionBindCall(arr.splice);
        // Logging
        var consoleLog = console.log;
        console.error;
        // Iterators
        var SymbolIterator = "undefined" !== typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    }, /* 1 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return PRIVATE;
        });
        /* unused harmony export STATE_SYMBOL */
        /* harmony export (immutable) */
        __webpack_exports__.b = elementHasAttributeForProp;
        /* harmony export (immutable) */
        __webpack_exports__.c = geAttributeValueForProp;
        /* harmony export (immutable) */
        __webpack_exports__.i = getState;
        /* harmony export (immutable) */
        __webpack_exports__.g = getKebabCase;
        /* unused harmony export getCamelCase */
        /* harmony export (immutable) */
        __webpack_exports__.h = getPropsDefinition;
        /* harmony export (immutable) */
        __webpack_exports__.d = getComponentClassState;
        /* harmony export (immutable) */
        __webpack_exports__.e = getComponentInstanceTemplate;
        /* harmony export (immutable) */
        __webpack_exports__.f = getComponentTemplate;
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_objectExtend__ = __webpack_require__(2);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_dataStore__ = __webpack_require__(13);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_observables_src_objectWatchProp__ = __webpack_require__(5);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_common_micro_libs_src_jsutils_runtime_aliases__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4_common_micro_libs_src_jsutils_Symbol__ = __webpack_require__(14);
        //============================================================================
        var PRIVATE = __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_dataStore__.a.create();
        Object(__WEBPACK_IMPORTED_MODULE_4_common_micro_libs_src_jsutils_Symbol__.a)("state");
        /**
 * Checks if the element has an attribute set that matches any of the aliases for a prop
 *
 * @param {ComponentElement} ele
 * @param {ComponentElement~PropDefinition} propDef
 *
 * @return {Boolean}
 */
        function elementHasAttributeForProp(ele, propDef) {
            return propDef.aliases.some(function(propAlias) {
                return ele.hasAttribute(propAlias);
            });
        }
        function geAttributeValueForProp(ele, propDef) {
            var attrVal = "";
            propDef.aliases.some(function(propAlias) {
                if (ele.hasAttribute(propAlias)) {
                    attrVal = ele.getAttribute(propAlias);
                    return true;
                }
            });
            return attrVal;
        }
        function getState(instance) {
            if (!PRIVATE.has(instance)) {
                var state = {
                    ready: false,
                    // We have all required params
                    readyWatcher: null,
                    props: instance.props,
                    destroyCallbacks: [],
                    destroyQueued: null,
                    isMounted: false,
                    hasTemplate: false
                };
                // Create all props
                var propDefintions = getPropsDefinition(instance.constructor);
                var required = Object(__WEBPACK_IMPORTED_MODULE_3_common_micro_libs_src_jsutils_runtime_aliases__.f)(propDefintions).filter(function(propName) {
                    return !propDefintions[propName]._isAlias && propDefintions[propName].required;
                });
                var setReadyState = function() {
                    !required.length || required.every(function(propName) {
                        return !!state.props[propName];
                    }) ? state.ready = true : state.ready = false;
                };
                required.forEach(function(propName) {
                    return Object(__WEBPACK_IMPORTED_MODULE_2_observables_src_objectWatchProp__.a)(state.props, propName, setReadyState);
                });
                setReadyState();
                PRIVATE.set(instance, state);
            }
            return PRIVATE.get(instance);
        }
        /**
 * Returns a kebab-case representation of the given string on input. Essentially, replaces
 * each Capital letter with a `-` followed by that letter in lower case.
 *
 * @param {String} str
 *
 * @return {String}
 *
 * @example
 *
 * getKebabCase("Paul"); // => -paul
 * getKebabCase("paulTavares"); // => paul-tavares
 */
        function getKebabCase(str) {
            return str.replace(/([A-Z])/g, function(match, p1) {
                return "-" + p1.toLowerCase();
            });
        }
        /**
 *
 * @param ComponentClass
 * @returns {Object<String,ComponentElement~PropDefinition>}
 */
        function getPropsDefinition(ComponentClass) {
            var state = getComponentClassState(ComponentClass);
            if (!state.propsDef) {
                state.propsDef = {};
                // The props are stored internally (weakmap) once for the Component Class.
                // The internal definition has the "aliases" expanded as well.
                ComponentClass.propsDef && Object(__WEBPACK_IMPORTED_MODULE_3_common_micro_libs_src_jsutils_runtime_aliases__.f)(ComponentClass.propsDef).forEach(function(propName) {
                    state.propsDef[propName] = ComponentClass.propsDef[propName];
                    // expand aliases as well
                    if (Object(__WEBPACK_IMPORTED_MODULE_3_common_micro_libs_src_jsutils_runtime_aliases__.c)(state.propsDef[propName].aliases)) {
                        var propAliasDef = Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_objectExtend__.a)({}, ComponentClass.propsDef[propName], {
                            _isAlias: true
                        });
                        state.propsDef[propName].aliases.forEach(function(propNameAlias) {
                            return !state.propsDef[propNameAlias] && (state.propsDef[propNameAlias] = propAliasDef);
                        });
                    }
                });
            }
            return state.propsDef;
        }
        /**
 * Returns the internal state for the Component Class
 *
 * @param {ComponentElement} ComponentClass
 *
 * @return {Object}
 */
        function getComponentClassState(ComponentClass) {
            PRIVATE.has(ComponentClass) || PRIVATE.set(ComponentClass, {
                propsDef: null,
                template: null,
                observedAttrs: null
            });
            return PRIVATE.get(ComponentClass);
        }
        /**
 * Returns a clone of the Class's template - ready to be used/inserted
 * into a instance of the class
 *
 * @param {ComponentElement} componentInstance
 *
 * @return {HTMLElement}
 */
        function getComponentInstanceTemplate(componentInstance) {
            return componentInstance.ownerDocument.importNode(getComponentTemplate(componentInstance.constructor).content, true);
        }
        /**
 * Returns a `HTMLTemplateElement` that holds the ComponentElement's template
 *
 * @param {ComponentElement} Component
 *  The ComponentElement class
 *
 * @return {HTMLTemplateElement}
 */
        function getComponentTemplate(Component) {
            if ("string" === typeof Component.template) {
                var classState = getComponentClassState(Component);
                if (!classState.template) {
                    classState.template = document.createElement("template");
                    classState.template.innerHTML = Component.template;
                }
                return classState.template;
            }
            return Component.template;
        }
    }, /* 2 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export objectExtend */
        var OBJECT_TYPE = "[object Object]";
        var _toString = Function.call.bind(Object.prototype.toString);
        //============================================================
        /**
 * Extends an object with the properties of another.
 *
 * @param {Object|Boolean} mergeIntoObj
 *  The object that will have the properties of every other object provided
 *  on input merged into. This can also be a `Boolean`, in which case,
 *  a deep merge of objects will be done - argument number 2 will
 *  become the `mergeIntoObj`.
 * @param {...Object} mergeObjects
 *
 * @return {Object}
 */
        function objectExtend(mergeIntoObj) {
            var response = mergeIntoObj || {};
            for (var _len = arguments.length, mergeObjects = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) mergeObjects[_key - 1] = arguments[_key];
            var total = mergeObjects.length;
            var deepMerge = false;
            var i = void 0;
            var key = void 0;
            if ("boolean" === typeof mergeIntoObj) {
                deepMerge = mergeIntoObj;
                response = mergeObjects.shift() || {};
                total = mergeObjects.length;
            }
            for (i = 0; i < total; i++) {
                if (!mergeObjects[i]) continue;
                for (key in mergeObjects[i]) mergeObjects[i].hasOwnProperty(key) && (deepMerge && _toString(response[key]) === OBJECT_TYPE && _toString(mergeObjects[i][key]) === OBJECT_TYPE ? response[key] = objectExtend(true, response[key], mergeObjects[i][key]) : response[key] = mergeObjects[i][key]);
            }
            return response;
        }
        /* harmony default export */
        __webpack_exports__.a = objectExtend;
    }, /* 3 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(global) {
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() {
                return GLOBAL;
            });
            /* unused harmony export getGlobal */
            var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var GLOBAL = function() {
                /* global self, window, global */
                if ("undefined" !== ("undefined" === typeof window ? "undefined" : _typeof(window))) return window;
                if ("undefined" !== ("undefined" === typeof global ? "undefined" : _typeof(global))) return global;
                if ("undefined" !== ("undefined" === typeof self ? "undefined" : _typeof(self))) return self;
                return Function("return this;")();
            }();
        }).call(__webpack_exports__, __webpack_require__(10));
    }, /* 4 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return ComponentElement;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_objectExtend__ = __webpack_require__(2);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_observables_src_objectWatchProp__ = __webpack_require__(5);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3_common_micro_libs_src_domutils_domAddEventListener__ = __webpack_require__(12);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__polyfill_support__ = __webpack_require__(15);
        var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    "value" in descriptor && (descriptor.writable = true);
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                protoProps && defineProperties(Constructor.prototype, protoProps);
                staticProps && defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        var _fixBabelExtend = function(O) {
            var gPO = O.getPrototypeOf || function(o) {
                return o.__proto__;
            }, sPO = O.setPrototypeOf || function(o, p) {
                o.__proto__ = p;
                return o;
            }, construct = "object" === ("undefined" === typeof Reflect ? "undefined" : _typeof(Reflect)) ? Reflect.construct : function(Parent, args, Class) {
                var Constructor, a = [ null ];
                a.push.apply(a, args);
                Constructor = Parent.bind.apply(Parent, a);
                return sPO(new Constructor(), Class.prototype);
            };
            return function(Class) {
                var Parent = gPO(Class);
                return sPO(Class, sPO(function() {
                    return construct(Parent, arguments, gPO(this).constructor);
                }, Parent));
            };
        }(Object);
        //============================================================================
        var SHADOW_DOM_SUPPORTED = document.head.createShadowRoot || document.head.attachShadow;
        var EV_DEFAULT_INIT = {
            bubbles: false,
            cancelable: false,
            composed: false
        };
        /**
 * A generic class for building widgets based on HTML Custom Elements.
 *
 * @extends HTMLElement
 *
 */
        var ComponentElement = _fixBabelExtend(function(_HTMLElement) {
            _inherits(ComponentElement, _HTMLElement);
            function ComponentElement() {
                var _ref;
                var _this, _ret;
                _classCallCheck(this, ComponentElement);
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                var self = (_this = _possibleConstructorReturn(this, (_ref = ComponentElement.__proto__ || Object.getPrototypeOf(ComponentElement)).call.apply(_ref, [ this ].concat(args))), 
                _this) || _this;
                setupComponent(self);
                return _ret = self, _possibleConstructorReturn(_this, _ret);
            }
            //==============================================================
            //  Static Members
            //==============================================================
            /**
     * The Component's props definition
     * @name propsDef
     * @type {Object<String,ComponentElement~PropDefinition>}
     */
            /**
     * Return default registration tag name
     *
     * @type {String}
     */
            _createClass(ComponentElement, [ {
                key: "attributeChangedCallback",
                //==============================================================
                //  Instance Members
                //==============================================================
                // Reflects changed html attributes to state.props
                value: function(name, oldValue, newValue) {
                    var propsDef = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.h)(this.constructor);
                    propsDef[name] && (name = propsDef[name].name);
                    this.props[name] = newValue;
                }
            }, {
                key: "destroy",
                value: function() {
                    if (__WEBPACK_IMPORTED_MODULE_4__utils__.a.has(this)) {
                        var state = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.i)(this);
                        __WEBPACK_IMPORTED_MODULE_4__utils__.a.delete(this);
                        if (state.destroyQueued) {
                            clearTimeout(state.destroyQueued);
                            state.destroyQueued = null;
                        }
                        state.destroyCallbacks.splice(0).forEach(function(cb) {
                            return cb();
                        });
                    }
                    this.parentNode && this.parentNode.removeChild(this);
                }
            }, {
                key: "onDestroy",
                value: function(callback) {
                    Object(__WEBPACK_IMPORTED_MODULE_4__utils__.i)(this).destroyCallbacks.push(callback);
                }
            }, {
                key: "$",
                /**
         * Find an element in the `$ui` (alias for `querySelector()`)
         *
         * @param {String} selector
         *
         * @return {HTMLElement}
         */
                value: function(selector) {
                    return this.$ui.querySelector(selector);
                }
            }, {
                key: "$$",
                value: function(selector) {
                    var result = this.$ui.querySelectorAll(selector);
                    if (Array.isArray(result)) return;
                    return Array.prototype.slice.call(result, 0);
                }
            }, {
                key: "init",
                value: function() {}
            }, {
                key: "ready",
                value: function() {}
            }, {
                key: "unready",
                value: function() {}
            }, {
                key: "mounted",
                value: function() {}
            }, {
                key: "unmounted",
                value: function() {}
            }, {
                key: "emit",
                value: function(eventName, data, eventInit) {
                    this.dispatchEvent(new CustomEvent(eventName, Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_objectExtend__.a)({}, this.constructor.eventInitOptions, eventInit, {
                        detail: data
                    })));
                }
            }, {
                key: "on",
                value: function(eventNames, callback, capture) {
                    return Object(__WEBPACK_IMPORTED_MODULE_3_common_micro_libs_src_domutils_domAddEventListener__.a)(this.$ui, eventNames, callback, capture);
                }
            }, {
                key: "onPropsChange",
                value: function(callback, propName) {
                    return Object(__WEBPACK_IMPORTED_MODULE_2_observables_src_objectWatchProp__.b)(this.props, propName, callback);
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    Object(__WEBPACK_IMPORTED_MODULE_5__polyfill_support__.b)(this);
                    // Cancel destroy if it is queued
                    if (__WEBPACK_IMPORTED_MODULE_4__utils__.a.has(this)) {
                        var state = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.i)(this);
                        if (state.destroyQueued) {
                            clearTimeout(state.destroyQueued);
                            state.destroyQueued = null;
                        }
                        state.isMounted = true;
                        state.ready && this.mounted();
                    } else {
                        Object(__WEBPACK_IMPORTED_MODULE_4__utils__.i)(this).isMounted = true;
                        setupComponent(this);
                    }
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    // Delay calling .destroy() by 60s, just in case user re-attaches component back to dom.
                    // This seems to be currently the only way to ensure attached `onDestroy` logic run when
                    // the element is no longer needed.
                    if (__WEBPACK_IMPORTED_MODULE_4__utils__.a.has(this)) {
                        var state = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.i)(this);
                        state.destroyQueued || (state.destroyQueued = setTimeout(this.destroy.bind(this), this.constructor.delayDestroy));
                        state.isMounted = false;
                        state.ready && this.unmounted();
                    }
                }
            }, {
                key: "props",
                get: function() {
                    var _this2 = this;
                    if (this.constructor.prototype === this) throw new Error("can't be used on own prototype");
                    if (this._$props) return this._$props;
                    // On first call - setup the property on the instance
                    var propDefinitions = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.h)(this.constructor);
                    var props = {};
                    Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.f)(propDefinitions).forEach(function(propName) {
                        if (!propDefinitions[propName] || !propDefinitions[propName]._isAlias) {
                            var propValue = propDefinitions[propName].default.call(_this2);
                            propDefinitions[propName].attr && !propDefinitions[propName].boolean && Object(__WEBPACK_IMPORTED_MODULE_4__utils__.b)(_this2, propDefinitions[propName]) && (propValue = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.c)(_this2, propDefinitions[propName]));
                            Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.e)(props, propName, {
                                configurable: true,
                                enumerable: true,
                                get: function() {
                                    return propValue;
                                },
                                set: function(newValue) {
                                    newValue = propDefinitions[propName].filter.call(_this2, newValue);
                                    return propValue = newValue;
                                }
                            });
                        }
                    });
                    Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.e)(this, "_$props", {
                        value: props
                    });
                    return props;
                }
            }, {
                key: "$ui",
                get: function() {
                    return this._$ui;
                }
            } ], [ {
                key: "define",
                /**
         * Registers the web component. Uses tagName as default input param
         */
                value: function(name) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__polyfill_support__.a)(this, name || this.tagName);
                    window.customElements.define(name || this.tagName, this);
                }
            }, {
                key: "renderTemplate",
                /**
         * Renderer for the template and return what should be inserted into shadowDom.
         * By default, this base class will simply clone the `template` defined in the
         * static property above. This method will called prior to doing that, and if
         * it returns a `truthy` value, then its assume to be either an HTMLElement or
         * DocumentFragment with the element's instance UI (which will be inserted into
         * shadowDom).
         *
         * **NOTE**: Should always use `getComponentInstanceTemplate` or `getComponentTemplate`
         * to retrieve the template or its content, since it is manipulated in browsers that
         * use the polyfills to make the template compatible in those platforms.
         *
         * @param {ComponentElement} eleInstance
         *  The `ComponentElement` instance being initialized
         *
         * @return {HTMLElement|DocumentFragment}
         */
                value: function(eleInstance) {
                    // FIXME: should two additional params be provided - one to get templateInstance and another to get templateElement?
                    return Object(__WEBPACK_IMPORTED_MODULE_4__utils__.e)(eleInstance);
                }
            }, {
                key: "tagName",
                get: function() {
                    throw new Error("tagName not defined");
                }
            }, {
                key: "delayDestroy",
                get: function() {
                    return 250;
                }
            }, {
                key: "useShadow",
                get: function() {
                    return true;
                }
            }, {
                key: "shadowMode",
                get: function() {
                    return "open";
                }
            }, {
                key: "template",
                get: function() {
                    return "<div></div>";
                }
            }, {
                key: "eventInitOptions",
                get: function() {
                    return EV_DEFAULT_INIT;
                }
            }, {
                key: "observedAttributes",
                get: function() {
                    var state = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.d)(this);
                    if (!state.observedAttrs) {
                        var propList = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.h)(this);
                        state.observedAttrs = Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.f)(propList).filter(function(p) {
                            return propList[p].attr;
                        });
                    }
                    return state.observedAttrs;
                }
            } ]);
            return ComponentElement;
        }(HTMLElement));
        function setupComponent(component) {
            var state = Object(__WEBPACK_IMPORTED_MODULE_4__utils__.i)(component);
            var lastReadyState = null;
            var handleReadyChanges = function() {
                if (lastReadyState === state.ready) return;
                lastReadyState = state.ready;
                if (state.ready) {
                    if (!state.hasTemplate) {
                        // component._$ui.innerHTML = component.constructor.template;
                        component._$ui.appendChild(component.constructor.renderTemplate(component));
                        state.hasTemplate = true;
                    }
                    component.ready();
                    state.isMounted && component.mounted();
                } else state.hasTemplate && component.unready();
            };
            component.constructor.useShadow && SHADOW_DOM_SUPPORTED ? component.shadowRoot ? component._$ui = component.shadowRoot : component._$ui = component.attachShadow({
                mode: component.constructor.shadowMode
            }) : component._$ui = component;
            component.init();
            state.readyWatcher = Object(__WEBPACK_IMPORTED_MODULE_2_observables_src_objectWatchProp__.b)(state, "ready", handleReadyChanges);
            component.onDestroy(state.readyWatcher);
            handleReadyChanges();
        }
    }, /* 5 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export OBSERVABLE_IDENTIFIER */
        /* harmony export (immutable) */
        __webpack_exports__.b = objectWatchProp;
        /* unused harmony export setupObjState */
        /* unused harmony export makeObservable */
        /* unused harmony export queueCallbackAndScheduleRun */
        /* unused harmony export destroyWatcher */
        /* unused harmony export setDependencyTracker */
        /* unused harmony export unsetDependencyTracker */
        /* unused harmony export stopTrackerNotification */
        /* unused harmony export makeArrayWatchable */
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__ = __webpack_require__(9);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_jsutils_nextTick__ = __webpack_require__(11);
        function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
                return arr2;
            }
            return Array.from(arr);
        }
        //---------------------------------------------------------------------------
        var OBSERVABLE_IDENTIFIER = "___$observable$___";
        // FIXME: this should be a Symbol()
        var DEFAULT_PROP_DEFINITION = {
            configurable: true,
            enumerable: true
        };
        var TRACKERS = new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a();
        var WATCHER_IDENTIFIER = "___$watching$___";
        var ARRAY_WATCHABLE_PROTO = "__$watchable$__";
        var HAS_ARRAY_WATCHABLE_PROTO = "__$is" + ARRAY_WATCHABLE_PROTO;
        var ARRAY_MUTATING_METHODS = [ "pop", "push", "shift", "splice", "unshift", "sort", "reverse" ];
        var isPureObject = function(obj) {
            return obj && "[object Object]" === Object.prototype.toString.call(obj);
        };
        var NOTIFY_QUEUE = new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a();
        var isNotifyQueued = false;
        /**
 * A lightweight utility to Watch an object's properties and get notified when it changes.
 *
 * @param {Object} obj
 *
 * @param {String} [prop]
 *  the property to be watched. If left undefined, then all existing properties are watched.
 *
 * @param {Function} [callback]
 *  The callback to be executed when property or object changes. If left undefined, then
 *  `obj` is only made observable (internal structure created and all current enumerable'
 *  properties are made "watchable")
 *
 *  __NOTE:__
 *  The callback will include a new non-enumerable property named `stopWatchingAll` of
 *  type `Function` that can be used to remove the given callback from all places where
 *  it is being used to watch a property. example:
 *
 *      const obj1 = { first: "john" };
 *      const obj2 = { last: "smith" };
 *      const watcher = () => console.log("changed");
 *
 *      objectWatchProp(obj, "first", watcher);
 *      objectWatchProp(obj1, "last", watcher);
 *
 *      watcher.stopWatchingAll(); // removes callback from all objects that it is watching
 *
 *
 * @return {ObjectUnwatchProp}
 * Return a function to unwatch the property. Function also has a static property named
 * `destroy` that will do the same thing (ex. `unwatch.destroy()` is same as `unwatch()`)
 *
 * @example
 *
 * const oo = {};
 * const notifyNameChanged =() => console.log(`name changed: ${oo.name}`);
 * const unWatchName = objectWatchProp(oo, "name", notifyNameChanged);
 *
 * oo.name = "paul"; // console outputs: name changed: paul
 * unWatchName(); // stop watching
 * notifyNameChanged.stopWatchingAll(); // callback's `stopWatchingAll()` can also be called.
 *
 * @example
 *
 * const oo = {
 *      name: "paul",
 *      country: "usa"
 * };
 *
 * // watch all changes to object
 * objectWatchProp(oo, null, () => console.log("Something changed in object"));
 *
 * // OR: make all properties of object observable
 * objectWatchProp(oo);
 *
 */
        function objectWatchProp(obj, prop, callback) {
            obj[OBSERVABLE_IDENTIFIER] || setupObjState(obj);
            // Convert prop to observable?
            if (prop && !obj[OBSERVABLE_IDENTIFIER].props[prop]) {
                setupPropState(obj, prop);
                setupPropInterceptors(obj, prop);
            } else prop && obj[OBSERVABLE_IDENTIFIER].props[prop].setupInterceptors && setupPropInterceptors(obj, prop);
            if (prop && callback) obj[OBSERVABLE_IDENTIFIER].props[prop].storeCallback(callback); else if (!prop) {
                makeObservable(obj, false);
                callback && obj[OBSERVABLE_IDENTIFIER].storeCallback(callback);
            }
            /**
     * Unwatch an object property or object.
     *
     * @typedef {Function} ObjectUnwatchProp
     * @property {Function} destroy Same as function returned.
     */
            var unWatch = destroyWatcher.bind(obj, callback, prop ? obj[OBSERVABLE_IDENTIFIER].props[prop] : obj[OBSERVABLE_IDENTIFIER]);
            unWatch.destroy = unWatch;
            return unWatch;
        }
        function setupObjState(obj) {
            if (!obj[OBSERVABLE_IDENTIFIER]) {
                Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(obj, OBSERVABLE_IDENTIFIER, {
                    configurable: true,
                    writable: true,
                    deep: false,
                    value: {
                        props: {},
                        dependents: new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a(),
                        watchers: new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a(),
                        storeCallback: storeCallback
                    }
                });
                setupCallbackStore(obj[OBSERVABLE_IDENTIFIER].dependents, false);
                setupCallbackStore(obj[OBSERVABLE_IDENTIFIER].watchers, true);
            }
        }
        function setupCallbackStore(store) {
            var async = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            store.async = async;
            store.isQueued = false;
            store.notify = notify;
        }
        function setupPropState(obj, prop) {
            if (!obj[OBSERVABLE_IDENTIFIER].props[prop]) {
                obj[OBSERVABLE_IDENTIFIER].props[prop] = {
                    val: void 0,
                    dependents: new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a(),
                    watchers: new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a(),
                    parent: obj[OBSERVABLE_IDENTIFIER],
                    storeCallback: storeCallback,
                    setupInterceptors: true,
                    deep: obj[OBSERVABLE_IDENTIFIER].deep
                };
                setupCallbackStore(obj[OBSERVABLE_IDENTIFIER].props[prop].dependents, false);
                setupCallbackStore(obj[OBSERVABLE_IDENTIFIER].props[prop].watchers, true);
            }
            return obj[OBSERVABLE_IDENTIFIER].props[prop];
        }
        function setupPropInterceptors(obj, prop) {
            var propOldDescriptor = Object.getOwnPropertyDescriptor(obj, prop) || DEFAULT_PROP_DEFINITION;
            if (!propOldDescriptor.get) {
                obj[OBSERVABLE_IDENTIFIER].props[prop].val = obj[prop];
                // If prop is marked as `deep` then walk the value and convert it to observables
                obj[OBSERVABLE_IDENTIFIER].props[prop].deep && makeObservable(obj[OBSERVABLE_IDENTIFIER].props[prop].val);
            }
            Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(obj, prop, {
                configurable: propOldDescriptor.configurable || false,
                enumerable: propOldDescriptor.enumerable || false,
                get: function() {
                    TRACKERS.size && TRACKERS.forEach(obj[OBSERVABLE_IDENTIFIER].props[prop].storeCallback, obj[OBSERVABLE_IDENTIFIER].props[prop]);
                    if (propOldDescriptor.get) return propOldDescriptor.get.call(obj);
                    return obj[OBSERVABLE_IDENTIFIER].props[prop].val;
                },
                set: function(newVal) {
                    var priorVal = obj[prop];
                    propOldDescriptor.set ? newVal = propOldDescriptor.set.call(obj, newVal) : obj[OBSERVABLE_IDENTIFIER].props[prop].val = newVal;
                    // If this `deep` is true and the new value is an object,
                    // then ensure its observable
                    obj[OBSERVABLE_IDENTIFIER].props[prop].deep && makeObservable(newVal);
                    if (newVal !== priorVal) {
                        obj[OBSERVABLE_IDENTIFIER].props[prop].watchers.notify();
                        obj[OBSERVABLE_IDENTIFIER].props[prop].dependents.notify();
                        obj[OBSERVABLE_IDENTIFIER].watchers.notify();
                    }
                    return newVal;
                }
            });
            obj[OBSERVABLE_IDENTIFIER].props[prop].setupInterceptors = false;
            // Notify object watchers that a new prop was added
            propOldDescriptor === DEFAULT_PROP_DEFINITION && obj[OBSERVABLE_IDENTIFIER].watchers.notify();
        }
        /**
 * Makes an object (deep) observable.
 *
 * @param {Object|Array} obj
 * @param {Boolean} [walk=true]
 *  If `true` (default), the object's property values are walked and
 *  also make observable.
 * @param {Boolean} [force=false]
 *  if true, then even if object looks like it might have already been
 *  converted to an observable, it will still be walked
 *  (if `walk` is `true`)
 *
 * @return {Object|Array} Original `obj` is returned
 */
        function makeObservable(obj) {
            var walk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            var force = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!isPureObject(obj) && !Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.c)(obj)) return obj;
            obj[OBSERVABLE_IDENTIFIER] || (// OBJECT
            isPureObject(obj) ? setupObjState(obj, force) : Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.c)(obj) && makeArrayWatchable(obj));
            // If object is marked as "deep" and we are not forcing the walk,
            // then no need to do anything. Otherwise, mark this object as
            // being `deep` and keep going
            if (!force && obj[OBSERVABLE_IDENTIFIER].deep) return;
            walk && (obj[OBSERVABLE_IDENTIFIER].deep = true);
            Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.c)(obj) ? walkArray(obj) : walkObject(obj);
            return obj;
        }
        function walkArray(arr, force) {
            for (var i = 0, t = arr.length; i < t; i++) makeObservable(arr[i], true, force);
        }
        function walkObject(obj, force) {
            // make ALL props observable
            var keys = Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.f)(obj);
            for (var i = 0, t = keys.length; i < t; i++) {
                if (!obj[OBSERVABLE_IDENTIFIER].props[keys[i]]) {
                    setupPropState(obj, keys[i]);
                    setupPropInterceptors(obj, keys[i]);
                }
                // Do we need to walk this property's value?
                if (!obj[OBSERVABLE_IDENTIFIER].props[keys[i]].deep || force) {
                    obj[OBSERVABLE_IDENTIFIER].props[keys[i]].deep = true;
                    isPureObject(obj[keys[i]]) && makeObservable(obj[keys[i]], true, force);
                }
            }
        }
        function notify() {
            // this: new Set(). Set instance could have two additional attributes: async ++ isQueued
            if (!this.size) return;
            // If the watcher Set() is synchronous, then execute the callbacks now
            this.async ? this.forEach(pushCallbacksToQueue) : this.forEach(execCallback);
            queueCallbackAndScheduleRun();
        }
        function queueCallbackAndScheduleRun(cb) {
            cb && pushCallbacksToQueue(cb);
            if (isNotifyQueued || !NOTIFY_QUEUE.size) return;
            isNotifyQueued = true;
            Object(__WEBPACK_IMPORTED_MODULE_2_common_micro_libs_src_jsutils_nextTick__.a)(flushQueue);
        }
        function pushCallbacksToQueue(callback) {
            NOTIFY_QUEUE.add(callback);
        }
        function execCallback(cb) {
            cb();
        }
        function flushQueue() {
            var queuedCallbacks = [].concat(_toConsumableArray(NOTIFY_QUEUE));
            NOTIFY_QUEUE.clear();
            isNotifyQueued = false;
            for (var x = 0, total = queuedCallbacks.length; x < total; x++) queuedCallbacks[x]();
            queuedCallbacks.length = 0;
        }
        function storeCallback(callback) {
            // this === PropState
            if (callback.asDependent && this.dependents) {
                setCallbackAsWatcherOf(callback, this.dependents);
                this.dependents.add(callback);
            } else {
                setCallbackAsWatcherOf(callback, this.watchers);
                this.watchers.add(callback);
            }
        }
        function destroyWatcher(callback, propSetup) {
            // this == obj
            if (callback) {
                // Object state does not have dependents
                if (propSetup.dependents) {
                    propSetup.dependents.delete(callback);
                    unsetCallbackAsWatcherOf(callback, propSetup.dependents);
                }
                propSetup.watchers.delete(callback);
                unsetCallbackAsWatcherOf(callback, propSetup.watchers);
            }
        }
        /**
 * Store a reference to the Set instance provided on input, on the callback.
 * @private
 * @param {Function} callback
 * @param {Set} watchersSet
 */
        function setCallbackAsWatcherOf(callback, watchersSet) {
            if (!callback[WATCHER_IDENTIFIER]) {
                Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(callback, WATCHER_IDENTIFIER, {
                    configurable: true,
                    writable: true,
                    value: {
                        watching: new __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_Set__.a()
                    }
                });
                Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(callback, "stopWatchingAll", {
                    configurable: true,
                    writable: true,
                    value: function() {
                        callback[WATCHER_IDENTIFIER].watching.forEach(function(watcherList) {
                            return watcherList.delete(callback);
                        });
                        callback[WATCHER_IDENTIFIER].watching.clear();
                    }
                });
            }
            callback[WATCHER_IDENTIFIER].watching.add(watchersSet);
        }
        /**
 * Removes the reference to the given Set instance from the callback function provided
 * @private
 * @param {Function} callback
 * @param {Set} watchersSet
 */
        function unsetCallbackAsWatcherOf(callback, watchersSet) {
            callback[WATCHER_IDENTIFIER] && callback[WATCHER_IDENTIFIER].watching.delete(watchersSet);
        }
        function makeArrayWatchable(arr) {
            arr[OBSERVABLE_IDENTIFIER] || setupObjState(arr);
            // If array already has a watchable prototype, then exit
            if (arr[HAS_ARRAY_WATCHABLE_PROTO]) return;
            var arrCurrentProto = arr.__proto__;
            // eslint-disable-line
            // Create prototype interceptors?
            if (!arrCurrentProto[ARRAY_WATCHABLE_PROTO]) {
                var arrProtoInterceptor = Object.create(arrCurrentProto);
                ARRAY_MUTATING_METHODS.forEach(function(method) {
                    Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(arrProtoInterceptor, method, {
                        configurable: true,
                        writable: true,
                        value: function() {
                            var _arrCurrentProto$meth;
                            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                            var response = (_arrCurrentProto$meth = arrCurrentProto[method]).call.apply(_arrCurrentProto$meth, [ this ].concat(args));
                            this[OBSERVABLE_IDENTIFIER].dependents.notify();
                            this[OBSERVABLE_IDENTIFIER].watchers.notify();
                            return response;
                        }
                    });
                });
                // VALUE ADD: include a `size` read only attribute
                Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(arrProtoInterceptor, "size", {
                    configurable: true,
                    get: function() {
                        TRACKERS.size && TRACKERS.forEach(this[OBSERVABLE_IDENTIFIER].storeCallback, this[OBSERVABLE_IDENTIFIER]);
                        return this.length;
                    }
                });
                // Add flag to new array interceptor prototype indicating its watchable
                Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(arrProtoInterceptor, HAS_ARRAY_WATCHABLE_PROTO, {
                    value: true
                });
                // Store the new interceptor prototype on the real prototype
                Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_runtime_aliases__.e)(arrCurrentProto, ARRAY_WATCHABLE_PROTO, {
                    configurable: true,
                    writable: true,
                    value: arrProtoInterceptor
                });
            }
            arr.__proto__ = arrCurrentProto[ARRAY_WATCHABLE_PROTO];
        }
        /* harmony default export */
        __webpack_exports__.a = objectWatchProp;
    }, /* 6 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */
        __webpack_exports__.a = FakeIterator;
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__runtime_aliases__ = __webpack_require__(0);
        //-----------------------------------------------------------------------
        // Great reference: http://2ality.com/2015/02/es6-iteration.html
        function FakeIterator(keys, values) {
            Object(__WEBPACK_IMPORTED_MODULE_0__runtime_aliases__.e)(this, "_", {
                value: {
                    keys: keys.slice(0),
                    values: values ? values.slice(0) : null,
                    idx: 0,
                    total: keys.length
                }
            });
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__runtime_aliases__.d)(FakeIterator.prototype, {
            constructor: {
                value: FakeIterator
            },
            next: {
                enumerable: true,
                configurable: true,
                value: function() {
                    var response = {
                        done: this._.idx === this._.total
                    };
                    if (response.done) {
                        response.value = void 0;
                        return response;
                    }
                    var nextIdx = this._.idx++;
                    response.value = this._.keys[nextIdx];
                    this._.values && (response.value = [ response.value, this._.values[nextIdx] ]);
                    return response;
                }
            }
        });
        Object(__WEBPACK_IMPORTED_MODULE_0__runtime_aliases__.e)(FakeIterator.prototype, __WEBPACK_IMPORTED_MODULE_0__runtime_aliases__.a, {
            value: function() {
                return this;
            }
        });
    }, /* 7 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CssVars", function() {
            return CssVars;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_component_element__ = __webpack_require__(8);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__vars_default__ = __webpack_require__(18);
        var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    "value" in descriptor && (descriptor.writable = true);
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                protoProps && defineProperties(Constructor.prototype, protoProps);
                staticProps && defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _class;
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        //=========================================================================
        var CSS_VAR_LIST = Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.f)(__WEBPACK_IMPORTED_MODULE_2__vars_default__.a);
        /**
 * An element that exposes several CSS variables that can be controlled and thus affect
 * the inner elements. Use it for styling common widgets
 *
 * @listens CssVars#set-vars
 * @fires CssVars#change
 */
        var CssVars = (_class = function(_ComponentElement) {
            _inherits(CssVars, _ComponentElement);
            function CssVars() {
                _classCallCheck(this, CssVars);
                return _possibleConstructorReturn(this, (CssVars.__proto__ || Object.getPrototypeOf(CssVars)).apply(this, arguments));
            }
            _createClass(CssVars, [ {
                key: "init",
                value: function() {
                    var _this2 = this;
                    /**
             * Set a new list of CSS Vars to the element.
             * The list of CSS Variables should be in the event's `details`.
             *
             * @event CssVars#set-vars
             * @extends CustomEvent
             * @type {CustomEvent}
             *
             * @property {Object} detail
             */
                    this.on("set-vars", this);
                    this.onPropsChange(function() {
                        return setStyleVarsOnElement(_this2, _this2.props.vars);
                    }, "vars");
                }
            }, {
                key: "handleEvent",
                value: function(ev) {
                    if ("set-vars" === ev.type && ev.detail) {
                        this.clear();
                        this.props.vars = ev.detail;
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    var _this3 = this;
                    var varsKeys = Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.f)(this.props.vars);
                    if (varsKeys.length) {
                        varsKeys.forEach(function(cssPropName) {
                            return _this3.style.removeProperty(cssPropName);
                        });
                        this.props.vars = {};
                        this.emit("change", null, {
                            bubble: true
                        });
                    }
                }
            }, {
                key: "getVarNames",
                value: function() {
                    return CSS_VAR_LIST.slice(0);
                }
            }, {
                key: "vars",
                get: function() {
                    return {};
                },
                set: function(newVars) {
                    if ("object" !== ("undefined" === typeof newVars ? "undefined" : _typeof(newVars))) {
                        console.warn("vars prop must be an object!");
                        // eslint-disable-line
                        return this.vars;
                    }
                    return newVars;
                }
            } ], [ {
                key: "tagName",
                get: function() {
                    return "css-vars";
                }
            }, {
                key: "template",
                get: function() {
                    return "\n<style>\n:host {\n    display: block;\n\n    " + CSS_VAR_LIST.reduce(function(allVars, varName) {
                        allVars += varName + ": " + __WEBPACK_IMPORTED_MODULE_2__vars_default__.a[varName] + ";\n";
                        return allVars;
                    }, "") + "\n}\n</style>\n<slot></slot>";
                }
            } ]);
            return CssVars;
        }(__WEBPACK_IMPORTED_MODULE_0_component_element__.a), function(target, property, decorators, descriptor, context) {
            var desc = {};
            Object.keys(descriptor).forEach(function(key) {
                desc[key] = descriptor[key];
            });
            desc.enumerable = !!desc.enumerable;
            desc.configurable = !!desc.configurable;
            ("value" in desc || desc.initializer) && (desc.writable = true);
            desc = decorators.slice().reverse().reduce(function(desc, decorator) {
                return decorator(target, property, desc) || desc;
            }, desc);
            if (context && void 0 !== desc.initializer) {
                desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                desc.initializer = void 0;
            }
            if (void 0 === desc.initializer) {
                Object.defineProperty(target, property, desc);
                desc = null;
            }
            return desc;
        }(_class.prototype, "vars", [ __WEBPACK_IMPORTED_MODULE_0_component_element__.b ], Object.getOwnPropertyDescriptor(_class.prototype, "vars"), _class.prototype), 
        _class);
        function setStyleVarsOnElement(ele, vars) {
            var varsKeys = Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.f)(vars);
            if (varsKeys.length) {
                varsKeys.forEach(function(varName) {
                    ele.style.setProperty(varName, vars[varName]);
                });
                /**
         * Style variables have changed
         * @event CssVars#change
         */
                this.emit("change", null, {
                    bubble: true
                });
            }
        }
        /* harmony default export */
        __webpack_exports__.default = CssVars;
    }, /* 8 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__ComponentElement__ = __webpack_require__(4);
        /* harmony namespace reexport (by used) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return __WEBPACK_IMPORTED_MODULE_0__ComponentElement__.a;
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__decorators_prop__ = __webpack_require__(16);
        /* harmony namespace reexport (by used) */
        __webpack_require__.d(__webpack_exports__, "b", function() {
            return __WEBPACK_IMPORTED_MODULE_1__decorators_prop__.a;
        });
        /* harmony import */
        __webpack_require__(17);
        /* unused harmony namespace reexport */
        /* harmony import */
        __webpack_require__(1);
    }, /* 9 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export Set */
        /* unused harmony export FakeSet */
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__getGlobal__ = __webpack_require__(3);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__Iterator__ = __webpack_require__(6);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__runtime_aliases__ = __webpack_require__(0);
        //============================================================
        var Set = __WEBPACK_IMPORTED_MODULE_0__getGlobal__.a.Set && __WEBPACK_IMPORTED_MODULE_0__getGlobal__.a.Set.prototype[__WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.a] ? __WEBPACK_IMPORTED_MODULE_0__getGlobal__.a.Set : FakeSet;
        /* harmony default export */
        __webpack_exports__.a = Set;
        function FakeSet() {}
        Object(__WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.d)(FakeSet.prototype, function(obj, key, value) {
            key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            }) : obj[key] = value;
            return obj;
        }({
            constructor: {
                value: FakeSet,
                configurable: true
            },
            _: {
                get: function() {
                    var values = [];
                    Object(__WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.e)(this, "_", {
                        value: values
                    });
                    return values;
                }
            },
            add: {
                value: function(item) {
                    -1 === Object(__WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.b)(this._, item) && this._.push(item);
                    return this;
                }
            },
            has: {
                value: function(item) {
                    return -1 !== Object(__WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.b)(this._, item);
                }
            },
            size: {
                get: function() {
                    return this._.length;
                }
            },
            clear: {
                value: function() {
                    this._.splice(0);
                }
            },
            delete: {
                value: function(item) {
                    var idx = Object(__WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.b)(this._, item);
                    if (-1 !== idx) {
                        this._.splice(idx, 1);
                        return true;
                    }
                    return false;
                }
            },
            values: {
                value: function() {
                    return new __WEBPACK_IMPORTED_MODULE_1__Iterator__.a(this._);
                }
            },
            entries: {
                value: function() {
                    return new __WEBPACK_IMPORTED_MODULE_1__Iterator__.a(this._, this._);
                }
            },
            forEach: {
                value: function(cb, thisArg) {
                    var _this = this;
                    this._.forEach(function(item) {
                        return cb(item, item, _this);
                    }, thisArg);
                }
            }
        }, __WEBPACK_IMPORTED_MODULE_2__runtime_aliases__.a, {
            value: function() {
                return this.values();
            }
        }));
    }, /* 10 */
    /***/
    function(module, exports) {
        var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var g;
        // This works in non-strict mode
        g = function() {
            return this;
        }();
        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (0, eval)("this");
        } catch (e) {
            // This works if the window reference is available
            "object" === ("undefined" === typeof window ? "undefined" : _typeof(window)) && (g = window);
        }
        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}
        module.exports = g;
    }, /* 11 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export nextTick */
        var reIsNativeCode = /native code/i;
        /**
 * Executes a function at the end of the current event Loop - during micro-task processing
 *
 * @param {Function} callback
 */
        var nextTick = function() {
            if ("undefined" !== typeof setImediate && reIsNativeCode.test(setImediate.toString())) return setImediate;
            // Native Promsie? Use it.
            if ("function" === typeof Promise && reIsNativeCode.test(Promise.toString())) {
                var resolved = Promise.resolve();
                return function(fn) {
                    resolved.then(fn).catch(function(e) {
                        return console.log(e);
                    });
                };
            }
            // fallback to setTimeout
            // From: https://bugzilla.mozilla.org/show_bug.cgi?id=686201#c68
            var immediates = [];
            var processing = false;
            function processPending() {
                setTimeout(function() {
                    immediates.shift()();
                    immediates.length ? processPending() : processing = false;
                }, 0);
            }
            return function(fn) {
                immediates.push(fn);
                if (!processing) {
                    processing = true;
                    processPending();
                }
            };
        }();
        /* harmony default export */
        __webpack_exports__.a = nextTick;
    }, /* 12 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export domAddEventListener */
        /**
 * Adds an event handler to a DOM element and returns back an
 * object that allows for removal of the event.
 *
 * @function domAddEventListener
 *
 * @param {HTMLElement} ele
 * @param {String} event
 *  The event to listen to (ex. `click`). Multiple events can be defined
 *  by separating them with whitespace
 * @param {Function} callback
 * @param {Boolean} [capture]
 *
 * @return DOMEventListener
 *
 * @example
 *
 * var listener = domAddEventHandler(myEle, "click", function(){});
 * ...
 * listener.remove();
 */
        function domAddEventListener(ele, event, callback, capture) {
            var events = event.split(/\s+/);
            var evListeners = {};
            events.forEach(function(evName) {
                ele.addEventListener(evName, callback, capture);
                evListeners[evName] = {
                    remove: function() {
                        return ele.removeEventListener(evName, callback, capture);
                    }
                };
            });
            /**
     * A DOM Event listener.
     *
     * @typedef {Object} DOMEventListener
     *
     * @property {Function} remove
     * @property {Object} listeners
     *  List of listeners that were bound to the DOM element. Each listeners has a
     *  corresponding `.remove()` method.
     */
            return Object.create({
                listeners: evListeners,
                remove: function() {
                    events.forEach(function(evName) {
                        return evListeners[evName].remove();
                    });
                }
            });
        }
        /* harmony default export */
        __webpack_exports__.a = domAddEventListener;
    }, /* 13 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export dataStore */
        // POLYFILL FOR WEAKMAP
        //  [pt] changed how "delete" is defined so that it can work in IE8
        /* jshint ignore:start */
        /**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
        "undefined" === typeof WeakMap && function() {
            var defineProperty = Object.defineProperty;
            var counter = Date.now() % 1e9;
            var WeakMap = function() {
                this.name = "__st" + (1e9 * Math.random() >>> 0) + counter++ + "__";
            };
            WeakMap.prototype = {
                set: function(key, value) {
                    var entry = key[this.name];
                    entry && entry[0] === key ? entry[1] = value : defineProperty(key, this.name, {
                        value: [ key, value ],
                        writable: true
                    });
                    return this;
                },
                get: function(key) {
                    var entry;
                    return (entry = key[this.name]) && entry[0] === key ? entry[1] : void 0;
                },
                // [pt] Quotes around the delete property needed for IE8
                delete: function(key) {
                    var entry = key[this.name];
                    if (!entry || entry[0] !== key) return false;
                    entry[0] = entry[1] = void 0;
                    return true;
                },
                has: function(key) {
                    var entry = key[this.name];
                    if (!entry) return false;
                    return entry[0] === key;
                }
            };
            window.WeakMap = WeakMap;
        }();
        /* jshint ignore:end */
        /**
 * Returns an object that contains an initialized WeakMap (`stash` property)
 * where data can be stored.
 *
 * @namespace dataStore
 *
 */
        var dataStore = /** @lends dataStore */ {
            /**
   * Stash data here.
   * @type WeakMap
   */
            stash: new WeakMap(),
            /**
   * Create a private data store and return it.
   * @return {WeakMap}
   */
            create: function() {
                return new WeakMap();
            }
        };
        /* harmony default export */
        __webpack_exports__.a = dataStore;
    }, /* 14 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return _Symbol;
        });
        /* unused harmony export FakeSymbol */
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__getGlobal__ = __webpack_require__(3);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__Iterator__ = __webpack_require__(6);
        //============================================================
        var UNIQUE = Math.random().toString(36).substring(7);
        var COUNTER = 1;
        var SYMBOL_PROTOTYPE = {
            toString: function() {
                return "Symbol(" + this.description + ")." + this._id;
            },
            valueOf: function() {
                return this.toString();
            }
        };
        var _Symbol = __WEBPACK_IMPORTED_MODULE_0__getGlobal__.a.Symbol || FakeSymbol;
        function FakeSymbol(description) {
            if (this instanceof FakeSymbol) throw new TypeError("FakeSymbol is not a constructor");
            return Object.create(SYMBOL_PROTOTYPE, {
                description: {
                    value: arguments.length ? description : ""
                },
                _id: {
                    value: UNIQUE + "." + COUNTER++
                }
            });
        }
        __WEBPACK_IMPORTED_MODULE_1__Iterator__.a.iterator = __WEBPACK_IMPORTED_MODULE_1__Iterator__.a;
    }, /* 15 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */
        __webpack_exports__.a = prepareComponentTemplate;
        /* harmony export (immutable) */
        __webpack_exports__.b = styleComponentInstanceElement;
        /* unused harmony export reStyleComponentInstanceSubtree */
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_getGlobal__ = __webpack_require__(3);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
        //--------------------------------------------------------------
        // Utilities to work with polyfills like ShadyCSS
        //--------------------------------------------------------------
        //===========================================================================================
        var supportsShadyCSS = function() {
            return !!__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_getGlobal__.a.ShadyCSS;
        };
        // FIXME: code below should check also for native support for CEs (protect against polyfills loaded in a native env?)
        /**
 * Prepares the component's styles for the given `define` tag name.
 * Method should be called at the time the Element is registered into CustomElementsRegistry
 *
 * @param {ComponentElement} Component
 * @param {String} tagName
 */
        function prepareComponentTemplate(Component, tagName) {
            // FIXME: need additional checks here. ONly use shady if ShadowDom is not supported natively.
            //              need to use: ShadyCSS.nativeShadow to check if shadowroot is supported
            //              Also: should we check the Component's "useShadow" property?
            supportsShadyCSS() && __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_getGlobal__.a.ShadyCSS.prepareTemplate(Object(__WEBPACK_IMPORTED_MODULE_1__utils__.f)(Component), tagName);
        }
        /**
 * Styles the instance of a custom element using ShadyCSS
 *
 * @param {HTMLElement} componentInstance
 */
        function styleComponentInstanceElement(componentInstance) {
            supportsShadyCSS() && __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_getGlobal__.a.ShadyCSS.styleElement(componentInstance);
        }
    }, /* 16 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */
        __webpack_exports__.a = prop;
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_objectExtend__ = __webpack_require__(2);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__ = __webpack_require__(0);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
        //===============================================================================
        var RE_UPPER_CASE_LETTERS = /[A-Z]/;
        var NOOP = function(val) {
            return val;
        };
        /**
 * Create a ComponentElement property.
 *
 * @param {Object} [options]
 * @param {Object} [Proto]
 * @param {String} [prop]
 * @param {Object} [descriptor]
 *
 * @returns {Function}
 */
        function prop() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            // Called with options? Return Design function
            if (args.length < 2) return setupProp.bind(null, args[0]);
            return setupProp.apply(void 0, [ null ].concat(args));
        }
        function setupProp(options, Proto, prop, descriptor) {
            var getter = descriptor.get;
            var setter = descriptor.set;
            var propDef = void 0;
            // If prop is defined as `boolean` then ensure that the value stored is
            // always a boolean based upon whether the prop is on the element or not
            // In this case, defined getter/setter is ignored/discarded
            // TODO: is there a use case where calling the real getter/setter is valid?
            if (options && options.boolean) {
                options.attr = true;
                getter = descriptor.get = function() {
                    return Object(__WEBPACK_IMPORTED_MODULE_2__utils__.b)(this, propDef);
                };
                setter = descriptor.set = function(value) {
                    // When setting the value of this attribute directly on the instance (or instance.props),
                    // ensure that element attribute is also adjusted to reflect value.
                    // Do this only if the `value` is boolean - because when an attribute is added to the
                    // element, its value should be empty string.
                    "boolean" === typeof value && (value && !Object(__WEBPACK_IMPORTED_MODULE_2__utils__.b)(this, propDef) ? this.setAttribute(prop, "") : !value && Object(__WEBPACK_IMPORTED_MODULE_2__utils__.b)(this, propDef) && this.removeAttribute(prop));
                    return Object(__WEBPACK_IMPORTED_MODULE_2__utils__.b)(this, propDef);
                };
            }
            propDef = Object(__WEBPACK_IMPORTED_MODULE_0_common_micro_libs_src_jsutils_objectExtend__.a)(getPropDef(Proto, prop, getter, setter), options);
            descriptor.get = descriptor.set = lazyProp(prop, getter, setter);
            // Create a instance property for each alias as well
            propDef.aliases.length && propDef.aliases.forEach(function(propAliasName) {
                if (!(propAliasName in Proto)) {
                    var aliasPropGetterSetterSetup = lazyProp(propAliasName, getter, setter);
                    Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.e)(Proto, propAliasName, {
                        configurable: true,
                        get: aliasPropGetterSetterSetup,
                        set: aliasPropGetterSetterSetup
                    });
                }
            });
            return descriptor;
        }
        function getClassProps(Proto) {
            Proto.constructor.propsDef || Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.e)(Proto.constructor, "propsDef", {
                configurable: true,
                writable: true,
                value: {}
            });
            return Proto.constructor.propsDef;
        }
        /**
 * Returns the PropDefinition
 *
 * @private
 *
 * @param Proto
 * @param name
 * @param getter
 * @param setter
 * @returns ComponentElement~PropDefinition
 */
        function getPropDef(Proto, name, getter, setter) {
            var classProps = getClassProps(Proto);
            if (!classProps[name]) {
                /**
         * A Class prop definition
         *
         * @typedef {Object} ComponentElement~PropDefinition
         * @property {String} name              Then name of the prop
         * @property {Boolean} attr             Can the prop be set via an HTML attribute
         * @property {Boolean} required         Is the prop required
         * @property {Boolean} boolean          Is the prop value mean to be a boolean (note: also forces `attr` to true)
         * @property {Function} default         Function that returns default value (the `getter` when decorator is used)
         * @property {Function} filter          Function that filters the value being set (the `setter` when decorator is used)
         * @property {Array<String>} aliases    An array of aliases for the prop
         */
                classProps[name] = {
                    name: name,
                    attr: false,
                    required: false,
                    boolean: false,
                    default: getter || NOOP,
                    filter: setter || NOOP,
                    aliases: [ name.toLowerCase() ]
                };
                // If the prop name has upper case letters, then its possible that it is
                // defined as camelCase - create ka-bab alias.
                RE_UPPER_CASE_LETTERS.test(name) && classProps[name].aliases.push(Object(__WEBPACK_IMPORTED_MODULE_2__utils__.g)(name));
            }
            return classProps[name];
        }
        /**
 * Return a getter/setter function to be used in a Property descriptor. When invoked first time as
 * part of an instance, it will setup the actually get/set function that will persist Props to the
 * instance `instance.props`
 *
 * @private
 *
 * @param propName
 * @param getter
 * @param setter
 *
 * @returns {Function}
 */
        function lazyProp(propName, getter, setter) {
            // FIXME: getter/setter not being used?
            var $propName = "_$" + propName;
            return function() {
                var isUpdateMode = 1 === arguments.length;
                if (-1 !== Object.getOwnPropertyNames(this).indexOf($propName)) return isUpdateMode ? this[$propName] = arguments[0] : this[$propName];
                // Ensure we write back to
                var writeToPropName = Object(__WEBPACK_IMPORTED_MODULE_2__utils__.h)(this.constructor)[propName].name;
                Object(__WEBPACK_IMPORTED_MODULE_1_common_micro_libs_src_jsutils_runtime_aliases__.e)(this, $propName, {
                    configurable: true,
                    get: function() {
                        return this.props[writeToPropName];
                    },
                    set: function(newValue) {
                        return this.props[writeToPropName] = newValue;
                    }
                });
                // update mode
                if (isUpdateMode) return this[$propName] = arguments[0];
                return this[$propName];
            };
        }
    }, /* 17 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export bind */
        /* harmony import */
        __webpack_require__(0);
    }, /* 18 */
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return varsDefault;
        });
        /*
    All colors are normally defined starting with the lightest one
*/
        var varsDefault = {
            //---------------------------------------------------------------
            //                                                  COLORS
            //---------------------------------------------------------------
            /* == PRIMARY COLORS == */
            "--theme-color-0": "#FFFFFF",
            "--theme-color-1": "#ECECEC",
            "--theme-color-2": "#DCDCDC",
            "--theme-color-3": "#C5C5C5",
            "--theme-color-4": "#ADADAD",
            "--theme-color-5": "#8A8A8A",
            "--theme-color-6": "#656565",
            "--theme-color-7": "#565656",
            "--theme-color-8": "#2D2D2D",
            "--theme-color-9": "#000000",
            /* == SECONDARY COLOR: info (usually in the blue color) == */
            "--theme-color-accent-info-0": "#def3ff",
            "--theme-color-accent-info-1": "#bee1f4",
            "--theme-color-accent-info-2": "#39a5dc",
            "--theme-color-accent-info-3": "#0088ce",
            "--theme-color-accent-info-4": "#00659c",
            /* == SECONDARY COLOR: success (usually in the green color) == */
            "--theme-color-accent-success-0": "#cfe7cd",
            "--theme-color-accent-success-1": "#9ecf99",
            "--theme-color-accent-success-2": "#6ec664",
            "--theme-color-accent-success-3": "#3f9c35",
            "--theme-color-accent-success-4": "#2d7623",
            /* == SECONDARY COLOR: alert (usually in the Yellow color) == */
            /*    https://coolors.co/fcf6e3-f9e4a4-f9d463-f9c62c-dda600     */
            "--theme-color-accent-alert-0": "#fcf6e3",
            "--theme-color-accent-alert-1": "#f9e4a4",
            "--theme-color-accent-alert-2": "#f9d463",
            "--theme-color-accent-alert-3": "#f9c62c",
            "--theme-color-accent-alert-4": "#dda600",
            /* == SECONDARY COLOR: warning (usually in the orange color) == */
            /*    https://coolors.co/ffe2af-ffc57a-ffa86b-ff8330-f4581f     */
            "--theme-color-accent-warning-0": "#ffe2af",
            "--theme-color-accent-warning-1": "#ffc57a",
            "--theme-color-accent-warning-2": "#ffa86b",
            "--theme-color-accent-warning-3": "#ff8330",
            "--theme-color-accent-warning-4": "#f4581f",
            /* == SECONDARY COLOR: error (usually in the error color) == */
            /*    https://coolors.co/f9caca-ff7a7a-ff4b4b-ff171a-bd1818  */
            "--theme-color-accent-error-0": "#F9CACA",
            "--theme-color-accent-error-1": "#FF7A7A",
            "--theme-color-accent-error-2": "#FF4B4B",
            "--theme-color-accent-error-3": "#FF171A",
            "--theme-color-accent-error-4": "#BD1818",
            /* == BACKGROUND / FORGROUND == */
            "--theme-color-bg": "var(--theme-color-0)",
            "--theme-color-fg": "var(--theme-color-9)",
            /* == LINKS == */
            "--theme-color-link": "var(--theme-color-accent-info-3)",
            /* == MESSAGES == */
            "--theme-color-msg-success-bg": "var(--theme-color-accent-success-0)",
            "--theme-color-msg-success-fg": "var(--theme-color-accent-success-4)",
            "--theme-color-msg-alert-bg": "var(--theme-color-accent-alert-0)",
            "--theme-color-msg-alert-fg": "var(--theme-color-accent-alert-4)",
            "--theme-color-msg-warning-bg": "var(--theme-color-accent-warning-0)",
            "--theme-color-msg-warning-fg": "var(--theme-color-accent-warning-4)",
            "--theme-color-msg-info-bg": "var(--theme-color-accent-info-0)",
            "--theme-color-msg-info-fg": "var(--theme-color-accent-info-4)",
            "--theme-color-msg-error-bg": "var(--theme-color-accent-error-0)",
            "--theme-color-msg-error-fg": "var(--theme-color-accent-error-4)",
            //---------------------------------------------------------------
            //                                                  FONTS
            //---------------------------------------------------------------
            "--theme-font-size-xxl": "28px",
            "--theme-font-size-xl": "21px",
            "--theme-font-size-l": "17px",
            "--theme-font-size-m": "14px",
            "--theme-font-size-s": "12px",
            "--theme-font-size-xs": "11px",
            "--theme-font-family": '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            "--theme-font-family-monospace": 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            //---------------------------------------------------------------
            //                                                  BORDERS
            //---------------------------------------------------------------
            "--theme-border-style": "solid",
            "--theme-border-width": "1px",
            "--theme-border-color": "var(--theme-color-5)",
            "--theme-border-radius": "3px",
            "--theme-border": "var(--theme-border-width) var(--theme-border-style) var(--theme-border-color)",
            //---------------------------------------------------------------
            //                                     SPACING AND PADDING
            //---------------------------------------------------------------
            "--theme-spacing-0": "0",
            "--theme-spacing-1": "0.25rem",
            "--theme-spacing-2": "0.5rem",
            "--theme-spacing-3": "0.75rem",
            "--theme-spacing-4": "1rem",
            "--theme-spacing-5": "1.25rem",
            "--theme-spacing-6": "1.5rem",
            "--theme-spacing-7": "1.75rem",
            "--theme-spacing-8": "2rem",
            //---------------------------------------------------------------
            //                                              AFFECTS
            //---------------------------------------------------------------
            "--theme-box-shadow": "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)"
        };
    } ]);
});
//# sourceMappingURL=css-vars-element.js.map