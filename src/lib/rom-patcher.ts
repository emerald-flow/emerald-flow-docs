/* eslint-disable */
// @ts-nocheck
var N = ((e) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
      ? new Proxy(e, { get: (t, h) => (typeof require < "u" ? require : t)[h] })
      : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var B = (e, t) => () => {
  try {
    return (t || e((t = { exports: {} }).exports, t), t.exports);
  } catch (h) {
    throw ((t = 0), h);
  }
};
var H = B((F, b) => {
  var P = (function () {
    let e = "0123456789abcdef".split(""),
      t = function (u, s) {
        return (u + s) & 4294967295;
      },
      h = function (u, s) {
        var i = u[0],
          f = u[1],
          r = u[2],
          a = u[3];
        ((i = n(i, f, r, a, s[0], 7, -680876936)),
          (a = n(a, i, f, r, s[1], 12, -389564586)),
          (r = n(r, a, i, f, s[2], 17, 606105819)),
          (f = n(f, r, a, i, s[3], 22, -1044525330)),
          (i = n(i, f, r, a, s[4], 7, -176418897)),
          (a = n(a, i, f, r, s[5], 12, 1200080426)),
          (r = n(r, a, i, f, s[6], 17, -1473231341)),
          (f = n(f, r, a, i, s[7], 22, -45705983)),
          (i = n(i, f, r, a, s[8], 7, 1770035416)),
          (a = n(a, i, f, r, s[9], 12, -1958414417)),
          (r = n(r, a, i, f, s[10], 17, -42063)),
          (f = n(f, r, a, i, s[11], 22, -1990404162)),
          (i = n(i, f, r, a, s[12], 7, 1804603682)),
          (a = n(a, i, f, r, s[13], 12, -40341101)),
          (r = n(r, a, i, f, s[14], 17, -1502002290)),
          (f = n(f, r, a, i, s[15], 22, 1236535329)),
          (i = l(i, f, r, a, s[1], 5, -165796510)),
          (a = l(a, i, f, r, s[6], 9, -1069501632)),
          (r = l(r, a, i, f, s[11], 14, 643717713)),
          (f = l(f, r, a, i, s[0], 20, -373897302)),
          (i = l(i, f, r, a, s[5], 5, -701558691)),
          (a = l(a, i, f, r, s[10], 9, 38016083)),
          (r = l(r, a, i, f, s[15], 14, -660478335)),
          (f = l(f, r, a, i, s[4], 20, -405537848)),
          (i = l(i, f, r, a, s[9], 5, 568446438)),
          (a = l(a, i, f, r, s[14], 9, -1019803690)),
          (r = l(r, a, i, f, s[3], 14, -187363961)),
          (f = l(f, r, a, i, s[8], 20, 1163531501)),
          (i = l(i, f, r, a, s[13], 5, -1444681467)),
          (a = l(a, i, f, r, s[2], 9, -51403784)),
          (r = l(r, a, i, f, s[7], 14, 1735328473)),
          (f = l(f, r, a, i, s[12], 20, -1926607734)),
          (i = o(i, f, r, a, s[5], 4, -378558)),
          (a = o(a, i, f, r, s[8], 11, -2022574463)),
          (r = o(r, a, i, f, s[11], 16, 1839030562)),
          (f = o(f, r, a, i, s[14], 23, -35309556)),
          (i = o(i, f, r, a, s[1], 4, -1530992060)),
          (a = o(a, i, f, r, s[4], 11, 1272893353)),
          (r = o(r, a, i, f, s[7], 16, -155497632)),
          (f = o(f, r, a, i, s[10], 23, -1094730640)),
          (i = o(i, f, r, a, s[13], 4, 681279174)),
          (a = o(a, i, f, r, s[0], 11, -358537222)),
          (r = o(r, a, i, f, s[3], 16, -722521979)),
          (f = o(f, r, a, i, s[6], 23, 76029189)),
          (i = o(i, f, r, a, s[9], 4, -640364487)),
          (a = o(a, i, f, r, s[12], 11, -421815835)),
          (r = o(r, a, i, f, s[15], 16, 530742520)),
          (f = o(f, r, a, i, s[2], 23, -995338651)),
          (i = c(i, f, r, a, s[0], 6, -198630844)),
          (a = c(a, i, f, r, s[7], 10, 1126891415)),
          (r = c(r, a, i, f, s[14], 15, -1416354905)),
          (f = c(f, r, a, i, s[5], 21, -57434055)),
          (i = c(i, f, r, a, s[12], 6, 1700485571)),
          (a = c(a, i, f, r, s[3], 10, -1894986606)),
          (r = c(r, a, i, f, s[10], 15, -1051523)),
          (f = c(f, r, a, i, s[1], 21, -2054922799)),
          (i = c(i, f, r, a, s[8], 6, 1873313359)),
          (a = c(a, i, f, r, s[15], 10, -30611744)),
          (r = c(r, a, i, f, s[6], 15, -1560198380)),
          (f = c(f, r, a, i, s[13], 21, 1309151649)),
          (i = c(i, f, r, a, s[4], 6, -145523070)),
          (a = c(a, i, f, r, s[11], 10, -1120210379)),
          (r = c(r, a, i, f, s[2], 15, 718787259)),
          (f = c(f, r, a, i, s[9], 21, -343485551)),
          (u[0] = t(i, u[0])),
          (u[1] = t(f, u[1])),
          (u[2] = t(r, u[2])),
          (u[3] = t(a, u[3])));
      },
      d = function (u) {
        var s = [],
          i;
        for (i = 0; i < 64; i += 4)
          s[i >> 2] =
            u[i] + (u[i + 1] << 8) + (u[i + 2] << 16) + (u[i + 3] << 24);
        return s;
      },
      _ = function (u, s, i, f, r, a) {
        return ((s = t(t(s, u), t(f, a))), t((s << r) | (s >>> (32 - r)), i));
      },
      n = function (u, s, i, f, r, a, p) {
        return _((s & i) | (~s & f), u, s, r, a, p);
      },
      l = function (u, s, i, f, r, a, p) {
        return _((s & f) | (i & ~f), u, s, r, a, p);
      },
      o = function (u, s, i, f, r, a, p) {
        return _(s ^ i ^ f, u, s, r, a, p);
      },
      c = function (u, s, i, f, r, a, p) {
        return _(i ^ (s | ~f), u, s, r, a, p);
      },
      y = (function () {
        for (var u, s = [], i = 0; i < 256; i++) {
          u = i;
          for (var f = 0; f < 8; f++)
            u = u & 1 ? 3988292384 ^ (u >>> 1) : u >>> 1;
          s[i] = u;
        }
        return s;
      })(),
      w = 65521,
      E = function (u, s, i) {
        if (typeof s != "number" || s < 0) s = 0;
        else if (s < u.byteLength) s = Math.floor(s);
        else throw new Error("out of bounds slicing");
        if (typeof i != "number" || i < 0 || s + i >= u.byteLength.length)
          i = u.byteLength - s;
        else if (i > 0) i = Math.floor(i);
        else throw new Error("zero length provided for slicing");
        return new Uint8Array(u, s, i);
      };
    return {
      sha1: async function (s, i, f) {
        if (typeof window > "u" || typeof window.crypto > "u")
          throw new Error("Web Crypto API is not available");
        let r = E(s, i, f);
        r.byteLength !== s.byteLength &&
          (s = s.slice(r.byteOffset, r.byteOffset + r.byteLength));
        let a = await window.crypto.subtle.digest("SHA-1", s),
          p = new Uint8Array(a),
          x = "";
        for (let m = 0; m < p.length; m++)
          x += p[m] < 16 ? "0" + p[m].toString(16) : p[m].toString(16);
        return x;
      },
      md5: function (u, s, i) {
        let f = E(u, s, i);
        var r = f.byteLength,
          a = [1732584193, -271733879, -1732584194, 271733878],
          p;
        for (p = 64; p <= f.byteLength; p += 64) h(a, d(f.slice(p - 64, p)));
        f = f.slice(p - 64);
        var x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (p = 0; p < f.byteLength; p++) x[p >> 2] |= f[p] << ((p % 4) << 3);
        if (((x[p >> 2] |= 128 << ((p % 4) << 3)), p > 55))
          for (h(a, x), p = 0; p < 16; p++) x[p] = 0;
        ((x[14] = r * 8), (x[15] = Math.floor(r / 536870912) >>> 0), h(a, x));
        for (var p = 0; p < a.length; p++) {
          for (var m = "", v = 0; v < 4; v++)
            m += e[(a[p] >> (v * 8 + 4)) & 15] + e[(a[p] >> (v * 8)) & 15];
          a[p] = m;
        }
        return a.join("");
      },
      crc32: function (u, s, i) {
        let f = E(u, s, i);
        for (var r = -1, a = 0; a < f.byteLength; a++)
          r = (r >>> 8) ^ y[(r ^ f[a]) & 255];
        return (r ^ -1) >>> 0;
      },
      adler32: function (u, s, i) {
        let f = E(u, s, i);
        for (var r = 1, a = 0, p = 0; p < f.byteLength; p++)
          ((r = (r + f[p]) % w), (a = (a + r) % w));
        return ((a << 16) | r) >>> 0;
      },
      crc16: function (u, a, i) {
        let f = E(u, a, i);
        for (var r = 65535, a = 0, p = 0; p < f.byteLength; p++)
          for (r ^= f[a++] << 8, j = 0; j < 8; ++j)
            r = (r & 32768) >>> 0 ? (r << 1) ^ 4129 : r << 1;
        return r & 65535;
      },
    };
  })();
  typeof b < "u" && b.exports && (b.exports = P);
});
var U = B((exports, module) => {
  if (typeof HashCalculator > "u")
    try {
      HashCalculator = H();
    } catch {
      typeof window < "u" &&
        window.HashCalculator &&
        (HashCalculator = window.HashCalculator);
    }
  var HashCalculator;
  function BinFile(e, t) {
    if (
      ((this.littleEndian = !1),
      (this.offset = 0),
      (this._lastRead = null),
      (this._offsetsStack = []),
      BinFile.RUNTIME_ENVIROMENT === "browser" &&
        (e instanceof File ||
          e instanceof FileList ||
          (e instanceof HTMLElement &&
            e.tagName === "INPUT" &&
            e.type === "file")))
    ) {
      if (
        (e instanceof HTMLElement && (e = e.files),
        e instanceof FileList && (e = e[0]),
        (this.fileName = e.name),
        (this.fileType = e.type),
        (this.fileSize = e.size),
        typeof window.FileReader != "function")
      )
        throw new Error("Incompatible browser");
      ((this._fileReader = new FileReader()),
        this._fileReader.addEventListener(
          "load",
          function () {
            ((this.binFile._u8array = new Uint8Array(this.result)),
              typeof t == "function" && t(this.binFile));
          },
          !1,
        ),
        (this._fileReader.binFile = this),
        this._fileReader.readAsArrayBuffer(e));
    } else if (BinFile.RUNTIME_ENVIROMENT === "node" && typeof e == "string") {
      if (!nodeFs.existsSync(e)) throw new Error(e + " does not exist");
      let h = nodeFs.readFileSync(e);
      ((this.fileName = nodePath.basename(e)),
        (this.fileType = nodeFs.statSync(e).type),
        (this.fileSize = h.byteLength),
        (this._u8array = new Uint8Array(h)),
        typeof t == "function" && t(this));
    } else if (e instanceof BinFile)
      ((this.fileName = e.fileName),
        (this.fileType = e.fileType),
        (this.fileSize = e.fileSize),
        (this._u8array = new Uint8Array(e._u8array.buffer.slice())),
        typeof t == "function" && t(this));
    else if (e instanceof ArrayBuffer)
      ((this.fileName = "file.bin"),
        (this.fileType = "application/octet-stream"),
        (this.fileSize = e.byteLength),
        (this._u8array = new Uint8Array(e)),
        typeof t == "function" && t(this));
    else if (ArrayBuffer.isView(e))
      ((this.fileName = "file.bin"),
        (this.fileType = "application/octet-stream"),
        (this.fileSize = e.buffer.byteLength),
        (this._u8array = new Uint8Array(e.buffer)),
        typeof t == "function" && t(this));
    else if (typeof e == "number")
      ((this.fileName = "file.bin"),
        (this.fileType = "application/octet-stream"),
        (this.fileSize = e),
        (this._u8array = new Uint8Array(new ArrayBuffer(e))),
        typeof t == "function" && t(this));
    else throw new Error("invalid BinFile source");
  }
  BinFile.RUNTIME_ENVIROMENT = (function () {
    return typeof window == "object" && typeof window.document == "object"
      ? "browser"
      : typeof WorkerGlobalScope == "function" &&
          self instanceof WorkerGlobalScope
        ? "webworker"
        : typeof N == "function" &&
            typeof process == "object" &&
            typeof process.versions == "object" &&
            typeof process.versions.node == "string"
          ? "node"
          : null;
  })();
  BinFile.DEVICE_LITTLE_ENDIAN = (function () {
    var e = new ArrayBuffer(2);
    return (new DataView(e).setInt16(0, 256, !0), new Int16Array(e)[0] === 256);
  })();
  BinFile.prototype.push = function () {
    this._offsetsStack.push(this.offset);
  };
  BinFile.prototype.pop = function () {
    this.seek(this._offsetsStack.pop());
  };
  BinFile.prototype.seek = function (e) {
    this.offset = e;
  };
  BinFile.prototype.skip = function (e) {
    this.offset += e;
  };
  BinFile.prototype.isEOF = function () {
    return !(this.offset < this.fileSize);
  };
  BinFile.prototype.slice = function (e, t, h) {
    if (typeof e != "number" || e < 0) e = 0;
    else {
      if (e >= this.fileSize) throw new Error("out of bounds slicing");
      e = Math.floor(e);
    }
    if (typeof t != "number" || e < 0 || e + t >= this.fileSize.length)
      t = this.fileSize - e;
    else {
      if (t === 0) throw new Error("zero length provided for slicing");
      t = Math.floor(t);
    }
    if (e === 0 && t === this.fileSize && h) return this;
    var d = new BinFile(this._u8array.buffer.slice(e, e + t));
    return (
      (d.fileName = this.fileName),
      (d.fileType = this.fileType),
      (d.littleEndian = this.littleEndian),
      d
    );
  };
  BinFile.prototype.prependBytes = function (e) {
    var t = new BinFile(this.fileSize + e.length);
    return (
      t.seek(0),
      t.writeBytes(e),
      this.copyTo(t, 0, this.fileSize, e.length),
      (this.fileSize = t.fileSize),
      (this._u8array = t._u8array),
      this
    );
  };
  BinFile.prototype.removeLeadingBytes = function (e) {
    this.seek(0);
    var t = this.readBytes(e),
      h = this.slice(e.length);
    return ((this.fileSize = h.fileSize), (this._u8array = h._u8array), t);
  };
  BinFile.prototype.copyTo = function (e, t, h, d) {
    if (!(e instanceof BinFile))
      throw new Error("target is not a BinFile object");
    (typeof d != "number" && (d = t), (h = h || this.fileSize - t));
    for (var _ = 0; _ < h; _++) e._u8array[d + _] = this._u8array[t + _];
  };
  BinFile.prototype.save = function () {
    if (BinFile.RUNTIME_ENVIROMENT === "browser") {
      var e = new Blob([this._u8array], { type: this.fileType }),
        t = URL.createObjectURL(e),
        h = document.createElement("a");
      ((h.href = t),
        (h.download = this.fileName),
        document.body.appendChild(h),
        h.dispatchEvent(new MouseEvent("click")),
        URL.revokeObjectURL(t),
        document.body.removeChild(h));
    } else if (BinFile.RUNTIME_ENVIROMENT === "node")
      nodeFs.writeFileSync(this.fileName, Buffer.from(this._u8array.buffer));
    else throw new Error("invalid runtime environment, can't save file");
  };
  BinFile.prototype.getExtension = function () {
    var e = this.fileName ? this.fileName.toLowerCase().match(/\.(\w+)$/) : "";
    return e ? e[1] : "";
  };
  BinFile.prototype.getName = function () {
    return this.fileName.replace(
      new RegExp("\\." + this.getExtension() + "$", "i"),
      "",
    );
  };
  BinFile.prototype.setExtension = function (e) {
    return (this.fileName = this.getName() + "." + e);
  };
  BinFile.prototype.setName = function (e) {
    return (this.fileName = e + "." + this.getExtension());
  };
  BinFile.prototype.readU8 = function () {
    return ((this._lastRead = this._u8array[this.offset++]), this._lastRead);
  };
  BinFile.prototype.readU16 = function () {
    return (
      this.littleEndian
        ? (this._lastRead =
            this._u8array[this.offset] + (this._u8array[this.offset + 1] << 8))
        : (this._lastRead =
            (this._u8array[this.offset] << 8) + this._u8array[this.offset + 1]),
      (this.offset += 2),
      this._lastRead >>> 0
    );
  };
  BinFile.prototype.readU24 = function () {
    return (
      this.littleEndian
        ? (this._lastRead =
            this._u8array[this.offset] +
            (this._u8array[this.offset + 1] << 8) +
            (this._u8array[this.offset + 2] << 16))
        : (this._lastRead =
            (this._u8array[this.offset] << 16) +
            (this._u8array[this.offset + 1] << 8) +
            this._u8array[this.offset + 2]),
      (this.offset += 3),
      this._lastRead >>> 0
    );
  };
  BinFile.prototype.readU32 = function () {
    return (
      this.littleEndian
        ? (this._lastRead =
            this._u8array[this.offset] +
            (this._u8array[this.offset + 1] << 8) +
            (this._u8array[this.offset + 2] << 16) +
            (this._u8array[this.offset + 3] << 24))
        : (this._lastRead =
            (this._u8array[this.offset] << 24) +
            (this._u8array[this.offset + 1] << 16) +
            (this._u8array[this.offset + 2] << 8) +
            this._u8array[this.offset + 3]),
      (this.offset += 4),
      this._lastRead >>> 0
    );
  };
  BinFile.prototype.readU64 = function () {
    return (
      this.littleEndian
        ? (this._lastRead =
            this._u8array[this.offset] +
            (this._u8array[this.offset + 1] << 8) +
            (this._u8array[this.offset + 2] << 16) +
            (this._u8array[this.offset + 3] << 24) +
            (this._u8array[this.offset + 4] << 32) +
            (this._u8array[this.offset + 5] << 40) +
            (this._u8array[this.offset + 6] << 48) +
            (this._u8array[this.offset + 7] << 56))
        : (this._lastRead =
            (this._u8array[this.offset] << 56) +
            (this._u8array[this.offset + 1] << 48) +
            (this._u8array[this.offset + 2] << 40) +
            (this._u8array[this.offset + 3] << 32) +
            (this._u8array[this.offset + 4] << 24) +
            (this._u8array[this.offset + 5] << 16) +
            (this._u8array[this.offset + 6] << 8) +
            this._u8array[this.offset + 7]),
      (this.offset += 8),
      this._lastRead >>> 0
    );
  };
  BinFile.prototype.readBytes = function (e) {
    this._lastRead = new Array(e);
    for (var t = 0; t < e; t++)
      this._lastRead[t] = this._u8array[this.offset + t];
    return ((this.offset += e), this._lastRead);
  };
  BinFile.prototype.readString = function (e) {
    this._lastRead = "";
    for (
      var t = 0;
      t < e &&
      this.offset + t < this.fileSize &&
      this._u8array[this.offset + t] > 0;
      t++
    )
      this._lastRead =
        this._lastRead + String.fromCharCode(this._u8array[this.offset + t]);
    return ((this.offset += e), this._lastRead);
  };
  BinFile.prototype.writeU8 = function (e) {
    this._u8array[this.offset++] = e;
  };
  BinFile.prototype.writeU16 = function (e) {
    (this.littleEndian
      ? ((this._u8array[this.offset] = e & 255),
        (this._u8array[this.offset + 1] = e >> 8))
      : ((this._u8array[this.offset] = e >> 8),
        (this._u8array[this.offset + 1] = e & 255)),
      (this.offset += 2));
  };
  BinFile.prototype.writeU24 = function (e) {
    (this.littleEndian
      ? ((this._u8array[this.offset] = e & 255),
        (this._u8array[this.offset + 1] = (e & 65280) >> 8),
        (this._u8array[this.offset + 2] = (e & 16711680) >> 16))
      : ((this._u8array[this.offset] = (e & 16711680) >> 16),
        (this._u8array[this.offset + 1] = (e & 65280) >> 8),
        (this._u8array[this.offset + 2] = e & 255)),
      (this.offset += 3));
  };
  BinFile.prototype.writeU32 = function (e) {
    (this.littleEndian
      ? ((this._u8array[this.offset] = e & 255),
        (this._u8array[this.offset + 1] = (e & 65280) >> 8),
        (this._u8array[this.offset + 2] = (e & 16711680) >> 16),
        (this._u8array[this.offset + 3] = (e & 4278190080) >> 24))
      : ((this._u8array[this.offset] = (e & 4278190080) >> 24),
        (this._u8array[this.offset + 1] = (e & 16711680) >> 16),
        (this._u8array[this.offset + 2] = (e & 65280) >> 8),
        (this._u8array[this.offset + 3] = e & 255)),
      (this.offset += 4));
  };
  BinFile.prototype.writeBytes = function (e) {
    for (var t = 0; t < e.length; t++) this._u8array[this.offset + t] = e[t];
    this.offset += e.length;
  };
  BinFile.prototype.writeString = function (e, t) {
    t = t || e.length;
    for (var h = 0; h < e.length && h < t; h++)
      this._u8array[this.offset + h] = e.charCodeAt(h);
    for (; h < t; h++) this._u8array[this.offset + h] = 0;
    this.offset += t;
  };
  BinFile.prototype.swapBytes = function (e, t) {
    if ((typeof e != "number" && (e = 4), this.fileSize % e !== 0))
      throw new Error("file size is not divisible by " + e);
    var h = new BinFile(this.fileSize);
    for (this.seek(0); !this.isEOF(); )
      h.writeBytes(this.readBytes(e).reverse());
    return t
      ? ((h.fileName = this.fileName), (h.fileType = this.fileType), h)
      : ((this._u8array = h._u8array), this);
  };
  BinFile.prototype.hashSHA1 = async function (e, t) {
    if (
      typeof HashCalculator != "object" ||
      typeof HashCalculator.sha1 != "function"
    )
      throw new Error("no Hash object found or missing sha1 function");
    return HashCalculator.sha1(this.slice(e, t, !0)._u8array.buffer);
  };
  BinFile.prototype.hashMD5 = function (e, t) {
    if (
      typeof HashCalculator != "object" ||
      typeof HashCalculator.md5 != "function"
    )
      throw new Error("no Hash object found or missing md5 function");
    return HashCalculator.md5(this.slice(e, t, !0)._u8array.buffer);
  };
  BinFile.prototype.hashCRC32 = function (e, t) {
    if (
      typeof HashCalculator != "object" ||
      typeof HashCalculator.crc32 != "function"
    )
      throw new Error("no Hash object found or missing crc32 function");
    return HashCalculator.crc32(this.slice(e, t, !0)._u8array.buffer);
  };
  BinFile.prototype.hashAdler32 = function (e, t) {
    if (
      typeof HashCalculator != "object" ||
      typeof HashCalculator.adler32 != "function"
    )
      throw new Error("no Hash object found or missing adler32 function");
    return HashCalculator.adler32(this.slice(e, t, !0)._u8array.buffer);
  };
  BinFile.prototype.hashCRC16 = function (e, t) {
    if (
      typeof HashCalculator != "object" ||
      typeof HashCalculator.crc16 != "function"
    )
      throw new Error("no Hash object found or missing crc16 function");
    return HashCalculator.crc16(this.slice(e, t, !0)._u8array.buffer);
  };
  if (typeof module < "u" && module.exports) {
    module.exports = BinFile;
    try {
      ((__req = eval("require")),
        (HashCalculator = __req("./HashCalculator")),
        (nodePath = __req("path")),
        (nodeFs = __req("fs")));
    } catch (e) {}
  }
  var __req;
});
var O = B((G, z) => {
  var I = "PATCH";
  typeof z < "u" && z.exports && (z.exports = S);
  function S() {
    ((this.records = []), (this.truncate = !1), (this.EBPmetadata = null));
  }
  S.prototype.addSimpleRecord = function (e, t) {
    this.records.push({ offset: e, type: 1, length: t.length, data: t });
  };
  S.prototype.addRLERecord = function (e, t, h) {
    this.records.push({ offset: e, type: 0, length: t, byte: h });
  };
  S.prototype.setEBPMetadata = function (e) {
    if (typeof e != "object")
      throw new TypeError("metadataObject must be an object");
    for (var t in e)
      if (typeof e[t] != "string")
        throw new TypeError("metadataObject values must be strings");
    this.EBPmetadata = { patcher: "EBPatcher", ...e };
  };
  S.prototype.getDescription = function () {
    if (this.EBPmetadata) {
      var e = "";
      for (var t in this.EBPmetadata) {
        if (t === "patcher") continue;
        let h = t.charAt(0).toUpperCase() + t.slice(1);
        e +=
          h +
          ": " +
          this.EBPmetadata[t] +
          `
`;
      }
      return e.trim();
    }
    return null;
  };
  S.prototype.toString = function () {
    ((nSimpleRecords = 0), (nRLERecords = 0));
    for (var e = 0; e < this.records.length; e++)
      this.records[e].type === 0 ? nRLERecords++ : nSimpleRecords++;
    var t = "Simple records: " + nSimpleRecords;
    return (
      (t +=
        `
RLE records: ` + nRLERecords),
      (t +=
        `
Total records: ` + this.records.length),
      this.truncate && !this.EBPmetadata
        ? (t +=
            `
Truncate at: 0x` + this.truncate.toString(16))
        : this.EBPmetadata &&
          (t +=
            `
EBP Metadata: ` + JSON.stringify(this.EBPmetadata)),
      t
    );
  };
  S.prototype.export = function (e) {
    for (var t = 5, h = 0; h < this.records.length; h++)
      this.records[h].type === 0
        ? (t += 8)
        : (t += 5 + this.records[h].data.length);
    let tempFile;
    ((t += 3),
      this.truncate && !this.EBPmetadata
        ? (t += 3)
        : this.EBPmetadata && (t += JSON.stringify(this.EBPmetadata).length),
      (tempFile = new BinFile(t)),
      (tempFile.fileName = e + (this.EBPmetadata ? ".ebp" : ".ips")),
      tempFile.writeString(I));
    for (var h = 0; h < this.records.length; h++) {
      var d = this.records[h];
      (tempFile.writeU24(d.offset),
        d.type === 0
          ? (tempFile.writeU16(0),
            tempFile.writeU16(d.length),
            tempFile.writeU8(d.byte))
          : (tempFile.writeU16(d.data.length), tempFile.writeBytes(d.data)));
    }
    return (
      tempFile.writeString("EOF"),
      this.truncate && !this.EBPmetadata
        ? tempFile.writeU24(this.truncate)
        : this.EBPmetadata &&
          tempFile.writeString(JSON.stringify(this.EBPmetadata)),
      tempFile
    );
  };
  S.prototype.apply = function (e) {
    let tempFile;
    if (this.truncate && !this.EBPmetadata)
      this.truncate > e.fileSize
        ? ((tempFile = new BinFile(this.truncate)),
          e.copyTo(tempFile, 0, e.fileSize, 0))
        : (tempFile = e.slice(0, this.truncate));
    else {
      for (var t = e.fileSize, h = 0; h < this.records.length; h++) {
        var d = this.records[h];
        d.type === 0
          ? d.offset + d.length > t && (t = d.offset + d.length)
          : d.offset + d.data.length > t && (t = d.offset + d.data.length);
      }
      t === e.fileSize
        ? (tempFile = e.slice(0, e.fileSize))
        : ((tempFile = new BinFile(t)), e.copyTo(tempFile, 0));
    }
    e.seek(0);
    for (var h = 0; h < this.records.length; h++)
      if ((tempFile.seek(this.records[h].offset), this.records[h].type === 0))
        for (var _ = 0; _ < this.records[h].length; _++)
          tempFile.writeU8(this.records[h].byte);
      else tempFile.writeBytes(this.records[h].data);
    return tempFile;
  };
  S.MAGIC = I;
  S.fromFile = function (e) {
    var t = new S();
    for (e.seek(5); !e.isEOF(); ) {
      var h = e.readU24();
      if (h === 4542278) {
        if (e.isEOF()) break;
        if (e.offset + 3 === e.fileSize) {
          t.truncate = e.readU24();
          break;
        } else if (e.readU8() === 123) {
          (e.skip(-1),
            t.setEBPMetadata(JSON.parse(e.readString(e.fileSize - e.offset))));
          break;
        }
      }
      var d = e.readU16();
      d === 0
        ? t.addRLERecord(h, e.readU16(), e.readU8())
        : t.addSimpleRecord(h, e.readBytes(d));
    }
    return t;
  };
  S.buildFromRoms = function (e, t, h = !1) {
    var d = new S();
    !h && t.fileSize < e.fileSize
      ? (d.truncate = t.fileSize)
      : h &&
        d.setEBPMetadata(
          typeof h == "object"
            ? h
            : {
                Author: "Unknown",
                Title: "Untitled",
                Description: "No description",
              },
        );
    for (
      var _ = { type: 3735928559, startOffset: 0, length: 0 };
      !t.isEOF();
    ) {
      var n = e.isEOF() ? 0 : e.readU8(),
        l = t.readU8();
      if (n !== l) {
        for (
          var o = !0, c = [], y = t.offset - 1;
          n !== l &&
          c.length < 65535 &&
          (c.push(l),
          l !== c[0] && (o = !1),
          !(t.isEOF() || c.length === 65535));
        )
          ((n = e.isEOF() ? 0 : e.readU8()), (l = t.readU8()));
        var w = y - (_.offset + _.length);
        if (_.type === 1 && w < 6 && _.length + w + c.length < 65535)
          if (o && c.length > 6)
            (e.seek(y),
              t.seek(y),
              (_ = { type: 3735928559, startOffset: 0, length: 0 }));
          else {
            for (; w--; )
              (_.data.push(t._u8array[_.offset + _.length]), _.length++);
            ((_.data = _.data.concat(c)), (_.length = _.data.length));
          }
        else {
          if (y >= 16777216)
            throw new Error(
              `Files are too big for ${d.EBPmetadata ? "EBP" : "IPS"} format`,
            );
          (o && c.length > 2
            ? d.addRLERecord(y, c.length, c[0])
            : d.addSimpleRecord(y, c),
            (_ = d.records[d.records.length - 1]));
        }
      }
    }
    if (t.fileSize > e.fileSize) {
      var E = d.records[d.records.length - 1],
        u = E.offset + E.length;
      u < t.fileSize && d.addSimpleRecord(t.fileSize - 1, [0]);
    }
    return d;
  };
});
var T = B((D, M) => {
  var R = (function () {
      let t = [
          {
            extensions: ["nes"],
            size: 16,
            romSizeMultiple: 1024,
            name: "iNES",
          },
          {
            extensions: ["fds"],
            size: 16,
            romSizeMultiple: 65500,
            name: "fwNES",
          },
          { extensions: ["lnx"], size: 64, romSizeMultiple: 1024, name: "LNX" },
          {
            extensions: ["sfc", "smc", "swc", "fig"],
            size: 512,
            romSizeMultiple: 262144,
            name: "SNES copier",
          },
        ],
        h = [
          206, 237, 102, 102, 204, 13, 0, 11, 3, 115, 0, 131, 0, 12, 0, 13, 0,
          8, 17, 31, 136, 137, 0, 14, 220, 204, 110, 230, 221, 221, 217, 153,
        ],
        d = function (n) {
          let l = n.getExtension().trim();
          if (n.fileSize > 512 && n.fileSize % 4 === 0) {
            if ((l === "gb" || l === "gbc") && n.fileSize % 16384 === 0) {
              n.seek(260);
              for (var o = !0, c = 0; c < h.length && o; c++)
                h[c] !== n.readU8() && (o = !1);
              if (o) return "gb";
            } else if (l === "md" || l === "bin") {
              if (
                (n.seek(256), /SEGA (GENESIS|MEGA DR)/.test(n.readString(12)))
              )
                return "smd";
            } else if (l === "z64" && n.fileSize >= 4194304) return "n64";
          } else if (l === "fds" && n.fileSize % 65500 === 0) return "fds";
          return null;
        },
        _ = function (n) {
          if (d(n) === "n64") {
            n.seek(60);
            let o = n.readString(3);
            n.seek(16);
            let c = n.readBytes(8).reduce(function (y, w) {
              return w < 16 ? y + "0" + w.toString(16) : y + w.toString(16);
            }, "");
            return o + " (" + c + ")";
          }
          return null;
        };
      return {
        parsePatchFile: function (n) {
          if (!(n instanceof g))
            throw new Error("Patch file is not an instance of BinFile");
          ((n.littleEndian = !1), n.seek(0));
          var l = n.readString(8),
            o = null;
          return (
            l.startsWith(C.MAGIC) && (o = C.fromFile(n)),
            o && (o._originalPatchFile = n),
            o
          );
        },
        validateRom: function (n, l, o) {
          if (n instanceof g) {
            if (typeof l != "object") throw new Error("Unknown patch format");
          } else throw new Error("ROM file is not an instance of BinFile");
          return (
            (typeof o != "number" || o < 0) && (o = 0),
            !(typeof l.validateSource == "function" && !l.validateSource(n, o))
          );
        },
        applyPatch: function (n, l, o) {
          if (n instanceof g) {
            if (typeof l != "object") throw new Error("Unknown patch format");
          } else throw new Error("ROM file is not an instance of BinFile");
          let c = {
            requireValidation: !1,
            removeHeader: !1,
            addHeader: !1,
            fixChecksum: !1,
            outputSuffix: !0,
          };
          typeof o == "object" &&
            (typeof o.requireValidation < "u" &&
              (c.requireValidation = !!o.requireValidation),
            typeof o.removeHeader < "u" && (c.removeHeader = !!o.removeHeader),
            typeof o.addHeader < "u" && (c.addHeader = !!o.addHeader),
            typeof o.fixChecksum < "u" && (c.fixChecksum = !!o.fixChecksum),
            typeof o.outputSuffix < "u" && (c.outputSuffix = !!o.outputSuffix));
          var y = !1,
            w = 0;
          if (c.removeHeader) {
            if (R.isRomHeadered(n)) {
              let s = R.removeHeader(n);
              ((y = s.header), (n = s.rom));
            }
          } else if (c.addHeader) {
            let u = R.canRomGetHeader(n);
            u && ((w = u.fileSize), (n = R.addFakeHeader(n)));
          }
          if (c.requireValidation && !R.validateRom(n, l))
            throw new Error("Invalid input ROM checksum");
          var E = l.apply(n);
          if (y) {
            c.fixChecksum && R.fixRomHeaderChecksum(E);
            let u = new g(y.fileSize + E.fileSize);
            ((u.fileName = E.fileName),
              (u.fileType = E.fileType),
              y.copyTo(u, 0, y.fileSize),
              E.copyTo(u, 0, E.fileSize, y.fileSize),
              (E = u));
          } else if (w) {
            let u = E.slice(w);
            (c.fixChecksum && R.fixRomHeaderChecksum(u), (E = u));
          } else c.fixChecksum && R.fixRomHeaderChecksum(E);
          return (
            c.outputSuffix
              ? ((E.fileName = n.fileName.replace(
                  /\.([^\.]*?)$/,
                  " (patched).$1",
                )),
                E.unpatched &&
                  (E.fileName = E.fileName.replace(
                    " (patched)",
                    " (unpatched)",
                  )))
              : l._originalPatchFile
                ? (E.fileName = l._originalPatchFile.fileName.replace(
                    /\.\w+$/i,
                    /\.\w+$/i.test(n.fileName)
                      ? n.fileName.match(/\.\w+$/i)[0]
                      : "",
                  ))
                : (E.fileName = n.fileName),
            E
          );
        },
        createPatch: function (n, l, o, c) {
          if (n instanceof g) {
            if (!(l instanceof g))
              throw new Error(
                "Modified ROM file is not an instance of BinFile",
              );
          } else
            throw new Error("Original ROM file is not an instance of BinFile");
          typeof o == "string"
            ? (o = o.trim().toLowerCase())
            : typeof o > "u" && (o = "ips");
          var y;
          if (o === "ips") y = C.buildFromRoms(n, l);
          else if (o === "bps")
            y = BPS.buildFromRoms(n, l, n.fileSize <= 4194304);
          else if (o === "ppf") y = PPF.buildFromRoms(n, l);
          else if (o === "ups") y = UPS.buildFromRoms(n, l);
          else if (o === "aps") y = APS.buildFromRoms(n, l);
          else if (o === "rup")
            y = RUP.buildFromRoms(
              n,
              l,
              c && c.Description ? c.Description : null,
            );
          else if (o === "ebp") y = C.buildFromRoms(n, l, c);
          else throw new Error("Invalid patch format");
          return (
            !(o === "ppf" && n.fileSize > l.fileSize) &&
              (l.hashCRC32(), y.apply(n).hashCRC32()),
            y
          );
        },
        canRomGetHeader: function (n) {
          if (n.fileSize <= 6291456) {
            let l = t.find(
              (o) =>
                o.extensions.indexOf(n.getExtension()) !== -1 &&
                n.fileSize % o.romSizeMultiple === 0,
            );
            if (l) return { name: l.name, size: l.size };
          }
          return null;
        },
        isRomHeadered: function (n) {
          if (n.fileSize <= 6291968 && n.fileSize % 1024 !== 0) {
            let l = t.find(
              (o) =>
                o.extensions.indexOf(n.getExtension()) !== -1 &&
                (n.fileSize - o.size) % o.romSizeMultiple === 0,
            );
            if (l) return { name: l.name, size: l.size };
          }
          return null;
        },
        removeHeader: function (n) {
          let l = R.isRomHeadered(n);
          return l
            ? { header: n.slice(0, l.size), rom: n.slice(l.size) }
            : null;
        },
        addFakeHeader: function (n) {
          let l = R.canRomGetHeader(n);
          if (l) {
            let o = new g(l.size + n.fileSize);
            return (
              (o.fileName = n.fileName),
              (o.fileType = n.fileType),
              n.copyTo(o, 0, n.fileSize, l.size),
              d(o) === "fds" &&
                (o.seek(0), o.writeBytes([70, 68, 83, 26, n.fileSize / 65500])),
              (o.fakeHeader = !0),
              o
            );
          }
          return null;
        },
        fixRomHeaderChecksum: function (n) {
          let l = d(n);
          if (l === "gb") {
            n.seek(333);
            let y = n.readU8();
            var o = 0;
            n.seek(308);
            for (var c = 0; c <= 24; c++)
              o = ((o - n.readU8() - 1) >>> 0) & 255;
            if (y !== o)
              return (
                console.log("fixed Game Boy checksum"),
                n.seek(333),
                n.writeU8(o),
                !0
              );
          } else if (l === "smd") {
            n.seek(398);
            let y = n.readU16();
            var o = 0;
            for (n.seek(512); !n.isEOF(); )
              o = ((o + n.readU16()) >>> 0) & 65535;
            if (y !== o)
              return (
                console.log("fixed Megadrive/Genesis checksum"),
                n.seek(398),
                n.writeU16(o),
                !0
              );
          }
          return !1;
        },
        getRomAdditionalChecksum: function (n) {
          return _(n);
        },
        isRomTooBig: function (n) {
          return n && n.fileSize > 67108863;
        },
      };
    })(),
    g = U(),
    C = O();
  M.exports = { RomPatcher: R, BinFile: g };
});

const { BinFile, RomPatcher } = T();

export interface PatchOptions {
  fixChecksum?: boolean;
  outputSuffix?: boolean;
  requireValidation?: boolean;
  outputName?: string;
}

export async function patchRom(
  romFile: File,
  patchFile: File,
  options: PatchOptions = {},
): Promise<File> {
  const [romBuffer, patchBuffer] = await Promise.all([
    romFile.arrayBuffer(),
    patchFile.arrayBuffer(),
  ]);

  // Build BinFiles
  const rom = new BinFile(romBuffer);
  rom.fileName = romFile.name;
  rom.fileType = romFile.type || "application/octet-stream";

  const patchBin = new BinFile(patchBuffer);
  patchBin.fileName = patchFile.name;

  const parsedPatch = RomPatcher.parsePatchFile(patchBin);

  if (!parsedPatch) throw new Error("Invalid or unsupported patch.");

  const patched = RomPatcher.applyPatch(rom, parsedPatch, {
    fixChecksum: options.fixChecksum ?? true,
    outputSuffix: options.outputSuffix ?? false,
    requireValidation: options.requireValidation ?? true,
  });

  const outputName = options.outputName ?? patched.fileName ?? romFile.name;

  return new File([patched._u8array], outputName, {
    type: "application/octet-stream",
    lastModified: Date.now(),
  });
}
