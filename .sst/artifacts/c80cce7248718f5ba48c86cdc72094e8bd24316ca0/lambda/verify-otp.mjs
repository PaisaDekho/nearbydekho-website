import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"
const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x3) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a5, b5) => (typeof require !== "undefined" ? require : a5)[b5]
}) : x3)(function(x3) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x3 + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@aws-sdk/endpoint-cache/node_modules/obliterator/iterator.js
var require_iterator = __commonJS({
  "node_modules/@aws-sdk/endpoint-cache/node_modules/obliterator/iterator.js"(exports, module2) {
    function Iterator(next) {
      Object.defineProperty(this, "_next", {
        writable: false,
        enumerable: false,
        value: next
      });
      this.done = false;
    }
    __name(Iterator, "Iterator");
    Iterator.prototype.next = function() {
      if (this.done)
        return { done: true };
      var step = this._next();
      if (step.done)
        this.done = true;
      return step;
    };
    if (typeof Symbol !== "undefined")
      Iterator.prototype[Symbol.iterator] = function() {
        return this;
      };
    Iterator.of = function() {
      var args = arguments, l5 = args.length, i5 = 0;
      return new Iterator(function() {
        if (i5 >= l5)
          return { done: true };
        return { done: false, value: args[i5++] };
      });
    };
    Iterator.empty = function() {
      var iterator = new Iterator(null);
      iterator.done = true;
      return iterator;
    };
    Iterator.is = function(value) {
      if (value instanceof Iterator)
        return true;
      return typeof value === "object" && value !== null && typeof value.next === "function";
    };
    module2.exports = Iterator;
  }
});

// node_modules/@aws-sdk/endpoint-cache/node_modules/obliterator/foreach.js
var require_foreach = __commonJS({
  "node_modules/@aws-sdk/endpoint-cache/node_modules/obliterator/foreach.js"(exports, module2) {
    var ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer !== "undefined";
    var SYMBOL_SUPPORT = typeof Symbol !== "undefined";
    function forEach(iterable, callback) {
      var iterator, k5, i5, l5, s5;
      if (!iterable)
        throw new Error("obliterator/forEach: invalid iterable.");
      if (typeof callback !== "function")
        throw new Error("obliterator/forEach: expecting a callback.");
      if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
        for (i5 = 0, l5 = iterable.length; i5 < l5; i5++)
          callback(iterable[i5], i5);
        return;
      }
      if (typeof iterable.forEach === "function") {
        iterable.forEach(callback);
        return;
      }
      if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
        iterable = iterable[Symbol.iterator]();
      }
      if (typeof iterable.next === "function") {
        iterator = iterable;
        i5 = 0;
        while (s5 = iterator.next(), s5.done !== true) {
          callback(s5.value, i5);
          i5++;
        }
        return;
      }
      for (k5 in iterable) {
        if (iterable.hasOwnProperty(k5)) {
          callback(iterable[k5], k5);
        }
      }
      return;
    }
    __name(forEach, "forEach");
    forEach.forEachWithNullKeys = function(iterable, callback) {
      var iterator, k5, i5, l5, s5;
      if (!iterable)
        throw new Error("obliterator/forEachWithNullKeys: invalid iterable.");
      if (typeof callback !== "function")
        throw new Error("obliterator/forEachWithNullKeys: expecting a callback.");
      if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
        for (i5 = 0, l5 = iterable.length; i5 < l5; i5++)
          callback(iterable[i5], null);
        return;
      }
      if (iterable instanceof Set) {
        iterable.forEach(function(value) {
          callback(value, null);
        });
        return;
      }
      if (typeof iterable.forEach === "function") {
        iterable.forEach(callback);
        return;
      }
      if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
        iterable = iterable[Symbol.iterator]();
      }
      if (typeof iterable.next === "function") {
        iterator = iterable;
        i5 = 0;
        while (s5 = iterator.next(), s5.done !== true) {
          callback(s5.value, null);
          i5++;
        }
        return;
      }
      for (k5 in iterable) {
        if (iterable.hasOwnProperty(k5)) {
          callback(iterable[k5], k5);
        }
      }
      return;
    };
    module2.exports = forEach;
  }
});

// node_modules/@aws-sdk/endpoint-cache/node_modules/mnemonist/utils/typed-arrays.js
var require_typed_arrays = __commonJS({
  "node_modules/@aws-sdk/endpoint-cache/node_modules/mnemonist/utils/typed-arrays.js"(exports) {
    var MAX_8BIT_INTEGER = Math.pow(2, 8) - 1;
    var MAX_16BIT_INTEGER = Math.pow(2, 16) - 1;
    var MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;
    var MAX_SIGNED_8BIT_INTEGER = Math.pow(2, 7) - 1;
    var MAX_SIGNED_16BIT_INTEGER = Math.pow(2, 15) - 1;
    var MAX_SIGNED_32BIT_INTEGER = Math.pow(2, 31) - 1;
    exports.getPointerArray = function(size) {
      var maxIndex = size - 1;
      if (maxIndex <= MAX_8BIT_INTEGER)
        return Uint8Array;
      if (maxIndex <= MAX_16BIT_INTEGER)
        return Uint16Array;
      if (maxIndex <= MAX_32BIT_INTEGER)
        return Uint32Array;
      return Float64Array;
    };
    exports.getSignedPointerArray = function(size) {
      var maxIndex = size - 1;
      if (maxIndex <= MAX_SIGNED_8BIT_INTEGER)
        return Int8Array;
      if (maxIndex <= MAX_SIGNED_16BIT_INTEGER)
        return Int16Array;
      if (maxIndex <= MAX_SIGNED_32BIT_INTEGER)
        return Int32Array;
      return Float64Array;
    };
    exports.getNumberType = function(value) {
      if (value === (value | 0)) {
        if (Math.sign(value) === -1) {
          if (value <= 127 && value >= -128)
            return Int8Array;
          if (value <= 32767 && value >= -32768)
            return Int16Array;
          return Int32Array;
        } else {
          if (value <= 255)
            return Uint8Array;
          if (value <= 65535)
            return Uint16Array;
          return Uint32Array;
        }
      }
      return Float64Array;
    };
    var TYPE_PRIORITY = {
      Uint8Array: 1,
      Int8Array: 2,
      Uint16Array: 3,
      Int16Array: 4,
      Uint32Array: 5,
      Int32Array: 6,
      Float32Array: 7,
      Float64Array: 8
    };
    exports.getMinimalRepresentation = function(array, getter) {
      var maxType = null, maxPriority = 0, p5, t3, v3, i5, l5;
      for (i5 = 0, l5 = array.length; i5 < l5; i5++) {
        v3 = getter ? getter(array[i5]) : array[i5];
        t3 = exports.getNumberType(v3);
        p5 = TYPE_PRIORITY[t3.name];
        if (p5 > maxPriority) {
          maxPriority = p5;
          maxType = t3;
        }
      }
      return maxType;
    };
    exports.isTypedArray = function(value) {
      return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
    };
    exports.concat = function() {
      var length = 0, i5, o5, l5;
      for (i5 = 0, l5 = arguments.length; i5 < l5; i5++)
        length += arguments[i5].length;
      var array = new arguments[0].constructor(length);
      for (i5 = 0, o5 = 0; i5 < l5; i5++) {
        array.set(arguments[i5], o5);
        o5 += arguments[i5].length;
      }
      return array;
    };
    exports.indices = function(length) {
      var PointerArray = exports.getPointerArray(length);
      var array = new PointerArray(length);
      for (var i5 = 0; i5 < length; i5++)
        array[i5] = i5;
      return array;
    };
  }
});

// node_modules/@aws-sdk/endpoint-cache/node_modules/mnemonist/utils/iterables.js
var require_iterables = __commonJS({
  "node_modules/@aws-sdk/endpoint-cache/node_modules/mnemonist/utils/iterables.js"(exports) {
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    function isArrayLike(target) {
      return Array.isArray(target) || typed.isTypedArray(target);
    }
    __name(isArrayLike, "isArrayLike");
    function guessLength(target) {
      if (typeof target.length === "number")
        return target.length;
      if (typeof target.size === "number")
        return target.size;
      return;
    }
    __name(guessLength, "guessLength");
    function toArray(target) {
      var l5 = guessLength(target);
      var array = typeof l5 === "number" ? new Array(l5) : [];
      var i5 = 0;
      forEach(target, function(value) {
        array[i5++] = value;
      });
      return array;
    }
    __name(toArray, "toArray");
    function toArrayWithIndices(target) {
      var l5 = guessLength(target);
      var IndexArray = typeof l5 === "number" ? typed.getPointerArray(l5) : Array;
      var array = typeof l5 === "number" ? new Array(l5) : [];
      var indices = typeof l5 === "number" ? new IndexArray(l5) : [];
      var i5 = 0;
      forEach(target, function(value) {
        array[i5] = value;
        indices[i5] = i5++;
      });
      return [array, indices];
    }
    __name(toArrayWithIndices, "toArrayWithIndices");
    exports.isArrayLike = isArrayLike;
    exports.guessLength = guessLength;
    exports.toArray = toArray;
    exports.toArrayWithIndices = toArrayWithIndices;
  }
});

// node_modules/@aws-sdk/endpoint-cache/node_modules/mnemonist/lru-cache.js
var require_lru_cache = __commonJS({
  "node_modules/@aws-sdk/endpoint-cache/node_modules/mnemonist/lru-cache.js"(exports, module2) {
    var Iterator = require_iterator();
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    var iterables = require_iterables();
    function LRUCache2(Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      this.capacity = capacity;
      if (typeof this.capacity !== "number" || this.capacity <= 0)
        throw new Error("mnemonist/lru-cache: capacity should be positive number.");
      var PointerArray = typed.getPointerArray(capacity);
      this.forward = new PointerArray(capacity);
      this.backward = new PointerArray(capacity);
      this.K = typeof Keys === "function" ? new Keys(capacity) : new Array(capacity);
      this.V = typeof Values === "function" ? new Values(capacity) : new Array(capacity);
      this.size = 0;
      this.head = 0;
      this.tail = 0;
      this.items = {};
    }
    __name(LRUCache2, "LRUCache");
    LRUCache2.prototype.clear = function() {
      this.size = 0;
      this.head = 0;
      this.tail = 0;
      this.items = {};
    };
    LRUCache2.prototype.splayOnTop = function(pointer) {
      var oldHead = this.head;
      if (this.head === pointer)
        return this;
      var previous = this.backward[pointer], next = this.forward[pointer];
      if (this.tail === pointer) {
        this.tail = previous;
      } else {
        this.backward[next] = previous;
      }
      this.forward[previous] = next;
      this.backward[oldHead] = pointer;
      this.head = pointer;
      this.forward[pointer] = oldHead;
      return this;
    };
    LRUCache2.prototype.set = function(key, value) {
      var pointer = this.items[key];
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        this.V[pointer] = value;
        return;
      }
      if (this.size < this.capacity) {
        pointer = this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        delete this.items[this.K[pointer]];
      }
      this.items[key] = pointer;
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
    };
    LRUCache2.prototype.setpop = function(key, value) {
      var oldValue = null;
      var oldKey = null;
      var pointer = this.items[key];
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        oldValue = this.V[pointer];
        this.V[pointer] = value;
        return { evicted: false, key, value: oldValue };
      }
      if (this.size < this.capacity) {
        pointer = this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        oldValue = this.V[pointer];
        oldKey = this.K[pointer];
        delete this.items[this.K[pointer]];
      }
      this.items[key] = pointer;
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
      if (oldKey) {
        return { evicted: true, key: oldKey, value: oldValue };
      } else {
        return null;
      }
    };
    LRUCache2.prototype.has = function(key) {
      return key in this.items;
    };
    LRUCache2.prototype.get = function(key) {
      var pointer = this.items[key];
      if (typeof pointer === "undefined")
        return;
      this.splayOnTop(pointer);
      return this.V[pointer];
    };
    LRUCache2.prototype.peek = function(key) {
      var pointer = this.items[key];
      if (typeof pointer === "undefined")
        return;
      return this.V[pointer];
    };
    LRUCache2.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var i5 = 0, l5 = this.size;
      var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
      while (i5 < l5) {
        callback.call(scope, values[pointer], keys[pointer], this);
        pointer = forward[pointer];
        i5++;
      }
    };
    LRUCache2.prototype.keys = function() {
      var i5 = 0, l5 = this.size;
      var pointer = this.head, keys = this.K, forward = this.forward;
      return new Iterator(function() {
        if (i5 >= l5)
          return { done: true };
        var key = keys[pointer];
        i5++;
        if (i5 < l5)
          pointer = forward[pointer];
        return {
          done: false,
          value: key
        };
      });
    };
    LRUCache2.prototype.values = function() {
      var i5 = 0, l5 = this.size;
      var pointer = this.head, values = this.V, forward = this.forward;
      return new Iterator(function() {
        if (i5 >= l5)
          return { done: true };
        var value = values[pointer];
        i5++;
        if (i5 < l5)
          pointer = forward[pointer];
        return {
          done: false,
          value
        };
      });
    };
    LRUCache2.prototype.entries = function() {
      var i5 = 0, l5 = this.size;
      var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
      return new Iterator(function() {
        if (i5 >= l5)
          return { done: true };
        var key = keys[pointer], value = values[pointer];
        i5++;
        if (i5 < l5)
          pointer = forward[pointer];
        return {
          done: false,
          value: [key, value]
        };
      });
    };
    if (typeof Symbol !== "undefined")
      LRUCache2.prototype[Symbol.iterator] = LRUCache2.prototype.entries;
    LRUCache2.prototype.inspect = function() {
      var proxy = /* @__PURE__ */ new Map();
      var iterator = this.entries(), step;
      while (step = iterator.next(), !step.done)
        proxy.set(step.value[0], step.value[1]);
      Object.defineProperty(proxy, "constructor", {
        value: LRUCache2,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      LRUCache2.prototype[Symbol.for("nodejs.util.inspect.custom")] = LRUCache2.prototype.inspect;
    LRUCache2.from = function(iterable, Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.");
      } else if (arguments.length === 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      var cache = new LRUCache2(Keys, Values, capacity);
      forEach(iterable, function(value, key) {
        cache.set(key, value);
      });
      return cache;
    };
    module2.exports = LRUCache2;
  }
});

// node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d5, b5) {
  extendStatics(d5, b5);
  function __() {
    this.constructor = d5;
  }
  __name(__, "__");
  d5.prototype = b5 === null ? Object.create(b5) : (__.prototype = b5.prototype, new __());
}
function __rest(s5, e5) {
  var t3 = {};
  for (var p5 in s5)
    if (Object.prototype.hasOwnProperty.call(s5, p5) && e5.indexOf(p5) < 0)
      t3[p5] = s5[p5];
  if (s5 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i5 = 0, p5 = Object.getOwnPropertySymbols(s5); i5 < p5.length; i5++) {
      if (e5.indexOf(p5[i5]) < 0 && Object.prototype.propertyIsEnumerable.call(s5, p5[i5]))
        t3[p5[i5]] = s5[p5[i5]];
    }
  return t3;
}
function __decorate(decorators, target, key, desc) {
  var c5 = arguments.length, r5 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r5 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i5 = decorators.length - 1; i5 >= 0; i5--)
      if (d5 = decorators[i5])
        r5 = (c5 < 3 ? d5(r5) : c5 > 3 ? d5(target, key, r5) : d5(target, key)) || r5;
  return c5 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e5) {
        reject(e5);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e5) {
        reject(e5);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t3[0] & 1)
      throw t3[1];
    return t3[1];
  }, trys: [], ops: [] }, f5, y2, t3, g5;
  return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
    return this;
  }), g5;
  function verb(n5) {
    return function(v3) {
      return step([n5, v3]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f5)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f5 = 1, y2 && (t3 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t3 = y2["return"]) && t3.call(y2), 0) : y2.next) && !(t3 = t3.call(y2, op[1])).done)
          return t3;
        if (y2 = 0, t3)
          op = [op[0] & 2, t3.value];
        switch (op[0]) {
          case 0:
          case 1:
            t3 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t3 = _.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t3[1]) {
              _.label = t3[1];
              t3 = op;
              break;
            }
            if (t3 && _.label < t3[2]) {
              _.label = t3[2];
              _.ops.push(op);
              break;
            }
            if (t3[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e5) {
        op = [6, e5];
        y2 = 0;
      } finally {
        f5 = t3 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
}
function __createBinding(o5, m5, k5, k22) {
  if (k22 === void 0)
    k22 = k5;
  o5[k22] = m5[k5];
}
function __exportStar(m5, exports) {
  for (var p5 in m5)
    if (p5 !== "default" && !exports.hasOwnProperty(p5))
      exports[p5] = m5[p5];
}
function __values(o5) {
  var s5 = typeof Symbol === "function" && Symbol.iterator, m5 = s5 && o5[s5], i5 = 0;
  if (m5)
    return m5.call(o5);
  if (o5 && typeof o5.length === "number")
    return {
      next: function() {
        if (o5 && i5 >= o5.length)
          o5 = void 0;
        return { value: o5 && o5[i5++], done: !o5 };
      }
    };
  throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o5, n5) {
  var m5 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m5)
    return o5;
  var i5 = m5.call(o5), r5, ar = [], e5;
  try {
    while ((n5 === void 0 || n5-- > 0) && !(r5 = i5.next()).done)
      ar.push(r5.value);
  } catch (error) {
    e5 = { error };
  } finally {
    try {
      if (r5 && !r5.done && (m5 = i5["return"]))
        m5.call(i5);
    } finally {
      if (e5)
        throw e5.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i5 = 0; i5 < arguments.length; i5++)
    ar = ar.concat(__read(arguments[i5]));
  return ar;
}
function __spreadArrays() {
  for (var s5 = 0, i5 = 0, il = arguments.length; i5 < il; i5++)
    s5 += arguments[i5].length;
  for (var r5 = Array(s5), k5 = 0, i5 = 0; i5 < il; i5++)
    for (var a5 = arguments[i5], j5 = 0, jl = a5.length; j5 < jl; j5++, k5++)
      r5[k5] = a5[j5];
  return r5;
}
function __await(v3) {
  return this instanceof __await ? (this.v = v3, this) : new __await(v3);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g5 = generator.apply(thisArg, _arguments || []), i5, q5 = [];
  return i5 = {}, verb("next"), verb("throw"), verb("return"), i5[Symbol.asyncIterator] = function() {
    return this;
  }, i5;
  function verb(n5) {
    if (g5[n5])
      i5[n5] = function(v3) {
        return new Promise(function(a5, b5) {
          q5.push([n5, v3, a5, b5]) > 1 || resume(n5, v3);
        });
      };
  }
  __name(verb, "verb");
  function resume(n5, v3) {
    try {
      step(g5[n5](v3));
    } catch (e5) {
      settle(q5[0][3], e5);
    }
  }
  __name(resume, "resume");
  function step(r5) {
    r5.value instanceof __await ? Promise.resolve(r5.value.v).then(fulfill, reject) : settle(q5[0][2], r5);
  }
  __name(step, "step");
  function fulfill(value) {
    resume("next", value);
  }
  __name(fulfill, "fulfill");
  function reject(value) {
    resume("throw", value);
  }
  __name(reject, "reject");
  function settle(f5, v3) {
    if (f5(v3), q5.shift(), q5.length)
      resume(q5[0][0], q5[0][1]);
  }
  __name(settle, "settle");
}
function __asyncDelegator(o5) {
  var i5, p5;
  return i5 = {}, verb("next"), verb("throw", function(e5) {
    throw e5;
  }), verb("return"), i5[Symbol.iterator] = function() {
    return this;
  }, i5;
  function verb(n5, f5) {
    i5[n5] = o5[n5] ? function(v3) {
      return (p5 = !p5) ? { value: __await(o5[n5](v3)), done: n5 === "return" } : f5 ? f5(v3) : v3;
    } : f5;
  }
  __name(verb, "verb");
}
function __asyncValues(o5) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m5 = o5[Symbol.asyncIterator], i5;
  return m5 ? m5.call(o5) : (o5 = typeof __values === "function" ? __values(o5) : o5[Symbol.iterator](), i5 = {}, verb("next"), verb("throw"), verb("return"), i5[Symbol.asyncIterator] = function() {
    return this;
  }, i5);
  function verb(n5) {
    i5[n5] = o5[n5] && function(v3) {
      return new Promise(function(resolve, reject) {
        v3 = o5[n5](v3), settle(resolve, reject, v3.done, v3.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d5, v3) {
    Promise.resolve(v3).then(function(v5) {
      resolve({ value: v5, done: d5 });
    }, reject);
  }
  __name(settle, "settle");
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k5 in mod)
      if (Object.hasOwnProperty.call(mod, k5))
        result[k5] = mod[k5];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js"() {
    extendStatics = /* @__PURE__ */ __name(function(d5, b5) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b6) {
        d6.__proto__ = b6;
      } || function(d6, b6) {
        for (var p5 in b6)
          if (b6.hasOwnProperty(p5))
            d6[p5] = b6[p5];
      };
      return extendStatics(d5, b5);
    }, "extendStatics");
    __name(__extends, "__extends");
    __assign = /* @__PURE__ */ __name(function() {
      __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t3) {
        for (var s5, i5 = 1, n5 = arguments.length; i5 < n5; i5++) {
          s5 = arguments[i5];
          for (var p5 in s5)
            if (Object.prototype.hasOwnProperty.call(s5, p5))
              t3[p5] = s5[p5];
        }
        return t3;
      }, "__assign");
      return __assign.apply(this, arguments);
    }, "__assign");
    __name(__rest, "__rest");
    __name(__decorate, "__decorate");
    __name(__param, "__param");
    __name(__metadata, "__metadata");
    __name(__awaiter, "__awaiter");
    __name(__generator, "__generator");
    __name(__createBinding, "__createBinding");
    __name(__exportStar, "__exportStar");
    __name(__values, "__values");
    __name(__read, "__read");
    __name(__spread, "__spread");
    __name(__spreadArrays, "__spreadArrays");
    __name(__await, "__await");
    __name(__asyncGenerator, "__asyncGenerator");
    __name(__asyncDelegator, "__asyncDelegator");
    __name(__asyncValues, "__asyncValues");
    __name(__makeTemplateObject, "__makeTemplateObject");
    __name(__importStar, "__importStar");
    __name(__importDefault, "__importDefault");
    __name(__classPrivateFieldGet, "__classPrivateFieldGet");
    __name(__classPrivateFieldSet, "__classPrivateFieldSet");
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js
var fromUtf8, toUtf8;
var init_pureJs = __esm({
  "node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js"() {
    fromUtf8 = /* @__PURE__ */ __name((input) => {
      const bytes = [];
      for (let i5 = 0, len = input.length; i5 < len; i5++) {
        const value = input.charCodeAt(i5);
        if (value < 128) {
          bytes.push(value);
        } else if (value < 2048) {
          bytes.push(value >> 6 | 192, value & 63 | 128);
        } else if (i5 + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i5 + 1) & 64512) === 56320) {
          const surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i5) & 1023);
          bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
        } else {
          bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
        }
      }
      return Uint8Array.from(bytes);
    }, "fromUtf8");
    toUtf8 = /* @__PURE__ */ __name((input) => {
      let decoded = "";
      for (let i5 = 0, len = input.length; i5 < len; i5++) {
        const byte = input[i5];
        if (byte < 128) {
          decoded += String.fromCharCode(byte);
        } else if (192 <= byte && byte < 224) {
          const nextByte = input[++i5];
          decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
        } else if (240 <= byte && byte < 365) {
          const surrogatePair = [byte, input[++i5], input[++i5], input[++i5]];
          const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
          decoded += decodeURIComponent(encoded);
        } else {
          decoded += String.fromCharCode((byte & 15) << 12 | (input[++i5] & 63) << 6 | input[++i5] & 63);
        }
      }
      return decoded;
    }, "toUtf8");
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js
function fromUtf82(input) {
  return new TextEncoder().encode(input);
}
function toUtf82(input) {
  return new TextDecoder("utf-8").decode(input);
}
var init_whatwgEncodingApi = __esm({
  "node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js"() {
    __name(fromUtf82, "fromUtf8");
    __name(toUtf82, "toUtf8");
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js
var dist_es_exports = {};
__export(dist_es_exports, {
  fromUtf8: () => fromUtf83,
  toUtf8: () => toUtf83
});
var fromUtf83, toUtf83;
var init_dist_es = __esm({
  "node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js"() {
    init_pureJs();
    init_whatwgEncodingApi();
    fromUtf83 = /* @__PURE__ */ __name((input) => typeof TextEncoder === "function" ? fromUtf82(input) : fromUtf8(input), "fromUtf8");
    toUtf83 = /* @__PURE__ */ __name((input) => typeof TextDecoder === "function" ? toUtf82(input) : toUtf8(input), "toUtf8");
  }
});

// node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer = __commonJS({
  "node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertToBuffer = void 0;
    var util_utf8_browser_1 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var fromUtf85 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
      return Buffer.from(input, "utf8");
    } : util_utf8_browser_1.fromUtf8;
    function convertToBuffer(data) {
      if (data instanceof Uint8Array)
        return data;
      if (typeof data === "string") {
        return fromUtf85(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
    __name(convertToBuffer, "convertToBuffer");
    exports.convertToBuffer = convertToBuffer;
  }
});

// node_modules/@aws-crypto/util/build/isEmptyData.js
var require_isEmptyData = __commonJS({
  "node_modules/@aws-crypto/util/build/isEmptyData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmptyData = void 0;
    function isEmptyData(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    __name(isEmptyData, "isEmptyData");
    exports.isEmptyData = isEmptyData;
  }
});

// node_modules/@aws-crypto/util/build/numToUint8.js
var require_numToUint8 = __commonJS({
  "node_modules/@aws-crypto/util/build/numToUint8.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numToUint8 = void 0;
    function numToUint8(num) {
      return new Uint8Array([
        (num & 4278190080) >> 24,
        (num & 16711680) >> 16,
        (num & 65280) >> 8,
        num & 255
      ]);
    }
    __name(numToUint8, "numToUint8");
    exports.numToUint8 = numToUint8;
  }
});

// node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
var require_uint32ArrayFrom = __commonJS({
  "node_modules/@aws-crypto/util/build/uint32ArrayFrom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = void 0;
    function uint32ArrayFrom(a_lookUpTable) {
      if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
          return_array[a_index] = a_lookUpTable[a_index];
          a_index += 1;
        }
        return return_array;
      }
      return Uint32Array.from(a_lookUpTable);
    }
    __name(uint32ArrayFrom, "uint32ArrayFrom");
    exports.uint32ArrayFrom = uint32ArrayFrom;
  }
});

// node_modules/@aws-crypto/util/build/index.js
var require_build = __commonJS({
  "node_modules/@aws-crypto/util/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
    var convertToBuffer_1 = require_convertToBuffer();
    Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function() {
      return convertToBuffer_1.convertToBuffer;
    } });
    var isEmptyData_1 = require_isEmptyData();
    Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function() {
      return isEmptyData_1.isEmptyData;
    } });
    var numToUint8_1 = require_numToUint8();
    Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function() {
      return numToUint8_1.numToUint8;
    } });
    var uint32ArrayFrom_1 = require_uint32ArrayFrom();
    Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function() {
      return uint32ArrayFrom_1.uint32ArrayFrom;
    } });
  }
});

// node_modules/@aws-crypto/crc32/build/aws_crc32.js
var require_aws_crc32 = __commonJS({
  "node_modules/@aws-crypto/crc32/build/aws_crc32.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util_1 = require_build();
    var index_1 = require_build2();
    var AwsCrc32 = function() {
      function AwsCrc322() {
        this.crc32 = new index_1.Crc32();
      }
      __name(AwsCrc322, "AwsCrc32");
      AwsCrc322.prototype.update = function(toHash) {
        if ((0, util_1.isEmptyData)(toHash))
          return;
        this.crc32.update((0, util_1.convertToBuffer)(toHash));
      };
      AwsCrc322.prototype.digest = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            return [2, (0, util_1.numToUint8)(this.crc32.digest())];
          });
        });
      };
      AwsCrc322.prototype.reset = function() {
        this.crc32 = new index_1.Crc32();
      };
      return AwsCrc322;
    }();
    exports.AwsCrc32 = AwsCrc32;
  }
});

// node_modules/@aws-crypto/crc32/build/index.js
var require_build2 = __commonJS({
  "node_modules/@aws-crypto/crc32/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util_1 = require_build();
    function crc32(data) {
      return new Crc323().update(data).digest();
    }
    __name(crc32, "crc32");
    exports.crc32 = crc32;
    var Crc323 = function() {
      function Crc324() {
        this.checksum = 4294967295;
      }
      __name(Crc324, "Crc32");
      Crc324.prototype.update = function(data) {
        var e_1, _a;
        try {
          for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var byte = data_1_1.value;
            this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (data_1_1 && !data_1_1.done && (_a = data_1.return))
              _a.call(data_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        return this;
      };
      Crc324.prototype.digest = function() {
        return (this.checksum ^ 4294967295) >>> 0;
      };
      return Crc324;
    }();
    exports.Crc32 = Crc323;
    var a_lookUpTable = [
      0,
      1996959894,
      3993919788,
      2567524794,
      124634137,
      1886057615,
      3915621685,
      2657392035,
      249268274,
      2044508324,
      3772115230,
      2547177864,
      162941995,
      2125561021,
      3887607047,
      2428444049,
      498536548,
      1789927666,
      4089016648,
      2227061214,
      450548861,
      1843258603,
      4107580753,
      2211677639,
      325883990,
      1684777152,
      4251122042,
      2321926636,
      335633487,
      1661365465,
      4195302755,
      2366115317,
      997073096,
      1281953886,
      3579855332,
      2724688242,
      1006888145,
      1258607687,
      3524101629,
      2768942443,
      901097722,
      1119000684,
      3686517206,
      2898065728,
      853044451,
      1172266101,
      3705015759,
      2882616665,
      651767980,
      1373503546,
      3369554304,
      3218104598,
      565507253,
      1454621731,
      3485111705,
      3099436303,
      671266974,
      1594198024,
      3322730930,
      2970347812,
      795835527,
      1483230225,
      3244367275,
      3060149565,
      1994146192,
      31158534,
      2563907772,
      4023717930,
      1907459465,
      112637215,
      2680153253,
      3904427059,
      2013776290,
      251722036,
      2517215374,
      3775830040,
      2137656763,
      141376813,
      2439277719,
      3865271297,
      1802195444,
      476864866,
      2238001368,
      4066508878,
      1812370925,
      453092731,
      2181625025,
      4111451223,
      1706088902,
      314042704,
      2344532202,
      4240017532,
      1658658271,
      366619977,
      2362670323,
      4224994405,
      1303535960,
      984961486,
      2747007092,
      3569037538,
      1256170817,
      1037604311,
      2765210733,
      3554079995,
      1131014506,
      879679996,
      2909243462,
      3663771856,
      1141124467,
      855842277,
      2852801631,
      3708648649,
      1342533948,
      654459306,
      3188396048,
      3373015174,
      1466479909,
      544179635,
      3110523913,
      3462522015,
      1591671054,
      702138776,
      2966460450,
      3352799412,
      1504918807,
      783551873,
      3082640443,
      3233442989,
      3988292384,
      2596254646,
      62317068,
      1957810842,
      3939845945,
      2647816111,
      81470997,
      1943803523,
      3814918930,
      2489596804,
      225274430,
      2053790376,
      3826175755,
      2466906013,
      167816743,
      2097651377,
      4027552580,
      2265490386,
      503444072,
      1762050814,
      4150417245,
      2154129355,
      426522225,
      1852507879,
      4275313526,
      2312317920,
      282753626,
      1742555852,
      4189708143,
      2394877945,
      397917763,
      1622183637,
      3604390888,
      2714866558,
      953729732,
      1340076626,
      3518719985,
      2797360999,
      1068828381,
      1219638859,
      3624741850,
      2936675148,
      906185462,
      1090812512,
      3747672003,
      2825379669,
      829329135,
      1181335161,
      3412177804,
      3160834842,
      628085408,
      1382605366,
      3423369109,
      3138078467,
      570562233,
      1426400815,
      3317316542,
      2998733608,
      733239954,
      1555261956,
      3268935591,
      3050360625,
      752459403,
      1541320221,
      2607071920,
      3965973030,
      1969922972,
      40735498,
      2617837225,
      3943577151,
      1913087877,
      83908371,
      2512341634,
      3803740692,
      2075208622,
      213261112,
      2463272603,
      3855990285,
      2094854071,
      198958881,
      2262029012,
      4057260610,
      1759359992,
      534414190,
      2176718541,
      4139329115,
      1873836001,
      414664567,
      2282248934,
      4279200368,
      1711684554,
      285281116,
      2405801727,
      4167216745,
      1634467795,
      376229701,
      2685067896,
      3608007406,
      1308918612,
      956543938,
      2808555105,
      3495958263,
      1231636301,
      1047427035,
      2932959818,
      3654703836,
      1088359270,
      936918e3,
      2847714899,
      3736837829,
      1202900863,
      817233897,
      3183342108,
      3401237130,
      1404277552,
      615818150,
      3134207493,
      3453421203,
      1423857449,
      601450431,
      3009837614,
      3294710456,
      1567103746,
      711928724,
      3020668471,
      3272380065,
      1510334235,
      755167117
    ];
    var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
    var aws_crc32_1 = require_aws_crc32();
    Object.defineProperty(exports, "AwsCrc32", { enumerable: true, get: function() {
      return aws_crc32_1.AwsCrc32;
    } });
  }
});

// node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({
  "node_modules/fast-xml-parser/src/util.js"(exports) {
    "use strict";
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = /* @__PURE__ */ __name(function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    }, "getAllMatches");
    var isName = /* @__PURE__ */ __name(function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    }, "isName");
    exports.isExist = function(v3) {
      return typeof v3 !== "undefined";
    };
    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports.merge = function(target, a5, arrayMode) {
      if (a5) {
        const keys = Object.keys(a5);
        const len = keys.length;
        for (let i5 = 0; i5 < len; i5++) {
          if (arrayMode === "strict") {
            target[keys[i5]] = [a5[keys[i5]]];
          } else {
            target[keys[i5]] = a5[keys[i5]];
          }
        }
      }
    };
    exports.getValue = function(v3) {
      if (exports.isExist(v3)) {
        return v3;
      } else {
        return "";
      }
    };
    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
  }
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "node_modules/fast-xml-parser/src/validator.js"(exports) {
    "use strict";
    var util = require_util();
    var defaultOptions = {
      allowBooleanAttributes: false,
      unpairedTags: []
    };
    exports.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i5 = 0; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === "<" && xmlData[i5 + 1] === "?") {
          i5 += 2;
          i5 = readPI(xmlData, i5);
          if (i5.err)
            return i5;
        } else if (xmlData[i5] === "<") {
          let tagStartPos = i5;
          i5++;
          if (xmlData[i5] === "!") {
            i5 = readCommentAndCDATA(xmlData, i5);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i5] === "/") {
              closingTag = true;
              i5++;
            }
            let tagName = "";
            for (; i5 < xmlData.length && xmlData[i5] !== ">" && xmlData[i5] !== " " && xmlData[i5] !== "	" && xmlData[i5] !== "\n" && xmlData[i5] !== "\r"; i5++) {
              tagName += xmlData[i5];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i5--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i5));
            }
            const result = readAttributeStr(xmlData, i5);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i5));
            }
            let attrStr = result.value;
            i5 = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i5 - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i5));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i5 - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i5));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i5++; i5 < xmlData.length; i5++) {
              if (xmlData[i5] === "<") {
                if (xmlData[i5 + 1] === "!") {
                  i5++;
                  i5 = readCommentAndCDATA(xmlData, i5);
                  continue;
                } else if (xmlData[i5 + 1] === "?") {
                  i5 = readPI(xmlData, ++i5);
                  if (i5.err)
                    return i5;
                } else {
                  break;
                }
              } else if (xmlData[i5] === "&") {
                const afterAmp = validateAmpersand(xmlData, i5);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i5));
                i5 = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i5])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i5));
                }
              }
            }
            if (xmlData[i5] === "<") {
              i5--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i5])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i5] + "' is not expected.", getLineNumberForPosition(xmlData, i5));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t3) => t3.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    __name(isWhiteSpace, "isWhiteSpace");
    function readPI(xmlData, i5) {
      const start = i5;
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] == "?" || xmlData[i5] == " ") {
          const tagname = xmlData.substr(start, i5 - start);
          if (i5 > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i5));
          } else if (xmlData[i5] == "?" && xmlData[i5 + 1] == ">") {
            i5++;
            break;
          } else {
            continue;
          }
        }
      }
      return i5;
    }
    __name(readPI, "readPI");
    function readCommentAndCDATA(xmlData, i5) {
      if (xmlData.length > i5 + 5 && xmlData[i5 + 1] === "-" && xmlData[i5 + 2] === "-") {
        for (i5 += 3; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "-" && xmlData[i5 + 1] === "-" && xmlData[i5 + 2] === ">") {
            i5 += 2;
            break;
          }
        }
      } else if (xmlData.length > i5 + 8 && xmlData[i5 + 1] === "D" && xmlData[i5 + 2] === "O" && xmlData[i5 + 3] === "C" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "Y" && xmlData[i5 + 6] === "P" && xmlData[i5 + 7] === "E") {
        let angleBracketsCount = 1;
        for (i5 += 8; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i5] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i5 + 9 && xmlData[i5 + 1] === "[" && xmlData[i5 + 2] === "C" && xmlData[i5 + 3] === "D" && xmlData[i5 + 4] === "A" && xmlData[i5 + 5] === "T" && xmlData[i5 + 6] === "A" && xmlData[i5 + 7] === "[") {
        for (i5 += 8; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "]" && xmlData[i5 + 1] === "]" && xmlData[i5 + 2] === ">") {
            i5 += 2;
            break;
          }
        }
      }
      return i5;
    }
    __name(readCommentAndCDATA, "readCommentAndCDATA");
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i5) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === doubleQuote || xmlData[i5] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i5];
          } else if (startChar !== xmlData[i5]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i5] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i5];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i5,
        tagClosed
      };
    }
    __name(readAttributeStr, "readAttributeStr");
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i5 = 0; i5 < matches.length; i5++) {
        if (matches[i5][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i5][2] + "' has no space in starting.", getPositionFromMatch(matches[i5]));
        } else if (matches[i5][3] !== void 0 && matches[i5][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i5][2] + "' is without value.", getPositionFromMatch(matches[i5]));
        } else if (matches[i5][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i5][2] + "' is not allowed.", getPositionFromMatch(matches[i5]));
        }
        const attrName = matches[i5][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i5]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i5]));
        }
      }
      return true;
    }
    __name(validateAttributeString, "validateAttributeString");
    function validateNumberAmpersand(xmlData, i5) {
      let re = /\d/;
      if (xmlData[i5] === "x") {
        i5++;
        re = /[\da-fA-F]/;
      }
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === ";")
          return i5;
        if (!xmlData[i5].match(re))
          break;
      }
      return -1;
    }
    __name(validateNumberAmpersand, "validateNumberAmpersand");
    function validateAmpersand(xmlData, i5) {
      i5++;
      if (xmlData[i5] === ";")
        return -1;
      if (xmlData[i5] === "#") {
        i5++;
        return validateNumberAmpersand(xmlData, i5);
      }
      let count = 0;
      for (; i5 < xmlData.length; i5++, count++) {
        if (xmlData[i5].match(/\w/) && count < 20)
          continue;
        if (xmlData[i5] === ";")
          break;
        return -1;
      }
      return i5;
    }
    __name(validateAmpersand, "validateAmpersand");
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    __name(getErrorObject, "getErrorObject");
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    __name(validateAttrName, "validateAttrName");
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    __name(validateTagName, "validateTagName");
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        col: lines[lines.length - 1].length + 1
      };
    }
    __name(getLineNumberForPosition, "getLineNumberForPosition");
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
    __name(getPositionFromMatch, "getPositionFromMatch");
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      allowBooleanAttributes: false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: function(tagName, val2) {
        return val2;
      },
      attributeValueProcessor: function(attrName, val2) {
        return val2;
      },
      stopNodes: [],
      alwaysCreateTextNode: false,
      isArray: () => false,
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: function(tagName, jPath, attrs) {
        return tagName;
      }
    };
    var buildOptions = /* @__PURE__ */ __name(function(options) {
      return Object.assign({}, defaultOptions, options);
    }, "buildOptions");
    exports.buildOptions = buildOptions;
    exports.defaultOptions = defaultOptions;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module2) {
    "use strict";
    var XmlNode = class {
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val2) {
        if (key === "__proto__")
          key = "#__proto__";
        this.child.push({ [key]: val2 });
      }
      addChild(node) {
        if (node.tagname === "__proto__")
          node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    __name(XmlNode, "XmlNode");
    module2.exports = XmlNode;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module2) {
    var util = require_util();
    function readDocType(xmlData, i5) {
      const entities = {};
      if (xmlData[i5 + 3] === "O" && xmlData[i5 + 4] === "C" && xmlData[i5 + 5] === "T" && xmlData[i5 + 6] === "Y" && xmlData[i5 + 7] === "P" && xmlData[i5 + 8] === "E") {
        i5 = i5 + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for (; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "<" && !comment) {
            if (hasBody && isEntity(xmlData, i5)) {
              i5 += 7;
              [entityName, val, i5] = readEntityExp(xmlData, i5 + 1);
              if (val.indexOf("&") === -1)
                entities[validateEntityName(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val
                };
            } else if (hasBody && isElement(xmlData, i5))
              i5 += 8;
            else if (hasBody && isAttlist(xmlData, i5))
              i5 += 8;
            else if (hasBody && isNotation(xmlData, i5))
              i5 += 9;
            else if (isComment)
              comment = true;
            else
              throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i5] === ">") {
            if (comment) {
              if (xmlData[i5 - 1] === "-" && xmlData[i5 - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i5] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i5];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i: i5 };
    }
    __name(readDocType, "readDocType");
    function readEntityExp(xmlData, i5) {
      let entityName2 = "";
      for (; i5 < xmlData.length && (xmlData[i5] !== "'" && xmlData[i5] !== '"'); i5++) {
        entityName2 += xmlData[i5];
      }
      entityName2 = entityName2.trim();
      if (entityName2.indexOf(" ") !== -1)
        throw new Error("External entites are not supported");
      const startChar = xmlData[i5++];
      let val2 = "";
      for (; i5 < xmlData.length && xmlData[i5] !== startChar; i5++) {
        val2 += xmlData[i5];
      }
      return [entityName2, val2, i5];
    }
    __name(readEntityExp, "readEntityExp");
    function isComment(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "-" && xmlData[i5 + 3] === "-")
        return true;
      return false;
    }
    __name(isComment, "isComment");
    function isEntity(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "E" && xmlData[i5 + 3] === "N" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "I" && xmlData[i5 + 6] === "T" && xmlData[i5 + 7] === "Y")
        return true;
      return false;
    }
    __name(isEntity, "isEntity");
    function isElement(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "E" && xmlData[i5 + 3] === "L" && xmlData[i5 + 4] === "E" && xmlData[i5 + 5] === "M" && xmlData[i5 + 6] === "E" && xmlData[i5 + 7] === "N" && xmlData[i5 + 8] === "T")
        return true;
      return false;
    }
    __name(isElement, "isElement");
    function isAttlist(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "A" && xmlData[i5 + 3] === "T" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "L" && xmlData[i5 + 6] === "I" && xmlData[i5 + 7] === "S" && xmlData[i5 + 8] === "T")
        return true;
      return false;
    }
    __name(isAttlist, "isAttlist");
    function isNotation(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "N" && xmlData[i5 + 3] === "O" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "A" && xmlData[i5 + 6] === "T" && xmlData[i5 + 7] === "I" && xmlData[i5 + 8] === "O" && xmlData[i5 + 9] === "N")
        return true;
      return false;
    }
    __name(isNotation, "isNotation");
    function validateEntityName(name) {
      if (util.isName(name))
        return name;
      else
        throw new Error(`Invalid entity name ${name}`);
    }
    __name(validateEntityName, "validateEntityName");
    module2.exports = readDocType;
  }
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "node_modules/strnum/strnum.js"(exports, module2) {
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
    if (!Number.parseInt && window.parseInt) {
      Number.parseInt = window.parseInt;
    }
    if (!Number.parseFloat && window.parseFloat) {
      Number.parseFloat = window.parseFloat;
    }
    var consider = {
      hex: true,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string")
        return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
        return str;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign2 = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          const eNotation = match[4] || match[6];
          if (!options.leadingZeros && leadingZeros.length > 0 && sign2 && trimmedStr[2] !== ".")
            return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign2 && trimmedStr[1] !== ".")
            return str;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (eNotation) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "")
                return num;
              else if (numStr === numTrimmedByZeros)
                return num;
              else if (sign2 && numStr === "-" + numTrimmedByZeros)
                return num;
              else
                return str;
            }
            if (leadingZeros) {
              if (numTrimmedByZeros === numStr)
                return num;
              else if (sign2 + numTrimmedByZeros === numStr)
                return num;
              else
                return str;
            }
            if (trimmedStr === numStr)
              return num;
            else if (trimmedStr === sign2 + numStr)
              return num;
            return str;
          }
        } else {
          return str;
        }
      }
    }
    __name(toNumber, "toNumber");
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".")
          numStr = "0";
        else if (numStr[0] === ".")
          numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".")
          numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    __name(trimZeros, "trimZeros");
    module2.exports = toNumber;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module2) {
    "use strict";
    var util = require_util();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
    var OrderedObjParser = class {
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
      }
    };
    __name(OrderedObjParser, "OrderedObjParser");
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i5 = 0; i5 < entKeys.length; i5++) {
        const ent = entKeys[i5];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    __name(addExternalEntities, "addExternalEntities");
    function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val2 !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val2 = val2.trim();
        }
        if (val2.length > 0) {
          if (!escapeEntities)
            val2 = this.replaceEntitiesValue(val2);
          const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val2;
          } else if (typeof newval !== typeof val2 || newval !== val2) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val2.trim();
            if (trimmedVal === val2) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val2;
            }
          }
        }
      }
    }
    __name(parseTextData, "parseTextData");
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    __name(resolveNameSpace, "resolveNameSpace");
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i5 = 0; i5 < len; i5++) {
          const attrName = this.resolveNameSpace(matches[i5][1]);
          let oldVal = matches[i5][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            if (aName === "__proto__")
              aName = "#__proto__";
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    __name(buildAttributesMap, "buildAttributesMap");
    var parseXml = /* @__PURE__ */ __name(function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i5 = 0; i5 < xmlData.length; i5++) {
        const ch = xmlData[i5];
        if (ch === "<") {
          if (xmlData[i5 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i5, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i5 + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i5 = closeIndex;
          } else if (xmlData[i5 + 1] === "?") {
            let tagData = readTagExp(xmlData, i5, false, "?>");
            if (!tagData)
              throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath);
            }
            i5 = tagData.closeIndex + 1;
          } else if (xmlData.substr(i5 + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i5 + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i5 + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i5 = endIndex;
          } else if (xmlData.substr(i5 + 1, 2) === "!D") {
            const result = readDocType(xmlData, i5);
            this.docTypeEntities = result.entities;
            i5 = result.i;
          } else if (xmlData.substr(i5 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i5, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i5 + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
              if (val2 == void 0)
                val2 = "";
              currentNode.add(this.options.textNodeName, val2);
            }
            i5 = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i5, this.options.removeNSPrefix);
            let tagName = result.tagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                i5 = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i5 = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
                if (!result2)
                  throw new Error(`Unexpected end of ${tagName}`);
                i5 = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i5 = closeIndex;
            }
          }
        } else {
          textData += xmlData[i5];
        }
      }
      return xmlObj.child;
    }, "parseXml");
    function addChild(currentNode, childNode, jPath) {
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
      } else {
        currentNode.addChild(childNode);
      }
    }
    __name(addChild, "addChild");
    var replaceEntitiesValue = /* @__PURE__ */ __name(function(val2) {
      if (this.options.processEntities) {
        for (let entityName2 in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName2];
          val2 = val2.replace(entity.regx, entity.val);
        }
        for (let entityName2 in this.lastEntities) {
          const entity = this.lastEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName2 in this.htmlEntities) {
            const entity = this.htmlEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
        }
        val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val2;
    }, "replaceEntitiesValue");
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0)
          isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(
          textData,
          currentNode.tagname,
          jPath,
          false,
          currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    __name(saveTextToParentTag, "saveTextToParentTag");
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
          return true;
      }
      return false;
    }
    __name(isItStopNode, "isItStopNode");
    function tagExpWithClosingIndex(xmlData, i5, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i5; index < xmlData.length; index++) {
        let ch = xmlData[index];
        if (attrBoundary) {
          if (ch === attrBoundary)
            attrBoundary = "";
        } else if (ch === '"' || ch === "'") {
          attrBoundary = ch;
        } else if (ch === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch === "	") {
          ch = " ";
        }
        tagExp += ch;
      }
    }
    __name(tagExpWithClosingIndex, "tagExpWithClosingIndex");
    function findClosingIndex(xmlData, str, i5, errMsg) {
      const closingIndex = xmlData.indexOf(str, i5);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    __name(findClosingIndex, "findClosingIndex");
    function readTagExp(xmlData, i5, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i5 + 1, closingChar);
      if (!result)
        return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
        tagExp = tagExp.substr(separatorIndex + 1);
      }
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent
      };
    }
    __name(readTagExp, "readTagExp");
    function readStopNodeData(xmlData, tagName, i5) {
      const startIndex = i5;
      let openTagCount = 1;
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === "<") {
          if (xmlData[i5 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i5, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i5 + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i5),
                  i: closeIndex
                };
              }
            }
            i5 = closeIndex;
          } else if (xmlData[i5 + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i5 + 1, "StopNode is not closed.");
            i5 = closeIndex;
          } else if (xmlData.substr(i5 + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i5 + 3, "StopNode is not closed.");
            i5 = closeIndex;
          } else if (xmlData.substr(i5 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i5, "StopNode is not closed.") - 2;
            i5 = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i5, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i5 = tagData.closeIndex;
            }
          }
        }
      }
    }
    __name(readStopNodeData, "readStopNodeData");
    function parseValue(val2, shouldParse, options) {
      if (shouldParse && typeof val2 === "string") {
        const newval = val2.trim();
        if (newval === "true")
          return true;
        else if (newval === "false")
          return false;
        else
          return toNumber(val2, options);
      } else {
        if (util.isExist(val2)) {
          return val2;
        } else {
          return "";
        }
      }
    }
    __name(parseValue, "parseValue");
    module2.exports = OrderedObjParser;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
    "use strict";
    function prettify(node, options) {
      return compress(node, options);
    }
    __name(prettify, "prettify");
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i5 = 0; i5 < arr.length; i5++) {
        const tagObj = arr[i5];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0)
          newJpath = property;
        else
          newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0)
            text = tagObj[property];
          else
            text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val2 = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val2, options);
          if (tagObj[":@"]) {
            assignAttributes(val2, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val2 = val2[options.textNodeName];
          } else if (Object.keys(val2).length === 0) {
            if (options.alwaysCreateTextNode)
              val2[options.textNodeName] = "";
            else
              val2 = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val2);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val2];
            } else {
              compressedObj[property] = val2;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0)
          compressedObj[options.textNodeName] = text;
      } else if (text !== void 0)
        compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    __name(compress, "compress");
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i5 = 0; i5 < keys.length; i5++) {
        const key = keys[i5];
        if (key !== ":@")
          return key;
      }
    }
    __name(propName, "propName");
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i5 = 0; i5 < len; i5++) {
          const atrrName = keys[i5];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    __name(assignAttributes, "assignAttributes");
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    __name(isLeafTag, "isLeafTag");
    exports.prettify = prettify;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module2) {
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser2 = class {
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true)
            validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0)
          return orderedResult;
        else
          return prettify(orderedResult, this.options);
      }
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    __name(XMLParser2, "XMLParser");
    module2.exports = XMLParser2;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module2) {
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    __name(toXml, "toXml");
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      for (let i5 = 0; i5 < arr.length; i5++) {
        const tagObj = arr[i5];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0)
          newJPath = tagName;
        else
          newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode)
            xmlStr += tagStart + ">";
          else
            xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    __name(arrToStr, "arrToStr");
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i5 = 0; i5 < keys.length; i5++) {
        const key = keys[i5];
        if (key !== ":@")
          return key;
      }
    }
    __name(propName, "propName");
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    __name(attr_to_str, "attr_to_str");
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
          return true;
      }
      return false;
    }
    __name(isStopNode, "isStopNode");
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i5 = 0; i5 < options.entities.length; i5++) {
          const entity = options.entities[i5];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    __name(replaceEntitiesValue, "replaceEntitiesValue");
    module2.exports = toXml;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module2) {
    "use strict";
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: function(key, a5) {
        return a5;
      },
      attributeValueProcessor: function(attrName, a5) {
        return a5;
      },
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    __name(Builder, "Builder");
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val2 = "";
      for (let key in jObj) {
        if (typeof jObj[key] === "undefined") {
        } else if (jObj[key] === null) {
          if (key[0] === "?")
            val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          else
            val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        } else if (jObj[key] instanceof Date) {
          val2 += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val2 += this.replaceEntitiesValue(newval);
            } else {
              val2 += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          for (let j5 = 0; j5 < arrLen; j5++) {
            const item = jObj[key][j5];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?")
                val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else
                val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                listTagVal += this.j2x(item, level + 1).val;
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level);
              }
            } else {
              listTagVal += this.buildTextValNode(item, key, "", level);
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, "", level);
          }
          val2 += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j5 = 0; j5 < L; j5++) {
              attrStr += this.buildAttrPairStr(Ks[j5], "" + jObj[key][Ks[j5]]);
            }
          } else {
            val2 += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val: val2 };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val2) {
      val2 = this.options.attributeValueProcessor(attrName, "" + val2);
      val2 = this.replaceEntitiesValue(val2);
      if (this.options.suppressBooleanAttributes && val2 === "true") {
        return " " + attrName;
      } else
        return " " + attrName + '="' + val2 + '"';
    };
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    __name(processTextOrObjNode, "processTextOrObjNode");
    Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
      if (val2 === "") {
        if (key[0] === "?")
          return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if (attrStr && val2.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode)
          closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val2);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i5 = 0; i5 < this.options.entities.length; i5++) {
          const entity = this.options.entities[i5];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    __name(indentate, "indentate");
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix)) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    __name(isAttribute, "isAttribute");
    module2.exports = Builder;
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/src/fxp.js"(exports, module2) {
    "use strict";
    var validator = require_validator();
    var XMLParser2 = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module2.exports = {
      XMLParser: XMLParser2,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// node_modules/aws-crt/dist/common/promise.js
var require_promise = __commonJS({
  "node_modules/aws-crt/dist/common/promise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.newLiftedPromise = exports.makeSelfCleaningPromise = void 0;
    function makeSelfCleaningPromise(promise, cleaner) {
      if (!cleaner) {
        return promise;
      }
      return promise.finally(() => {
        cleaner();
      });
    }
    __name(makeSelfCleaningPromise, "makeSelfCleaningPromise");
    exports.makeSelfCleaningPromise = makeSelfCleaningPromise;
    function newLiftedPromise(promiseBody) {
      let localResolve = void 0;
      let localReject = void 0;
      let promise = new Promise((resolve, reject) => {
        localResolve = resolve;
        localReject = reject;
      });
      if (!localResolve || !localReject) {
        throw new Error("Failed to bind resolve and reject when making lifted promise");
      }
      if (promiseBody) {
        promiseBody(localResolve, localReject);
      }
      return {
        promise,
        resolve: localResolve,
        reject: localReject
      };
    }
    __name(newLiftedPromise, "newLiftedPromise");
    exports.newLiftedPromise = newLiftedPromise;
  }
});

// node_modules/aws-crt/dist/common/cancel.js
var require_cancel = __commonJS({
  "node_modules/aws-crt/dist/common/cancel.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      var desc = Object.getOwnPropertyDescriptor(m5, k5);
      if (!desc || ("get" in desc ? !m5.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m5[k5];
        } };
      }
      Object.defineProperty(o5, k22, desc);
    } : function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      o5[k22] = m5[k5];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o5, v3) {
      Object.defineProperty(o5, "default", { enumerable: true, value: v3 });
    } : function(o5, v3) {
      o5["default"] = v3;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k5 in mod)
          if (k5 !== "default" && Object.prototype.hasOwnProperty.call(mod, k5))
            __createBinding2(result, mod, k5);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.newCancellablePromiseFromNextEvent = exports.CancelController = exports.EVENT_NAME = void 0;
    var events_1 = __require("events");
    var promise = __importStar2(require_promise());
    exports.EVENT_NAME = "cancelled";
    var CancelController = class {
      constructor(options) {
        this.cancelled = false;
        if (options && options.emitterFactory) {
          this.emitter = options.emitterFactory();
        } else {
          this.emitter = new events_1.EventEmitter();
        }
      }
      cancel() {
        if (!this.cancelled) {
          this.cancelled = true;
          this.emitter.emit(exports.EVENT_NAME);
          this.emitter.removeAllListeners(exports.EVENT_NAME);
        }
      }
      hasBeenCancelled() {
        return this.cancelled;
      }
      addListener(listener) {
        if (this.cancelled) {
          listener();
          return void 0;
        }
        this.emitter.on(exports.EVENT_NAME, listener);
        return () => {
          this.emitter.removeListener(exports.EVENT_NAME, listener);
        };
      }
    };
    __name(CancelController, "CancelController");
    exports.CancelController = CancelController;
    function newCancellablePromiseFromNextEvent(config) {
      let onEvent = void 0;
      let cancelRemoveListener = void 0;
      let liftedPromise = promise.newLiftedPromise();
      onEvent = /* @__PURE__ */ __name((eventData) => {
        try {
          if (config.eventDataTransformer) {
            liftedPromise.resolve(config.eventDataTransformer(eventData));
          } else {
            liftedPromise.resolve(eventData);
          }
        } catch (err) {
          liftedPromise.reject(err);
        }
      }, "onEvent");
      config.emitter.addListener(config.eventName, onEvent);
      if (config.cancelController) {
        cancelRemoveListener = config.cancelController.addListener(() => {
          liftedPromise.reject(config.cancelMessage);
        });
      }
      return promise.makeSelfCleaningPromise(liftedPromise.promise, () => {
        if (onEvent) {
          config.emitter.removeListener(config.eventName, onEvent);
        }
        if (cancelRemoveListener) {
          cancelRemoveListener();
        }
      });
    }
    __name(newCancellablePromiseFromNextEvent, "newCancellablePromiseFromNextEvent");
    exports.newCancellablePromiseFromNextEvent = newCancellablePromiseFromNextEvent;
  }
});

// node_modules/aws-crt/package.json
var require_package = __commonJS({
  "node_modules/aws-crt/package.json"(exports, module2) {
    module2.exports = {
      name: "aws-crt",
      version: "1.15.20",
      description: "NodeJS/browser bindings to the aws-c-* libraries",
      homepage: "https://github.com/awslabs/aws-crt-nodejs",
      repository: {
        type: "git",
        url: "git+https://github.com/awslabs/aws-crt-nodejs.git"
      },
      contributors: [
        "AWS Common Runtime Team <aws-sdk-common-runtime@amazon.com>"
      ],
      license: "Apache-2.0",
      main: "./dist/index.js",
      browser: "./dist.browser/browser.js",
      types: "./dist/index.d.ts",
      scripts: {
        tsc: "node ./scripts/tsc.js",
        test: "npm run test:native",
        "test:node": "npm run test:native",
        "test:native": "npx jest --runInBand --verbose --config test/native/jest.config.js --forceExit",
        "test:browser": "npx jest --runInBand --verbose --config test/browser/jest.config.js --forceExit",
        "test:browser:ci": "npm run install:puppeteer && npm run test:browser",
        "install:puppeteer": "npm install --save-dev jest-puppeteer puppeteer @types/puppeteer",
        prepare: "node ./scripts/tsc.js && node ./scripts/install.js",
        install: "node ./scripts/install.js"
      },
      devDependencies: {
        "@types/crypto-js": "^3.1.43",
        "@types/jest": "^27.0.1",
        "@types/node": "^10.17.54",
        "@types/prettier": "2.6.0",
        "@types/puppeteer": "^5.4.7",
        "@types/uuid": "^3.4.8",
        "@types/ws": "^7.4.7",
        "aws-sdk": "^2.848.0",
        "cmake-js": "^6.3.2",
        "https-proxy-agent": "^5.0.1",
        jest: "^27.2.1",
        "jest-puppeteer": "^5.0.4",
        "jest-runtime": "^27.2.1",
        puppeteer: "^3.3.0",
        tar: "^6.1.11",
        "ts-jest": "^27.0.5",
        typedoc: "^0.22.18",
        "typedoc-plugin-merge-modules": "^3.1.0",
        typescript: "^4.7.4",
        uuid: "^8.3.2",
        yargs: "^17.2.1"
      },
      dependencies: {
        "@aws-sdk/util-utf8-browser": "^3.109.0",
        "@httptoolkit/websocket-stream": "^6.0.0",
        axios: "^0.24.0",
        buffer: "^6.0.3",
        "cmake-js": "^6.3.2",
        "crypto-js": "^4.0.0",
        mqtt: "^4.3.7",
        process: "^0.11.10",
        tar: "^6.1.11"
      }
    };
  }
});

// node_modules/aws-crt/dist/common/platform.js
var require_platform = __commonJS({
  "node_modules/aws-crt/dist/common/platform.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crt_version = exports.package_info = exports.is_browser = exports.is_nodejs = void 0;
    function is_nodejs() {
      return typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node !== "undefined";
    }
    __name(is_nodejs, "is_nodejs");
    exports.is_nodejs = is_nodejs;
    function is_browser() {
      return !is_nodejs();
    }
    __name(is_browser, "is_browser");
    exports.is_browser = is_browser;
    function package_info() {
      try {
        const pkg = require_package();
        return pkg;
      } catch (err) {
        return {
          name: "aws-crt-nodejs",
          version: "UNKNOWN"
        };
      }
    }
    __name(package_info, "package_info");
    exports.package_info = package_info;
    function crt_version() {
      const pkg = package_info();
      return pkg.version;
    }
    __name(crt_version, "crt_version");
    exports.crt_version = crt_version;
  }
});

// node_modules/aws-crt/dist/common/resource_safety.js
var require_resource_safety = __commonJS({
  "node_modules/aws-crt/dist/common/resource_safety.js"(exports) {
    "use strict";
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.using = void 0;
    function using(resource, func) {
      return __awaiter2(this, void 0, void 0, function* () {
        try {
          yield func(resource);
        } finally {
          resource.close();
        }
      });
    }
    __name(using, "using");
    exports.using = using;
  }
});

// node_modules/aws-crt/dist/native/binding.js
var require_binding = __commonJS({
  "node_modules/aws-crt/dist/native/binding.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      var desc = Object.getOwnPropertyDescriptor(m5, k5);
      if (!desc || ("get" in desc ? !m5.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m5[k5];
        } };
      }
      Object.defineProperty(o5, k22, desc);
    } : function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      o5[k22] = m5[k5];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o5, v3) {
      Object.defineProperty(o5, "default", { enumerable: true, value: v3 });
    } : function(o5, v3) {
      o5["default"] = v3;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k5 in mod)
          if (k5 !== "default" && Object.prototype.hasOwnProperty.call(mod, k5))
            __createBinding2(result, mod, k5);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var path = __importStar2(__require("path"));
    var os_1 = __require("os");
    var fs_1 = __require("fs");
    var process_1 = __require("process");
    var upgrade_string = "Please upgrade to node >=10.16.0, or use the provided browser implementation.";
    if ("napi" in process_1.versions) {
      const napi_version = parseInt(process_1.versions["napi"]);
      if (napi_version < 4) {
        throw new Error("The AWS CRT native implementation requires that NAPI version 4 be present. " + upgrade_string);
      }
    } else {
      throw new Error("The current runtime is not reporting an NAPI version. " + upgrade_string);
    }
    var binary_name = "aws-crt-nodejs";
    var platformDir = `${os_1.platform}-${os_1.arch}`;
    var source_root = path.resolve(__dirname, "..", "..");
    var dist = path.join(source_root, "dist");
    if ((0, fs_1.existsSync)(dist)) {
      source_root = dist;
    }
    var bin_path = path.resolve(source_root, "bin");
    var search_paths = [
      path.join(bin_path, platformDir, binary_name)
    ];
    var binding;
    for (const path2 of search_paths) {
      if ((0, fs_1.existsSync)(path2 + ".node")) {
        binding = __require(path2);
        break;
      }
    }
    if (binding == void 0) {
      throw new Error("AWS CRT binary not present in any of the following locations:\n	" + search_paths.join("\n	"));
    }
    exports.default = binding;
  }
});

// node_modules/aws-crt/dist/native/error.js
var require_error = __commonJS({
  "node_modules/aws-crt/dist/native/error.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CrtError = void 0;
    var binding_1 = __importDefault2(require_binding());
    var CrtError = class extends Error {
      constructor(error) {
        super(extract_message(error));
        this.error = error;
        this.error_code = extract_code(error);
        this.error_name = extract_name(error);
      }
    };
    __name(CrtError, "CrtError");
    exports.CrtError = CrtError;
    function extract_message(error) {
      if (typeof error === "number") {
        return binding_1.default.error_code_to_string(error);
      } else if (error instanceof CrtError) {
        return error.message;
      }
      return error.toString();
    }
    __name(extract_message, "extract_message");
    function extract_code(error) {
      if (typeof error === "number") {
        return error;
      } else if (error instanceof CrtError) {
        return error.error_code;
      }
      return void 0;
    }
    __name(extract_code, "extract_code");
    function extract_name(error) {
      if (typeof error === "number") {
        return binding_1.default.error_code_to_name(error);
      } else if (error instanceof CrtError) {
        return error.error_name;
      }
      return void 0;
    }
    __name(extract_name, "extract_name");
  }
});

// node_modules/aws-crt/dist/native/native_resource.js
var require_native_resource = __commonJS({
  "node_modules/aws-crt/dist/native/native_resource.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NativeResourceMixin = exports.NativeResource = void 0;
    var NativeResource = class {
      constructor(handle) {
        this.handle = handle;
      }
      native_handle() {
        return this.handle;
      }
    };
    __name(NativeResource, "NativeResource");
    exports.NativeResource = NativeResource;
    function NativeResourceMixin(Base) {
      return class extends Base {
        constructor(...args) {
          const handle = args.shift();
          super(...args);
          this._handle = handle;
        }
        _super(handle) {
          this._handle = handle;
        }
        native_handle() {
          return this._handle;
        }
      };
    }
    __name(NativeResourceMixin, "NativeResourceMixin");
    exports.NativeResourceMixin = NativeResourceMixin;
  }
});

// node_modules/aws-crt/dist/common/io.js
var require_io = __commonJS({
  "node_modules/aws-crt/dist/common/io.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SocketDomain = exports.SocketType = exports.TlsVersion = void 0;
    var TlsVersion;
    (function(TlsVersion2) {
      TlsVersion2[TlsVersion2["SSLv3"] = 0] = "SSLv3";
      TlsVersion2[TlsVersion2["TLSv1"] = 1] = "TLSv1";
      TlsVersion2[TlsVersion2["TLSv1_1"] = 2] = "TLSv1_1";
      TlsVersion2[TlsVersion2["TLSv1_2"] = 3] = "TLSv1_2";
      TlsVersion2[TlsVersion2["TLSv1_3"] = 4] = "TLSv1_3";
      TlsVersion2[TlsVersion2["Default"] = 128] = "Default";
    })(TlsVersion = exports.TlsVersion || (exports.TlsVersion = {}));
    var SocketType;
    (function(SocketType2) {
      SocketType2[SocketType2["STREAM"] = 0] = "STREAM";
      SocketType2[SocketType2["DGRAM"] = 1] = "DGRAM";
    })(SocketType = exports.SocketType || (exports.SocketType = {}));
    var SocketDomain;
    (function(SocketDomain2) {
      SocketDomain2[SocketDomain2["IPV4"] = 0] = "IPV4";
      SocketDomain2[SocketDomain2["IPV6"] = 1] = "IPV6";
      SocketDomain2[SocketDomain2["LOCAL"] = 2] = "LOCAL";
    })(SocketDomain = exports.SocketDomain || (exports.SocketDomain = {}));
  }
});

// node_modules/aws-crt/dist/native/io.js
var require_io2 = __commonJS({
  "node_modules/aws-crt/dist/native/io.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pkcs11Lib = exports.TlsConnectionOptions = exports.ServerTlsContext = exports.ClientTlsContext = exports.TlsContext = exports.TlsContextOptions = exports.SocketOptions = exports.ClientBootstrap = exports.InputStream = exports.is_alpn_available = exports.enable_logging = exports.LogLevel = exports.error_code_to_name = exports.error_code_to_string = exports.SocketDomain = exports.SocketType = exports.TlsVersion = void 0;
    var binding_1 = __importDefault2(require_binding());
    var native_resource_1 = require_native_resource();
    var io_1 = require_io();
    var io_2 = require_io();
    Object.defineProperty(exports, "TlsVersion", { enumerable: true, get: function() {
      return io_2.TlsVersion;
    } });
    Object.defineProperty(exports, "SocketType", { enumerable: true, get: function() {
      return io_2.SocketType;
    } });
    Object.defineProperty(exports, "SocketDomain", { enumerable: true, get: function() {
      return io_2.SocketDomain;
    } });
    var error_1 = require_error();
    function error_code_to_string(error_code) {
      return binding_1.default.error_code_to_string(error_code);
    }
    __name(error_code_to_string, "error_code_to_string");
    exports.error_code_to_string = error_code_to_string;
    function error_code_to_name(error_code) {
      return binding_1.default.error_code_to_name(error_code);
    }
    __name(error_code_to_name, "error_code_to_name");
    exports.error_code_to_name = error_code_to_name;
    var LogLevel;
    (function(LogLevel2) {
      LogLevel2[LogLevel2["NONE"] = 0] = "NONE";
      LogLevel2[LogLevel2["FATAL"] = 1] = "FATAL";
      LogLevel2[LogLevel2["ERROR"] = 2] = "ERROR";
      LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
      LogLevel2[LogLevel2["INFO"] = 4] = "INFO";
      LogLevel2[LogLevel2["DEBUG"] = 5] = "DEBUG";
      LogLevel2[LogLevel2["TRACE"] = 6] = "TRACE";
    })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
    function enable_logging(level) {
      binding_1.default.io_logging_enable(level);
    }
    __name(enable_logging, "enable_logging");
    exports.enable_logging = enable_logging;
    function is_alpn_available() {
      return binding_1.default.is_alpn_available();
    }
    __name(is_alpn_available, "is_alpn_available");
    exports.is_alpn_available = is_alpn_available;
    var InputStream = class extends native_resource_1.NativeResource {
      constructor(source) {
        super(binding_1.default.io_input_stream_new(16 * 1024));
        this.source = source;
        this.source.on("data", (data) => {
          data = Buffer.isBuffer(data) ? data : Buffer.from(data.toString());
          binding_1.default.io_input_stream_append(this.native_handle(), data);
        });
        this.source.on("end", () => {
          binding_1.default.io_input_stream_append(this.native_handle(), void 0);
        });
      }
    };
    __name(InputStream, "InputStream");
    exports.InputStream = InputStream;
    var ClientBootstrap = class extends native_resource_1.NativeResource {
      constructor() {
        super(binding_1.default.io_client_bootstrap_new());
      }
    };
    __name(ClientBootstrap, "ClientBootstrap");
    exports.ClientBootstrap = ClientBootstrap;
    var SocketOptions = class extends native_resource_1.NativeResource {
      constructor(type = io_1.SocketType.STREAM, domain = io_1.SocketDomain.IPV6, connect_timeout_ms = 5e3, keepalive = false, keep_alive_interval_sec = 0, keep_alive_timeout_sec = 0, keep_alive_max_failed_probes = 0) {
        super(binding_1.default.io_socket_options_new(type, domain, connect_timeout_ms, keep_alive_interval_sec, keep_alive_timeout_sec, keep_alive_max_failed_probes, keepalive));
      }
    };
    __name(SocketOptions, "SocketOptions");
    exports.SocketOptions = SocketOptions;
    var TlsContextOptions = class {
      constructor() {
        this.min_tls_version = io_1.TlsVersion.Default;
        this.alpn_list = [];
        this.verify_peer = true;
      }
      override_default_trust_store_from_path(ca_dirpath, ca_filepath) {
        this.ca_dirpath = ca_dirpath;
        this.ca_filepath = ca_filepath;
      }
      override_default_trust_store(certificate_authority) {
        this.certificate_authority = certificate_authority;
      }
      static create_client_with_mtls(certificate, private_key) {
        let opt = new TlsContextOptions();
        opt.certificate = certificate;
        opt.private_key = private_key;
        opt.verify_peer = true;
        return opt;
      }
      static create_client_with_mtls_from_path(certificate_filepath, private_key_filepath) {
        let opt = new TlsContextOptions();
        opt.certificate_filepath = certificate_filepath;
        opt.private_key_filepath = private_key_filepath;
        opt.verify_peer = true;
        return opt;
      }
      static create_client_with_mtls_pkcs12_from_path(pkcs12_filepath, pkcs12_password) {
        let opt = new TlsContextOptions();
        opt.pkcs12_filepath = pkcs12_filepath;
        opt.pkcs12_password = pkcs12_password;
        opt.verify_peer = true;
        return opt;
      }
      static create_client_with_mtls_pkcs_from_path(pkcs12_filepath, pkcs12_password) {
        return this.create_client_with_mtls_pkcs12_from_path(pkcs12_filepath, pkcs12_password);
      }
      static create_client_with_mtls_pkcs11(options) {
        let opt = new TlsContextOptions();
        opt.pkcs11_options = options;
        opt.verify_peer = true;
        return opt;
      }
      static create_client_with_mtls_windows_cert_store_path(certificate_path) {
        let opt = new TlsContextOptions();
        opt.windows_cert_store_path = certificate_path;
        opt.verify_peer = true;
        return opt;
      }
      static create_server_with_mtls_from_path(certificate_filepath, private_key_filepath) {
        let opt = new TlsContextOptions();
        opt.certificate_filepath = certificate_filepath;
        opt.private_key_filepath = private_key_filepath;
        opt.verify_peer = false;
        return opt;
      }
      static create_server_with_mtls_pkcs_from_path(pkcs12_filepath, pkcs12_password) {
        let opt = new TlsContextOptions();
        opt.pkcs12_filepath = pkcs12_filepath;
        opt.pkcs12_password = pkcs12_password;
        opt.verify_peer = false;
        return opt;
      }
    };
    __name(TlsContextOptions, "TlsContextOptions");
    exports.TlsContextOptions = TlsContextOptions;
    var TlsContext = class extends native_resource_1.NativeResource {
      constructor(ctx_opt) {
        if (ctx_opt == null || ctx_opt == void 0) {
          throw new error_1.CrtError("TlsContext constructor: ctx_opt not defined");
        }
        super(binding_1.default.io_tls_ctx_new(ctx_opt.min_tls_version, ctx_opt.ca_filepath, ctx_opt.ca_dirpath, ctx_opt.certificate_authority, ctx_opt.alpn_list && ctx_opt.alpn_list.length > 0 ? ctx_opt.alpn_list.join(";") : void 0, ctx_opt.certificate_filepath, ctx_opt.certificate, ctx_opt.private_key_filepath, ctx_opt.private_key, ctx_opt.pkcs12_filepath, ctx_opt.pkcs12_password, ctx_opt.pkcs11_options, ctx_opt.windows_cert_store_path, ctx_opt.verify_peer));
      }
    };
    __name(TlsContext, "TlsContext");
    exports.TlsContext = TlsContext;
    var ClientTlsContext = class extends TlsContext {
      constructor(ctx_opt) {
        if (!ctx_opt) {
          ctx_opt = new TlsContextOptions();
          ctx_opt.verify_peer = true;
        }
        super(ctx_opt);
      }
    };
    __name(ClientTlsContext, "ClientTlsContext");
    exports.ClientTlsContext = ClientTlsContext;
    var ServerTlsContext = class extends TlsContext {
      constructor(ctx_opt) {
        if (!ctx_opt) {
          ctx_opt = new TlsContextOptions();
          ctx_opt.verify_peer = false;
        }
        super(ctx_opt);
      }
    };
    __name(ServerTlsContext, "ServerTlsContext");
    exports.ServerTlsContext = ServerTlsContext;
    var TlsConnectionOptions = class extends native_resource_1.NativeResource {
      constructor(tls_ctx, server_name, alpn_list = []) {
        if (tls_ctx == null || tls_ctx == void 0) {
          throw new error_1.CrtError("TlsConnectionOptions constructor: tls_ctx not defined");
        }
        super(binding_1.default.io_tls_connection_options_new(tls_ctx.native_handle(), server_name, alpn_list && alpn_list.length > 0 ? alpn_list.join(";") : void 0));
        this.tls_ctx = tls_ctx;
        this.server_name = server_name;
        this.alpn_list = alpn_list;
      }
    };
    __name(TlsConnectionOptions, "TlsConnectionOptions");
    exports.TlsConnectionOptions = TlsConnectionOptions;
    var Pkcs11Lib = class extends native_resource_1.NativeResource {
      constructor(path, behavior = Pkcs11Lib.InitializeFinalizeBehavior.DEFAULT) {
        super(binding_1.default.io_pkcs11_lib_new(path, behavior));
      }
      close() {
        binding_1.default.io_pkcs11_lib_close(this.native_handle());
      }
    };
    __name(Pkcs11Lib, "Pkcs11Lib");
    exports.Pkcs11Lib = Pkcs11Lib;
    (function(Pkcs11Lib2) {
      let InitializeFinalizeBehavior;
      (function(InitializeFinalizeBehavior2) {
        InitializeFinalizeBehavior2[InitializeFinalizeBehavior2["DEFAULT"] = 0] = "DEFAULT";
        InitializeFinalizeBehavior2[InitializeFinalizeBehavior2["OMIT"] = 1] = "OMIT";
        InitializeFinalizeBehavior2[InitializeFinalizeBehavior2["STRICT"] = 2] = "STRICT";
      })(InitializeFinalizeBehavior = Pkcs11Lib2.InitializeFinalizeBehavior || (Pkcs11Lib2.InitializeFinalizeBehavior = {}));
    })(Pkcs11Lib = exports.Pkcs11Lib || (exports.Pkcs11Lib = {}));
  }
});

// node_modules/aws-crt/dist/native/auth.js
var require_auth = __commonJS({
  "node_modules/aws-crt/dist/native/auth.js"(exports) {
    "use strict";
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.aws_verify_sigv4a_signing = exports.aws_sign_request = exports.AwsSignedBodyHeaderType = exports.AwsSignedBodyValue = exports.AwsSignatureType = exports.AwsSigningAlgorithm = exports.AwsCredentialsProvider = void 0;
    var binding_1 = __importDefault2(require_binding());
    var error_1 = require_error();
    var io_1 = require_io2();
    var AwsCredentialsProvider = class extends binding_1.default.AwsCredentialsProvider {
      static newDefault(bootstrap = void 0) {
        return super.newDefault(bootstrap != null ? bootstrap.native_handle() : null);
      }
      static newStatic(access_key, secret_key, session_token) {
        return super.newStatic(access_key, secret_key, session_token);
      }
      static newCognito(config) {
        if (config == null || config == void 0) {
          throw new error_1.CrtError("AwsCredentialsProvider newCognito: Cognito config not defined");
        }
        return super.newCognito(config, config.tlsContext != null ? config.tlsContext.native_handle() : new io_1.ClientTlsContext().native_handle(), config.bootstrap != null ? config.bootstrap.native_handle() : null, config.httpProxyOptions ? config.httpProxyOptions.create_native_handle() : null);
      }
      static newX509(config) {
        if (config == null || config == void 0) {
          throw new error_1.CrtError("AwsCredentialsProvider newX509: X509 config not defined");
        }
        return super.newX509(config, config.tlsContext.native_handle(), config.httpProxyOptions ? config.httpProxyOptions.create_native_handle() : null);
      }
    };
    __name(AwsCredentialsProvider, "AwsCredentialsProvider");
    exports.AwsCredentialsProvider = AwsCredentialsProvider;
    var AwsSigningAlgorithm;
    (function(AwsSigningAlgorithm2) {
      AwsSigningAlgorithm2[AwsSigningAlgorithm2["SigV4"] = 0] = "SigV4";
      AwsSigningAlgorithm2[AwsSigningAlgorithm2["SigV4Asymmetric"] = 1] = "SigV4Asymmetric";
    })(AwsSigningAlgorithm = exports.AwsSigningAlgorithm || (exports.AwsSigningAlgorithm = {}));
    var AwsSignatureType;
    (function(AwsSignatureType2) {
      AwsSignatureType2[AwsSignatureType2["HttpRequestViaHeaders"] = 0] = "HttpRequestViaHeaders";
      AwsSignatureType2[AwsSignatureType2["HttpRequestViaQueryParams"] = 1] = "HttpRequestViaQueryParams";
      AwsSignatureType2[AwsSignatureType2["HttpRequestChunk"] = 2] = "HttpRequestChunk";
      AwsSignatureType2[AwsSignatureType2["HttpRequestEvent"] = 3] = "HttpRequestEvent";
    })(AwsSignatureType = exports.AwsSignatureType || (exports.AwsSignatureType = {}));
    var AwsSignedBodyValue;
    (function(AwsSignedBodyValue2) {
      AwsSignedBodyValue2["EmptySha256"] = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      AwsSignedBodyValue2["UnsignedPayload"] = "UNSIGNED-PAYLOAD";
      AwsSignedBodyValue2["StreamingAws4HmacSha256Payload"] = "STREAMING-AWS4-HMAC-SHA256-PAYLOAD";
      AwsSignedBodyValue2["StreamingAws4HmacSha256Events"] = "STREAMING-AWS4-HMAC-SHA256-EVENTS";
    })(AwsSignedBodyValue = exports.AwsSignedBodyValue || (exports.AwsSignedBodyValue = {}));
    var AwsSignedBodyHeaderType;
    (function(AwsSignedBodyHeaderType2) {
      AwsSignedBodyHeaderType2[AwsSignedBodyHeaderType2["None"] = 0] = "None";
      AwsSignedBodyHeaderType2[AwsSignedBodyHeaderType2["XAmzContentSha256"] = 1] = "XAmzContentSha256";
    })(AwsSignedBodyHeaderType = exports.AwsSignedBodyHeaderType || (exports.AwsSignedBodyHeaderType = {}));
    function aws_sign_request(request2, config) {
      return __awaiter2(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          try {
            binding_1.default.aws_sign_request(request2, config, (error_code) => {
              if (error_code == 0) {
                resolve(request2);
              } else {
                reject(new error_1.CrtError(error_code));
              }
            });
          } catch (error) {
            reject(error);
          }
        });
      });
    }
    __name(aws_sign_request, "aws_sign_request");
    exports.aws_sign_request = aws_sign_request;
    function aws_verify_sigv4a_signing(request2, config, expected_canonical_request, signature, ecc_key_pub_x, ecc_key_pub_y) {
      return binding_1.default.aws_verify_sigv4a_signing(request2, config, expected_canonical_request, signature, ecc_key_pub_x, ecc_key_pub_y);
    }
    __name(aws_verify_sigv4a_signing, "aws_verify_sigv4a_signing");
    exports.aws_verify_sigv4a_signing = aws_verify_sigv4a_signing;
  }
});

// node_modules/aws-crt/dist/native/checksums.js
var require_checksums = __commonJS({
  "node_modules/aws-crt/dist/native/checksums.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crc32c = exports.crc32 = void 0;
    var binding_1 = __importDefault2(require_binding());
    function crc32(data, previous) {
      return binding_1.default.checksums_crc32(data, previous);
    }
    __name(crc32, "crc32");
    exports.crc32 = crc32;
    function crc32c(data, previous) {
      return binding_1.default.checksums_crc32c(data, previous);
    }
    __name(crc32c, "crc32c");
    exports.crc32c = crc32c;
  }
});

// node_modules/aws-crt/dist/native/crt.js
var require_crt = __commonJS({
  "node_modules/aws-crt/dist/native/crt.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.native_memory_dump = exports.native_memory = void 0;
    var binding_1 = __importDefault2(require_binding());
    function native_memory() {
      return binding_1.default.native_memory();
    }
    __name(native_memory, "native_memory");
    exports.native_memory = native_memory;
    function native_memory_dump() {
      return binding_1.default.native_memory_dump();
    }
    __name(native_memory_dump, "native_memory_dump");
    exports.native_memory_dump = native_memory_dump;
  }
});

// node_modules/aws-crt/dist/native/crypto.js
var require_crypto = __commonJS({
  "node_modules/aws-crt/dist/native/crypto.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hmac_sha256 = exports.Sha256Hmac = exports.hash_sha1 = exports.Sha1Hash = exports.hash_sha256 = exports.Sha256Hash = exports.hash_md5 = exports.Md5Hash = void 0;
    var binding_1 = __importDefault2(require_binding());
    var native_resource_1 = require_native_resource();
    var Hash2 = class extends native_resource_1.NativeResource {
      update(data) {
        binding_1.default.hash_update(this.native_handle(), data);
      }
      finalize(truncate_to) {
        return binding_1.default.hash_digest(this.native_handle(), truncate_to);
      }
      constructor(hash_handle) {
        super(hash_handle);
      }
    };
    __name(Hash2, "Hash");
    var Md5Hash = class extends Hash2 {
      constructor() {
        super(binding_1.default.hash_md5_new());
      }
    };
    __name(Md5Hash, "Md5Hash");
    exports.Md5Hash = Md5Hash;
    function hash_md5(data, truncate_to) {
      return binding_1.default.hash_md5_compute(data, truncate_to);
    }
    __name(hash_md5, "hash_md5");
    exports.hash_md5 = hash_md5;
    var Sha256Hash = class extends Hash2 {
      constructor() {
        super(binding_1.default.hash_sha256_new());
      }
    };
    __name(Sha256Hash, "Sha256Hash");
    exports.Sha256Hash = Sha256Hash;
    function hash_sha256(data, truncate_to) {
      return binding_1.default.hash_sha256_compute(data, truncate_to);
    }
    __name(hash_sha256, "hash_sha256");
    exports.hash_sha256 = hash_sha256;
    var Sha1Hash = class extends Hash2 {
      constructor() {
        super(binding_1.default.hash_sha1_new());
      }
    };
    __name(Sha1Hash, "Sha1Hash");
    exports.Sha1Hash = Sha1Hash;
    function hash_sha1(data, truncate_to) {
      return binding_1.default.hash_sha1_compute(data, truncate_to);
    }
    __name(hash_sha1, "hash_sha1");
    exports.hash_sha1 = hash_sha1;
    var Hmac = class extends native_resource_1.NativeResource {
      update(data) {
        binding_1.default.hmac_update(this.native_handle(), data);
      }
      finalize(truncate_to) {
        return binding_1.default.hmac_digest(this.native_handle(), truncate_to);
      }
      constructor(hash_handle) {
        super(hash_handle);
      }
    };
    __name(Hmac, "Hmac");
    var Sha256Hmac = class extends Hmac {
      constructor(secret) {
        super(binding_1.default.hmac_sha256_new(secret));
      }
    };
    __name(Sha256Hmac, "Sha256Hmac");
    exports.Sha256Hmac = Sha256Hmac;
    function hmac_sha256(secret, data, truncate_to) {
      return binding_1.default.hmac_sha256_compute(secret, data, truncate_to);
    }
    __name(hmac_sha256, "hmac_sha256");
    exports.hmac_sha256 = hmac_sha256;
  }
});

// node_modules/aws-crt/dist/common/event.js
var require_event = __commonJS({
  "node_modules/aws-crt/dist/common/event.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BufferedEventEmitter = void 0;
    var events_1 = __require("events");
    var BufferedEvent = class {
      constructor(event, args) {
        this.event = event;
        this.args = args;
      }
    };
    __name(BufferedEvent, "BufferedEvent");
    var BufferedEventEmitter = class extends events_1.EventEmitter {
      constructor() {
        super();
        this.corked = false;
      }
      cork() {
        this.corked = true;
      }
      uncork() {
        this.corked = false;
        while (this.eventQueue) {
          const event = this.eventQueue;
          super.emit(event.event, ...event.args);
          this.eventQueue = this.eventQueue.next;
        }
      }
      emit(event, ...args) {
        if (this.corked) {
          let last = this.lastQueuedEvent;
          this.lastQueuedEvent = new BufferedEvent(event, args);
          if (last) {
            last.next = this.lastQueuedEvent;
          } else {
            this.eventQueue = this.lastQueuedEvent;
          }
          return this.listeners(event).length > 0;
        }
        return super.emit(event, ...args);
      }
    };
    __name(BufferedEventEmitter, "BufferedEventEmitter");
    exports.BufferedEventEmitter = BufferedEventEmitter;
  }
});

// node_modules/aws-crt/dist/native/eventstream_utils.js
var require_eventstream_utils = __commonJS({
  "node_modules/aws-crt/dist/native/eventstream_utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unmarshalInt64BigintFromBuffer = exports.marshalInt64BigintAsBuffer = exports.MIN_INT64 = exports.MAX_INT64 = exports.MIN_INT32 = exports.MAX_INT32 = exports.MIN_INT16 = exports.MAX_INT16 = exports.MIN_INT8 = exports.MAX_INT8 = void 0;
    var error_1 = require_error();
    exports.MAX_INT8 = 127;
    exports.MIN_INT8 = -128;
    exports.MAX_INT16 = 32767;
    exports.MIN_INT16 = -32768;
    exports.MAX_INT32 = 2147483647;
    exports.MIN_INT32 = -2147483648;
    exports.MAX_INT64 = BigInt("9223372036854775807");
    exports.MIN_INT64 = BigInt("-9223372036854775808");
    var MAX_UINT8_AS_BIGINT = BigInt("256");
    function marshalInt64BigintAsBuffer(value) {
      if (value < exports.MIN_INT64 || value > exports.MAX_INT64) {
        throw new error_1.CrtError("marshalInt64BigintAsBuffer expects a value that can fit in 8 bytes");
      }
      let buffer = new Uint8Array(8);
      if (value < 0) {
        value = -value - BigInt(1);
        for (let i5 = 0; i5 < 8; ++i5) {
          buffer[i5] = 255 - Number(value % MAX_UINT8_AS_BIGINT);
          value /= MAX_UINT8_AS_BIGINT;
        }
      } else {
        for (let i5 = 0; i5 < 8; ++i5) {
          buffer[i5] = Number(value % MAX_UINT8_AS_BIGINT);
          value /= MAX_UINT8_AS_BIGINT;
        }
      }
      return buffer;
    }
    __name(marshalInt64BigintAsBuffer, "marshalInt64BigintAsBuffer");
    exports.marshalInt64BigintAsBuffer = marshalInt64BigintAsBuffer;
    function unmarshalInt64BigintFromBuffer(buffer) {
      let value = BigInt(0);
      let byteView = new Uint8Array(buffer);
      if (byteView.length != 8) {
        throw new error_1.CrtError("unmarshalInt64BigintFromBuffer expects a byte buffer of length 8");
      }
      let shift = BigInt(1);
      let isNegative = (byteView[7] & 128) != 0;
      if (isNegative) {
        for (let i5 = 0; i5 < byteView.length; ++i5) {
          let byteValue = BigInt(255 - byteView[i5]);
          value += byteValue * shift;
          shift *= MAX_UINT8_AS_BIGINT;
        }
        value += BigInt(1);
        value = -value;
      } else {
        for (let i5 = 0; i5 < byteView.length; ++i5) {
          let byteValue = BigInt(byteView[i5]);
          value += byteValue * shift;
          shift *= MAX_UINT8_AS_BIGINT;
        }
      }
      return value;
    }
    __name(unmarshalInt64BigintFromBuffer, "unmarshalInt64BigintFromBuffer");
    exports.unmarshalInt64BigintFromBuffer = unmarshalInt64BigintFromBuffer;
  }
});

// node_modules/aws-crt/dist/native/eventstream.js
var require_eventstream = __commonJS({
  "node_modules/aws-crt/dist/native/eventstream.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      var desc = Object.getOwnPropertyDescriptor(m5, k5);
      if (!desc || ("get" in desc ? !m5.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m5[k5];
        } };
      }
      Object.defineProperty(o5, k22, desc);
    } : function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      o5[k22] = m5[k5];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o5, v3) {
      Object.defineProperty(o5, "default", { enumerable: true, value: v3 });
    } : function(o5, v3) {
      o5["default"] = v3;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k5 in mod)
          if (k5 !== "default" && Object.prototype.hasOwnProperty.call(mod, k5))
            __createBinding2(result, mod, k5);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClientStream = exports.ClientConnection = exports.MessageType = exports.MessageFlags = exports.Header = exports.HeaderType = void 0;
    var native_resource_1 = require_native_resource();
    var event_1 = require_event();
    var error_1 = require_error();
    var io = __importStar2(require_io2());
    var eventstream_utils = __importStar2(require_eventstream_utils());
    var promise = __importStar2(require_promise());
    var binding_1 = __importDefault2(require_binding());
    var HeaderType;
    (function(HeaderType2) {
      HeaderType2[HeaderType2["BooleanTrue"] = 0] = "BooleanTrue";
      HeaderType2[HeaderType2["BooleanFalse"] = 1] = "BooleanFalse";
      HeaderType2[HeaderType2["Byte"] = 2] = "Byte";
      HeaderType2[HeaderType2["Int16"] = 3] = "Int16";
      HeaderType2[HeaderType2["Int32"] = 4] = "Int32";
      HeaderType2[HeaderType2["Int64"] = 5] = "Int64";
      HeaderType2[HeaderType2["ByteBuffer"] = 6] = "ByteBuffer";
      HeaderType2[HeaderType2["String"] = 7] = "String";
      HeaderType2[HeaderType2["Timestamp"] = 8] = "Timestamp";
      HeaderType2[HeaderType2["UUID"] = 9] = "UUID";
    })(HeaderType = exports.HeaderType || (exports.HeaderType = {}));
    var AWS_MAXIMUM_EVENT_STREAM_HEADER_NAME_LENGTH = 127;
    var Header = class {
      constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
      }
      static validateHeaderName(name) {
        if (name.length == 0 || name.length > AWS_MAXIMUM_EVENT_STREAM_HEADER_NAME_LENGTH) {
          throw new error_1.CrtError(`Event stream header name (${name}) is not valid`);
        }
      }
      static newBoolean(name, value) {
        Header.validateHeaderName(name);
        if (value) {
          return new Header(name, HeaderType.BooleanTrue);
        } else {
          return new Header(name, HeaderType.BooleanFalse);
        }
      }
      static newByte(name, value) {
        Header.validateHeaderName(name);
        if (value >= eventstream_utils.MIN_INT8 && value <= eventstream_utils.MAX_INT8 && Number.isSafeInteger(value)) {
          return new Header(name, HeaderType.Byte, value);
        }
        throw new error_1.CrtError(`Illegal value for eventstream byte-valued header: ${value}`);
      }
      static newInt16(name, value) {
        Header.validateHeaderName(name);
        if (value >= eventstream_utils.MIN_INT16 && value <= eventstream_utils.MAX_INT16 && Number.isSafeInteger(value)) {
          return new Header(name, HeaderType.Int16, value);
        }
        throw new error_1.CrtError(`Illegal value for eventstream int16-valued header: ${value}`);
      }
      static newInt32(name, value) {
        Header.validateHeaderName(name);
        if (value >= eventstream_utils.MIN_INT32 && value <= eventstream_utils.MAX_INT32 && Number.isSafeInteger(value)) {
          return new Header(name, HeaderType.Int32, value);
        }
        throw new error_1.CrtError(`Illegal value for eventstream int32-valued header: ${value}`);
      }
      static newInt64FromNumber(name, value) {
        Header.validateHeaderName(name);
        if (Number.isSafeInteger(value)) {
          return new Header(name, HeaderType.Int64, eventstream_utils.marshalInt64BigintAsBuffer(BigInt(value)));
        }
        throw new error_1.CrtError(`Illegal value for eventstream int64-valued header: ${value}`);
      }
      static newInt64FromBigint(name, value) {
        Header.validateHeaderName(name);
        if (value >= eventstream_utils.MIN_INT64 && value <= eventstream_utils.MAX_INT64) {
          return new Header(name, HeaderType.Int64, eventstream_utils.marshalInt64BigintAsBuffer(value));
        }
        throw new error_1.CrtError(`Illegal value for eventstream int64-valued header: ${value}`);
      }
      static newByteBuffer(name, value) {
        Header.validateHeaderName(name);
        return new Header(name, HeaderType.ByteBuffer, value);
      }
      static newString(name, value) {
        Header.validateHeaderName(name);
        return new Header(name, HeaderType.String, value);
      }
      static newTimeStampFromSecondsSinceEpoch(name, secondsSinceEpoch) {
        Header.validateHeaderName(name);
        if (Number.isSafeInteger(secondsSinceEpoch) && secondsSinceEpoch >= 0) {
          return new Header(name, HeaderType.Timestamp, secondsSinceEpoch);
        }
        throw new error_1.CrtError(`Illegal value for eventstream timestamp-valued header: ${secondsSinceEpoch}`);
      }
      static newTimeStampFromDate(name, date) {
        Header.validateHeaderName(name);
        const secondsSinceEpoch = date.getTime();
        if (Number.isSafeInteger(secondsSinceEpoch)) {
          return new Header(name, HeaderType.Timestamp, secondsSinceEpoch);
        }
        throw new error_1.CrtError(`Illegal value for eventstream timestamp-valued header: ${date}`);
      }
      static newUUID(name, value) {
        Header.validateHeaderName(name);
        if (value.byteLength == 16) {
          return new Header(name, HeaderType.UUID, value);
        }
        throw new error_1.CrtError(`Illegal value for eventstream uuid-valued header: ${value}`);
      }
      toValue(type) {
        if (type != this.type) {
          throw new error_1.CrtError(`Header of type (${this.type}) cannot be converted to type (${type})`);
        }
        return this.value;
      }
      asBoolean() {
        switch (this.type) {
          case HeaderType.BooleanFalse:
            return false;
          case HeaderType.BooleanTrue:
            return true;
          default:
            throw new error_1.CrtError(`Header of type (${this.type}) cannot be converted to type (boolean)`);
        }
      }
      asByte() {
        return this.toValue(HeaderType.Byte);
      }
      asInt16() {
        return this.toValue(HeaderType.Int16);
      }
      asInt32() {
        return this.toValue(HeaderType.Int32);
      }
      asInt64() {
        return eventstream_utils.unmarshalInt64BigintFromBuffer(this.toValue(HeaderType.Int64));
      }
      asByteBuffer() {
        return this.toValue(HeaderType.ByteBuffer);
      }
      asString() {
        return this.toValue(HeaderType.String);
      }
      asTimestamp() {
        return this.toValue(HeaderType.Timestamp);
      }
      asUUID() {
        return this.toValue(HeaderType.UUID);
      }
    };
    __name(Header, "Header");
    exports.Header = Header;
    var MessageFlags;
    (function(MessageFlags2) {
      MessageFlags2[MessageFlags2["None"] = 0] = "None";
      MessageFlags2[MessageFlags2["ConnectionAccepted"] = 1] = "ConnectionAccepted";
      MessageFlags2[MessageFlags2["TerminateStream"] = 2] = "TerminateStream";
    })(MessageFlags = exports.MessageFlags || (exports.MessageFlags = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2[MessageType2["ApplicationMessage"] = 0] = "ApplicationMessage";
      MessageType2[MessageType2["ApplicationError"] = 1] = "ApplicationError";
      MessageType2[MessageType2["Ping"] = 2] = "Ping";
      MessageType2[MessageType2["PingResponse"] = 3] = "PingResponse";
      MessageType2[MessageType2["Connect"] = 4] = "Connect";
      MessageType2[MessageType2["ConnectAck"] = 5] = "ConnectAck";
      MessageType2[MessageType2["ProtocolError"] = 6] = "ProtocolError";
      MessageType2[MessageType2["InternalError"] = 7] = "InternalError";
    })(MessageType = exports.MessageType || (exports.MessageType = {}));
    function mapPodHeadersToJSHeaders(headers) {
      return Array.from(headers, (header) => {
        return new Header(header.name, header.type, header.value);
      });
    }
    __name(mapPodHeadersToJSHeaders, "mapPodHeadersToJSHeaders");
    function mapPodMessageToJSMessage(message) {
      let jsMessage = {
        type: message.type,
        flags: message.flags,
        payload: message.payload
      };
      if (message.headers) {
        jsMessage.headers = mapPodHeadersToJSHeaders(message.headers);
      }
      return jsMessage;
    }
    __name(mapPodMessageToJSMessage, "mapPodMessageToJSMessage");
    var ClientConnectionState;
    (function(ClientConnectionState2) {
      ClientConnectionState2[ClientConnectionState2["None"] = 0] = "None";
      ClientConnectionState2[ClientConnectionState2["Connecting"] = 1] = "Connecting";
      ClientConnectionState2[ClientConnectionState2["Connected"] = 2] = "Connected";
      ClientConnectionState2[ClientConnectionState2["Disconnected"] = 3] = "Disconnected";
      ClientConnectionState2[ClientConnectionState2["Closed"] = 4] = "Closed";
    })(ClientConnectionState || (ClientConnectionState = {}));
    var ClientConnection = class extends (0, native_resource_1.NativeResourceMixin)(event_1.BufferedEventEmitter) {
      constructor(config) {
        if (config === void 0) {
          throw new error_1.CrtError("Invalid configuration passed to eventstream ClientConnection constructor");
        }
        super();
        this.state = ClientConnectionState.None;
        this._super(binding_1.default.event_stream_client_connection_new(this, config, (connection, errorCode) => {
          ClientConnection._s_on_disconnect(connection, errorCode);
        }, (connection, message) => {
          ClientConnection._s_on_protocol_message(connection, message);
        }, config.socketOptions ? config.socketOptions.native_handle() : null, config.tlsCtx ? config.tlsCtx.native_handle() : null));
      }
      close() {
        if (this.state != ClientConnectionState.Closed) {
          this.state = ClientConnectionState.Closed;
          binding_1.default.event_stream_client_connection_close(this.native_handle());
        }
      }
      connect(options) {
        return __awaiter2(this, void 0, void 0, function* () {
          let cleanupCancelListener = void 0;
          let connectPromise = new Promise((resolve, reject) => {
            if (!options) {
              reject(new error_1.CrtError("Invalid options passed to event stream ClientConnection.connect"));
              return;
            }
            if (this.state != ClientConnectionState.None) {
              reject(new error_1.CrtError(`Event stream connection in a state (${this.state}) where connect() is not allowed.`));
              return;
            }
            this.state = ClientConnectionState.Connecting;
            if (options.cancelController) {
              let cancel = /* @__PURE__ */ __name(() => {
                reject(new error_1.CrtError(`Event stream connection connect() cancelled by external request.`));
                setImmediate(() => {
                  this.close();
                });
              }, "cancel");
              cleanupCancelListener = options.cancelController.addListener(cancel);
              if (!cleanupCancelListener) {
                return;
              }
            }
            function curriedPromiseCallback(connection, errorCode) {
              return ClientConnection._s_on_connection_setup(resolve, reject, connection, errorCode);
            }
            __name(curriedPromiseCallback, "curriedPromiseCallback");
            try {
              binding_1.default.event_stream_client_connection_connect(this.native_handle(), curriedPromiseCallback);
            } catch (e5) {
              this.state = ClientConnectionState.Disconnected;
              reject(e5);
            }
          });
          return promise.makeSelfCleaningPromise(connectPromise, cleanupCancelListener);
        });
      }
      sendProtocolMessage(options) {
        return __awaiter2(this, void 0, void 0, function* () {
          let cleanupCancelListener = void 0;
          let sendProtocolMessagePromise = new Promise((resolve, reject) => {
            try {
              let curriedPromiseCallback = function(errorCode) {
                return ClientConnection._s_on_connection_send_protocol_message_completion(resolve, reject, errorCode);
              };
              __name(curriedPromiseCallback, "curriedPromiseCallback");
              if (!options) {
                reject(new error_1.CrtError("Invalid options passed to event stream ClientConnection.sendProtocolMessage"));
                return;
              }
              if (!this.isConnected()) {
                reject(new error_1.CrtError(`Event stream connection in a state (${this.state}) where sending protocol messages is not allowed.`));
                return;
              }
              if (options.cancelController) {
                let cancel = /* @__PURE__ */ __name(() => {
                  reject(new error_1.CrtError(`Event stream connection sendProtocolMessage() cancelled by external request.`));
                  setImmediate(() => {
                    this.close();
                  });
                }, "cancel");
                cleanupCancelListener = options.cancelController.addListener(cancel);
                if (!cleanupCancelListener) {
                  return;
                }
              }
              binding_1.default.event_stream_client_connection_send_protocol_message(this.native_handle(), options, curriedPromiseCallback);
            } catch (e5) {
              reject(e5);
            }
          });
          return promise.makeSelfCleaningPromise(sendProtocolMessagePromise, cleanupCancelListener);
        });
      }
      isConnected() {
        return this.state == ClientConnectionState.Connected;
      }
      newStream() {
        if (!this.isConnected()) {
          throw new error_1.CrtError(`Event stream connection in a state (${this.state}) where creating new streams is forbidden.`);
        }
        return new ClientStream(this);
      }
      on(event, listener) {
        super.on(event, listener);
        return this;
      }
      static _s_on_connection_setup(resolve, reject, connection, errorCode) {
        if (errorCode == 0 && connection.state == ClientConnectionState.Connecting) {
          connection.state = ClientConnectionState.Connected;
          resolve();
        } else {
          if (connection.state != ClientConnectionState.Closed) {
            connection.state = ClientConnectionState.Disconnected;
          }
          reject(io.error_code_to_string(errorCode));
        }
      }
      static _s_on_disconnect(connection, errorCode) {
        if (connection.state != ClientConnectionState.Closed) {
          connection.state = ClientConnectionState.Disconnected;
        }
        process.nextTick(() => {
          connection.emit("disconnection", { errorCode });
        });
      }
      static _s_on_protocol_message(connection, message) {
        process.nextTick(() => {
          connection.emit("protocolMessage", { message: mapPodMessageToJSMessage(message) });
        });
      }
      static _s_on_connection_send_protocol_message_completion(resolve, reject, errorCode) {
        if (errorCode == 0) {
          resolve();
        } else {
          reject(io.error_code_to_string(errorCode));
        }
      }
    };
    __name(ClientConnection, "ClientConnection");
    exports.ClientConnection = ClientConnection;
    ClientConnection.DISCONNECTION = "disconnection";
    ClientConnection.PROTOCOL_MESSAGE = "protocolMessage";
    var ClientStreamState;
    (function(ClientStreamState2) {
      ClientStreamState2[ClientStreamState2["None"] = 0] = "None";
      ClientStreamState2[ClientStreamState2["Activating"] = 1] = "Activating";
      ClientStreamState2[ClientStreamState2["Activated"] = 2] = "Activated";
      ClientStreamState2[ClientStreamState2["Ended"] = 3] = "Ended";
      ClientStreamState2[ClientStreamState2["Closed"] = 4] = "Closed";
    })(ClientStreamState || (ClientStreamState = {}));
    var ClientStream = class extends (0, native_resource_1.NativeResourceMixin)(event_1.BufferedEventEmitter) {
      constructor(connection) {
        super();
        this._super(binding_1.default.event_stream_client_stream_new(this, connection.native_handle(), (stream) => {
          ClientStream._s_on_stream_ended(stream);
        }, (stream, message) => {
          ClientStream._s_on_stream_message(stream, message);
        }));
        this.state = ClientStreamState.None;
      }
      close() {
        if (this.state != ClientStreamState.Closed) {
          this.state = ClientStreamState.Closed;
          binding_1.default.event_stream_client_stream_close(this.native_handle());
        }
      }
      activate(options) {
        return __awaiter2(this, void 0, void 0, function* () {
          let cleanupCancelListener = void 0;
          let activatePromise = new Promise((resolve, reject) => {
            try {
              let curriedPromiseCallback = function(stream, errorCode) {
                return ClientStream._s_on_stream_activated(resolve, reject, stream, errorCode);
              };
              __name(curriedPromiseCallback, "curriedPromiseCallback");
              if (this.state != ClientStreamState.None) {
                reject(new error_1.CrtError(`Event stream in a state (${this.state}) where activation is not allowed.`));
                return;
              }
              if (options === void 0) {
                this.state = ClientStreamState.Ended;
                reject(new error_1.CrtError("Invalid options passed to ClientStream.activate"));
                return;
              }
              this.state = ClientStreamState.Activating;
              if (options.cancelController) {
                let cancel = /* @__PURE__ */ __name(() => {
                  reject(new error_1.CrtError(`Event stream activate() cancelled by external request.`));
                  setImmediate(() => {
                    this.close();
                  });
                }, "cancel");
                cleanupCancelListener = options.cancelController.addListener(cancel);
                if (!cleanupCancelListener) {
                  return;
                }
              }
              binding_1.default.event_stream_client_stream_activate(this.native_handle(), options, curriedPromiseCallback);
            } catch (e5) {
              this.state = ClientStreamState.Ended;
              reject(e5);
            }
          });
          return promise.makeSelfCleaningPromise(activatePromise, cleanupCancelListener);
        });
      }
      sendMessage(options) {
        return __awaiter2(this, void 0, void 0, function* () {
          let cleanupCancelListener = void 0;
          let sendMessagePromise = new Promise((resolve, reject) => {
            try {
              let curriedPromiseCallback = function(errorCode) {
                return ClientStream._s_on_stream_send_message_completion(resolve, reject, errorCode);
              };
              __name(curriedPromiseCallback, "curriedPromiseCallback");
              if (!options) {
                reject(new error_1.CrtError("Invalid options passed to ClientStream.sendMessage"));
                return;
              }
              if (this.state != ClientStreamState.Activated) {
                reject(new error_1.CrtError(`Event stream in a state (${this.state}) where sending messages is not allowed.`));
                return;
              }
              if (options.cancelController) {
                let cancel = /* @__PURE__ */ __name(() => {
                  reject(new error_1.CrtError(`Event stream sendMessage() cancelled by external request.`));
                  setImmediate(() => {
                    this.close();
                  });
                }, "cancel");
                cleanupCancelListener = options.cancelController.addListener(cancel);
                if (!cleanupCancelListener) {
                  return;
                }
              }
              binding_1.default.event_stream_client_stream_send_message(this.native_handle(), options, curriedPromiseCallback);
            } catch (e5) {
              reject(e5);
            }
          });
          return promise.makeSelfCleaningPromise(sendMessagePromise, cleanupCancelListener);
        });
      }
      isActive() {
        return this.state == ClientStreamState.Activated;
      }
      on(event, listener) {
        super.on(event, listener);
        return this;
      }
      static _s_on_stream_activated(resolve, reject, stream, errorCode) {
        if (errorCode == 0 && stream.state == ClientStreamState.Activating) {
          stream.state = ClientStreamState.Activated;
          resolve();
        } else {
          if (stream.state != ClientStreamState.Closed) {
            stream.state = ClientStreamState.Ended;
          }
          reject(io.error_code_to_string(errorCode));
        }
      }
      static _s_on_stream_send_message_completion(resolve, reject, errorCode) {
        if (errorCode == 0) {
          resolve();
        } else {
          reject(io.error_code_to_string(errorCode));
        }
      }
      static _s_on_stream_ended(stream) {
        process.nextTick(() => {
          stream.emit(ClientStream.ENDED, {});
        });
      }
      static _s_on_stream_message(stream, message) {
        process.nextTick(() => {
          stream.emit(ClientStream.MESSAGE, { message: mapPodMessageToJSMessage(message) });
        });
      }
    };
    __name(ClientStream, "ClientStream");
    exports.ClientStream = ClientStream;
    ClientStream.ENDED = "ended";
    ClientStream.MESSAGE = "message";
  }
});

// node_modules/aws-crt/dist/common/http.js
var require_http = __commonJS({
  "node_modules/aws-crt/dist/common/http.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonHttpProxyOptions = exports.HttpProxyAuthenticationType = exports.HttpVersion = void 0;
    var HttpVersion;
    (function(HttpVersion2) {
      HttpVersion2[HttpVersion2["Unknown"] = 0] = "Unknown";
      HttpVersion2[HttpVersion2["Http1_0"] = 1] = "Http1_0";
      HttpVersion2[HttpVersion2["Http1_1"] = 2] = "Http1_1";
      HttpVersion2[HttpVersion2["Http2"] = 3] = "Http2";
    })(HttpVersion = exports.HttpVersion || (exports.HttpVersion = {}));
    var HttpProxyAuthenticationType;
    (function(HttpProxyAuthenticationType2) {
      HttpProxyAuthenticationType2[HttpProxyAuthenticationType2["None"] = 0] = "None";
      HttpProxyAuthenticationType2[HttpProxyAuthenticationType2["Basic"] = 1] = "Basic";
    })(HttpProxyAuthenticationType = exports.HttpProxyAuthenticationType || (exports.HttpProxyAuthenticationType = {}));
    var CommonHttpProxyOptions = class {
      constructor(host_name, port, auth_method = HttpProxyAuthenticationType.None, auth_username, auth_password) {
        this.host_name = host_name;
        this.port = port;
        this.auth_method = auth_method;
        this.auth_username = auth_username;
        this.auth_password = auth_password;
      }
    };
    __name(CommonHttpProxyOptions, "CommonHttpProxyOptions");
    exports.CommonHttpProxyOptions = CommonHttpProxyOptions;
  }
});

// node_modules/aws-crt/dist/native/http.js
var require_http2 = __commonJS({
  "node_modules/aws-crt/dist/native/http.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpClientConnectionManager = exports.HttpClientStream = exports.HttpStream = exports.HttpClientConnection = exports.HttpProxyOptions = exports.HttpProxyConnectionType = exports.HttpConnection = exports.HttpRequest = exports.HttpHeaders = exports.HttpProxyAuthenticationType = void 0;
    var binding_1 = __importDefault2(require_binding());
    var native_resource_1 = require_native_resource();
    var error_1 = require_error();
    var http_1 = require_http();
    var http_2 = require_http();
    Object.defineProperty(exports, "HttpProxyAuthenticationType", { enumerable: true, get: function() {
      return http_2.HttpProxyAuthenticationType;
    } });
    var event_1 = require_event();
    exports.HttpHeaders = binding_1.default.HttpHeaders;
    var nativeHttpRequest = binding_1.default.HttpRequest;
    var HttpRequest2 = class extends nativeHttpRequest {
      constructor(method, path, headers, body) {
        super(method, path, headers, body === null || body === void 0 ? void 0 : body.native_handle());
      }
    };
    __name(HttpRequest2, "HttpRequest");
    exports.HttpRequest = HttpRequest2;
    var HttpConnection = class extends (0, native_resource_1.NativeResourceMixin)(event_1.BufferedEventEmitter) {
      constructor(native_handle) {
        super();
        this._super(native_handle);
      }
      close() {
        binding_1.default.http_connection_close(this.native_handle());
      }
      on(event, listener) {
        super.on(event, listener);
        if (event == "connect") {
          process.nextTick(() => {
            this.uncork();
          });
        }
        return this;
      }
    };
    __name(HttpConnection, "HttpConnection");
    exports.HttpConnection = HttpConnection;
    HttpConnection.CONNECT = "connect";
    HttpConnection.ERROR = "error";
    HttpConnection.CLOSE = "close";
    var HttpProxyConnectionType;
    (function(HttpProxyConnectionType2) {
      HttpProxyConnectionType2[HttpProxyConnectionType2["Legacy"] = 0] = "Legacy";
      HttpProxyConnectionType2[HttpProxyConnectionType2["Forwarding"] = 1] = "Forwarding";
      HttpProxyConnectionType2[HttpProxyConnectionType2["Tunneling"] = 2] = "Tunneling";
    })(HttpProxyConnectionType = exports.HttpProxyConnectionType || (exports.HttpProxyConnectionType = {}));
    var HttpProxyOptions = class extends http_1.CommonHttpProxyOptions {
      constructor(host_name, port, auth_method = http_1.HttpProxyAuthenticationType.None, auth_username, auth_password, tls_opts, connection_type) {
        super(host_name, port, auth_method, auth_username, auth_password);
        this.tls_opts = tls_opts;
        this.connection_type = connection_type;
      }
      create_native_handle() {
        return binding_1.default.http_proxy_options_new(this.host_name, this.port, this.auth_method, this.auth_username, this.auth_password, this.tls_opts ? this.tls_opts.native_handle() : void 0, this.connection_type ? this.connection_type : HttpProxyConnectionType.Legacy);
      }
    };
    __name(HttpProxyOptions, "HttpProxyOptions");
    exports.HttpProxyOptions = HttpProxyOptions;
    var HttpClientConnection = class extends HttpConnection {
      constructor(bootstrap, host_name, port, socket_options, tls_opts, proxy_options, handle) {
        if (socket_options == null || socket_options == void 0) {
          throw new error_1.CrtError("HttpClientConnection constructor: socket_options not defined");
        }
        super(handle ? handle : binding_1.default.http_connection_new(bootstrap != null ? bootstrap.native_handle() : null, (handle2, error_code) => {
          this._on_setup(handle2, error_code);
        }, (handle2, error_code) => {
          this._on_shutdown(handle2, error_code);
        }, host_name, port, socket_options.native_handle(), tls_opts ? tls_opts.native_handle() : void 0, proxy_options ? proxy_options.create_native_handle() : void 0));
        this.bootstrap = bootstrap;
        this.socket_options = socket_options;
        this.tls_opts = tls_opts;
      }
      _on_setup(native_handle, error_code) {
        if (error_code) {
          this.emit("error", new error_1.CrtError(error_code));
          return;
        }
        this.emit("connect");
      }
      _on_shutdown(native_handle, error_code) {
        if (error_code) {
          this.emit("error", new error_1.CrtError(error_code));
          return;
        }
        this.emit("close");
      }
      request(request2) {
        let stream;
        const on_response_impl = /* @__PURE__ */ __name((status_code, headers) => {
          stream._on_response(status_code, headers);
        }, "on_response_impl");
        const on_body_impl = /* @__PURE__ */ __name((data) => {
          stream._on_body(data);
        }, "on_body_impl");
        const on_complete_impl = /* @__PURE__ */ __name((error_code) => {
          stream._on_complete(error_code);
        }, "on_complete_impl");
        const native_handle = binding_1.default.http_stream_new(this.native_handle(), request2, on_complete_impl, on_response_impl, on_body_impl);
        return stream = new HttpClientStream(native_handle, this, request2);
      }
    };
    __name(HttpClientConnection, "HttpClientConnection");
    exports.HttpClientConnection = HttpClientConnection;
    var HttpStream = class extends (0, native_resource_1.NativeResourceMixin)(event_1.BufferedEventEmitter) {
      constructor(native_handle, connection) {
        super();
        this.connection = connection;
        this._super(native_handle);
        this.cork();
      }
      activate() {
        binding_1.default.http_stream_activate(this.native_handle());
      }
      close() {
        binding_1.default.http_stream_close(this.native_handle());
      }
      _on_body(data) {
        this.emit("data", data);
      }
      _on_complete(error_code) {
        if (error_code) {
          this.emit("error", new error_1.CrtError(error_code));
          this.close();
          return;
        }
        this.on("end", () => {
          this.close();
        });
        this.emit("end");
      }
    };
    __name(HttpStream, "HttpStream");
    exports.HttpStream = HttpStream;
    var HttpClientStream = class extends HttpStream {
      constructor(native_handle, connection, request2) {
        super(native_handle, connection);
        this.request = request2;
      }
      status_code() {
        return this.response_status_code;
      }
      on(event, listener) {
        super.on(event, listener);
        if (event == "response") {
          process.nextTick(() => {
            this.uncork();
          });
        }
        return this;
      }
      _on_response(status_code, header_array) {
        this.response_status_code = status_code;
        let headers = new exports.HttpHeaders(header_array);
        this.emit("response", status_code, headers);
      }
    };
    __name(HttpClientStream, "HttpClientStream");
    exports.HttpClientStream = HttpClientStream;
    HttpClientStream.RESPONSE = "response";
    HttpClientStream.DATA = "data";
    HttpClientStream.ERROR = "error";
    HttpClientStream.END = "end";
    HttpClientStream.HEADERS = "headers";
    var HttpClientConnectionManager = class extends native_resource_1.NativeResource {
      constructor(bootstrap, host, port, max_connections, initial_window_size, socket_options, tls_opts, proxy_options) {
        if (socket_options == null || socket_options == void 0) {
          throw new error_1.CrtError("HttpClientConnectionManager constructor: socket_options not defined");
        }
        super(binding_1.default.http_connection_manager_new(bootstrap != null ? bootstrap.native_handle() : null, host, port, max_connections, initial_window_size, socket_options.native_handle(), tls_opts ? tls_opts.native_handle() : void 0, proxy_options ? proxy_options.create_native_handle() : void 0, void 0));
        this.bootstrap = bootstrap;
        this.host = host;
        this.port = port;
        this.max_connections = max_connections;
        this.initial_window_size = initial_window_size;
        this.socket_options = socket_options;
        this.tls_opts = tls_opts;
        this.proxy_options = proxy_options;
        this.connections = /* @__PURE__ */ new Map();
      }
      acquire() {
        return new Promise((resolve, reject) => {
          const on_acquired = /* @__PURE__ */ __name((handle, error_code) => {
            if (error_code) {
              reject(new error_1.CrtError(error_code));
              return;
            }
            let connection = this.connections.get(handle);
            if (!connection) {
              connection = new HttpClientConnection(this.bootstrap, this.host, this.port, this.socket_options, this.tls_opts, this.proxy_options, handle);
              this.connections.set(handle, connection);
              connection.on("close", () => {
                this.connections.delete(handle);
              });
            }
            resolve(connection);
          }, "on_acquired");
          binding_1.default.http_connection_manager_acquire(this.native_handle(), on_acquired);
        });
      }
      release(connection) {
        if (connection == null || connection == void 0) {
          throw new error_1.CrtError("HttpClientConnectionManager release: connection not defined");
        }
        binding_1.default.http_connection_manager_release(this.native_handle(), connection.native_handle());
      }
      close() {
        binding_1.default.http_connection_manager_close(this.native_handle());
      }
    };
    __name(HttpClientConnectionManager, "HttpClientConnectionManager");
    exports.HttpClientConnectionManager = HttpClientConnectionManager;
  }
});

// node_modules/aws-crt/dist/common/mqtt.js
var require_mqtt = __commonJS({
  "node_modules/aws-crt/dist/common/mqtt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_RECONNECT_MIN_SEC = exports.DEFAULT_RECONNECT_MAX_SEC = exports.MqttWill = exports.QoS = void 0;
    var QoS;
    (function(QoS2) {
      QoS2[QoS2["AtMostOnce"] = 0] = "AtMostOnce";
      QoS2[QoS2["AtLeastOnce"] = 1] = "AtLeastOnce";
      QoS2[QoS2["ExactlyOnce"] = 2] = "ExactlyOnce";
    })(QoS = exports.QoS || (exports.QoS = {}));
    var MqttWill = class {
      constructor(topic, qos, payload, retain = false) {
        this.topic = topic;
        this.qos = qos;
        this.payload = payload;
        this.retain = retain;
      }
    };
    __name(MqttWill, "MqttWill");
    exports.MqttWill = MqttWill;
    exports.DEFAULT_RECONNECT_MAX_SEC = 128;
    exports.DEFAULT_RECONNECT_MIN_SEC = 1;
  }
});

// node_modules/aws-crt/dist/common/aws_iot_shared.js
var require_aws_iot_shared = __commonJS({
  "node_modules/aws-crt/dist/common/aws_iot_shared.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      var desc = Object.getOwnPropertyDescriptor(m5, k5);
      if (!desc || ("get" in desc ? !m5.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m5[k5];
        } };
      }
      Object.defineProperty(o5, k22, desc);
    } : function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      o5[k22] = m5[k5];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o5, v3) {
      Object.defineProperty(o5, "default", { enumerable: true, value: v3 });
    } : function(o5, v3) {
      o5["default"] = v3;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k5 in mod)
          if (k5 !== "default" && Object.prototype.hasOwnProperty.call(mod, k5))
            __createBinding2(result, mod, k5);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractRegionFromEndpoint = exports.buildMqtt5FinalUsername = exports.populate_username_string_with_custom_authorizer = exports.is_string_and_not_empty = exports.add_to_username_parameter = void 0;
    var platform2 = __importStar2(require_platform());
    function add_to_username_parameter(current_username, parameter_value, parameter_pre_text) {
      let return_string = current_username;
      if (return_string.indexOf("?") != -1) {
        return_string += "&";
      } else {
        return_string += "?";
      }
      if (parameter_value.indexOf(parameter_pre_text) != -1) {
        return return_string + parameter_value;
      } else {
        return return_string + parameter_pre_text + parameter_value;
      }
    }
    __name(add_to_username_parameter, "add_to_username_parameter");
    exports.add_to_username_parameter = add_to_username_parameter;
    function is_string_and_not_empty(item) {
      return item != void 0 && typeof item == "string" && item != "";
    }
    __name(is_string_and_not_empty, "is_string_and_not_empty");
    exports.is_string_and_not_empty = is_string_and_not_empty;
    function populate_username_string_with_custom_authorizer(current_username, input_username, input_authorizer, input_signature, input_builder_username, input_token_key_name, input_token_value) {
      let username_string = "";
      if (current_username) {
        username_string += current_username;
      }
      if (is_string_and_not_empty(input_username) == false) {
        if (is_string_and_not_empty(input_builder_username) && input_builder_username) {
          username_string += input_builder_username;
        }
      } else {
        username_string += input_username;
      }
      if (is_string_and_not_empty(input_authorizer) && input_authorizer) {
        username_string = add_to_username_parameter(username_string, input_authorizer, "x-amz-customauthorizer-name=");
      }
      if (is_string_and_not_empty(input_signature) && input_signature) {
        username_string = add_to_username_parameter(username_string, input_signature, "x-amz-customauthorizer-signature=");
        if (is_string_and_not_empty(input_token_key_name) && input_token_key_name || is_string_and_not_empty(input_token_value) && input_token_value) {
          console.log("Warning: Signed custom authorizers with signature will not work without a token key name and token value. Your connection may be rejected/stalled on the IoT Core side due to this. Please set the token key name and token value to connect to a signed custom authorizer.");
        }
      }
      if (is_string_and_not_empty(input_signature) || is_string_and_not_empty(input_token_value) || is_string_and_not_empty(input_token_key_name)) {
        if (!input_token_value || !input_token_key_name) {
          throw new Error("Token-based custom authentication requires all token-related properties to be set");
        }
        username_string = add_to_username_parameter(username_string, input_token_value, input_token_key_name + "=");
      }
      return username_string;
    }
    __name(populate_username_string_with_custom_authorizer, "populate_username_string_with_custom_authorizer");
    exports.populate_username_string_with_custom_authorizer = populate_username_string_with_custom_authorizer;
    function addParam(paramName, paramValue, paramSet) {
      if (paramValue) {
        paramSet.push([paramName, paramValue]);
      }
    }
    __name(addParam, "addParam");
    function buildMqtt5FinalUsername(customAuthConfig) {
      let path = "";
      let paramList = [];
      if (customAuthConfig) {
        let usingSigning = false;
        if (customAuthConfig.tokenValue || customAuthConfig.tokenKeyName || customAuthConfig.tokenSignature) {
          usingSigning = true;
          if (!customAuthConfig.tokenValue || !customAuthConfig.tokenKeyName || !customAuthConfig.tokenSignature) {
            throw new Error("Token-based custom authentication requires all token-related properties to be set");
          }
        }
        let username = customAuthConfig.username;
        let pathSplit = (username !== null && username !== void 0 ? username : "").split("?");
        let params = pathSplit.slice(1);
        path = pathSplit[0];
        if (params.length > 1) {
          throw new Error("Custom auth username property value is invalid");
        } else if (params.length == 1) {
          params[0].split("&").forEach((keyValue, index, array) => {
            var _a;
            let kvPair = keyValue.split("=");
            paramList.push([kvPair[0], (_a = kvPair[1]) !== null && _a !== void 0 ? _a : ""]);
          });
        }
        addParam("x-amz-customauthorizer-name", customAuthConfig.authorizerName, paramList);
        if (usingSigning) {
          addParam(customAuthConfig.tokenKeyName, customAuthConfig.tokenValue, paramList);
          addParam("x-amz-customauthorizer-signature", customAuthConfig.tokenSignature, paramList);
        }
      }
      paramList.push(["SDK", "NodeJSv2"]);
      paramList.push(["Version", platform2.crt_version()]);
      return (path !== null && path !== void 0 ? path : "") + "?" + paramList.map((value) => `${value[0]}=${value[1]}`).join("&");
    }
    __name(buildMqtt5FinalUsername, "buildMqtt5FinalUsername");
    exports.buildMqtt5FinalUsername = buildMqtt5FinalUsername;
    function extractRegionFromEndpoint(endpoint) {
      const regexpRegion = /^[\w\-]+\.[\w\-]+\.([\w+\-]+)\./;
      const match = endpoint.match(regexpRegion);
      if (match) {
        return match[1];
      }
      throw new Error("AWS region could not be extracted from endpoint.  Use 'region' property on WebsocketConfig to set manually.");
    }
    __name(extractRegionFromEndpoint, "extractRegionFromEndpoint");
    exports.extractRegionFromEndpoint = extractRegionFromEndpoint;
  }
});

// node_modules/aws-crt/dist/native/aws_iot.js
var require_aws_iot = __commonJS({
  "node_modules/aws-crt/dist/native/aws_iot.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      var desc = Object.getOwnPropertyDescriptor(m5, k5);
      if (!desc || ("get" in desc ? !m5.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m5[k5];
        } };
      }
      Object.defineProperty(o5, k22, desc);
    } : function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      o5[k22] = m5[k5];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o5, v3) {
      Object.defineProperty(o5, "default", { enumerable: true, value: v3 });
    } : function(o5, v3) {
      o5["default"] = v3;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k5 in mod)
          if (k5 !== "default" && Object.prototype.hasOwnProperty.call(mod, k5))
            __createBinding2(result, mod, k5);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsIotMqttConnectionConfigBuilder = void 0;
    var mqtt_1 = require_mqtt();
    var io = __importStar2(require_io2());
    var io_1 = require_io2();
    var platform2 = __importStar2(require_platform());
    var error_1 = require_error();
    var auth_1 = require_auth();
    var iot_shared = __importStar2(require_aws_iot_shared());
    var AwsIotMqttConnectionConfigBuilder = class {
      constructor(tls_ctx_options) {
        this.tls_ctx_options = tls_ctx_options;
        this.params = {
          client_id: "",
          host_name: "",
          socket_options: new io.SocketOptions(),
          port: 8883,
          use_websocket: false,
          clean_session: false,
          keep_alive: void 0,
          will: void 0,
          username: "",
          password: void 0,
          tls_ctx: void 0,
          reconnect_min_sec: mqtt_1.DEFAULT_RECONNECT_MIN_SEC,
          reconnect_max_sec: mqtt_1.DEFAULT_RECONNECT_MAX_SEC
        };
        this.is_using_custom_authorizer = false;
      }
      static new_mtls_builder_from_path(cert_path, key_path) {
        let builder = new AwsIotMqttConnectionConfigBuilder(io_1.TlsContextOptions.create_client_with_mtls_from_path(cert_path, key_path));
        builder.params.port = 8883;
        if (io.is_alpn_available()) {
          builder.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static new_mtls_builder(cert, private_key) {
        let builder = new AwsIotMqttConnectionConfigBuilder(io_1.TlsContextOptions.create_client_with_mtls(cert, private_key));
        builder.params.port = 8883;
        if (io.is_alpn_available()) {
          builder.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static new_mtls_pkcs11_builder(pkcs11_options) {
        let builder = new AwsIotMqttConnectionConfigBuilder(io_1.TlsContextOptions.create_client_with_mtls_pkcs11(pkcs11_options));
        builder.params.port = 8883;
        if (io.is_alpn_available()) {
          builder.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static new_mtls_pkcs12_builder(pkcs12_options) {
        let builder = new AwsIotMqttConnectionConfigBuilder(io_1.TlsContextOptions.create_client_with_mtls_pkcs12_from_path(pkcs12_options.pkcs12_file, pkcs12_options.pkcs12_password));
        builder.params.port = 8883;
        if (io.is_alpn_available()) {
          builder.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static new_mtls_windows_cert_store_path_builder(certificate_path) {
        let builder = new AwsIotMqttConnectionConfigBuilder(io_1.TlsContextOptions.create_client_with_mtls_windows_cert_store_path(certificate_path));
        builder.params.port = 8883;
        if (io.is_alpn_available()) {
          builder.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static new_default_builder() {
        let ctx_options = new io.TlsContextOptions();
        let builder = new AwsIotMqttConnectionConfigBuilder(ctx_options);
        return builder;
      }
      static new_websocket_builder(...args) {
        return this.new_with_websockets(...args);
      }
      static configure_websocket_handshake(builder, options) {
        if (options) {
          if (builder == null || builder == void 0) {
            throw new error_1.CrtError("AwsIotMqttConnectionConfigBuilder configure_websocket_handshake: builder not defined");
          }
          builder.params.websocket_handshake_transform = (request2, done) => __awaiter2(this, void 0, void 0, function* () {
            var _a, _b, _c;
            const signing_config = (_b = (_a = options.create_signing_config) === null || _a === void 0 ? void 0 : _a.call(options)) !== null && _b !== void 0 ? _b : {
              algorithm: auth_1.AwsSigningAlgorithm.SigV4,
              signature_type: auth_1.AwsSignatureType.HttpRequestViaQueryParams,
              provider: options.credentials_provider,
              region: options.region,
              service: (_c = options.service) !== null && _c !== void 0 ? _c : "iotdevicegateway",
              signed_body_value: auth_1.AwsSignedBodyValue.EmptySha256,
              omit_session_token: true
            };
            try {
              yield (0, auth_1.aws_sign_request)(request2, signing_config);
              done();
            } catch (error) {
              if (error instanceof error_1.CrtError) {
                done(error.error_code);
              } else {
                done(3);
              }
            }
          });
        }
        return builder;
      }
      static new_with_websockets(options) {
        let tls_ctx_options = options === null || options === void 0 ? void 0 : options.tls_ctx_options;
        if (!tls_ctx_options) {
          tls_ctx_options = new io_1.TlsContextOptions();
          tls_ctx_options.alpn_list = [];
        }
        let builder = new AwsIotMqttConnectionConfigBuilder(tls_ctx_options);
        builder.params.use_websocket = true;
        builder.params.proxy_options = options === null || options === void 0 ? void 0 : options.proxy_options;
        if (builder.tls_ctx_options) {
          builder.params.port = 443;
        }
        this.configure_websocket_handshake(builder, options);
        return builder;
      }
      static new_builder_for_websocket() {
        return this.new_with_websockets();
      }
      with_certificate_authority_from_path(ca_dirpath, ca_filepath) {
        this.tls_ctx_options.override_default_trust_store_from_path(ca_dirpath, ca_filepath);
        return this;
      }
      with_certificate_authority(ca) {
        this.tls_ctx_options.override_default_trust_store(ca);
        return this;
      }
      with_endpoint(endpoint) {
        this.params.host_name = endpoint;
        return this;
      }
      with_port(port) {
        this.params.port = port;
        return this;
      }
      with_client_id(client_id) {
        this.params.client_id = client_id;
        return this;
      }
      with_clean_session(clean_session) {
        this.params.clean_session = clean_session;
        return this;
      }
      with_keep_alive_seconds(keep_alive) {
        this.params.keep_alive = keep_alive;
        return this;
      }
      with_timeout_ms(timeout_ms) {
        this.with_ping_timeout_ms(timeout_ms);
        return this;
      }
      with_ping_timeout_ms(ping_timeout) {
        this.params.ping_timeout = ping_timeout;
        return this;
      }
      with_protocol_operation_timeout_ms(protocol_operation_timeout) {
        this.params.protocol_operation_timeout = protocol_operation_timeout;
        return this;
      }
      with_will(will) {
        this.params.will = will;
        return this;
      }
      with_socket_options(socket_options) {
        this.params.socket_options = socket_options;
        return this;
      }
      with_credentials(aws_region, aws_access_id, aws_secret_key, aws_sts_token) {
        return AwsIotMqttConnectionConfigBuilder.configure_websocket_handshake(this, {
          credentials_provider: auth_1.AwsCredentialsProvider.newStatic(aws_access_id, aws_secret_key, aws_sts_token),
          region: aws_region,
          service: "iotdevicegateway"
        });
      }
      with_http_proxy_options(proxy_options) {
        this.params.proxy_options = proxy_options;
        return this;
      }
      with_custom_authorizer(username, authorizer_name, authorizer_signature, password, token_key_name, token_value) {
        this.is_using_custom_authorizer = true;
        let username_string = iot_shared.populate_username_string_with_custom_authorizer("", username, authorizer_name, authorizer_signature, this.params.username, token_key_name, token_value);
        this.params.username = username_string;
        this.params.password = password;
        if (!this.params.use_websocket) {
          this.tls_ctx_options.alpn_list = ["mqtt"];
        }
        this.params.port = 443;
        return this;
      }
      with_username(username) {
        this.params.username = username;
        return this;
      }
      with_password(password) {
        this.params.password = password;
        return this;
      }
      with_reconnect_max_sec(max_sec) {
        this.params.reconnect_max_sec = max_sec;
        return this;
      }
      with_reconnect_min_sec(min_sec) {
        this.params.reconnect_min_sec = min_sec;
        return this;
      }
      build() {
        var _a, _b, _c;
        if (this.params.client_id === void 0 || this.params.host_name === void 0) {
          throw "client_id and endpoint are required";
        }
        if (this.is_using_custom_authorizer == false) {
          if (iot_shared.is_string_and_not_empty(this.params.username)) {
            if (((_a = this.params.username) === null || _a === void 0 ? void 0 : _a.indexOf("x-amz-customauthorizer-name=")) != -1 || ((_b = this.params.username) === null || _b === void 0 ? void 0 : _b.indexOf("x-amz-customauthorizer-signature=")) != -1) {
              this.is_using_custom_authorizer = true;
            }
          }
        }
        if (this.is_using_custom_authorizer == true) {
          if (this.params.port != 443) {
            console.log("Warning: Attempting to connect to authorizer with unsupported port. Port is not 443...");
          }
        }
        if (this.params.tls_ctx === void 0) {
          this.params.tls_ctx = new io.ClientTlsContext(this.tls_ctx_options);
        }
        if (iot_shared.is_string_and_not_empty(this.params.username) == false) {
          this.params.username = "?SDK=NodeJSv2&Version=";
        } else {
          if (((_c = this.params.username) === null || _c === void 0 ? void 0 : _c.indexOf("?")) != -1) {
            this.params.username += "&SDK=NodeJSv2&Version=";
          } else {
            this.params.username += "?SDK=NodeJSv2&Version=";
          }
        }
        this.params.username += platform2.crt_version();
        return this.params;
      }
    };
    __name(AwsIotMqttConnectionConfigBuilder, "AwsIotMqttConnectionConfigBuilder");
    exports.AwsIotMqttConnectionConfigBuilder = AwsIotMqttConnectionConfigBuilder;
  }
});

// node_modules/aws-crt/dist/common/mqtt_shared.js
var require_mqtt_shared = __commonJS({
  "node_modules/aws-crt/dist/common/mqtt_shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_KEEP_ALIVE = exports.normalize_payload = void 0;
    function normalize_payload(payload) {
      if (payload instanceof Buffer) {
        return payload;
      }
      if (typeof payload === "string") {
        return payload;
      }
      if (ArrayBuffer.isView(payload)) {
        const view = payload;
        return Buffer.from(view.buffer, view.byteOffset, view.byteLength);
      }
      if (payload instanceof ArrayBuffer) {
        return Buffer.from(payload);
      }
      if (typeof payload === "object") {
        return JSON.stringify(payload);
      }
      if (!payload) {
        return "";
      }
      throw new TypeError("payload parameter must be a string, object, or DataView.");
    }
    __name(normalize_payload, "normalize_payload");
    exports.normalize_payload = normalize_payload;
    exports.DEFAULT_KEEP_ALIVE = 1200;
  }
});

// node_modules/aws-crt/dist/common/mqtt5.js
var require_mqtt5 = __commonJS({
  "node_modules/aws-crt/dist/common/mqtt5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RetryJitterType = exports.ClientSessionBehavior = void 0;
    var ClientSessionBehavior;
    (function(ClientSessionBehavior2) {
      ClientSessionBehavior2[ClientSessionBehavior2["Default"] = 0] = "Default";
      ClientSessionBehavior2[ClientSessionBehavior2["Clean"] = 1] = "Clean";
      ClientSessionBehavior2[ClientSessionBehavior2["RejoinPostSuccess"] = 2] = "RejoinPostSuccess";
      ClientSessionBehavior2[ClientSessionBehavior2["RejoinAlways"] = 3] = "RejoinAlways";
    })(ClientSessionBehavior = exports.ClientSessionBehavior || (exports.ClientSessionBehavior = {}));
    var RetryJitterType;
    (function(RetryJitterType2) {
      RetryJitterType2[RetryJitterType2["Default"] = 0] = "Default";
      RetryJitterType2[RetryJitterType2["None"] = 1] = "None";
      RetryJitterType2[RetryJitterType2["Full"] = 2] = "Full";
      RetryJitterType2[RetryJitterType2["Decorrelated"] = 3] = "Decorrelated";
    })(RetryJitterType = exports.RetryJitterType || (exports.RetryJitterType = {}));
  }
});

// node_modules/aws-crt/dist/common/mqtt5_packet.js
var require_mqtt5_packet = __commonJS({
  "node_modules/aws-crt/dist/common/mqtt5_packet.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PacketType = exports.RetainHandlingType = exports.QoS = exports.PayloadFormatIndicator = exports.isSuccessfulPubackReasonCode = exports.PubackReasonCode = exports.isSuccessfulUnsubackReasonCode = exports.UnsubackReasonCode = exports.isSuccessfulSubackReasonCode = exports.SubackReasonCode = exports.isSuccessfulDisconnectReasonCode = exports.DisconnectReasonCode = exports.isSuccessfulConnectReasonCode = exports.ConnectReasonCode = void 0;
    var ConnectReasonCode;
    (function(ConnectReasonCode2) {
      ConnectReasonCode2[ConnectReasonCode2["Success"] = 0] = "Success";
      ConnectReasonCode2[ConnectReasonCode2["UnspecifiedError"] = 128] = "UnspecifiedError";
      ConnectReasonCode2[ConnectReasonCode2["MalformedPacket"] = 129] = "MalformedPacket";
      ConnectReasonCode2[ConnectReasonCode2["ProtocolError"] = 130] = "ProtocolError";
      ConnectReasonCode2[ConnectReasonCode2["ImplementationSpecificError"] = 131] = "ImplementationSpecificError";
      ConnectReasonCode2[ConnectReasonCode2["UnsupportedProtocolVersion"] = 132] = "UnsupportedProtocolVersion";
      ConnectReasonCode2[ConnectReasonCode2["ClientIdentifierNotValid"] = 133] = "ClientIdentifierNotValid";
      ConnectReasonCode2[ConnectReasonCode2["BadUsernameOrPassword"] = 134] = "BadUsernameOrPassword";
      ConnectReasonCode2[ConnectReasonCode2["NotAuthorized"] = 135] = "NotAuthorized";
      ConnectReasonCode2[ConnectReasonCode2["ServerUnavailable"] = 136] = "ServerUnavailable";
      ConnectReasonCode2[ConnectReasonCode2["ServerBusy"] = 137] = "ServerBusy";
      ConnectReasonCode2[ConnectReasonCode2["Banned"] = 138] = "Banned";
      ConnectReasonCode2[ConnectReasonCode2["BadAuthenticationMethod"] = 140] = "BadAuthenticationMethod";
      ConnectReasonCode2[ConnectReasonCode2["TopicNameInvalid"] = 144] = "TopicNameInvalid";
      ConnectReasonCode2[ConnectReasonCode2["PacketTooLarge"] = 149] = "PacketTooLarge";
      ConnectReasonCode2[ConnectReasonCode2["QuotaExceeded"] = 151] = "QuotaExceeded";
      ConnectReasonCode2[ConnectReasonCode2["PayloadFormatInvalid"] = 153] = "PayloadFormatInvalid";
      ConnectReasonCode2[ConnectReasonCode2["RetainNotSupported"] = 154] = "RetainNotSupported";
      ConnectReasonCode2[ConnectReasonCode2["QosNotSupported"] = 155] = "QosNotSupported";
      ConnectReasonCode2[ConnectReasonCode2["UseAnotherServer"] = 156] = "UseAnotherServer";
      ConnectReasonCode2[ConnectReasonCode2["ServerMoved"] = 157] = "ServerMoved";
      ConnectReasonCode2[ConnectReasonCode2["ConnectionRateExceeded"] = 159] = "ConnectionRateExceeded";
    })(ConnectReasonCode = exports.ConnectReasonCode || (exports.ConnectReasonCode = {}));
    function isSuccessfulConnectReasonCode(reasonCode) {
      return reasonCode < 128;
    }
    __name(isSuccessfulConnectReasonCode, "isSuccessfulConnectReasonCode");
    exports.isSuccessfulConnectReasonCode = isSuccessfulConnectReasonCode;
    var DisconnectReasonCode;
    (function(DisconnectReasonCode2) {
      DisconnectReasonCode2[DisconnectReasonCode2["NormalDisconnection"] = 0] = "NormalDisconnection";
      DisconnectReasonCode2[DisconnectReasonCode2["DisconnectWithWillMessage"] = 4] = "DisconnectWithWillMessage";
      DisconnectReasonCode2[DisconnectReasonCode2["UnspecifiedError"] = 128] = "UnspecifiedError";
      DisconnectReasonCode2[DisconnectReasonCode2["MalformedPacket"] = 129] = "MalformedPacket";
      DisconnectReasonCode2[DisconnectReasonCode2["ProtocolError"] = 130] = "ProtocolError";
      DisconnectReasonCode2[DisconnectReasonCode2["ImplementationSpecificError"] = 131] = "ImplementationSpecificError";
      DisconnectReasonCode2[DisconnectReasonCode2["NotAuthorized"] = 135] = "NotAuthorized";
      DisconnectReasonCode2[DisconnectReasonCode2["ServerBusy"] = 137] = "ServerBusy";
      DisconnectReasonCode2[DisconnectReasonCode2["ServerShuttingDown"] = 139] = "ServerShuttingDown";
      DisconnectReasonCode2[DisconnectReasonCode2["KeepAliveTimeout"] = 141] = "KeepAliveTimeout";
      DisconnectReasonCode2[DisconnectReasonCode2["SessionTakenOver"] = 142] = "SessionTakenOver";
      DisconnectReasonCode2[DisconnectReasonCode2["TopicFilterInvalid"] = 143] = "TopicFilterInvalid";
      DisconnectReasonCode2[DisconnectReasonCode2["TopicNameInvalid"] = 144] = "TopicNameInvalid";
      DisconnectReasonCode2[DisconnectReasonCode2["ReceiveMaximumExceeded"] = 147] = "ReceiveMaximumExceeded";
      DisconnectReasonCode2[DisconnectReasonCode2["TopicAliasInvalid"] = 148] = "TopicAliasInvalid";
      DisconnectReasonCode2[DisconnectReasonCode2["PacketTooLarge"] = 149] = "PacketTooLarge";
      DisconnectReasonCode2[DisconnectReasonCode2["MessageRateTooHigh"] = 150] = "MessageRateTooHigh";
      DisconnectReasonCode2[DisconnectReasonCode2["QuotaExceeded"] = 151] = "QuotaExceeded";
      DisconnectReasonCode2[DisconnectReasonCode2["AdministrativeAction"] = 152] = "AdministrativeAction";
      DisconnectReasonCode2[DisconnectReasonCode2["PayloadFormatInvalid"] = 153] = "PayloadFormatInvalid";
      DisconnectReasonCode2[DisconnectReasonCode2["RetainNotSupported"] = 154] = "RetainNotSupported";
      DisconnectReasonCode2[DisconnectReasonCode2["QosNotSupported"] = 155] = "QosNotSupported";
      DisconnectReasonCode2[DisconnectReasonCode2["UseAnotherServer"] = 156] = "UseAnotherServer";
      DisconnectReasonCode2[DisconnectReasonCode2["ServerMoved"] = 157] = "ServerMoved";
      DisconnectReasonCode2[DisconnectReasonCode2["SharedSubscriptionsNotSupported"] = 158] = "SharedSubscriptionsNotSupported";
      DisconnectReasonCode2[DisconnectReasonCode2["ConnectionRateExceeded"] = 159] = "ConnectionRateExceeded";
      DisconnectReasonCode2[DisconnectReasonCode2["MaximumConnectTime"] = 160] = "MaximumConnectTime";
      DisconnectReasonCode2[DisconnectReasonCode2["SubscriptionIdentifiersNotSupported"] = 161] = "SubscriptionIdentifiersNotSupported";
      DisconnectReasonCode2[DisconnectReasonCode2["WildcardSubscriptionsNotSupported"] = 162] = "WildcardSubscriptionsNotSupported";
    })(DisconnectReasonCode = exports.DisconnectReasonCode || (exports.DisconnectReasonCode = {}));
    function isSuccessfulDisconnectReasonCode(reasonCode) {
      return reasonCode < 128;
    }
    __name(isSuccessfulDisconnectReasonCode, "isSuccessfulDisconnectReasonCode");
    exports.isSuccessfulDisconnectReasonCode = isSuccessfulDisconnectReasonCode;
    var SubackReasonCode;
    (function(SubackReasonCode2) {
      SubackReasonCode2[SubackReasonCode2["GrantedQoS0"] = 0] = "GrantedQoS0";
      SubackReasonCode2[SubackReasonCode2["GrantedQoS1"] = 1] = "GrantedQoS1";
      SubackReasonCode2[SubackReasonCode2["GrantedQoS2"] = 2] = "GrantedQoS2";
      SubackReasonCode2[SubackReasonCode2["UnspecifiedError"] = 128] = "UnspecifiedError";
      SubackReasonCode2[SubackReasonCode2["ImplementationSpecificError"] = 131] = "ImplementationSpecificError";
      SubackReasonCode2[SubackReasonCode2["NotAuthorized"] = 135] = "NotAuthorized";
      SubackReasonCode2[SubackReasonCode2["TopicFilterInvalid"] = 143] = "TopicFilterInvalid";
      SubackReasonCode2[SubackReasonCode2["PacketIdentifierInUse"] = 145] = "PacketIdentifierInUse";
      SubackReasonCode2[SubackReasonCode2["QuotaExceeded"] = 151] = "QuotaExceeded";
      SubackReasonCode2[SubackReasonCode2["SharedSubscriptionsNotSupported"] = 158] = "SharedSubscriptionsNotSupported";
      SubackReasonCode2[SubackReasonCode2["SubscriptionIdentifiersNotSupported"] = 161] = "SubscriptionIdentifiersNotSupported";
      SubackReasonCode2[SubackReasonCode2["WildcardSubscriptionsNotSupported"] = 162] = "WildcardSubscriptionsNotSupported";
    })(SubackReasonCode = exports.SubackReasonCode || (exports.SubackReasonCode = {}));
    function isSuccessfulSubackReasonCode(reasonCode) {
      return reasonCode < 128;
    }
    __name(isSuccessfulSubackReasonCode, "isSuccessfulSubackReasonCode");
    exports.isSuccessfulSubackReasonCode = isSuccessfulSubackReasonCode;
    var UnsubackReasonCode;
    (function(UnsubackReasonCode2) {
      UnsubackReasonCode2[UnsubackReasonCode2["Success"] = 0] = "Success";
      UnsubackReasonCode2[UnsubackReasonCode2["NoSubscriptionExisted"] = 17] = "NoSubscriptionExisted";
      UnsubackReasonCode2[UnsubackReasonCode2["UnspecifiedError"] = 128] = "UnspecifiedError";
      UnsubackReasonCode2[UnsubackReasonCode2["ImplementationSpecificError"] = 131] = "ImplementationSpecificError";
      UnsubackReasonCode2[UnsubackReasonCode2["NotAuthorized"] = 135] = "NotAuthorized";
      UnsubackReasonCode2[UnsubackReasonCode2["TopicFilterInvalid"] = 143] = "TopicFilterInvalid";
      UnsubackReasonCode2[UnsubackReasonCode2["PacketIdentifierInUse"] = 145] = "PacketIdentifierInUse";
    })(UnsubackReasonCode = exports.UnsubackReasonCode || (exports.UnsubackReasonCode = {}));
    function isSuccessfulUnsubackReasonCode(reasonCode) {
      return reasonCode < 128;
    }
    __name(isSuccessfulUnsubackReasonCode, "isSuccessfulUnsubackReasonCode");
    exports.isSuccessfulUnsubackReasonCode = isSuccessfulUnsubackReasonCode;
    var PubackReasonCode;
    (function(PubackReasonCode2) {
      PubackReasonCode2[PubackReasonCode2["Success"] = 0] = "Success";
      PubackReasonCode2[PubackReasonCode2["NoMatchingSubscribers"] = 16] = "NoMatchingSubscribers";
      PubackReasonCode2[PubackReasonCode2["UnspecifiedError"] = 128] = "UnspecifiedError";
      PubackReasonCode2[PubackReasonCode2["ImplementationSpecificError"] = 131] = "ImplementationSpecificError";
      PubackReasonCode2[PubackReasonCode2["NotAuthorized"] = 135] = "NotAuthorized";
      PubackReasonCode2[PubackReasonCode2["TopicNameInvalid"] = 144] = "TopicNameInvalid";
      PubackReasonCode2[PubackReasonCode2["PacketIdentifierInUse"] = 145] = "PacketIdentifierInUse";
      PubackReasonCode2[PubackReasonCode2["QuotaExceeded"] = 151] = "QuotaExceeded";
      PubackReasonCode2[PubackReasonCode2["PayloadFormatInvalid"] = 153] = "PayloadFormatInvalid";
    })(PubackReasonCode = exports.PubackReasonCode || (exports.PubackReasonCode = {}));
    function isSuccessfulPubackReasonCode(reasonCode) {
      return reasonCode < 128;
    }
    __name(isSuccessfulPubackReasonCode, "isSuccessfulPubackReasonCode");
    exports.isSuccessfulPubackReasonCode = isSuccessfulPubackReasonCode;
    var PayloadFormatIndicator;
    (function(PayloadFormatIndicator2) {
      PayloadFormatIndicator2[PayloadFormatIndicator2["Bytes"] = 0] = "Bytes";
      PayloadFormatIndicator2[PayloadFormatIndicator2["Utf8"] = 1] = "Utf8";
    })(PayloadFormatIndicator = exports.PayloadFormatIndicator || (exports.PayloadFormatIndicator = {}));
    var QoS;
    (function(QoS2) {
      QoS2[QoS2["AtMostOnce"] = 0] = "AtMostOnce";
      QoS2[QoS2["AtLeastOnce"] = 1] = "AtLeastOnce";
      QoS2[QoS2["ExactlyOnce"] = 2] = "ExactlyOnce";
    })(QoS = exports.QoS || (exports.QoS = {}));
    var RetainHandlingType;
    (function(RetainHandlingType2) {
      RetainHandlingType2[RetainHandlingType2["SendOnSubscribe"] = 0] = "SendOnSubscribe";
      RetainHandlingType2[RetainHandlingType2["SendOnSubscribeIfNew"] = 1] = "SendOnSubscribeIfNew";
      RetainHandlingType2[RetainHandlingType2["DontSend"] = 2] = "DontSend";
    })(RetainHandlingType = exports.RetainHandlingType || (exports.RetainHandlingType = {}));
    var PacketType;
    (function(PacketType2) {
      PacketType2[PacketType2["Connect"] = 1] = "Connect";
      PacketType2[PacketType2["Connack"] = 2] = "Connack";
      PacketType2[PacketType2["Publish"] = 3] = "Publish";
      PacketType2[PacketType2["Puback"] = 4] = "Puback";
      PacketType2[PacketType2["Pubrec"] = 5] = "Pubrec";
      PacketType2[PacketType2["Pubrel"] = 6] = "Pubrel";
      PacketType2[PacketType2["Pubcomp"] = 7] = "Pubcomp";
      PacketType2[PacketType2["Subscribe"] = 8] = "Subscribe";
      PacketType2[PacketType2["Suback"] = 9] = "Suback";
      PacketType2[PacketType2["Unsubscribe"] = 10] = "Unsubscribe";
      PacketType2[PacketType2["Unsuback"] = 11] = "Unsuback";
      PacketType2[PacketType2["Pingreq"] = 12] = "Pingreq";
      PacketType2[PacketType2["Pingresp"] = 13] = "Pingresp";
      PacketType2[PacketType2["Disconnect"] = 14] = "Disconnect";
      PacketType2[PacketType2["Auth"] = 15] = "Auth";
    })(PacketType = exports.PacketType || (exports.PacketType = {}));
  }
});

// node_modules/aws-crt/dist/native/mqtt5.js
var require_mqtt52 = __commonJS({
  "node_modules/aws-crt/dist/native/mqtt5.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      var desc = Object.getOwnPropertyDescriptor(m5, k5);
      if (!desc || ("get" in desc ? !m5.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m5[k5];
        } };
      }
      Object.defineProperty(o5, k22, desc);
    } : function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      o5[k22] = m5[k5];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o5, v3) {
      Object.defineProperty(o5, "default", { enumerable: true, value: v3 });
    } : function(o5, v3) {
      o5["default"] = v3;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k5 in mod)
          if (k5 !== "default" && Object.prototype.hasOwnProperty.call(mod, k5))
            __createBinding2(result, mod, k5);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar2 = exports && exports.__exportStar || function(m5, exports2) {
      for (var p5 in m5)
        if (p5 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p5))
          __createBinding2(exports2, m5, p5);
    };
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mqtt5Client = exports.ClientExtendedValidationAndFlowControl = exports.ClientOperationQueueBehavior = exports.HttpProxyOptions = void 0;
    var binding_1 = __importDefault2(require_binding());
    var native_resource_1 = require_native_resource();
    var event_1 = require_event();
    var io = __importStar2(require_io2());
    var mqtt_shared = __importStar2(require_mqtt_shared());
    var error_1 = require_error();
    var http_1 = require_http2();
    Object.defineProperty(exports, "HttpProxyOptions", { enumerable: true, get: function() {
      return http_1.HttpProxyOptions;
    } });
    __exportStar2(require_mqtt5(), exports);
    __exportStar2(require_mqtt5_packet(), exports);
    var ClientOperationQueueBehavior;
    (function(ClientOperationQueueBehavior2) {
      ClientOperationQueueBehavior2[ClientOperationQueueBehavior2["Default"] = 0] = "Default";
      ClientOperationQueueBehavior2[ClientOperationQueueBehavior2["FailNonQos1PublishOnDisconnect"] = 1] = "FailNonQos1PublishOnDisconnect";
      ClientOperationQueueBehavior2[ClientOperationQueueBehavior2["FailQos0PublishOnDisconnect"] = 2] = "FailQos0PublishOnDisconnect";
      ClientOperationQueueBehavior2[ClientOperationQueueBehavior2["FailAllOnDisconnect"] = 3] = "FailAllOnDisconnect";
    })(ClientOperationQueueBehavior = exports.ClientOperationQueueBehavior || (exports.ClientOperationQueueBehavior = {}));
    var ClientExtendedValidationAndFlowControl;
    (function(ClientExtendedValidationAndFlowControl2) {
      ClientExtendedValidationAndFlowControl2[ClientExtendedValidationAndFlowControl2["None"] = 0] = "None";
      ClientExtendedValidationAndFlowControl2[ClientExtendedValidationAndFlowControl2["AwsIotCoreDefaults"] = 1] = "AwsIotCoreDefaults";
    })(ClientExtendedValidationAndFlowControl = exports.ClientExtendedValidationAndFlowControl || (exports.ClientExtendedValidationAndFlowControl = {}));
    var Mqtt5Client = class extends (0, native_resource_1.NativeResourceMixin)(event_1.BufferedEventEmitter) {
      constructor(config) {
        super();
        this._super(binding_1.default.mqtt5_client_new(this, config, (client) => {
          Mqtt5Client._s_on_stopped(client);
        }, (client) => {
          Mqtt5Client._s_on_attempting_connect(client);
        }, (client, connack, settings) => {
          Mqtt5Client._s_on_connection_success(client, connack, settings);
        }, (client, errorCode, connack) => {
          Mqtt5Client._s_on_connection_failure(client, new error_1.CrtError(errorCode), connack);
        }, (client, errorCode, disconnect) => {
          Mqtt5Client._s_on_disconnection(client, new error_1.CrtError(errorCode), disconnect);
        }, (client, message) => {
          Mqtt5Client._s_on_message_received(client, message);
        }, config.clientBootstrap ? config.clientBootstrap.native_handle() : null, config.socketOptions ? config.socketOptions.native_handle() : null, config.tlsCtx ? config.tlsCtx.native_handle() : null, config.httpProxyOptions ? config.httpProxyOptions.create_native_handle() : null));
      }
      close() {
        binding_1.default.mqtt5_client_close(this.native_handle());
      }
      start() {
        binding_1.default.mqtt5_client_start(this.native_handle());
      }
      stop(disconnectPacket) {
        binding_1.default.mqtt5_client_stop(this.native_handle(), disconnectPacket);
      }
      subscribe(packet) {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            function curriedPromiseCallback(client, errorCode, suback) {
              return Mqtt5Client._s_on_suback_callback(resolve, reject, client, errorCode, suback);
            }
            __name(curriedPromiseCallback, "curriedPromiseCallback");
            try {
              binding_1.default.mqtt5_client_subscribe(this.native_handle(), packet, curriedPromiseCallback);
            } catch (e5) {
              reject(e5);
            }
          });
        });
      }
      unsubscribe(packet) {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            function curriedPromiseCallback(client, errorCode, unsuback) {
              return Mqtt5Client._s_on_unsuback_callback(resolve, reject, client, errorCode, unsuback);
            }
            __name(curriedPromiseCallback, "curriedPromiseCallback");
            try {
              binding_1.default.mqtt5_client_unsubscribe(this.native_handle(), packet, curriedPromiseCallback);
            } catch (e5) {
              reject(e5);
            }
          });
        });
      }
      publish(packet) {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            if (packet && packet.payload) {
              packet.payload = mqtt_shared.normalize_payload(packet.payload);
            }
            function curriedPromiseCallback(client, errorCode, result) {
              return Mqtt5Client._s_on_puback_callback(resolve, reject, client, errorCode, result);
            }
            __name(curriedPromiseCallback, "curriedPromiseCallback");
            try {
              binding_1.default.mqtt5_client_publish(this.native_handle(), packet, curriedPromiseCallback);
            } catch (e5) {
              reject(e5);
            }
          });
        });
      }
      getQueueStatistics() {
        return binding_1.default.mqtt5_client_get_queue_statistics(this.native_handle());
      }
      on(event, listener) {
        super.on(event, listener);
        return this;
      }
      static _s_on_stopped(client) {
        process.nextTick(() => {
          let stoppedEvent = {};
          client.emit(Mqtt5Client.STOPPED, stoppedEvent);
        });
      }
      static _s_on_attempting_connect(client) {
        process.nextTick(() => {
          let attemptingConnectEvent = {};
          client.emit(Mqtt5Client.ATTEMPTING_CONNECT, attemptingConnectEvent);
        });
      }
      static _s_on_connection_success(client, connack, settings) {
        let connectionSuccessEvent = {
          connack,
          settings
        };
        process.nextTick(() => {
          client.emit(Mqtt5Client.CONNECTION_SUCCESS, connectionSuccessEvent);
        });
      }
      static _s_on_connection_failure(client, error, connack) {
        let connectionFailureEvent = {
          error
        };
        if (connack !== null && connack !== void 0) {
          connectionFailureEvent.connack = connack;
        }
        process.nextTick(() => {
          client.emit(Mqtt5Client.CONNECTION_FAILURE, connectionFailureEvent);
        });
      }
      static _s_on_disconnection(client, error, disconnect) {
        let disconnectionEvent = {
          error
        };
        if (disconnect !== null && disconnect !== void 0) {
          disconnectionEvent.disconnect = disconnect;
        }
        process.nextTick(() => {
          client.emit(Mqtt5Client.DISCONNECTION, disconnectionEvent);
        });
      }
      static _s_on_suback_callback(resolve, reject, client, errorCode, suback) {
        if (errorCode == 0 && suback !== void 0) {
          resolve(suback);
        } else {
          reject(io.error_code_to_string(errorCode));
        }
      }
      static _s_on_unsuback_callback(resolve, reject, client, errorCode, unsuback) {
        if (errorCode == 0 && unsuback !== void 0) {
          resolve(unsuback);
        } else {
          reject(io.error_code_to_string(errorCode));
        }
      }
      static _s_on_puback_callback(resolve, reject, client, errorCode, result) {
        if (errorCode == 0) {
          resolve(result);
        } else {
          reject(io.error_code_to_string(errorCode));
        }
      }
      static _s_on_message_received(client, message) {
        let messageReceivedEvent = {
          message
        };
        process.nextTick(() => {
          client.emit(Mqtt5Client.MESSAGE_RECEIVED, messageReceivedEvent);
        });
      }
    };
    __name(Mqtt5Client, "Mqtt5Client");
    exports.Mqtt5Client = Mqtt5Client;
    Mqtt5Client.ERROR = "error";
    Mqtt5Client.MESSAGE_RECEIVED = "messageReceived";
    Mqtt5Client.ATTEMPTING_CONNECT = "attemptingConnect";
    Mqtt5Client.CONNECTION_SUCCESS = "connectionSuccess";
    Mqtt5Client.CONNECTION_FAILURE = "connectionFailure";
    Mqtt5Client.DISCONNECTION = "disconnection";
    Mqtt5Client.STOPPED = "stopped";
  }
});

// node_modules/aws-crt/dist/native/aws_iot_mqtt5.js
var require_aws_iot_mqtt5 = __commonJS({
  "node_modules/aws-crt/dist/native/aws_iot_mqtt5.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      var desc = Object.getOwnPropertyDescriptor(m5, k5);
      if (!desc || ("get" in desc ? !m5.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m5[k5];
        } };
      }
      Object.defineProperty(o5, k22, desc);
    } : function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      o5[k22] = m5[k5];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o5, v3) {
      Object.defineProperty(o5, "default", { enumerable: true, value: v3 });
    } : function(o5, v3) {
      o5["default"] = v3;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k5 in mod)
          if (k5 !== "default" && Object.prototype.hasOwnProperty.call(mod, k5))
            __createBinding2(result, mod, k5);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsIotMqtt5ClientConfigBuilder = void 0;
    var mqtt5 = __importStar2(require_mqtt52());
    var io = __importStar2(require_io2());
    var auth = __importStar2(require_auth());
    var error_1 = require_error();
    var iot_shared = __importStar2(require_aws_iot_shared());
    var mqtt_shared = __importStar2(require_mqtt_shared());
    var AwsIotMqtt5ClientConfigBuilder = class {
      constructor(hostName, port, tlsContextOptions) {
        this.tlsContextOptions = tlsContextOptions;
        this.config = {
          hostName,
          port,
          connectProperties: {
            keepAliveIntervalSeconds: mqtt_shared.DEFAULT_KEEP_ALIVE
          },
          extendedValidationAndFlowControlOptions: mqtt5.ClientExtendedValidationAndFlowControl.AwsIotCoreDefaults
        };
      }
      static newDirectMqttBuilderWithMtlsFromPath(hostName, certPath, keyPath) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_DIRECT_MQTT_PORT, io.TlsContextOptions.create_client_with_mtls_from_path(certPath, keyPath));
        if (io.is_alpn_available()) {
          builder.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static newDirectMqttBuilderWithMtlsFromMemory(hostName, cert, privateKey) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_DIRECT_MQTT_PORT, io.TlsContextOptions.create_client_with_mtls(cert, privateKey));
        if (io.is_alpn_available()) {
          builder.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static newDirectMqttBuilderWithMtlsFromPkcs11(hostName, pkcs11Options) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_DIRECT_MQTT_PORT, io.TlsContextOptions.create_client_with_mtls_pkcs11(pkcs11Options));
        if (io.is_alpn_available()) {
          builder.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static newDirectMqttBuilderWithMtlsFromPkcs12(hostName, pkcs12_options) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_DIRECT_MQTT_PORT, io.TlsContextOptions.create_client_with_mtls_pkcs12_from_path(pkcs12_options.pkcs12_file, pkcs12_options.pkcs12_password));
        if (io.is_alpn_available()) {
          builder.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static newDirectMqttBuilderWithMtlsFromWindowsCertStorePath(hostName, certificatePath) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_DIRECT_MQTT_PORT, io.TlsContextOptions.create_client_with_mtls_windows_cert_store_path(certificatePath));
        if (io.is_alpn_available()) {
          builder.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static newDirectMqttBuilderWithCustomAuth(hostName, customAuthConfig) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_WEBSOCKET_MQTT_PORT, new io.TlsContextOptions());
        builder.customAuthConfig = customAuthConfig;
        builder.tlsContextOptions.alpn_list = ["mqtt"];
        return builder;
      }
      static newWebsocketMqttBuilderWithSigv4Auth(hostName, options) {
        let tlsContextOptions = new io.TlsContextOptions();
        tlsContextOptions.alpn_list = [];
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_WEBSOCKET_MQTT_PORT, tlsContextOptions);
        let credentialsProvider = options === null || options === void 0 ? void 0 : options.credentialsProvider;
        if (!credentialsProvider) {
          credentialsProvider = auth.AwsCredentialsProvider.newDefault();
        }
        builder.config.websocketHandshakeTransform = (request2, done) => __awaiter2(this, void 0, void 0, function* () {
          var _a;
          try {
            const signingConfig = {
              algorithm: auth.AwsSigningAlgorithm.SigV4,
              signature_type: auth.AwsSignatureType.HttpRequestViaQueryParams,
              provider: credentialsProvider,
              region: (_a = options === null || options === void 0 ? void 0 : options.region) !== null && _a !== void 0 ? _a : iot_shared.extractRegionFromEndpoint(hostName),
              service: "iotdevicegateway",
              signed_body_value: auth.AwsSignedBodyValue.EmptySha256,
              omit_session_token: true
            };
            yield auth.aws_sign_request(request2, signingConfig);
            done();
          } catch (error) {
            if (error instanceof error_1.CrtError) {
              done(error.error_code);
            } else {
              done(3);
            }
          }
        });
        return builder;
      }
      static newWebsocketMqttBuilderWithCustomAuth(hostName, customAuthConfig) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_WEBSOCKET_MQTT_PORT, new io.TlsContextOptions());
        builder.customAuthConfig = customAuthConfig;
        builder.config.websocketHandshakeTransform = (request2, done) => __awaiter2(this, void 0, void 0, function* () {
          done(0);
        });
        return builder;
      }
      withCertificateAuthorityFromPath(caDirpath, caFilepath) {
        this.tlsContextOptions.override_default_trust_store_from_path(caDirpath, caFilepath);
        return this;
      }
      withCertificateAuthority(ca) {
        this.tlsContextOptions.override_default_trust_store(ca);
        return this;
      }
      withPort(port) {
        this.config.port = port;
        return this;
      }
      withConnectProperties(connectPacket) {
        this.config.connectProperties = connectPacket;
        return this;
      }
      withSessionBehavior(sessionBehavior) {
        this.config.sessionBehavior = sessionBehavior;
        return this;
      }
      withRetryJitterMode(retryJitterMode) {
        this.config.retryJitterMode = retryJitterMode;
        return this;
      }
      withMinReconnectDelayMs(minReconnectDelayMs) {
        this.config.minReconnectDelayMs = minReconnectDelayMs;
        return this;
      }
      withMaxReconnectDelayMs(maxReconnectDelayMs) {
        this.config.maxReconnectDelayMs = maxReconnectDelayMs;
        return this;
      }
      withMinConnectedTimeToResetReconnectDelayMs(minConnectedTimeToResetReconnectDelayMs) {
        this.config.minConnectedTimeToResetReconnectDelayMs = minConnectedTimeToResetReconnectDelayMs;
        return this;
      }
      withConnackTimeoutMs(connackTimeoutMs) {
        this.config.connackTimeoutMs = connackTimeoutMs;
        return this;
      }
      withOfflineQueueBehavior(offlineQueueBehavior) {
        this.config.offlineQueueBehavior = offlineQueueBehavior;
        return this;
      }
      withPingTimeoutMs(pingTimeoutMs) {
        this.config.pingTimeoutMs = pingTimeoutMs;
        return this;
      }
      withAckTimeoutSeconds(ackTimeoutSeconds) {
        this.config.ackTimeoutSeconds = ackTimeoutSeconds;
        return this;
      }
      withSocketOptions(socketOptions) {
        this.config.socketOptions = socketOptions;
        return this;
      }
      withHttpProxyOptions(httpProxyOptions) {
        this.config.httpProxyOptions = httpProxyOptions;
        return this;
      }
      withExtendedValidationAndFlowControlOptions(extendedValidationAndFlowControlOptions) {
        this.config.extendedValidationAndFlowControlOptions = extendedValidationAndFlowControlOptions;
        return this;
      }
      build() {
        var _a, _b;
        if (this.config.tlsCtx === void 0) {
          this.config.tlsCtx = new io.ClientTlsContext(this.tlsContextOptions);
        }
        if (this.config.connectProperties) {
          this.config.connectProperties.username = iot_shared.buildMqtt5FinalUsername(this.customAuthConfig);
          if ((_a = this.customAuthConfig) === null || _a === void 0 ? void 0 : _a.password) {
            this.config.connectProperties.password = (_b = this.customAuthConfig) === null || _b === void 0 ? void 0 : _b.password;
          }
        }
        return this.config;
      }
    };
    __name(AwsIotMqtt5ClientConfigBuilder, "AwsIotMqtt5ClientConfigBuilder");
    exports.AwsIotMqtt5ClientConfigBuilder = AwsIotMqtt5ClientConfigBuilder;
    AwsIotMqtt5ClientConfigBuilder.DEFAULT_WEBSOCKET_MQTT_PORT = 443;
    AwsIotMqtt5ClientConfigBuilder.DEFAULT_DIRECT_MQTT_PORT = 8883;
  }
});

// node_modules/aws-crt/dist/native/iot.js
var require_iot = __commonJS({
  "node_modules/aws-crt/dist/native/iot.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      var desc = Object.getOwnPropertyDescriptor(m5, k5);
      if (!desc || ("get" in desc ? !m5.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m5[k5];
        } };
      }
      Object.defineProperty(o5, k22, desc);
    } : function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      o5[k22] = m5[k5];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m5, exports2) {
      for (var p5 in m5)
        if (p5 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p5))
          __createBinding2(exports2, m5, p5);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(require_aws_iot(), exports);
    __exportStar2(require_aws_iot_mqtt5(), exports);
  }
});

// node_modules/aws-crt/dist/native/mqtt.js
var require_mqtt2 = __commonJS({
  "node_modules/aws-crt/dist/native/mqtt.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      var desc = Object.getOwnPropertyDescriptor(m5, k5);
      if (!desc || ("get" in desc ? !m5.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m5[k5];
        } };
      }
      Object.defineProperty(o5, k22, desc);
    } : function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      o5[k22] = m5[k5];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o5, v3) {
      Object.defineProperty(o5, "default", { enumerable: true, value: v3 });
    } : function(o5, v3) {
      o5["default"] = v3;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k5 in mod)
          if (k5 !== "default" && Object.prototype.hasOwnProperty.call(mod, k5))
            __createBinding2(result, mod, k5);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e5) {
            reject(e5);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MqttClientConnection = exports.MqttClient = exports.MqttWill = exports.QoS = exports.HttpProxyOptions = void 0;
    var binding_1 = __importDefault2(require_binding());
    var native_resource_1 = require_native_resource();
    var event_1 = require_event();
    var crt = __importStar2(require_mqtt_shared());
    var error_1 = require_error();
    var io = __importStar2(require_io2());
    var http_1 = require_http2();
    Object.defineProperty(exports, "HttpProxyOptions", { enumerable: true, get: function() {
      return http_1.HttpProxyOptions;
    } });
    var mqtt_1 = require_mqtt();
    var mqtt_2 = require_mqtt();
    Object.defineProperty(exports, "QoS", { enumerable: true, get: function() {
      return mqtt_2.QoS;
    } });
    Object.defineProperty(exports, "MqttWill", { enumerable: true, get: function() {
      return mqtt_2.MqttWill;
    } });
    var MqttClient = class extends native_resource_1.NativeResource {
      constructor(bootstrap = void 0) {
        super(binding_1.default.mqtt_client_new(bootstrap != null ? bootstrap.native_handle() : null));
        this.bootstrap = bootstrap;
      }
      new_connection(config) {
        return new MqttClientConnection(this, config);
      }
    };
    __name(MqttClient, "MqttClient");
    exports.MqttClient = MqttClient;
    var MqttClientConnection = class extends (0, native_resource_1.NativeResourceMixin)(event_1.BufferedEventEmitter) {
      constructor(client, config) {
        super();
        this.client = client;
        this.config = config;
        if (config == null || config == void 0) {
          throw new error_1.CrtError("MqttClientConnection constructor: config not defined");
        }
        const will = config.will ? {
          topic: config.will.topic,
          qos: config.will.qos,
          payload: crt.normalize_payload(config.will.payload),
          retain: config.will.retain
        } : void 0;
        var min_sec = mqtt_1.DEFAULT_RECONNECT_MIN_SEC;
        var max_sec = mqtt_1.DEFAULT_RECONNECT_MAX_SEC;
        if (config.reconnect_min_sec) {
          min_sec = config.reconnect_min_sec;
          max_sec = Math.max(min_sec, max_sec);
        }
        if (config.reconnect_max_sec) {
          max_sec = config.reconnect_max_sec;
          min_sec = Math.min(min_sec, max_sec);
        }
        if (client == void 0 || client == null) {
          throw new error_1.CrtError("MqttClientConnection constructor: client not defined");
        }
        if (config.socket_options == void 0 || config.socket_options == null) {
          throw new error_1.CrtError("MqttClientConnection constructor: socket_options in configuration not defined");
        }
        this._super(binding_1.default.mqtt_client_connection_new(client.native_handle(), (error_code) => {
          this._on_connection_interrupted(error_code);
        }, (return_code, session_present) => {
          this._on_connection_resumed(return_code, session_present);
        }, config.tls_ctx ? config.tls_ctx.native_handle() : null, will, config.username, config.password, config.use_websocket, config.proxy_options ? config.proxy_options.create_native_handle() : void 0, config.websocket_handshake_transform, min_sec, max_sec));
        this.tls_ctx = config.tls_ctx;
        binding_1.default.mqtt_client_connection_on_message(this.native_handle(), this._on_any_publish.bind(this));
        binding_1.default.mqtt_client_connection_on_closed(this.native_handle(), this._on_connection_closed.bind(this));
        this.on("error", (error) => {
        });
      }
      close() {
        binding_1.default.mqtt_client_connection_close(this.native_handle());
      }
      on(event, listener) {
        super.on(event, listener);
        if (event == "connect") {
          process.nextTick(() => {
            this.uncork();
          });
        }
        return this;
      }
      connect() {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            reject = this._reject(reject);
            if (this.config.socket_options == null || this.config.socket_options == void 0) {
              throw new error_1.CrtError("MqttClientConnection connect: socket_options in configuration not defined");
            }
            try {
              binding_1.default.mqtt_client_connection_connect(this.native_handle(), this.config.client_id, this.config.host_name, this.config.port, this.config.socket_options.native_handle(), this.config.keep_alive, this.config.ping_timeout, this.config.protocol_operation_timeout, this.config.clean_session, this._on_connect_callback.bind(this, resolve, reject));
            } catch (e5) {
              reject(e5);
            }
          });
        });
      }
      reconnect() {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            reject = this._reject(reject);
            try {
              binding_1.default.mqtt_client_connection_reconnect(this.native_handle(), this._on_connect_callback.bind(this, resolve, reject));
            } catch (e5) {
              reject(e5);
            }
          });
        });
      }
      publish(topic, payload, qos, retain = false) {
        return __awaiter2(this, void 0, void 0, function* () {
          if (typeof topic !== "string") {
            return Promise.reject("topic is not a string");
          }
          if (typeof qos !== "number") {
            return Promise.reject("qos is not a number");
          }
          if (typeof retain !== "boolean") {
            return Promise.reject("retain is not a boolean");
          }
          return new Promise((resolve, reject) => {
            reject = this._reject(reject);
            try {
              binding_1.default.mqtt_client_connection_publish(this.native_handle(), topic, crt.normalize_payload(payload), qos, retain, this._on_puback_callback.bind(this, resolve, reject));
            } catch (e5) {
              reject(e5);
            }
          });
        });
      }
      subscribe(topic, qos, on_message) {
        return __awaiter2(this, void 0, void 0, function* () {
          if (typeof topic !== "string") {
            return Promise.reject("topic is not a string");
          }
          if (typeof qos !== "number") {
            return Promise.reject("qos is not a number");
          }
          return new Promise((resolve, reject) => {
            reject = this._reject(reject);
            try {
              binding_1.default.mqtt_client_connection_subscribe(this.native_handle(), topic, qos, on_message, this._on_suback_callback.bind(this, resolve, reject));
            } catch (e5) {
              reject(e5);
            }
          });
        });
      }
      unsubscribe(topic) {
        return __awaiter2(this, void 0, void 0, function* () {
          if (typeof topic !== "string") {
            return Promise.reject("topic is not a string");
          }
          return new Promise((resolve, reject) => {
            reject = this._reject(reject);
            try {
              binding_1.default.mqtt_client_connection_unsubscribe(this.native_handle(), topic, this._on_unsuback_callback.bind(this, resolve, reject));
            } catch (e5) {
              reject(e5);
            }
          });
        });
      }
      disconnect() {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            reject = this._reject(reject);
            try {
              binding_1.default.mqtt_client_connection_disconnect(this.native_handle(), this._on_disconnect_callback.bind(this, resolve));
            } catch (e5) {
              reject(e5);
            }
          });
        });
      }
      getQueueStatistics() {
        return binding_1.default.mqtt_client_connection_get_queue_statistics(this.native_handle());
      }
      _reject(reject) {
        return (reason) => {
          reject(reason);
          process.nextTick(() => {
            this.emit("error", new error_1.CrtError(reason));
          });
        };
      }
      _on_connection_interrupted(error_code) {
        this.emit("interrupt", new error_1.CrtError(error_code));
      }
      _on_connection_resumed(return_code, session_present) {
        this.emit("resume", return_code, session_present);
        let successCallbackData = { session_present, reason_code: return_code };
        this.emit("connection_success", successCallbackData);
      }
      _on_any_publish(topic, payload, dup, qos, retain) {
        this.emit("message", topic, payload, dup, qos, retain);
      }
      _on_connection_closed() {
        let closedCallbackData = {};
        this.emit("closed", closedCallbackData);
        this.close();
      }
      _on_connect_callback(resolve, reject, error_code, return_code, session_present) {
        if (error_code == 0 && return_code == 0) {
          resolve(session_present);
          this.emit("connect", session_present);
          let successCallbackData = { session_present, reason_code: return_code };
          this.emit("connection_success", successCallbackData);
        } else if (error_code != 0) {
          reject("Failed to connect: " + io.error_code_to_string(error_code));
          let failureCallbackData = { error: new error_1.CrtError(error_code) };
          this.emit("connection_failure", failureCallbackData);
        } else {
          reject("Server rejected connection.");
          let failureCallbackData = { error: new error_1.CrtError(5134) };
          this.emit("connection_failure", failureCallbackData);
        }
      }
      _on_puback_callback(resolve, reject, packet_id, error_code) {
        if (error_code == 0) {
          resolve({ packet_id });
        } else {
          reject("Failed to publish: " + io.error_code_to_string(error_code));
        }
      }
      _on_suback_callback(resolve, reject, packet_id, topic, qos, error_code) {
        if (error_code == 0) {
          resolve({ packet_id, topic, qos, error_code });
        } else {
          reject("Failed to subscribe: " + io.error_code_to_string(error_code));
        }
      }
      _on_unsuback_callback(resolve, reject, packet_id, error_code) {
        if (error_code == 0) {
          resolve({ packet_id });
        } else {
          reject("Failed to unsubscribe: " + io.error_code_to_string(error_code));
        }
      }
      _on_disconnect_callback(resolve) {
        resolve();
        this.emit("disconnect");
      }
    };
    __name(MqttClientConnection, "MqttClientConnection");
    exports.MqttClientConnection = MqttClientConnection;
    MqttClientConnection.CONNECT = "connect";
    MqttClientConnection.DISCONNECT = "disconnect";
    MqttClientConnection.ERROR = "error";
    MqttClientConnection.INTERRUPT = "interrupt";
    MqttClientConnection.RESUME = "resume";
    MqttClientConnection.MESSAGE = "message";
    MqttClientConnection.CONNECTION_SUCCESS = "connection_success";
    MqttClientConnection.CONNECTION_FAILURE = "connection_failure";
    MqttClientConnection.CLOSED = "closed";
  }
});

// node_modules/aws-crt/dist/index.js
var require_dist = __commonJS({
  "node_modules/aws-crt/dist/index.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      var desc = Object.getOwnPropertyDescriptor(m5, k5);
      if (!desc || ("get" in desc ? !m5.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m5[k5];
        } };
      }
      Object.defineProperty(o5, k22, desc);
    } : function(o5, m5, k5, k22) {
      if (k22 === void 0)
        k22 = k5;
      o5[k22] = m5[k5];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o5, v3) {
      Object.defineProperty(o5, "default", { enumerable: true, value: v3 });
    } : function(o5, v3) {
      o5["default"] = v3;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k5 in mod)
          if (k5 !== "default" && Object.prototype.hasOwnProperty.call(mod, k5))
            __createBinding2(result, mod, k5);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CrtError = exports.resource_safety = exports.promise = exports.platform = exports.mqtt5 = exports.mqtt = exports.iot = exports.io = exports.http = exports.eventstream = exports.crt = exports.crypto = exports.checksums = exports.cancel = exports.auth = void 0;
    var cancel = __importStar2(require_cancel());
    exports.cancel = cancel;
    var platform2 = __importStar2(require_platform());
    exports.platform = platform2;
    var promise = __importStar2(require_promise());
    exports.promise = promise;
    var resource_safety = __importStar2(require_resource_safety());
    exports.resource_safety = resource_safety;
    var auth = __importStar2(require_auth());
    exports.auth = auth;
    var checksums = __importStar2(require_checksums());
    exports.checksums = checksums;
    var crt = __importStar2(require_crt());
    exports.crt = crt;
    var crypto2 = __importStar2(require_crypto());
    exports.crypto = crypto2;
    var eventstream = __importStar2(require_eventstream());
    exports.eventstream = eventstream;
    var http = __importStar2(require_http2());
    exports.http = http;
    var io = __importStar2(require_io2());
    exports.io = io;
    var iot = __importStar2(require_iot());
    exports.iot = iot;
    var mqtt = __importStar2(require_mqtt2());
    exports.mqtt = mqtt;
    var mqtt5 = __importStar2(require_mqtt52());
    exports.mqtt5 = mqtt5;
    var error_1 = require_error();
    Object.defineProperty(exports, "CrtError", { enumerable: true, get: function() {
      return error_1.CrtError;
    } });
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module2) {
    var buffer = __require("buffer");
    var Buffer5 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    __name(copyProps, "copyProps");
    if (Buffer5.from && Buffer5.alloc && Buffer5.allocUnsafe && Buffer5.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer5(arg, encodingOrOffset, length);
    }
    __name(SafeBuffer, "SafeBuffer");
    SafeBuffer.prototype = Object.create(Buffer5.prototype);
    copyProps(Buffer5, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer5(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer5(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer5(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/jws/lib/data-stream.js
var require_data_stream = __commonJS({
  "node_modules/jws/lib/data-stream.js"(exports, module2) {
    var Buffer5 = require_safe_buffer().Buffer;
    var Stream = __require("stream");
    var util = __require("util");
    function DataStream(data) {
      this.buffer = null;
      this.writable = true;
      this.readable = true;
      if (!data) {
        this.buffer = Buffer5.alloc(0);
        return this;
      }
      if (typeof data.pipe === "function") {
        this.buffer = Buffer5.alloc(0);
        data.pipe(this);
        return this;
      }
      if (data.length || typeof data === "object") {
        this.buffer = data;
        this.writable = false;
        process.nextTick(function() {
          this.emit("end", data);
          this.readable = false;
          this.emit("close");
        }.bind(this));
        return this;
      }
      throw new TypeError("Unexpected data type (" + typeof data + ")");
    }
    __name(DataStream, "DataStream");
    util.inherits(DataStream, Stream);
    DataStream.prototype.write = /* @__PURE__ */ __name(function write(data) {
      this.buffer = Buffer5.concat([this.buffer, Buffer5.from(data)]);
      this.emit("data", data);
    }, "write");
    DataStream.prototype.end = /* @__PURE__ */ __name(function end(data) {
      if (data)
        this.write(data);
      this.emit("end", data);
      this.emit("close");
      this.writable = false;
      this.readable = false;
    }, "end");
    module2.exports = DataStream;
  }
});

// node_modules/buffer-equal-constant-time/index.js
var require_buffer_equal_constant_time = __commonJS({
  "node_modules/buffer-equal-constant-time/index.js"(exports, module2) {
    "use strict";
    var Buffer5 = __require("buffer").Buffer;
    var SlowBuffer = __require("buffer").SlowBuffer;
    module2.exports = bufferEq;
    function bufferEq(a5, b5) {
      if (!Buffer5.isBuffer(a5) || !Buffer5.isBuffer(b5)) {
        return false;
      }
      if (a5.length !== b5.length) {
        return false;
      }
      var c5 = 0;
      for (var i5 = 0; i5 < a5.length; i5++) {
        c5 |= a5[i5] ^ b5[i5];
      }
      return c5 === 0;
    }
    __name(bufferEq, "bufferEq");
    bufferEq.install = function() {
      Buffer5.prototype.equal = SlowBuffer.prototype.equal = /* @__PURE__ */ __name(function equal(that) {
        return bufferEq(this, that);
      }, "equal");
    };
    var origBufEqual = Buffer5.prototype.equal;
    var origSlowBufEqual = SlowBuffer.prototype.equal;
    bufferEq.restore = function() {
      Buffer5.prototype.equal = origBufEqual;
      SlowBuffer.prototype.equal = origSlowBufEqual;
    };
  }
});

// node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js
var require_param_bytes_for_alg = __commonJS({
  "node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js"(exports, module2) {
    "use strict";
    function getParamSize(keySize) {
      var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
      return result;
    }
    __name(getParamSize, "getParamSize");
    var paramBytesForAlg = {
      ES256: getParamSize(256),
      ES384: getParamSize(384),
      ES512: getParamSize(521)
    };
    function getParamBytesForAlg(alg) {
      var paramBytes = paramBytesForAlg[alg];
      if (paramBytes) {
        return paramBytes;
      }
      throw new Error('Unknown algorithm "' + alg + '"');
    }
    __name(getParamBytesForAlg, "getParamBytesForAlg");
    module2.exports = getParamBytesForAlg;
  }
});

// node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js
var require_ecdsa_sig_formatter = __commonJS({
  "node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js"(exports, module2) {
    "use strict";
    var Buffer5 = require_safe_buffer().Buffer;
    var getParamBytesForAlg = require_param_bytes_for_alg();
    var MAX_OCTET = 128;
    var CLASS_UNIVERSAL = 0;
    var PRIMITIVE_BIT = 32;
    var TAG_SEQ = 16;
    var TAG_INT = 2;
    var ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
    var ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
    function base64Url(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    __name(base64Url, "base64Url");
    function signatureAsBuffer(signature) {
      if (Buffer5.isBuffer(signature)) {
        return signature;
      } else if ("string" === typeof signature) {
        return Buffer5.from(signature, "base64");
      }
      throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
    }
    __name(signatureAsBuffer, "signatureAsBuffer");
    function derToJose(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var maxEncodedParamLength = paramBytes + 1;
      var inputLength = signature.length;
      var offset = 0;
      if (signature[offset++] !== ENCODED_TAG_SEQ) {
        throw new Error('Could not find expected "seq"');
      }
      var seqLength = signature[offset++];
      if (seqLength === (MAX_OCTET | 1)) {
        seqLength = signature[offset++];
      }
      if (inputLength - offset < seqLength) {
        throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
      }
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "r"');
      }
      var rLength = signature[offset++];
      if (inputLength - offset - 2 < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
      }
      if (maxEncodedParamLength < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var rOffset = offset;
      offset += rLength;
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "s"');
      }
      var sLength = signature[offset++];
      if (inputLength - offset !== sLength) {
        throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
      }
      if (maxEncodedParamLength < sLength) {
        throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var sOffset = offset;
      offset += sLength;
      if (offset !== inputLength) {
        throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
      }
      var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
      var dst = Buffer5.allocUnsafe(rPadding + rLength + sPadding + sLength);
      for (offset = 0; offset < rPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
      offset = paramBytes;
      for (var o5 = offset; offset < o5 + sPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
      dst = dst.toString("base64");
      dst = base64Url(dst);
      return dst;
    }
    __name(derToJose, "derToJose");
    function countPadding(buf, start, stop) {
      var padding = 0;
      while (start + padding < stop && buf[start + padding] === 0) {
        ++padding;
      }
      var needsSign = buf[start + padding] >= MAX_OCTET;
      if (needsSign) {
        --padding;
      }
      return padding;
    }
    __name(countPadding, "countPadding");
    function joseToDer(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var signatureBytes = signature.length;
      if (signatureBytes !== paramBytes * 2) {
        throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
      }
      var rPadding = countPadding(signature, 0, paramBytes);
      var sPadding = countPadding(signature, paramBytes, signature.length);
      var rLength = paramBytes - rPadding;
      var sLength = paramBytes - sPadding;
      var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
      var shortLength = rsBytes < MAX_OCTET;
      var dst = Buffer5.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
      var offset = 0;
      dst[offset++] = ENCODED_TAG_SEQ;
      if (shortLength) {
        dst[offset++] = rsBytes;
      } else {
        dst[offset++] = MAX_OCTET | 1;
        dst[offset++] = rsBytes & 255;
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = rLength;
      if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
      } else {
        offset += signature.copy(dst, offset, rPadding, paramBytes);
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = sLength;
      if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
      } else {
        signature.copy(dst, offset, paramBytes + sPadding);
      }
      return dst;
    }
    __name(joseToDer, "joseToDer");
    module2.exports = {
      derToJose,
      joseToDer
    };
  }
});

// node_modules/jwa/index.js
var require_jwa = __commonJS({
  "node_modules/jwa/index.js"(exports, module2) {
    var bufferEqual = require_buffer_equal_constant_time();
    var Buffer5 = require_safe_buffer().Buffer;
    var crypto2 = __require("crypto");
    var formatEcdsa = require_ecdsa_sig_formatter();
    var util = __require("util");
    var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
    var MSG_INVALID_SECRET = "secret must be a string or buffer";
    var MSG_INVALID_VERIFIER_KEY = "key must be a string or a buffer";
    var MSG_INVALID_SIGNER_KEY = "key must be a string, a buffer or an object";
    var supportsKeyObjects = typeof crypto2.createPublicKey === "function";
    if (supportsKeyObjects) {
      MSG_INVALID_VERIFIER_KEY += " or a KeyObject";
      MSG_INVALID_SECRET += "or a KeyObject";
    }
    function checkIsPublicKey(key) {
      if (Buffer5.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.type !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.asymmetricKeyType !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
    }
    __name(checkIsPublicKey, "checkIsPublicKey");
    function checkIsPrivateKey(key) {
      if (Buffer5.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (typeof key === "object") {
        return;
      }
      throw typeError(MSG_INVALID_SIGNER_KEY);
    }
    __name(checkIsPrivateKey, "checkIsPrivateKey");
    function checkIsSecretKey(key) {
      if (Buffer5.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return key;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (key.type !== "secret") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_SECRET);
      }
    }
    __name(checkIsSecretKey, "checkIsSecretKey");
    function fromBase642(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    __name(fromBase642, "fromBase64");
    function toBase642(base64url) {
      base64url = base64url.toString();
      var padding = 4 - base64url.length % 4;
      if (padding !== 4) {
        for (var i5 = 0; i5 < padding; ++i5) {
          base64url += "=";
        }
      }
      return base64url.replace(/\-/g, "+").replace(/_/g, "/");
    }
    __name(toBase642, "toBase64");
    function typeError(template) {
      var args = [].slice.call(arguments, 1);
      var errMsg = util.format.bind(util, template).apply(null, args);
      return new TypeError(errMsg);
    }
    __name(typeError, "typeError");
    function bufferOrString(obj) {
      return Buffer5.isBuffer(obj) || typeof obj === "string";
    }
    __name(bufferOrString, "bufferOrString");
    function normalizeInput(thing) {
      if (!bufferOrString(thing))
        thing = JSON.stringify(thing);
      return thing;
    }
    __name(normalizeInput, "normalizeInput");
    function createHmacSigner(bits) {
      return /* @__PURE__ */ __name(function sign2(thing, secret) {
        checkIsSecretKey(secret);
        thing = normalizeInput(thing);
        var hmac2 = crypto2.createHmac("sha" + bits, secret);
        var sig = (hmac2.update(thing), hmac2.digest("base64"));
        return fromBase642(sig);
      }, "sign");
    }
    __name(createHmacSigner, "createHmacSigner");
    function createHmacVerifier(bits) {
      return /* @__PURE__ */ __name(function verify(thing, signature, secret) {
        var computedSig = createHmacSigner(bits)(thing, secret);
        return bufferEqual(Buffer5.from(signature), Buffer5.from(computedSig));
      }, "verify");
    }
    __name(createHmacVerifier, "createHmacVerifier");
    function createKeySigner(bits) {
      return /* @__PURE__ */ __name(function sign2(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto2.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, "base64"));
        return fromBase642(sig);
      }, "sign");
    }
    __name(createKeySigner, "createKeySigner");
    function createKeyVerifier(bits) {
      return /* @__PURE__ */ __name(function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase642(signature);
        var verifier = crypto2.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, "base64");
      }, "verify");
    }
    __name(createKeyVerifier, "createKeyVerifier");
    function createPSSKeySigner(bits) {
      return /* @__PURE__ */ __name(function sign2(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto2.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign({
          key: privateKey,
          padding: crypto2.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto2.constants.RSA_PSS_SALTLEN_DIGEST
        }, "base64"));
        return fromBase642(sig);
      }, "sign");
    }
    __name(createPSSKeySigner, "createPSSKeySigner");
    function createPSSKeyVerifier(bits) {
      return /* @__PURE__ */ __name(function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase642(signature);
        var verifier = crypto2.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify({
          key: publicKey,
          padding: crypto2.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto2.constants.RSA_PSS_SALTLEN_DIGEST
        }, signature, "base64");
      }, "verify");
    }
    __name(createPSSKeyVerifier, "createPSSKeyVerifier");
    function createECDSASigner(bits) {
      var inner = createKeySigner(bits);
      return /* @__PURE__ */ __name(function sign2() {
        var signature = inner.apply(null, arguments);
        signature = formatEcdsa.derToJose(signature, "ES" + bits);
        return signature;
      }, "sign");
    }
    __name(createECDSASigner, "createECDSASigner");
    function createECDSAVerifer(bits) {
      var inner = createKeyVerifier(bits);
      return /* @__PURE__ */ __name(function verify(thing, signature, publicKey) {
        signature = formatEcdsa.joseToDer(signature, "ES" + bits).toString("base64");
        var result = inner(thing, signature, publicKey);
        return result;
      }, "verify");
    }
    __name(createECDSAVerifer, "createECDSAVerifer");
    function createNoneSigner() {
      return /* @__PURE__ */ __name(function sign2() {
        return "";
      }, "sign");
    }
    __name(createNoneSigner, "createNoneSigner");
    function createNoneVerifier() {
      return /* @__PURE__ */ __name(function verify(thing, signature) {
        return signature === "";
      }, "verify");
    }
    __name(createNoneVerifier, "createNoneVerifier");
    module2.exports = /* @__PURE__ */ __name(function jwa(algorithm) {
      var signerFactories = {
        hs: createHmacSigner,
        rs: createKeySigner,
        ps: createPSSKeySigner,
        es: createECDSASigner,
        none: createNoneSigner
      };
      var verifierFactories = {
        hs: createHmacVerifier,
        rs: createKeyVerifier,
        ps: createPSSKeyVerifier,
        es: createECDSAVerifer,
        none: createNoneVerifier
      };
      var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
      if (!match)
        throw typeError(MSG_INVALID_ALGORITHM, algorithm);
      var algo = (match[1] || match[3]).toLowerCase();
      var bits = match[2];
      return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
      };
    }, "jwa");
  }
});

// node_modules/jws/lib/tostring.js
var require_tostring = __commonJS({
  "node_modules/jws/lib/tostring.js"(exports, module2) {
    var Buffer5 = __require("buffer").Buffer;
    module2.exports = /* @__PURE__ */ __name(function toString(obj) {
      if (typeof obj === "string")
        return obj;
      if (typeof obj === "number" || Buffer5.isBuffer(obj))
        return obj.toString();
      return JSON.stringify(obj);
    }, "toString");
  }
});

// node_modules/jws/lib/sign-stream.js
var require_sign_stream = __commonJS({
  "node_modules/jws/lib/sign-stream.js"(exports, module2) {
    var Buffer5 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = __require("stream");
    var toString = require_tostring();
    var util = __require("util");
    function base64url(string, encoding) {
      return Buffer5.from(string, encoding).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    __name(base64url, "base64url");
    function jwsSecuredInput(header, payload, encoding) {
      encoding = encoding || "utf8";
      var encodedHeader = base64url(toString(header), "binary");
      var encodedPayload = base64url(toString(payload), encoding);
      return util.format("%s.%s", encodedHeader, encodedPayload);
    }
    __name(jwsSecuredInput, "jwsSecuredInput");
    function jwsSign(opts) {
      var header = opts.header;
      var payload = opts.payload;
      var secretOrKey = opts.secret || opts.privateKey;
      var encoding = opts.encoding;
      var algo = jwa(header.alg);
      var securedInput = jwsSecuredInput(header, payload, encoding);
      var signature = algo.sign(securedInput, secretOrKey);
      return util.format("%s.%s", securedInput, signature);
    }
    __name(jwsSign, "jwsSign");
    function SignStream(opts) {
      var secret = opts.secret || opts.privateKey || opts.key;
      var secretStream = new DataStream(secret);
      this.readable = true;
      this.header = opts.header;
      this.encoding = opts.encoding;
      this.secret = this.privateKey = this.key = secretStream;
      this.payload = new DataStream(opts.payload);
      this.secret.once("close", function() {
        if (!this.payload.writable && this.readable)
          this.sign();
      }.bind(this));
      this.payload.once("close", function() {
        if (!this.secret.writable && this.readable)
          this.sign();
      }.bind(this));
    }
    __name(SignStream, "SignStream");
    util.inherits(SignStream, Stream);
    SignStream.prototype.sign = /* @__PURE__ */ __name(function sign2() {
      try {
        var signature = jwsSign({
          header: this.header,
          payload: this.payload.buffer,
          secret: this.secret.buffer,
          encoding: this.encoding
        });
        this.emit("done", signature);
        this.emit("data", signature);
        this.emit("end");
        this.readable = false;
        return signature;
      } catch (e5) {
        this.readable = false;
        this.emit("error", e5);
        this.emit("close");
      }
    }, "sign");
    SignStream.sign = jwsSign;
    module2.exports = SignStream;
  }
});

// node_modules/jws/lib/verify-stream.js
var require_verify_stream = __commonJS({
  "node_modules/jws/lib/verify-stream.js"(exports, module2) {
    var Buffer5 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = __require("stream");
    var toString = require_tostring();
    var util = __require("util");
    var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
    function isObject(thing) {
      return Object.prototype.toString.call(thing) === "[object Object]";
    }
    __name(isObject, "isObject");
    function safeJsonParse(thing) {
      if (isObject(thing))
        return thing;
      try {
        return JSON.parse(thing);
      } catch (e5) {
        return void 0;
      }
    }
    __name(safeJsonParse, "safeJsonParse");
    function headerFromJWS(jwsSig) {
      var encodedHeader = jwsSig.split(".", 1)[0];
      return safeJsonParse(Buffer5.from(encodedHeader, "base64").toString("binary"));
    }
    __name(headerFromJWS, "headerFromJWS");
    function securedInputFromJWS(jwsSig) {
      return jwsSig.split(".", 2).join(".");
    }
    __name(securedInputFromJWS, "securedInputFromJWS");
    function signatureFromJWS(jwsSig) {
      return jwsSig.split(".")[2];
    }
    __name(signatureFromJWS, "signatureFromJWS");
    function payloadFromJWS(jwsSig, encoding) {
      encoding = encoding || "utf8";
      var payload = jwsSig.split(".")[1];
      return Buffer5.from(payload, "base64").toString(encoding);
    }
    __name(payloadFromJWS, "payloadFromJWS");
    function isValidJws(string) {
      return JWS_REGEX.test(string) && !!headerFromJWS(string);
    }
    __name(isValidJws, "isValidJws");
    function jwsVerify(jwsSig, algorithm, secretOrKey) {
      if (!algorithm) {
        var err = new Error("Missing algorithm parameter for jws.verify");
        err.code = "MISSING_ALGORITHM";
        throw err;
      }
      jwsSig = toString(jwsSig);
      var signature = signatureFromJWS(jwsSig);
      var securedInput = securedInputFromJWS(jwsSig);
      var algo = jwa(algorithm);
      return algo.verify(securedInput, signature, secretOrKey);
    }
    __name(jwsVerify, "jwsVerify");
    function jwsDecode(jwsSig, opts) {
      opts = opts || {};
      jwsSig = toString(jwsSig);
      if (!isValidJws(jwsSig))
        return null;
      var header = headerFromJWS(jwsSig);
      if (!header)
        return null;
      var payload = payloadFromJWS(jwsSig);
      if (header.typ === "JWT" || opts.json)
        payload = JSON.parse(payload, opts.encoding);
      return {
        header,
        payload,
        signature: signatureFromJWS(jwsSig)
      };
    }
    __name(jwsDecode, "jwsDecode");
    function VerifyStream(opts) {
      opts = opts || {};
      var secretOrKey = opts.secret || opts.publicKey || opts.key;
      var secretStream = new DataStream(secretOrKey);
      this.readable = true;
      this.algorithm = opts.algorithm;
      this.encoding = opts.encoding;
      this.secret = this.publicKey = this.key = secretStream;
      this.signature = new DataStream(opts.signature);
      this.secret.once("close", function() {
        if (!this.signature.writable && this.readable)
          this.verify();
      }.bind(this));
      this.signature.once("close", function() {
        if (!this.secret.writable && this.readable)
          this.verify();
      }.bind(this));
    }
    __name(VerifyStream, "VerifyStream");
    util.inherits(VerifyStream, Stream);
    VerifyStream.prototype.verify = /* @__PURE__ */ __name(function verify() {
      try {
        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = jwsDecode(this.signature.buffer, this.encoding);
        this.emit("done", valid, obj);
        this.emit("data", valid);
        this.emit("end");
        this.readable = false;
        return valid;
      } catch (e5) {
        this.readable = false;
        this.emit("error", e5);
        this.emit("close");
      }
    }, "verify");
    VerifyStream.decode = jwsDecode;
    VerifyStream.isValid = isValidJws;
    VerifyStream.verify = jwsVerify;
    module2.exports = VerifyStream;
  }
});

// node_modules/jws/index.js
var require_jws = __commonJS({
  "node_modules/jws/index.js"(exports) {
    var SignStream = require_sign_stream();
    var VerifyStream = require_verify_stream();
    var ALGORITHMS = [
      "HS256",
      "HS384",
      "HS512",
      "RS256",
      "RS384",
      "RS512",
      "PS256",
      "PS384",
      "PS512",
      "ES256",
      "ES384",
      "ES512"
    ];
    exports.ALGORITHMS = ALGORITHMS;
    exports.sign = SignStream.sign;
    exports.verify = VerifyStream.verify;
    exports.decode = VerifyStream.decode;
    exports.isValid = VerifyStream.isValid;
    exports.createSign = /* @__PURE__ */ __name(function createSign(opts) {
      return new SignStream(opts);
    }, "createSign");
    exports.createVerify = /* @__PURE__ */ __name(function createVerify(opts) {
      return new VerifyStream(opts);
    }, "createVerify");
  }
});

// node_modules/jsonwebtoken/decode.js
var require_decode = __commonJS({
  "node_modules/jsonwebtoken/decode.js"(exports, module2) {
    var jws = require_jws();
    module2.exports = function(jwt, options) {
      options = options || {};
      var decoded = jws.decode(jwt, options);
      if (!decoded) {
        return null;
      }
      var payload = decoded.payload;
      if (typeof payload === "string") {
        try {
          var obj = JSON.parse(payload);
          if (obj !== null && typeof obj === "object") {
            payload = obj;
          }
        } catch (e5) {
        }
      }
      if (options.complete === true) {
        return {
          header: decoded.header,
          payload,
          signature: decoded.signature
        };
      }
      return payload;
    };
  }
});

// node_modules/jsonwebtoken/lib/JsonWebTokenError.js
var require_JsonWebTokenError = __commonJS({
  "node_modules/jsonwebtoken/lib/JsonWebTokenError.js"(exports, module2) {
    var JsonWebTokenError = /* @__PURE__ */ __name(function(message, error) {
      Error.call(this, message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = "JsonWebTokenError";
      this.message = message;
      if (error)
        this.inner = error;
    }, "JsonWebTokenError");
    JsonWebTokenError.prototype = Object.create(Error.prototype);
    JsonWebTokenError.prototype.constructor = JsonWebTokenError;
    module2.exports = JsonWebTokenError;
  }
});

// node_modules/jsonwebtoken/lib/NotBeforeError.js
var require_NotBeforeError = __commonJS({
  "node_modules/jsonwebtoken/lib/NotBeforeError.js"(exports, module2) {
    var JsonWebTokenError = require_JsonWebTokenError();
    var NotBeforeError = /* @__PURE__ */ __name(function(message, date) {
      JsonWebTokenError.call(this, message);
      this.name = "NotBeforeError";
      this.date = date;
    }, "NotBeforeError");
    NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);
    NotBeforeError.prototype.constructor = NotBeforeError;
    module2.exports = NotBeforeError;
  }
});

// node_modules/jsonwebtoken/lib/TokenExpiredError.js
var require_TokenExpiredError = __commonJS({
  "node_modules/jsonwebtoken/lib/TokenExpiredError.js"(exports, module2) {
    var JsonWebTokenError = require_JsonWebTokenError();
    var TokenExpiredError = /* @__PURE__ */ __name(function(message, expiredAt) {
      JsonWebTokenError.call(this, message);
      this.name = "TokenExpiredError";
      this.expiredAt = expiredAt;
    }, "TokenExpiredError");
    TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);
    TokenExpiredError.prototype.constructor = TokenExpiredError;
    module2.exports = TokenExpiredError;
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module2) {
    var s5 = 1e3;
    var m5 = s5 * 60;
    var h5 = m5 * 60;
    var d5 = h5 * 24;
    var w3 = d5 * 7;
    var y2 = d5 * 365.25;
    module2.exports = function(val2, options) {
      options = options || {};
      var type = typeof val2;
      if (type === "string" && val2.length > 0) {
        return parse2(val2);
      } else if (type === "number" && isFinite(val2)) {
        return options.long ? fmtLong(val2) : fmtShort(val2);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val2)
      );
    };
    function parse2(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n5 = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n5 * y2;
        case "weeks":
        case "week":
        case "w":
          return n5 * w3;
        case "days":
        case "day":
        case "d":
          return n5 * d5;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n5 * h5;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n5 * m5;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n5 * s5;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n5;
        default:
          return void 0;
      }
    }
    __name(parse2, "parse");
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d5) {
        return Math.round(ms / d5) + "d";
      }
      if (msAbs >= h5) {
        return Math.round(ms / h5) + "h";
      }
      if (msAbs >= m5) {
        return Math.round(ms / m5) + "m";
      }
      if (msAbs >= s5) {
        return Math.round(ms / s5) + "s";
      }
      return ms + "ms";
    }
    __name(fmtShort, "fmtShort");
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d5) {
        return plural(ms, msAbs, d5, "day");
      }
      if (msAbs >= h5) {
        return plural(ms, msAbs, h5, "hour");
      }
      if (msAbs >= m5) {
        return plural(ms, msAbs, m5, "minute");
      }
      if (msAbs >= s5) {
        return plural(ms, msAbs, s5, "second");
      }
      return ms + " ms";
    }
    __name(fmtLong, "fmtLong");
    function plural(ms, msAbs, n5, name) {
      var isPlural = msAbs >= n5 * 1.5;
      return Math.round(ms / n5) + " " + name + (isPlural ? "s" : "");
    }
    __name(plural, "plural");
  }
});

// node_modules/jsonwebtoken/lib/timespan.js
var require_timespan = __commonJS({
  "node_modules/jsonwebtoken/lib/timespan.js"(exports, module2) {
    var ms = require_ms();
    module2.exports = function(time, iat) {
      var timestamp = iat || Math.floor(Date.now() / 1e3);
      if (typeof time === "string") {
        var milliseconds = ms(time);
        if (typeof milliseconds === "undefined") {
          return;
        }
        return Math.floor(timestamp + milliseconds / 1e3);
      } else if (typeof time === "number") {
        return timestamp + time;
      } else {
        return;
      }
    };
  }
});

// node_modules/jsonwebtoken/node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/internal/constants.js"(exports, module2) {
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module2.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/jsonwebtoken/node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/internal/debug.js"(exports, module2) {
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/internal/re.js"(exports, module2) {
    var { MAX_SAFE_COMPONENT_LENGTH } = require_constants();
    var debug = require_debug();
    exports = module2.exports = {};
    var re = exports.re = [];
    var src = exports.src = [];
    var t3 = exports.t = {};
    var R = 0;
    var createToken = /* @__PURE__ */ __name((name, value, isGlobal) => {
      const index = R++;
      debug(name, index, value);
      t3[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
    }, "createToken");
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "[0-9]+");
    createToken("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
    createToken("MAINVERSION", `(${src[t3.NUMERICIDENTIFIER]})\\.(${src[t3.NUMERICIDENTIFIER]})\\.(${src[t3.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t3.NUMERICIDENTIFIERLOOSE]})\\.(${src[t3.NUMERICIDENTIFIERLOOSE]})\\.(${src[t3.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t3.NUMERICIDENTIFIER]}|${src[t3.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t3.NUMERICIDENTIFIERLOOSE]}|${src[t3.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t3.PRERELEASEIDENTIFIER]}(?:\\.${src[t3.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t3.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t3.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
    createToken("BUILD", `(?:\\+(${src[t3.BUILDIDENTIFIER]}(?:\\.${src[t3.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t3.MAINVERSION]}${src[t3.PRERELEASE]}?${src[t3.BUILD]}?`);
    createToken("FULL", `^${src[t3.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t3.MAINVERSIONLOOSE]}${src[t3.PRERELEASELOOSE]}?${src[t3.BUILD]}?`);
    createToken("LOOSE", `^${src[t3.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t3.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t3.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t3.XRANGEIDENTIFIER]})(?:\\.(${src[t3.XRANGEIDENTIFIER]})(?:\\.(${src[t3.XRANGEIDENTIFIER]})(?:${src[t3.PRERELEASE]})?${src[t3.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t3.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t3.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t3.XRANGEIDENTIFIERLOOSE]})(?:${src[t3.PRERELEASELOOSE]})?${src[t3.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t3.GTLT]}\\s*${src[t3.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t3.GTLT]}\\s*${src[t3.XRANGEPLAINLOOSE]}$`);
    createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t3.COERCE], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t3.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t3.LONETILDE]}${src[t3.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t3.LONETILDE]}${src[t3.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t3.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t3.LONECARET]}${src[t3.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t3.LONECARET]}${src[t3.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t3.GTLT]}\\s*(${src[t3.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t3.GTLT]}\\s*(${src[t3.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t3.GTLT]}\\s*(${src[t3.LOOSEPLAIN]}|${src[t3.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t3.XRANGEPLAIN]})\\s+-\\s+(${src[t3.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t3.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t3.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/jsonwebtoken/node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/internal/parse-options.js"(exports, module2) {
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = /* @__PURE__ */ __name((options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    }, "parseOptions");
    module2.exports = parseOptions;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/internal/identifiers.js"(exports, module2) {
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = /* @__PURE__ */ __name((a5, b5) => {
      const anum = numeric.test(a5);
      const bnum = numeric.test(b5);
      if (anum && bnum) {
        a5 = +a5;
        b5 = +b5;
      }
      return a5 === b5 ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a5 < b5 ? -1 : 1;
    }, "compareIdentifiers");
    var rcompareIdentifiers = /* @__PURE__ */ __name((a5, b5) => compareIdentifiers(b5, a5), "rcompareIdentifiers");
    module2.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/jsonwebtoken/node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/classes/semver.js"(exports, module2) {
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { re, t: t3 } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid Version: ${__require("util").inspect(version)}`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m5 = version.trim().match(options.loose ? re[t3.LOOSE] : re[t3.FULL]);
        if (!m5) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m5[1];
        this.minor = +m5[2];
        this.patch = +m5[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m5[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m5[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m5[5] ? m5[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i5 = 0;
        do {
          const a5 = this.prerelease[i5];
          const b5 = other.prerelease[i5];
          debug("prerelease compare", i5, a5, b5);
          if (a5 === void 0 && b5 === void 0) {
            return 0;
          } else if (b5 === void 0) {
            return 1;
          } else if (a5 === void 0) {
            return -1;
          } else if (a5 === b5) {
            continue;
          } else {
            return compareIdentifiers(a5, b5);
          }
        } while (++i5);
      }
      compareBuild(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        let i5 = 0;
        do {
          const a5 = this.build[i5];
          const b5 = other.build[i5];
          debug("prerelease compare", i5, a5, b5);
          if (a5 === void 0 && b5 === void 0) {
            return 0;
          } else if (b5 === void 0) {
            return 1;
          } else if (a5 === void 0) {
            return -1;
          } else if (a5 === b5) {
            continue;
          } else {
            return compareIdentifiers(a5, b5);
          }
        } while (++i5);
      }
      inc(release2, identifier, identifierBase) {
        switch (release2) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (!identifier && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i5 = this.prerelease.length;
              while (--i5 >= 0) {
                if (typeof this.prerelease[i5] === "number") {
                  this.prerelease[i5]++;
                  i5 = -2;
                }
              }
              if (i5 === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release2}`);
        }
        this.format();
        this.raw = this.version;
        return this;
      }
    };
    __name(SemVer, "SemVer");
    module2.exports = SemVer;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/parse.js"(exports, module2) {
    var SemVer = require_semver();
    var parse2 = /* @__PURE__ */ __name((version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    }, "parse");
    module2.exports = parse2;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/valid.js"(exports, module2) {
    var parse2 = require_parse();
    var valid = /* @__PURE__ */ __name((version, options) => {
      const v3 = parse2(version, options);
      return v3 ? v3.version : null;
    }, "valid");
    module2.exports = valid;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/clean.js"(exports, module2) {
    var parse2 = require_parse();
    var clean = /* @__PURE__ */ __name((version, options) => {
      const s5 = parse2(version.trim().replace(/^[=v]+/, ""), options);
      return s5 ? s5.version : null;
    }, "clean");
    module2.exports = clean;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/inc.js"(exports, module2) {
    var SemVer = require_semver();
    var inc = /* @__PURE__ */ __name((version, release2, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release2, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    }, "inc");
    module2.exports = inc;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/diff.js"(exports, module2) {
    var parse2 = require_parse();
    var diff = /* @__PURE__ */ __name((version1, version2) => {
      const v1 = parse2(version1, null, true);
      const v22 = parse2(version2, null, true);
      const comparison = v1.compare(v22);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v22;
      const lowVersion = v1Higher ? v22 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v22.major) {
        return prefix + "major";
      }
      if (v1.minor !== v22.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v22.patch) {
        return prefix + "patch";
      }
      if (highHasPre) {
        return "prerelease";
      }
      if (lowVersion.patch) {
        return "patch";
      }
      if (lowVersion.minor) {
        return "minor";
      }
      return "major";
    }, "diff");
    module2.exports = diff;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/major.js
var require_major = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/major.js"(exports, module2) {
    var SemVer = require_semver();
    var major = /* @__PURE__ */ __name((a5, loose) => new SemVer(a5, loose).major, "major");
    module2.exports = major;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/minor.js"(exports, module2) {
    var SemVer = require_semver();
    var minor = /* @__PURE__ */ __name((a5, loose) => new SemVer(a5, loose).minor, "minor");
    module2.exports = minor;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/patch.js"(exports, module2) {
    var SemVer = require_semver();
    var patch = /* @__PURE__ */ __name((a5, loose) => new SemVer(a5, loose).patch, "patch");
    module2.exports = patch;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/prerelease.js"(exports, module2) {
    var parse2 = require_parse();
    var prerelease = /* @__PURE__ */ __name((version, options) => {
      const parsed = parse2(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    }, "prerelease");
    module2.exports = prerelease;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/compare.js"(exports, module2) {
    var SemVer = require_semver();
    var compare = /* @__PURE__ */ __name((a5, b5, loose) => new SemVer(a5, loose).compare(new SemVer(b5, loose)), "compare");
    module2.exports = compare;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/rcompare.js"(exports, module2) {
    var compare = require_compare();
    var rcompare = /* @__PURE__ */ __name((a5, b5, loose) => compare(b5, a5, loose), "rcompare");
    module2.exports = rcompare;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/compare-loose.js"(exports, module2) {
    var compare = require_compare();
    var compareLoose = /* @__PURE__ */ __name((a5, b5) => compare(a5, b5, true), "compareLoose");
    module2.exports = compareLoose;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/compare-build.js"(exports, module2) {
    var SemVer = require_semver();
    var compareBuild = /* @__PURE__ */ __name((a5, b5, loose) => {
      const versionA = new SemVer(a5, loose);
      const versionB = new SemVer(b5, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    }, "compareBuild");
    module2.exports = compareBuild;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/sort.js"(exports, module2) {
    var compareBuild = require_compare_build();
    var sort = /* @__PURE__ */ __name((list, loose) => list.sort((a5, b5) => compareBuild(a5, b5, loose)), "sort");
    module2.exports = sort;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/rsort.js"(exports, module2) {
    var compareBuild = require_compare_build();
    var rsort = /* @__PURE__ */ __name((list, loose) => list.sort((a5, b5) => compareBuild(b5, a5, loose)), "rsort");
    module2.exports = rsort;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/gt.js"(exports, module2) {
    var compare = require_compare();
    var gt = /* @__PURE__ */ __name((a5, b5, loose) => compare(a5, b5, loose) > 0, "gt");
    module2.exports = gt;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/lt.js"(exports, module2) {
    var compare = require_compare();
    var lt = /* @__PURE__ */ __name((a5, b5, loose) => compare(a5, b5, loose) < 0, "lt");
    module2.exports = lt;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/eq.js"(exports, module2) {
    var compare = require_compare();
    var eq = /* @__PURE__ */ __name((a5, b5, loose) => compare(a5, b5, loose) === 0, "eq");
    module2.exports = eq;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/neq.js"(exports, module2) {
    var compare = require_compare();
    var neq = /* @__PURE__ */ __name((a5, b5, loose) => compare(a5, b5, loose) !== 0, "neq");
    module2.exports = neq;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/gte.js"(exports, module2) {
    var compare = require_compare();
    var gte = /* @__PURE__ */ __name((a5, b5, loose) => compare(a5, b5, loose) >= 0, "gte");
    module2.exports = gte;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/lte.js"(exports, module2) {
    var compare = require_compare();
    var lte = /* @__PURE__ */ __name((a5, b5, loose) => compare(a5, b5, loose) <= 0, "lte");
    module2.exports = lte;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/cmp.js"(exports, module2) {
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = /* @__PURE__ */ __name((a5, op, b5, loose) => {
      switch (op) {
        case "===":
          if (typeof a5 === "object") {
            a5 = a5.version;
          }
          if (typeof b5 === "object") {
            b5 = b5.version;
          }
          return a5 === b5;
        case "!==":
          if (typeof a5 === "object") {
            a5 = a5.version;
          }
          if (typeof b5 === "object") {
            b5 = b5.version;
          }
          return a5 !== b5;
        case "":
        case "=":
        case "==":
          return eq(a5, b5, loose);
        case "!=":
          return neq(a5, b5, loose);
        case ">":
          return gt(a5, b5, loose);
        case ">=":
          return gte(a5, b5, loose);
        case "<":
          return lt(a5, b5, loose);
        case "<=":
          return lte(a5, b5, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    }, "cmp");
    module2.exports = cmp;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/coerce.js"(exports, module2) {
    var SemVer = require_semver();
    var parse2 = require_parse();
    var { re, t: t3 } = require_re();
    var coerce = /* @__PURE__ */ __name((version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(re[t3.COERCE]);
      } else {
        let next;
        while ((next = re[t3.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          re[t3.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
        }
        re[t3.COERCERTL].lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      return parse2(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options);
    }, "coerce");
    module2.exports = coerce;
  }
});

// node_modules/yallist/iterator.js
var require_iterator2 = __commonJS({
  "node_modules/yallist/iterator.js"(exports, module2) {
    "use strict";
    module2.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/yallist/yallist.js"(exports, module2) {
    "use strict";
    module2.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self2 = this;
      if (!(self2 instanceof Yallist)) {
        self2 = new Yallist();
      }
      self2.tail = null;
      self2.head = null;
      self2.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self2.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i5 = 0, l5 = arguments.length; i5 < l5; i5++) {
          self2.push(arguments[i5]);
        }
      }
      return self2;
    }
    __name(Yallist, "Yallist");
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i5 = 0, l5 = arguments.length; i5 < l5; i5++) {
        push(this, arguments[i5]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i5 = 0, l5 = arguments.length; i5 < l5; i5++) {
        unshift(this, arguments[i5]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i5 = 0; walker !== null; i5++) {
        fn.call(thisp, walker.value, i5, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i5 = this.length - 1; walker !== null; i5--) {
        fn.call(thisp, walker.value, i5, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n5) {
      for (var i5 = 0, walker = this.head; walker !== null && i5 < n5; i5++) {
        walker = walker.next;
      }
      if (i5 === n5 && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n5) {
      for (var i5 = 0, walker = this.tail; walker !== null && i5 < n5; i5++) {
        walker = walker.prev;
      }
      if (i5 === n5 && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i5 = 0; walker !== null; i5++) {
        acc = fn(acc, walker.value, i5);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i5 = this.length - 1; walker !== null; i5--) {
        acc = fn(acc, walker.value, i5);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i5 = 0, walker = this.head; walker !== null; i5++) {
        arr[i5] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i5 = 0, walker = this.tail; walker !== null; i5++) {
        arr[i5] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i5 = 0, walker = this.head; walker !== null && i5 < from; i5++) {
        walker = walker.next;
      }
      for (; walker !== null && i5 < to; i5++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i5 = this.length, walker = this.tail; walker !== null && i5 > to; i5--) {
        walker = walker.prev;
      }
      for (; walker !== null && i5 > from; i5--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i5 = 0, walker = this.head; walker !== null && i5 < start; i5++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i5 = 0; walker && i5 < deleteCount; i5++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i5 = 0; i5 < nodes.length; i5++) {
        walker = insert(this, walker, nodes[i5]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p5 = walker.prev;
        walker.prev = walker.next;
        walker.next = p5;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self2, node, value) {
      var inserted = node === self2.head ? new Node(value, null, node, self2) : new Node(value, node, node.next, self2);
      if (inserted.next === null) {
        self2.tail = inserted;
      }
      if (inserted.prev === null) {
        self2.head = inserted;
      }
      self2.length++;
      return inserted;
    }
    __name(insert, "insert");
    function push(self2, item) {
      self2.tail = new Node(item, self2.tail, null, self2);
      if (!self2.head) {
        self2.head = self2.tail;
      }
      self2.length++;
    }
    __name(push, "push");
    function unshift(self2, item) {
      self2.head = new Node(item, null, self2.head, self2);
      if (!self2.tail) {
        self2.tail = self2.head;
      }
      self2.length++;
    }
    __name(unshift, "unshift");
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    __name(Node, "Node");
    try {
      require_iterator2()(Yallist);
    } catch (er) {
    }
  }
});

// node_modules/lru-cache/index.js
var require_lru_cache2 = __commonJS({
  "node_modules/lru-cache/index.js"(exports, module2) {
    "use strict";
    var Yallist = require_yallist();
    var MAX = Symbol("max");
    var LENGTH = Symbol("length");
    var LENGTH_CALCULATOR = Symbol("lengthCalculator");
    var ALLOW_STALE = Symbol("allowStale");
    var MAX_AGE = Symbol("maxAge");
    var DISPOSE = Symbol("dispose");
    var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
    var LRU_LIST = Symbol("lruList");
    var CACHE = Symbol("cache");
    var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
    var naiveLength = /* @__PURE__ */ __name(() => 1, "naiveLength");
    var LRUCache2 = class {
      constructor(options) {
        if (typeof options === "number")
          options = { max: options };
        if (!options)
          options = {};
        if (options.max && (typeof options.max !== "number" || options.max < 0))
          throw new TypeError("max must be a non-negative number");
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
      }
      set max(mL) {
        if (typeof mL !== "number" || mL < 0)
          throw new TypeError("max must be a non-negative number");
        this[MAX] = mL || Infinity;
        trim(this);
      }
      get max() {
        return this[MAX];
      }
      set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      }
      get allowStale() {
        return this[ALLOW_STALE];
      }
      set maxAge(mA) {
        if (typeof mA !== "number")
          throw new TypeError("maxAge must be a non-negative number");
        this[MAX_AGE] = mA;
        trim(this);
      }
      get maxAge() {
        return this[MAX_AGE];
      }
      set lengthCalculator(lC) {
        if (typeof lC !== "function")
          lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach((hit) => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          });
        }
        trim(this);
      }
      get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
      }
      get length() {
        return this[LENGTH];
      }
      get itemCount() {
        return this[LRU_LIST].length;
      }
      rforEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev;
          forEachStep(this, fn, walker, thisp);
          walker = prev;
        }
      }
      forEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next;
          forEachStep(this, fn, walker, thisp);
          walker = next;
        }
      }
      keys() {
        return this[LRU_LIST].toArray().map((k5) => k5.key);
      }
      values() {
        return this[LRU_LIST].toArray().map((k5) => k5.value);
      }
      reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
          this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = /* @__PURE__ */ new Map();
        this[LRU_LIST] = new Yallist();
        this[LENGTH] = 0;
      }
      dump() {
        return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        }).toArray().filter((h5) => h5);
      }
      dumpLru() {
        return this[LRU_LIST];
      }
      set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key));
            return false;
          }
          const node = this[CACHE].get(key);
          const item = node.value;
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET])
              this[DISPOSE](key, item.value);
          }
          item.now = now;
          item.maxAge = maxAge;
          item.value = value;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key);
          trim(this);
          return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        if (hit.length > this[MAX]) {
          if (this[DISPOSE])
            this[DISPOSE](key, value);
          return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
      }
      has(key) {
        if (!this[CACHE].has(key))
          return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
      }
      get(key) {
        return get(this, key, true);
      }
      peek(key) {
        return get(this, key, false);
      }
      pop() {
        const node = this[LRU_LIST].tail;
        if (!node)
          return null;
        del(this, node);
        return node.value;
      }
      del(key) {
        del(this, this[CACHE].get(key));
      }
      load(arr) {
        this.reset();
        const now = Date.now();
        for (let l5 = arr.length - 1; l5 >= 0; l5--) {
          const hit = arr[l5];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now;
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }
      prune() {
        this[CACHE].forEach((value, key) => get(this, key, false));
      }
    };
    __name(LRUCache2, "LRUCache");
    var get = /* @__PURE__ */ __name((self2, key, doUse) => {
      const node = self2[CACHE].get(key);
      if (node) {
        const hit = node.value;
        if (isStale(self2, hit)) {
          del(self2, node);
          if (!self2[ALLOW_STALE])
            return void 0;
        } else {
          if (doUse) {
            if (self2[UPDATE_AGE_ON_GET])
              node.value.now = Date.now();
            self2[LRU_LIST].unshiftNode(node);
          }
        }
        return hit.value;
      }
    }, "get");
    var isStale = /* @__PURE__ */ __name((self2, hit) => {
      if (!hit || !hit.maxAge && !self2[MAX_AGE])
        return false;
      const diff = Date.now() - hit.now;
      return hit.maxAge ? diff > hit.maxAge : self2[MAX_AGE] && diff > self2[MAX_AGE];
    }, "isStale");
    var trim = /* @__PURE__ */ __name((self2) => {
      if (self2[LENGTH] > self2[MAX]) {
        for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
          const prev = walker.prev;
          del(self2, walker);
          walker = prev;
        }
      }
    }, "trim");
    var del = /* @__PURE__ */ __name((self2, node) => {
      if (node) {
        const hit = node.value;
        if (self2[DISPOSE])
          self2[DISPOSE](hit.key, hit.value);
        self2[LENGTH] -= hit.length;
        self2[CACHE].delete(hit.key);
        self2[LRU_LIST].removeNode(node);
      }
    }, "del");
    var Entry = class {
      constructor(key, value, length, now, maxAge) {
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
      }
    };
    __name(Entry, "Entry");
    var forEachStep = /* @__PURE__ */ __name((self2, fn, node, thisp) => {
      let hit = node.value;
      if (isStale(self2, hit)) {
        del(self2, node);
        if (!self2[ALLOW_STALE])
          hit = void 0;
      }
      if (hit)
        fn.call(thisp, hit.value, hit.key, self2);
    }, "forEachStep");
    module2.exports = LRUCache2;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/classes/range.js"(exports, module2) {
    var Range = class {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.format();
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range;
        this.set = range.split("||").map((r5) => this.parseRange(r5.trim())).filter((c5) => c5.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${range}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c5) => !isNullSet(c5[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c5 of this.set) {
              if (c5.length === 1 && isAny(c5[0])) {
                this.set = [c5];
                break;
              }
            }
          }
        }
        this.format();
      }
      format() {
        this.range = this.set.map((comps) => {
          return comps.join(" ").trim();
        }).join("||").trim();
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        range = range.trim();
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t3.HYPHENRANGELOOSE] : re[t3.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t3.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t3.TILDETRIM], tildeTrimReplace);
        range = range.replace(re[t3.CARETTRIM], caretTrimReplace);
        range = range.split(/\s+/).join(" ");
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t3.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i5 = 0; i5 < this.set.length; i5++) {
          if (testSet(this.set[i5], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    __name(Range, "Range");
    module2.exports = Range;
    var LRU = require_lru_cache2();
    var cache = new LRU({ max: 1e3 });
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      re,
      t: t3,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = /* @__PURE__ */ __name((c5) => c5.value === "<0.0.0-0", "isNullSet");
    var isAny = /* @__PURE__ */ __name((c5) => c5.value === "", "isAny");
    var isSatisfiable = /* @__PURE__ */ __name((comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    }, "isSatisfiable");
    var parseComparator = /* @__PURE__ */ __name((comp, options) => {
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    }, "parseComparator");
    var isX = /* @__PURE__ */ __name((id) => !id || id.toLowerCase() === "x" || id === "*", "isX");
    var replaceTildes = /* @__PURE__ */ __name((comp, options) => comp.trim().split(/\s+/).map((c5) => {
      return replaceTilde(c5, options);
    }).join(" "), "replaceTildes");
    var replaceTilde = /* @__PURE__ */ __name((comp, options) => {
      const r5 = options.loose ? re[t3.TILDELOOSE] : re[t3.TILDE];
      return comp.replace(r5, (_, M, m5, p5, pr) => {
        debug("tilde", comp, _, M, m5, p5, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m5)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p5)) {
          ret = `>=${M}.${m5}.0 <${M}.${+m5 + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m5}.${p5}-${pr} <${M}.${+m5 + 1}.0-0`;
        } else {
          ret = `>=${M}.${m5}.${p5} <${M}.${+m5 + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    }, "replaceTilde");
    var replaceCarets = /* @__PURE__ */ __name((comp, options) => comp.trim().split(/\s+/).map((c5) => {
      return replaceCaret(c5, options);
    }).join(" "), "replaceCarets");
    var replaceCaret = /* @__PURE__ */ __name((comp, options) => {
      debug("caret", comp, options);
      const r5 = options.loose ? re[t3.CARETLOOSE] : re[t3.CARET];
      const z2 = options.includePrerelease ? "-0" : "";
      return comp.replace(r5, (_, M, m5, p5, pr) => {
        debug("caret", comp, _, M, m5, p5, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m5)) {
          ret = `>=${M}.0.0${z2} <${+M + 1}.0.0-0`;
        } else if (isX(p5)) {
          if (M === "0") {
            ret = `>=${M}.${m5}.0${z2} <${M}.${+m5 + 1}.0-0`;
          } else {
            ret = `>=${M}.${m5}.0${z2} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m5 === "0") {
              ret = `>=${M}.${m5}.${p5}-${pr} <${M}.${m5}.${+p5 + 1}-0`;
            } else {
              ret = `>=${M}.${m5}.${p5}-${pr} <${M}.${+m5 + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m5}.${p5}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m5 === "0") {
              ret = `>=${M}.${m5}.${p5}${z2} <${M}.${m5}.${+p5 + 1}-0`;
            } else {
              ret = `>=${M}.${m5}.${p5}${z2} <${M}.${+m5 + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m5}.${p5} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    }, "replaceCaret");
    var replaceXRanges = /* @__PURE__ */ __name((comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c5) => {
        return replaceXRange(c5, options);
      }).join(" ");
    }, "replaceXRanges");
    var replaceXRange = /* @__PURE__ */ __name((comp, options) => {
      comp = comp.trim();
      const r5 = options.loose ? re[t3.XRANGELOOSE] : re[t3.XRANGE];
      return comp.replace(r5, (ret, gtlt, M, m5, p5, pr) => {
        debug("xRange", comp, ret, gtlt, M, m5, p5, pr);
        const xM = isX(M);
        const xm = xM || isX(m5);
        const xp = xm || isX(p5);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m5 = 0;
          }
          p5 = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m5 = 0;
              p5 = 0;
            } else {
              m5 = +m5 + 1;
              p5 = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m5 = +m5 + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m5}.${p5}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m5}.0${pr} <${M}.${+m5 + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    }, "replaceXRange");
    var replaceStars = /* @__PURE__ */ __name((comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t3.STAR], "");
    }, "replaceStars");
    var replaceGTE0 = /* @__PURE__ */ __name((comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t3.GTE0PRE : t3.GTE0], "");
    }, "replaceGTE0");
    var hyphenReplace = /* @__PURE__ */ __name((incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    }, "hyphenReplace");
    var testSet = /* @__PURE__ */ __name((set, version, options) => {
      for (let i5 = 0; i5 < set.length; i5++) {
        if (!set[i5].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i5 = 0; i5 < set.length; i5++) {
          debug(set[i5].semver);
          if (set[i5].semver === Comparator.ANY) {
            continue;
          }
          if (set[i5].semver.prerelease.length > 0) {
            const allowed = set[i5].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    }, "testSet");
  }
});

// node_modules/jsonwebtoken/node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/classes/comparator.js"(exports, module2) {
    var ANY = Symbol("SemVer ANY");
    var Comparator = class {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r5 = this.options.loose ? re[t3.COMPARATORLOOSE] : re[t3.COMPARATOR];
        const m5 = comp.match(r5);
        if (!m5) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m5[1] !== void 0 ? m5[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m5[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m5[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    __name(Comparator, "Comparator");
    module2.exports = Comparator;
    var parseOptions = require_parse_options();
    var { re, t: t3 } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/jsonwebtoken/node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/functions/satisfies.js"(exports, module2) {
    var Range = require_range();
    var satisfies = /* @__PURE__ */ __name((version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    }, "satisfies");
    module2.exports = satisfies;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/ranges/to-comparators.js"(exports, module2) {
    var Range = require_range();
    var toComparators = /* @__PURE__ */ __name((range, options) => new Range(range, options).set.map((comp) => comp.map((c5) => c5.value).join(" ").trim().split(" ")), "toComparators");
    module2.exports = toComparators;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/ranges/max-satisfying.js"(exports, module2) {
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = /* @__PURE__ */ __name((versions2, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions2.forEach((v3) => {
        if (rangeObj.test(v3)) {
          if (!max || maxSV.compare(v3) === -1) {
            max = v3;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    }, "maxSatisfying");
    module2.exports = maxSatisfying;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/ranges/min-satisfying.js"(exports, module2) {
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = /* @__PURE__ */ __name((versions2, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions2.forEach((v3) => {
        if (rangeObj.test(v3)) {
          if (!min || minSV.compare(v3) === 1) {
            min = v3;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    }, "minSatisfying");
    module2.exports = minSatisfying;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/ranges/min-version.js"(exports, module2) {
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = /* @__PURE__ */ __name((range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i5 = 0; i5 < range.set.length; ++i5) {
        const comparators = range.set[i5];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    }, "minVersion");
    module2.exports = minVersion;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/ranges/valid.js"(exports, module2) {
    var Range = require_range();
    var validRange = /* @__PURE__ */ __name((range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    }, "validRange");
    module2.exports = validRange;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/ranges/outside.js"(exports, module2) {
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = /* @__PURE__ */ __name((version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version, range, options)) {
        return false;
      }
      for (let i5 = 0; i5 < range.set.length; ++i5) {
        const comparators = range.set[i5];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    }, "outside");
    module2.exports = outside;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/ranges/gtr.js"(exports, module2) {
    var outside = require_outside();
    var gtr = /* @__PURE__ */ __name((version, range, options) => outside(version, range, ">", options), "gtr");
    module2.exports = gtr;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/ranges/ltr.js"(exports, module2) {
    var outside = require_outside();
    var ltr = /* @__PURE__ */ __name((version, range, options) => outside(version, range, "<", options), "ltr");
    module2.exports = ltr;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/ranges/intersects.js"(exports, module2) {
    var Range = require_range();
    var intersects = /* @__PURE__ */ __name((r1, r22, options) => {
      r1 = new Range(r1, options);
      r22 = new Range(r22, options);
      return r1.intersects(r22, options);
    }, "intersects");
    module2.exports = intersects;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/ranges/simplify.js"(exports, module2) {
    var satisfies = require_satisfies();
    var compare = require_compare();
    module2.exports = (versions2, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v3 = versions2.sort((a5, b5) => compare(a5, b5, options));
      for (const version of v3) {
        const included = satisfies(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v3[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v3[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// node_modules/jsonwebtoken/node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/ranges/subset.js"(exports, module2) {
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = /* @__PURE__ */ __name((sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER:
        for (const simpleSub of sub.set) {
          for (const simpleDom of dom.set) {
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
              continue OUTER;
            }
          }
          if (sawNonNull) {
            return false;
          }
        }
      return true;
    }, "subset");
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = /* @__PURE__ */ __name((sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c5 of sub) {
        if (c5.operator === ">" || c5.operator === ">=") {
          gt = higherGT(gt, c5, options);
        } else if (c5.operator === "<" || c5.operator === "<=") {
          lt = lowerLT(lt, c5, options);
        } else {
          eqSet.add(c5.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
          return null;
        }
        for (const c5 of dom) {
          if (!satisfies(eq, String(c5), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c5 of dom) {
        hasDomGT = hasDomGT || c5.operator === ">" || c5.operator === ">=";
        hasDomLT = hasDomLT || c5.operator === "<" || c5.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c5.semver.prerelease && c5.semver.prerelease.length && c5.semver.major === needDomGTPre.major && c5.semver.minor === needDomGTPre.minor && c5.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c5.operator === ">" || c5.operator === ">=") {
            higher = higherGT(gt, c5, options);
            if (higher === c5 && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c5), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c5.semver.prerelease && c5.semver.prerelease.length && c5.semver.major === needDomLTPre.major && c5.semver.minor === needDomLTPre.minor && c5.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c5.operator === "<" || c5.operator === "<=") {
            lower = lowerLT(lt, c5, options);
            if (lower === c5 && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c5), options)) {
            return false;
          }
        }
        if (!c5.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    }, "simpleSubset");
    var higherGT = /* @__PURE__ */ __name((a5, b5, options) => {
      if (!a5) {
        return b5;
      }
      const comp = compare(a5.semver, b5.semver, options);
      return comp > 0 ? a5 : comp < 0 ? b5 : b5.operator === ">" && a5.operator === ">=" ? b5 : a5;
    }, "higherGT");
    var lowerLT = /* @__PURE__ */ __name((a5, b5, options) => {
      if (!a5) {
        return b5;
      }
      const comp = compare(a5.semver, b5.semver, options);
      return comp < 0 ? a5 : comp > 0 ? b5 : b5.operator === "<" && a5.operator === "<=" ? b5 : a5;
    }, "lowerLT");
    module2.exports = subset;
  }
});

// node_modules/jsonwebtoken/node_modules/semver/index.js
var require_semver2 = __commonJS({
  "node_modules/jsonwebtoken/node_modules/semver/index.js"(exports, module2) {
    var internalRe = require_re();
    var constants = require_constants();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse2 = require_parse();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module2.exports = {
      parse: parse2,
      valid,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js
var require_asymmetricKeyDetailsSupported = __commonJS({
  "node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js"(exports, module2) {
    var semver = require_semver2();
    module2.exports = semver.satisfies(process.version, ">=15.7.0");
  }
});

// node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js
var require_rsaPssKeyDetailsSupported = __commonJS({
  "node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js"(exports, module2) {
    var semver = require_semver2();
    module2.exports = semver.satisfies(process.version, ">=16.9.0");
  }
});

// node_modules/jsonwebtoken/lib/validateAsymmetricKey.js
var require_validateAsymmetricKey = __commonJS({
  "node_modules/jsonwebtoken/lib/validateAsymmetricKey.js"(exports, module2) {
    var ASYMMETRIC_KEY_DETAILS_SUPPORTED = require_asymmetricKeyDetailsSupported();
    var RSA_PSS_KEY_DETAILS_SUPPORTED = require_rsaPssKeyDetailsSupported();
    var allowedAlgorithmsForKeys = {
      "ec": ["ES256", "ES384", "ES512"],
      "rsa": ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
      "rsa-pss": ["PS256", "PS384", "PS512"]
    };
    var allowedCurves = {
      ES256: "prime256v1",
      ES384: "secp384r1",
      ES512: "secp521r1"
    };
    module2.exports = function(algorithm, key) {
      if (!algorithm || !key)
        return;
      const keyType = key.asymmetricKeyType;
      if (!keyType)
        return;
      const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];
      if (!allowedAlgorithms) {
        throw new Error(`Unknown key type "${keyType}".`);
      }
      if (!allowedAlgorithms.includes(algorithm)) {
        throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(", ")}.`);
      }
      if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
        switch (keyType) {
          case "ec":
            const keyCurve = key.asymmetricKeyDetails.namedCurve;
            const allowedCurve = allowedCurves[algorithm];
            if (keyCurve !== allowedCurve) {
              throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
            }
            break;
          case "rsa-pss":
            if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
              const length = parseInt(algorithm.slice(-3), 10);
              const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;
              if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
                throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
              }
              if (saltLength !== void 0 && saltLength > length >> 3) {
                throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`);
              }
            }
            break;
        }
      }
    };
  }
});

// node_modules/jsonwebtoken/lib/psSupported.js
var require_psSupported = __commonJS({
  "node_modules/jsonwebtoken/lib/psSupported.js"(exports, module2) {
    var semver = require_semver2();
    module2.exports = semver.satisfies(process.version, "^6.12.0 || >=8.0.0");
  }
});

// node_modules/jsonwebtoken/verify.js
var require_verify = __commonJS({
  "node_modules/jsonwebtoken/verify.js"(exports, module2) {
    var JsonWebTokenError = require_JsonWebTokenError();
    var NotBeforeError = require_NotBeforeError();
    var TokenExpiredError = require_TokenExpiredError();
    var decode = require_decode();
    var timespan = require_timespan();
    var validateAsymmetricKey = require_validateAsymmetricKey();
    var PS_SUPPORTED = require_psSupported();
    var jws = require_jws();
    var { KeyObject, createSecretKey, createPublicKey } = __require("crypto");
    var PUB_KEY_ALGS = ["RS256", "RS384", "RS512"];
    var EC_KEY_ALGS = ["ES256", "ES384", "ES512"];
    var RSA_KEY_ALGS = ["RS256", "RS384", "RS512"];
    var HS_ALGS = ["HS256", "HS384", "HS512"];
    if (PS_SUPPORTED) {
      PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
      RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
    }
    module2.exports = function(jwtString, secretOrPublicKey, options, callback) {
      if (typeof options === "function" && !callback) {
        callback = options;
        options = {};
      }
      if (!options) {
        options = {};
      }
      options = Object.assign({}, options);
      let done;
      if (callback) {
        done = callback;
      } else {
        done = /* @__PURE__ */ __name(function(err, data) {
          if (err)
            throw err;
          return data;
        }, "done");
      }
      if (options.clockTimestamp && typeof options.clockTimestamp !== "number") {
        return done(new JsonWebTokenError("clockTimestamp must be a number"));
      }
      if (options.nonce !== void 0 && (typeof options.nonce !== "string" || options.nonce.trim() === "")) {
        return done(new JsonWebTokenError("nonce must be a non-empty string"));
      }
      if (options.allowInvalidAsymmetricKeyTypes !== void 0 && typeof options.allowInvalidAsymmetricKeyTypes !== "boolean") {
        return done(new JsonWebTokenError("allowInvalidAsymmetricKeyTypes must be a boolean"));
      }
      const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1e3);
      if (!jwtString) {
        return done(new JsonWebTokenError("jwt must be provided"));
      }
      if (typeof jwtString !== "string") {
        return done(new JsonWebTokenError("jwt must be a string"));
      }
      const parts = jwtString.split(".");
      if (parts.length !== 3) {
        return done(new JsonWebTokenError("jwt malformed"));
      }
      let decodedToken;
      try {
        decodedToken = decode(jwtString, { complete: true });
      } catch (err) {
        return done(err);
      }
      if (!decodedToken) {
        return done(new JsonWebTokenError("invalid token"));
      }
      const header = decodedToken.header;
      let getSecret;
      if (typeof secretOrPublicKey === "function") {
        if (!callback) {
          return done(new JsonWebTokenError("verify must be called asynchronous if secret or public key is provided as a callback"));
        }
        getSecret = secretOrPublicKey;
      } else {
        getSecret = /* @__PURE__ */ __name(function(header2, secretCallback) {
          return secretCallback(null, secretOrPublicKey);
        }, "getSecret");
      }
      return getSecret(header, function(err, secretOrPublicKey2) {
        if (err) {
          return done(new JsonWebTokenError("error in secret or public key callback: " + err.message));
        }
        const hasSignature = parts[2].trim() !== "";
        if (!hasSignature && secretOrPublicKey2) {
          return done(new JsonWebTokenError("jwt signature is required"));
        }
        if (hasSignature && !secretOrPublicKey2) {
          return done(new JsonWebTokenError("secret or public key must be provided"));
        }
        if (!hasSignature && !options.algorithms) {
          return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
        }
        if (secretOrPublicKey2 != null && !(secretOrPublicKey2 instanceof KeyObject)) {
          try {
            secretOrPublicKey2 = createPublicKey(secretOrPublicKey2);
          } catch (_) {
            try {
              secretOrPublicKey2 = createSecretKey(typeof secretOrPublicKey2 === "string" ? Buffer.from(secretOrPublicKey2) : secretOrPublicKey2);
            } catch (_2) {
              return done(new JsonWebTokenError("secretOrPublicKey is not valid key material"));
            }
          }
        }
        if (!options.algorithms) {
          if (secretOrPublicKey2.type === "secret") {
            options.algorithms = HS_ALGS;
          } else if (["rsa", "rsa-pss"].includes(secretOrPublicKey2.asymmetricKeyType)) {
            options.algorithms = RSA_KEY_ALGS;
          } else if (secretOrPublicKey2.asymmetricKeyType === "ec") {
            options.algorithms = EC_KEY_ALGS;
          } else {
            options.algorithms = PUB_KEY_ALGS;
          }
        }
        if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
          return done(new JsonWebTokenError("invalid algorithm"));
        }
        if (header.alg.startsWith("HS") && secretOrPublicKey2.type !== "secret") {
          return done(new JsonWebTokenError(`secretOrPublicKey must be a symmetric key when using ${header.alg}`));
        } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey2.type !== "public") {
          return done(new JsonWebTokenError(`secretOrPublicKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInvalidAsymmetricKeyTypes) {
          try {
            validateAsymmetricKey(header.alg, secretOrPublicKey2);
          } catch (e5) {
            return done(e5);
          }
        }
        let valid;
        try {
          valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey2);
        } catch (e5) {
          return done(e5);
        }
        if (!valid) {
          return done(new JsonWebTokenError("invalid signature"));
        }
        const payload = decodedToken.payload;
        if (typeof payload.nbf !== "undefined" && !options.ignoreNotBefore) {
          if (typeof payload.nbf !== "number") {
            return done(new JsonWebTokenError("invalid nbf value"));
          }
          if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
            return done(new NotBeforeError("jwt not active", new Date(payload.nbf * 1e3)));
          }
        }
        if (typeof payload.exp !== "undefined" && !options.ignoreExpiration) {
          if (typeof payload.exp !== "number") {
            return done(new JsonWebTokenError("invalid exp value"));
          }
          if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
            return done(new TokenExpiredError("jwt expired", new Date(payload.exp * 1e3)));
          }
        }
        if (options.audience) {
          const audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
          const target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
          const match = target.some(function(targetAudience) {
            return audiences.some(function(audience) {
              return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
            });
          });
          if (!match) {
            return done(new JsonWebTokenError("jwt audience invalid. expected: " + audiences.join(" or ")));
          }
        }
        if (options.issuer) {
          const invalid_issuer = typeof options.issuer === "string" && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
          if (invalid_issuer) {
            return done(new JsonWebTokenError("jwt issuer invalid. expected: " + options.issuer));
          }
        }
        if (options.subject) {
          if (payload.sub !== options.subject) {
            return done(new JsonWebTokenError("jwt subject invalid. expected: " + options.subject));
          }
        }
        if (options.jwtid) {
          if (payload.jti !== options.jwtid) {
            return done(new JsonWebTokenError("jwt jwtid invalid. expected: " + options.jwtid));
          }
        }
        if (options.nonce) {
          if (payload.nonce !== options.nonce) {
            return done(new JsonWebTokenError("jwt nonce invalid. expected: " + options.nonce));
          }
        }
        if (options.maxAge) {
          if (typeof payload.iat !== "number") {
            return done(new JsonWebTokenError("iat required when maxAge is specified"));
          }
          const maxAgeTimestamp = timespan(options.maxAge, payload.iat);
          if (typeof maxAgeTimestamp === "undefined") {
            return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
          }
          if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
            return done(new TokenExpiredError("maxAge exceeded", new Date(maxAgeTimestamp * 1e3)));
          }
        }
        if (options.complete === true) {
          const signature = decodedToken.signature;
          return done(null, {
            header,
            payload,
            signature
          });
        }
        return done(null, payload);
      });
    };
  }
});

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module2) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e5) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      __name(apply, "apply");
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      __name(arrayAggregator, "arrayAggregator");
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      __name(arrayEach, "arrayEach");
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      __name(arrayEachRight, "arrayEachRight");
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      __name(arrayEvery, "arrayEvery");
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      __name(arrayFilter, "arrayFilter");
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      __name(arrayIncludes, "arrayIncludes");
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      __name(arrayIncludesWith, "arrayIncludesWith");
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      __name(arrayMap, "arrayMap");
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      __name(arrayPush, "arrayPush");
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      __name(arrayReduce, "arrayReduce");
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      __name(arrayReduceRight, "arrayReduceRight");
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      __name(arraySome, "arraySome");
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      __name(asciiToArray, "asciiToArray");
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      __name(asciiWords, "asciiWords");
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      __name(baseFindKey, "baseFindKey");
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      __name(baseFindIndex, "baseFindIndex");
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      __name(baseIndexOf, "baseIndexOf");
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      __name(baseIndexOfWith, "baseIndexOfWith");
      function baseIsNaN(value) {
        return value !== value;
      }
      __name(baseIsNaN, "baseIsNaN");
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      __name(baseMean, "baseMean");
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      __name(baseProperty, "baseProperty");
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      __name(basePropertyOf, "basePropertyOf");
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      __name(baseReduce, "baseReduce");
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      __name(baseSortBy, "baseSortBy");
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      __name(baseSum, "baseSum");
      function baseTimes(n5, iteratee) {
        var index = -1, result = Array(n5);
        while (++index < n5) {
          result[index] = iteratee(index);
        }
        return result;
      }
      __name(baseTimes, "baseTimes");
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      __name(baseToPairs, "baseToPairs");
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      __name(baseTrim, "baseTrim");
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      __name(baseUnary, "baseUnary");
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      __name(baseValues, "baseValues");
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      __name(cacheHas, "cacheHas");
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      __name(charsStartIndex, "charsStartIndex");
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      __name(charsEndIndex, "charsEndIndex");
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      __name(countHolders, "countHolders");
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      __name(escapeStringChar, "escapeStringChar");
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      __name(getValue, "getValue");
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      __name(hasUnicode, "hasUnicode");
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      __name(hasUnicodeWord, "hasUnicodeWord");
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      __name(iteratorToArray, "iteratorToArray");
      function mapToArray(map2) {
        var index = -1, result = Array(map2.size);
        map2.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      __name(mapToArray, "mapToArray");
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      __name(overArg, "overArg");
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      __name(replaceHolders, "replaceHolders");
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      __name(setToArray, "setToArray");
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      __name(setToPairs, "setToPairs");
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      __name(strictIndexOf, "strictIndexOf");
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      __name(strictLastIndexOf, "strictLastIndexOf");
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      __name(stringSize, "stringSize");
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      __name(stringToArray, "stringToArray");
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      __name(trimmedEndIndex, "trimmedEndIndex");
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      __name(unicodeSize, "unicodeSize");
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      __name(unicodeToArray, "unicodeToArray");
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      __name(unicodeWords, "unicodeWords");
      var runInContext = /* @__PURE__ */ __name(function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer5 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer5 ? Buffer5.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e5) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer5 ? Buffer5.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView2 = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        __name(lodash, "lodash");
        var baseCreate = function() {
          function object() {
          }
          __name(object, "object");
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        __name(baseLodash, "baseLodash");
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        __name(LodashWrapper, "LodashWrapper");
        lodash.templateSettings = {
          "escape": reEscape,
          "evaluate": reEvaluate,
          "interpolate": reInterpolate,
          "variable": "",
          "imports": {
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        __name(LazyWrapper, "LazyWrapper");
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        __name(lazyClone, "lazyClone");
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        __name(lazyReverse, "lazyReverse");
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        __name(lazyValue, "lazyValue");
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash2(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        __name(Hash2, "Hash");
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        __name(hashClear, "hashClear");
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        __name(hashDelete, "hashDelete");
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        __name(hashGet, "hashGet");
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        __name(hashHas, "hashHas");
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        __name(hashSet, "hashSet");
        Hash2.prototype.clear = hashClear;
        Hash2.prototype["delete"] = hashDelete;
        Hash2.prototype.get = hashGet;
        Hash2.prototype.has = hashHas;
        Hash2.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        __name(ListCache, "ListCache");
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        __name(listCacheClear, "listCacheClear");
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        __name(listCacheDelete, "listCacheDelete");
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        __name(listCacheGet, "listCacheGet");
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        __name(listCacheHas, "listCacheHas");
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        __name(listCacheSet, "listCacheSet");
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        __name(MapCache, "MapCache");
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash2(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash2()
          };
        }
        __name(mapCacheClear, "mapCacheClear");
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        __name(mapCacheDelete, "mapCacheDelete");
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        __name(mapCacheGet, "mapCacheGet");
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        __name(mapCacheHas, "mapCacheHas");
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        __name(mapCacheSet, "mapCacheSet");
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        __name(SetCache, "SetCache");
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        __name(setCacheAdd, "setCacheAdd");
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        __name(setCacheHas, "setCacheHas");
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        __name(Stack, "Stack");
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        __name(stackClear, "stackClear");
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        __name(stackDelete, "stackDelete");
        function stackGet(key) {
          return this.__data__.get(key);
        }
        __name(stackGet, "stackGet");
        function stackHas(key) {
          return this.__data__.has(key);
        }
        __name(stackHas, "stackHas");
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        __name(stackSet, "stackSet");
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        __name(arrayLikeKeys, "arrayLikeKeys");
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        __name(arraySample, "arraySample");
        function arraySampleSize(array, n5) {
          return shuffleSelf(copyArray(array), baseClamp(n5, 0, array.length));
        }
        __name(arraySampleSize, "arraySampleSize");
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        __name(arrayShuffle, "arrayShuffle");
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        __name(assignMergeValue, "assignMergeValue");
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        __name(assignValue, "assignValue");
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        __name(assocIndexOf, "assocIndexOf");
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        __name(baseAggregator, "baseAggregator");
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        __name(baseAssign, "baseAssign");
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        __name(baseAssignIn, "baseAssignIn");
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        __name(baseAssignValue, "baseAssignValue");
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        __name(baseAt, "baseAt");
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        __name(baseClamp, "baseClamp");
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet2(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        __name(baseClone, "baseClone");
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        __name(baseConforms, "baseConforms");
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        __name(baseConformsTo, "baseConformsTo");
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        __name(baseDelay, "baseDelay");
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        __name(baseDifference, "baseDifference");
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        __name(baseEvery, "baseEvery");
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        __name(baseExtremum, "baseExtremum");
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        __name(baseFill, "baseFill");
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        __name(baseFilter, "baseFilter");
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        __name(baseFlatten, "baseFlatten");
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        __name(baseForOwn, "baseForOwn");
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        __name(baseForOwnRight, "baseForOwnRight");
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction2(object[key]);
          });
        }
        __name(baseFunctions, "baseFunctions");
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        __name(baseGet, "baseGet");
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        __name(baseGetAllKeys, "baseGetAllKeys");
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        __name(baseGetTag, "baseGetTag");
        function baseGt(value, other) {
          return value > other;
        }
        __name(baseGt, "baseGt");
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        __name(baseHas, "baseHas");
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        __name(baseHasIn, "baseHasIn");
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        __name(baseInRange, "baseInRange");
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        __name(baseIntersection, "baseIntersection");
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        __name(baseInverter, "baseInverter");
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        __name(baseInvoke, "baseInvoke");
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        __name(baseIsArguments, "baseIsArguments");
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        __name(baseIsArrayBuffer, "baseIsArrayBuffer");
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        __name(baseIsDate, "baseIsDate");
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        __name(baseIsEqual, "baseIsEqual");
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        __name(baseIsEqualDeep, "baseIsEqualDeep");
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        __name(baseIsMap, "baseIsMap");
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        __name(baseIsMatch, "baseIsMatch");
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        __name(baseIsNative, "baseIsNative");
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        __name(baseIsRegExp, "baseIsRegExp");
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        __name(baseIsSet, "baseIsSet");
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        __name(baseIsTypedArray, "baseIsTypedArray");
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        __name(baseIteratee, "baseIteratee");
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        __name(baseKeys, "baseKeys");
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        __name(baseKeysIn, "baseKeysIn");
        function baseLt(value, other) {
          return value < other;
        }
        __name(baseLt, "baseLt");
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        __name(baseMap, "baseMap");
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        __name(baseMatches, "baseMatches");
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        __name(baseMatchesProperty, "baseMatchesProperty");
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        __name(baseMerge, "baseMerge");
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction2(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        __name(baseMergeDeep, "baseMergeDeep");
        function baseNth(array, n5) {
          var length = array.length;
          if (!length) {
            return;
          }
          n5 += n5 < 0 ? length : 0;
          return isIndex(n5, length) ? array[n5] : undefined2;
        }
        __name(baseNth, "baseNth");
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        __name(baseOrderBy, "baseOrderBy");
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        __name(basePick, "basePick");
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        __name(basePickBy, "basePickBy");
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        __name(basePropertyDeep, "basePropertyDeep");
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        __name(basePullAll, "basePullAll");
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        __name(basePullAt, "basePullAt");
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        __name(baseRandom, "baseRandom");
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        __name(baseRange, "baseRange");
        function baseRepeat(string, n5) {
          var result2 = "";
          if (!string || n5 < 1 || n5 > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n5 % 2) {
              result2 += string;
            }
            n5 = nativeFloor(n5 / 2);
            if (n5) {
              string += string;
            }
          } while (n5);
          return result2;
        }
        __name(baseRepeat, "baseRepeat");
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        __name(baseRest, "baseRest");
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        __name(baseSample, "baseSample");
        function baseSampleSize(collection, n5) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n5, 0, array.length));
        }
        __name(baseSampleSize, "baseSampleSize");
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        __name(baseSet, "baseSet");
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        __name(baseShuffle, "baseShuffle");
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        __name(baseSlice, "baseSlice");
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        __name(baseSome, "baseSome");
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        __name(baseSortedIndex, "baseSortedIndex");
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        __name(baseSortedIndexBy, "baseSortedIndexBy");
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        __name(baseSortedUniq, "baseSortedUniq");
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        __name(baseToNumber, "baseToNumber");
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        __name(baseToString, "baseToString");
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        __name(baseUniq, "baseUniq");
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        __name(baseUnset, "baseUnset");
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        __name(baseUpdate, "baseUpdate");
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        __name(baseWhile, "baseWhile");
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        __name(baseWrapperValue, "baseWrapperValue");
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        __name(baseXor, "baseXor");
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        __name(baseZipObject, "baseZipObject");
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        __name(castArrayLikeObject, "castArrayLikeObject");
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        __name(castFunction, "castFunction");
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        __name(castPath, "castPath");
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        __name(castSlice, "castSlice");
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        __name(cloneBuffer, "cloneBuffer");
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        __name(cloneArrayBuffer, "cloneArrayBuffer");
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        __name(cloneDataView, "cloneDataView");
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        __name(cloneRegExp, "cloneRegExp");
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        __name(cloneSymbol, "cloneSymbol");
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        __name(cloneTypedArray, "cloneTypedArray");
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        __name(compareAscending, "compareAscending");
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        __name(compareMultiple, "compareMultiple");
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        __name(composeArgs, "composeArgs");
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        __name(composeArgsRight, "composeArgsRight");
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        __name(copyArray, "copyArray");
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        __name(copyObject, "copyObject");
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        __name(copySymbols, "copySymbols");
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        __name(copySymbolsIn, "copySymbolsIn");
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        __name(createAggregator, "createAggregator");
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        __name(createAssigner, "createAssigner");
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        __name(createBaseEach, "createBaseEach");
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        __name(createBaseFor, "createBaseFor");
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          __name(wrapper, "wrapper");
          return wrapper;
        }
        __name(createBind, "createBind");
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        __name(createCaseFirst, "createCaseFirst");
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        __name(createCompounder, "createCompounder");
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        __name(createCtor, "createCtor");
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          __name(wrapper, "wrapper");
          return wrapper;
        }
        __name(createCurry, "createCurry");
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = /* @__PURE__ */ __name(function(key) {
                return iteratee2(iterable[key], key, iterable);
              }, "predicate");
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        __name(createFind, "createFind");
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        __name(createFlow, "createFlow");
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          __name(wrapper, "wrapper");
          return wrapper;
        }
        __name(createHybrid, "createHybrid");
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        __name(createInverter, "createInverter");
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        __name(createMathOperation, "createMathOperation");
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        __name(createOver, "createOver");
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        __name(createPadding, "createPadding");
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          __name(wrapper, "wrapper");
          return wrapper;
        }
        __name(createPartial, "createPartial");
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        __name(createRange, "createRange");
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        __name(createRelationalOperation, "createRelationalOperation");
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        __name(createRecurry, "createRecurry");
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        __name(createRound, "createRound");
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        __name(createToPairs, "createToPairs");
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        __name(createWrap, "createWrap");
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        __name(customDefaultsAssignIn, "customDefaultsAssignIn");
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        __name(customDefaultsMerge, "customDefaultsMerge");
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        __name(customOmitClone, "customOmitClone");
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        __name(equalArrays, "equalArrays");
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        __name(equalByTag, "equalByTag");
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        __name(equalObjects, "equalObjects");
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        __name(flatRest, "flatRest");
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        __name(getAllKeys, "getAllKeys");
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        __name(getAllKeysIn, "getAllKeysIn");
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        __name(getFuncName, "getFuncName");
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        __name(getHolder, "getHolder");
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        __name(getIteratee, "getIteratee");
        function getMapData(map3, key) {
          var data = map3.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        __name(getMapData, "getMapData");
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        __name(getMatchData, "getMatchData");
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        __name(getNative, "getNative");
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e5) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        __name(getRawTag, "getRawTag");
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = /* @__PURE__ */ __name(function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          }, "getTag");
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        __name(getView, "getView");
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        __name(getWrapDetails, "getWrapDetails");
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        __name(hasPath, "hasPath");
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        __name(initCloneArray, "initCloneArray");
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        __name(initCloneObject, "initCloneObject");
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        __name(initCloneByTag, "initCloneByTag");
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        __name(insertWrapDetails, "insertWrapDetails");
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        __name(isFlattenable, "isFlattenable");
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        __name(isIndex, "isIndex");
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        __name(isIterateeCall, "isIterateeCall");
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        __name(isKey, "isKey");
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        __name(isKeyable, "isKeyable");
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        __name(isLaziable, "isLaziable");
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        __name(isMasked, "isMasked");
        var isMaskable = coreJsData ? isFunction2 : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        __name(isPrototype, "isPrototype");
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        __name(isStrictComparable, "isStrictComparable");
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        __name(matchesStrictComparable, "matchesStrictComparable");
        function memoizeCapped(func) {
          var result2 = memoize2(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        __name(memoizeCapped, "memoizeCapped");
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        __name(mergeData, "mergeData");
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        __name(nativeKeysIn, "nativeKeysIn");
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        __name(objectToString, "objectToString");
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        __name(overRest, "overRest");
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        __name(parent, "parent");
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        __name(reorder, "reorder");
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        __name(safeGet, "safeGet");
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        __name(setWrapToString, "setWrapToString");
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        __name(shortOut, "shortOut");
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        __name(shuffleSelf, "shuffleSelf");
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        __name(toKey, "toKey");
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e5) {
            }
            try {
              return func + "";
            } catch (e5) {
            }
          }
          return "";
        }
        __name(toSource, "toSource");
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        __name(updateWrapDetails, "updateWrapDetails");
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        __name(wrapperClone, "wrapperClone");
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        __name(chunk, "chunk");
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        __name(compact, "compact");
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        __name(concat, "concat");
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n5, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n5 = guard || n5 === undefined2 ? 1 : toInteger(n5);
          return baseSlice(array, n5 < 0 ? 0 : n5, length);
        }
        __name(drop, "drop");
        function dropRight(array, n5, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n5 = guard || n5 === undefined2 ? 1 : toInteger(n5);
          n5 = length - n5;
          return baseSlice(array, 0, n5 < 0 ? 0 : n5);
        }
        __name(dropRight, "dropRight");
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        __name(dropRightWhile, "dropRightWhile");
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        __name(dropWhile, "dropWhile");
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        __name(fill, "fill");
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        __name(findIndex, "findIndex");
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        __name(findLastIndex, "findLastIndex");
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        __name(flatten, "flatten");
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        __name(flattenDeep, "flattenDeep");
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        __name(flattenDepth, "flattenDepth");
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        __name(fromPairs, "fromPairs");
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        __name(head, "head");
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        __name(indexOf, "indexOf");
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        __name(initial, "initial");
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join4(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        __name(join4, "join");
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        __name(last, "last");
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        __name(lastIndexOf, "lastIndexOf");
        function nth(array, n5) {
          return array && array.length ? baseNth(array, toInteger(n5)) : undefined2;
        }
        __name(nth, "nth");
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        __name(pullAll, "pullAll");
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        __name(pullAllBy, "pullAllBy");
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        __name(pullAllWith, "pullAllWith");
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        __name(remove, "remove");
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        __name(reverse, "reverse");
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        __name(slice, "slice");
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        __name(sortedIndex, "sortedIndex");
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        __name(sortedIndexBy, "sortedIndexBy");
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        __name(sortedIndexOf, "sortedIndexOf");
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        __name(sortedLastIndex, "sortedLastIndex");
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        __name(sortedLastIndexBy, "sortedLastIndexBy");
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        __name(sortedLastIndexOf, "sortedLastIndexOf");
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        __name(sortedUniq, "sortedUniq");
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        __name(sortedUniqBy, "sortedUniqBy");
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        __name(tail, "tail");
        function take2(array, n5, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n5 = guard || n5 === undefined2 ? 1 : toInteger(n5);
          return baseSlice(array, 0, n5 < 0 ? 0 : n5);
        }
        __name(take2, "take");
        function takeRight(array, n5, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n5 = guard || n5 === undefined2 ? 1 : toInteger(n5);
          n5 = length - n5;
          return baseSlice(array, n5 < 0 ? 0 : n5, length);
        }
        __name(takeRight, "takeRight");
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        __name(takeRightWhile, "takeRightWhile");
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        __name(takeWhile, "takeWhile");
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        __name(uniq, "uniq");
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        __name(uniqBy, "uniqBy");
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        __name(uniqWith, "uniqWith");
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        __name(unzip, "unzip");
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        __name(unzipWith, "unzipWith");
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        __name(zipObject, "zipObject");
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        __name(zipObjectDeep, "zipObjectDeep");
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain2(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        __name(chain2, "chain");
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        __name(tap, "tap");
        function thru(value, interceptor) {
          return interceptor(value);
        }
        __name(thru, "thru");
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = /* @__PURE__ */ __name(function(object) {
            return baseAt(object, paths);
          }, "interceptor");
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain2(this);
        }
        __name(wrapperChain, "wrapperChain");
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        __name(wrapperCommit, "wrapperCommit");
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        __name(wrapperNext, "wrapperNext");
        function wrapperToIterator() {
          return this;
        }
        __name(wrapperToIterator, "wrapperToIterator");
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        __name(wrapperPlant, "wrapperPlant");
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        __name(wrapperReverse, "wrapperReverse");
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        __name(wrapperValue, "wrapperValue");
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        __name(every, "every");
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        __name(filter, "filter");
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), 1);
        }
        __name(flatMap, "flatMap");
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), INFINITY);
        }
        __name(flatMapDeep, "flatMapDeep");
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map2(collection, iteratee2), depth);
        }
        __name(flatMapDepth, "flatMapDepth");
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        __name(forEach, "forEach");
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        __name(forEachRight, "forEachRight");
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        __name(includes, "includes");
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map2(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        __name(map2, "map");
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        __name(orderBy, "orderBy");
        var partition2 = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        __name(reduce, "reduce");
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        __name(reduceRight, "reduceRight");
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate2(getIteratee(predicate, 3)));
        }
        __name(reject, "reject");
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        __name(sample, "sample");
        function sampleSize(collection, n5, guard) {
          if (guard ? isIterateeCall(collection, n5, guard) : n5 === undefined2) {
            n5 = 1;
          } else {
            n5 = toInteger(n5);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n5);
        }
        __name(sampleSize, "sampleSize");
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        __name(shuffle, "shuffle");
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        __name(size, "size");
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        __name(some, "some");
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n5, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n5 = toInteger(n5);
          return function() {
            if (--n5 < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        __name(after, "after");
        function ary(func, n5, guard) {
          n5 = guard ? undefined2 : n5;
          n5 = func && n5 == null ? func.length : n5;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n5);
        }
        __name(ary, "ary");
        function before(n5, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n5 = toInteger(n5);
          return function() {
            if (--n5 > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n5 <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        __name(before, "before");
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        __name(curry, "curry");
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        __name(curryRight, "curryRight");
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          __name(invokeFunc, "invokeFunc");
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          __name(leadingEdge, "leadingEdge");
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          __name(remainingWait, "remainingWait");
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          __name(shouldInvoke, "shouldInvoke");
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          __name(timerExpired, "timerExpired");
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          __name(trailingEdge, "trailingEdge");
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          __name(cancel, "cancel");
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          __name(flush, "flush");
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          __name(debounced, "debounced");
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        __name(debounce, "debounce");
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        __name(flip, "flip");
        function memoize2(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = /* @__PURE__ */ __name(function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          }, "memoized");
          memoized.cache = new (memoize2.Cache || MapCache)();
          return memoized;
        }
        __name(memoize2, "memoize");
        memoize2.Cache = MapCache;
        function negate2(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        __name(negate2, "negate");
        function once(func) {
          return before(2, func);
        }
        __name(once, "once");
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        __name(rest, "rest");
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        __name(spread, "spread");
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        __name(throttle, "throttle");
        function unary(func) {
          return ary(func, 1);
        }
        __name(unary, "unary");
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        __name(wrap, "wrap");
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        __name(castArray, "castArray");
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        __name(clone, "clone");
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        __name(cloneWith, "cloneWith");
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        __name(cloneDeep, "cloneDeep");
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        __name(cloneDeepWith, "cloneDeepWith");
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        __name(conformsTo, "conformsTo");
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        __name(eq, "eq");
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer2 = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction2(value);
        }
        __name(isArrayLike, "isArrayLike");
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        __name(isArrayLikeObject, "isArrayLikeObject");
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        __name(isBoolean, "isBoolean");
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        __name(isElement, "isElement");
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        __name(isEmpty, "isEmpty");
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        __name(isEqual, "isEqual");
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        __name(isEqualWith, "isEqualWith");
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        __name(isError, "isError");
        function isFinite2(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        __name(isFinite2, "isFinite");
        function isFunction2(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        __name(isFunction2, "isFunction");
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        __name(isInteger, "isInteger");
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        __name(isLength, "isLength");
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        __name(isObject, "isObject");
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        __name(isObjectLike, "isObjectLike");
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        __name(isMatch, "isMatch");
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        __name(isMatchWith, "isMatchWith");
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        __name(isNaN2, "isNaN");
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        __name(isNative, "isNative");
        function isNull(value) {
          return value === null;
        }
        __name(isNull, "isNull");
        function isNil(value) {
          return value == null;
        }
        __name(isNil, "isNil");
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        __name(isNumber, "isNumber");
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        __name(isPlainObject, "isPlainObject");
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        __name(isSafeInteger, "isSafeInteger");
        var isSet2 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        __name(isString, "isString");
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        __name(isSymbol, "isSymbol");
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        __name(isUndefined, "isUndefined");
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        __name(isWeakMap, "isWeakMap");
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        __name(isWeakSet, "isWeakSet");
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        __name(toArray, "toArray");
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign2 = value < 0 ? -1 : 1;
            return sign2 * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        __name(toFinite, "toFinite");
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        __name(toInteger, "toInteger");
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        __name(toLength, "toLength");
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        __name(toNumber, "toNumber");
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        __name(toPlainObject, "toPlainObject");
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        __name(toSafeInteger, "toSafeInteger");
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        __name(toString, "toString");
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create2(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        __name(create2, "create");
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        __name(findKey, "findKey");
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        __name(findLastKey, "findLastKey");
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        __name(forIn, "forIn");
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        __name(forInRight, "forInRight");
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        __name(forOwn, "forOwn");
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        __name(forOwnRight, "forOwnRight");
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        __name(functions, "functions");
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        __name(functionsIn, "functionsIn");
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        __name(get, "get");
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        __name(has, "has");
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        __name(hasIn, "hasIn");
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        __name(keys, "keys");
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        __name(keysIn, "keysIn");
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        __name(mapKeys, "mapKeys");
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        __name(mapValues, "mapValues");
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate2(getIteratee(predicate)));
        }
        __name(omitBy, "omitBy");
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        __name(pickBy, "pickBy");
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction2(value) ? value.call(object) : value;
          }
          return object;
        }
        __name(result, "result");
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        __name(set, "set");
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        __name(setWith, "setWith");
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        __name(transform, "transform");
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        __name(unset, "unset");
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        __name(update, "update");
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        __name(updateWith, "updateWith");
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        __name(values, "values");
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        __name(valuesIn, "valuesIn");
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        __name(clamp, "clamp");
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        __name(inRange, "inRange");
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        __name(random, "random");
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        __name(capitalize, "capitalize");
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        __name(deburr, "deburr");
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        __name(endsWith, "endsWith");
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        __name(escape, "escape");
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        __name(escapeRegExp, "escapeRegExp");
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        __name(pad, "pad");
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        __name(padEnd, "padEnd");
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        __name(padStart, "padStart");
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        __name(parseInt2, "parseInt");
        function repeat(string, n5, guard) {
          if (guard ? isIterateeCall(string, n5, guard) : n5 === undefined2) {
            n5 = 1;
          } else {
            n5 = toInteger(n5);
          }
          return baseRepeat(toString(string), n5);
        }
        __name(repeat, "repeat");
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        __name(replace, "replace");
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        __name(split, "split");
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        __name(startsWith, "startsWith");
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        __name(template, "template");
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        __name(toLower, "toLower");
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        __name(toUpper, "toUpper");
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        __name(trim, "trim");
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        __name(trimEnd, "trimEnd");
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        __name(trimStart, "trimStart");
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring2 = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring2)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        __name(truncate, "truncate");
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        __name(unescape, "unescape");
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        __name(words, "words");
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e5) {
            return isError(e5) ? e5 : new Error2(e5);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        __name(cond, "cond");
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        __name(conforms, "conforms");
        function constant(value) {
          return function() {
            return value;
          };
        }
        __name(constant, "constant");
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        __name(defaultTo, "defaultTo");
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        __name(identity, "identity");
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        __name(iteratee, "iteratee");
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        __name(matches, "matches");
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        __name(matchesProperty, "matchesProperty");
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain3 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain3 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        __name(mixin, "mixin");
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        __name(noConflict, "noConflict");
        function noop() {
        }
        __name(noop, "noop");
        function nthArg(n5) {
          n5 = toInteger(n5);
          return baseRest(function(args) {
            return baseNth(args, n5);
          });
        }
        __name(nthArg, "nthArg");
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        __name(property, "property");
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        __name(propertyOf, "propertyOf");
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        __name(stubArray, "stubArray");
        function stubFalse() {
          return false;
        }
        __name(stubFalse, "stubFalse");
        function stubObject() {
          return {};
        }
        __name(stubObject, "stubObject");
        function stubString() {
          return "";
        }
        __name(stubString, "stubString");
        function stubTrue() {
          return true;
        }
        __name(stubTrue, "stubTrue");
        function times(n5, iteratee2) {
          n5 = toInteger(n5);
          if (n5 < 1 || n5 > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n5, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n5 -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n5) {
            iteratee2(index);
          }
          return result2;
        }
        __name(times, "times");
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        __name(toPath, "toPath");
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        __name(uniqueId, "uniqueId");
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        __name(max, "max");
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        __name(maxBy, "maxBy");
        function mean(array) {
          return baseMean(array, identity);
        }
        __name(mean, "mean");
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        __name(meanBy, "meanBy");
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        __name(min, "min");
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        __name(minBy, "minBy");
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        __name(sum, "sum");
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        __name(sumBy, "sumBy");
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain2;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create2;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map2;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize2;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate2;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition2;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take2;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer2;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite2;
        lodash.isFunction = isFunction2;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet2;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join4;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n5) {
            n5 = n5 === undefined2 ? 1 : nativeMax(toInteger(n5), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n5, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n5, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n5) {
            return this.reverse()[methodName](n5).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate2(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = /* @__PURE__ */ __name(function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            }, "interceptor");
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      }, "runInContext");
      var _ = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(exports);
  }
});

// node_modules/jsonwebtoken/sign.js
var require_sign = __commonJS({
  "node_modules/jsonwebtoken/sign.js"(exports, module2) {
    var timespan = require_timespan();
    var PS_SUPPORTED = require_psSupported();
    var validateAsymmetricKey = require_validateAsymmetricKey();
    var jws = require_jws();
    var { includes, isBoolean, isInteger, isNumber, isPlainObject, isString, once } = require_lodash();
    var { KeyObject, createSecretKey, createPrivateKey } = __require("crypto");
    var SUPPORTED_ALGS = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
    if (PS_SUPPORTED) {
      SUPPORTED_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
    }
    var sign_options_schema = {
      expiresIn: { isValid: function(value) {
        return isInteger(value) || isString(value) && value;
      }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
      notBefore: { isValid: function(value) {
        return isInteger(value) || isString(value) && value;
      }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
      audience: { isValid: function(value) {
        return isString(value) || Array.isArray(value);
      }, message: '"audience" must be a string or array' },
      algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
      header: { isValid: isPlainObject, message: '"header" must be an object' },
      encoding: { isValid: isString, message: '"encoding" must be a string' },
      issuer: { isValid: isString, message: '"issuer" must be a string' },
      subject: { isValid: isString, message: '"subject" must be a string' },
      jwtid: { isValid: isString, message: '"jwtid" must be a string' },
      noTimestamp: { isValid: isBoolean, message: '"noTimestamp" must be a boolean' },
      keyid: { isValid: isString, message: '"keyid" must be a string' },
      mutatePayload: { isValid: isBoolean, message: '"mutatePayload" must be a boolean' },
      allowInsecureKeySizes: { isValid: isBoolean, message: '"allowInsecureKeySizes" must be a boolean' },
      allowInvalidAsymmetricKeyTypes: { isValid: isBoolean, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' }
    };
    var registered_claims_schema = {
      iat: { isValid: isNumber, message: '"iat" should be a number of seconds' },
      exp: { isValid: isNumber, message: '"exp" should be a number of seconds' },
      nbf: { isValid: isNumber, message: '"nbf" should be a number of seconds' }
    };
    function validate2(schema, allowUnknown, object, parameterName) {
      if (!isPlainObject(object)) {
        throw new Error('Expected "' + parameterName + '" to be a plain object.');
      }
      Object.keys(object).forEach(function(key) {
        const validator = schema[key];
        if (!validator) {
          if (!allowUnknown) {
            throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
          }
          return;
        }
        if (!validator.isValid(object[key])) {
          throw new Error(validator.message);
        }
      });
    }
    __name(validate2, "validate");
    function validateOptions(options) {
      return validate2(sign_options_schema, false, options, "options");
    }
    __name(validateOptions, "validateOptions");
    function validatePayload(payload) {
      return validate2(registered_claims_schema, true, payload, "payload");
    }
    __name(validatePayload, "validatePayload");
    var options_to_payload = {
      "audience": "aud",
      "issuer": "iss",
      "subject": "sub",
      "jwtid": "jti"
    };
    var options_for_objects = [
      "expiresIn",
      "notBefore",
      "noTimestamp",
      "audience",
      "issuer",
      "subject",
      "jwtid"
    ];
    module2.exports = function(payload, secretOrPrivateKey, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
      const isObjectPayload = typeof payload === "object" && !Buffer.isBuffer(payload);
      const header = Object.assign({
        alg: options.algorithm || "HS256",
        typ: isObjectPayload ? "JWT" : void 0,
        kid: options.keyid
      }, options.header);
      function failure(err) {
        if (callback) {
          return callback(err);
        }
        throw err;
      }
      __name(failure, "failure");
      if (!secretOrPrivateKey && options.algorithm !== "none") {
        return failure(new Error("secretOrPrivateKey must have a value"));
      }
      if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject)) {
        try {
          secretOrPrivateKey = createPrivateKey(secretOrPrivateKey);
        } catch (_) {
          try {
            secretOrPrivateKey = createSecretKey(typeof secretOrPrivateKey === "string" ? Buffer.from(secretOrPrivateKey) : secretOrPrivateKey);
          } catch (_2) {
            return failure(new Error("secretOrPrivateKey is not valid key material"));
          }
        }
      }
      if (header.alg.startsWith("HS") && secretOrPrivateKey.type !== "secret") {
        return failure(new Error(`secretOrPrivateKey must be a symmetric key when using ${header.alg}`));
      } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
        if (secretOrPrivateKey.type !== "private") {
          return failure(new Error(`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInsecureKeySizes && !header.alg.startsWith("ES") && secretOrPrivateKey.asymmetricKeyDetails !== void 0 && secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
          return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
        }
      }
      if (typeof payload === "undefined") {
        return failure(new Error("payload is required"));
      } else if (isObjectPayload) {
        try {
          validatePayload(payload);
        } catch (error) {
          return failure(error);
        }
        if (!options.mutatePayload) {
          payload = Object.assign({}, payload);
        }
      } else {
        const invalid_options = options_for_objects.filter(function(opt) {
          return typeof options[opt] !== "undefined";
        });
        if (invalid_options.length > 0) {
          return failure(new Error("invalid " + invalid_options.join(",") + " option for " + typeof payload + " payload"));
        }
      }
      if (typeof payload.exp !== "undefined" && typeof options.expiresIn !== "undefined") {
        return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
      }
      if (typeof payload.nbf !== "undefined" && typeof options.notBefore !== "undefined") {
        return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
      }
      try {
        validateOptions(options);
      } catch (error) {
        return failure(error);
      }
      if (!options.allowInvalidAsymmetricKeyTypes) {
        try {
          validateAsymmetricKey(header.alg, secretOrPrivateKey);
        } catch (error) {
          return failure(error);
        }
      }
      const timestamp = payload.iat || Math.floor(Date.now() / 1e3);
      if (options.noTimestamp) {
        delete payload.iat;
      } else if (isObjectPayload) {
        payload.iat = timestamp;
      }
      if (typeof options.notBefore !== "undefined") {
        try {
          payload.nbf = timespan(options.notBefore, timestamp);
        } catch (err) {
          return failure(err);
        }
        if (typeof payload.nbf === "undefined") {
          return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
      }
      if (typeof options.expiresIn !== "undefined" && typeof payload === "object") {
        try {
          payload.exp = timespan(options.expiresIn, timestamp);
        } catch (err) {
          return failure(err);
        }
        if (typeof payload.exp === "undefined") {
          return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
      }
      Object.keys(options_to_payload).forEach(function(key) {
        const claim = options_to_payload[key];
        if (typeof options[key] !== "undefined") {
          if (typeof payload[claim] !== "undefined") {
            return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
          }
          payload[claim] = options[key];
        }
      });
      const encoding = options.encoding || "utf8";
      if (typeof callback === "function") {
        callback = callback && once(callback);
        jws.createSign({
          header,
          privateKey: secretOrPrivateKey,
          payload,
          encoding
        }).once("error", callback).once("done", function(signature) {
          if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
            return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
          }
          callback(null, signature);
        });
      } else {
        let signature = jws.sign({ header, payload, secret: secretOrPrivateKey, encoding });
        if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
          throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`);
        }
        return signature;
      }
    };
  }
});

// node_modules/jsonwebtoken/index.js
var require_jsonwebtoken = __commonJS({
  "node_modules/jsonwebtoken/index.js"(exports, module2) {
    module2.exports = {
      decode: require_decode(),
      verify: require_verify(),
      sign: require_sign(),
      JsonWebTokenError: require_JsonWebTokenError(),
      NotBeforeError: require_NotBeforeError(),
      TokenExpiredError: require_TokenExpiredError()
    };
  }
});

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/configurations.js
var ENV_ENDPOINT_DISCOVERY = ["AWS_ENABLE_ENDPOINT_DISCOVERY", "AWS_ENDPOINT_DISCOVERY_ENABLED"];
var CONFIG_ENDPOINT_DISCOVERY = "endpoint_discovery_enabled";
var isFalsy = /* @__PURE__ */ __name((value) => ["false", "0"].indexOf(value) >= 0, "isFalsy");
var NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => {
    for (let i5 = 0; i5 < ENV_ENDPOINT_DISCOVERY.length; i5++) {
      const envKey = ENV_ENDPOINT_DISCOVERY[i5];
      if (envKey in env2) {
        const value = env2[envKey];
        if (value === "") {
          throw Error(`Environment variable ${envKey} can't be empty of undefined, got "${value}"`);
        }
        return !isFalsy(value);
      }
    }
  },
  configFileSelector: (profile) => {
    if (CONFIG_ENDPOINT_DISCOVERY in profile) {
      const value = profile[CONFIG_ENDPOINT_DISCOVERY];
      if (value === void 0) {
        throw Error(`Shared config entry ${CONFIG_ENDPOINT_DISCOVERY} can't be undefined, got "${value}"`);
      }
      return !isFalsy(value);
    }
  },
  default: void 0
};

// node_modules/@smithy/types/dist-es/auth.js
var HttpAuthLocation;
(function(HttpAuthLocation3) {
  HttpAuthLocation3["HEADER"] = "header";
  HttpAuthLocation3["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));

// node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
(function(EndpointURLScheme3) {
  EndpointURLScheme3["HTTP"] = "http";
  EndpointURLScheme3["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

// node_modules/@smithy/types/dist-es/http.js
var FieldPosition;
(function(FieldPosition3) {
  FieldPosition3[FieldPosition3["HEADER"] = 0] = "HEADER";
  FieldPosition3[FieldPosition3["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));

// node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol;
(function(RequestHandlerProtocol3) {
  RequestHandlerProtocol3["HTTP_0_9"] = "http/0.9";
  RequestHandlerProtocol3["HTTP_1_0"] = "http/1.0";
  RequestHandlerProtocol3["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));

// node_modules/@smithy/protocol-http/dist-es/httpRequest.js
var HttpRequest = class {
  constructor(options) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
    this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
    this.username = options.username;
    this.password = options.password;
    this.fragment = options.fragment;
  }
  static isInstance(request2) {
    if (!request2)
      return false;
    const req = request2;
    return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
  }
  clone() {
    const cloned = new HttpRequest({
      ...this,
      headers: { ...this.headers }
    });
    if (cloned.query)
      cloned.query = cloneQuery(cloned.query);
    return cloned;
  }
};
__name(HttpRequest, "HttpRequest");
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
__name(cloneQuery, "cloneQuery");

// node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var HttpResponse = class {
  constructor(options) {
    this.statusCode = options.statusCode;
    this.reason = options.reason;
    this.headers = options.headers || {};
    this.body = options.body;
  }
  static isInstance(response) {
    if (!response)
      return false;
    const resp = response;
    return typeof resp.statusCode === "number" && typeof resp.headers === "object";
  }
};
__name(HttpResponse, "HttpResponse");

// node_modules/@aws-sdk/endpoint-cache/dist-es/EndpointCache.js
var import_lru_cache = __toESM(require_lru_cache());
var EndpointCache = class {
  constructor(capacity) {
    this.cache = new import_lru_cache.default(capacity);
  }
  getEndpoint(key) {
    const endpointsWithExpiry = this.get(key);
    if (!endpointsWithExpiry || endpointsWithExpiry.length === 0) {
      return void 0;
    }
    const endpoints = endpointsWithExpiry.map((endpoint) => endpoint.Address);
    return endpoints[Math.floor(Math.random() * endpoints.length)];
  }
  get(key) {
    if (!this.has(key)) {
      return;
    }
    const value = this.cache.get(key);
    if (!value) {
      return;
    }
    const now = Date.now();
    const endpointsWithExpiry = value.filter((endpoint) => now < endpoint.Expires);
    if (endpointsWithExpiry.length === 0) {
      this.delete(key);
      return void 0;
    }
    return endpointsWithExpiry;
  }
  set(key, endpoints) {
    const now = Date.now();
    this.cache.set(key, endpoints.map(({ Address, CachePeriodInMinutes }) => ({
      Address,
      Expires: now + CachePeriodInMinutes * 60 * 1e3
    })));
  }
  delete(key) {
    this.cache.set(key, []);
  }
  has(key) {
    if (!this.cache.has(key)) {
      return false;
    }
    const endpoints = this.cache.peek(key);
    if (!endpoints) {
      return false;
    }
    return endpoints.length > 0;
  }
  clear() {
    this.cache.clear();
  }
};
__name(EndpointCache, "EndpointCache");

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/resolveEndpointDiscoveryConfig.js
var resolveEndpointDiscoveryConfig = /* @__PURE__ */ __name((input, { endpointDiscoveryCommandCtor }) => ({
  ...input,
  endpointDiscoveryCommandCtor,
  endpointCache: new EndpointCache(input.endpointCacheSize ?? 1e3),
  endpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== void 0 ? () => Promise.resolve(input.endpointDiscoveryEnabled) : input.endpointDiscoveryEnabledProvider,
  isClientEndpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== void 0
}), "resolveEndpointDiscoveryConfig");

// node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
function resolveHostHeaderConfig(input) {
  return input;
}
__name(resolveHostHeaderConfig, "resolveHostHeaderConfig");
var hostHeaderMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
  if (!HttpRequest.isInstance(args.request))
    return next(args);
  const { request: request2 } = args;
  const { handlerProtocol = "" } = options.requestHandler.metadata || {};
  if (handlerProtocol.indexOf("h2") >= 0 && !request2.headers[":authority"]) {
    delete request2.headers["host"];
    request2.headers[":authority"] = "";
  } else if (!request2.headers["host"]) {
    let host = request2.hostname;
    if (request2.port != null)
      host += `:${request2.port}`;
    request2.headers["host"] = host;
  }
  return next(args);
}, "hostHeaderMiddleware");
var hostHeaderMiddlewareOptions = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: true
};
var getHostHeaderPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
  }
}), "getHostHeaderPlugin");

// node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
var loggerMiddleware = /* @__PURE__ */ __name(() => (next, context) => async (args) => {
  try {
    const response = await next(args);
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
    const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
    const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
    const { $metadata, ...outputWithoutMetadata } = response.output;
    logger2?.info?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      output: outputFilterSensitiveLog(outputWithoutMetadata),
      metadata: $metadata
    });
    return response;
  } catch (error) {
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
    const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
    logger2?.error?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      error,
      metadata: error.$metadata
    });
    throw error;
  }
}, "loggerMiddleware");
var loggerMiddlewareOptions = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: true
};
var getLoggerPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  }
}), "getLoggerPlugin");

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
var recursionDetectionMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
  const { request: request2 } = args;
  if (!HttpRequest.isInstance(request2) || options.runtime !== "node" || request2.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
    return next(args);
  }
  const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
  const traceId = process.env[ENV_TRACE_ID];
  const nonEmptyString = /* @__PURE__ */ __name((str) => typeof str === "string" && str.length > 0, "nonEmptyString");
  if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
    request2.headers[TRACE_ID_HEADER_NAME] = traceId;
  }
  return next({
    ...args,
    request: request2
  });
}, "recursionDetectionMiddleware");
var addRecursionDetectionMiddlewareOptions = {
  step: "build",
  tags: ["RECURSION_DETECTION"],
  name: "recursionDetectionMiddleware",
  override: true,
  priority: "low"
};
var getRecursionDetectionPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
  }
}), "getRecursionDetectionPlugin");

// node_modules/@smithy/property-provider/dist-es/ProviderError.js
var ProviderError = class extends Error {
  constructor(message, tryNextLink = true) {
    super(message);
    this.tryNextLink = tryNextLink;
    this.name = "ProviderError";
    Object.setPrototypeOf(this, ProviderError.prototype);
  }
  static from(error, tryNextLink = true) {
    return Object.assign(new this(error.message, tryNextLink), error);
  }
};
__name(ProviderError, "ProviderError");

// node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js
var CredentialsProviderError = class extends ProviderError {
  constructor(message, tryNextLink = true) {
    super(message, tryNextLink);
    this.tryNextLink = tryNextLink;
    this.name = "CredentialsProviderError";
    Object.setPrototypeOf(this, CredentialsProviderError.prototype);
  }
};
__name(CredentialsProviderError, "CredentialsProviderError");

// node_modules/@smithy/property-provider/dist-es/TokenProviderError.js
var TokenProviderError = class extends ProviderError {
  constructor(message, tryNextLink = true) {
    super(message, tryNextLink);
    this.tryNextLink = tryNextLink;
    this.name = "TokenProviderError";
    Object.setPrototypeOf(this, TokenProviderError.prototype);
  }
};
__name(TokenProviderError, "TokenProviderError");

// node_modules/@smithy/property-provider/dist-es/chain.js
function chain(...providers) {
  return () => {
    let promise = Promise.reject(new ProviderError("No providers in chain"));
    for (const provider of providers) {
      promise = promise.catch((err) => {
        if (err?.tryNextLink) {
          return provider();
        }
        throw err;
      });
    }
    return promise;
  };
}
__name(chain, "chain");

// node_modules/@smithy/property-provider/dist-es/fromStatic.js
var fromStatic = /* @__PURE__ */ __name((staticValue) => () => Promise.resolve(staticValue), "fromStatic");

// node_modules/@smithy/property-provider/dist-es/memoize.js
var memoize = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = /* @__PURE__ */ __name(async () => {
    if (!pending) {
      pending = provider();
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  }, "coalesceProvider");
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider();
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider();
    }
    if (isConstant) {
      return resolved;
    }
    if (requiresRefresh && !requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider();
      return resolved;
    }
    return resolved;
  };
}, "memoize");

// node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
var import_crc322 = __toESM(require_build2());

// node_modules/@smithy/util-hex-encoding/dist-es/index.js
var SHORT_TO_HEX = {};
var HEX_TO_SHORT = {};
for (let i5 = 0; i5 < 256; i5++) {
  let encodedByte = i5.toString(16).toLowerCase();
  if (encodedByte.length === 1) {
    encodedByte = `0${encodedByte}`;
  }
  SHORT_TO_HEX[i5] = encodedByte;
  HEX_TO_SHORT[encodedByte] = i5;
}
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i5 = 0; i5 < encoded.length; i5 += 2) {
    const encodedByte = encoded.slice(i5, i5 + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i5 / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
__name(fromHex, "fromHex");
function toHex(bytes) {
  let out = "";
  for (let i5 = 0; i5 < bytes.byteLength; i5++) {
    out += SHORT_TO_HEX[bytes[i5]];
  }
  return out;
}
__name(toHex, "toHex");

// node_modules/@smithy/eventstream-codec/dist-es/Int64.js
var Int64 = class {
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i5 = 7, remaining = Math.abs(Math.round(number)); i5 > -1 && remaining > 0; i5--, remaining /= 256) {
      bytes[i5] = remaining;
    }
    if (number < 0) {
      negate(bytes);
    }
    return new Int64(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
__name(Int64, "Int64");
function negate(bytes) {
  for (let i5 = 0; i5 < 8; i5++) {
    bytes[i5] ^= 255;
  }
  for (let i5 = 7; i5 > -1; i5--) {
    bytes[i5]++;
    if (bytes[i5] !== 0)
      break;
  }
}
__name(negate, "negate");

// node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
var HeaderMarshaller = class {
  constructor(toUtf85, fromUtf85) {
    this.toUtf8 = toUtf85;
    this.fromUtf8 = fromUtf85;
  }
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = this.fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = this.fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
  parse(headers) {
    const out = {};
    let position = 0;
    while (position < headers.byteLength) {
      const nameLength = headers.getUint8(position++);
      const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
      position += nameLength;
      switch (headers.getUint8(position++)) {
        case 0:
          out[name] = {
            type: BOOLEAN_TAG,
            value: true
          };
          break;
        case 1:
          out[name] = {
            type: BOOLEAN_TAG,
            value: false
          };
          break;
        case 2:
          out[name] = {
            type: BYTE_TAG,
            value: headers.getInt8(position++)
          };
          break;
        case 3:
          out[name] = {
            type: SHORT_TAG,
            value: headers.getInt16(position, false)
          };
          position += 2;
          break;
        case 4:
          out[name] = {
            type: INT_TAG,
            value: headers.getInt32(position, false)
          };
          position += 4;
          break;
        case 5:
          out[name] = {
            type: LONG_TAG,
            value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
          };
          position += 8;
          break;
        case 6:
          const binaryLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: BINARY_TAG,
            value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
          };
          position += binaryLength;
          break;
        case 7:
          const stringLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: STRING_TAG,
            value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
          };
          position += stringLength;
          break;
        case 8:
          out[name] = {
            type: TIMESTAMP_TAG,
            value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
          };
          position += 8;
          break;
        case 9:
          const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
          position += 16;
          out[name] = {
            type: UUID_TAG,
            value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`
          };
          break;
        default:
          throw new Error(`Unrecognized header type tag`);
      }
    }
    return out;
  }
};
__name(HeaderMarshaller, "HeaderMarshaller");
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE2) {
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
var BOOLEAN_TAG = "boolean";
var BYTE_TAG = "byte";
var SHORT_TAG = "short";
var INT_TAG = "integer";
var LONG_TAG = "long";
var BINARY_TAG = "binary";
var STRING_TAG = "string";
var TIMESTAMP_TAG = "timestamp";
var UUID_TAG = "uuid";
var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

// node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js
var import_crc32 = __toESM(require_build2());
var PRELUDE_MEMBER_LENGTH = 4;
var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
var CHECKSUM_LENGTH = 4;
var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;

// node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
var MessageDecoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const bytes of this.options.inputStream) {
      const decoded = this.options.decoder.decode(bytes);
      yield decoded;
    }
  }
};
__name(MessageDecoderStream, "MessageDecoderStream");

// node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
var MessageEncoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const msg of this.options.messageStream) {
      const encoded = this.options.encoder.encode(msg);
      yield encoded;
    }
    if (this.options.includeEndFrame) {
      yield new Uint8Array(0);
    }
  }
};
__name(MessageEncoderStream, "MessageEncoderStream");

// node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
var SmithyMessageDecoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const message of this.options.messageStream) {
      const deserialized = await this.options.deserializer(message);
      if (deserialized === void 0)
        continue;
      yield deserialized;
    }
  }
};
__name(SmithyMessageDecoderStream, "SmithyMessageDecoderStream");

// node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
var SmithyMessageEncoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const chunk of this.options.inputStream) {
      const payloadBuf = this.options.serializer(chunk);
      yield payloadBuf;
    }
  }
};
__name(SmithyMessageEncoderStream, "SmithyMessageEncoderStream");

// node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
var normalizeProvider = /* @__PURE__ */ __name((input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
}, "normalizeProvider");

// node_modules/@smithy/is-array-buffer/dist-es/index.js
var isArrayBuffer = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");

// node_modules/@smithy/util-buffer-from/dist-es/index.js
import { Buffer as Buffer2 } from "buffer";
var fromArrayBuffer = /* @__PURE__ */ __name((input, offset = 0, length = input.byteLength - offset) => {
  if (!isArrayBuffer(input)) {
    throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
  }
  return Buffer2.from(input, offset, length);
}, "fromArrayBuffer");
var fromString = /* @__PURE__ */ __name((input, encoding) => {
  if (typeof input !== "string") {
    throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
  }
  return encoding ? Buffer2.from(input, encoding) : Buffer2.from(input);
}, "fromString");

// node_modules/@smithy/util-utf8/dist-es/fromUtf8.js
var fromUtf84 = /* @__PURE__ */ __name((input) => {
  const buf = fromString(input, "utf8");
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}, "fromUtf8");

// node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
var toUint8Array = /* @__PURE__ */ __name((data) => {
  if (typeof data === "string") {
    return fromUtf84(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}, "toUint8Array");

// node_modules/@smithy/util-utf8/dist-es/toUtf8.js
var toUtf84 = /* @__PURE__ */ __name((input) => fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8"), "toUtf8");

// node_modules/@smithy/signature-v4/dist-es/constants.js
var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
var AUTH_HEADER = "authorization";
var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
var DATE_HEADER = "date";
var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
var SHA256_HEADER = "x-amz-content-sha256";
var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
var ALWAYS_UNSIGNABLE_HEADERS = {
  authorization: true,
  "cache-control": true,
  connection: true,
  expect: true,
  from: true,
  "keep-alive": true,
  "max-forwards": true,
  pragma: true,
  referer: true,
  te: true,
  trailer: true,
  "transfer-encoding": true,
  upgrade: true,
  "user-agent": true,
  "x-amzn-trace-id": true
};
var PROXY_HEADER_PATTERN = /^proxy-/;
var SEC_HEADER_PATTERN = /^sec-/;
var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
var MAX_CACHE_SIZE = 50;
var KEY_TYPE_IDENTIFIER = "aws4_request";
var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

// node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
var signingKeyCache = {};
var cacheQueue = [];
var createScope = /* @__PURE__ */ __name((shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`, "createScope");
var getSigningKey = /* @__PURE__ */ __name(async (sha256Constructor, credentials, shortDate, region, service) => {
  const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
  const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
  if (cacheKey in signingKeyCache) {
    return signingKeyCache[cacheKey];
  }
  cacheQueue.push(cacheKey);
  while (cacheQueue.length > MAX_CACHE_SIZE) {
    delete signingKeyCache[cacheQueue.shift()];
  }
  let key = `AWS4${credentials.secretAccessKey}`;
  for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
    key = await hmac(sha256Constructor, key, signable);
  }
  return signingKeyCache[cacheKey] = key;
}, "getSigningKey");
var hmac = /* @__PURE__ */ __name((ctor, secret, data) => {
  const hash = new ctor(secret);
  hash.update(toUint8Array(data));
  return hash.digest();
}, "hmac");

// node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
var getCanonicalHeaders = /* @__PURE__ */ __name(({ headers }, unsignableHeaders, signableHeaders) => {
  const canonical = {};
  for (const headerName of Object.keys(headers).sort()) {
    if (headers[headerName] == void 0) {
      continue;
    }
    const canonicalHeaderName = headerName.toLowerCase();
    if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
      if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
        continue;
      }
    }
    canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
  }
  return canonical;
}, "getCanonicalHeaders");

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var escapeUri = /* @__PURE__ */ __name((uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode), "escapeUri");
var hexEncode = /* @__PURE__ */ __name((c5) => `%${c5.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");

// node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
var getCanonicalQuery = /* @__PURE__ */ __name(({ query = {} }) => {
  const keys = [];
  const serialized = {};
  for (const key of Object.keys(query).sort()) {
    if (key.toLowerCase() === SIGNATURE_HEADER) {
      continue;
    }
    keys.push(key);
    const value = query[key];
    if (typeof value === "string") {
      serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
    } else if (Array.isArray(value)) {
      serialized[key] = value.slice(0).sort().reduce((encoded, value2) => encoded.concat([`${escapeUri(key)}=${escapeUri(value2)}`]), []).join("&");
    }
  }
  return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
}, "getCanonicalQuery");

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash = /* @__PURE__ */ __name(async ({ headers, body }, hashConstructor) => {
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase() === SHA256_HEADER) {
      return headers[headerName];
    }
  }
  if (body == void 0) {
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
    const hashCtor = new hashConstructor();
    hashCtor.update(toUint8Array(body));
    return toHex(await hashCtor.digest());
  }
  return UNSIGNED_PAYLOAD;
}, "getPayloadHash");

// node_modules/@smithy/signature-v4/dist-es/headerUtil.js
var hasHeader = /* @__PURE__ */ __name((soughtHeader, headers) => {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
}, "hasHeader");

// node_modules/@smithy/signature-v4/dist-es/cloneRequest.js
var cloneRequest = /* @__PURE__ */ __name(({ headers, query, ...rest }) => ({
  ...rest,
  headers: { ...headers },
  query: query ? cloneQuery2(query) : void 0
}), "cloneRequest");
var cloneQuery2 = /* @__PURE__ */ __name((query) => Object.keys(query).reduce((carry, paramName) => {
  const param = query[paramName];
  return {
    ...carry,
    [paramName]: Array.isArray(param) ? [...param] : param
  };
}, {}), "cloneQuery");

// node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
var moveHeadersToQuery = /* @__PURE__ */ __name((request2, options = {}) => {
  const { headers, query = {} } = typeof request2.clone === "function" ? request2.clone() : cloneRequest(request2);
  for (const name of Object.keys(headers)) {
    const lname = name.toLowerCase();
    if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
      query[name] = headers[name];
      delete headers[name];
    }
  }
  return {
    ...request2,
    headers,
    query
  };
}, "moveHeadersToQuery");

// node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
var prepareRequest = /* @__PURE__ */ __name((request2) => {
  request2 = typeof request2.clone === "function" ? request2.clone() : cloneRequest(request2);
  for (const headerName of Object.keys(request2.headers)) {
    if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
      delete request2.headers[headerName];
    }
  }
  return request2;
}, "prepareRequest");

// node_modules/@smithy/signature-v4/dist-es/utilDate.js
var iso8601 = /* @__PURE__ */ __name((time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601");
var toDate = /* @__PURE__ */ __name((time) => {
  if (typeof time === "number") {
    return new Date(time * 1e3);
  }
  if (typeof time === "string") {
    if (Number(time)) {
      return new Date(Number(time) * 1e3);
    }
    return new Date(time);
  }
  return time;
}, "toDate");

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4 = class {
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    this.headerMarshaller = new HeaderMarshaller(toUtf84, fromUtf84);
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeProvider(region);
    this.credentialProvider = normalizeProvider(credentials);
  }
  async presign(originalRequest, options = {}) {
    const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService } = options;
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { longDate, shortDate } = formatDate(signingDate);
    if (expiresIn > MAX_PRESIGNED_TTL) {
      return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
    }
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const request2 = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
    if (credentials.sessionToken) {
      request2.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
    }
    request2.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
    request2.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
    request2.query[AMZ_DATE_QUERY_PARAM] = longDate;
    request2.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
    const canonicalHeaders = getCanonicalHeaders(request2, unsignableHeaders, signableHeaders);
    request2.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
    request2.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request2, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
    return request2;
  }
  async sign(toSign, options) {
    if (typeof toSign === "string") {
      return this.signString(toSign, options);
    } else if (toSign.headers && toSign.payload) {
      return this.signEvent(toSign, options);
    } else if (toSign.message) {
      return this.signMessage(toSign, options);
    } else {
      return this.signRequest(toSign, options);
    }
  }
  async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate, longDate } = formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
    const hash = new this.sha256();
    hash.update(headers);
    const hashedHeaders = toHex(await hash.digest());
    const stringToSign = [
      EVENT_ALGORITHM_IDENTIFIER,
      longDate,
      scope,
      priorSignature,
      hashedHeaders,
      hashedPayload
    ].join("\n");
    return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
  }
  async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {
    const promise = this.signEvent({
      headers: this.headerMarshaller.format(signableMessage.message.headers),
      payload: signableMessage.message.body
    }, {
      signingDate,
      signingRegion,
      signingService,
      priorSignature: signableMessage.priorSignature
    });
    return promise.then((signature) => {
      return { message: signableMessage.message, signature };
    });
  }
  async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate } = formatDate(signingDate);
    const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const request2 = prepareRequest(requestToSign);
    const { longDate, shortDate } = formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    request2.headers[AMZ_DATE_HEADER] = longDate;
    if (credentials.sessionToken) {
      request2.headers[TOKEN_HEADER] = credentials.sessionToken;
    }
    const payloadHash = await getPayloadHash(request2, this.sha256);
    if (!hasHeader(SHA256_HEADER, request2.headers) && this.applyChecksum) {
      request2.headers[SHA256_HEADER] = payloadHash;
    }
    const canonicalHeaders = getCanonicalHeaders(request2, unsignableHeaders, signableHeaders);
    const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request2, canonicalHeaders, payloadHash));
    request2.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
    return request2;
  }
  createCanonicalRequest(request2, canonicalHeaders, payloadHash) {
    const sortedHeaders = Object.keys(canonicalHeaders).sort();
    return `${request2.method}
${this.getCanonicalPath(request2)}
${getCanonicalQuery(request2)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
  }
  async createStringToSign(longDate, credentialScope, canonicalRequest) {
    const hash = new this.sha256();
    hash.update(toUint8Array(canonicalRequest));
    const hashedRequest = await hash.digest();
    return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
  }
  getCanonicalPath({ path }) {
    if (this.uriEscapePath) {
      const normalizedPathSegments = [];
      for (const pathSegment of path.split("/")) {
        if (pathSegment?.length === 0)
          continue;
        if (pathSegment === ".")
          continue;
        if (pathSegment === "..") {
          normalizedPathSegments.pop();
        } else {
          normalizedPathSegments.push(pathSegment);
        }
      }
      const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
      const doubleEncoded = encodeURIComponent(normalizedPath);
      return doubleEncoded.replace(/%2F/g, "/");
    }
    return path;
  }
  async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
    const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
    const hash = new this.sha256(await keyPromise);
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  getSigningKey(credentials, region, shortDate, service) {
    return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
  }
  validateResolvedCredentials(credentials) {
    if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
      throw new Error("Resolved credential object is not valid");
    }
  }
};
__name(SignatureV4, "SignatureV4");
var formatDate = /* @__PURE__ */ __name((now) => {
  const longDate = iso8601(now).replace(/[\-:]/g, "");
  return {
    longDate,
    shortDate: longDate.slice(0, 8)
  };
}, "formatDate");
var getCanonicalHeaderList = /* @__PURE__ */ __name((headers) => Object.keys(headers).sort().join(";"), "getCanonicalHeaderList");

// node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthConfiguration.js
var CREDENTIAL_EXPIRE_WINDOW = 3e5;
var resolveAwsAuthConfig = /* @__PURE__ */ __name((input) => {
  const normalizedCreds = input.credentials ? normalizeCredentialProvider(input.credentials) : input.credentialDefaultProvider(input);
  const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
  let signer;
  if (input.signer) {
    signer = normalizeProvider(input.signer);
  } else if (input.regionInfoProvider) {
    signer = /* @__PURE__ */ __name(() => normalizeProvider(input.region)().then(async (region) => [
      await input.regionInfoProvider(region, {
        useFipsEndpoint: await input.useFipsEndpoint(),
        useDualstackEndpoint: await input.useDualstackEndpoint()
      }) || {},
      region
    ]).then(([regionInfo, region]) => {
      const { signingRegion, signingService } = regionInfo;
      input.signingRegion = input.signingRegion || signingRegion || region;
      input.signingName = input.signingName || signingService || input.serviceId;
      const params = {
        ...input,
        credentials: normalizedCreds,
        region: input.signingRegion,
        service: input.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = input.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    }), "signer");
  } else {
    signer = /* @__PURE__ */ __name(async (authScheme) => {
      authScheme = Object.assign({}, {
        name: "sigv4",
        signingName: input.signingName || input.defaultSigningName,
        signingRegion: await normalizeProvider(input.region)(),
        properties: {}
      }, authScheme);
      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;
      input.signingRegion = input.signingRegion || signingRegion;
      input.signingName = input.signingName || signingService || input.serviceId;
      const params = {
        ...input,
        credentials: normalizedCreds,
        region: input.signingRegion,
        service: input.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = input.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    }, "signer");
  }
  return {
    ...input,
    systemClockOffset,
    signingEscapePath,
    credentials: normalizedCreds,
    signer
  };
}, "resolveAwsAuthConfig");
var normalizeCredentialProvider = /* @__PURE__ */ __name((credentials) => {
  if (typeof credentials === "function") {
    return memoize(credentials, (credentials2) => credentials2.expiration !== void 0 && credentials2.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW, (credentials2) => credentials2.expiration !== void 0);
  }
  return normalizeProvider(credentials);
}, "normalizeCredentialProvider");

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate = /* @__PURE__ */ __name((systemClockOffset) => new Date(Date.now() + systemClockOffset), "getSkewCorrectedDate");

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/isClockSkewed.js
var isClockSkewed = /* @__PURE__ */ __name((clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5, "isClockSkewed");

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset = /* @__PURE__ */ __name((clockTime, currentSystemClockOffset) => {
  const clockTimeInMs = Date.parse(clockTime);
  if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
    return clockTimeInMs - Date.now();
  }
  return currentSystemClockOffset;
}, "getUpdatedSystemClockOffset");

// node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthMiddleware.js
var awsAuthMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async function(args) {
  if (!HttpRequest.isInstance(args.request))
    return next(args);
  const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
  const multiRegionOverride = authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : void 0;
  const signer = await options.signer(authScheme);
  const output = await next({
    ...args,
    request: await signer.sign(args.request, {
      signingDate: getSkewCorrectedDate(options.systemClockOffset),
      signingRegion: multiRegionOverride || context["signing_region"],
      signingService: context["signing_service"]
    })
  }).catch((error) => {
    const serverTime = error.ServerTime ?? getDateHeader(error.$response);
    if (serverTime) {
      options.systemClockOffset = getUpdatedSystemClockOffset(serverTime, options.systemClockOffset);
    }
    throw error;
  });
  const dateHeader = getDateHeader(output.response);
  if (dateHeader) {
    options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
  }
  return output;
}, "awsAuthMiddleware");
var getDateHeader = /* @__PURE__ */ __name((response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0, "getDateHeader");
var awsAuthMiddlewareOptions = {
  name: "awsAuthMiddleware",
  tags: ["SIGNATURE", "AWSAUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true
};
var getAwsAuthPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
  }
}), "getAwsAuthPlugin");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
function resolveUserAgentConfig(input) {
  return {
    ...input,
    customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent
  };
}
__name(resolveUserAgentConfig, "resolveUserAgentConfig");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
var partitions_default = {
  partitions: [{
    id: "aws",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      name: "aws",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    regions: {
      "af-south-1": {
        description: "Africa (Cape Town)"
      },
      "ap-east-1": {
        description: "Asia Pacific (Hong Kong)"
      },
      "ap-northeast-1": {
        description: "Asia Pacific (Tokyo)"
      },
      "ap-northeast-2": {
        description: "Asia Pacific (Seoul)"
      },
      "ap-northeast-3": {
        description: "Asia Pacific (Osaka)"
      },
      "ap-south-1": {
        description: "Asia Pacific (Mumbai)"
      },
      "ap-south-2": {
        description: "Asia Pacific (Hyderabad)"
      },
      "ap-southeast-1": {
        description: "Asia Pacific (Singapore)"
      },
      "ap-southeast-2": {
        description: "Asia Pacific (Sydney)"
      },
      "ap-southeast-3": {
        description: "Asia Pacific (Jakarta)"
      },
      "ap-southeast-4": {
        description: "Asia Pacific (Melbourne)"
      },
      "aws-global": {
        description: "AWS Standard global region"
      },
      "ca-central-1": {
        description: "Canada (Central)"
      },
      "eu-central-1": {
        description: "Europe (Frankfurt)"
      },
      "eu-central-2": {
        description: "Europe (Zurich)"
      },
      "eu-north-1": {
        description: "Europe (Stockholm)"
      },
      "eu-south-1": {
        description: "Europe (Milan)"
      },
      "eu-south-2": {
        description: "Europe (Spain)"
      },
      "eu-west-1": {
        description: "Europe (Ireland)"
      },
      "eu-west-2": {
        description: "Europe (London)"
      },
      "eu-west-3": {
        description: "Europe (Paris)"
      },
      "me-central-1": {
        description: "Middle East (UAE)"
      },
      "me-south-1": {
        description: "Middle East (Bahrain)"
      },
      "sa-east-1": {
        description: "South America (Sao Paulo)"
      },
      "us-east-1": {
        description: "US East (N. Virginia)"
      },
      "us-east-2": {
        description: "US East (Ohio)"
      },
      "us-west-1": {
        description: "US West (N. California)"
      },
      "us-west-2": {
        description: "US West (Oregon)"
      }
    }
  }, {
    id: "aws-cn",
    outputs: {
      dnsSuffix: "amazonaws.com.cn",
      dualStackDnsSuffix: "api.amazonwebservices.com.cn",
      name: "aws-cn",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    regions: {
      "aws-cn-global": {
        description: "AWS China global region"
      },
      "cn-north-1": {
        description: "China (Beijing)"
      },
      "cn-northwest-1": {
        description: "China (Ningxia)"
      }
    }
  }, {
    id: "aws-us-gov",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      name: "aws-us-gov",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    regions: {
      "aws-us-gov-global": {
        description: "AWS GovCloud (US) global region"
      },
      "us-gov-east-1": {
        description: "AWS GovCloud (US-East)"
      },
      "us-gov-west-1": {
        description: "AWS GovCloud (US-West)"
      }
    }
  }, {
    id: "aws-iso",
    outputs: {
      dnsSuffix: "c2s.ic.gov",
      dualStackDnsSuffix: "c2s.ic.gov",
      name: "aws-iso",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-global": {
        description: "AWS ISO (US) global region"
      },
      "us-iso-east-1": {
        description: "US ISO East"
      },
      "us-iso-west-1": {
        description: "US ISO WEST"
      }
    }
  }, {
    id: "aws-iso-b",
    outputs: {
      dnsSuffix: "sc2s.sgov.gov",
      dualStackDnsSuffix: "sc2s.sgov.gov",
      name: "aws-iso-b",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-b-global": {
        description: "AWS ISOB (US) global region"
      },
      "us-isob-east-1": {
        description: "US ISOB East (Ohio)"
      }
    }
  }, {
    id: "aws-iso-e",
    outputs: {
      dnsSuffix: "cloud.adc-e.uk",
      dualStackDnsSuffix: "cloud.adc-e.uk",
      name: "aws-iso-e",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
    regions: {}
  }, {
    id: "aws-iso-f",
    outputs: {
      dnsSuffix: "csp.hci.ic.gov",
      dualStackDnsSuffix: "csp.hci.ic.gov",
      name: "aws-iso-f",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
    regions: {}
  }],
  version: "1.1"
};

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
var selectedPartitionsInfo = partitions_default;
var selectedUserAgentPrefix = "";
var partition = /* @__PURE__ */ __name((value) => {
  const { partitions } = selectedPartitionsInfo;
  for (const partition2 of partitions) {
    const { regions, outputs } = partition2;
    for (const [region, regionData] of Object.entries(regions)) {
      if (region === value) {
        return {
          ...outputs,
          ...regionData
        };
      }
    }
  }
  for (const partition2 of partitions) {
    const { regionRegex, outputs } = partition2;
    if (new RegExp(regionRegex).test(value)) {
      return {
        ...outputs
      };
    }
  }
  const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
  if (!DEFAULT_PARTITION) {
    throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
  }
  return {
    ...DEFAULT_PARTITION.outputs
  };
}, "partition");
var setPartitionInfo = /* @__PURE__ */ __name((partitionsInfo, userAgentPrefix = "") => {
  selectedPartitionsInfo = partitionsInfo;
  selectedUserAgentPrefix = userAgentPrefix;
}, "setPartitionInfo");
var useDefaultPartitionInfo = /* @__PURE__ */ __name(() => {
  setPartitionInfo(partitions_default, "");
}, "useDefaultPartitionInfo");
var getUserAgentPrefix = /* @__PURE__ */ __name(() => selectedUserAgentPrefix, "getUserAgentPrefix");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js
var IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
var isIpAddress = /* @__PURE__ */ __name((value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]"), "isIpAddress");

// node_modules/@aws-sdk/util-endpoints/dist-es/debug/debugId.js
var debugId = "endpoints";

// node_modules/@aws-sdk/util-endpoints/dist-es/debug/toDebugString.js
function toDebugString(input) {
  if (typeof input !== "object" || input == null) {
    return input;
  }
  if ("ref" in input) {
    return `$${toDebugString(input.ref)}`;
  }
  if ("fn" in input) {
    return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
  }
  return JSON.stringify(input, null, 2);
}
__name(toDebugString, "toDebugString");

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js
var EndpointError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "EndpointError";
  }
};
__name(EndpointError, "EndpointError");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/index.js
var lib_exports = {};
__export(lib_exports, {
  aws: () => aws_exports,
  booleanEquals: () => booleanEquals,
  getAttr: () => getAttr,
  isSet: () => isSet,
  isValidHostLabel: () => isValidHostLabel,
  not: () => not,
  parseURL: () => parseURL,
  stringEquals: () => stringEquals,
  substring: () => substring,
  uriEncode: () => uriEncode
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/index.js
var aws_exports = {};
__export(aws_exports, {
  getUserAgentPrefix: () => getUserAgentPrefix,
  isVirtualHostableS3Bucket: () => isVirtualHostableS3Bucket,
  parseArn: () => parseArn,
  partition: () => partition,
  setPartitionInfo: () => setPartitionInfo,
  useDefaultPartitionInfo: () => useDefaultPartitionInfo
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/isValidHostLabel.js
var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
var isValidHostLabel = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
  if (!allowSubDomains) {
    return VALID_HOST_LABEL_REGEX.test(value);
  }
  const labels = value.split(".");
  for (const label of labels) {
    if (!isValidHostLabel(label)) {
      return false;
    }
  }
  return true;
}, "isValidHostLabel");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
  if (allowSubDomains) {
    for (const label of value.split(".")) {
      if (!isVirtualHostableS3Bucket(label)) {
        return false;
      }
    }
    return true;
  }
  if (!isValidHostLabel(value)) {
    return false;
  }
  if (value.length < 3 || value.length > 63) {
    return false;
  }
  if (value !== value.toLowerCase()) {
    return false;
  }
  if (isIpAddress(value)) {
    return false;
  }
  return true;
}, "isVirtualHostableS3Bucket");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
var parseArn = /* @__PURE__ */ __name((value) => {
  const segments = value.split(":");
  if (segments.length < 6)
    return null;
  const [arn, partition2, service, region, accountId, ...resourceId] = segments;
  if (arn !== "arn" || partition2 === "" || service === "" || resourceId[0] === "")
    return null;
  return {
    partition: partition2,
    service,
    region,
    accountId,
    resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId
  };
}, "parseArn");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/booleanEquals.js
var booleanEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "booleanEquals");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/getAttrPathList.js
var getAttrPathList = /* @__PURE__ */ __name((path) => {
  const parts = path.split(".");
  const pathList = [];
  for (const part of parts) {
    const squareBracketIndex = part.indexOf("[");
    if (squareBracketIndex !== -1) {
      if (part.indexOf("]") !== part.length - 1) {
        throw new EndpointError(`Path: '${path}' does not end with ']'`);
      }
      const arrayIndex = part.slice(squareBracketIndex + 1, -1);
      if (Number.isNaN(parseInt(arrayIndex))) {
        throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
      }
      if (squareBracketIndex !== 0) {
        pathList.push(part.slice(0, squareBracketIndex));
      }
      pathList.push(arrayIndex);
    } else {
      pathList.push(part);
    }
  }
  return pathList;
}, "getAttrPathList");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/getAttr.js
var getAttr = /* @__PURE__ */ __name((value, path) => getAttrPathList(path).reduce((acc, index) => {
  if (typeof acc !== "object") {
    throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
  } else if (Array.isArray(acc)) {
    return acc[parseInt(index)];
  }
  return acc[index];
}, value), "getAttr");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/isSet.js
var isSet = /* @__PURE__ */ __name((value) => value != null, "isSet");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/not.js
var not = /* @__PURE__ */ __name((value) => !value, "not");

// node_modules/@aws-sdk/types/node_modules/@smithy/types/dist-es/auth.js
var HttpAuthLocation2;
(function(HttpAuthLocation3) {
  HttpAuthLocation3["HEADER"] = "header";
  HttpAuthLocation3["QUERY"] = "query";
})(HttpAuthLocation2 || (HttpAuthLocation2 = {}));

// node_modules/@aws-sdk/types/node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme2;
(function(EndpointURLScheme3) {
  EndpointURLScheme3["HTTP"] = "http";
  EndpointURLScheme3["HTTPS"] = "https";
})(EndpointURLScheme2 || (EndpointURLScheme2 = {}));

// node_modules/@aws-sdk/types/node_modules/@smithy/types/dist-es/http.js
var FieldPosition2;
(function(FieldPosition3) {
  FieldPosition3[FieldPosition3["HEADER"] = 0] = "HEADER";
  FieldPosition3[FieldPosition3["TRAILER"] = 1] = "TRAILER";
})(FieldPosition2 || (FieldPosition2 = {}));

// node_modules/@aws-sdk/types/node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol2;
(function(RequestHandlerProtocol3) {
  RequestHandlerProtocol3["HTTP_0_9"] = "http/0.9";
  RequestHandlerProtocol3["HTTP_1_0"] = "http/1.0";
  RequestHandlerProtocol3["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol2 || (RequestHandlerProtocol2 = {}));

// node_modules/@aws-sdk/types/dist-es/dns.js
var HostAddressType;
(function(HostAddressType2) {
  HostAddressType2["AAAA"] = "AAAA";
  HostAddressType2["A"] = "A";
})(HostAddressType || (HostAddressType = {}));

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/parseURL.js
var DEFAULT_PORTS = {
  [EndpointURLScheme2.HTTP]: 80,
  [EndpointURLScheme2.HTTPS]: 443
};
var parseURL = /* @__PURE__ */ __name((value) => {
  const whatwgURL = (() => {
    try {
      if (value instanceof URL) {
        return value;
      }
      if (typeof value === "object" && "hostname" in value) {
        const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
        const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
        url.search = Object.entries(query).map(([k5, v3]) => `${k5}=${v3}`).join("&");
        return url;
      }
      return new URL(value);
    } catch (error) {
      return null;
    }
  })();
  if (!whatwgURL) {
    console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
    return null;
  }
  const urlString = whatwgURL.href;
  const { host, hostname, pathname, protocol, search } = whatwgURL;
  if (search) {
    return null;
  }
  const scheme = protocol.slice(0, -1);
  if (!Object.values(EndpointURLScheme2).includes(scheme)) {
    return null;
  }
  const isIp = isIpAddress(hostname);
  const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
  const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
  return {
    scheme,
    authority,
    path: pathname,
    normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
    isIp
  };
}, "parseURL");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/stringEquals.js
var stringEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "stringEquals");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/substring.js
var substring = /* @__PURE__ */ __name((input, start, stop, reverse) => {
  if (start >= stop || input.length < stop) {
    return null;
  }
  if (!reverse) {
    return input.substring(start, stop);
  }
  return input.substring(input.length - stop, input.length - start);
}, "substring");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/uriEncode.js
var uriEncode = /* @__PURE__ */ __name((value) => encodeURIComponent(value).replace(/[!*'()]/g, (c5) => `%${c5.charCodeAt(0).toString(16).toUpperCase()}`), "uriEncode");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTemplate.js
var evaluateTemplate = /* @__PURE__ */ __name((template, options) => {
  const evaluatedTemplateArr = [];
  const templateContext = {
    ...options.endpointParams,
    ...options.referenceRecord
  };
  let currentIndex = 0;
  while (currentIndex < template.length) {
    const openingBraceIndex = template.indexOf("{", currentIndex);
    if (openingBraceIndex === -1) {
      evaluatedTemplateArr.push(template.slice(currentIndex));
      break;
    }
    evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
    const closingBraceIndex = template.indexOf("}", openingBraceIndex);
    if (closingBraceIndex === -1) {
      evaluatedTemplateArr.push(template.slice(openingBraceIndex));
      break;
    }
    if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
      evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
      currentIndex = closingBraceIndex + 2;
    }
    const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
    if (parameterName.includes("#")) {
      const [refName, attrName] = parameterName.split("#");
      evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
    } else {
      evaluatedTemplateArr.push(templateContext[parameterName]);
    }
    currentIndex = closingBraceIndex + 1;
  }
  return evaluatedTemplateArr.join("");
}, "evaluateTemplate");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/getReferenceValue.js
var getReferenceValue = /* @__PURE__ */ __name(({ ref }, options) => {
  const referenceRecord = {
    ...options.endpointParams,
    ...options.referenceRecord
  };
  return referenceRecord[ref];
}, "getReferenceValue");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateExpression.js
var evaluateExpression = /* @__PURE__ */ __name((obj, keyName, options) => {
  if (typeof obj === "string") {
    return evaluateTemplate(obj, options);
  } else if (obj["fn"]) {
    return callFunction(obj, options);
  } else if (obj["ref"]) {
    return getReferenceValue(obj, options);
  }
  throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
}, "evaluateExpression");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/callFunction.js
var callFunction = /* @__PURE__ */ __name(({ fn, argv }, options) => {
  const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
  return fn.split(".").reduce((acc, key) => acc[key], lib_exports)(...evaluatedArgs);
}, "callFunction");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateCondition.js
var evaluateCondition = /* @__PURE__ */ __name(({ assign, ...fnArgs }, options) => {
  if (assign && assign in options.referenceRecord) {
    throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
  }
  const value = callFunction(fnArgs, options);
  options.logger?.debug?.(debugId, `evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
  return {
    result: value === "" ? true : !!value,
    ...assign != null && { toAssign: { name: assign, value } }
  };
}, "evaluateCondition");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateConditions.js
var evaluateConditions = /* @__PURE__ */ __name((conditions = [], options) => {
  const conditionsReferenceRecord = {};
  for (const condition of conditions) {
    const { result, toAssign } = evaluateCondition(condition, {
      ...options,
      referenceRecord: {
        ...options.referenceRecord,
        ...conditionsReferenceRecord
      }
    });
    if (!result) {
      return { result };
    }
    if (toAssign) {
      conditionsReferenceRecord[toAssign.name] = toAssign.value;
      options.logger?.debug?.(debugId, `assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
    }
  }
  return { result: true, referenceRecord: conditionsReferenceRecord };
}, "evaluateConditions");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointHeaders.js
var getEndpointHeaders = /* @__PURE__ */ __name((headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
  ...acc,
  [headerKey]: headerVal.map((headerValEntry) => {
    const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
    if (typeof processedExpr !== "string") {
      throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
    }
    return processedExpr;
  })
}), {}), "getEndpointHeaders");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperty.js
var getEndpointProperty = /* @__PURE__ */ __name((property, options) => {
  if (Array.isArray(property)) {
    return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
  }
  switch (typeof property) {
    case "string":
      return evaluateTemplate(property, options);
    case "object":
      if (property === null) {
        throw new EndpointError(`Unexpected endpoint property: ${property}`);
      }
      return getEndpointProperties(property, options);
    case "boolean":
      return property;
    default:
      throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
  }
}, "getEndpointProperty");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperties.js
var getEndpointProperties = /* @__PURE__ */ __name((properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
  ...acc,
  [propertyKey]: getEndpointProperty(propertyVal, options)
}), {}), "getEndpointProperties");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointUrl.js
var getEndpointUrl = /* @__PURE__ */ __name((endpointUrl, options) => {
  const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
  if (typeof expression === "string") {
    try {
      return new URL(expression);
    } catch (error) {
      console.error(`Failed to construct URL with ${expression}`, error);
      throw error;
    }
  }
  throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
}, "getEndpointUrl");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateEndpointRule.js
var evaluateEndpointRule = /* @__PURE__ */ __name((endpointRule, options) => {
  const { conditions, endpoint } = endpointRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  const endpointRuleOptions = {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  };
  const { url, properties, headers } = endpoint;
  options.logger?.debug?.(debugId, `Resolving endpoint from template: ${toDebugString(endpoint)}`);
  return {
    ...headers != void 0 && {
      headers: getEndpointHeaders(headers, endpointRuleOptions)
    },
    ...properties != void 0 && {
      properties: getEndpointProperties(properties, endpointRuleOptions)
    },
    url: getEndpointUrl(url, endpointRuleOptions)
  };
}, "evaluateEndpointRule");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateErrorRule.js
var evaluateErrorRule = /* @__PURE__ */ __name((errorRule, options) => {
  const { conditions, error } = errorRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  throw new EndpointError(evaluateExpression(error, "Error", {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  }));
}, "evaluateErrorRule");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTreeRule.js
var evaluateTreeRule = /* @__PURE__ */ __name((treeRule, options) => {
  const { conditions, rules } = treeRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  return evaluateRules(rules, {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  });
}, "evaluateTreeRule");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateRules.js
var evaluateRules = /* @__PURE__ */ __name((rules, options) => {
  for (const rule of rules) {
    if (rule.type === "endpoint") {
      const endpointOrUndefined = evaluateEndpointRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else if (rule.type === "error") {
      evaluateErrorRule(rule, options);
    } else if (rule.type === "tree") {
      const endpointOrUndefined = evaluateTreeRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else {
      throw new EndpointError(`Unknown endpoint rule: ${rule}`);
    }
  }
  throw new EndpointError(`Rules evaluation failed`);
}, "evaluateRules");

// node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js
var resolveEndpoint = /* @__PURE__ */ __name((ruleSetObject, options) => {
  const { endpointParams, logger: logger2 } = options;
  const { parameters, rules } = ruleSetObject;
  options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
  const paramsWithDefault = Object.entries(parameters).filter(([, v3]) => v3.default != null).map(([k5, v3]) => [k5, v3.default]);
  if (paramsWithDefault.length > 0) {
    for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
      endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
    }
  }
  const requiredParams = Object.entries(parameters).filter(([, v3]) => v3.required).map(([k5]) => k5);
  for (const requiredParam of requiredParams) {
    if (endpointParams[requiredParam] == null) {
      throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
    }
  }
  const endpoint = evaluateRules(rules, { endpointParams, logger: logger2, referenceRecord: {} });
  if (options.endpointParams?.Endpoint) {
    try {
      const givenEndpoint = new URL(options.endpointParams.Endpoint);
      const { protocol, port } = givenEndpoint;
      endpoint.url.protocol = protocol;
      endpoint.url.port = port;
    } catch (e5) {
    }
  }
  options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
  return endpoint;
}, "resolveEndpoint");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_NAME_SEPARATOR = "/";
var UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
var UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
var UA_ESCAPE_CHAR = "-";

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
var userAgentMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
  const { request: request2 } = args;
  if (!HttpRequest.isInstance(request2))
    return next(args);
  const { headers } = request2;
  const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
  const defaultUserAgent2 = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
  const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
  const prefix = getUserAgentPrefix();
  const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent2, ...userAgent, ...customUserAgent]).join(SPACE);
  const normalUAValue = [
    ...defaultUserAgent2.filter((section) => section.startsWith("aws-sdk-")),
    ...customUserAgent
  ].join(SPACE);
  if (options.runtime !== "browser") {
    if (normalUAValue) {
      headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
    }
    headers[USER_AGENT] = sdkUserAgentValue;
  } else {
    headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
  }
  return next({
    ...args,
    request: request2
  });
}, "userAgentMiddleware");
var escapeUserAgent = /* @__PURE__ */ __name((userAgentPair) => {
  const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
  const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
  const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
  const prefix = name.substring(0, prefixSeparatorIndex);
  let uaName = name.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
    switch (index) {
      case 0:
        return item;
      case 1:
        return `${acc}/${item}`;
      default:
        return `${acc}#${item}`;
    }
  }, "");
}, "escapeUserAgent");
var getUserAgentMiddlewareOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: true
};
var getUserAgentPlugin = /* @__PURE__ */ __name((config) => ({
  applyToStack: (clientStack) => {
    clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
  }
}), "getUserAgentPlugin");

// node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
var SelectorType;
(function(SelectorType2) {
  SelectorType2["ENV"] = "env";
  SelectorType2["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));
var booleanSelector = /* @__PURE__ */ __name((obj, key, type) => {
  if (!(key in obj))
    return void 0;
  if (obj[key] === "true")
    return true;
  if (obj[key] === "false")
    return false;
  throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
}, "booleanSelector");

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
var ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
var CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
var NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => booleanSelector(env2, ENV_USE_DUALSTACK_ENDPOINT, SelectorType.ENV),
  configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, SelectorType.CONFIG),
  default: false
};

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
var ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
var CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
var NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => booleanSelector(env2, ENV_USE_FIPS_ENDPOINT, SelectorType.ENV),
  configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, SelectorType.CONFIG),
  default: false
};

// node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js
var REGION_ENV_NAME = "AWS_REGION";
var REGION_INI_NAME = "region";
var NODE_REGION_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => env2[REGION_ENV_NAME],
  configFileSelector: (profile) => profile[REGION_INI_NAME],
  default: () => {
    throw new Error("Region is missing");
  }
};
var NODE_REGION_CONFIG_FILE_OPTIONS = {
  preferredFile: "credentials"
};

// node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
var isFipsRegion = /* @__PURE__ */ __name((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");

// node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
var getRealRegion = /* @__PURE__ */ __name((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");

// node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var resolveRegionConfig = /* @__PURE__ */ __name((input) => {
  const { region, useFipsEndpoint } = input;
  if (!region) {
    throw new Error("Region is missing");
  }
  return {
    ...input,
    region: async () => {
      if (typeof region === "string") {
        return getRealRegion(region);
      }
      const providedRegion = await region();
      return getRealRegion(providedRegion);
    },
    useFipsEndpoint: async () => {
      const providedRegion = typeof region === "string" ? region : await region();
      if (isFipsRegion(providedRegion)) {
        return true;
      }
      return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
    }
  };
}, "resolveRegionConfig");

// node_modules/@smithy/middleware-content-length/dist-es/index.js
var CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
  return (next) => async (args) => {
    const request2 = args.request;
    if (HttpRequest.isInstance(request2)) {
      const { body, headers } = request2;
      if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
        try {
          const length = bodyLengthChecker(body);
          request2.headers = {
            ...request2.headers,
            [CONTENT_LENGTH_HEADER]: String(length)
          };
        } catch (error) {
        }
      }
    }
    return next({
      ...args,
      request: request2
    });
  };
}
__name(contentLengthMiddleware, "contentLengthMiddleware");
var contentLengthMiddlewareOptions = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: true
};
var getContentLengthPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
  }
}), "getContentLengthPlugin");

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
var resolveParamsForS3 = /* @__PURE__ */ __name(async (endpointParams) => {
  const bucket = endpointParams?.Bucket || "";
  if (typeof endpointParams.Bucket === "string") {
    endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
  }
  if (isArnBucketName(bucket)) {
    if (endpointParams.ForcePathStyle === true) {
      throw new Error("Path-style addressing cannot be used with ARN buckets");
    }
  } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
    endpointParams.ForcePathStyle = true;
  }
  if (endpointParams.DisableMultiRegionAccessPoints) {
    endpointParams.disableMultiRegionAccessPoints = true;
    endpointParams.DisableMRAP = true;
  }
  return endpointParams;
}, "resolveParamsForS3");
var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
var DOTS_PATTERN = /\.\./;
var isDnsCompatibleBucketName = /* @__PURE__ */ __name((bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName), "isDnsCompatibleBucketName");
var isArnBucketName = /* @__PURE__ */ __name((bucketName) => {
  const [arn, partition2, service, region, account, typeOrId] = bucketName.split(":");
  const isArn = arn === "arn" && bucketName.split(":").length >= 6;
  const isValidArn = [arn, partition2, service, account, typeOrId].filter(Boolean).length === 5;
  if (isArn && !isValidArn) {
    throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
  }
  return arn === "arn" && !!partition2 && !!service && !!account && !!typeOrId;
}, "isArnBucketName");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
var createConfigValueProvider = /* @__PURE__ */ __name((configKey, canonicalEndpointParamKey, config) => {
  const configProvider = /* @__PURE__ */ __name(async () => {
    const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
    if (typeof configValue === "function") {
      return configValue();
    }
    return configValue;
  }, "configProvider");
  if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
    return async () => {
      const endpoint = await configProvider();
      if (endpoint && typeof endpoint === "object") {
        if ("url" in endpoint) {
          return endpoint.url.href;
        }
        if ("hostname" in endpoint) {
          const { protocol, hostname, port, path } = endpoint;
          return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
        }
      }
      return endpoint;
    };
  }
  return configProvider;
}, "createConfigValueProvider");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig, context) => {
  const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
  if (typeof clientConfig.endpointProvider !== "function") {
    throw new Error("config.endpointProvider is not set.");
  }
  const endpoint = clientConfig.endpointProvider(endpointParams, context);
  return endpoint;
}, "getEndpointFromInstructions");
var resolveParams = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig) => {
  const endpointParams = {};
  const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
  for (const [name, instruction] of Object.entries(instructions)) {
    switch (instruction.type) {
      case "staticContextParams":
        endpointParams[name] = instruction.value;
        break;
      case "contextParams":
        endpointParams[name] = commandInput[instruction.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
    }
  }
  if (Object.keys(instructions).length === 0) {
    Object.assign(endpointParams, clientConfig);
  }
  if (String(clientConfig.serviceId).toLowerCase() === "s3") {
    await resolveParamsForS3(endpointParams);
  }
  return endpointParams;
}, "resolveParams");

// node_modules/@smithy/querystring-parser/dist-es/index.js
function parseQueryString(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}
__name(parseQueryString, "parseQueryString");

// node_modules/@smithy/url-parser/dist-es/index.js
var parseUrl = /* @__PURE__ */ __name((url) => {
  if (typeof url === "string") {
    return parseUrl(new URL(url));
  }
  const { hostname, pathname, port, protocol, search } = url;
  let query;
  if (search) {
    query = parseQueryString(search);
  }
  return {
    hostname,
    port: port ? parseInt(port) : void 0,
    protocol,
    path: pathname,
    query
  };
}, "parseUrl");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV1 = /* @__PURE__ */ __name((endpoint) => {
  if (typeof endpoint === "object") {
    if ("url" in endpoint) {
      return parseUrl(endpoint.url);
    }
    return endpoint;
  }
  return parseUrl(endpoint);
}, "toEndpointV1");

// node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
var endpointMiddleware = /* @__PURE__ */ __name(({ config, instructions }) => {
  return (next, context) => async (args) => {
    const endpoint = await getEndpointFromInstructions(args.input, {
      getEndpointParameterInstructions() {
        return instructions;
      }
    }, { ...config }, context);
    context.endpointV2 = endpoint;
    context.authSchemes = endpoint.properties?.authSchemes;
    const authScheme = context.authSchemes?.[0];
    if (authScheme) {
      context["signing_region"] = authScheme.signingRegion;
      context["signing_service"] = authScheme.signingName;
    }
    return next({
      ...args
    });
  };
}, "endpointMiddleware");

// node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
var deserializerMiddleware = /* @__PURE__ */ __name((options, deserializer) => (next, context) => async (args) => {
  const { response } = await next(args);
  try {
    const parsed = await deserializer(response, options);
    return {
      response,
      output: parsed
    };
  } catch (error) {
    Object.defineProperty(error, "$response", {
      value: response
    });
    if (!("$metadata" in error)) {
      const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
      error.message += "\n  " + hint;
    }
    throw error;
  }
}, "deserializerMiddleware");

// node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
var serializerMiddleware = /* @__PURE__ */ __name((options, serializer) => (next, context) => async (args) => {
  const endpoint = context.endpointV2?.url && options.urlParser ? async () => options.urlParser(context.endpointV2.url) : options.endpoint;
  if (!endpoint) {
    throw new Error("No valid endpoint provider available.");
  }
  const request2 = await serializer(args.input, { ...options, endpoint });
  return next({
    ...args,
    request: request2
  });
}, "serializerMiddleware");

// node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
var deserializerMiddlewareOption = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: true
};
var serializerMiddlewareOption = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: true
};
function getSerdePlugin(config, serializer, deserializer) {
  return {
    applyToStack: (commandStack) => {
      commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
    }
  };
}
__name(getSerdePlugin, "getSerdePlugin");

// node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
var endpointMiddlewareOptions = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointV2Middleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name
};
var getEndpointPlugin = /* @__PURE__ */ __name((config, instructions) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(endpointMiddleware({
      config,
      instructions
    }), endpointMiddlewareOptions);
  }
}), "getEndpointPlugin");

// node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
var resolveEndpointConfig = /* @__PURE__ */ __name((input) => {
  const tls = input.tls ?? true;
  const { endpoint } = input;
  const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
  const isCustomEndpoint = !!endpoint;
  return {
    ...input,
    endpoint: customEndpointProvider,
    tls,
    isCustomEndpoint,
    useDualstackEndpoint: normalizeProvider(input.useDualstackEndpoint ?? false),
    useFipsEndpoint: normalizeProvider(input.useFipsEndpoint ?? false)
  };
}, "resolveEndpointConfig");

// node_modules/@smithy/util-retry/dist-es/config.js
var RETRY_MODES;
(function(RETRY_MODES2) {
  RETRY_MODES2["STANDARD"] = "standard";
  RETRY_MODES2["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

// node_modules/@smithy/service-error-classification/dist-es/constants.js
var THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException",
  "TransactionInProgressException"
];
var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];

// node_modules/@smithy/service-error-classification/dist-es/index.js
var isThrottlingError = /* @__PURE__ */ __name((error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true, "isThrottlingError");
var isTransientError = /* @__PURE__ */ __name((error) => TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0), "isTransientError");
var isServerError = /* @__PURE__ */ __name((error) => {
  if (error.$metadata?.httpStatusCode !== void 0) {
    const statusCode = error.$metadata.httpStatusCode;
    if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
      return true;
    }
    return false;
  }
  return false;
}, "isServerError");

// node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter = class {
  constructor(options) {
    this.currentCapacity = 0;
    this.enabled = false;
    this.lastMaxRate = 0;
    this.measuredTxRate = 0;
    this.requestCount = 0;
    this.lastTimestamp = 0;
    this.timeWindow = 0;
    this.beta = options?.beta ?? 0.7;
    this.minCapacity = options?.minCapacity ?? 1;
    this.minFillRate = options?.minFillRate ?? 0.5;
    this.scaleConstant = options?.scaleConstant ?? 0.4;
    this.smooth = options?.smooth ?? 0.8;
    const currentTimeInSeconds = this.getCurrentTimeInSeconds();
    this.lastThrottleTime = currentTimeInSeconds;
    this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
    this.fillRate = this.minFillRate;
    this.maxCapacity = this.minCapacity;
  }
  getCurrentTimeInSeconds() {
    return Date.now() / 1e3;
  }
  async getSendToken() {
    return this.acquireTokenBucket(1);
  }
  async acquireTokenBucket(amount) {
    if (!this.enabled) {
      return;
    }
    this.refillTokenBucket();
    if (amount > this.currentCapacity) {
      const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    this.currentCapacity = this.currentCapacity - amount;
  }
  refillTokenBucket() {
    const timestamp = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
      return;
    }
    const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
    this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
    this.lastTimestamp = timestamp;
  }
  updateClientSendingRate(response) {
    let calculatedRate;
    this.updateMeasuredRate();
    if (isThrottlingError(response)) {
      const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
      this.lastMaxRate = rateToUse;
      this.calculateTimeWindow();
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      calculatedRate = this.cubicThrottle(rateToUse);
      this.enableTokenBucket();
    } else {
      this.calculateTimeWindow();
      calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
    }
    const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(newRate);
  }
  calculateTimeWindow() {
    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
  }
  cubicThrottle(rateToUse) {
    return this.getPrecise(rateToUse * this.beta);
  }
  cubicSuccess(timestamp) {
    return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
  }
  enableTokenBucket() {
    this.enabled = true;
  }
  updateTokenBucketRate(newRate) {
    this.refillTokenBucket();
    this.fillRate = Math.max(newRate, this.minFillRate);
    this.maxCapacity = Math.max(newRate, this.minCapacity);
    this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
  }
  updateMeasuredRate() {
    const t3 = this.getCurrentTimeInSeconds();
    const timeBucket = Math.floor(t3 * 2) / 2;
    this.requestCount++;
    if (timeBucket > this.lastTxRateBucket) {
      const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
      this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
      this.requestCount = 0;
      this.lastTxRateBucket = timeBucket;
    }
  }
  getPrecise(num) {
    return parseFloat(num.toFixed(8));
  }
};
__name(DefaultRateLimiter, "DefaultRateLimiter");

// node_modules/@smithy/util-retry/dist-es/constants.js
var DEFAULT_RETRY_DELAY_BASE = 100;
var MAXIMUM_RETRY_DELAY = 20 * 1e3;
var THROTTLING_RETRY_DELAY_BASE = 500;
var INITIAL_RETRY_TOKENS = 500;
var RETRY_COST = 5;
var TIMEOUT_RETRY_COST = 10;
var NO_RETRY_INCREMENT = 1;
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
var REQUEST_HEADER = "amz-sdk-request";

// node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
var getDefaultRetryBackoffStrategy = /* @__PURE__ */ __name(() => {
  let delayBase = DEFAULT_RETRY_DELAY_BASE;
  const computeNextBackoffDelay = /* @__PURE__ */ __name((attempts) => {
    return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
  }, "computeNextBackoffDelay");
  const setDelayBase = /* @__PURE__ */ __name((delay) => {
    delayBase = delay;
  }, "setDelayBase");
  return {
    computeNextBackoffDelay,
    setDelayBase
  };
}, "getDefaultRetryBackoffStrategy");

// node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
var createDefaultRetryToken = /* @__PURE__ */ __name(({ retryDelay, retryCount, retryCost }) => {
  const getRetryCount = /* @__PURE__ */ __name(() => retryCount, "getRetryCount");
  const getRetryDelay = /* @__PURE__ */ __name(() => Math.min(MAXIMUM_RETRY_DELAY, retryDelay), "getRetryDelay");
  const getRetryCost = /* @__PURE__ */ __name(() => retryCost, "getRetryCost");
  return {
    getRetryCount,
    getRetryDelay,
    getRetryCost
  };
}, "createDefaultRetryToken");

// node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy = class {
  constructor(maxAttempts) {
    this.maxAttempts = maxAttempts;
    this.mode = RETRY_MODES.STANDARD;
    this.capacity = INITIAL_RETRY_TOKENS;
    this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
    this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
  }
  async acquireInitialRetryToken(retryTokenScope) {
    return createDefaultRetryToken({
      retryDelay: DEFAULT_RETRY_DELAY_BASE,
      retryCount: 0
    });
  }
  async refreshRetryTokenForRetry(token, errorInfo) {
    const maxAttempts = await this.getMaxAttempts();
    if (this.shouldRetry(token, errorInfo, maxAttempts)) {
      const errorType = errorInfo.errorType;
      this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
      const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
      const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
      const capacityCost = this.getCapacityCost(errorType);
      this.capacity -= capacityCost;
      return createDefaultRetryToken({
        retryDelay,
        retryCount: token.getRetryCount() + 1,
        retryCost: capacityCost
      });
    }
    throw new Error("No retry token available");
  }
  recordSuccess(token) {
    this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
  }
  getCapacity() {
    return this.capacity;
  }
  async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch (error) {
      console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
      return DEFAULT_MAX_ATTEMPTS;
    }
  }
  shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
    const attempts = tokenToRenew.getRetryCount() + 1;
    return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
  }
  getCapacityCost(errorType) {
    return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
  }
  isRetryableError(errorType) {
    return errorType === "THROTTLING" || errorType === "TRANSIENT";
  }
};
__name(StandardRetryStrategy, "StandardRetryStrategy");

// node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy = class {
  constructor(maxAttemptsProvider, options) {
    this.maxAttemptsProvider = maxAttemptsProvider;
    this.mode = RETRY_MODES.ADAPTIVE;
    const { rateLimiter } = options ?? {};
    this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
    this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
  }
  async acquireInitialRetryToken(retryTokenScope) {
    await this.rateLimiter.getSendToken();
    return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
  }
  async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
    this.rateLimiter.updateClientSendingRate(errorInfo);
    return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
  }
  recordSuccess(token) {
    this.rateLimiter.updateClientSendingRate({});
    this.standardRetryStrategy.recordSuccess(token);
  }
};
__name(AdaptiveRetryStrategy, "AdaptiveRetryStrategy");

// node_modules/uuid/dist/esm-node/rng.js
import crypto from "crypto";
var rnds8Pool = new Uint8Array(256);
var poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
__name(rng, "rng");

// node_modules/uuid/dist/esm-node/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-node/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
__name(validate, "validate");
var validate_default = validate;

// node_modules/uuid/dist/esm-node/stringify.js
var byteToHex = [];
for (let i5 = 0; i5 < 256; ++i5) {
  byteToHex.push((i5 + 256).toString(16).substr(1));
}
function stringify(arr, offset = 0) {
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
__name(stringify, "stringify");
var stringify_default = stringify;

// node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i5 = 0; i5 < 16; ++i5) {
      buf[offset + i5] = rnds[i5];
    }
    return buf;
  }
  return stringify_default(rnds);
}
__name(v4, "v4");
var v4_default = v4;

// node_modules/@smithy/middleware-retry/dist-es/util.js
var asSdkError = /* @__PURE__ */ __name((error) => {
  if (error instanceof Error)
    return error;
  if (error instanceof Object)
    return Object.assign(new Error(), error);
  if (typeof error === "string")
    return new Error(error);
  return new Error(`AWS SDK error wrapper for ${error}`);
}, "asSdkError");

// node_modules/@smithy/middleware-retry/dist-es/configurations.js
var ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
var CONFIG_MAX_ATTEMPTS = "max_attempts";
var NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => {
    const value = env2[ENV_MAX_ATTEMPTS];
    if (!value)
      return void 0;
    const maxAttempt = parseInt(value);
    if (Number.isNaN(maxAttempt)) {
      throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
    }
    return maxAttempt;
  },
  configFileSelector: (profile) => {
    const value = profile[CONFIG_MAX_ATTEMPTS];
    if (!value)
      return void 0;
    const maxAttempt = parseInt(value);
    if (Number.isNaN(maxAttempt)) {
      throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
    }
    return maxAttempt;
  },
  default: DEFAULT_MAX_ATTEMPTS
};
var resolveRetryConfig = /* @__PURE__ */ __name((input) => {
  const { retryStrategy } = input;
  const maxAttempts = normalizeProvider(input.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
  return {
    ...input,
    maxAttempts,
    retryStrategy: async () => {
      if (retryStrategy) {
        return retryStrategy;
      }
      const retryMode = await normalizeProvider(input.retryMode)();
      if (retryMode === RETRY_MODES.ADAPTIVE) {
        return new AdaptiveRetryStrategy(maxAttempts);
      }
      return new StandardRetryStrategy(maxAttempts);
    }
  };
}, "resolveRetryConfig");
var ENV_RETRY_MODE = "AWS_RETRY_MODE";
var CONFIG_RETRY_MODE = "retry_mode";
var NODE_RETRY_MODE_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => env2[ENV_RETRY_MODE],
  configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
  default: DEFAULT_RETRY_MODE
};

// node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
var retryMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
  let retryStrategy = await options.retryStrategy();
  const maxAttempts = await options.maxAttempts();
  if (isRetryStrategyV2(retryStrategy)) {
    retryStrategy = retryStrategy;
    let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
    let lastError = new Error();
    let attempts = 0;
    let totalRetryDelay = 0;
    const { request: request2 } = args;
    if (HttpRequest.isInstance(request2)) {
      request2.headers[INVOCATION_ID_HEADER] = v4_default();
    }
    while (true) {
      try {
        if (HttpRequest.isInstance(request2)) {
          request2.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
        }
        const { response, output } = await next(args);
        retryStrategy.recordSuccess(retryToken);
        output.$metadata.attempts = attempts + 1;
        output.$metadata.totalRetryDelay = totalRetryDelay;
        return { response, output };
      } catch (e5) {
        const retryErrorInfo = getRetryErrorInfo(e5);
        lastError = asSdkError(e5);
        try {
          retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
        } catch (refreshError) {
          if (!lastError.$metadata) {
            lastError.$metadata = {};
          }
          lastError.$metadata.attempts = attempts + 1;
          lastError.$metadata.totalRetryDelay = totalRetryDelay;
          throw lastError;
        }
        attempts = retryToken.getRetryCount();
        const delay = retryToken.getRetryDelay();
        totalRetryDelay += delay;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  } else {
    retryStrategy = retryStrategy;
    if (retryStrategy?.mode)
      context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
    return retryStrategy.retry(next, args);
  }
}, "retryMiddleware");
var isRetryStrategyV2 = /* @__PURE__ */ __name((retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined", "isRetryStrategyV2");
var getRetryErrorInfo = /* @__PURE__ */ __name((error) => {
  const errorInfo = {
    errorType: getRetryErrorType(error)
  };
  const retryAfterHint = getRetryAfterHint(error.$response);
  if (retryAfterHint) {
    errorInfo.retryAfterHint = retryAfterHint;
  }
  return errorInfo;
}, "getRetryErrorInfo");
var getRetryErrorType = /* @__PURE__ */ __name((error) => {
  if (isThrottlingError(error))
    return "THROTTLING";
  if (isTransientError(error))
    return "TRANSIENT";
  if (isServerError(error))
    return "SERVER_ERROR";
  return "CLIENT_ERROR";
}, "getRetryErrorType");
var retryMiddlewareOptions = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true
};
var getRetryPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
  }
}), "getRetryPlugin");
var getRetryAfterHint = /* @__PURE__ */ __name((response) => {
  if (!HttpResponse.isInstance(response))
    return;
  const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
  if (!retryAfterHeaderName)
    return;
  const retryAfter = response.headers[retryAfterHeaderName];
  const retryAfterSeconds = Number(retryAfter);
  if (!Number.isNaN(retryAfterSeconds))
    return new Date(retryAfterSeconds * 1e3);
  const retryAfterDate = new Date(retryAfter);
  return retryAfterDate;
}, "getRetryAfterHint");

// node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
var NoOpLogger = class {
  trace() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};
__name(NoOpLogger, "NoOpLogger");

// node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
var constructStack = /* @__PURE__ */ __name(() => {
  let absoluteEntries = [];
  let relativeEntries = [];
  const entriesNameSet = /* @__PURE__ */ new Set();
  const sort = /* @__PURE__ */ __name((entries) => entries.sort((a5, b5) => stepWeights[b5.step] - stepWeights[a5.step] || priorityWeights[b5.priority || "normal"] - priorityWeights[a5.priority || "normal"]), "sort");
  const removeByName = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      if (entry.name && entry.name === toRemove) {
        isRemoved = true;
        entriesNameSet.delete(toRemove);
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByName");
  const removeByReference = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      if (entry.middleware === toRemove) {
        isRemoved = true;
        if (entry.name)
          entriesNameSet.delete(entry.name);
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByReference");
  const cloneTo = /* @__PURE__ */ __name((toStack) => {
    absoluteEntries.forEach((entry) => {
      toStack.add(entry.middleware, { ...entry });
    });
    relativeEntries.forEach((entry) => {
      toStack.addRelativeTo(entry.middleware, { ...entry });
    });
    return toStack;
  }, "cloneTo");
  const expandRelativeMiddlewareList = /* @__PURE__ */ __name((from) => {
    const expandedMiddlewareList = [];
    from.before.forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    expandedMiddlewareList.push(from);
    from.after.reverse().forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    return expandedMiddlewareList;
  }, "expandRelativeMiddlewareList");
  const getMiddlewareList = /* @__PURE__ */ __name((debug = false) => {
    const normalizedAbsoluteEntries = [];
    const normalizedRelativeEntries = [];
    const normalizedEntriesNameMap = {};
    absoluteEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      if (normalizedEntry.name)
        normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
      normalizedAbsoluteEntries.push(normalizedEntry);
    });
    relativeEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      if (normalizedEntry.name)
        normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
      normalizedRelativeEntries.push(normalizedEntry);
    });
    normalizedRelativeEntries.forEach((entry) => {
      if (entry.toMiddleware) {
        const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
        if (toMiddleware === void 0) {
          if (debug) {
            return;
          }
          throw new Error(`${entry.toMiddleware} is not found when adding ${entry.name || "anonymous"} middleware ${entry.relation} ${entry.toMiddleware}`);
        }
        if (entry.relation === "after") {
          toMiddleware.after.push(entry);
        }
        if (entry.relation === "before") {
          toMiddleware.before.push(entry);
        }
      }
    });
    const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
      wholeList.push(...expandedMiddlewareList);
      return wholeList;
    }, []);
    return mainChain;
  }, "getMiddlewareList");
  const stack = {
    add: (middleware, options = {}) => {
      const { name, override } = options;
      const entry = {
        step: "initialize",
        priority: "normal",
        middleware,
        ...options
      };
      if (name) {
        if (entriesNameSet.has(name)) {
          if (!override)
            throw new Error(`Duplicate middleware name '${name}'`);
          const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === name);
          const toOverride = absoluteEntries[toOverrideIndex];
          if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
            throw new Error(`"${name}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by same-name middleware with ${entry.priority} priority in ${entry.step} step.`);
          }
          absoluteEntries.splice(toOverrideIndex, 1);
        }
        entriesNameSet.add(name);
      }
      absoluteEntries.push(entry);
    },
    addRelativeTo: (middleware, options) => {
      const { name, override } = options;
      const entry = {
        middleware,
        ...options
      };
      if (name) {
        if (entriesNameSet.has(name)) {
          if (!override)
            throw new Error(`Duplicate middleware name '${name}'`);
          const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === name);
          const toOverride = relativeEntries[toOverrideIndex];
          if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
            throw new Error(`"${name}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by same-name middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
          }
          relativeEntries.splice(toOverrideIndex, 1);
        }
        entriesNameSet.add(name);
      }
      relativeEntries.push(entry);
    },
    clone: () => cloneTo(constructStack()),
    use: (plugin) => {
      plugin.applyToStack(stack);
    },
    remove: (toRemove) => {
      if (typeof toRemove === "string")
        return removeByName(toRemove);
      else
        return removeByReference(toRemove);
    },
    removeByTag: (toRemove) => {
      let isRemoved = false;
      const filterCb = /* @__PURE__ */ __name((entry) => {
        const { tags, name } = entry;
        if (tags && tags.includes(toRemove)) {
          if (name)
            entriesNameSet.delete(name);
          isRemoved = true;
          return false;
        }
        return true;
      }, "filterCb");
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    },
    concat: (from) => {
      const cloned = cloneTo(constructStack());
      cloned.use(from);
      return cloned;
    },
    applyToStack: cloneTo,
    identify: () => {
      return getMiddlewareList(true).map((mw) => {
        return mw.name + ": " + (mw.tags || []).join(",");
      });
    },
    resolve: (handler2, context) => {
      for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
        handler2 = middleware(handler2, context);
      }
      return handler2;
    }
  };
  return stack;
}, "constructStack");
var stepWeights = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
};
var priorityWeights = {
  high: 3,
  normal: 2,
  low: 1
};

// node_modules/@smithy/smithy-client/dist-es/client.js
var Client = class {
  constructor(config) {
    this.middlewareStack = constructStack();
    this.config = config;
  }
  send(command, optionsOrCb, cb) {
    const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
    const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
    const handler2 = command.resolveMiddleware(this.middlewareStack, this.config, options);
    if (callback) {
      handler2(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
      });
    } else {
      return handler2(command).then((result) => result.output);
    }
  }
  destroy() {
    if (this.config.requestHandler.destroy)
      this.config.requestHandler.destroy();
  }
};
__name(Client, "Client");

// node_modules/@smithy/util-base64/dist-es/fromBase64.js
var BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
var fromBase64 = /* @__PURE__ */ __name((input) => {
  if (input.length * 3 % 4 !== 0) {
    throw new TypeError(`Incorrect padding on base64 string.`);
  }
  if (!BASE64_REGEX.exec(input)) {
    throw new TypeError(`Invalid base64 string.`);
  }
  const buffer = fromString(input, "base64");
  return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
}, "fromBase64");

// node_modules/@smithy/util-base64/dist-es/toBase64.js
var toBase64 = /* @__PURE__ */ __name((input) => fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64"), "toBase64");

// node_modules/@smithy/util-stream/dist-es/blob/transforms.js
function transformToString(payload, encoding = "utf-8") {
  if (encoding === "base64") {
    return toBase64(payload);
  }
  return toUtf84(payload);
}
__name(transformToString, "transformToString");
function transformFromString(str, encoding) {
  if (encoding === "base64") {
    return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
  }
  return Uint8ArrayBlobAdapter.mutate(fromUtf84(str));
}
__name(transformFromString, "transformFromString");

// node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
var Uint8ArrayBlobAdapter = class extends Uint8Array {
  static fromString(source, encoding = "utf-8") {
    switch (typeof source) {
      case "string":
        return transformFromString(source, encoding);
      default:
        throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
    }
  }
  static mutate(source) {
    Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
    return source;
  }
  transformToString(encoding = "utf-8") {
    return transformToString(this, encoding);
  }
};
__name(Uint8ArrayBlobAdapter, "Uint8ArrayBlobAdapter");

// node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri(key);
    if (Array.isArray(value)) {
      for (let i5 = 0, iLen = value.length; i5 < iLen; i5++) {
        parts.push(`${key}=${escapeUri(value[i5])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}
__name(buildQueryString, "buildQueryString");

// node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js
import { Agent as hAgent, request as hRequest } from "http";
import { Agent as hsAgent, request as hsRequest } from "https";

// node_modules/@smithy/node-http-handler/dist-es/constants.js
var NODEJS_TIMEOUT_ERROR_CODES2 = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];

// node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js
var getTransformedHeaders = /* @__PURE__ */ __name((headers) => {
  const transformedHeaders = {};
  for (const name of Object.keys(headers)) {
    const headerValues = headers[name];
    transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
  }
  return transformedHeaders;
}, "getTransformedHeaders");

// node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js
var setConnectionTimeout = /* @__PURE__ */ __name((request2, reject, timeoutInMs = 0) => {
  if (!timeoutInMs) {
    return;
  }
  const timeoutId = setTimeout(() => {
    request2.destroy();
    reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
      name: "TimeoutError"
    }));
  }, timeoutInMs);
  request2.on("socket", (socket) => {
    if (socket.connecting) {
      socket.on("connect", () => {
        clearTimeout(timeoutId);
      });
    } else {
      clearTimeout(timeoutId);
    }
  });
}, "setConnectionTimeout");

// node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js
var setSocketKeepAlive = /* @__PURE__ */ __name((request2, { keepAlive, keepAliveMsecs }) => {
  if (keepAlive !== true) {
    return;
  }
  request2.on("socket", (socket) => {
    socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
  });
}, "setSocketKeepAlive");

// node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js
var setSocketTimeout = /* @__PURE__ */ __name((request2, reject, timeoutInMs = 0) => {
  request2.setTimeout(timeoutInMs, () => {
    request2.destroy();
    reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
  });
}, "setSocketTimeout");

// node_modules/@smithy/node-http-handler/dist-es/write-request-body.js
import { Readable } from "stream";
var MIN_WAIT_TIME = 1e3;
async function writeRequestBody(httpRequest2, request2, maxContinueTimeoutMs = MIN_WAIT_TIME) {
  const headers = request2.headers ?? {};
  const expect = headers["Expect"] || headers["expect"];
  let timeoutId = -1;
  let hasError = false;
  if (expect === "100-continue") {
    await Promise.race([
      new Promise((resolve) => {
        timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
      }),
      new Promise((resolve) => {
        httpRequest2.on("continue", () => {
          clearTimeout(timeoutId);
          resolve();
        });
        httpRequest2.on("error", () => {
          hasError = true;
          clearTimeout(timeoutId);
          resolve();
        });
      })
    ]);
  }
  if (!hasError) {
    writeBody(httpRequest2, request2.body);
  }
}
__name(writeRequestBody, "writeRequestBody");
function writeBody(httpRequest2, body) {
  if (body instanceof Readable) {
    body.pipe(httpRequest2);
  } else if (body) {
    httpRequest2.end(Buffer.from(body));
  } else {
    httpRequest2.end();
  }
}
__name(writeBody, "writeBody");

// node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js
var NodeHttpHandler = class {
  constructor(options) {
    this.metadata = { handlerProtocol: "http/1.1" };
    this.configProvider = new Promise((resolve, reject) => {
      if (typeof options === "function") {
        options().then((_options) => {
          resolve(this.resolveDefaultConfig(_options));
        }).catch(reject);
      } else {
        resolve(this.resolveDefaultConfig(options));
      }
    });
  }
  resolveDefaultConfig(options) {
    const { requestTimeout, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
    const keepAlive = true;
    const maxSockets = 50;
    return {
      connectionTimeout,
      requestTimeout: requestTimeout ?? socketTimeout,
      httpAgent: httpAgent || new hAgent({ keepAlive, maxSockets }),
      httpsAgent: httpsAgent || new hsAgent({ keepAlive, maxSockets })
    };
  }
  destroy() {
    this.config?.httpAgent?.destroy();
    this.config?.httpsAgent?.destroy();
  }
  async handle(request2, { abortSignal } = {}) {
    if (!this.config) {
      this.config = await this.configProvider;
    }
    return new Promise((_resolve, _reject) => {
      let writeRequestBodyPromise = void 0;
      const resolve = /* @__PURE__ */ __name(async (arg) => {
        await writeRequestBodyPromise;
        _resolve(arg);
      }, "resolve");
      const reject = /* @__PURE__ */ __name(async (arg) => {
        await writeRequestBodyPromise;
        _reject(arg);
      }, "reject");
      if (!this.config) {
        throw new Error("Node HTTP request handler config is not resolved");
      }
      if (abortSignal?.aborted) {
        const abortError = new Error("Request aborted");
        abortError.name = "AbortError";
        reject(abortError);
        return;
      }
      const isSSL = request2.protocol === "https:";
      const queryString = buildQueryString(request2.query || {});
      let auth = void 0;
      if (request2.username != null || request2.password != null) {
        const username = request2.username ?? "";
        const password = request2.password ?? "";
        auth = `${username}:${password}`;
      }
      let path = request2.path;
      if (queryString) {
        path += `?${queryString}`;
      }
      if (request2.fragment) {
        path += `#${request2.fragment}`;
      }
      const nodeHttpsOptions = {
        headers: request2.headers,
        host: request2.hostname,
        method: request2.method,
        path,
        port: request2.port,
        agent: isSSL ? this.config.httpsAgent : this.config.httpAgent,
        auth
      };
      const requestFunc = isSSL ? hsRequest : hRequest;
      const req = requestFunc(nodeHttpsOptions, (res) => {
        const httpResponse = new HttpResponse({
          statusCode: res.statusCode || -1,
          reason: res.statusMessage,
          headers: getTransformedHeaders(res.headers),
          body: res
        });
        resolve({ response: httpResponse });
      });
      req.on("error", (err) => {
        if (NODEJS_TIMEOUT_ERROR_CODES2.includes(err.code)) {
          reject(Object.assign(err, { name: "TimeoutError" }));
        } else {
          reject(err);
        }
      });
      setConnectionTimeout(req, reject, this.config.connectionTimeout);
      setSocketTimeout(req, reject, this.config.requestTimeout);
      if (abortSignal) {
        abortSignal.onabort = () => {
          req.abort();
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          reject(abortError);
        };
      }
      const httpAgent = nodeHttpsOptions.agent;
      if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
        setSocketKeepAlive(req, {
          keepAlive: httpAgent.keepAlive,
          keepAliveMsecs: httpAgent.keepAliveMsecs
        });
      }
      writeRequestBodyPromise = writeRequestBody(req, request2, this.config.requestTimeout).catch(_reject);
    });
  }
};
__name(NodeHttpHandler, "NodeHttpHandler");

// node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js
var NodeHttp2ConnectionPool = class {
  constructor(sessions) {
    this.sessions = [];
    this.sessions = sessions ?? [];
  }
  poll() {
    if (this.sessions.length > 0) {
      return this.sessions.shift();
    }
  }
  offerLast(session) {
    this.sessions.push(session);
  }
  contains(session) {
    return this.sessions.includes(session);
  }
  remove(session) {
    this.sessions = this.sessions.filter((s5) => s5 !== session);
  }
  [Symbol.iterator]() {
    return this.sessions[Symbol.iterator]();
  }
  destroy(connection) {
    for (const session of this.sessions) {
      if (session === connection) {
        if (!session.destroyed) {
          session.destroy();
        }
      }
    }
  }
};
__name(NodeHttp2ConnectionPool, "NodeHttp2ConnectionPool");

// node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js
import { Writable } from "stream";
var Collector = class extends Writable {
  constructor() {
    super(...arguments);
    this.bufferedBytes = [];
  }
  _write(chunk, encoding, callback) {
    this.bufferedBytes.push(chunk);
    callback();
  }
};
__name(Collector, "Collector");

// node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js
var streamCollector = /* @__PURE__ */ __name((stream) => new Promise((resolve, reject) => {
  const collector = new Collector();
  stream.pipe(collector);
  stream.on("error", (err) => {
    collector.end();
    reject(err);
  });
  collector.on("error", reject);
  collector.on("finish", function() {
    const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
    resolve(bytes);
  });
}), "streamCollector");

// node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
var collectBody = /* @__PURE__ */ __name(async (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Uint8ArrayBlobAdapter.mutate(streamBody);
  }
  if (!streamBody) {
    return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
  }
  const fromContext = context.streamCollector(streamBody);
  return Uint8ArrayBlobAdapter.mutate(await fromContext);
}, "collectBody");

// node_modules/@smithy/smithy-client/dist-es/command.js
var Command = class {
  constructor() {
    this.middlewareStack = constructStack();
  }
};
__name(Command, "Command");

// node_modules/@smithy/smithy-client/dist-es/constants.js
var SENSITIVE_STRING = "***SensitiveInformation***";

// node_modules/@smithy/smithy-client/dist-es/parse-utils.js
var expectBoolean = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "number") {
    if (value === 0 || value === 1) {
      logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
    }
    if (value === 0) {
      return false;
    }
    if (value === 1) {
      return true;
    }
  }
  if (typeof value === "string") {
    const lower = value.toLowerCase();
    if (lower === "false" || lower === "true") {
      logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
    }
    if (lower === "false") {
      return false;
    }
    if (lower === "true") {
      return true;
    }
  }
  if (typeof value === "boolean") {
    return value;
  }
  throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
}, "expectBoolean");
var expectNumber = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      if (String(parsed) !== String(value)) {
        logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
      }
      return parsed;
    }
  }
  if (typeof value === "number") {
    return value;
  }
  throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
}, "expectNumber");
var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
var expectFloat32 = /* @__PURE__ */ __name((value) => {
  const expected = expectNumber(value);
  if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
    if (Math.abs(expected) > MAX_FLOAT) {
      throw new TypeError(`Expected 32-bit float, got ${value}`);
    }
  }
  return expected;
}, "expectFloat32");
var expectLong = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (Number.isInteger(value) && !Number.isNaN(value)) {
    return value;
  }
  throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
}, "expectLong");
var expectInt32 = /* @__PURE__ */ __name((value) => expectSizedInt(value, 32), "expectInt32");
var expectShort = /* @__PURE__ */ __name((value) => expectSizedInt(value, 16), "expectShort");
var expectByte = /* @__PURE__ */ __name((value) => expectSizedInt(value, 8), "expectByte");
var expectSizedInt = /* @__PURE__ */ __name((value, size) => {
  const expected = expectLong(value);
  if (expected !== void 0 && castInt(expected, size) !== expected) {
    throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
  }
  return expected;
}, "expectSizedInt");
var castInt = /* @__PURE__ */ __name((value, size) => {
  switch (size) {
    case 32:
      return Int32Array.of(value)[0];
    case 16:
      return Int16Array.of(value)[0];
    case 8:
      return Int8Array.of(value)[0];
  }
}, "castInt");
var expectNonNull = /* @__PURE__ */ __name((value, location) => {
  if (value === null || value === void 0) {
    if (location) {
      throw new TypeError(`Expected a non-null value for ${location}`);
    }
    throw new TypeError("Expected a non-null value");
  }
  return value;
}, "expectNonNull");
var expectObject = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "object" && !Array.isArray(value)) {
    return value;
  }
  const receivedType = Array.isArray(value) ? "array" : typeof value;
  throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
}, "expectObject");
var expectString = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    return value;
  }
  if (["boolean", "number", "bigint"].includes(typeof value)) {
    logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
    return String(value);
  }
  throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
}, "expectString");
var expectUnion = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  const asObject = expectObject(value);
  const setKeys = Object.entries(asObject).filter(([, v3]) => v3 != null).map(([k5]) => k5);
  if (setKeys.length === 0) {
    throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
  }
  if (setKeys.length > 1) {
    throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
  }
  return asObject;
}, "expectUnion");
var strictParseFloat32 = /* @__PURE__ */ __name((value) => {
  if (typeof value == "string") {
    return expectFloat32(parseNumber(value));
  }
  return expectFloat32(value);
}, "strictParseFloat32");
var NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
var parseNumber = /* @__PURE__ */ __name((value) => {
  const matches = value.match(NUMBER_REGEX);
  if (matches === null || matches[0].length !== value.length) {
    throw new TypeError(`Expected real number, got implicit NaN`);
  }
  return parseFloat(value);
}, "parseNumber");
var limitedParseDouble = /* @__PURE__ */ __name((value) => {
  if (typeof value == "string") {
    return parseFloatString(value);
  }
  return expectNumber(value);
}, "limitedParseDouble");
var parseFloatString = /* @__PURE__ */ __name((value) => {
  switch (value) {
    case "NaN":
      return NaN;
    case "Infinity":
      return Infinity;
    case "-Infinity":
      return -Infinity;
    default:
      throw new Error(`Unable to parse float value: ${value}`);
  }
}, "parseFloatString");
var strictParseInt32 = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectInt32(parseNumber(value));
  }
  return expectInt32(value);
}, "strictParseInt32");
var strictParseShort = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectShort(parseNumber(value));
  }
  return expectShort(value);
}, "strictParseShort");
var strictParseByte = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectByte(parseNumber(value));
  }
  return expectByte(value);
}, "strictParseByte");
var stackTraceWarning = /* @__PURE__ */ __name((message) => {
  return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s5) => !s5.includes("stackTraceWarning")).join("\n");
}, "stackTraceWarning");
var logger = {
  warn: console.warn
};

// node_modules/@smithy/smithy-client/dist-es/date-utils.js
var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
var RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
var parseRfc3339DateTimeWithOffset = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-3339 date-times must be expressed as strings");
  }
  const match = RFC3339_WITH_OFFSET.exec(value);
  if (!match) {
    throw new TypeError("Invalid RFC-3339 date-time value");
  }
  const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
  const year = strictParseShort(stripLeadingZeroes(yearStr));
  const month = parseDateValue(monthStr, "month", 1, 12);
  const day = parseDateValue(dayStr, "day", 1, 31);
  const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
  if (offsetStr.toUpperCase() != "Z") {
    date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
  }
  return date;
}, "parseRfc3339DateTimeWithOffset");
var IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
var buildDate = /* @__PURE__ */ __name((year, month, day, time) => {
  const adjustedMonth = month - 1;
  validateDayOfMonth(year, adjustedMonth, day);
  return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
}, "buildDate");
var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var validateDayOfMonth = /* @__PURE__ */ __name((year, month, day) => {
  let maxDays = DAYS_IN_MONTH[month];
  if (month === 1 && isLeapYear(year)) {
    maxDays = 29;
  }
  if (day > maxDays) {
    throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
  }
}, "validateDayOfMonth");
var isLeapYear = /* @__PURE__ */ __name((year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}, "isLeapYear");
var parseDateValue = /* @__PURE__ */ __name((value, type, lower, upper) => {
  const dateVal = strictParseByte(stripLeadingZeroes(value));
  if (dateVal < lower || dateVal > upper) {
    throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
  }
  return dateVal;
}, "parseDateValue");
var parseMilliseconds = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return 0;
  }
  return strictParseFloat32("0." + value) * 1e3;
}, "parseMilliseconds");
var parseOffsetToMilliseconds = /* @__PURE__ */ __name((value) => {
  const directionStr = value[0];
  let direction = 1;
  if (directionStr == "+") {
    direction = 1;
  } else if (directionStr == "-") {
    direction = -1;
  } else {
    throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
  }
  const hour = Number(value.substring(1, 3));
  const minute = Number(value.substring(4, 6));
  return direction * (hour * 60 + minute) * 60 * 1e3;
}, "parseOffsetToMilliseconds");
var stripLeadingZeroes = /* @__PURE__ */ __name((value) => {
  let idx = 0;
  while (idx < value.length - 1 && value.charAt(idx) === "0") {
    idx++;
  }
  if (idx === 0) {
    return value;
  }
  return value.slice(idx);
}, "stripLeadingZeroes");

// node_modules/@smithy/smithy-client/dist-es/exceptions.js
var ServiceException = class extends Error {
  constructor(options) {
    super(options.message);
    Object.setPrototypeOf(this, ServiceException.prototype);
    this.name = options.name;
    this.$fault = options.$fault;
    this.$metadata = options.$metadata;
  }
};
__name(ServiceException, "ServiceException");
var decorateServiceException = /* @__PURE__ */ __name((exception, additions = {}) => {
  Object.entries(additions).filter(([, v3]) => v3 !== void 0).forEach(([k5, v3]) => {
    if (exception[k5] == void 0 || exception[k5] === "") {
      exception[k5] = v3;
    }
  });
  const message = exception.message || exception.Message || "UnknownError";
  exception.message = message;
  delete exception.Message;
  return exception;
}, "decorateServiceException");

// node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
var throwDefaultError = /* @__PURE__ */ __name(({ output, parsedBody, exceptionCtor, errorCode }) => {
  const $metadata = deserializeMetadata(output);
  const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
  const response = new exceptionCtor({
    name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
    $fault: "client",
    $metadata
  });
  throw decorateServiceException(response, parsedBody);
}, "throwDefaultError");
var withBaseException = /* @__PURE__ */ __name((ExceptionCtor) => {
  return ({ output, parsedBody, errorCode }) => {
    throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
  };
}, "withBaseException");
var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");

// node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
var loadConfigsForDefaultMode = /* @__PURE__ */ __name((mode) => {
  switch (mode) {
    case "standard":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "in-region":
      return {
        retryMode: "standard",
        connectionTimeout: 1100
      };
    case "cross-region":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "mobile":
      return {
        retryMode: "standard",
        connectionTimeout: 3e4
      };
    default:
      return {};
  }
}, "loadConfigsForDefaultMode");

// node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
var warningEmitted = false;
var emitWarningIfUnsupportedVersion = /* @__PURE__ */ __name((version) => {
  if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
    warningEmitted = true;
  }
}, "emitWarningIfUnsupportedVersion");

// node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c5) {
    return "%" + c5.charCodeAt(0).toString(16).toUpperCase();
  });
}
__name(extendedEncodeURIComponent, "extendedEncodeURIComponent");

// node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
var getValueFromTextNode = /* @__PURE__ */ __name((obj) => {
  const textNodeName = "#text";
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
      obj[key] = obj[key][textNodeName];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      obj[key] = getValueFromTextNode(obj[key]);
    }
  }
  return obj;
}, "getValueFromTextNode");

// node_modules/@smithy/smithy-client/dist-es/lazy-json.js
var StringWrapper = /* @__PURE__ */ __name(function() {
  const Class = Object.getPrototypeOf(this).constructor;
  const Constructor = Function.bind.apply(String, [null, ...arguments]);
  const instance = new Constructor();
  Object.setPrototypeOf(instance, Class.prototype);
  return instance;
}, "StringWrapper");
StringWrapper.prototype = Object.create(String.prototype, {
  constructor: {
    value: StringWrapper,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
Object.setPrototypeOf(StringWrapper, String);

// node_modules/@smithy/smithy-client/dist-es/object-mapping.js
function map(arg0, arg1, arg2) {
  let target;
  let filter;
  let instructions;
  if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
    target = {};
    instructions = arg0;
  } else {
    target = arg0;
    if (typeof arg1 === "function") {
      filter = arg1;
      instructions = arg2;
      return mapWithFilter(target, filter, instructions);
    } else {
      instructions = arg1;
    }
  }
  for (const key of Object.keys(instructions)) {
    if (!Array.isArray(instructions[key])) {
      target[key] = instructions[key];
      continue;
    }
    applyInstruction(target, null, instructions, key);
  }
  return target;
}
__name(map, "map");
var take = /* @__PURE__ */ __name((source, instructions) => {
  const out = {};
  for (const key in instructions) {
    applyInstruction(out, source, instructions, key);
  }
  return out;
}, "take");
var mapWithFilter = /* @__PURE__ */ __name((target, filter, instructions) => {
  return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
    if (Array.isArray(value)) {
      _instructions[key] = value;
    } else {
      if (typeof value === "function") {
        _instructions[key] = [filter, value()];
      } else {
        _instructions[key] = [filter, value];
      }
    }
    return _instructions;
  }, {}));
}, "mapWithFilter");
var applyInstruction = /* @__PURE__ */ __name((target, source, instructions, targetKey) => {
  if (source !== null) {
    let instruction = instructions[targetKey];
    if (typeof instruction === "function") {
      instruction = [, instruction];
    }
    const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
    if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
      target[targetKey] = valueFn(source[sourceKey]);
    }
    return;
  }
  let [filter, value] = instructions[targetKey];
  if (typeof value === "function") {
    let _value;
    const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
    const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed) {
      target[targetKey] = _value;
    } else if (customFilterPassed) {
      target[targetKey] = value();
    }
  } else {
    const defaultFilterPassed = filter === void 0 && value != null;
    const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed || customFilterPassed) {
      target[targetKey] = value;
    }
  }
}, "applyInstruction");
var nonNullish = /* @__PURE__ */ __name((_) => _ != null, "nonNullish");
var pass = /* @__PURE__ */ __name((_) => _, "pass");

// node_modules/@smithy/smithy-client/dist-es/serde-json.js
var _json = /* @__PURE__ */ __name((obj) => {
  if (obj == null) {
    return {};
  }
  if (Array.isArray(obj)) {
    return obj.filter((_) => _ != null);
  }
  if (typeof obj === "object") {
    const target = {};
    for (const key of Object.keys(obj)) {
      if (obj[key] == null) {
        continue;
      }
      target[key] = _json(obj[key]);
    }
    return target;
  }
  return obj;
}, "_json");

// node_modules/@aws-sdk/client-dynamodb/dist-es/models/DynamoDBServiceException.js
var DynamoDBServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, DynamoDBServiceException.prototype);
  }
};
__name(DynamoDBServiceException, "DynamoDBServiceException");

// node_modules/@aws-sdk/client-dynamodb/dist-es/models/models_0.js
var InternalServerError = class extends DynamoDBServiceException {
  constructor(opts) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts
    });
    this.name = "InternalServerError";
    this.$fault = "server";
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
};
__name(InternalServerError, "InternalServerError");
var RequestLimitExceeded = class extends DynamoDBServiceException {
  constructor(opts) {
    super({
      name: "RequestLimitExceeded",
      $fault: "client",
      ...opts
    });
    this.name = "RequestLimitExceeded";
    this.$fault = "client";
    Object.setPrototypeOf(this, RequestLimitExceeded.prototype);
  }
};
__name(RequestLimitExceeded, "RequestLimitExceeded");
var InvalidEndpointException = class extends DynamoDBServiceException {
  constructor(opts) {
    super({
      name: "InvalidEndpointException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidEndpointException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidEndpointException.prototype);
    this.Message = opts.Message;
  }
};
__name(InvalidEndpointException, "InvalidEndpointException");
var ProvisionedThroughputExceededException = class extends DynamoDBServiceException {
  constructor(opts) {
    super({
      name: "ProvisionedThroughputExceededException",
      $fault: "client",
      ...opts
    });
    this.name = "ProvisionedThroughputExceededException";
    this.$fault = "client";
    Object.setPrototypeOf(this, ProvisionedThroughputExceededException.prototype);
  }
};
__name(ProvisionedThroughputExceededException, "ProvisionedThroughputExceededException");
var ResourceNotFoundException = class extends DynamoDBServiceException {
  constructor(opts) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "ResourceNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
};
__name(ResourceNotFoundException, "ResourceNotFoundException");
var AttributeValue;
(function(AttributeValue2) {
  AttributeValue2.visit = (value, visitor) => {
    if (value.S !== void 0)
      return visitor.S(value.S);
    if (value.N !== void 0)
      return visitor.N(value.N);
    if (value.B !== void 0)
      return visitor.B(value.B);
    if (value.SS !== void 0)
      return visitor.SS(value.SS);
    if (value.NS !== void 0)
      return visitor.NS(value.NS);
    if (value.BS !== void 0)
      return visitor.BS(value.BS);
    if (value.M !== void 0)
      return visitor.M(value.M);
    if (value.L !== void 0)
      return visitor.L(value.L);
    if (value.NULL !== void 0)
      return visitor.NULL(value.NULL);
    if (value.BOOL !== void 0)
      return visitor.BOOL(value.BOOL);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(AttributeValue || (AttributeValue = {}));

// node_modules/@aws-sdk/client-dynamodb/dist-es/protocols/Aws_json1_0.js
var se_DescribeEndpointsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = sharedHeaders("DescribeEndpoints");
  let body;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DescribeEndpointsCommand");
var se_QueryCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = sharedHeaders("Query");
  let body;
  body = JSON.stringify(se_QueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_QueryCommand");
var de_DescribeEndpointsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_DescribeEndpointsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = _json(data);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_DescribeEndpointsCommand");
var de_DescribeEndpointsCommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError2({
    output,
    parsedBody,
    errorCode
  });
}, "de_DescribeEndpointsCommandError");
var de_QueryCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_QueryCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = de_QueryOutput(data, context);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_QueryCommand");
var de_QueryCommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError2({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_QueryCommandError");
var de_InternalServerErrorRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InternalServerErrorRes");
var de_InvalidEndpointExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidEndpointException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidEndpointExceptionRes");
var de_ProvisionedThroughputExceededExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ProvisionedThroughputExceededException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ProvisionedThroughputExceededExceptionRes");
var de_RequestLimitExceededRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new RequestLimitExceeded({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_RequestLimitExceededRes");
var de_ResourceNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ResourceNotFoundExceptionRes");
var se_AttributeValue = /* @__PURE__ */ __name((input, context) => {
  return AttributeValue.visit(input, {
    B: (value) => ({ B: context.base64Encoder(value) }),
    BOOL: (value) => ({ BOOL: value }),
    BS: (value) => ({ BS: se_BinarySetAttributeValue(value, context) }),
    L: (value) => ({ L: se_ListAttributeValue(value, context) }),
    M: (value) => ({ M: se_MapAttributeValue(value, context) }),
    N: (value) => ({ N: value }),
    NS: (value) => ({ NS: _json(value) }),
    NULL: (value) => ({ NULL: value }),
    S: (value) => ({ S: value }),
    SS: (value) => ({ SS: _json(value) }),
    _: (name, value) => ({ name: value })
  });
}, "se_AttributeValue");
var se_AttributeValueList = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e5) => e5 != null).map((entry) => {
    return se_AttributeValue(entry, context);
  });
}, "se_AttributeValueList");
var se_BinarySetAttributeValue = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e5) => e5 != null).map((entry) => {
    return context.base64Encoder(entry);
  });
}, "se_BinarySetAttributeValue");
var se_Condition = /* @__PURE__ */ __name((input, context) => {
  return take(input, {
    AttributeValueList: (_) => se_AttributeValueList(_, context),
    ComparisonOperator: []
  });
}, "se_Condition");
var se_ExpressionAttributeValueMap = /* @__PURE__ */ __name((input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
}, "se_ExpressionAttributeValueMap");
var se_FilterConditionMap = /* @__PURE__ */ __name((input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Condition(value, context);
    return acc;
  }, {});
}, "se_FilterConditionMap");
var se_Key = /* @__PURE__ */ __name((input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
}, "se_Key");
var se_KeyConditions = /* @__PURE__ */ __name((input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Condition(value, context);
    return acc;
  }, {});
}, "se_KeyConditions");
var se_ListAttributeValue = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e5) => e5 != null).map((entry) => {
    return se_AttributeValue(entry, context);
  });
}, "se_ListAttributeValue");
var se_MapAttributeValue = /* @__PURE__ */ __name((input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
}, "se_MapAttributeValue");
var se_QueryInput = /* @__PURE__ */ __name((input, context) => {
  return take(input, {
    AttributesToGet: _json,
    ConditionalOperator: [],
    ConsistentRead: [],
    ExclusiveStartKey: (_) => se_Key(_, context),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
    FilterExpression: [],
    IndexName: [],
    KeyConditionExpression: [],
    KeyConditions: (_) => se_KeyConditions(_, context),
    Limit: [],
    ProjectionExpression: [],
    QueryFilter: (_) => se_FilterConditionMap(_, context),
    ReturnConsumedCapacity: [],
    ScanIndexForward: [],
    Select: [],
    TableName: []
  });
}, "se_QueryInput");
var de_AttributeMap = /* @__PURE__ */ __name((output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(expectUnion(value), context);
    return acc;
  }, {});
}, "de_AttributeMap");
var de_AttributeValue = /* @__PURE__ */ __name((output, context) => {
  if (output.B != null) {
    return {
      B: context.base64Decoder(output.B)
    };
  }
  if (expectBoolean(output.BOOL) !== void 0) {
    return { BOOL: expectBoolean(output.BOOL) };
  }
  if (output.BS != null) {
    return {
      BS: de_BinarySetAttributeValue(output.BS, context)
    };
  }
  if (output.L != null) {
    return {
      L: de_ListAttributeValue(output.L, context)
    };
  }
  if (output.M != null) {
    return {
      M: de_MapAttributeValue(output.M, context)
    };
  }
  if (expectString(output.N) !== void 0) {
    return { N: expectString(output.N) };
  }
  if (output.NS != null) {
    return {
      NS: _json(output.NS)
    };
  }
  if (expectBoolean(output.NULL) !== void 0) {
    return { NULL: expectBoolean(output.NULL) };
  }
  if (expectString(output.S) !== void 0) {
    return { S: expectString(output.S) };
  }
  if (output.SS != null) {
    return {
      SS: _json(output.SS)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_AttributeValue");
var de_BinarySetAttributeValue = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
    return context.base64Decoder(entry);
  });
  return retVal;
}, "de_BinarySetAttributeValue");
var de_Capacity = /* @__PURE__ */ __name((output, context) => {
  return take(output, {
    CapacityUnits: limitedParseDouble,
    ReadCapacityUnits: limitedParseDouble,
    WriteCapacityUnits: limitedParseDouble
  });
}, "de_Capacity");
var de_ConsumedCapacity = /* @__PURE__ */ __name((output, context) => {
  return take(output, {
    CapacityUnits: limitedParseDouble,
    GlobalSecondaryIndexes: (_) => de_SecondaryIndexesCapacityMap(_, context),
    LocalSecondaryIndexes: (_) => de_SecondaryIndexesCapacityMap(_, context),
    ReadCapacityUnits: limitedParseDouble,
    Table: (_) => de_Capacity(_, context),
    TableName: expectString,
    WriteCapacityUnits: limitedParseDouble
  });
}, "de_ConsumedCapacity");
var de_ItemList = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
    return de_AttributeMap(entry, context);
  });
  return retVal;
}, "de_ItemList");
var de_Key = /* @__PURE__ */ __name((output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(expectUnion(value), context);
    return acc;
  }, {});
}, "de_Key");
var de_ListAttributeValue = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
    return de_AttributeValue(expectUnion(entry), context);
  });
  return retVal;
}, "de_ListAttributeValue");
var de_MapAttributeValue = /* @__PURE__ */ __name((output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(expectUnion(value), context);
    return acc;
  }, {});
}, "de_MapAttributeValue");
var de_QueryOutput = /* @__PURE__ */ __name((output, context) => {
  return take(output, {
    ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
    Count: expectInt32,
    Items: (_) => de_ItemList(_, context),
    LastEvaluatedKey: (_) => de_Key(_, context),
    ScannedCount: expectInt32
  });
}, "de_QueryOutput");
var de_SecondaryIndexesCapacityMap = /* @__PURE__ */ __name((output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Capacity(value, context);
    return acc;
  }, {});
}, "de_SecondaryIndexesCapacityMap");
var deserializeMetadata2 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var collectBodyString = /* @__PURE__ */ __name((streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
var throwDefaultError2 = withBaseException(DynamoDBServiceException);
var buildHttpRpcRequest = /* @__PURE__ */ __name(async (context, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new HttpRequest(contents);
}, "buildHttpRpcRequest");
function sharedHeaders(operation) {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `DynamoDB_20120810.${operation}`
  };
}
__name(sharedHeaders, "sharedHeaders");
var parseBody = /* @__PURE__ */ __name((streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
  if (encoded.length) {
    return JSON.parse(encoded);
  }
  return {};
}), "parseBody");
var parseErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
}, "parseErrorBody");
var loadRestJsonErrorCode = /* @__PURE__ */ __name((output, data) => {
  const findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k5) => k5.toLowerCase() === key.toLowerCase()), "findKey");
  const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  }, "sanitizeErrorCode");
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== void 0) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== void 0) {
    return sanitizeErrorCode(data["__type"]);
  }
}, "loadRestJsonErrorCode");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeEndpointsCommand.js
var DescribeEndpointsCommand = class extends Command {
  static getEndpointParameterInstructions() {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  constructor(input) {
    super();
    this.input = input;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeEndpointsCommand.getEndpointParameterInstructions()));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeEndpointsCommand";
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_) => _,
      outputFilterSensitiveLog: (_) => _
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return se_DescribeEndpointsCommand(input, context);
  }
  deserialize(output, context) {
    return de_DescribeEndpointsCommand(output, context);
  }
};
__name(DescribeEndpointsCommand, "DescribeEndpointsCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "dynamodb"
  };
}, "resolveClientEndpointParameters");

// node_modules/@aws-sdk/client-dynamodb/package.json
var package_default = {
  name: "@aws-sdk/client-dynamodb",
  description: "AWS SDK for JavaScript Dynamodb Client for Node.js, Browser and React Native",
  version: "3.369.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:docs": "typedoc",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo dynamodb"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "3.0.0",
    "@aws-crypto/sha256-js": "3.0.0",
    "@aws-sdk/client-sts": "3.369.0",
    "@aws-sdk/credential-provider-node": "3.369.0",
    "@aws-sdk/middleware-endpoint-discovery": "3.369.0",
    "@aws-sdk/middleware-host-header": "3.369.0",
    "@aws-sdk/middleware-logger": "3.369.0",
    "@aws-sdk/middleware-recursion-detection": "3.369.0",
    "@aws-sdk/middleware-signing": "3.369.0",
    "@aws-sdk/middleware-user-agent": "3.369.0",
    "@aws-sdk/types": "3.369.0",
    "@aws-sdk/util-endpoints": "3.369.0",
    "@aws-sdk/util-user-agent-browser": "3.369.0",
    "@aws-sdk/util-user-agent-node": "3.369.0",
    "@smithy/config-resolver": "^1.0.1",
    "@smithy/fetch-http-handler": "^1.0.1",
    "@smithy/hash-node": "^1.0.1",
    "@smithy/invalid-dependency": "^1.0.1",
    "@smithy/middleware-content-length": "^1.0.1",
    "@smithy/middleware-endpoint": "^1.0.1",
    "@smithy/middleware-retry": "^1.0.2",
    "@smithy/middleware-serde": "^1.0.1",
    "@smithy/middleware-stack": "^1.0.1",
    "@smithy/node-config-provider": "^1.0.1",
    "@smithy/node-http-handler": "^1.0.2",
    "@smithy/protocol-http": "^1.0.1",
    "@smithy/smithy-client": "^1.0.3",
    "@smithy/types": "^1.1.0",
    "@smithy/url-parser": "^1.0.1",
    "@smithy/util-base64": "^1.0.1",
    "@smithy/util-body-length-browser": "^1.0.1",
    "@smithy/util-body-length-node": "^1.0.1",
    "@smithy/util-defaults-mode-browser": "^1.0.1",
    "@smithy/util-defaults-mode-node": "^1.0.1",
    "@smithy/util-retry": "^1.0.2",
    "@smithy/util-utf8": "^1.0.1",
    "@smithy/util-waiter": "^1.0.1",
    tslib: "^2.5.0",
    uuid: "^8.3.2"
  },
  devDependencies: {
    "@aws-sdk/service-client-documentation-generator": "3.310.0",
    "@smithy/service-client-documentation-generator": "^1.0.1",
    "@tsconfig/node14": "1.0.3",
    "@types/node": "^14.14.31",
    "@types/uuid": "^8.3.0",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typedoc: "0.23.23",
    typescript: "~4.9.5"
  },
  engines: {
    node: ">=14.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-dynamodb",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-dynamodb"
  }
};

// node_modules/@aws-sdk/middleware-sdk-sts/dist-es/index.js
var resolveStsAuthConfig = /* @__PURE__ */ __name((input, { stsClientCtor }) => resolveAwsAuthConfig({
  ...input,
  stsClientCtor
}), "resolveStsAuthConfig");

// node_modules/@aws-sdk/client-sts/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters2 = /* @__PURE__ */ __name((options) => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useGlobalEndpoint: options.useGlobalEndpoint ?? false,
    defaultSigningName: "sts"
  };
}, "resolveClientEndpointParameters");

// node_modules/@aws-sdk/client-sts/package.json
var package_default2 = {
  name: "@aws-sdk/client-sts",
  description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
  version: "3.369.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:docs": "typedoc",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
    test: "yarn test:unit",
    "test:unit": "jest"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "3.0.0",
    "@aws-crypto/sha256-js": "3.0.0",
    "@aws-sdk/credential-provider-node": "3.369.0",
    "@aws-sdk/middleware-host-header": "3.369.0",
    "@aws-sdk/middleware-logger": "3.369.0",
    "@aws-sdk/middleware-recursion-detection": "3.369.0",
    "@aws-sdk/middleware-sdk-sts": "3.369.0",
    "@aws-sdk/middleware-signing": "3.369.0",
    "@aws-sdk/middleware-user-agent": "3.369.0",
    "@aws-sdk/types": "3.369.0",
    "@aws-sdk/util-endpoints": "3.369.0",
    "@aws-sdk/util-user-agent-browser": "3.369.0",
    "@aws-sdk/util-user-agent-node": "3.369.0",
    "@smithy/config-resolver": "^1.0.1",
    "@smithy/fetch-http-handler": "^1.0.1",
    "@smithy/hash-node": "^1.0.1",
    "@smithy/invalid-dependency": "^1.0.1",
    "@smithy/middleware-content-length": "^1.0.1",
    "@smithy/middleware-endpoint": "^1.0.1",
    "@smithy/middleware-retry": "^1.0.1",
    "@smithy/middleware-serde": "^1.0.1",
    "@smithy/middleware-stack": "^1.0.1",
    "@smithy/node-config-provider": "^1.0.1",
    "@smithy/node-http-handler": "^1.0.1",
    "@smithy/protocol-http": "^1.1.0",
    "@smithy/smithy-client": "^1.0.2",
    "@smithy/types": "^1.1.0",
    "@smithy/url-parser": "^1.0.1",
    "@smithy/util-base64": "^1.0.1",
    "@smithy/util-body-length-browser": "^1.0.1",
    "@smithy/util-body-length-node": "^1.0.1",
    "@smithy/util-defaults-mode-browser": "^1.0.1",
    "@smithy/util-defaults-mode-node": "^1.0.1",
    "@smithy/util-retry": "^1.0.1",
    "@smithy/util-utf8": "^1.0.1",
    "fast-xml-parser": "4.2.5",
    tslib: "^2.5.0"
  },
  devDependencies: {
    "@aws-sdk/service-client-documentation-generator": "3.310.0",
    "@smithy/service-client-documentation-generator": "^1.0.1",
    "@tsconfig/node14": "1.0.3",
    "@types/node": "^14.14.31",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typedoc: "0.23.23",
    typescript: "~4.9.5"
  },
  engines: {
    node: ">=14.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-sts"
  }
};

// node_modules/@aws-sdk/client-sts/dist-es/models/STSServiceException.js
var STSServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, STSServiceException.prototype);
  }
};
__name(STSServiceException, "STSServiceException");

// node_modules/@aws-sdk/client-sts/dist-es/models/models_0.js
var ExpiredTokenException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "ExpiredTokenException",
      $fault: "client",
      ...opts
    });
    this.name = "ExpiredTokenException";
    this.$fault = "client";
    Object.setPrototypeOf(this, ExpiredTokenException.prototype);
  }
};
__name(ExpiredTokenException, "ExpiredTokenException");
var MalformedPolicyDocumentException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "MalformedPolicyDocumentException",
      $fault: "client",
      ...opts
    });
    this.name = "MalformedPolicyDocumentException";
    this.$fault = "client";
    Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
  }
};
__name(MalformedPolicyDocumentException, "MalformedPolicyDocumentException");
var PackedPolicyTooLargeException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "PackedPolicyTooLargeException",
      $fault: "client",
      ...opts
    });
    this.name = "PackedPolicyTooLargeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
  }
};
__name(PackedPolicyTooLargeException, "PackedPolicyTooLargeException");
var RegionDisabledException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "RegionDisabledException",
      $fault: "client",
      ...opts
    });
    this.name = "RegionDisabledException";
    this.$fault = "client";
    Object.setPrototypeOf(this, RegionDisabledException.prototype);
  }
};
__name(RegionDisabledException, "RegionDisabledException");
var IDPRejectedClaimException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "IDPRejectedClaimException",
      $fault: "client",
      ...opts
    });
    this.name = "IDPRejectedClaimException";
    this.$fault = "client";
    Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
  }
};
__name(IDPRejectedClaimException, "IDPRejectedClaimException");
var InvalidIdentityTokenException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "InvalidIdentityTokenException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidIdentityTokenException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
  }
};
__name(InvalidIdentityTokenException, "InvalidIdentityTokenException");
var IDPCommunicationErrorException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "IDPCommunicationErrorException",
      $fault: "client",
      ...opts
    });
    this.name = "IDPCommunicationErrorException";
    this.$fault = "client";
    Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
  }
};
__name(IDPCommunicationErrorException, "IDPCommunicationErrorException");
var CredentialsFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }
}), "CredentialsFilterSensitiveLog");
var AssumeRoleResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
}), "AssumeRoleResponseFilterSensitiveLog");
var AssumeRoleWithWebIdentityRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.WebIdentityToken && { WebIdentityToken: SENSITIVE_STRING }
}), "AssumeRoleWithWebIdentityRequestFilterSensitiveLog");
var AssumeRoleWithWebIdentityResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
}), "AssumeRoleWithWebIdentityResponseFilterSensitiveLog");

// node_modules/@aws-sdk/client-sts/dist-es/protocols/Aws_query.js
var import_fast_xml_parser = __toESM(require_fxp());
var se_AssumeRoleCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_AssumeRoleRequest(input, context),
    Action: "AssumeRole",
    Version: "2011-06-15"
  });
  return buildHttpRpcRequest2(context, headers, "/", void 0, body);
}, "se_AssumeRoleCommand");
var se_AssumeRoleWithWebIdentityCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_AssumeRoleWithWebIdentityRequest(input, context),
    Action: "AssumeRoleWithWebIdentity",
    Version: "2011-06-15"
  });
  return buildHttpRpcRequest2(context, headers, "/", void 0, body);
}, "se_AssumeRoleWithWebIdentityCommand");
var de_AssumeRoleCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_AssumeRoleCommandError(output, context);
  }
  const data = await parseBody2(output.body, context);
  let contents = {};
  contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
  const response = {
    $metadata: deserializeMetadata3(output),
    ...contents
  };
  return response;
}, "de_AssumeRoleCommand");
var de_AssumeRoleCommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody2(output.body, context)
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazonaws.sts#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PackedPolicyTooLarge":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      throw await de_RegionDisabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError3({
        output,
        parsedBody: parsedBody.Error,
        errorCode
      });
  }
}, "de_AssumeRoleCommandError");
var de_AssumeRoleWithWebIdentityCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_AssumeRoleWithWebIdentityCommandError(output, context);
  }
  const data = await parseBody2(output.body, context);
  let contents = {};
  contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
  const response = {
    $metadata: deserializeMetadata3(output),
    ...contents
  };
  return response;
}, "de_AssumeRoleWithWebIdentityCommand");
var de_AssumeRoleWithWebIdentityCommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody2(output.body, context)
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazonaws.sts#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
    case "IDPCommunicationError":
    case "com.amazonaws.sts#IDPCommunicationErrorException":
      throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
    case "IDPRejectedClaim":
    case "com.amazonaws.sts#IDPRejectedClaimException":
      throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
    case "InvalidIdentityToken":
    case "com.amazonaws.sts#InvalidIdentityTokenException":
      throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PackedPolicyTooLarge":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      throw await de_RegionDisabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError3({
        output,
        parsedBody: parsedBody.Error,
        errorCode
      });
  }
}, "de_AssumeRoleWithWebIdentityCommandError");
var de_ExpiredTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_ExpiredTokenException(body.Error, context);
  const exception = new ExpiredTokenException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ExpiredTokenExceptionRes");
var de_IDPCommunicationErrorExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_IDPCommunicationErrorException(body.Error, context);
  const exception = new IDPCommunicationErrorException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_IDPCommunicationErrorExceptionRes");
var de_IDPRejectedClaimExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_IDPRejectedClaimException(body.Error, context);
  const exception = new IDPRejectedClaimException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_IDPRejectedClaimExceptionRes");
var de_InvalidIdentityTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidIdentityTokenException(body.Error, context);
  const exception = new InvalidIdentityTokenException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidIdentityTokenExceptionRes");
var de_MalformedPolicyDocumentExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_MalformedPolicyDocumentExceptionRes");
var de_PackedPolicyTooLargeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
  const exception = new PackedPolicyTooLargeException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_PackedPolicyTooLargeExceptionRes");
var de_RegionDisabledExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_RegionDisabledException(body.Error, context);
  const exception = new RegionDisabledException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_RegionDisabledExceptionRes");
var se_AssumeRoleRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input.RoleArn != null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.RoleSessionName != null) {
    entries["RoleSessionName"] = input.RoleSessionName;
  }
  if (input.PolicyArns != null) {
    const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
    if (input.PolicyArns?.length === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Policy != null) {
    entries["Policy"] = input.Policy;
  }
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TransitiveTagKeys != null) {
    const memberEntries = se_tagKeyListType(input.TransitiveTagKeys, context);
    if (input.TransitiveTagKeys?.length === 0) {
      entries.TransitiveTagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TransitiveTagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExternalId != null) {
    entries["ExternalId"] = input.ExternalId;
  }
  if (input.SerialNumber != null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.TokenCode != null) {
    entries["TokenCode"] = input.TokenCode;
  }
  if (input.SourceIdentity != null) {
    entries["SourceIdentity"] = input.SourceIdentity;
  }
  return entries;
}, "se_AssumeRoleRequest");
var se_AssumeRoleWithWebIdentityRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input.RoleArn != null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.RoleSessionName != null) {
    entries["RoleSessionName"] = input.RoleSessionName;
  }
  if (input.WebIdentityToken != null) {
    entries["WebIdentityToken"] = input.WebIdentityToken;
  }
  if (input.ProviderId != null) {
    entries["ProviderId"] = input.ProviderId;
  }
  if (input.PolicyArns != null) {
    const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
    if (input.PolicyArns?.length === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Policy != null) {
    entries["Policy"] = input.Policy;
  }
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  return entries;
}, "se_AssumeRoleWithWebIdentityRequest");
var se_policyDescriptorListType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_PolicyDescriptorType(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_policyDescriptorListType");
var se_PolicyDescriptorType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input.arn != null) {
    entries["arn"] = input.arn;
  }
  return entries;
}, "se_PolicyDescriptorType");
var se_Tag = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
}, "se_Tag");
var se_tagKeyListType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_tagKeyListType");
var se_tagListType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_tagListType");
var de_AssumedRoleUser = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["AssumedRoleId"] !== void 0) {
    contents.AssumedRoleId = expectString(output["AssumedRoleId"]);
  }
  if (output["Arn"] !== void 0) {
    contents.Arn = expectString(output["Arn"]);
  }
  return contents;
}, "de_AssumedRoleUser");
var de_AssumeRoleResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["Credentials"] !== void 0) {
    contents.Credentials = de_Credentials(output["Credentials"], context);
  }
  if (output["AssumedRoleUser"] !== void 0) {
    contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
  }
  if (output["PackedPolicySize"] !== void 0) {
    contents.PackedPolicySize = strictParseInt32(output["PackedPolicySize"]);
  }
  if (output["SourceIdentity"] !== void 0) {
    contents.SourceIdentity = expectString(output["SourceIdentity"]);
  }
  return contents;
}, "de_AssumeRoleResponse");
var de_AssumeRoleWithWebIdentityResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["Credentials"] !== void 0) {
    contents.Credentials = de_Credentials(output["Credentials"], context);
  }
  if (output["SubjectFromWebIdentityToken"] !== void 0) {
    contents.SubjectFromWebIdentityToken = expectString(output["SubjectFromWebIdentityToken"]);
  }
  if (output["AssumedRoleUser"] !== void 0) {
    contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
  }
  if (output["PackedPolicySize"] !== void 0) {
    contents.PackedPolicySize = strictParseInt32(output["PackedPolicySize"]);
  }
  if (output["Provider"] !== void 0) {
    contents.Provider = expectString(output["Provider"]);
  }
  if (output["Audience"] !== void 0) {
    contents.Audience = expectString(output["Audience"]);
  }
  if (output["SourceIdentity"] !== void 0) {
    contents.SourceIdentity = expectString(output["SourceIdentity"]);
  }
  return contents;
}, "de_AssumeRoleWithWebIdentityResponse");
var de_Credentials = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["AccessKeyId"] !== void 0) {
    contents.AccessKeyId = expectString(output["AccessKeyId"]);
  }
  if (output["SecretAccessKey"] !== void 0) {
    contents.SecretAccessKey = expectString(output["SecretAccessKey"]);
  }
  if (output["SessionToken"] !== void 0) {
    contents.SessionToken = expectString(output["SessionToken"]);
  }
  if (output["Expiration"] !== void 0) {
    contents.Expiration = expectNonNull(parseRfc3339DateTimeWithOffset(output["Expiration"]));
  }
  return contents;
}, "de_Credentials");
var de_ExpiredTokenException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_ExpiredTokenException");
var de_IDPCommunicationErrorException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_IDPCommunicationErrorException");
var de_IDPRejectedClaimException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_IDPRejectedClaimException");
var de_InvalidIdentityTokenException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_InvalidIdentityTokenException");
var de_MalformedPolicyDocumentException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_MalformedPolicyDocumentException");
var de_PackedPolicyTooLargeException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_PackedPolicyTooLargeException");
var de_RegionDisabledException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_RegionDisabledException");
var deserializeMetadata3 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var collectBodyString2 = /* @__PURE__ */ __name((streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
var throwDefaultError3 = withBaseException(STSServiceException);
var buildHttpRpcRequest2 = /* @__PURE__ */ __name(async (context, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new HttpRequest(contents);
}, "buildHttpRpcRequest");
var SHARED_HEADERS = {
  "content-type": "application/x-www-form-urlencoded"
};
var parseBody2 = /* @__PURE__ */ __name((streamBody, context) => collectBodyString2(streamBody, context).then((encoded) => {
  if (encoded.length) {
    const parser = new import_fast_xml_parser.XMLParser({
      attributeNamePrefix: "",
      htmlEntities: true,
      ignoreAttributes: false,
      ignoreDeclaration: true,
      parseTagValue: false,
      trimValues: false,
      tagValueProcessor: (_, val2) => val2.trim() === "" && val2.includes("\n") ? "" : void 0
    });
    parser.addEntity("#xD", "\r");
    parser.addEntity("#10", "\n");
    const parsedObj = parser.parse(encoded);
    const textNodeName = "#text";
    const key = Object.keys(parsedObj)[0];
    const parsedObjToReturn = parsedObj[key];
    if (parsedObjToReturn[textNodeName]) {
      parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
      delete parsedObjToReturn[textNodeName];
    }
    return getValueFromTextNode(parsedObjToReturn);
  }
  return {};
}), "parseBody");
var parseErrorBody2 = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseBody2(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
}, "parseErrorBody");
var buildFormUrlencodedString = /* @__PURE__ */ __name((formEntries) => Object.entries(formEntries).map(([key, value]) => extendedEncodeURIComponent(key) + "=" + extendedEncodeURIComponent(value)).join("&"), "buildFormUrlencodedString");
var loadQueryErrorCode = /* @__PURE__ */ __name((output, data) => {
  if (data.Error?.Code !== void 0) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
}, "loadQueryErrorCode");

// node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleCommand.js
var AssumeRoleCommand = class extends Command {
  static getEndpointParameterInstructions() {
    return {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  constructor(input) {
    super();
    this.input = input;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AssumeRoleCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const clientName = "STSClient";
    const commandName = "AssumeRoleCommand";
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_) => _,
      outputFilterSensitiveLog: AssumeRoleResponseFilterSensitiveLog
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return se_AssumeRoleCommand(input, context);
  }
  deserialize(output, context) {
    return de_AssumeRoleCommand(output, context);
  }
};
__name(AssumeRoleCommand, "AssumeRoleCommand");

// node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithWebIdentityCommand.js
var AssumeRoleWithWebIdentityCommand = class extends Command {
  static getEndpointParameterInstructions() {
    return {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  constructor(input) {
    super();
    this.input = input;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AssumeRoleWithWebIdentityCommand.getEndpointParameterInstructions()));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const clientName = "STSClient";
    const commandName = "AssumeRoleWithWebIdentityCommand";
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssumeRoleWithWebIdentityResponseFilterSensitiveLog
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return se_AssumeRoleWithWebIdentityCommand(input, context);
  }
  deserialize(output, context) {
    return de_AssumeRoleWithWebIdentityCommand(output, context);
  }
};
__name(AssumeRoleWithWebIdentityCommand, "AssumeRoleWithWebIdentityCommand");

// node_modules/@aws-sdk/client-sts/dist-es/defaultStsRoleAssumers.js
var ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
var decorateDefaultRegion = /* @__PURE__ */ __name((region) => {
  if (typeof region !== "function") {
    return region === void 0 ? ASSUME_ROLE_DEFAULT_REGION : region;
  }
  return async () => {
    try {
      return await region();
    } catch (e5) {
      return ASSUME_ROLE_DEFAULT_REGION;
    }
  };
}, "decorateDefaultRegion");
var getDefaultRoleAssumer = /* @__PURE__ */ __name((stsOptions, stsClientCtor) => {
  let stsClient;
  let closureSourceCreds;
  return async (sourceCreds, params) => {
    closureSourceCreds = sourceCreds;
    if (!stsClient) {
      const { logger: logger2, region, requestHandler } = stsOptions;
      stsClient = new stsClientCtor({
        logger: logger2,
        credentialDefaultProvider: () => async () => closureSourceCreds,
        region: decorateDefaultRegion(region || stsOptions.region),
        ...requestHandler ? { requestHandler } : {}
      });
    }
    const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
      throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
    }
    return {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      expiration: Credentials.Expiration
    };
  };
}, "getDefaultRoleAssumer");
var getDefaultRoleAssumerWithWebIdentity = /* @__PURE__ */ __name((stsOptions, stsClientCtor) => {
  let stsClient;
  return async (params) => {
    if (!stsClient) {
      const { logger: logger2, region, requestHandler } = stsOptions;
      stsClient = new stsClientCtor({
        logger: logger2,
        region: decorateDefaultRegion(region || stsOptions.region),
        ...requestHandler ? { requestHandler } : {}
      });
    }
    const { Credentials } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
      throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
    }
    return {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      expiration: Credentials.Expiration
    };
  };
}, "getDefaultRoleAssumerWithWebIdentity");
var decorateDefaultCredentialProvider = /* @__PURE__ */ __name((provider) => (input) => provider({
  roleAssumer: getDefaultRoleAssumer(input, input.stsClientCtor),
  roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input, input.stsClientCtor),
  ...input
}), "decorateDefaultCredentialProvider");

// node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js
var ENV_KEY = "AWS_ACCESS_KEY_ID";
var ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
var ENV_SESSION = "AWS_SESSION_TOKEN";
var ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
var fromEnv = /* @__PURE__ */ __name(() => async () => {
  const accessKeyId = process.env[ENV_KEY];
  const secretAccessKey = process.env[ENV_SECRET];
  const sessionToken = process.env[ENV_SESSION];
  const expiry = process.env[ENV_EXPIRATION];
  if (accessKeyId && secretAccessKey) {
    return {
      accessKeyId,
      secretAccessKey,
      ...sessionToken && { sessionToken },
      ...expiry && { expiration: new Date(expiry) }
    };
  }
  throw new CredentialsProviderError("Unable to find environment variable credentials.");
}, "fromEnv");

// node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js
import { homedir } from "os";
import { sep } from "path";
var getHomeDir = /* @__PURE__ */ __name(() => {
  const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${sep}` } = process.env;
  if (HOME)
    return HOME;
  if (USERPROFILE)
    return USERPROFILE;
  if (HOMEPATH)
    return `${HOMEDRIVE}${HOMEPATH}`;
  return homedir();
}, "getHomeDir");

// node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js
var ENV_PROFILE = "AWS_PROFILE";
var DEFAULT_PROFILE = "default";
var getProfileName = /* @__PURE__ */ __name((init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE, "getProfileName");

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js
import { createHash } from "crypto";
import { join } from "path";
var getSSOTokenFilepath = /* @__PURE__ */ __name((id) => {
  const hasher = createHash("sha1");
  const cacheName = hasher.update(id).digest("hex");
  return join(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
}, "getSSOTokenFilepath");

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js
import { promises as fsPromises } from "fs";
var { readFile } = fsPromises;
var getSSOTokenFromFile = /* @__PURE__ */ __name(async (id) => {
  const ssoTokenFilepath = getSSOTokenFilepath(id);
  const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
  return JSON.parse(ssoTokenText);
}, "getSSOTokenFromFile");

// node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js
import { join as join2 } from "path";
var ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
var getConfigFilepath = /* @__PURE__ */ __name(() => process.env[ENV_CONFIG_PATH] || join2(getHomeDir(), ".aws", "config"), "getConfigFilepath");

// node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js
import { join as join3 } from "path";
var ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
var getCredentialsFilepath = /* @__PURE__ */ __name(() => process.env[ENV_CREDENTIALS_PATH] || join3(getHomeDir(), ".aws", "credentials"), "getCredentialsFilepath");

// node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileData.js
var profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;
var getProfileData = /* @__PURE__ */ __name((data) => Object.entries(data).filter(([key]) => profileKeyRegex.test(key)).reduce((acc, [key, value]) => ({ ...acc, [profileKeyRegex.exec(key)[2]]: value }), {
  ...data.default && { default: data.default }
}), "getProfileData");

// node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js
var profileNameBlockList = ["__proto__", "profile __proto__"];
var parseIni = /* @__PURE__ */ __name((iniData) => {
  const map2 = {};
  let currentSection;
  for (let line of iniData.split(/\r?\n/)) {
    line = line.split(/(^|\s)[;#]/)[0].trim();
    const isSection = line[0] === "[" && line[line.length - 1] === "]";
    if (isSection) {
      currentSection = line.substring(1, line.length - 1);
      if (profileNameBlockList.includes(currentSection)) {
        throw new Error(`Found invalid profile name "${currentSection}"`);
      }
    } else if (currentSection) {
      const indexOfEqualsSign = line.indexOf("=");
      const start = 0;
      const end = line.length - 1;
      const isAssignment = indexOfEqualsSign !== -1 && indexOfEqualsSign !== start && indexOfEqualsSign !== end;
      if (isAssignment) {
        const [name, value] = [
          line.substring(0, indexOfEqualsSign).trim(),
          line.substring(indexOfEqualsSign + 1).trim()
        ];
        map2[currentSection] = map2[currentSection] || {};
        map2[currentSection][name] = value;
      }
    }
  }
  return map2;
}, "parseIni");

// node_modules/@smithy/shared-ini-file-loader/dist-es/slurpFile.js
import { promises as fsPromises2 } from "fs";
var { readFile: readFile2 } = fsPromises2;
var filePromisesHash = {};
var slurpFile = /* @__PURE__ */ __name((path, options) => {
  if (!filePromisesHash[path] || options?.ignoreCache) {
    filePromisesHash[path] = readFile2(path, "utf8");
  }
  return filePromisesHash[path];
}, "slurpFile");

// node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js
var swallowError = /* @__PURE__ */ __name(() => ({}), "swallowError");
var loadSharedConfigFiles = /* @__PURE__ */ __name(async (init = {}) => {
  const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
  const parsedFiles = await Promise.all([
    slurpFile(configFilepath, {
      ignoreCache: init.ignoreCache
    }).then(parseIni).then(getProfileData).catch(swallowError),
    slurpFile(filepath, {
      ignoreCache: init.ignoreCache
    }).then(parseIni).catch(swallowError)
  ]);
  return {
    configFile: parsedFiles[0],
    credentialsFile: parsedFiles[1]
  };
}, "loadSharedConfigFiles");

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js
var ssoSessionKeyRegex = /^sso-session\s(["'])?([^\1]+)\1$/;
var getSsoSessionData = /* @__PURE__ */ __name((data) => Object.entries(data).filter(([key]) => ssoSessionKeyRegex.test(key)).reduce((acc, [key, value]) => ({ ...acc, [ssoSessionKeyRegex.exec(key)[2]]: value }), {}), "getSsoSessionData");

// node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js
var swallowError2 = /* @__PURE__ */ __name(() => ({}), "swallowError");
var loadSsoSessionData = /* @__PURE__ */ __name(async (init = {}) => slurpFile(init.configFilepath ?? getConfigFilepath()).then(parseIni).then(getSsoSessionData).catch(swallowError2), "loadSsoSessionData");

// node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js
var mergeConfigFiles = /* @__PURE__ */ __name((...files) => {
  const merged = {};
  for (const file of files) {
    for (const [key, values] of Object.entries(file)) {
      if (merged[key] !== void 0) {
        Object.assign(merged[key], values);
      } else {
        merged[key] = values;
      }
    }
  }
  return merged;
}, "mergeConfigFiles");

// node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js
var parseKnownFiles = /* @__PURE__ */ __name(async (init) => {
  const parsedFiles = await loadSharedConfigFiles(init);
  return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
}, "parseKnownFiles");

// node_modules/@smithy/credential-provider-imds/dist-es/fromContainerMetadata.js
import { parse } from "url";

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/httpRequest.js
import { Buffer as Buffer3 } from "buffer";
import { request } from "http";
function httpRequest(options) {
  return new Promise((resolve, reject) => {
    const req = request({
      method: "GET",
      ...options,
      hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1")
    });
    req.on("error", (err) => {
      reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
      req.destroy();
    });
    req.on("timeout", () => {
      reject(new ProviderError("TimeoutError from instance metadata service"));
      req.destroy();
    });
    req.on("response", (res) => {
      const { statusCode = 400 } = res;
      if (statusCode < 200 || 300 <= statusCode) {
        reject(Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode }));
        req.destroy();
      }
      const chunks = [];
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });
      res.on("end", () => {
        resolve(Buffer3.concat(chunks));
        req.destroy();
      });
    });
    req.end();
  });
}
__name(httpRequest, "httpRequest");

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js
var isImdsCredentials = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.AccessKeyId === "string" && typeof arg.SecretAccessKey === "string" && typeof arg.Token === "string" && typeof arg.Expiration === "string", "isImdsCredentials");
var fromImdsCredentials = /* @__PURE__ */ __name((creds) => ({
  accessKeyId: creds.AccessKeyId,
  secretAccessKey: creds.SecretAccessKey,
  sessionToken: creds.Token,
  expiration: new Date(creds.Expiration)
}), "fromImdsCredentials");

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js
var DEFAULT_TIMEOUT = 1e3;
var DEFAULT_MAX_RETRIES = 0;
var providerConfigFromInit = /* @__PURE__ */ __name(({ maxRetries = DEFAULT_MAX_RETRIES, timeout = DEFAULT_TIMEOUT }) => ({ maxRetries, timeout }), "providerConfigFromInit");

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/retry.js
var retry = /* @__PURE__ */ __name((toRetry, maxRetries) => {
  let promise = toRetry();
  for (let i5 = 0; i5 < maxRetries; i5++) {
    promise = promise.catch(toRetry);
  }
  return promise;
}, "retry");

// node_modules/@smithy/credential-provider-imds/dist-es/fromContainerMetadata.js
var ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
var ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
var ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
var fromContainerMetadata = /* @__PURE__ */ __name((init = {}) => {
  const { timeout, maxRetries } = providerConfigFromInit(init);
  return () => retry(async () => {
    const requestOptions = await getCmdsUri();
    const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
    if (!isImdsCredentials(credsResponse)) {
      throw new CredentialsProviderError("Invalid response received from instance metadata service.");
    }
    return fromImdsCredentials(credsResponse);
  }, maxRetries);
}, "fromContainerMetadata");
var requestFromEcsImds = /* @__PURE__ */ __name(async (timeout, options) => {
  if (process.env[ENV_CMDS_AUTH_TOKEN]) {
    options.headers = {
      ...options.headers,
      Authorization: process.env[ENV_CMDS_AUTH_TOKEN]
    };
  }
  const buffer = await httpRequest({
    ...options,
    timeout
  });
  return buffer.toString();
}, "requestFromEcsImds");
var CMDS_IP = "169.254.170.2";
var GREENGRASS_HOSTS = {
  localhost: true,
  "127.0.0.1": true
};
var GREENGRASS_PROTOCOLS = {
  "http:": true,
  "https:": true
};
var getCmdsUri = /* @__PURE__ */ __name(async () => {
  if (process.env[ENV_CMDS_RELATIVE_URI]) {
    return {
      hostname: CMDS_IP,
      path: process.env[ENV_CMDS_RELATIVE_URI]
    };
  }
  if (process.env[ENV_CMDS_FULL_URI]) {
    const parsed = parse(process.env[ENV_CMDS_FULL_URI]);
    if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
      throw new CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, false);
    }
    if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
      throw new CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, false);
    }
    return {
      ...parsed,
      port: parsed.port ? parseInt(parsed.port, 10) : void 0
    };
  }
  throw new CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`, false);
}, "getCmdsUri");

// node_modules/@smithy/node-config-provider/dist-es/fromEnv.js
var fromEnv2 = /* @__PURE__ */ __name((envVarSelector) => async () => {
  try {
    const config = envVarSelector(process.env);
    if (config === void 0) {
      throw new Error();
    }
    return config;
  } catch (e5) {
    throw new CredentialsProviderError(e5.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
  }
}, "fromEnv");

// node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js
var fromSharedConfigFiles = /* @__PURE__ */ __name((configSelector, { preferredFile = "config", ...init } = {}) => async () => {
  const profile = getProfileName(init);
  const { configFile, credentialsFile } = await loadSharedConfigFiles(init);
  const profileFromCredentials = credentialsFile[profile] || {};
  const profileFromConfig = configFile[profile] || {};
  const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
  try {
    const configValue = configSelector(mergedProfile);
    if (configValue === void 0) {
      throw new Error();
    }
    return configValue;
  } catch (e5) {
    throw new CredentialsProviderError(e5.message || `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);
  }
}, "fromSharedConfigFiles");

// node_modules/@smithy/node-config-provider/dist-es/fromStatic.js
var isFunction = /* @__PURE__ */ __name((func) => typeof func === "function", "isFunction");
var fromStatic2 = /* @__PURE__ */ __name((defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : fromStatic(defaultValue), "fromStatic");

// node_modules/@smithy/node-config-provider/dist-es/configLoader.js
var loadConfig = /* @__PURE__ */ __name(({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => memoize(chain(fromEnv2(environmentVariableSelector), fromSharedConfigFiles(configFileSelector, configuration), fromStatic2(defaultValue))), "loadConfig");

// node_modules/@smithy/credential-provider-imds/dist-es/config/Endpoint.js
var Endpoint;
(function(Endpoint2) {
  Endpoint2["IPv4"] = "http://169.254.169.254";
  Endpoint2["IPv6"] = "http://[fd00:ec2::254]";
})(Endpoint || (Endpoint = {}));

// node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointConfigOptions.js
var ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
var CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
var ENDPOINT_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => env2[ENV_ENDPOINT_NAME],
  configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
  default: void 0
};

// node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointMode.js
var EndpointMode;
(function(EndpointMode2) {
  EndpointMode2["IPv4"] = "IPv4";
  EndpointMode2["IPv6"] = "IPv6";
})(EndpointMode || (EndpointMode = {}));

// node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js
var ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
var CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
var ENDPOINT_MODE_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => env2[ENV_ENDPOINT_MODE_NAME],
  configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
  default: EndpointMode.IPv4
};

// node_modules/@smithy/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js
var getInstanceMetadataEndpoint = /* @__PURE__ */ __name(async () => parseUrl(await getFromEndpointConfig() || await getFromEndpointModeConfig()), "getInstanceMetadataEndpoint");
var getFromEndpointConfig = /* @__PURE__ */ __name(async () => loadConfig(ENDPOINT_CONFIG_OPTIONS)(), "getFromEndpointConfig");
var getFromEndpointModeConfig = /* @__PURE__ */ __name(async () => {
  const endpointMode = await loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)();
  switch (endpointMode) {
    case EndpointMode.IPv4:
      return Endpoint.IPv4;
    case EndpointMode.IPv6:
      return Endpoint.IPv6;
    default:
      throw new Error(`Unsupported endpoint mode: ${endpointMode}. Select from ${Object.values(EndpointMode)}`);
  }
}, "getFromEndpointModeConfig");

// node_modules/@smithy/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js
var STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
var STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
var STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
var getExtendedInstanceMetadataCredentials = /* @__PURE__ */ __name((credentials, logger2) => {
  const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS + Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
  const newExpiration = new Date(Date.now() + refreshInterval * 1e3);
  logger2.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.\nFor more information, please visit: " + STATIC_STABILITY_DOC_URL);
  const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
  return {
    ...credentials,
    ...originalExpiration ? { originalExpiration } : {},
    expiration: newExpiration
  };
}, "getExtendedInstanceMetadataCredentials");

// node_modules/@smithy/credential-provider-imds/dist-es/utils/staticStabilityProvider.js
var staticStabilityProvider = /* @__PURE__ */ __name((provider, options = {}) => {
  const logger2 = options?.logger || console;
  let pastCredentials;
  return async () => {
    let credentials;
    try {
      credentials = await provider();
      if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
        credentials = getExtendedInstanceMetadataCredentials(credentials, logger2);
      }
    } catch (e5) {
      if (pastCredentials) {
        logger2.warn("Credential renew failed: ", e5);
        credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger2);
      } else {
        throw e5;
      }
    }
    pastCredentials = credentials;
    return credentials;
  };
}, "staticStabilityProvider");

// node_modules/@smithy/credential-provider-imds/dist-es/fromInstanceMetadata.js
var IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
var IMDS_TOKEN_PATH = "/latest/api/token";
var fromInstanceMetadata = /* @__PURE__ */ __name((init = {}) => staticStabilityProvider(getInstanceImdsProvider(init), { logger: init.logger }), "fromInstanceMetadata");
var getInstanceImdsProvider = /* @__PURE__ */ __name((init) => {
  let disableFetchToken = false;
  const { timeout, maxRetries } = providerConfigFromInit(init);
  const getCredentials = /* @__PURE__ */ __name(async (maxRetries2, options) => {
    const profile = (await retry(async () => {
      let profile2;
      try {
        profile2 = await getProfile(options);
      } catch (err) {
        if (err.statusCode === 401) {
          disableFetchToken = false;
        }
        throw err;
      }
      return profile2;
    }, maxRetries2)).trim();
    return retry(async () => {
      let creds;
      try {
        creds = await getCredentialsFromProfile(profile, options);
      } catch (err) {
        if (err.statusCode === 401) {
          disableFetchToken = false;
        }
        throw err;
      }
      return creds;
    }, maxRetries2);
  }, "getCredentials");
  return async () => {
    const endpoint = await getInstanceMetadataEndpoint();
    if (disableFetchToken) {
      return getCredentials(maxRetries, { ...endpoint, timeout });
    } else {
      let token;
      try {
        token = (await getMetadataToken({ ...endpoint, timeout })).toString();
      } catch (error) {
        if (error?.statusCode === 400) {
          throw Object.assign(error, {
            message: "EC2 Metadata token request returned error"
          });
        } else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
          disableFetchToken = true;
        }
        return getCredentials(maxRetries, { ...endpoint, timeout });
      }
      return getCredentials(maxRetries, {
        ...endpoint,
        headers: {
          "x-aws-ec2-metadata-token": token
        },
        timeout
      });
    }
  };
}, "getInstanceImdsProvider");
var getMetadataToken = /* @__PURE__ */ __name(async (options) => httpRequest({
  ...options,
  path: IMDS_TOKEN_PATH,
  method: "PUT",
  headers: {
    "x-aws-ec2-metadata-token-ttl-seconds": "21600"
  }
}), "getMetadataToken");
var getProfile = /* @__PURE__ */ __name(async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString(), "getProfile");
var getCredentialsFromProfile = /* @__PURE__ */ __name(async (profile, options) => {
  const credsResponse = JSON.parse((await httpRequest({
    ...options,
    path: IMDS_PATH + profile
  })).toString());
  if (!isImdsCredentials(credsResponse)) {
    throw new CredentialsProviderError("Invalid response received from instance metadata service.");
  }
  return fromImdsCredentials(credsResponse);
}, "getCredentialsFromProfile");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js
var resolveCredentialSource = /* @__PURE__ */ __name((credentialSource, profileName) => {
  const sourceProvidersMap = {
    EcsContainer: fromContainerMetadata,
    Ec2InstanceMetadata: fromInstanceMetadata,
    Environment: fromEnv
  };
  if (credentialSource in sourceProvidersMap) {
    return sourceProvidersMap[credentialSource]();
  } else {
    throw new CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`);
  }
}, "resolveCredentialSource");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js
var isAssumeRoleProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg)), "isAssumeRoleProfile");
var isAssumeRoleWithSourceProfile = /* @__PURE__ */ __name((arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined", "isAssumeRoleWithSourceProfile");
var isAssumeRoleWithProviderProfile = /* @__PURE__ */ __name((arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined", "isAssumeRoleWithProviderProfile");
var resolveAssumeRoleCredentials = /* @__PURE__ */ __name(async (profileName, profiles, options, visitedProfiles = {}) => {
  const data = profiles[profileName];
  if (!options.roleAssumer) {
    throw new CredentialsProviderError(`Profile ${profileName} requires a role to be assumed, but no role assumption callback was provided.`, false);
  }
  const { source_profile } = data;
  if (source_profile && source_profile in visitedProfiles) {
    throw new CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${getProfileName(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "), false);
  }
  const sourceCredsProvider = source_profile ? resolveProfileData(source_profile, profiles, options, {
    ...visitedProfiles,
    [source_profile]: true
  }) : resolveCredentialSource(data.credential_source, profileName)();
  const params = {
    RoleArn: data.role_arn,
    RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
    ExternalId: data.external_id
  };
  const { mfa_serial } = data;
  if (mfa_serial) {
    if (!options.mfaCodeProvider) {
      throw new CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, false);
    }
    params.SerialNumber = mfa_serial;
    params.TokenCode = await options.mfaCodeProvider(mfa_serial);
  }
  const sourceCreds = await sourceCredsProvider;
  return options.roleAssumer(sourceCreds, params);
}, "resolveAssumeRoleCredentials");

// node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js
import { exec } from "child_process";
import { promisify } from "util";

// node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js
var getValidatedProcessCredentials = /* @__PURE__ */ __name((profileName, data) => {
  if (data.Version !== 1) {
    throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
  }
  if (data.AccessKeyId === void 0 || data.SecretAccessKey === void 0) {
    throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
  }
  if (data.Expiration) {
    const currentTime = new Date();
    const expireTime = new Date(data.Expiration);
    if (expireTime < currentTime) {
      throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
    }
  }
  return {
    accessKeyId: data.AccessKeyId,
    secretAccessKey: data.SecretAccessKey,
    ...data.SessionToken && { sessionToken: data.SessionToken },
    ...data.Expiration && { expiration: new Date(data.Expiration) }
  };
}, "getValidatedProcessCredentials");

// node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js
var resolveProcessCredentials = /* @__PURE__ */ __name(async (profileName, profiles) => {
  const profile = profiles[profileName];
  if (profiles[profileName]) {
    const credentialProcess = profile["credential_process"];
    if (credentialProcess !== void 0) {
      const execPromise = promisify(exec);
      try {
        const { stdout } = await execPromise(credentialProcess);
        let data;
        try {
          data = JSON.parse(stdout.trim());
        } catch {
          throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
        }
        return getValidatedProcessCredentials(profileName, data);
      } catch (error) {
        throw new CredentialsProviderError(error.message);
      }
    } else {
      throw new CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`);
    }
  } else {
    throw new CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
  }
}, "resolveProcessCredentials");

// node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js
var fromProcess = /* @__PURE__ */ __name((init = {}) => async () => {
  const profiles = await parseKnownFiles(init);
  return resolveProcessCredentials(getProfileName(init), profiles);
}, "fromProcess");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js
var isProcessProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string", "isProcessProfile");
var resolveProcessCredentials2 = /* @__PURE__ */ __name(async (options, profile) => fromProcess({
  ...options,
  profile
})(), "resolveProcessCredentials");

// node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js
var isSsoProfile = /* @__PURE__ */ __name((arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string"), "isSsoProfile");

// node_modules/@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters3 = /* @__PURE__ */ __name((options) => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "awsssoportal"
  };
}, "resolveClientEndpointParameters");

// node_modules/@aws-sdk/client-sso/package.json
var package_default3 = {
  name: "@aws-sdk/client-sso",
  description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
  version: "3.369.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:docs": "typedoc",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "3.0.0",
    "@aws-crypto/sha256-js": "3.0.0",
    "@aws-sdk/middleware-host-header": "3.369.0",
    "@aws-sdk/middleware-logger": "3.369.0",
    "@aws-sdk/middleware-recursion-detection": "3.369.0",
    "@aws-sdk/middleware-user-agent": "3.369.0",
    "@aws-sdk/types": "3.369.0",
    "@aws-sdk/util-endpoints": "3.369.0",
    "@aws-sdk/util-user-agent-browser": "3.369.0",
    "@aws-sdk/util-user-agent-node": "3.369.0",
    "@smithy/config-resolver": "^1.0.1",
    "@smithy/fetch-http-handler": "^1.0.1",
    "@smithy/hash-node": "^1.0.1",
    "@smithy/invalid-dependency": "^1.0.1",
    "@smithy/middleware-content-length": "^1.0.1",
    "@smithy/middleware-endpoint": "^1.0.1",
    "@smithy/middleware-retry": "^1.0.2",
    "@smithy/middleware-serde": "^1.0.1",
    "@smithy/middleware-stack": "^1.0.1",
    "@smithy/node-config-provider": "^1.0.1",
    "@smithy/node-http-handler": "^1.0.2",
    "@smithy/protocol-http": "^1.0.1",
    "@smithy/smithy-client": "^1.0.3",
    "@smithy/types": "^1.1.0",
    "@smithy/url-parser": "^1.0.1",
    "@smithy/util-base64": "^1.0.1",
    "@smithy/util-body-length-browser": "^1.0.1",
    "@smithy/util-body-length-node": "^1.0.1",
    "@smithy/util-defaults-mode-browser": "^1.0.1",
    "@smithy/util-defaults-mode-node": "^1.0.1",
    "@smithy/util-retry": "^1.0.2",
    "@smithy/util-utf8": "^1.0.1",
    tslib: "^2.5.0"
  },
  devDependencies: {
    "@aws-sdk/service-client-documentation-generator": "3.310.0",
    "@smithy/service-client-documentation-generator": "^1.0.1",
    "@tsconfig/node14": "1.0.3",
    "@types/node": "^14.14.31",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typedoc: "0.23.23",
    typescript: "~4.9.5"
  },
  engines: {
    node: ">=14.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-sso"
  }
};

// node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js
import { platform, release } from "os";
import { env, versions } from "process";

// node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js
var isCrtAvailable = /* @__PURE__ */ __name(() => {
  try {
    if (typeof __require === "function" && typeof module !== "undefined" && require_dist()) {
      return ["md/crt-avail"];
    }
    return null;
  } catch (e5) {
    return null;
  }
}, "isCrtAvailable");

// node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js
var UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
var UA_APP_ID_INI_NAME = "sdk-ua-app-id";
var defaultUserAgent = /* @__PURE__ */ __name(({ serviceId, clientVersion }) => {
  const sections = [
    ["aws-sdk-js", clientVersion],
    ["ua", "2.0"],
    [`os/${platform()}`, release()],
    ["lang/js"],
    ["md/nodejs", `${versions.node}`]
  ];
  const crtAvailable = isCrtAvailable();
  if (crtAvailable) {
    sections.push(crtAvailable);
  }
  if (serviceId) {
    sections.push([`api/${serviceId}`, clientVersion]);
  }
  if (env.AWS_EXECUTION_ENV) {
    sections.push([`exec-env/${env.AWS_EXECUTION_ENV}`]);
  }
  const appIdPromise = loadConfig({
    environmentVariableSelector: (env2) => env2[UA_APP_ID_ENV_NAME],
    configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
    default: void 0
  })();
  let resolvedUserAgent = void 0;
  return async () => {
    if (!resolvedUserAgent) {
      const appId = await appIdPromise;
      resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
    }
    return resolvedUserAgent;
  };
}, "defaultUserAgent");

// node_modules/@smithy/hash-node/dist-es/index.js
import { Buffer as Buffer4 } from "buffer";
import { createHash as createHash2, createHmac } from "crypto";
var Hash = class {
  constructor(algorithmIdentifier, secret) {
    this.algorithmIdentifier = algorithmIdentifier;
    this.secret = secret;
    this.reset();
  }
  update(toHash, encoding) {
    this.hash.update(toUint8Array(castSourceData(toHash, encoding)));
  }
  digest() {
    return Promise.resolve(this.hash.digest());
  }
  reset() {
    this.hash = this.secret ? createHmac(this.algorithmIdentifier, castSourceData(this.secret)) : createHash2(this.algorithmIdentifier);
  }
};
__name(Hash, "Hash");
function castSourceData(toCast, encoding) {
  if (Buffer4.isBuffer(toCast)) {
    return toCast;
  }
  if (typeof toCast === "string") {
    return fromString(toCast, encoding);
  }
  if (ArrayBuffer.isView(toCast)) {
    return fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
  }
  return fromArrayBuffer(toCast);
}
__name(castSourceData, "castSourceData");

// node_modules/@smithy/util-body-length-node/dist-es/calculateBodyLength.js
import { fstatSync, lstatSync } from "fs";
var calculateBodyLength = /* @__PURE__ */ __name((body) => {
  if (!body) {
    return 0;
  }
  if (typeof body === "string") {
    return Buffer.from(body).length;
  } else if (typeof body.byteLength === "number") {
    return body.byteLength;
  } else if (typeof body.size === "number") {
    return body.size;
  } else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
    return lstatSync(body.path).size;
  } else if (typeof body.fd === "number") {
    return fstatSync(body.fd).size;
  }
  throw new Error(`Body Length computation failed for ${body}`);
}, "calculateBodyLength");

// node_modules/@aws-sdk/client-sso/dist-es/endpoint/ruleset.js
var p = "required";
var q = "fn";
var r = "argv";
var s = "ref";
var a = "PartitionResult";
var b = "tree";
var c = "error";
var d = "endpoint";
var e = { [p]: false, "type": "String" };
var f = { [p]: true, "default": false, "type": "Boolean" };
var g = { [s]: "Endpoint" };
var h = { [q]: "booleanEquals", [r]: [{ [s]: "UseFIPS" }, true] };
var i = { [q]: "booleanEquals", [r]: [{ [s]: "UseDualStack" }, true] };
var j = {};
var k = { [q]: "booleanEquals", [r]: [true, { [q]: "getAttr", [r]: [{ [s]: a }, "supportsFIPS"] }] };
var l = { [q]: "booleanEquals", [r]: [true, { [q]: "getAttr", [r]: [{ [s]: a }, "supportsDualStack"] }] };
var m = [g];
var n = [h];
var o = [i];
var _data = { version: "1.0", parameters: { Region: e, UseDualStack: f, UseFIPS: f, Endpoint: e }, rules: [{ conditions: [{ [q]: "aws.partition", [r]: [{ [s]: "Region" }], assign: a }], type: b, rules: [{ conditions: [{ [q]: "isSet", [r]: m }, { [q]: "parseURL", [r]: m, assign: "url" }], type: b, rules: [{ conditions: n, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: c }, { type: b, rules: [{ conditions: o, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: c }, { endpoint: { url: g, properties: j, headers: j }, type: d }] }] }, { conditions: [h, i], type: b, rules: [{ conditions: [k, l], type: b, rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j, headers: j }, type: d }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: c }] }, { conditions: n, type: b, rules: [{ conditions: [k], type: b, rules: [{ type: b, rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: j, headers: j }, type: d }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: c }] }, { conditions: o, type: b, rules: [{ conditions: [l], type: b, rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j, headers: j }, type: d }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: c }] }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: j, headers: j }, type: d }] }] };
var ruleSet = _data;

// node_modules/@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver = /* @__PURE__ */ __name((endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet, {
    endpointParams,
    logger: context.logger
  });
}, "defaultEndpointResolver");

// node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js
var getRuntimeConfig = /* @__PURE__ */ __name((config) => ({
  apiVersion: "2019-06-10",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "SSO",
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf84,
  utf8Encoder: config?.utf8Encoder ?? toUtf84
}), "getRuntimeConfig");

// node_modules/@smithy/util-defaults-mode-node/dist-es/constants.js
var AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
var AWS_REGION_ENV = "AWS_REGION";
var AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
var IMDS_REGION_PATH = "/latest/meta-data/placement/region";

// node_modules/@smithy/util-defaults-mode-node/dist-es/defaultsModeConfig.js
var AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
var AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
var NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => {
    return env2[AWS_DEFAULTS_MODE_ENV];
  },
  configFileSelector: (profile) => {
    return profile[AWS_DEFAULTS_MODE_CONFIG];
  },
  default: "legacy"
};

// node_modules/@smithy/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js
var resolveDefaultsModeConfig = /* @__PURE__ */ __name(({ region = loadConfig(NODE_REGION_CONFIG_OPTIONS), defaultsMode = loadConfig(NODE_DEFAULTS_MODE_CONFIG_OPTIONS) } = {}) => memoize(async () => {
  const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
  switch (mode?.toLowerCase()) {
    case "auto":
      return resolveNodeDefaultsModeAuto(region);
    case "in-region":
    case "cross-region":
    case "mobile":
    case "standard":
    case "legacy":
      return Promise.resolve(mode?.toLocaleLowerCase());
    case void 0:
      return Promise.resolve("legacy");
    default:
      throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
  }
}), "resolveDefaultsModeConfig");
var resolveNodeDefaultsModeAuto = /* @__PURE__ */ __name(async (clientRegion) => {
  if (clientRegion) {
    const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
    const inferredRegion = await inferPhysicalRegion();
    if (!inferredRegion) {
      return "standard";
    }
    if (resolvedRegion === inferredRegion) {
      return "in-region";
    } else {
      return "cross-region";
    }
  }
  return "standard";
}, "resolveNodeDefaultsModeAuto");
var inferPhysicalRegion = /* @__PURE__ */ __name(async () => {
  if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
    return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
  }
  if (!process.env[ENV_IMDS_DISABLED]) {
    try {
      const endpoint = await getInstanceMetadataEndpoint();
      return (await httpRequest({ ...endpoint, path: IMDS_REGION_PATH })).toString();
    } catch (e5) {
    }
  }
}, "inferPhysicalRegion");

// node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.js
var getRuntimeConfig2 = /* @__PURE__ */ __name((config) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default3.version }),
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
    }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-sso/dist-es/SSOClient.js
var SSOClient = class extends Client {
  constructor(configuration) {
    const _config_0 = getRuntimeConfig2(configuration);
    const _config_1 = resolveClientEndpointParameters3(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};
__name(SSOClient, "SSOClient");

// node_modules/@aws-sdk/client-sso/dist-es/models/SSOServiceException.js
var SSOServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, SSOServiceException.prototype);
  }
};
__name(SSOServiceException, "SSOServiceException");

// node_modules/@aws-sdk/client-sso/dist-es/models/models_0.js
var InvalidRequestException = class extends SSOServiceException {
  constructor(opts) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidRequestException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
};
__name(InvalidRequestException, "InvalidRequestException");
var ResourceNotFoundException2 = class extends SSOServiceException {
  constructor(opts) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "ResourceNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, ResourceNotFoundException2.prototype);
  }
};
__name(ResourceNotFoundException2, "ResourceNotFoundException");
var TooManyRequestsException = class extends SSOServiceException {
  constructor(opts) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts
    });
    this.name = "TooManyRequestsException";
    this.$fault = "client";
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
};
__name(TooManyRequestsException, "TooManyRequestsException");
var UnauthorizedException = class extends SSOServiceException {
  constructor(opts) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts
    });
    this.name = "UnauthorizedException";
    this.$fault = "client";
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
};
__name(UnauthorizedException, "UnauthorizedException");
var GetRoleCredentialsRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.accessToken && { accessToken: SENSITIVE_STRING }
}), "GetRoleCredentialsRequestFilterSensitiveLog");
var RoleCredentialsFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.secretAccessKey && { secretAccessKey: SENSITIVE_STRING },
  ...obj.sessionToken && { sessionToken: SENSITIVE_STRING }
}), "RoleCredentialsFilterSensitiveLog");
var GetRoleCredentialsResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }
}), "GetRoleCredentialsResponseFilterSensitiveLog");

// node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js
var se_GetRoleCredentialsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers = map({}, isSerializableHeaderValue, {
    "x-amz-sso_bearer_token": input.accessToken
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/federation/credentials`;
  const query = map({
    role_name: [, expectNonNull(input.roleName, `roleName`)],
    account_id: [, expectNonNull(input.accountId, `accountId`)]
  });
  let body;
  return new HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
}, "se_GetRoleCredentialsCommand");
var de_GetRoleCredentialsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRoleCredentialsCommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata4(output)
  });
  const data = expectNonNull(expectObject(await parseBody3(output.body, context)), "body");
  const doc = take(data, {
    roleCredentials: _json
  });
  Object.assign(contents, doc);
  return contents;
}, "de_GetRoleCredentialsCommand");
var de_GetRoleCredentialsCommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody3(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode2(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.sso#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sso#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes2(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sso#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.sso#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError4({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_GetRoleCredentialsCommandError");
var throwDefaultError4 = withBaseException(SSOServiceException);
var de_InvalidRequestExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    message: expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidRequestExceptionRes");
var de_ResourceNotFoundExceptionRes2 = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    message: expectString
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException2({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_ResourceNotFoundExceptionRes");
var de_TooManyRequestsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    message: expectString
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_TooManyRequestsExceptionRes");
var de_UnauthorizedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    message: expectString
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_UnauthorizedExceptionRes");
var deserializeMetadata4 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var collectBodyString3 = /* @__PURE__ */ __name((streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
var isSerializableHeaderValue = /* @__PURE__ */ __name((value) => value !== void 0 && value !== null && value !== "" && (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) && (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0), "isSerializableHeaderValue");
var parseBody3 = /* @__PURE__ */ __name((streamBody, context) => collectBodyString3(streamBody, context).then((encoded) => {
  if (encoded.length) {
    return JSON.parse(encoded);
  }
  return {};
}), "parseBody");
var parseErrorBody3 = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseBody3(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
}, "parseErrorBody");
var loadRestJsonErrorCode2 = /* @__PURE__ */ __name((output, data) => {
  const findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k5) => k5.toLowerCase() === key.toLowerCase()), "findKey");
  const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  }, "sanitizeErrorCode");
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== void 0) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== void 0) {
    return sanitizeErrorCode(data["__type"]);
  }
}, "loadRestJsonErrorCode");

// node_modules/@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js
var GetRoleCredentialsCommand = class extends Command {
  static getEndpointParameterInstructions() {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  constructor(input) {
    super();
    this.input = input;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRoleCredentialsCommand.getEndpointParameterInstructions()));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const clientName = "SSOClient";
    const commandName = "GetRoleCredentialsCommand";
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRoleCredentialsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRoleCredentialsResponseFilterSensitiveLog
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return se_GetRoleCredentialsCommand(input, context);
  }
  deserialize(output, context) {
    return de_GetRoleCredentialsCommand(output, context);
  }
};
__name(GetRoleCredentialsCommand, "GetRoleCredentialsCommand");

// node_modules/@aws-sdk/token-providers/dist-es/constants.js
var EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
var REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;

// node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters4 = /* @__PURE__ */ __name((options) => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "awsssooidc"
  };
}, "resolveClientEndpointParameters");

// node_modules/@aws-sdk/client-sso-oidc/package.json
var package_default4 = {
  name: "@aws-sdk/client-sso-oidc",
  description: "AWS SDK for JavaScript Sso Oidc Client for Node.js, Browser and React Native",
  version: "3.369.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:docs": "typedoc",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo sso-oidc"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "3.0.0",
    "@aws-crypto/sha256-js": "3.0.0",
    "@aws-sdk/middleware-host-header": "3.369.0",
    "@aws-sdk/middleware-logger": "3.369.0",
    "@aws-sdk/middleware-recursion-detection": "3.369.0",
    "@aws-sdk/middleware-user-agent": "3.369.0",
    "@aws-sdk/types": "3.369.0",
    "@aws-sdk/util-endpoints": "3.369.0",
    "@aws-sdk/util-user-agent-browser": "3.369.0",
    "@aws-sdk/util-user-agent-node": "3.369.0",
    "@smithy/config-resolver": "^1.0.1",
    "@smithy/fetch-http-handler": "^1.0.1",
    "@smithy/hash-node": "^1.0.1",
    "@smithy/invalid-dependency": "^1.0.1",
    "@smithy/middleware-content-length": "^1.0.1",
    "@smithy/middleware-endpoint": "^1.0.1",
    "@smithy/middleware-retry": "^1.0.2",
    "@smithy/middleware-serde": "^1.0.1",
    "@smithy/middleware-stack": "^1.0.1",
    "@smithy/node-config-provider": "^1.0.1",
    "@smithy/node-http-handler": "^1.0.2",
    "@smithy/protocol-http": "^1.0.1",
    "@smithy/smithy-client": "^1.0.3",
    "@smithy/types": "^1.1.0",
    "@smithy/url-parser": "^1.0.1",
    "@smithy/util-base64": "^1.0.1",
    "@smithy/util-body-length-browser": "^1.0.1",
    "@smithy/util-body-length-node": "^1.0.1",
    "@smithy/util-defaults-mode-browser": "^1.0.1",
    "@smithy/util-defaults-mode-node": "^1.0.1",
    "@smithy/util-retry": "^1.0.2",
    "@smithy/util-utf8": "^1.0.1",
    tslib: "^2.5.0"
  },
  devDependencies: {
    "@aws-sdk/service-client-documentation-generator": "3.310.0",
    "@smithy/service-client-documentation-generator": "^1.0.1",
    "@tsconfig/node14": "1.0.3",
    "@types/node": "^14.14.31",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typedoc: "0.23.23",
    typescript: "~4.9.5"
  },
  engines: {
    node: ">=14.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso-oidc",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-sso-oidc"
  }
};

// node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/ruleset.js
var p2 = "required";
var q2 = "fn";
var r2 = "argv";
var s2 = "ref";
var a2 = "PartitionResult";
var b2 = "tree";
var c2 = "error";
var d2 = "endpoint";
var e2 = { [p2]: false, "type": "String" };
var f2 = { [p2]: true, "default": false, "type": "Boolean" };
var g2 = { [s2]: "Endpoint" };
var h2 = { [q2]: "booleanEquals", [r2]: [{ [s2]: "UseFIPS" }, true] };
var i2 = { [q2]: "booleanEquals", [r2]: [{ [s2]: "UseDualStack" }, true] };
var j2 = {};
var k2 = { [q2]: "booleanEquals", [r2]: [true, { [q2]: "getAttr", [r2]: [{ [s2]: a2 }, "supportsFIPS"] }] };
var l2 = { [q2]: "booleanEquals", [r2]: [true, { [q2]: "getAttr", [r2]: [{ [s2]: a2 }, "supportsDualStack"] }] };
var m2 = [g2];
var n2 = [h2];
var o2 = [i2];
var _data2 = { version: "1.0", parameters: { Region: e2, UseDualStack: f2, UseFIPS: f2, Endpoint: e2 }, rules: [{ conditions: [{ [q2]: "aws.partition", [r2]: [{ [s2]: "Region" }], assign: a2 }], type: b2, rules: [{ conditions: [{ [q2]: "isSet", [r2]: m2 }, { [q2]: "parseURL", [r2]: m2, assign: "url" }], type: b2, rules: [{ conditions: n2, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: c2 }, { type: b2, rules: [{ conditions: o2, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: c2 }, { endpoint: { url: g2, properties: j2, headers: j2 }, type: d2 }] }] }, { conditions: [h2, i2], type: b2, rules: [{ conditions: [k2, l2], type: b2, rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j2, headers: j2 }, type: d2 }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: c2 }] }, { conditions: n2, type: b2, rules: [{ conditions: [k2], type: b2, rules: [{ type: b2, rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: j2, headers: j2 }, type: d2 }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: c2 }] }, { conditions: o2, type: b2, rules: [{ conditions: [l2], type: b2, rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j2, headers: j2 }, type: d2 }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: c2 }] }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: j2, headers: j2 }, type: d2 }] }] };
var ruleSet2 = _data2;

// node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver2 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet2, {
    endpointParams,
    logger: context.logger
  });
}, "defaultEndpointResolver");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.shared.js
var getRuntimeConfig3 = /* @__PURE__ */ __name((config) => ({
  apiVersion: "2019-06-10",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver2,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "SSO OIDC",
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf84,
  utf8Encoder: config?.utf8Encoder ?? toUtf84
}), "getRuntimeConfig");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.js
var getRuntimeConfig4 = /* @__PURE__ */ __name((config) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig3(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default4.version }),
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
    }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/SSOOIDCClient.js
var SSOOIDCClient = class extends Client {
  constructor(configuration) {
    const _config_0 = getRuntimeConfig4(configuration);
    const _config_1 = resolveClientEndpointParameters4(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};
__name(SSOOIDCClient, "SSOOIDCClient");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/models/SSOOIDCServiceException.js
var SSOOIDCServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, SSOOIDCServiceException.prototype);
  }
};
__name(SSOOIDCServiceException, "SSOOIDCServiceException");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/models/models_0.js
var AccessDeniedException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts
    });
    this.name = "AccessDeniedException";
    this.$fault = "client";
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(AccessDeniedException, "AccessDeniedException");
var AuthorizationPendingException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "AuthorizationPendingException",
      $fault: "client",
      ...opts
    });
    this.name = "AuthorizationPendingException";
    this.$fault = "client";
    Object.setPrototypeOf(this, AuthorizationPendingException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(AuthorizationPendingException, "AuthorizationPendingException");
var ExpiredTokenException2 = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "ExpiredTokenException",
      $fault: "client",
      ...opts
    });
    this.name = "ExpiredTokenException";
    this.$fault = "client";
    Object.setPrototypeOf(this, ExpiredTokenException2.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(ExpiredTokenException2, "ExpiredTokenException");
var InternalServerException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts
    });
    this.name = "InternalServerException";
    this.$fault = "server";
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(InternalServerException, "InternalServerException");
var InvalidClientException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "InvalidClientException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidClientException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidClientException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(InvalidClientException, "InvalidClientException");
var InvalidGrantException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "InvalidGrantException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidGrantException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidGrantException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(InvalidGrantException, "InvalidGrantException");
var InvalidRequestException2 = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidRequestException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidRequestException2.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(InvalidRequestException2, "InvalidRequestException");
var InvalidScopeException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "InvalidScopeException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidScopeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidScopeException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(InvalidScopeException, "InvalidScopeException");
var SlowDownException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "SlowDownException",
      $fault: "client",
      ...opts
    });
    this.name = "SlowDownException";
    this.$fault = "client";
    Object.setPrototypeOf(this, SlowDownException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(SlowDownException, "SlowDownException");
var UnauthorizedClientException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "UnauthorizedClientException",
      $fault: "client",
      ...opts
    });
    this.name = "UnauthorizedClientException";
    this.$fault = "client";
    Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(UnauthorizedClientException, "UnauthorizedClientException");
var UnsupportedGrantTypeException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "UnsupportedGrantTypeException",
      $fault: "client",
      ...opts
    });
    this.name = "UnsupportedGrantTypeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, UnsupportedGrantTypeException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(UnsupportedGrantTypeException, "UnsupportedGrantTypeException");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/protocols/Aws_restJson1.js
var se_CreateTokenCommand = /* @__PURE__ */ __name(async (input, context) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers = {
    "content-type": "application/json"
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/token`;
  let body;
  body = JSON.stringify(take(input, {
    clientId: [],
    clientSecret: [],
    code: [],
    deviceCode: [],
    grantType: [],
    redirectUri: [],
    refreshToken: [],
    scope: (_) => _json(_)
  }));
  return new HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
}, "se_CreateTokenCommand");
var de_CreateTokenCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTokenCommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata5(output)
  });
  const data = expectNonNull(expectObject(await parseBody4(output.body, context)), "body");
  const doc = take(data, {
    accessToken: expectString,
    expiresIn: expectInt32,
    idToken: expectString,
    refreshToken: expectString,
    tokenType: expectString
  });
  Object.assign(contents, doc);
  return contents;
}, "de_CreateTokenCommand");
var de_CreateTokenCommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody4(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode3(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssooidc#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationPendingException":
    case "com.amazonaws.ssooidc#AuthorizationPendingException":
      throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
    case "ExpiredTokenException":
    case "com.amazonaws.ssooidc#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes2(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssooidc#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidClientException":
    case "com.amazonaws.ssooidc#InvalidClientException":
      throw await de_InvalidClientExceptionRes(parsedOutput, context);
    case "InvalidGrantException":
    case "com.amazonaws.ssooidc#InvalidGrantException":
      throw await de_InvalidGrantExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ssooidc#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes2(parsedOutput, context);
    case "InvalidScopeException":
    case "com.amazonaws.ssooidc#InvalidScopeException":
      throw await de_InvalidScopeExceptionRes(parsedOutput, context);
    case "SlowDownException":
    case "com.amazonaws.ssooidc#SlowDownException":
      throw await de_SlowDownExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.ssooidc#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
    case "UnsupportedGrantTypeException":
    case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
      throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError5({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_CreateTokenCommandError");
var throwDefaultError5 = withBaseException(SSOOIDCServiceException);
var de_AccessDeniedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata5(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_AccessDeniedExceptionRes");
var de_AuthorizationPendingExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new AuthorizationPendingException({
    $metadata: deserializeMetadata5(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_AuthorizationPendingExceptionRes");
var de_ExpiredTokenExceptionRes2 = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new ExpiredTokenException2({
    $metadata: deserializeMetadata5(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_ExpiredTokenExceptionRes");
var de_InternalServerExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata5(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InternalServerExceptionRes");
var de_InvalidClientExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidClientException({
    $metadata: deserializeMetadata5(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidClientExceptionRes");
var de_InvalidGrantExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidGrantException({
    $metadata: deserializeMetadata5(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidGrantExceptionRes");
var de_InvalidRequestExceptionRes2 = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException2({
    $metadata: deserializeMetadata5(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidRequestExceptionRes");
var de_InvalidScopeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidScopeException({
    $metadata: deserializeMetadata5(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidScopeExceptionRes");
var de_SlowDownExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new SlowDownException({
    $metadata: deserializeMetadata5(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_SlowDownExceptionRes");
var de_UnauthorizedClientExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata5(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_UnauthorizedClientExceptionRes");
var de_UnsupportedGrantTypeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedGrantTypeException({
    $metadata: deserializeMetadata5(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_UnsupportedGrantTypeExceptionRes");
var deserializeMetadata5 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var collectBodyString4 = /* @__PURE__ */ __name((streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
var parseBody4 = /* @__PURE__ */ __name((streamBody, context) => collectBodyString4(streamBody, context).then((encoded) => {
  if (encoded.length) {
    return JSON.parse(encoded);
  }
  return {};
}), "parseBody");
var parseErrorBody4 = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseBody4(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
}, "parseErrorBody");
var loadRestJsonErrorCode3 = /* @__PURE__ */ __name((output, data) => {
  const findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k5) => k5.toLowerCase() === key.toLowerCase()), "findKey");
  const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  }, "sanitizeErrorCode");
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== void 0) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== void 0) {
    return sanitizeErrorCode(data["__type"]);
  }
}, "loadRestJsonErrorCode");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenCommand.js
var CreateTokenCommand = class extends Command {
  static getEndpointParameterInstructions() {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  constructor(input) {
    super();
    this.input = input;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTokenCommand.getEndpointParameterInstructions()));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const clientName = "SSOOIDCClient";
    const commandName = "CreateTokenCommand";
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_) => _,
      outputFilterSensitiveLog: (_) => _
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return se_CreateTokenCommand(input, context);
  }
  deserialize(output, context) {
    return de_CreateTokenCommand(output, context);
  }
};
__name(CreateTokenCommand, "CreateTokenCommand");

// node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js
var ssoOidcClientsHash = {};
var getSsoOidcClient = /* @__PURE__ */ __name((ssoRegion) => {
  if (ssoOidcClientsHash[ssoRegion]) {
    return ssoOidcClientsHash[ssoRegion];
  }
  const ssoOidcClient = new SSOOIDCClient({ region: ssoRegion });
  ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
  return ssoOidcClient;
}, "getSsoOidcClient");

// node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js
var getNewSsoOidcToken = /* @__PURE__ */ __name((ssoToken, ssoRegion) => {
  const ssoOidcClient = getSsoOidcClient(ssoRegion);
  return ssoOidcClient.send(new CreateTokenCommand({
    clientId: ssoToken.clientId,
    clientSecret: ssoToken.clientSecret,
    refreshToken: ssoToken.refreshToken,
    grantType: "refresh_token"
  }));
}, "getNewSsoOidcToken");

// node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js
var validateTokenExpiry = /* @__PURE__ */ __name((token) => {
  if (token.expiration && token.expiration.getTime() < Date.now()) {
    throw new TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
  }
}, "validateTokenExpiry");

// node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js
var validateTokenKey = /* @__PURE__ */ __name((key, value, forRefresh = false) => {
  if (typeof value === "undefined") {
    throw new TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
  }
}, "validateTokenKey");

// node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js
import { promises as fsPromises3 } from "fs";
var { writeFile } = fsPromises3;
var writeSSOTokenToFile = /* @__PURE__ */ __name((id, ssoToken) => {
  const tokenFilepath = getSSOTokenFilepath(id);
  const tokenString = JSON.stringify(ssoToken, null, 2);
  return writeFile(tokenFilepath, tokenString);
}, "writeSSOTokenToFile");

// node_modules/@aws-sdk/token-providers/dist-es/fromSso.js
var lastRefreshAttemptTime = new Date(0);
var fromSso = /* @__PURE__ */ __name((init = {}) => async () => {
  const profiles = await parseKnownFiles(init);
  const profileName = getProfileName(init);
  const profile = profiles[profileName];
  if (!profile) {
    throw new TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
  } else if (!profile["sso_session"]) {
    throw new TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
  }
  const ssoSessionName = profile["sso_session"];
  const ssoSessions = await loadSsoSessionData(init);
  const ssoSession = ssoSessions[ssoSessionName];
  if (!ssoSession) {
    throw new TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
  }
  for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
    if (!ssoSession[ssoSessionRequiredKey]) {
      throw new TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
    }
  }
  const ssoStartUrl = ssoSession["sso_start_url"];
  const ssoRegion = ssoSession["sso_region"];
  let ssoToken;
  try {
    ssoToken = await getSSOTokenFromFile(ssoSessionName);
  } catch (e5) {
    throw new TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
  }
  validateTokenKey("accessToken", ssoToken.accessToken);
  validateTokenKey("expiresAt", ssoToken.expiresAt);
  const { accessToken, expiresAt } = ssoToken;
  const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
  if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
    return existingToken;
  }
  if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1e3) {
    validateTokenExpiry(existingToken);
    return existingToken;
  }
  validateTokenKey("clientId", ssoToken.clientId, true);
  validateTokenKey("clientSecret", ssoToken.clientSecret, true);
  validateTokenKey("refreshToken", ssoToken.refreshToken, true);
  try {
    lastRefreshAttemptTime.setTime(Date.now());
    const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion);
    validateTokenKey("accessToken", newSsoOidcToken.accessToken);
    validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
    const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1e3);
    try {
      await writeSSOTokenToFile(ssoSessionName, {
        ...ssoToken,
        accessToken: newSsoOidcToken.accessToken,
        expiresAt: newTokenExpiration.toISOString(),
        refreshToken: newSsoOidcToken.refreshToken
      });
    } catch (error) {
    }
    return {
      token: newSsoOidcToken.accessToken,
      expiration: newTokenExpiration
    };
  } catch (error) {
    validateTokenExpiry(existingToken);
    return existingToken;
  }
}, "fromSso");

// node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js
var EXPIRE_WINDOW_MS2 = 15 * 60 * 1e3;
var SHOULD_FAIL_CREDENTIAL_CHAIN = false;
var resolveSSOCredentials = /* @__PURE__ */ __name(async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, profile }) => {
  let token;
  const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
  if (ssoSession) {
    try {
      const _token = await fromSso({ profile })();
      token = {
        accessToken: _token.token,
        expiresAt: new Date(_token.expiration).toISOString()
      };
    } catch (e5) {
      throw new CredentialsProviderError(e5.message, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
  } else {
    try {
      token = await getSSOTokenFromFile(ssoStartUrl);
    } catch (e5) {
      throw new CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
  }
  if (new Date(token.expiresAt).getTime() - Date.now() <= EXPIRE_WINDOW_MS2) {
    throw new CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
  }
  const { accessToken } = token;
  const sso = ssoClient || new SSOClient({ region: ssoRegion });
  let ssoResp;
  try {
    ssoResp = await sso.send(new GetRoleCredentialsCommand({
      accountId: ssoAccountId,
      roleName: ssoRoleName,
      accessToken
    }));
  } catch (e5) {
    throw CredentialsProviderError.from(e5, SHOULD_FAIL_CREDENTIAL_CHAIN);
  }
  const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration } = {} } = ssoResp;
  if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
    throw new CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
  }
  return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration) };
}, "resolveSSOCredentials");

// node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js
var validateSsoProfile = /* @__PURE__ */ __name((profile) => {
  const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
  if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
    throw new CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, false);
  }
  return profile;
}, "validateSsoProfile");

// node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js
var fromSSO = /* @__PURE__ */ __name((init = {}) => async () => {
  const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, ssoSession } = init;
  const profileName = getProfileName(init);
  if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
    const profiles = await parseKnownFiles(init);
    const profile = profiles[profileName];
    if (!profile) {
      throw new CredentialsProviderError(`Profile ${profileName} was not found.`);
    }
    if (!isSsoProfile(profile)) {
      throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
    }
    if (profile?.sso_session) {
      const ssoSessions = await loadSsoSessionData(init);
      const session = ssoSessions[profile.sso_session];
      const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
      if (ssoRegion && ssoRegion !== session.sso_region) {
        throw new CredentialsProviderError(`Conflicting SSO region` + conflictMsg, false);
      }
      if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
        throw new CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, false);
      }
      profile.sso_region = session.sso_region;
      profile.sso_start_url = session.sso_start_url;
    }
    const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile);
    return resolveSSOCredentials({
      ssoStartUrl: sso_start_url,
      ssoSession: sso_session,
      ssoAccountId: sso_account_id,
      ssoRegion: sso_region,
      ssoRoleName: sso_role_name,
      ssoClient,
      profile: profileName
    });
  } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
    throw new CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
  } else {
    return resolveSSOCredentials({
      ssoStartUrl,
      ssoSession,
      ssoAccountId,
      ssoRegion,
      ssoRoleName,
      ssoClient,
      profile: profileName
    });
  }
}, "fromSSO");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js
var resolveSsoCredentials = /* @__PURE__ */ __name((data) => {
  const { sso_start_url, sso_account_id, sso_session, sso_region, sso_role_name } = validateSsoProfile(data);
  return fromSSO({
    ssoStartUrl: sso_start_url,
    ssoAccountId: sso_account_id,
    ssoSession: sso_session,
    ssoRegion: sso_region,
    ssoRoleName: sso_role_name
  })();
}, "resolveSsoCredentials");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js
var isStaticCredsProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1, "isStaticCredsProfile");
var resolveStaticCredentials = /* @__PURE__ */ __name((profile) => Promise.resolve({
  accessKeyId: profile.aws_access_key_id,
  secretAccessKey: profile.aws_secret_access_key,
  sessionToken: profile.aws_session_token
}), "resolveStaticCredentials");

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js
import { readFileSync } from "fs";

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js
var fromWebToken = /* @__PURE__ */ __name((init) => () => {
  const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds, roleAssumerWithWebIdentity } = init;
  if (!roleAssumerWithWebIdentity) {
    throw new CredentialsProviderError(`Role Arn '${roleArn}' needs to be assumed with web identity, but no role assumption callback was provided.`, false);
  }
  return roleAssumerWithWebIdentity({
    RoleArn: roleArn,
    RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
    WebIdentityToken: webIdentityToken,
    ProviderId: providerId,
    PolicyArns: policyArns,
    Policy: policy,
    DurationSeconds: durationSeconds
  });
}, "fromWebToken");

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js
var ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
var ENV_ROLE_ARN = "AWS_ROLE_ARN";
var ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
var fromTokenFile = /* @__PURE__ */ __name((init = {}) => async () => {
  const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
  const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
  const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
  if (!webIdentityTokenFile || !roleArn) {
    throw new CredentialsProviderError("Web identity configuration not specified");
  }
  return fromWebToken({
    ...init,
    webIdentityToken: readFileSync(webIdentityTokenFile, { encoding: "ascii" }),
    roleArn,
    roleSessionName
  })();
}, "fromTokenFile");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js
var isWebIdentityProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1, "isWebIdentityProfile");
var resolveWebIdentityCredentials = /* @__PURE__ */ __name(async (profile, options) => fromTokenFile({
  webIdentityTokenFile: profile.web_identity_token_file,
  roleArn: profile.role_arn,
  roleSessionName: profile.role_session_name,
  roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity
})(), "resolveWebIdentityCredentials");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js
var resolveProfileData = /* @__PURE__ */ __name(async (profileName, profiles, options, visitedProfiles = {}) => {
  const data = profiles[profileName];
  if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data);
  }
  if (isAssumeRoleProfile(data)) {
    return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
  }
  if (isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data);
  }
  if (isWebIdentityProfile(data)) {
    return resolveWebIdentityCredentials(data, options);
  }
  if (isProcessProfile(data)) {
    return resolveProcessCredentials2(options, profileName);
  }
  if (isSsoProfile(data)) {
    return resolveSsoCredentials(data);
  }
  throw new CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
}, "resolveProfileData");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js
var fromIni = /* @__PURE__ */ __name((init = {}) => async () => {
  const profiles = await parseKnownFiles(init);
  return resolveProfileData(getProfileName(init), profiles, init);
}, "fromIni");

// node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js
var ENV_IMDS_DISABLED2 = "AWS_EC2_METADATA_DISABLED";
var remoteProvider = /* @__PURE__ */ __name((init) => {
  if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
    return fromContainerMetadata(init);
  }
  if (process.env[ENV_IMDS_DISABLED2]) {
    return async () => {
      throw new CredentialsProviderError("EC2 Instance Metadata Service access disabled");
    };
  }
  return fromInstanceMetadata(init);
}, "remoteProvider");

// node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js
var defaultProvider = /* @__PURE__ */ __name((init = {}) => memoize(chain(...init.profile || process.env[ENV_PROFILE] ? [] : [fromEnv()], fromSSO(init), fromIni(init), fromProcess(init), fromTokenFile(init), remoteProvider(init), async () => {
  throw new CredentialsProviderError("Could not load credentials from any providers", false);
}), (credentials) => credentials.expiration !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5, (credentials) => credentials.expiration !== void 0), "defaultProvider");

// node_modules/@aws-sdk/client-sts/dist-es/endpoint/ruleset.js
var F = "required";
var G = "type";
var H = "fn";
var I = "argv";
var J = "ref";
var a3 = false;
var b3 = true;
var c3 = "booleanEquals";
var d3 = "tree";
var e3 = "stringEquals";
var f3 = "sigv4";
var g3 = "sts";
var h3 = "us-east-1";
var i3 = "endpoint";
var j3 = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
var k3 = "error";
var l3 = "getAttr";
var m3 = { [F]: false, [G]: "String" };
var n3 = { [F]: true, "default": false, [G]: "Boolean" };
var o3 = { [J]: "Endpoint" };
var p3 = { [H]: "isSet", [I]: [{ [J]: "Region" }] };
var q3 = { [J]: "Region" };
var r3 = { [H]: "aws.partition", [I]: [q3], "assign": "PartitionResult" };
var s3 = { [J]: "UseFIPS" };
var t = { [J]: "UseDualStack" };
var u = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": f3, "signingName": g3, "signingRegion": h3 }] }, "headers": {} };
var v = {};
var w = { "conditions": [{ [H]: e3, [I]: [q3, "aws-global"] }], [i3]: u, [G]: i3 };
var x = { [H]: c3, [I]: [s3, true] };
var y = { [H]: c3, [I]: [t, true] };
var z = { [H]: c3, [I]: [true, { [H]: l3, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] }] };
var A = { [J]: "PartitionResult" };
var B = { [H]: c3, [I]: [true, { [H]: l3, [I]: [A, "supportsDualStack"] }] };
var C = [{ [H]: "isSet", [I]: [o3] }];
var D = [x];
var E = [y];
var _data3 = { version: "1.0", parameters: { Region: m3, UseDualStack: n3, UseFIPS: n3, Endpoint: m3, UseGlobalEndpoint: n3 }, rules: [{ conditions: [{ [H]: c3, [I]: [{ [J]: "UseGlobalEndpoint" }, b3] }, { [H]: "not", [I]: C }, p3, r3, { [H]: c3, [I]: [s3, a3] }, { [H]: c3, [I]: [t, a3] }], [G]: d3, rules: [{ conditions: [{ [H]: e3, [I]: [q3, "ap-northeast-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "ap-south-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "ap-southeast-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "ap-southeast-2"] }], endpoint: u, [G]: i3 }, w, { conditions: [{ [H]: e3, [I]: [q3, "ca-central-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "eu-central-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "eu-north-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "eu-west-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "eu-west-2"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "eu-west-3"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "sa-east-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, h3] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "us-east-2"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "us-west-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "us-west-2"] }], endpoint: u, [G]: i3 }, { endpoint: { url: j3, properties: { authSchemes: [{ name: f3, signingName: g3, signingRegion: "{Region}" }] }, headers: v }, [G]: i3 }] }, { conditions: C, [G]: d3, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k3 }, { [G]: d3, rules: [{ conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k3 }, { endpoint: { url: o3, properties: v, headers: v }, [G]: i3 }] }] }, { [G]: d3, rules: [{ conditions: [p3], [G]: d3, rules: [{ conditions: [r3], [G]: d3, rules: [{ conditions: [x, y], [G]: d3, rules: [{ conditions: [z, B], [G]: d3, rules: [{ [G]: d3, rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: i3 }] }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k3 }] }, { conditions: D, [G]: d3, rules: [{ conditions: [z], [G]: d3, rules: [{ [G]: d3, rules: [{ conditions: [{ [H]: e3, [I]: ["aws-us-gov", { [H]: l3, [I]: [A, "name"] }] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v, headers: v }, [G]: i3 }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v, headers: v }, [G]: i3 }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: k3 }] }, { conditions: E, [G]: d3, rules: [{ conditions: [B], [G]: d3, rules: [{ [G]: d3, rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: i3 }] }] }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: k3 }] }, { [G]: d3, rules: [w, { endpoint: { url: j3, properties: v, headers: v }, [G]: i3 }] }] }] }, { error: "Invalid Configuration: Missing Region", [G]: k3 }] }] };
var ruleSet3 = _data3;

// node_modules/@aws-sdk/client-sts/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver3 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet3, {
    endpointParams,
    logger: context.logger
  });
}, "defaultEndpointResolver");

// node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.shared.js
var getRuntimeConfig5 = /* @__PURE__ */ __name((config) => ({
  apiVersion: "2011-06-15",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver3,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "STS",
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf84,
  utf8Encoder: config?.utf8Encoder ?? toUtf84
}), "getRuntimeConfig");

// node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.js
var getRuntimeConfig6 = /* @__PURE__ */ __name((config) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig5(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? decorateDefaultCredentialProvider(defaultProvider),
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
    }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-sts/dist-es/STSClient.js
var STSClient = class extends Client {
  constructor(configuration) {
    const _config_0 = getRuntimeConfig6(configuration);
    const _config_1 = resolveClientEndpointParameters2(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveStsAuthConfig(_config_5, { stsClientCtor: STSClient });
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};
__name(STSClient, "STSClient");

// node_modules/@aws-sdk/client-sts/dist-es/defaultRoleAssumers.js
var getCustomizableStsClientCtor = /* @__PURE__ */ __name((baseCtor, customizations) => {
  if (!customizations)
    return baseCtor;
  else
    return /* @__PURE__ */ __name(class CustomizableSTSClient extends baseCtor {
      constructor(config) {
        super(config);
        for (const customization of customizations) {
          this.middlewareStack.use(customization);
        }
      }
    }, "CustomizableSTSClient");
}, "getCustomizableStsClientCtor");
var getDefaultRoleAssumer2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins)), "getDefaultRoleAssumer");
var getDefaultRoleAssumerWithWebIdentity2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins)), "getDefaultRoleAssumerWithWebIdentity");
var decorateDefaultCredentialProvider2 = /* @__PURE__ */ __name((provider) => (input) => provider({
  roleAssumer: getDefaultRoleAssumer2(input),
  roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity2(input),
  ...input
}), "decorateDefaultCredentialProvider");

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/ruleset.js
var u2 = "required";
var v2 = "fn";
var w2 = "argv";
var x2 = "ref";
var a4 = "isSet";
var b4 = "tree";
var c4 = "error";
var d4 = "endpoint";
var e4 = "PartitionResult";
var f4 = "getAttr";
var g4 = "stringEquals";
var h4 = { [u2]: false, "type": "String" };
var i4 = { [u2]: true, "default": false, "type": "Boolean" };
var j4 = { [x2]: "Endpoint" };
var k4 = { [v2]: "booleanEquals", [w2]: [{ [x2]: "UseFIPS" }, true] };
var l4 = { [v2]: "booleanEquals", [w2]: [{ [x2]: "UseDualStack" }, true] };
var m4 = {};
var n4 = { [x2]: "Region" };
var o4 = { [v2]: "booleanEquals", [w2]: [true, { [v2]: f4, [w2]: [{ [x2]: e4 }, "supportsFIPS"] }] };
var p4 = { [x2]: e4 };
var q4 = { [v2]: "booleanEquals", [w2]: [true, { [v2]: f4, [w2]: [p4, "supportsDualStack"] }] };
var r4 = [k4];
var s4 = [l4];
var t2 = [n4];
var _data4 = { version: "1.0", parameters: { Region: h4, UseDualStack: i4, UseFIPS: i4, Endpoint: h4 }, rules: [{ conditions: [{ [v2]: a4, [w2]: [j4] }], type: b4, rules: [{ conditions: r4, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: c4 }, { type: b4, rules: [{ conditions: s4, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: c4 }, { endpoint: { url: j4, properties: m4, headers: m4 }, type: d4 }] }] }, { type: b4, rules: [{ conditions: [{ [v2]: a4, [w2]: t2 }], type: b4, rules: [{ conditions: [{ [v2]: "aws.partition", [w2]: t2, assign: e4 }], type: b4, rules: [{ conditions: [k4, l4], type: b4, rules: [{ conditions: [o4, q4], type: b4, rules: [{ type: b4, rules: [{ endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m4, headers: m4 }, type: d4 }] }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: c4 }] }, { conditions: r4, type: b4, rules: [{ conditions: [o4], type: b4, rules: [{ type: b4, rules: [{ conditions: [{ [v2]: g4, [w2]: ["aws-us-gov", { [v2]: f4, [w2]: [p4, "name"] }] }], endpoint: { url: "https://dynamodb.{Region}.amazonaws.com", properties: m4, headers: m4 }, type: d4 }, { endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}", properties: m4, headers: m4 }, type: d4 }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: c4 }] }, { conditions: s4, type: b4, rules: [{ conditions: [q4], type: b4, rules: [{ type: b4, rules: [{ endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m4, headers: m4 }, type: d4 }] }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: c4 }] }, { type: b4, rules: [{ conditions: [{ [v2]: g4, [w2]: [n4, "local"] }], endpoint: { url: "http://localhost:8000", properties: { authSchemes: [{ name: "sigv4", signingName: "dynamodb", signingRegion: "us-east-1" }] }, headers: m4 }, type: d4 }, { endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dnsSuffix}", properties: m4, headers: m4 }, type: d4 }] }] }] }, { error: "Invalid Configuration: Missing Region", type: c4 }] }] };
var ruleSet4 = _data4;

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver4 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet4, {
    endpointParams,
    logger: context.logger
  });
}, "defaultEndpointResolver");

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.shared.js
var getRuntimeConfig7 = /* @__PURE__ */ __name((config) => ({
  apiVersion: "2012-08-10",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver4,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "DynamoDB",
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf84,
  utf8Encoder: config?.utf8Encoder ?? toUtf84
}), "getRuntimeConfig");

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.js
var getRuntimeConfig8 = /* @__PURE__ */ __name((config) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig7(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? decorateDefaultCredentialProvider2(defaultProvider),
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    endpointDiscoveryEnabledProvider: config?.endpointDiscoveryEnabledProvider ?? loadConfig(NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS),
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
    }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDBClient.js
var DynamoDBClient = class extends Client {
  constructor(configuration) {
    const _config_0 = getRuntimeConfig8(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveEndpointDiscoveryConfig(_config_7, {
      endpointDiscoveryCommandCtor: DescribeEndpointsCommand
    });
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};
__name(DynamoDBClient, "DynamoDBClient");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/QueryCommand.js
var QueryCommand = class extends Command {
  static getEndpointParameterInstructions() {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  constructor(input) {
    super();
    this.input = input;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, QueryCommand.getEndpointParameterInstructions()));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "QueryCommand";
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_) => _,
      outputFilterSensitiveLog: (_) => _
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return se_QueryCommand(input, context);
  }
  deserialize(output, context) {
    return de_QueryCommand(output, context);
  }
};
__name(QueryCommand, "QueryCommand");

// node_modules/sst/context/context.js
var Context = {
  create,
  reset,
  memo
};
var state = {
  requestID: "",
  contexts: /* @__PURE__ */ new Map(),
  tracking: []
};
function create(cb, name) {
  const id = typeof cb === "string" ? cb : name || Symbol(cb?.toString());
  return {
    use() {
      let result = state.contexts.get(id);
      if (!result) {
        if (!cb || typeof cb === "string")
          throw new Error(`"${String(id)}" context was not provided.`);
        state.tracking.push(id);
        const value = cb();
        state.tracking.pop();
        result = {
          value,
          dependants: /* @__PURE__ */ new Set()
        };
        state.contexts.set(id, result);
      }
      const last = state.tracking[state.tracking.length - 1];
      if (last)
        result.dependants.add(last);
      return result.value;
    },
    reset() {
      resetDependencies(id);
      state.contexts.delete(id);
    },
    provide(value) {
      const requestID = global[Symbol.for("aws.lambda.runtime.requestId")];
      if (state.requestID !== requestID) {
        state.requestID = requestID;
        reset();
      }
      resetDependencies(id);
      state.contexts.set(id, {
        value,
        dependants: /* @__PURE__ */ new Set()
      });
    }
  };
}
__name(create, "create");
function reset() {
  state.contexts.clear();
}
__name(reset, "reset");
function resetDependencies(id) {
  const info = state.contexts.get(id);
  if (!info)
    return;
  for (const dependantID of info.dependants) {
    resetDependencies(dependantID);
    state.contexts.delete(dependantID);
  }
}
__name(resetDependencies, "resetDependencies");
function memo(cb, name) {
  const ctx = create(cb, name);
  return ctx.use;
}
__name(memo, "memo");

// node_modules/sst/context/handler.js
var RequestContext = Context.create("RequestContext");
function useContextType() {
  const ctx = RequestContext.use();
  return ctx.type;
}
__name(useContextType, "useContextType");
function useEvent(type) {
  const ctx = RequestContext.use();
  if (ctx.type !== type)
    throw new Error(`Expected ${type} event`);
  return ctx.event;
}
__name(useEvent, "useEvent");
function Handler(type, cb) {
  return /* @__PURE__ */ __name(function handler2(event, context) {
    RequestContext.provide({ type, event, context });
    return cb(event, context);
  }, "handler");
}
__name(Handler, "Handler");

// node_modules/sst/node/api/index.js
function ApiHandler(cb) {
  return Handler("api", async (evt, ctx) => {
    const result = await cb(evt, ctx);
    const serialized = useResponse().serialize(result || {});
    return serialized;
  });
}
__name(ApiHandler, "ApiHandler");
var useBody = /* @__PURE__ */ Context.memo(() => {
  const type = useContextType();
  const evt = useEvent(type);
  if (!evt.body)
    return;
  const body = evt.isBase64Encoded ? Buffer.from(evt.body, "base64").toString() : evt.body;
  return body;
});
var useJsonBody = /* @__PURE__ */ Context.memo(() => {
  const body = useBody();
  if (!body)
    return;
  return JSON.parse(body);
});
var useResponse = /* @__PURE__ */ Context.memo(() => {
  const response = {
    headers: {},
    cookies: []
  };
  const result = {
    cookies(values, options) {
      for (const [key, value] of Object.entries(values)) {
        result.cookie({
          key,
          value,
          ...options
        });
      }
      return result;
    },
    cookie(input) {
      input = {
        secure: true,
        sameSite: "None",
        httpOnly: true,
        ...input
      };
      const value = encodeURIComponent(input.value);
      const parts = [input.key + "=" + value];
      if (input.domain)
        parts.push("Domain=" + input.domain);
      if (input.path)
        parts.push("Path=" + input.path);
      if (input.expires)
        parts.push("Expires=" + input.expires.toUTCString());
      if (input.maxAge)
        parts.push("Max-Age=" + input.maxAge);
      if (input.httpOnly)
        parts.push("HttpOnly");
      if (input.secure)
        parts.push("Secure");
      if (input.sameSite)
        parts.push("SameSite=" + input.sameSite);
      response.cookies.push(parts.join("; "));
      return result;
    },
    status(code) {
      response.statusCode = code;
      return result;
    },
    header(key, value) {
      response.headers[key] = value;
      return result;
    },
    serialize(input) {
      return {
        ...response,
        ...input,
        cookies: [...input.cookies || [], ...response.cookies],
        headers: {
          ...response.headers,
          ...input.headers
        }
      };
    }
  };
  return result;
});

// lambda/verify-otp.ts
var import_jsonwebtoken = __toESM(require_jsonwebtoken(), 1);
var handler = ApiHandler(async () => {
  const { phone, otp } = useJsonBody();
  const client = new DynamoDBClient({ region: "ap-south-1" });
  try {
    const command = new QueryCommand({
      TableName: "dev-nearbydekho-website-NearbyDekho-partner-otp",
      KeyConditionExpression: "phone = :phone AND otp = :otp",
      ExpressionAttributeValues: {
        ":phone": { N: phone },
        ":otp": { N: otp.toString() }
      }
    });
    const res = await client.send(command);
    if (res.Items.length === 0) {
      return {
        statusCode: 401,
        body: JSON.stringify({
          message: `Invalid OTP for ${phone}`
        })
      };
    }
    const token = (0, import_jsonwebtoken.sign)({ phone }, "jajsdbgjabsgjabsgrgu", {
      expiresIn: "24h"
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `OTP verified for ${phone}`,
        token
      })
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: `OTP is not valid`
      })
    };
  }
});
export {
  handler
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=verify-otp.mjs.map
