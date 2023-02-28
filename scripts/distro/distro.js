"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = function(fn, res) {
  return function() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
};
var __commonJS = function(cb, mod) {
  return function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
};
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = function(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  );
}, __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// kolmafia-polyfill.js
var kolmafia, console, init_kolmafia_polyfill = __esm({
  "kolmafia-polyfill.js": function() {
    "use strict";
    kolmafia = require("kolmafia"), console = {
      log: kolmafia.print
    };
  }
});

// node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/core-js/internals/global.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var check = function(it) {
      return it && it.Math == Math && it;
    };
    module2.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/core-js/internals/fails.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return !0;
      }
    };
  }
});

// node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/internals/descriptors.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, {
        get: function() {
          return 7;
        }
      })[1] != 7;
    });
  }
});

// node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/core-js/internals/function-bind-native.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/core-js/internals/function-call.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var NATIVE_BIND = require_function_bind_native(), call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/core-js/internals/object-property-is-enumerable.js": function(exports) {
    "use strict";
    init_kolmafia_polyfill();
    var $propertyIsEnumerable = {}.propertyIsEnumerable, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
      1: 2
    }, 1);
    exports.f = NASHORN_BUG ? function(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/core-js/internals/create-property-descriptor.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
  }
});

// node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var NATIVE_BIND = require_function_bind_native(), FunctionPrototype = Function.prototype, call = FunctionPrototype.call, uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/core-js/internals/classof-raw.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), toString = uncurryThis({}.toString), stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/core-js/internals/indexed-object.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), fails = require_fails(), classof = require_classof_raw(), $Object = Object, split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) == "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/core-js/internals/is-null-or-undefined.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = function(it) {
      return it == null;
    };
  }
});

// node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/core-js/internals/require-object-coercible.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isNullOrUndefined = require_is_null_or_undefined(), $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it))
        throw $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/core-js/internals/to-indexed-object.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var IndexedObject = require_indexed_object(), requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/core-js/internals/document-all.js
var require_document_all = __commonJS({
  "node_modules/core-js/internals/document-all.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var documentAll = typeof document == "object" && document.all, IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== void 0;
    module2.exports = {
      all: documentAll,
      IS_HTMLDDA: IS_HTMLDDA
    };
  }
});

// node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/core-js/internals/is-callable.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var $documentAll = require_document_all(), documentAll = $documentAll.all;
    module2.exports = $documentAll.IS_HTMLDDA ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/internals/is-object.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isCallable = require_is_callable(), $documentAll = require_document_all(), documentAll = $documentAll.all;
    module2.exports = $documentAll.IS_HTMLDDA ? function(it) {
      return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
    } : function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/core-js/internals/get-built-in.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), isCallable = require_is_callable(), aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
    };
  }
});

// node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-is-prototype-of.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/core-js/internals/engine-user-agent.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/core-js/internals/engine-v8-version.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), userAgent = require_engine_user_agent(), process = global2.process, Deno = global2.Deno, versions = process && process.versions || Deno && Deno.version, v8 = versions && versions.v8, match, version;
    v8 && (match = v8.split("."), version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]));
    !version && userAgent && (match = userAgent.match(/Edge\/(\d+)/), (!match || match[1] >= 74) && (match = userAgent.match(/Chrome\/(\d+)/), match && (version = +match[1])));
    module2.exports = version;
  }
});

// node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/core-js/internals/symbol-constructor-detection.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var V8_VERSION = require_engine_v8_version(), fails = require_fails();
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol();
      return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/core-js/internals/use-symbol-as-uid.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/core-js/internals/is-symbol.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in(), isCallable = require_is_callable(), isPrototypeOf = require_object_is_prototype_of(), USE_SYMBOL_AS_UID = require_use_symbol_as_uid(), $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/core-js/internals/try-to-string.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/core-js/internals/a-callable.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isCallable = require_is_callable(), tryToString = require_try_to_string(), $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/core-js/internals/get-method.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var aCallable = require_a_callable(), isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/core-js/internals/ordinary-to-primitive.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var call = require_function_call(), isCallable = require_is_callable(), isObject = require_is_object(), $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)) || isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)) || pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      throw $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/core-js/internals/is-pure.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = !1;
  }
});

// node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/core-js/internals/define-global-property.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(global2, key, {
          value: value,
          configurable: !0,
          writable: !0
        });
      } catch (error) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/core-js/internals/shared-store.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), defineGlobalProperty = require_define_global_property(), SHARED = "__core-js_shared__", store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module2.exports = store;
  }
});

// node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/core-js/internals/shared.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var IS_PURE = require_is_pure(), store = require_shared_store();
    (module2.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.28.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/internals/to-object.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var requireObjectCoercible = require_require_object_coercible(), $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/core-js/internals/has-own-property.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), toObject = require_to_object(), hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/core-js/internals/uid.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), id = 0, postfix = Math.random(), toString = uncurryThis(1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/core-js/internals/well-known-symbol.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), shared = require_shared(), hasOwn = require_has_own_property(), uid = require_uid(), NATIVE_SYMBOL = require_symbol_constructor_detection(), USE_SYMBOL_AS_UID = require_use_symbol_as_uid(), Symbol2 = global2.Symbol, WellKnownSymbolsStore = shared("wks"), createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2.for || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      return hasOwn(WellKnownSymbolsStore, name) || (WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name)), WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/internals/to-primitive.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var call = require_function_call(), isObject = require_is_object(), isSymbol = require_is_symbol(), getMethod = require_get_method(), ordinaryToPrimitive = require_ordinary_to_primitive(), wellKnownSymbol = require_well_known_symbol(), $TypeError = TypeError, TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE), result;
      if (exoticToPrim) {
        if (pref === void 0 && (pref = "default"), result = call(exoticToPrim, input, pref), !isObject(result) || isSymbol(result))
          return result;
        throw $TypeError("Can't convert object to primitive value");
      }
      return pref === void 0 && (pref = "number"), ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/core-js/internals/to-property-key.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var toPrimitive = require_to_primitive(), isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/core-js/internals/document-create-element.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), isObject = require_is_object(), document2 = global2.document, EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/internals/ie8-dom-define.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), fails = require_fails(), createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a != 7;
    });
  }
});

// node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-descriptor.js": function(exports) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), call = require_function_call(), propertyIsEnumerableModule = require_object_property_is_enumerable(), createPropertyDescriptor = require_create_property_descriptor(), toIndexedObject = require_to_indexed_object(), toPropertyKey = require_to_property_key(), hasOwn = require_has_own_property(), IE8_DOM_DEFINE = require_ie8_dom_define(), $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function(O, P) {
      if (O = toIndexedObject(O), P = toPropertyKey(P), IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/core-js/internals/v8-prototype-define-bug.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: !1
      }).prototype != 42;
    });
  }
});

// node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/internals/an-object.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isObject = require_is_object(), $String = String, $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/core-js/internals/object-define-property.js": function(exports) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), IE8_DOM_DEFINE = require_ie8_dom_define(), V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug(), anObject = require_an_object(), toPropertyKey = require_to_property_key(), $TypeError = TypeError, $defineProperty = Object.defineProperty, $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, ENUMERABLE = "enumerable", CONFIGURABLE = "configurable", WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function(O, P, Attributes) {
      if (anObject(O), P = toPropertyKey(P), anObject(Attributes), typeof O == "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        current && current[WRITABLE] && (O[P] = Attributes.value, Attributes = {
          configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: !1
        });
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function(O, P, Attributes) {
      if (anObject(O), P = toPropertyKey(P), anObject(Attributes), IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw $TypeError("Accessors not supported");
      return "value" in Attributes && (O[P] = Attributes.value), O;
    };
  }
});

// node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/core-js/internals/create-non-enumerable-property.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), definePropertyModule = require_object_define_property(), createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      return object[key] = value, object;
    };
  }
});

// node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/core-js/internals/function-name.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), hasOwn = require_has_own_property(), FunctionPrototype = Function.prototype, getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor, EXISTS = hasOwn(FunctionPrototype, "name"), PROPER = EXISTS && function() {
    }.name === "something", CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS: EXISTS,
      PROPER: PROPER,
      CONFIGURABLE: CONFIGURABLE
    };
  }
});

// node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/core-js/internals/inspect-source.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), isCallable = require_is_callable(), store = require_shared_store(), functionToString = uncurryThis(Function.toString);
    isCallable(store.inspectSource) || (store.inspectSource = function(it) {
      return functionToString(it);
    });
    module2.exports = store.inspectSource;
  }
});

// node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/core-js/internals/weak-map-basic-detection.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), isCallable = require_is_callable(), WeakMap2 = global2.WeakMap;
    module2.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
  }
});

// node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js/internals/shared-key.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var shared = require_shared(), uid = require_uid(), keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/core-js/internals/hidden-keys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = {};
  }
});

// node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/core-js/internals/internal-state.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection(), global2 = require_global(), isObject = require_is_object(), createNonEnumerableProperty = require_create_non_enumerable_property(), hasOwn = require_has_own_property(), shared = require_shared_store(), sharedKey = require_shared_key(), hiddenKeys = require_hidden_keys(), OBJECT_ALREADY_INITIALIZED = "Object already initialized", TypeError2 = global2.TypeError, WeakMap2 = global2.WeakMap, set, get2, has, enforce = function(it) {
      return has(it) ? get2(it) : set(it, {});
    }, getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get2(it)).type !== TYPE)
          throw TypeError2("Incompatible receiver, " + TYPE + " required");
        return state;
      };
    };
    NATIVE_WEAK_MAP || shared.state ? (store = shared.state || (shared.state = new WeakMap2()), store.get = store.get, store.has = store.has, store.set = store.set, set = function(it, metadata) {
      if (store.has(it))
        throw TypeError2(OBJECT_ALREADY_INITIALIZED);
      return metadata.facade = it, store.set(it, metadata), metadata;
    }, get2 = function(it) {
      return store.get(it) || {};
    }, has = function(it) {
      return store.has(it);
    }) : (STATE = sharedKey("state"), hiddenKeys[STATE] = !0, set = function(it, metadata) {
      if (hasOwn(it, STATE))
        throw TypeError2(OBJECT_ALREADY_INITIALIZED);
      return metadata.facade = it, createNonEnumerableProperty(it, STATE, metadata), metadata;
    }, get2 = function(it) {
      return hasOwn(it, STATE) ? it[STATE] : {};
    }, has = function(it) {
      return hasOwn(it, STATE);
    });
    var store, STATE;
    module2.exports = {
      set: set,
      get: get2,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    };
  }
});

// node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/core-js/internals/make-built-in.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), fails = require_fails(), isCallable = require_is_callable(), hasOwn = require_has_own_property(), DESCRIPTORS = require_descriptors(), CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE, inspectSource = require_inspect_source(), InternalStateModule = require_internal_state(), enforceInternalState = InternalStateModule.enforce, getInternalState = InternalStateModule.get, $String = String, defineProperty = Object.defineProperty, stringSlice = uncurryThis("".slice), replace = uncurryThis("".replace), join = uncurryThis([].join), CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", {
        value: 8
      }).length !== 8;
    }), TEMPLATE = String(String).split("String"), makeBuiltIn = module2.exports = function(value, name, options) {
      stringSlice($String(name), 0, 7) === "Symbol(" && (name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]"), options && options.getter && (name = "get " + name), options && options.setter && (name = "set " + name), (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) && (DESCRIPTORS ? defineProperty(value, "name", {
        value: name,
        configurable: !0
      }) : value.name = name), CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity && defineProperty(value, "length", {
        value: options.arity
      });
      try {
        options && hasOwn(options, "constructor") && options.constructor ? DESCRIPTORS && defineProperty(value, "prototype", {
          writable: !1
        }) : value.prototype && (value.prototype = void 0);
      } catch (error) {
      }
      var state = enforceInternalState(value);
      return hasOwn(state, "source") || (state.source = join(TEMPLATE, typeof name == "string" ? name : "")), value;
    };
    Function.prototype.toString = makeBuiltIn(function() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/core-js/internals/define-built-in.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isCallable = require_is_callable(), definePropertyModule = require_object_define_property(), makeBuiltIn = require_make_built_in(), defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      options || (options = {});
      var simple = options.enumerable, name = options.name !== void 0 ? options.name : key;
      if (isCallable(value) && makeBuiltIn(value, name, options), options.global)
        simple ? O[key] = value : defineGlobalProperty(key, value);
      else {
        try {
          options.unsafe ? O[key] && (simple = !0) : delete O[key];
        } catch (error) {
        }
        simple ? O[key] = value : definePropertyModule.f(O, key, {
          value: value,
          enumerable: !1,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O;
    };
  }
});

// node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/core-js/internals/math-trunc.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var ceil = Math.ceil, floor = Math.floor;
    module2.exports = Math.trunc || function(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/core-js/internals/to-integer-or-infinity.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js/internals/to-absolute-index.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var toIntegerOrInfinity = require_to_integer_or_infinity(), max = Math.max, min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js/internals/to-length.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var toIntegerOrInfinity = require_to_integer_or_infinity(), min = Math.min;
    module2.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/core-js/internals/length-of-array-like.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js/internals/array-includes.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var toIndexedObject = require_to_indexed_object(), toAbsoluteIndex = require_to_absolute_index(), lengthOfArrayLike = require_length_of_array_like(), createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this), length = lengthOfArrayLike(O), index = toAbsoluteIndex(fromIndex, length), value;
        if (IS_INCLUDES && el != el) {
          for (; length > index; )
            if (value = O[index++], value != value)
              return !0;
        } else
          for (; length > index; index++)
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      includes: createMethod(!0),
      indexOf: createMethod(!1)
    };
  }
});

// node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js/internals/object-keys-internal.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), hasOwn = require_has_own_property(), toIndexedObject = require_to_indexed_object(), indexOf = require_array_includes().indexOf, hiddenKeys = require_hidden_keys(), push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object), i = 0, result = [], key;
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      for (; names.length > i; )
        hasOwn(O, key = names[i++]) && (~indexOf(result, key) || push(result, key));
      return result;
    };
  }
});

// node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js/internals/enum-bug-keys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }
});

// node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-names.js": function(exports) {
    init_kolmafia_polyfill();
    var internalObjectKeys = require_object_keys_internal(), enumBugKeys = require_enum_bug_keys(), hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-symbols.js": function(exports) {
    init_kolmafia_polyfill();
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/core-js/internals/own-keys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in(), uncurryThis = require_function_uncurry_this(), getOwnPropertyNamesModule = require_object_get_own_property_names(), getOwnPropertySymbolsModule = require_object_get_own_property_symbols(), anObject = require_an_object(), concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it)), getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/core-js/internals/copy-constructor-properties.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var hasOwn = require_has_own_property(), ownKeys3 = require_own_keys(), getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor(), definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      for (var keys = ownKeys3(source), defineProperty = definePropertyModule.f, getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f, i = 0; i < keys.length; i++) {
        var key = keys[i];
        !hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key)) && defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };
  }
});

// node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/core-js/internals/is-forced.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var fails = require_fails(), isCallable = require_is_callable(), replacement = /#|\.prototype\./, isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? !0 : value == NATIVE ? !1 : isCallable(detection) ? fails(detection) : !!detection;
    }, normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    }, data = isForced.data = {}, NATIVE = isForced.NATIVE = "N", POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/core-js/internals/export.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f, createNonEnumerableProperty = require_create_non_enumerable_property(), defineBuiltIn = require_define_built_in(), defineGlobalProperty = require_define_global_property(), copyConstructorProperties = require_copy_constructor_properties(), isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target, GLOBAL = options.global, STATIC = options.stat, FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL ? target = global2 : STATIC ? target = global2[TARGET] || defineGlobalProperty(TARGET, {}) : target = (global2[TARGET] || {}).prototype, target)
        for (key in source) {
          if (sourceProperty = source[key], options.dontCallGetSet ? (descriptor = getOwnPropertyDescriptor(target, key), targetProperty = descriptor && descriptor.value) : targetProperty = target[key], FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced), !FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          (options.sham || targetProperty && targetProperty.sham) && createNonEnumerableProperty(sourceProperty, "sham", !0), defineBuiltIn(target, key, sourceProperty, options);
        }
    };
  }
});

// node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/core-js/internals/object-keys.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var internalObjectKeys = require_object_keys_internal(), enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js/internals/object-to-array.js
var require_object_to_array = __commonJS({
  "node_modules/core-js/internals/object-to-array.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), uncurryThis = require_function_uncurry_this(), objectKeys = require_object_keys(), toIndexedObject = require_to_indexed_object(), $propertyIsEnumerable = require_object_property_is_enumerable().f, propertyIsEnumerable = uncurryThis($propertyIsEnumerable), push = uncurryThis([].push), createMethod = function(TO_ENTRIES) {
      return function(it) {
        for (var O = toIndexedObject(it), keys = objectKeys(O), length = keys.length, i = 0, result = [], key; length > i; )
          key = keys[i++], (!DESCRIPTORS || propertyIsEnumerable(O, key)) && push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
        return result;
      };
    };
    module2.exports = {
      entries: createMethod(!0),
      values: createMethod(!1)
    };
  }
});

// node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/core-js/internals/is-array.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function(argument) {
      return classof(argument) == "Array";
    };
  }
});

// node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/core-js/internals/does-not-exceed-safe-integer.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var $TypeError = TypeError, MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this-clause.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var classofRaw = require_classof_raw(), uncurryThis = require_function_uncurry_this();
    module2.exports = function(fn) {
      if (classofRaw(fn) === "Function")
        return uncurryThis(fn);
    };
  }
});

// node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/core-js/internals/function-bind-context.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this_clause(), aCallable = require_a_callable(), NATIVE_BIND = require_function_bind_native(), bind = uncurryThis(uncurryThis.bind);
    module2.exports = function(fn, that) {
      return aCallable(fn), that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/flatten-into-array.js
var require_flatten_into_array = __commonJS({
  "node_modules/core-js/internals/flatten-into-array.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isArray = require_is_array(), lengthOfArrayLike = require_length_of_array_like(), doesNotExceedSafeInteger = require_does_not_exceed_safe_integer(), bind = require_function_bind_context(), flattenIntoArray = function flattenIntoArray2(target, original, source, sourceLen, start, depth, mapper, thisArg) {
      for (var targetIndex = start, sourceIndex = 0, mapFn = mapper ? bind(mapper, thisArg) : !1, element, elementLen; sourceIndex < sourceLen; )
        sourceIndex in source && (element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex], depth > 0 && isArray(element) ? (elementLen = lengthOfArrayLike(element), targetIndex = flattenIntoArray2(target, original, element, elementLen, targetIndex, depth - 1) - 1) : (doesNotExceedSafeInteger(targetIndex + 1), target[targetIndex] = element), targetIndex++), sourceIndex++;
      return targetIndex;
    };
    module2.exports = flattenIntoArray;
  }
});

// node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/core-js/internals/to-string-tag-support.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/core-js/internals/classof.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support(), isCallable = require_is_callable(), classofRaw = require_classof_raw(), wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), $Object = Object, CORRECT_ARGUMENTS = classofRaw(function() {
      return arguments;
    }()) == "Arguments", tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/core-js/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "node_modules/core-js/internals/is-constructor.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), fails = require_fails(), isCallable = require_is_callable(), classof = require_classof(), getBuiltIn = require_get_built_in(), inspectSource = require_inspect_source(), noop = function() {
    }, empty = [], construct = getBuiltIn("Reflect", "construct"), constructorRegExp = /^\s*(?:class|function)\b/, exec = uncurryThis(constructorRegExp.exec), INCORRECT_TO_STRING = !constructorRegExp.exec(noop), isConstructorModern = function(argument) {
      if (!isCallable(argument))
        return !1;
      try {
        return construct(noop, empty, argument), !0;
      } catch (error) {
        return !1;
      }
    }, isConstructorLegacy = function(argument) {
      if (!isCallable(argument))
        return !1;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return !0;
      }
    };
    isConstructorLegacy.sham = !0;
    module2.exports = !construct || fails(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = !0;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// node_modules/core-js/internals/array-species-constructor.js
var require_array_species_constructor = __commonJS({
  "node_modules/core-js/internals/array-species-constructor.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var isArray = require_is_array(), isConstructor = require_is_constructor(), isObject = require_is_object(), wellKnownSymbol = require_well_known_symbol(), SPECIES = wellKnownSymbol("species"), $Array = Array;
    module2.exports = function(originalArray) {
      var C;
      return isArray(originalArray) && (C = originalArray.constructor, isConstructor(C) && (C === $Array || isArray(C.prototype)) ? C = void 0 : isObject(C) && (C = C[SPECIES], C === null && (C = void 0))), C === void 0 ? $Array : C;
    };
  }
});

// node_modules/core-js/internals/array-species-create.js
var require_array_species_create = __commonJS({
  "node_modules/core-js/internals/array-species-create.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var arraySpeciesConstructor = require_array_species_constructor();
    module2.exports = function(originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };
  }
});

// node_modules/core-js/modules/es.array.flat.js
var require_es_array_flat = __commonJS({
  "node_modules/core-js/modules/es.array.flat.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var $2 = require_export(), flattenIntoArray = require_flatten_into_array(), toObject = require_to_object(), lengthOfArrayLike = require_length_of_array_like(), toIntegerOrInfinity = require_to_integer_or_infinity(), arraySpeciesCreate = require_array_species_create();
    $2({
      target: "Array",
      proto: !0
    }, {
      flat: function() {
        var depthArg = arguments.length ? arguments[0] : void 0, O = toObject(this), sourceLen = lengthOfArrayLike(O), A = arraySpeciesCreate(O, 0);
        return A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === void 0 ? 1 : toIntegerOrInfinity(depthArg)), A;
      }
    });
  }
});

// node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/core-js/internals/object-define-properties.js": function(exports) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug(), definePropertyModule = require_object_define_property(), anObject = require_an_object(), toIndexedObject = require_to_indexed_object(), objectKeys = require_object_keys();
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function(O, Properties) {
      anObject(O);
      for (var props = toIndexedObject(Properties), keys = objectKeys(Properties), length = keys.length, index = 0, key; length > index; )
        definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/core-js/internals/html.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/core-js/internals/object-create.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var anObject = require_an_object(), definePropertiesModule = require_object_define_properties(), enumBugKeys = require_enum_bug_keys(), hiddenKeys = require_hidden_keys(), html = require_html(), documentCreateElement = require_document_create_element(), sharedKey = require_shared_key(), GT = ">", LT = "<", PROTOTYPE = "prototype", SCRIPT = "script", IE_PROTO = sharedKey("IE_PROTO"), EmptyConstructor = function() {
    }, scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    }, NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag("")), activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      return activeXDocument2 = null, temp;
    }, NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe"), JS = "java" + SCRIPT + ":", iframeDocument;
      return iframe.style.display = "none", html.appendChild(iframe), iframe.src = String(JS), iframeDocument = iframe.contentWindow.document, iframeDocument.open(), iframeDocument.write(scriptTag("document.F=Object")), iframeDocument.close(), iframeDocument.F;
    }, activeXDocument, _NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      _NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      for (var length = enumBugKeys.length; length--; )
        delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return _NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = !0;
    module2.exports = Object.create || function(O, Properties) {
      var result;
      return O !== null ? (EmptyConstructor[PROTOTYPE] = anObject(O), result = new EmptyConstructor(), EmptyConstructor[PROTOTYPE] = null, result[IE_PROTO] = O) : result = _NullProtoObject(), Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/core-js/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/core-js/internals/add-to-unscopables.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var wellKnownSymbol = require_well_known_symbol(), create = require_object_create(), defineProperty = require_object_define_property().f, UNSCOPABLES = wellKnownSymbol("unscopables"), ArrayPrototype = Array.prototype;
    ArrayPrototype[UNSCOPABLES] == null && defineProperty(ArrayPrototype, UNSCOPABLES, {
      configurable: !0,
      value: create(null)
    });
    module2.exports = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = !0;
    };
  }
});

// node_modules/core-js/modules/es.array.unscopables.flat.js
var require_es_array_unscopables_flat = __commonJS({
  "node_modules/core-js/modules/es.array.unscopables.flat.js": function() {
    init_kolmafia_polyfill();
    var addToUnscopables = require_add_to_unscopables();
    addToUnscopables("flat");
  }
});

// node_modules/core-js/internals/entry-unbind.js
var require_entry_unbind = __commonJS({
  "node_modules/core-js/internals/entry-unbind.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), uncurryThis = require_function_uncurry_this();
    module2.exports = function(CONSTRUCTOR, METHOD) {
      return uncurryThis(global2[CONSTRUCTOR].prototype[METHOD]);
    };
  }
});

// node_modules/core-js/es/array/flat.js
var require_flat = __commonJS({
  "node_modules/core-js/es/array/flat.js": function(exports, module2) {
    init_kolmafia_polyfill();
    require_es_array_flat();
    require_es_array_unscopables_flat();
    var entryUnbind = require_entry_unbind();
    module2.exports = entryUnbind("Array", "flat");
  }
});

// node_modules/core-js/stable/array/flat.js
var require_flat2 = __commonJS({
  "node_modules/core-js/stable/array/flat.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var parent = require_flat();
    module2.exports = parent;
  }
});

// node_modules/core-js/actual/array/flat.js
var require_flat3 = __commonJS({
  "node_modules/core-js/actual/array/flat.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var parent = require_flat2();
    module2.exports = parent;
  }
});

// node_modules/core-js/full/array/flat.js
var require_flat4 = __commonJS({
  "node_modules/core-js/full/array/flat.js": function(exports, module2) {
    init_kolmafia_polyfill();
    var parent = require_flat3();
    module2.exports = parent;
  }
});

// node_modules/core-js/features/array/flat.js
var require_flat5 = __commonJS({
  "node_modules/core-js/features/array/flat.js": function(exports, module2) {
    init_kolmafia_polyfill();
    module2.exports = require_flat4();
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  main: function() {
    return main;
  }
});
module.exports = __toCommonJS(main_exports);
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/index.js
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/args.js
init_kolmafia_polyfill();
var import_kolmafia = require("kolmafia");
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
var Args = /* @__PURE__ */ function() {
  function Args2() {
    _classCallCheck(this, Args2);
  }
  return _createClass(Args2, null, [{
    key: "custom",
    value: function(spec, _parser, valueHelpName) {
      var _a, _b, raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(function(option) {
        return option[0];
      });
      if ("default" in spec && raw_options && !raw_options.includes(spec.default))
        throw "Invalid default value ".concat(spec.default);
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: function(value) {
          var parsed_value = _parser(value);
          return parsed_value === void 0 || parsed_value instanceof ParseError ? parsed_value : raw_options && !raw_options.includes(parsed_value) ? new ParseError("received ".concat(value, " which was not in the allowed options")) : parsed_value;
        },
        options: (_b = spec.options) === null || _b === void 0 ? void 0 : _b.map(function(a) {
          return ["".concat(a[0]), a[1]];
        })
      });
    }
  }, {
    key: "arrayFromArg",
    value: function(spec, argFromSpec) {
      var _a, _b, _c, spec_without_default = _objectSpread({}, spec);
      "default" in spec_without_default && delete spec_without_default.default;
      var arg = argFromSpec.call(this, spec_without_default), raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(function(option) {
        return option[0];
      });
      if ("default" in spec && raw_options) {
        var _iterator = _createForOfIteratorHelper(spec.default), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var default_entry = _step.value;
            if (!raw_options.includes(default_entry))
              throw "Invalid default value ".concat(spec.default);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var separator = (_b = spec.separator) !== null && _b !== void 0 ? _b : ",", arrayParser = function(value) {
        var values = value.split(separator);
        spec.noTrim || (values = values.map(function(v) {
          return v.trim();
        }));
        var result = values.map(function(v) {
          return arg.parser(v);
        }), error = result.find(function(v) {
          return v instanceof ParseError;
        });
        if (error)
          return error;
        var failure_index = result.indexOf(void 0);
        return failure_index !== -1 ? new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values[failure_index])) : result;
      };
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_c = spec.options) === null || _c === void 0 ? void 0 : _c.map(function(a) {
          return ["".concat(a[0]), a[1]];
        })
      });
    }
  }, {
    key: "string",
    value: function(spec) {
      return this.custom(spec, function(value) {
        return value;
      }, "TEXT");
    }
  }, {
    key: "strings",
    value: function(spec) {
      return this.arrayFromArg(spec, this.string);
    }
  }, {
    key: "number",
    value: function(spec) {
      return this.custom(spec, function(value) {
        return isNaN(Number(value)) ? void 0 : Number(value);
      }, "NUMBER");
    }
  }, {
    key: "numbers",
    value: function(spec) {
      return this.arrayFromArg(spec, this.number);
    }
  }, {
    key: "boolean",
    value: function(spec) {
      return this.custom(spec, function(value) {
        if (value.toLowerCase() === "true")
          return !0;
        if (value.toLowerCase() === "false")
          return !1;
      }, "BOOLEAN");
    }
  }, {
    key: "booleans",
    value: function(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }
  }, {
    key: "flag",
    value: function(spec) {
      return this.custom(spec, function(value) {
        if (value.toLowerCase() === "true")
          return !0;
        if (value.toLowerCase() === "false")
          return !1;
      }, "FLAG");
    }
  }, {
    key: "class",
    value: function(spec) {
      return this.custom(spec, function(value) {
        var match = import_kolmafia.Class.get(value);
        if (match.toString().toUpperCase() === value.toString().toUpperCase() || !isNaN(Number(value)))
          return match;
      }, "CLASS");
    }
  }, {
    key: "classes",
    value: function(spec) {
      return this.arrayFromArg(spec, this.class);
    }
  }, {
    key: "effect",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Effect.get, "EFFECT");
    }
  }, {
    key: "effects",
    value: function(spec) {
      return this.arrayFromArg(spec, this.effect);
    }
  }, {
    key: "familiar",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Familiar.get, "FAMILIAR");
    }
  }, {
    key: "familiars",
    value: function(spec) {
      return this.arrayFromArg(spec, this.familiar);
    }
  }, {
    key: "item",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Item.get, "ITEM");
    }
  }, {
    key: "items",
    value: function(spec) {
      return this.arrayFromArg(spec, this.item);
    }
  }, {
    key: "location",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Location.get, "LOCATION");
    }
  }, {
    key: "locations",
    value: function(spec) {
      return this.arrayFromArg(spec, this.location);
    }
  }, {
    key: "monster",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Monster.get, "MONSTER");
    }
  }, {
    key: "monsters",
    value: function(spec) {
      return this.arrayFromArg(spec, this.monster);
    }
  }, {
    key: "path",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Path.get, "PATH");
    }
  }, {
    key: "paths",
    value: function(spec) {
      return this.arrayFromArg(spec, this.path);
    }
  }, {
    key: "skill",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Skill.get, "SKILL");
    }
  }, {
    key: "skills",
    value: function(spec) {
      return this.arrayFromArg(spec, this.skill);
    }
  }, {
    key: "group",
    value: function(groupName, args2) {
      return {
        name: groupName,
        args: args2
      };
    }
  }, {
    key: "create",
    value: function(scriptName, scriptHelp, args2, options) {
      var _objectSpread22;
      _traverse(args2, function(keySpec, key) {
        if (key === "help" || keySpec.key === "help")
          throw "help is a reserved argument name";
      });
      var argsWithHelp = _objectSpread(_objectSpread({}, args2), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      }), res = _objectSpread(_objectSpread({}, _loadDefaultValues(argsWithHelp)), {}, (_objectSpread22 = {}, _defineProperty(_objectSpread22, specSymbol, argsWithHelp), _defineProperty(_objectSpread22, scriptSymbol, scriptName), _defineProperty(_objectSpread22, scriptHelpSymbol, scriptHelp), _defineProperty(_objectSpread22, optionsSymbol, options != null ? options : {}), _objectSpread22));
      if (options != null && options.positionalArgs) {
        var keys = [], metadata = Args2.getMetadata(res);
        metadata.traverse(function(keySpec, key) {
          var _a;
          keys.push((_a = keySpec.key) !== null && _a !== void 0 ? _a : key);
        });
        var _iterator2 = _createForOfIteratorHelper(options.positionalArgs), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var arg = _step2.value;
            if (!keys.includes(arg))
              throw "Unknown key for positional arg: ".concat(arg);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return res;
    }
  }, {
    key: "fill",
    value: function(args2, command) {
      var includeSettings = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, _a, metadata = Args2.getMetadata(args2), keys = /* @__PURE__ */ new Set(), flags = /* @__PURE__ */ new Set();
      if (metadata.traverse(function(keySpec, key) {
        var _a2, name = (_a2 = keySpec.key) !== null && _a2 !== void 0 ? _a2 : key;
        if (flags.has(name) || keys.has(name))
          throw "Duplicate arg key ".concat(name, " is not allowed");
        keySpec.valueHelpName === "FLAG" ? flags.add(name) : keys.add(name);
      }), includeSettings && metadata.traverseAndMaybeSet(args2, function(keySpec, key) {
        var _a2, _b, setting = (_a2 = keySpec.setting) !== null && _a2 !== void 0 ? _a2 : "".concat(metadata.scriptName, "_").concat((_b = keySpec.key) !== null && _b !== void 0 ? _b : key);
        if (setting !== "") {
          var value_str = (0, import_kolmafia.getProperty)(setting);
          if (value_str !== "")
            return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        }
      }), !(command === void 0 || command === "")) {
        var parsed = new CommandParser(command, keys, flags, (_a = metadata.options.positionalArgs) !== null && _a !== void 0 ? _a : []).parse();
        metadata.traverseAndMaybeSet(args2, function(keySpec, key) {
          var _a2, argKey = (_a2 = keySpec.key) !== null && _a2 !== void 0 ? _a2 : key, value_str = parsed.get(argKey);
          if (value_str !== void 0)
            return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
        });
      }
    }
  }, {
    key: "parse",
    value: function(scriptName, scriptHelp, spec, command, options) {
      var args2 = this.create(scriptName, scriptHelp, spec, options);
      return this.fill(args2, command), args2;
    }
  }, {
    key: "showHelp",
    value: function(args2, maxOptionsToDisplay) {
      var _a, metadata = Args2.getMetadata(args2);
      (0, import_kolmafia.printHtml)("".concat(metadata.scriptHelp)), (0, import_kolmafia.printHtml)(""), (0, import_kolmafia.printHtml)("<b>".concat((_a = metadata.options.defaultGroupName) !== null && _a !== void 0 ? _a : "Options", ":</b>")), metadata.traverse(function(arg, key) {
        var _a2, _b, _c, _d, _e;
        if (!arg.hidden) {
          var nameText = "<font color='".concat((0, import_kolmafia.isDarkMode)() ? "yellow" : "blue", "'>").concat((_a2 = arg.key) !== null && _a2 !== void 0 ? _a2 : key, "</font>"), valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>"), helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "", defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "", settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(metadata.scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : key), "]</font>");
          (0, import_kolmafia.printHtml)("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
          var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];
          if (valueOptions.length < (maxOptionsToDisplay != null ? maxOptionsToDisplay : Number.MAX_VALUE)) {
            var _iterator3 = _createForOfIteratorHelper(valueOptions), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var option = _step3.value;
                option.length === 1 || option[1] === void 0 ? (0, import_kolmafia.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0])) : (0, import_kolmafia.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      }, function(group) {
        (0, import_kolmafia.printHtml)(""), (0, import_kolmafia.printHtml)("<b>".concat(group.name, ":</b>"));
      });
    }
  }, {
    key: "getMetadata",
    value: function(args2) {
      return new WrappedArgMetadata(args2);
    }
  }]), Args2;
}(), ParseError = /* @__PURE__ */ _createClass(function ParseError2(message) {
  _classCallCheck(this, ParseError2), this.message = message;
}), specSymbol = Symbol("spec"), scriptSymbol = Symbol("script"), scriptHelpSymbol = Symbol("scriptHelp"), optionsSymbol = Symbol("options");
function parseAndValidate(arg, source, value) {
  var parsed_value;
  try {
    parsed_value = arg.parser(value);
  } catch (_a) {
    parsed_value = void 0;
  }
  if (parsed_value === void 0)
    throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value);
  if (parsed_value instanceof ParseError)
    throw "".concat(source, " ").concat(parsed_value.message);
  return parsed_value;
}
var WrappedArgMetadata = /* @__PURE__ */ function() {
  function WrappedArgMetadata2(args2) {
    _classCallCheck(this, WrappedArgMetadata2), this.spec = args2[specSymbol], this.scriptName = args2[scriptSymbol], this.scriptHelp = args2[scriptHelpSymbol], this.options = args2[optionsSymbol];
  }
  return _createClass(WrappedArgMetadata2, [{
    key: "loadDefaultValues",
    value: function() {
      return _loadDefaultValues(this.spec);
    }
  }, {
    key: "traverseAndMaybeSet",
    value: function(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
  }, {
    key: "traverse",
    value: function(process, onGroup) {
      return _traverse(this.spec, process, onGroup);
    }
  }]), WrappedArgMetadata2;
}();
function _loadDefaultValues(spec) {
  var result = {};
  for (var k in spec) {
    var argSpec = spec[k];
    "args" in argSpec ? result[k] = _loadDefaultValues(argSpec.args) : "default" in argSpec ? result[k] = argSpec.default : result[k] = void 0;
  }
  return result;
}
function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec)
      groups.push([argSpec, k]);
    else {
      var value = setTo(argSpec, k);
      if (value === void 0)
        continue;
      result[k] = value;
    }
  }
  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];
    _traverseAndMaybeSet(group_and_key[0].args, result[group_and_key[1]], setTo);
  }
}
function _traverse(spec, process, onGroup) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    "args" in argSpec ? groups.push([argSpec, k]) : process(argSpec, k);
  }
  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup == null || onGroup(group_and_key[0], group_and_key[1]), _traverse(group_and_key[0].args, process, onGroup);
  }
}
var CommandParser = /* @__PURE__ */ function() {
  function CommandParser2(command, keys, flags, positionalArgs) {
    _classCallCheck(this, CommandParser2), this.command = command, this.index = 0, this.keys = keys, this.flags = flags, this.positionalArgs = positionalArgs, this.positionalArgsParsed = 0;
  }
  return _createClass(CommandParser2, [{
    key: "parse",
    value: function() {
      var _a, _b, _c, _d;
      this.index = 0;
      for (var result = /* @__PURE__ */ new Map(); !this.finished(); ) {
        var parsing_negative_flag = !1;
        this.peek() === "!" && (parsing_negative_flag = !0, this.consume(["!"]));
        var startIndex = this.index, key = this.parseKey();
        if (result.has(key))
          throw "Duplicate key ".concat(key, " (first set to ").concat((_a = result.get(key)) !== null && _a !== void 0 ? _a : "", ")");
        if (this.flags.has(key)) {
          if (result.set(key, parsing_negative_flag ? "false" : "true"), this.peek() === "=")
            throw "Flag ".concat(key, " cannot be assigned a value");
          this.finished() || this.consume([" "]), this.prevUnquotedKey = void 0;
        } else if (this.keys.has(key)) {
          this.consume(["=", " "]);
          var value = this.parseValue();
          ["'", '"'].includes((_b = this.prev()) !== null && _b !== void 0 ? _b : "") ? this.prevUnquotedKey = void 0 : this.prevUnquotedKey = key, this.finished() || this.consume([" "]), result.set(key, value);
        } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++, this.index = startIndex;
          var _value = this.parseValue();
          if (["'", '"'].includes((_c = this.prev()) !== null && _c !== void 0 ? _c : "") ? this.prevUnquotedKey = void 0 : this.prevUnquotedKey = key, this.finished() || this.consume([" "]), result.has(positionalKey))
            throw "Cannot assign ".concat(_value, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_d = result.get(positionalKey)) !== null && _d !== void 0 ? _d : "");
          result.set(positionalKey, _value);
        } else
          throw this.prevUnquotedKey && this.peek() !== "=" ? "Unknown argument: ".concat(key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)") : "Unknown argument: ".concat(key);
      }
      return result;
    }
  }, {
    key: "finished",
    value: function() {
      return this.index >= this.command.length;
    }
  }, {
    key: "peek",
    value: function() {
      if (!(this.index >= this.command.length))
        return this.command.charAt(this.index);
    }
  }, {
    key: "prev",
    value: function() {
      if (!(this.index <= 0) && !(this.index >= this.command.length + 1))
        return this.command.charAt(this.index - 1);
    }
  }, {
    key: "consume",
    value: function(allowed) {
      var _a;
      if (this.finished())
        throw "Expected ".concat(allowed);
      allowed.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "") && (this.index += 1);
    }
  }, {
    key: "findNext",
    value: function(searchValue) {
      var result = this.command.length, _iterator4 = _createForOfIteratorHelper(searchValue), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var value = _step4.value, index = this.command.indexOf(value, this.index);
          index !== -1 && index < result && (result = index);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return result;
    }
  }, {
    key: "parseKey",
    value: function() {
      var keyEnd = this.findNext(["=", " "]), key = this.command.substring(this.index, keyEnd);
      return this.index = keyEnd, key;
    }
  }, {
    key: "parseValue",
    value: function() {
      var _a, _b, valueEnder = " ", quotes = ["'", '"'];
      quotes.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "") && (valueEnder = (_b = this.peek()) !== null && _b !== void 0 ? _b : "", this.consume([valueEnder]));
      var valueEnd = this.findNext([valueEnder]), value = this.command.substring(this.index, valueEnd);
      if (valueEnder !== " " && valueEnd === this.command.length)
        throw "No closing ".concat(valueEnder, " found for ").concat(valueEnder).concat(value);
      return this.index = valueEnd, valueEnder !== " " && this.consume([valueEnder]), value;
    }
  }]), CommandParser2;
}();

// node_modules/grimoire-kolmafia/dist/combat.js
init_kolmafia_polyfill();
var import_kolmafia9 = require("kolmafia");

// node_modules/libram/dist/index.js
init_kolmafia_polyfill();

// node_modules/libram/dist/lib.js
init_kolmafia_polyfill();

// node_modules/core-js/modules/es.object.entries.js
init_kolmafia_polyfill();
var $ = require_export(), $entries = require_object_to_array().entries;
$({
  target: "Object",
  stat: !0
}, {
  entries: function(O) {
    return $entries(O);
  }
});

// node_modules/libram/dist/lib.js
var import_flat = __toESM(require_flat5()), import_kolmafia3 = require("kolmafia");

// node_modules/libram/dist/template-string.js
init_kolmafia_polyfill();
var import_kolmafia2 = require("kolmafia");

// node_modules/libram/dist/utils.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper2(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
}
function _iterableToArray(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray2(arr);
}
function _arrayLikeToArray2(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function notNull(value) {
  return value !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array))
    return array;
  var map = /* @__PURE__ */ new Map();
  return array.forEach(function(item) {
    map.set(item, (map.get(item) || 0) + 1);
  }), map;
}
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(function(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2), item = _ref3[0], quantity = _ref3[1];
    return Array(quantity).fill(item);
  })));
}
function countedMapToString(map) {
  return _toConsumableArray(map).map(function(_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2), item = _ref5[0], quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort(), sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every(function(item, index) {
    return item === sortedB[index];
  });
}
function splitByCommasWithEscapes(str) {
  var returnValue = [], ignoreNext = !1, currentString = "", _iterator2 = _createForOfIteratorHelper2(str.split("")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      char === "\\" ? ignoreNext = !0 : (char == "," && !ignoreNext ? (returnValue.push(currentString.trim()), currentString = "") : currentString += char, ignoreNext = !1);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return returnValue.push(currentString.trim()), returnValue;
}

// node_modules/libram/dist/template-string.js
var concatTemplateString = function(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    placeholders[_key - 1] = arguments[_key];
  return literals.raw.reduce(function(acc, literal, i) {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
}, createSingleConstant = function(Type) {
  var tagFunction = function(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
      placeholders[_key2 - 1] = arguments[_key2];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    return Type.get(input);
  };
  return tagFunction.none = Type.none, tagFunction;
}, createPluralConstant = function(Type) {
  return function(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)
      placeholders[_key3 - 1] = arguments[_key3];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    return input === "" ? Type.all() : Type.get(splitByCommasWithEscapes(input));
  };
}, $bounty = createSingleConstant(import_kolmafia2.Bounty), $bounties = createPluralConstant(import_kolmafia2.Bounty), $class = createSingleConstant(import_kolmafia2.Class), $classes = createPluralConstant(import_kolmafia2.Class), $coinmaster = createSingleConstant(import_kolmafia2.Coinmaster), $coinmasters = createPluralConstant(import_kolmafia2.Coinmaster), $effect = createSingleConstant(import_kolmafia2.Effect), $effects = createPluralConstant(import_kolmafia2.Effect), $element = createSingleConstant(import_kolmafia2.Element), $elements = createPluralConstant(import_kolmafia2.Element), $familiar = createSingleConstant(import_kolmafia2.Familiar), $familiars = createPluralConstant(import_kolmafia2.Familiar), $item = createSingleConstant(import_kolmafia2.Item), $items = createPluralConstant(import_kolmafia2.Item), $location = createSingleConstant(import_kolmafia2.Location), $locations = createPluralConstant(import_kolmafia2.Location), $monster = createSingleConstant(import_kolmafia2.Monster), $monsters = createPluralConstant(import_kolmafia2.Monster), $phylum = createSingleConstant(import_kolmafia2.Phylum), $phyla = createPluralConstant(import_kolmafia2.Phylum), $servant = createSingleConstant(import_kolmafia2.Servant), $servants = createPluralConstant(import_kolmafia2.Servant), $skill = createSingleConstant(import_kolmafia2.Skill), $skills = createPluralConstant(import_kolmafia2.Skill), $slot = createSingleConstant(import_kolmafia2.Slot), $slots = createPluralConstant(import_kolmafia2.Slot), $stat = createSingleConstant(import_kolmafia2.Stat), $stats = createPluralConstant(import_kolmafia2.Stat), $thrall = createSingleConstant(import_kolmafia2.Thrall), $thralls = createPluralConstant(import_kolmafia2.Thrall), $path = createSingleConstant(import_kolmafia2.Path), $paths = createPluralConstant(import_kolmafia2.Path);

// node_modules/libram/dist/lib.js
var _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray3(o, minLen);
  }
}
function _arrayLikeToArray3(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var Wanderer;
(function(Wanderer2) {
  Wanderer2.Digitize = "Digitize Monster", Wanderer2.Enamorang = "Enamorang Monster", Wanderer2.Familiar = "Familiar", Wanderer2.Holiday = "Holiday Monster", Wanderer2.Kramco = "Kramco", Wanderer2.Nemesis = "Nemesis Assassin", Wanderer2.Portscan = "portscan.edu", Wanderer2.Romantic = "Romantic Monster", Wanderer2.Vote = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
function getFoldGroup(item) {
  return Object.entries((0, import_kolmafia3.getRelated)(item, "fold")).sort(function(_ref, _ref2) {
    var _ref3 = _slicedToArray2(_ref, 2), a = _ref3[1], _ref4 = _slicedToArray2(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray2(_ref5, 1), i = _ref6[0];
    return import_kolmafia3.Item.get(i);
  });
}
function getPlayerFromIdOrName(idOrName) {
  var id = typeof idOrName == "number" ? idOrName : parseInt((0, import_kolmafia3.getPlayerId)(idOrName));
  return {
    name: (0, import_kolmafia3.getPlayerName)(id),
    id: id
  };
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]), telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);

// node_modules/libram/dist/maximize.js
init_kolmafia_polyfill();
var import_kolmafia5 = require("kolmafia");

// node_modules/libram/dist/logger.js
init_kolmafia_polyfill();
var import_kolmafia4 = require("kolmafia");
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties2(Constructor.prototype, protoProps), staticProps && _defineProperties2(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty2(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
var defaultHandlers = {
  info: function(message) {
    (0, import_kolmafia4.printHtml)("<b>[Libram]</b> ".concat(message)), (0, import_kolmafia4.logprint)("[Libram] ".concat(message));
  },
  warning: function(message) {
    (0, import_kolmafia4.printHtml)('<span style="background: orange; color: white;"><b>[Libram]</b> '.concat(message, "</span>")), (0, import_kolmafia4.logprint)("[Libram] ".concat(message));
  },
  error: function(_error) {
    (0, import_kolmafia4.printHtml)('<span style="background: red; color: white;"><b>[Libram]</b> '.concat(_error.toString(), "</span>")), (0, import_kolmafia4.logprint)("[Libram] ".concat(_error.toString()));
  }
}, Logger = /* @__PURE__ */ function() {
  function Logger2() {
    _classCallCheck2(this, Logger2), _defineProperty2(this, "handlers", defaultHandlers);
  }
  return _createClass2(Logger2, [{
    key: "setHandler",
    value: function(level, callback) {
      this.handlers[level] = callback;
    }
  }, {
    key: "log",
    value: function(level, message) {
      this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function(message) {
      this.log("info", message);
    }
  }, {
    key: "warning",
    value: function(message) {
      this.log("warning", message);
    }
  }, {
    key: "error",
    value: function(message) {
      this.log("error", message);
    }
  }]), Logger2;
}(), logger_default = new Logger();

// node_modules/libram/dist/maximize.js
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject92, _templateObject102, _templateObject112, _templateObject122, _templateObject132, _templateObject142, _templateObject152, _templateObject162, _templateObject172, _templateObject182, _templateObject192, _templateObject202, _templateObject212, _templateObject222, _templateObject232, _templateObject242, _templateObject252, _templateObject262, _templateObject272, _templateObject282, _templateObject292, _templateObject302, _templateObject312, _templateObject322, _templateObject332, _templateObject342, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48;
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray4(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit3(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap), privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  return descriptor.get ? descriptor.get.call(receiver) : descriptor.value;
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  return _classApplyDescriptorSet(receiver, descriptor, value), value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver))
    throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set)
    descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable)
      throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
  }
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties3(Constructor.prototype, protoProps), staticProps && _defineProperties3(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _createForOfIteratorHelper3(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _taggedTemplateLiteral2(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), !0).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray4(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray4(o, minLen);
  }
}
function _iterableToArray2(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray4(arr);
}
function _arrayLikeToArray4(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;
  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(_toConsumableArray2(defaultOptions.forceEquip), _toConsumableArray2((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(_toConsumableArray2(defaultOptions.preventEquip), _toConsumableArray2((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(function(item) {
      var _addendums$forceEquip2;
      return !defaultOptions.forceEquip.includes(item) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item));
    }),
    bonusEquip: new Map([].concat(_toConsumableArray2(defaultOptions.bonusEquip), _toConsumableArray2((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(_toConsumableArray2(defaultOptions.preventSlot), _toConsumableArray2((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: _objectSpread2(_objectSpread2({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: !0,
  updateOnCanEquipChanged: !0,
  useOutfitCaching: !0,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: /* @__PURE__ */ new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: !1,
  modes: {}
};
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"], modeableItems = {
  backupcamera: $item(_templateObject || (_templateObject = _taggedTemplateLiteral2(["backup camera"]))),
  umbrella: $item(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["unbreakable umbrella"]))),
  snowsuit: $item(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral2(["Snow Suit"]))),
  edpiece: $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral2(["The Crown of Ed the Undying"]))),
  retrocape: $item(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral2(["unwrapped knock-off retro superhero cape"]))),
  parka: $item(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral2(["Jurassic Parka"])))
}, modeableState = {
  backupcamera: function() {
    return (0, import_kolmafia5.getProperty)("backupCameraMode");
  },
  umbrella: function() {
    return (0, import_kolmafia5.getProperty)("umbrellaState");
  },
  snowsuit: function() {
    return (0, import_kolmafia5.getProperty)("snowsuit");
  },
  edpiece: function() {
    return (0, import_kolmafia5.getProperty)("edPiece");
  },
  retrocape: function() {
    return (0, import_kolmafia5.getProperty)("retroCapeSuperhero") + " " + (0, import_kolmafia5.getProperty)("retroCapeWashingInstructions");
  },
  parka: function() {
    return (0, import_kolmafia5.getProperty)("parkaMode");
  }
};
function getCurrentModes() {
  var modes = {}, _iterator = _createForOfIteratorHelper3(modeableCommands), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var key = _step.value;
      (0, import_kolmafia5.haveEquipped)(modeableItems[key]) && (modes[key] = modeableState[key]());
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return modes;
}
function applyModes(modes) {
  var _iterator2 = _createForOfIteratorHelper3(modeableCommands), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var command = _step2.value;
      (0, import_kolmafia5.haveEquipped)(modeableItems[command]) && modes[command] !== void 0 && modeableState[command]() !== modes[command] && (0, import_kolmafia5.cliExecute)(command + " " + modes[command]);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
var cachedSlots = $slots(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral2(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"]))), CacheEntry = /* @__PURE__ */ _createClass3(function CacheEntry2(equipment, rider, familiar, canEquipItemCount2, modes) {
  _classCallCheck3(this, CacheEntry2), _defineProperty3(this, "equipment", void 0), _defineProperty3(this, "rider", void 0), _defineProperty3(this, "familiar", void 0), _defineProperty3(this, "canEquipItemCount", void 0), _defineProperty3(this, "modes", void 0), this.equipment = equipment, this.rider = rider, this.familiar = familiar, this.canEquipItemCount = canEquipItemCount2, this.modes = modes;
}), _outfitSlots = /* @__PURE__ */ new WeakMap(), _useHistory = /* @__PURE__ */ new WeakMap(), _maxSize = /* @__PURE__ */ new WeakMap(), OutfitLRUCache = /* @__PURE__ */ function() {
  function OutfitLRUCache2(maxSize) {
    _classCallCheck3(this, OutfitLRUCache2), _classPrivateFieldInitSpec(this, _outfitSlots, {
      writable: !0,
      value: []
    }), _classPrivateFieldInitSpec(this, _useHistory, {
      writable: !0,
      value: []
    }), _classPrivateFieldInitSpec(this, _maxSize, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldSet(this, _maxSize, maxSize);
  }
  return _createClass3(OutfitLRUCache2, [{
    key: "checkConsistent",
    value: function() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !_toConsumableArray2(_classPrivateFieldGet(this, _useHistory)).sort().every(function(value, index) {
        return value === index;
      }))
        throw new Error("Outfit cache consistency failed.");
    }
  }, {
    key: "promote",
    value: function(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(_toConsumableArray2(_classPrivateFieldGet(this, _useHistory).filter(function(i) {
        return i !== index;
      })))), this.checkConsistent();
    }
  }, {
    key: "get",
    value: function(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);
      if (!(index < 0))
        return this.promote(index), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function(key) {
      var lastUseIndex = void 0;
      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        if (lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop(), lastUseIndex === void 0)
          throw new Error("Outfit cache consistency failed.");
        return _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex), _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key, this.checkConsistent(), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;
        return _classPrivateFieldGet(this, _useHistory).splice(0, 0, index), this.checkConsistent(), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function() {
      _classPrivateFieldSet(this, _outfitSlots, []), _classPrivateFieldSet(this, _useHistory, []);
    }
  }]), OutfitLRUCache2;
}();
_defineProperty3(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");
function saveOutfit(name) {
  (0, import_kolmafia5.cliExecute)("outfit save ".concat(name));
}
var cachedObjectives = {}, outfitCache = new OutfitLRUCache(6), cachedStats = [0, 0, 0], cachedCanEquipItemCount = 0;
function canEquipItemCount() {
  var stats = $stats(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral2(["Muscle, Mysticality, Moxie"]))).map(function(stat) {
    return Math.min((0, import_kolmafia5.myBasestat)(stat), 300);
  });
  return stats.every(function(value, index) {
    return value === cachedStats[index];
  }) || (cachedStats = stats, cachedCanEquipItemCount = import_kolmafia5.Item.all().filter(function(item) {
    return (0, import_kolmafia5.canEquip)(item);
  }).length), cachedCanEquipItemCount;
}
function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];
  return entry ? options.updateOnFamiliarChange && (0, import_kolmafia5.myFamiliar)() !== entry.familiar ? (logger_default.warning("Equipment found in maximize cache but familiar is different."), null) : options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount() ? (logger_default.warning("Equipment found in maximize cache but equippable item list is out of date."), null) : entry : null;
}
function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : void 0;
  if (outfitName) {
    (0, import_kolmafia5.isWearingOutfit)(outfitName) || (0, import_kolmafia5.outfit)(outfitName);
    var familiarEquip = entry.equipment.get($slot(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral2(["familiar"]))));
    familiarEquip && (0, import_kolmafia5.equip)($slot(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral2(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = _createForOfIteratorHelper3(entry.equipment), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _step3$value = _slicedToArray3(_step3.value, 2), slot = _step3$value[0], item = _step3$value[1];
        (0, import_kolmafia5.equippedItem)(slot) !== item && (0, import_kolmafia5.availableAmount)(item) > 0 && (0, import_kolmafia5.equip)(slot, item);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);
      logger_default.info("Saving equipment to outfit ".concat(_outfitName, ".")), saveOutfit(_outfitName);
    }
  }
  (0, import_kolmafia5.equippedAmount)($item(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral2(["Crown of Thrones"])))) && (0, import_kolmafia5.enthroneFamiliar)(entry.rider.get($item(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral2(["Crown of Thrones"])))) || $familiar.none), (0, import_kolmafia5.equippedAmount)($item(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) && (0, import_kolmafia5.bjornifyFamiliar)(entry.rider.get($item(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) || $familiar.none), applyModes(_objectSpread2(_objectSpread2({}, entry.modes), options.modes));
}
var slotStructure = [$slots(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral2(["hat"]))), $slots(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral2(["back"]))), $slots(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral2(["shirt"]))), $slots(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral2(["weapon, off-hand"]))), $slots(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral2(["pants"]))), $slots(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral2(["acc1, acc2, acc3"]))), $slots(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral2(["familiar"])))];
function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, success = !0, _iterator4 = _createForOfIteratorHelper3(slotStructure), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var slotGroup = _step4.value, desiredSlots = slotGroup.map(function(slot) {
        var _entry$equipment$get;
        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(function(_ref) {
        var _ref2 = _slicedToArray3(_ref, 2), item = _ref2[1];
        return item !== null;
      }), desiredSet = desiredSlots.map(function(_ref3) {
        var _ref4 = _slicedToArray3(_ref3, 2), item = _ref4[1];
        return item;
      }), equippedSet = desiredSlots.map(function(_ref5) {
        var _ref6 = _slicedToArray3(_ref5, 1), slot = _ref6[0];
        return (0, import_kolmafia5.equippedItem)(slot);
      });
      setEqual(desiredSet, equippedSet) || (warn && logger_default.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), ".")), success = !1);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return (0, import_kolmafia5.equippedAmount)($item(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral2(["Crown of Thrones"])))) && entry.rider.get($item(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral2(["Crown of Thrones"])))) !== (0, import_kolmafia5.myEnthronedFamiliar)() && (warn && logger_default.warning("Failed to apply ".concat(entry.rider.get($item(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral2(["Crown of Thrones"])))), " in ").concat($item(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral2(["Crown of Thrones"]))), ".")), success = !1), (0, import_kolmafia5.equippedAmount)($item(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) && entry.rider.get($item(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) !== (0, import_kolmafia5.myBjornedFamiliar)() && (warn && logger_default.warning("Failed to apply".concat(entry.rider.get($item(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), " in ").concat($item(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral2(["Buddy Bjorn"]))), ".")), success = !1), success;
}
function saveCached(cacheKey, options) {
  var equipment = /* @__PURE__ */ new Map(), rider = /* @__PURE__ */ new Map(), _iterator5 = _createForOfIteratorHelper3(cachedSlots), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0, import_kolmafia5.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  if ((0, import_kolmafia5.equippedAmount)($item(_templateObject342 || (_templateObject342 = _taggedTemplateLiteral2(["card sleeve"])))) > 0 && equipment.set($slot(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral2(["card-sleeve"]))), (0, import_kolmafia5.equippedItem)($slot(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral2(["card-sleeve"]))))), (0, import_kolmafia5.equippedAmount)($item(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && rider.set($item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral2(["Crown of Thrones"]))), (0, import_kolmafia5.myEnthronedFamiliar)()), (0, import_kolmafia5.equippedAmount)($item(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && rider.set($item(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral2(["Buddy Bjorn"]))), (0, import_kolmafia5.myBjornedFamiliar)()), options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = _createForOfIteratorHelper3(options.preventSlot), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    options.preventSlot.includes($slot(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral2(["buddy-bjorn"])))) && rider.delete($item(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), options.preventSlot.includes($slot(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral2(["crown-of-thrones"])))) && rider.delete($item(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral2(["Crown of Thrones"]))));
  }
  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = _createForOfIteratorHelper3(import_kolmafia5.Slot.all()), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        var _slot = _step7.value;
        options.onlySlot.includes(_slot) || equipment.delete(_slot);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    options.onlySlot.includes($slot(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral2(["buddy-bjorn"])))) || rider.delete($item(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), options.onlySlot.includes($slot(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral2(["crown-of-thrones"])))) || rider.delete($item(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral2(["Crown of Thrones"]))));
  }
  var entry = new CacheEntry(equipment, rider, (0, import_kolmafia5.myFamiliar)(), canEquipItemCount(), _objectSpread2(_objectSpread2({}, getCurrentModes()), options.modes));
  if (cachedObjectives[cacheKey] = entry, options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    logger_default.info("Saving equipment to outfit ".concat(outfitName, ".")), saveOutfit(outfitName);
  }
}
function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options), forceEquip = fullOptions.forceEquip, preventEquip = fullOptions.preventEquip, bonusEquip = fullOptions.bonusEquip, onlySlot = fullOptions.onlySlot, preventSlot = fullOptions.preventSlot, forceUpdate = fullOptions.forceUpdate, objective = _toConsumableArray2(new Set([].concat(_toConsumableArray2(objectives.sort()), _toConsumableArray2(forceEquip.map(function(item) {
    return "equip ".concat(item);
  }).sort()), _toConsumableArray2(preventEquip.map(function(item) {
    return "-equip ".concat(item);
  }).sort()), _toConsumableArray2(onlySlot.map(function(slot) {
    return "".concat(slot);
  }).sort()), _toConsumableArray2(preventSlot.map(function(slot) {
    return "-".concat(slot);
  }).sort()), _toConsumableArray2(Array.from(bonusEquip.entries()).filter(function(_ref7) {
    var _ref8 = _slicedToArray3(_ref7, 2), bonus = _ref8[1];
    return bonus !== 0;
  }).map(function(_ref9) {
    var _ref10 = _slicedToArray3(_ref9, 2), item = _ref10[0], bonus = _ref10[1];
    return "".concat(Math.round(bonus * 100) / 100, " bonus ").concat(item);
  }).sort())))).join(", "), untouchedSlots = cachedSlots.filter(function(slot) {
    return preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot);
  }), cacheKey = [objective].concat(_toConsumableArray2(untouchedSlots.map(function(slot) {
    return "".concat(slot, ":").concat((0, import_kolmafia5.equippedItem)(slot));
  }).sort())).join("; "), cacheEntry = checkCache(cacheKey, fullOptions);
  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, !1))
      return !0;
    if (logger_default.info("Equipment found in maximize cache, equipping..."), applyCached(cacheEntry, fullOptions), verifyCached(cacheEntry))
      return logger_default.info("Equipped cached ".concat(cacheKey)), !0;
    logger_default.warning("Maximize cache application failed, maximizing...");
  }
  var result = (0, import_kolmafia5.maximize)(objective, !1);
  return saveCached(cacheKey, fullOptions), result;
}
var _maximizeParameters = /* @__PURE__ */ new WeakMap(), _maximizeOptions = /* @__PURE__ */ new WeakMap(), Requirement = /* @__PURE__ */ function() {
  function Requirement2(maximizeParameters, maximizeOptions) {
    _classCallCheck3(this, Requirement2), _classPrivateFieldInitSpec(this, _maximizeParameters, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldInitSpec(this, _maximizeOptions, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters), _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }
  return _createClass3(Requirement2, [{
    key: "maximizeParameters",
    get: function() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
  }, {
    key: "merge",
    value: function(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot, optionsA = this.maximizeOptions, optionsB = other.maximizeOptions;
      return new Requirement2([].concat(_toConsumableArray2(this.maximizeParameters), _toConsumableArray2(other.maximizeParameters)), {
        updateOnFamiliarChange: optionsA.updateOnFamiliarChange || other.maximizeOptions.updateOnFamiliarChange,
        updateOnCanEquipChanged: optionsA.updateOnCanEquipChanged || other.maximizeOptions.updateOnCanEquipChanged,
        forceEquip: [].concat(_toConsumableArray2((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), _toConsumableArray2((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(function(x) {
          var _other$maximizeOption2;
          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(_toConsumableArray2((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), _toConsumableArray2((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(function(x) {
          var _other$maximizeOption4;
          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(_toConsumableArray2((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), _toConsumableArray2((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(_toConsumableArray2((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), _toConsumableArray2((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(_toConsumableArray2((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), _toConsumableArray2((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : [])),
        forceUpdate: optionsA.forceUpdate || optionsB.forceUpdate
      });
    }
  }, {
    key: "maximize",
    value: function() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
  }], [{
    key: "merge",
    value: function(allRequirements) {
      return allRequirements.reduce(function(x, y) {
        return x.merge(y);
      }, new Requirement2([], {}));
    }
  }, {
    key: "maximize",
    value: function() {
      for (var _len = arguments.length, requirements = new Array(_len), _key = 0; _key < _len; _key++)
        requirements[_key] = arguments[_key];
      Requirement2.merge(requirements).maximize();
    }
  }]), Requirement2;
}();

// node_modules/libram/dist/Clan.js
init_kolmafia_polyfill();
var import_kolmafia6 = require("kolmafia");
function _toConsumableArray3(arr) {
  return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray5(arr) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray3(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray5(arr);
}
function _createForOfIteratorHelper4(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray5(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray5(o, minLen);
  }
}
function _arrayLikeToArray5(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit4(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties4(Constructor.prototype, protoProps), staticProps && _defineProperties4(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty4(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _wrapRegExp() {
  _wrapRegExp = function(re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };
  var _super = RegExp.prototype, _groups = /* @__PURE__ */ new WeakMap();
  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);
    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
  }
  function buildGroups(result, re) {
    var g = _groups.get(re);
    return Object.keys(g).reduce(function(groups, name) {
      var i = g[name];
      if (typeof i == "number")
        groups[name] = result[i];
      else {
        for (var k = 0; result[i[k]] === void 0 && k + 1 < i.length; )
          k++;
        groups[name] = result[i[k]];
      }
      return groups;
    }, /* @__PURE__ */ Object.create(null));
  }
  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if (typeof substitution == "string") {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
        return "$" + groups[name];
      }));
    }
    if (typeof substitution == "function") {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args2 = arguments;
        return typeof args2[args2.length - 1] != "object" && (args2 = [].slice.call(args2)).push(buildGroups(args2, _this)), substitution.apply(this, args2);
      });
    }
    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf(o, p);
}
var clanIdCache = {}, toPlayerId = function(player) {
  return typeof player == "string" ? (0, import_kolmafia6.getPlayerId)(player) : player;
}, LOG_FAX_PATTERN = /* @__PURE__ */ _wrapRegExp(/(\d{2}\/\d{2}\/\d{2}, \d{2}:\d{2}(?:AM|PM): )<a [^>]+>([^<]+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
}), WHITELIST_DEGREE_PATTERN = /* @__PURE__ */ _wrapRegExp(/(.*?) \(\xB0(\d+)\)/, {
  name: 1,
  degree: 2
}), Clan = /* @__PURE__ */ function() {
  function Clan2(id, name) {
    _classCallCheck4(this, Clan2), _defineProperty4(this, "id", void 0), _defineProperty4(this, "name", void 0), this.id = id, this.name = name;
  }
  return _createClass4(Clan2, [{
    key: "_check",
    value: function() {
      if (this.id !== (0, import_kolmafia6.getClanId)())
        throw new Error("You are no longer a member of this clan");
    }
  }, {
    key: "join",
    value: function() {
      return Clan2.join(this.id);
    }
  }, {
    key: "check",
    value: function() {
      return (0, import_kolmafia6.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
  }, {
    key: "getCurrentFax",
    value: function() {
      this._check();
      var logs = (0, import_kolmafia6.visitUrl)("clan_log.php"), lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax)
        return null;
      var _lastFax = _slicedToArray4(lastFax, 4), monsterName = _lastFax[3];
      return monsterName ? import_kolmafia6.Monster.get(monsterName) : null;
    }
  }, {
    key: "getRanks",
    value: function() {
      this._check();
      var page = (0, import_kolmafia6.visitUrl)("clan_whitelist.php");
      return (0, import_kolmafia6.xpath)(page, '//select[@name="level"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>"), match = (0, import_kolmafia6.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN), id = (0, import_kolmafia6.xpath)(validHtml, "//@value")[0];
        if (!match || !id)
          return null;
        var _match = _slicedToArray4(match, 3), name = _match[1], degree = _match[2];
        return {
          name: name,
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(notNull);
    }
  }, {
    key: "addPlayerToWhitelist",
    value: function(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      this._check();
      var playerId = toPlayerId(player), ranks = this.getRanks(), rank = rankName ? ranks.find(function(r) {
        return r.name === rankName;
      }) : ranks.sort(function(a, b) {
        return a.degree - b.degree;
      })[0];
      if (!rank)
        return !1;
      var result = (0, import_kolmafia6.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
  }, {
    key: "removePlayerFromWhitelist",
    value: function(player) {
      this._check();
      var playerId = toPlayerId(player), result = (0, import_kolmafia6.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
  }, {
    key: "getMeatInCoffer",
    value: function() {
      this._check();
      var page = (0, import_kolmafia6.visitUrl)("clan_stash.php"), _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"], _ref2 = _slicedToArray4(_ref, 2), meat = _ref2[1];
      return parseNumber(meat);
    }
  }, {
    key: "putMeatInCoffer",
    value: function(amount) {
      this._check();
      var result = (0, import_kolmafia6.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function(items) {
      this._check();
      var map = arrayToCountedMap(items);
      return map.forEach(function(quantity, item) {
        var needed = Math.max(0, quantity - (0, import_kolmafia6.availableAmount)(item));
        if (needed === 0)
          return map.set(item, 0);
        var foldGroup = getFoldGroup(item), _iterator = _createForOfIteratorHelper4(foldGroup), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            for (var foldable = _step.value, quantityToFold = Math.min(needed, (0, import_kolmafia6.availableAmount)(foldable)), _i3 = 0; _i3 < quantityToFold; _i3++)
              (0, import_kolmafia6.cliExecute)("fold ".concat(item.name)), needed--;
            return map.set(item, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        (0, import_kolmafia6.refreshStash)();
        for (var _i2 = 0, _arr2 = [item].concat(_toConsumableArray3(foldGroup)); _i2 < _arr2.length; _i2++) {
          var matchingItem = _arr2[_i2], quantityToTake = Math.min(needed, (0, import_kolmafia6.stashAmount)(matchingItem));
          if (quantityToTake !== 0) {
            if (!(0, import_kolmafia6.takeStash)(quantityToTake, matchingItem))
              return;
            if (matchingItem === item)
              needed -= quantityToTake;
            else
              for (var i = 0; i < quantityToTake; i++)
                (0, import_kolmafia6.cliExecute)("fold ".concat(matchingItem.name)), needed--;
          }
        }
      }), Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "put",
    value: function(items) {
      this._check();
      var map = arrayToCountedMap(items);
      if (!this.check())
        throw new Error("Wanted to return ".concat(countedMapToString(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      return map.forEach(function(quantity, item) {
        (0, import_kolmafia6.retrieveItem)(quantity, item);
        var returned = Math.min(quantity, (0, import_kolmafia6.availableAmount)(item));
        (0, import_kolmafia6.putStash)(returned, item), map.set(item, quantity - returned);
      }), Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "withStash",
    value: function(items, callback) {
      var _this = this;
      this._check();
      var map = arrayToCountedMap(items);
      return Clan2._withStash(function() {
        return _this.take(map);
      }, function(borrowed) {
        return _this.put(borrowed);
      }, callback);
    }
  }], [{
    key: "_join",
    value: function(id) {
      var result = (0, import_kolmafia6.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
      if (!result.includes("clanhalltop.gif"))
        throw new Error("Could not join clan");
      return Clan2.get();
    }
  }, {
    key: "_withStash",
    value: function(borrowFn, returnFn, callback) {
      var borrowed = borrowFn(), map = arrayToCountedMap(borrowed);
      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = arrayToCountedMap(returnFn(borrowed));
          map.forEach(function(quantity, item) {
            var remaining = quantity - (returned.get(item) || 0);
            remaining > 0 ? map.set(item, remaining) : map.delete(item);
          }), map.size > 0 && logger_default.error("Failed to return <b>".concat(countedMapToString(map), "</b> to <b>").concat(this.name, "</b> stash"));
        }
      }
    }
  }, {
    key: "join",
    value: function(clanIdOrName) {
      var clanId;
      if (typeof clanIdOrName == "string") {
        var clanName = clanIdOrName.toLowerCase();
        if (clanName === (0, import_kolmafia6.getClanName)().toLowerCase())
          return Clan2.get();
        if (!(clanName in clanIdCache)) {
          var clan = Clan2.getWhitelisted().find(function(c) {
            return c.name.toLowerCase() === clanName;
          });
          if (!clan)
            throw new Error("Player is not whitelisted to clan");
          clanIdCache[clanName] = clan.id;
        }
        clanId = clanIdCache[clanName];
      } else if (clanId = clanIdOrName, clanId === (0, import_kolmafia6.getClanId)())
        return Clan2.get();
      return Clan2._join(clanId);
    }
  }, {
    key: "with",
    value: function(clanIdOrName, callback) {
      var startingClan = Clan2.get(), clan = Clan2.join(clanIdOrName);
      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
  }, {
    key: "withStash",
    value: function(clanIdOrName, items, callback) {
      return Clan2._withStash(function() {
        return Clan2.with(clanIdOrName, function(clan) {
          return clan.take(items);
        });
      }, function(borrowed) {
        return Clan2.with(clanIdOrName, function(clan) {
          return clan.put(borrowed);
        });
      }, callback);
    }
  }, {
    key: "get",
    value: function() {
      return new Clan2((0, import_kolmafia6.getClanId)(), (0, import_kolmafia6.getClanName)());
    }
  }, {
    key: "getWhitelisted",
    value: function() {
      var page = (0, import_kolmafia6.visitUrl)("clan_signup.php");
      return (0, import_kolmafia6.xpath)(page, '//select[@name="whichclan"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>"), id = Number.parseInt((0, import_kolmafia6.xpath)(validHtml, "//@value")[0]), name = (0, import_kolmafia6.xpath)(validHtml, "//text()")[0];
        return new Clan2(id, name);
      });
    }
  }]), Clan2;
}();

// node_modules/libram/dist/dungeons/Dungeon.js
init_kolmafia_polyfill();
var import_kolmafia7 = require("kolmafia");
var _templateObject49, _templateObject210, _templateObject310;
function _createForOfIteratorHelper5(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray6(o, minLen);
  }
}
function _arrayLikeToArray6(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral3(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function distribute(dungeon) {
  var idOrName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (0, import_kolmafia7.myId)(), loot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : dungeon.loot, distributeAllOfAGivenItem = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, player = getPlayerFromIdOrName(idOrName), lootList = loot instanceof Map ? countedMapToArray(loot) : Array.isArray(loot) ? loot : [loot], badLoot = lootList.find(function(lootItem) {
    return !dungeon.loot.includes(lootItem);
  });
  if (badLoot)
    throw new Error("".concat(badLoot, " is not a valid piece of dungeon loot"));
  var pageText = (0, import_kolmafia7.visitUrl)("clan_basement.php");
  if (!pageText.match(new RegExp(player.name, "i")))
    throw new Error("".concat(player.name, " cannot be distributed loot from ").concat((0, import_kolmafia7.getClanName)()));
  var itemNames = (0, import_kolmafia7.xpath)(pageText, "//tr/td[2]/b/text()"), whichLoots = (0, import_kolmafia7.xpath)(pageText, '//form[@action="clan_basement.php"]//input[@type="hidden"][@name="whichloot"]/@value');
  itemNames.forEach(function(itemName, index) {
    lootList.includes((0, import_kolmafia7.toItem)(itemName)) && ((0, import_kolmafia7.visitUrl)("clan_basement.php?whichloot=".concat(whichLoots[index], "&recipient=").concat(player.id)), distributeAllOfAGivenItem || lootList.splice(lootList.indexOf((0, import_kolmafia7.toItem)(itemName))));
  });
}
function close(dungeon) {
  (0, import_kolmafia7.visitUrl)("clan_basement.php?action=".concat(dungeon.closeAction, "&confirm=true"), !0);
  var pageText = (0, import_kolmafia7.visitUrl)("clan_basement.php");
  return pageText.includes(dungeon.closedImage);
}
function open(dungeon) {
  var paymentPolicy = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Difference", pageText = (0, import_kolmafia7.visitUrl)("clan_basement.php");
  if (pageText.includes(dungeon.openImage))
    return !0;
  var clan = Clan.get();
  if (paymentPolicy === "All")
    clan.putMeatInCoffer(dungeon.openCost);
  else {
    var stashMeat = clan.getMeatInCoffer(), payDifference = dungeon.openCost - stashMeat;
    if (payDifference > 0) {
      if (paymentPolicy === "None")
        return !1;
      clan.putMeatInCoffer(payDifference);
    }
  }
  return (0, import_kolmafia7.visitUrl)("clan_basement.php?action=".concat(dungeon.openAction), !0), (0, import_kolmafia7.visitUrl)("clan_basement.php").includes(dungeon.openImage);
}
function createDungeon(name, loot, openAction, closeAction, openCost, openImage, closedImage) {
  return {
    name: name,
    loot: loot,
    openAction: openAction,
    closeAction: closeAction,
    openCost: openCost,
    openImage: openImage,
    closedImage: closedImage
  };
}
var Dreadsylvania = createDungeon("Dreadsylvania", $items(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral3(["Great Wolf's headband, Great Wolf's right paw, Great Wolf's left paw, Great Wolf's lice, Great Wolf's rocket launcher, Great Wolf's beastly trousers, Drapes-You-Regally, Warms-Your-Tush, Covers-Your-Head, Protects-Your-Junk, Quiets-Your-Steps, Helps-You-Sleep, Mayor Ghost's khakis, Mayor Ghost's cloak, Mayor Ghost's toupee, Mayor Ghost's scissors, Mayor Ghost's sash, Mayor Ghost's gavel, zombie mariachi hat, zombie accordion, zombie mariachi pants, HOA regulation book, HOA zombie eyes, HOA citation pad, Unkillable Skeleton's skullcap, Unkillable Skeleton's shinguards, Unkillable Skeleton's breastplate, Unkillable Skeleton's shield, Unkillable Skeleton's sawsword, Unkillable Skeleton's restless leg, skull capacitor, Thunkula's drinking cap, Drunkula's silky pants, Drunkula's cape, Drunkula's ring of haze, Drunkula's wineglass, Drunkula's bell, bottle of Bloodweiser, bottle of Bloodweiser, bottle of Bloodweiser, bottle of Bloodweiser, electric Kool-Aid, electric Kool-Aid, electric Kool-Aid, electric Kool-Aid, ghost pepper, ghost pepper, ghost pepper, ghost pepper, Gets-You-Drunk, Gets-You-Drunk, Gets-You-Drunk, Gets-You-Drunk, wriggling severed nose, wriggling severed nose, wriggling severed nose, wriggling severed nose, Hunger\u2122 Sauce, Hunger\u2122 Sauce, Hunger\u2122 Sauce, Hunger\u2122 Sauce"]))), "translatemap", "foldmap", 1e6, "dvmap.gif", "foldmap.gif"), Hobopolis = createDungeon("Hobopolis", $items(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral3(["Ol' Scratch's ash can, Ol' Scratch's ol' britches, Ol' Scratch's stovepipe hat, Ol' Scratch's infernal pitchfork, Ol' Scratch's manacles, Ol' Scratch's stove door, Frosty's carrot, Frosty's nailbat, Frosty's old silk hat, Frosty's arm, Frosty's iceball, Frosty's snowball sack, Oscus's dumpster waders, Oscus's pelt, Wand of Oscus, Oscus's flypaper pants, Oscus's garbage can lid, Oscus's neverending soda, Zombo's grievous greaves, Zombo's shield, Zombo's skullcap, Zombo's empty eye, Zombo's shoulder blade, Zombo's skull ring, Chester's bag of candy, Chester's cutoffs, Chester's moustache, Chester's Aquarius medallion, Chester's muscle shirt, Chester's sunglasses, Hodgman's bow tie, Hodgman's porkpie hat, Hodgman's lobsterskin pants, Hodgman's almanac, Hodgman's lucky sock, Hodgman's metal detector, Hodgman's varcolac paw, Hodgman's harmonica, Hodgman's garbage sticker, Hodgman's cane, Hodgman's whackin' stick, Hodgman's disgusting technicolor overcoat, Hodgman's imaginary hamster"]))), "cleansewer", "floodsewer", 1e6, "opengrate.gif", "sewergrate.gif"), SlimeTube = createDungeon("The Slime Tube", $items(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral3(["slime-soaked brain, slime-soaked hypophysis, slime-soaked sweat gland, squirming Slime larva, caustic slime nodule, caustic slime nodule, hardened slime belt, hardened slime hat, hardened slime pants"]))), "cleanspot", "sealtube", 25e4, "slimehole.gif", "greasespot.gif");
function findLoot(dungeon) {
  var returnValue = /* @__PURE__ */ new Map(), pageText = (0, import_kolmafia7.visitUrl)("clan_basement.php"), _iterator = _createForOfIteratorHelper5(dungeon.loot), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _pageText$match$lengt, _pageText$match, lootItem = _step.value;
      returnValue.set(lootItem, (_pageText$match$lengt = (_pageText$match = pageText.match(new RegExp(lootItem.name, "g"))) === null || _pageText$match === void 0 ? void 0 : _pageText$match.length) !== null && _pageText$match$lengt !== void 0 ? _pageText$match$lengt : 0);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return returnValue;
}

// node_modules/libram/dist/dungeons/SlimeTube.js
var SlimeTube_exports = {};
__export(SlimeTube_exports, {
  close: function() {
    return close2;
  },
  distribute: function() {
    return distribute2;
  },
  findLoot: function() {
    return findLoot2;
  },
  open: function() {
    return open2;
  }
});
init_kolmafia_polyfill();
var import_kolmafia8 = require("kolmafia");
function close2() {
  return close(SlimeTube);
}
function open2() {
  var paymentPolicy = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "Difference";
  return open(SlimeTube, paymentPolicy);
}
function distribute2() {
  var idOrName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, import_kolmafia8.myId)(), loot = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : SlimeTube.loot, distributeAllOfAGivenItem = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  distribute(SlimeTube, idOrName, loot, distributeAllOfAGivenItem);
}
function findLoot2() {
  return findLoot(SlimeTube);
}

// node_modules/grimoire-kolmafia/dist/lib.js
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/engine.js
init_kolmafia_polyfill();
var import_kolmafia11 = require("kolmafia");

// node_modules/grimoire-kolmafia/dist/outfit.js
init_kolmafia_polyfill();
var import_kolmafia10 = require("kolmafia");
var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: !0
});

// node_modules/grimoire-kolmafia/dist/route.js
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/task.js
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/limit.js
init_kolmafia_polyfill();

// src/main.ts
var import_kolmafia12 = require("kolmafia");
var _templateObject50, _templateObject211;
function _taggedTemplateLiteral4(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function parsePlayer(input) {
  var isPlayerId = !/[^\d]/.test(input), parsedIdOrName = isPlayerId ? parseInt(input) : input;
  return getPlayerFromIdOrName(parsedIdOrName);
}
var args = Args.create("distro", "A script for AltEnd to distribute his tubes", {
  slimeling: Args.custom({
    key: "slimeling",
    default: {
      name: "Phreddrickkv2",
      id: 1515124
    }
  }, parsePlayer, "Player"),
  skills: Args.custom({
    key: "skills",
    default: {
      name: (0, import_kolmafia12.myName)(),
      id: parseInt((0, import_kolmafia12.myId)())
    }
  }, parsePlayer, "Player"),
  others: Args.custom({
    key: "others",
    default: {
      name: (0, import_kolmafia12.myName)(),
      id: parseInt((0, import_kolmafia12.myId)())
    }
  }, parsePlayer, "Player")
});
function main() {
  var argstring = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  Args.fill(args, argstring), (0, import_kolmafia12.print)("Distributing tubes of clan ".concat((0, import_kolmafia12.getClanName)(), "; sending any slimeling to ").concat(args.slimeling, ", any skills to ").concat(args.skills, ", and everything else to ").concat(args.others)), SlimeTube_exports.distribute(args.slimeling.name, $item(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral4(["squirming Slime larva"]))), !0), SlimeTube_exports.distribute(args.skills.name, $items(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral4(["slime-soaked sweat gland, slime-soaked hypophysis, slime-soaked brain"]))), !0), SlimeTube_exports.distribute(args.others.name, SlimeTube_exports.findLoot(), !0);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
