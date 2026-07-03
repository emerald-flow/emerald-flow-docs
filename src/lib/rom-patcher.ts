/* eslint-disable */
// @ts-nocheck
var M = ((e) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
      ? new Proxy(e, { get: (r, l) => (typeof require < "u" ? require : r)[l] })
      : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var O = (e, r) => () => {
  try {
    return (r || e((r = { exports: {} }).exports, r), r.exports);
  } catch (l) {
    throw ((r = 0), l);
  }
};
var F = O((J, N) => {
  var k = (function () {
    let e = "0123456789abcdef".split(""),
      r = function (u, a) {
        return (u + a) & 4294967295;
      },
      l = function (u, a) {
        var t = u[0],
          f = u[1],
          i = u[2],
          n = u[3];
        ((t = s(t, f, i, n, a[0], 7, -680876936)),
          (n = s(n, t, f, i, a[1], 12, -389564586)),
          (i = s(i, n, t, f, a[2], 17, 606105819)),
          (f = s(f, i, n, t, a[3], 22, -1044525330)),
          (t = s(t, f, i, n, a[4], 7, -176418897)),
          (n = s(n, t, f, i, a[5], 12, 1200080426)),
          (i = s(i, n, t, f, a[6], 17, -1473231341)),
          (f = s(f, i, n, t, a[7], 22, -45705983)),
          (t = s(t, f, i, n, a[8], 7, 1770035416)),
          (n = s(n, t, f, i, a[9], 12, -1958414417)),
          (i = s(i, n, t, f, a[10], 17, -42063)),
          (f = s(f, i, n, t, a[11], 22, -1990404162)),
          (t = s(t, f, i, n, a[12], 7, 1804603682)),
          (n = s(n, t, f, i, a[13], 12, -40341101)),
          (i = s(i, n, t, f, a[14], 17, -1502002290)),
          (f = s(f, i, n, t, a[15], 22, 1236535329)),
          (t = h(t, f, i, n, a[1], 5, -165796510)),
          (n = h(n, t, f, i, a[6], 9, -1069501632)),
          (i = h(i, n, t, f, a[11], 14, 643717713)),
          (f = h(f, i, n, t, a[0], 20, -373897302)),
          (t = h(t, f, i, n, a[5], 5, -701558691)),
          (n = h(n, t, f, i, a[10], 9, 38016083)),
          (i = h(i, n, t, f, a[15], 14, -660478335)),
          (f = h(f, i, n, t, a[4], 20, -405537848)),
          (t = h(t, f, i, n, a[9], 5, 568446438)),
          (n = h(n, t, f, i, a[14], 9, -1019803690)),
          (i = h(i, n, t, f, a[3], 14, -187363961)),
          (f = h(f, i, n, t, a[8], 20, 1163531501)),
          (t = h(t, f, i, n, a[13], 5, -1444681467)),
          (n = h(n, t, f, i, a[2], 9, -51403784)),
          (i = h(i, n, t, f, a[7], 14, 1735328473)),
          (f = h(f, i, n, t, a[12], 20, -1926607734)),
          (t = o(t, f, i, n, a[5], 4, -378558)),
          (n = o(n, t, f, i, a[8], 11, -2022574463)),
          (i = o(i, n, t, f, a[11], 16, 1839030562)),
          (f = o(f, i, n, t, a[14], 23, -35309556)),
          (t = o(t, f, i, n, a[1], 4, -1530992060)),
          (n = o(n, t, f, i, a[4], 11, 1272893353)),
          (i = o(i, n, t, f, a[7], 16, -155497632)),
          (f = o(f, i, n, t, a[10], 23, -1094730640)),
          (t = o(t, f, i, n, a[13], 4, 681279174)),
          (n = o(n, t, f, i, a[0], 11, -358537222)),
          (i = o(i, n, t, f, a[3], 16, -722521979)),
          (f = o(f, i, n, t, a[6], 23, 76029189)),
          (t = o(t, f, i, n, a[9], 4, -640364487)),
          (n = o(n, t, f, i, a[12], 11, -421815835)),
          (i = o(i, n, t, f, a[15], 16, 530742520)),
          (f = o(f, i, n, t, a[2], 23, -995338651)),
          (t = _(t, f, i, n, a[0], 6, -198630844)),
          (n = _(n, t, f, i, a[7], 10, 1126891415)),
          (i = _(i, n, t, f, a[14], 15, -1416354905)),
          (f = _(f, i, n, t, a[5], 21, -57434055)),
          (t = _(t, f, i, n, a[12], 6, 1700485571)),
          (n = _(n, t, f, i, a[3], 10, -1894986606)),
          (i = _(i, n, t, f, a[10], 15, -1051523)),
          (f = _(f, i, n, t, a[1], 21, -2054922799)),
          (t = _(t, f, i, n, a[8], 6, 1873313359)),
          (n = _(n, t, f, i, a[15], 10, -30611744)),
          (i = _(i, n, t, f, a[6], 15, -1560198380)),
          (f = _(f, i, n, t, a[13], 21, 1309151649)),
          (t = _(t, f, i, n, a[4], 6, -145523070)),
          (n = _(n, t, f, i, a[11], 10, -1120210379)),
          (i = _(i, n, t, f, a[2], 15, 718787259)),
          (f = _(f, i, n, t, a[9], 21, -343485551)),
          (u[0] = r(t, u[0])),
          (u[1] = r(f, u[1])),
          (u[2] = r(i, u[2])),
          (u[3] = r(n, u[3])));
      },
      c = function (u) {
        var a = [],
          t;
        for (t = 0; t < 64; t += 4)
          a[t >> 2] =
            u[t] + (u[t + 1] << 8) + (u[t + 2] << 16) + (u[t + 3] << 24);
        return a;
      },
      p = function (u, a, t, f, i, n) {
        return ((a = r(r(a, u), r(f, n))), r((a << i) | (a >>> (32 - i)), t));
      },
      s = function (u, a, t, f, i, n, y) {
        return p((a & t) | (~a & f), u, a, i, n, y);
      },
      h = function (u, a, t, f, i, n, y) {
        return p((a & f) | (t & ~f), u, a, i, n, y);
      },
      o = function (u, a, t, f, i, n, y) {
        return p(a ^ t ^ f, u, a, i, n, y);
      },
      _ = function (u, a, t, f, i, n, y) {
        return p(t ^ (a | ~f), u, a, i, n, y);
      },
      d = (function () {
        for (var u, a = [], t = 0; t < 256; t++) {
          u = t;
          for (var f = 0; f < 8; f++)
            u = u & 1 ? 3988292384 ^ (u >>> 1) : u >>> 1;
          a[t] = u;
        }
        return a;
      })(),
      w = 65521,
      S = function (u, a, t) {
        if (typeof a != "number" || a < 0) a = 0;
        else if (a < u.byteLength) a = Math.floor(a);
        else throw new Error("out of bounds slicing");
        if (typeof t != "number" || t < 0 || a + t >= u.byteLength.length)
          t = u.byteLength - a;
        else if (t > 0) t = Math.floor(t);
        else throw new Error("zero length provided for slicing");
        return new Uint8Array(u, a, t);
      };
    return {
      sha1: async function (a, t, f) {
        if (typeof window > "u" || typeof window.crypto > "u")
          throw new Error("Web Crypto API is not available");
        let i = S(a, t, f);
        i.byteLength !== a.byteLength &&
          (a = a.slice(i.byteOffset, i.byteOffset + i.byteLength));
        let n = await window.crypto.subtle.digest("SHA-1", a),
          y = new Uint8Array(n),
          v = "";
        for (let C = 0; C < y.length; C++)
          v += y[C] < 16 ? "0" + y[C].toString(16) : y[C].toString(16);
        return v;
      },
      md5: function (u, a, t) {
        let f = S(u, a, t);
        var i = f.byteLength,
          n = [1732584193, -271733879, -1732584194, 271733878],
          y;
        for (y = 64; y <= f.byteLength; y += 64) l(n, c(f.slice(y - 64, y)));
        f = f.slice(y - 64);
        var v = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (y = 0; y < f.byteLength; y++) v[y >> 2] |= f[y] << ((y % 4) << 3);
        if (((v[y >> 2] |= 128 << ((y % 4) << 3)), y > 55))
          for (l(n, v), y = 0; y < 16; y++) v[y] = 0;
        ((v[14] = i * 8), (v[15] = Math.floor(i / 536870912) >>> 0), l(n, v));
        for (var y = 0; y < n.length; y++) {
          for (var C = "", R = 0; R < 4; R++)
            C += e[(n[y] >> (R * 8 + 4)) & 15] + e[(n[y] >> (R * 8)) & 15];
          n[y] = C;
        }
        return n.join("");
      },
      crc32: function (u, a, t) {
        let f = S(u, a, t);
        for (var i = -1, n = 0; n < f.byteLength; n++)
          i = (i >>> 8) ^ d[(i ^ f[n]) & 255];
        return (i ^ -1) >>> 0;
      },
      adler32: function (u, a, t) {
        let f = S(u, a, t);
        for (var i = 1, n = 0, y = 0; y < f.byteLength; y++)
          ((i = (i + f[y]) % w), (n = (n + i) % w));
        return ((n << 16) | i) >>> 0;
      },
      crc16: function (u, n, t) {
        let f = S(u, n, t);
        for (var i = 65535, n = 0, y = 0; y < f.byteLength; y++)
          for (i ^= f[n++] << 8, j = 0; j < 8; ++j)
            i = (i & 32768) >>> 0 ? (i << 1) ^ 4129 : i << 1;
        return i & 65535;
      },
    };
  })();
  typeof N < "u" && N.exports && (N.exports = k);
});
var V = O((exports, module) => {
  if (typeof HashCalculator > "u")
    try {
      HashCalculator = F();
    } catch {
      typeof window < "u" &&
        window.HashCalculator &&
        (HashCalculator = window.HashCalculator);
    }
  var HashCalculator;
  function BinFile(e, r) {
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
              typeof r == "function" && r(this.binFile));
          },
          !1,
        ),
        (this._fileReader.binFile = this),
        this._fileReader.readAsArrayBuffer(e));
    } else if (BinFile.RUNTIME_ENVIROMENT === "node" && typeof e == "string") {
      if (!nodeFs.existsSync(e)) throw new Error(e + " does not exist");
      let l = nodeFs.readFileSync(e);
      ((this.fileName = nodePath.basename(e)),
        (this.fileType = nodeFs.statSync(e).type),
        (this.fileSize = l.byteLength),
        (this._u8array = new Uint8Array(l)),
        typeof r == "function" && r(this));
    } else if (e instanceof BinFile)
      ((this.fileName = e.fileName),
        (this.fileType = e.fileType),
        (this.fileSize = e.fileSize),
        (this._u8array = new Uint8Array(e._u8array.buffer.slice())),
        typeof r == "function" && r(this));
    else if (e instanceof ArrayBuffer)
      ((this.fileName = "file.bin"),
        (this.fileType = "application/octet-stream"),
        (this.fileSize = e.byteLength),
        (this._u8array = new Uint8Array(e)),
        typeof r == "function" && r(this));
    else if (ArrayBuffer.isView(e))
      ((this.fileName = "file.bin"),
        (this.fileType = "application/octet-stream"),
        (this.fileSize = e.buffer.byteLength),
        (this._u8array = new Uint8Array(e.buffer)),
        typeof r == "function" && r(this));
    else if (typeof e == "number")
      ((this.fileName = "file.bin"),
        (this.fileType = "application/octet-stream"),
        (this.fileSize = e),
        (this._u8array = new Uint8Array(new ArrayBuffer(e))),
        typeof r == "function" && r(this));
    else throw new Error("invalid BinFile source");
  }
  BinFile.RUNTIME_ENVIROMENT = (function () {
    return typeof window == "object" && typeof window.document == "object"
      ? "browser"
      : typeof WorkerGlobalScope == "function" &&
          self instanceof WorkerGlobalScope
        ? "webworker"
        : typeof M == "function" &&
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
  BinFile.prototype.slice = function (e, r, l) {
    if (typeof e != "number" || e < 0) e = 0;
    else {
      if (e >= this.fileSize) throw new Error("out of bounds slicing");
      e = Math.floor(e);
    }
    if (typeof r != "number" || e < 0 || e + r >= this.fileSize.length)
      r = this.fileSize - e;
    else {
      if (r === 0) throw new Error("zero length provided for slicing");
      r = Math.floor(r);
    }
    if (e === 0 && r === this.fileSize && l) return this;
    var c = new BinFile(this._u8array.buffer.slice(e, e + r));
    return (
      (c.fileName = this.fileName),
      (c.fileType = this.fileType),
      (c.littleEndian = this.littleEndian),
      c
    );
  };
  BinFile.prototype.prependBytes = function (e) {
    var r = new BinFile(this.fileSize + e.length);
    return (
      r.seek(0),
      r.writeBytes(e),
      this.copyTo(r, 0, this.fileSize, e.length),
      (this.fileSize = r.fileSize),
      (this._u8array = r._u8array),
      this
    );
  };
  BinFile.prototype.removeLeadingBytes = function (e) {
    this.seek(0);
    var r = this.readBytes(e),
      l = this.slice(e.length);
    return ((this.fileSize = l.fileSize), (this._u8array = l._u8array), r);
  };
  BinFile.prototype.copyTo = function (e, r, l, c) {
    if (!(e instanceof BinFile))
      throw new Error("target is not a BinFile object");
    (typeof c != "number" && (c = r), (l = l || this.fileSize - r));
    for (var p = 0; p < l; p++) e._u8array[c + p] = this._u8array[r + p];
  };
  BinFile.prototype.save = function () {
    if (BinFile.RUNTIME_ENVIROMENT === "browser") {
      var e = new Blob([this._u8array], { type: this.fileType }),
        r = URL.createObjectURL(e),
        l = document.createElement("a");
      ((l.href = r),
        (l.download = this.fileName),
        document.body.appendChild(l),
        l.dispatchEvent(new MouseEvent("click")),
        URL.revokeObjectURL(r),
        document.body.removeChild(l));
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
    for (var r = 0; r < e; r++)
      this._lastRead[r] = this._u8array[this.offset + r];
    return ((this.offset += e), this._lastRead);
  };
  BinFile.prototype.readString = function (e) {
    this._lastRead = "";
    for (
      var r = 0;
      r < e &&
      this.offset + r < this.fileSize &&
      this._u8array[this.offset + r] > 0;
      r++
    )
      this._lastRead =
        this._lastRead + String.fromCharCode(this._u8array[this.offset + r]);
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
    for (var r = 0; r < e.length; r++) this._u8array[this.offset + r] = e[r];
    this.offset += e.length;
  };
  BinFile.prototype.writeString = function (e, r) {
    r = r || e.length;
    for (var l = 0; l < e.length && l < r; l++)
      this._u8array[this.offset + l] = e.charCodeAt(l);
    for (; l < r; l++) this._u8array[this.offset + l] = 0;
    this.offset += r;
  };
  BinFile.prototype.swapBytes = function (e, r) {
    if ((typeof e != "number" && (e = 4), this.fileSize % e !== 0))
      throw new Error("file size is not divisible by " + e);
    var l = new BinFile(this.fileSize);
    for (this.seek(0); !this.isEOF(); )
      l.writeBytes(this.readBytes(e).reverse());
    return r
      ? ((l.fileName = this.fileName), (l.fileType = this.fileType), l)
      : ((this._u8array = l._u8array), this);
  };
  BinFile.prototype.hashSHA1 = async function (e, r) {
    if (
      typeof HashCalculator != "object" ||
      typeof HashCalculator.sha1 != "function"
    )
      throw new Error("no Hash object found or missing sha1 function");
    return HashCalculator.sha1(this.slice(e, r, !0)._u8array.buffer);
  };
  BinFile.prototype.hashMD5 = function (e, r) {
    if (
      typeof HashCalculator != "object" ||
      typeof HashCalculator.md5 != "function"
    )
      throw new Error("no Hash object found or missing md5 function");
    return HashCalculator.md5(this.slice(e, r, !0)._u8array.buffer);
  };
  BinFile.prototype.hashCRC32 = function (e, r) {
    if (
      typeof HashCalculator != "object" ||
      typeof HashCalculator.crc32 != "function"
    )
      throw new Error("no Hash object found or missing crc32 function");
    return HashCalculator.crc32(this.slice(e, r, !0)._u8array.buffer);
  };
  BinFile.prototype.hashAdler32 = function (e, r) {
    if (
      typeof HashCalculator != "object" ||
      typeof HashCalculator.adler32 != "function"
    )
      throw new Error("no Hash object found or missing adler32 function");
    return HashCalculator.adler32(this.slice(e, r, !0)._u8array.buffer);
  };
  BinFile.prototype.hashCRC16 = function (e, r) {
    if (
      typeof HashCalculator != "object" ||
      typeof HashCalculator.crc16 != "function"
    )
      throw new Error("no Hash object found or missing crc16 function");
    return HashCalculator.crc16(this.slice(e, r, !0)._u8array.buffer);
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
var D = O((Q, b) => {
  var I = "BPS1";
  typeof b < "u" && b.exports && (b.exports = E);
  function E() {
    ((this.sourceSize = 0),
      (this.targetSize = 0),
      (this.metaData = ""),
      (this.actions = []),
      (this.sourceChecksum = 0),
      (this.targetChecksum = 0),
      (this.patchChecksum = 0));
  }
  E.prototype.toString = function () {
    var e = "Source size: " + this.sourceSize;
    return (
      (e +=
        `
Target size: ` + this.targetSize),
      (e +=
        `
Metadata: ` + this.metaData),
      (e +=
        `
#Actions: ` + this.actions.length),
      e
    );
  };
  E.prototype.calculateFileChecksum = function () {
    var e = this.export();
    return e.hashCRC32(0, e.fileSize - 4);
  };
  E.prototype.validateSource = function (e, r) {
    return this.sourceChecksum === e.hashCRC32(r);
  };
  E.prototype.getValidationInfo = function () {
    return { type: "CRC32", value: this.sourceChecksum };
  };
  E.prototype.apply = function (e, r) {
    let tempFile;
    if (r && !this.validateSource(e))
      throw new Error("Source ROM checksum mismatch");
    tempFile = new BinFile(this.targetSize);
    for (var l = 0, c = 0, p = 0; p < this.actions.length; p++) {
      var s = this.actions[p];
      if (s.type === 0)
        (e.copyTo(tempFile, tempFile.offset, s.length),
          tempFile.skip(s.length));
      else if (s.type === 1) tempFile.writeBytes(s.bytes);
      else if (s.type === 2) {
        l += s.relativeOffset;
        for (var h = s.length; h--; ) (tempFile.writeU8(e._u8array[l]), l++);
      } else if (s.type === 3) {
        c += s.relativeOffset;
        for (var h = s.length; h--; )
          (tempFile.writeU8(tempFile._u8array[c]), c++);
      }
    }
    if (r && this.targetChecksum !== tempFile.hashCRC32())
      throw new Error("Target ROM checksum mismatch");
    return tempFile;
  };
  E.MAGIC = I;
  E.fromFile = function (e) {
    ((e.readVLV = Y), (e.littleEndian = !0));
    var r = new E();
    (e.seek(4), (r.sourceSize = e.readVLV()), (r.targetSize = e.readVLV()));
    var l = e.readVLV();
    l && (r.metaData = e.readString(l));
    for (var c = e.fileSize - 12; e.offset < c; ) {
      var p = e.readVLV(),
        s = { type: p & 3, length: (p >> 2) + 1 };
      if (s.type === 1) s.bytes = e.readBytes(s.length);
      else if (s.type === 2 || s.type === 3) {
        var h = e.readVLV();
        s.relativeOffset = (h & 1 ? -1 : 1) * (h >> 1);
      }
      r.actions.push(s);
    }
    if (
      ((r.sourceChecksum = e.readU32()),
      (r.targetChecksum = e.readU32()),
      (r.patchChecksum = e.readU32()),
      r.patchChecksum !== r.calculateFileChecksum())
    )
      throw new Error("Patch checksum mismatch");
    return r;
  };
  function Y() {
    for (var e = 0, r = 1; ; ) {
      var l = this.readU8();
      if (((e += (l & 127) * r), l & 128)) break;
      ((r <<= 7), (e += r));
    }
    return ((this._lastRead = e), e);
  }
  function q(e) {
    for (;;) {
      var r = e & 127;
      if (((e >>= 7), e === 0)) {
        this.writeU8(128 | r);
        break;
      }
      (this.writeU8(r), e--);
    }
  }
  function g(e) {
    for (var r = 0; ; ) {
      var l = e & 127;
      if (((e >>= 7), e === 0)) {
        r++;
        break;
      }
      (r++, e--);
    }
    return r;
  }
  E.prototype.export = function (e) {
    var r = I.length;
    ((r += g(this.sourceSize)),
      (r += g(this.targetSize)),
      (r += g(this.metaData.length)),
      (r += this.metaData.length));
    for (var l = 0; l < this.actions.length; l++) {
      var c = this.actions[l];
      ((r += g(((c.length - 1) << 2) + c.type)),
        c.type === 1
          ? (r += c.length)
          : (c.type === 2 || c.type === 3) &&
            (r += g(
              (Math.abs(c.relativeOffset) << 1) +
                (c.relativeOffset < 0 ? 1 : 0),
            )));
    }
    r += 12;
    var p = new BinFile(r);
    ((p.fileName = e + ".bps"),
      (p.littleEndian = !0),
      (p.writeVLV = q),
      p.writeString(I),
      p.writeVLV(this.sourceSize),
      p.writeVLV(this.targetSize),
      p.writeVLV(this.metaData.length),
      p.writeString(this.metaData, this.metaData.length));
    for (var l = 0; l < this.actions.length; l++) {
      var c = this.actions[l];
      (p.writeVLV(((c.length - 1) << 2) + c.type),
        c.type === 1
          ? p.writeBytes(c.bytes)
          : (c.type === 2 || c.type === 3) &&
            p.writeVLV(
              (Math.abs(c.relativeOffset) << 1) +
                (c.relativeOffset < 0 ? 1 : 0),
            ));
    }
    return (
      p.writeU32(this.sourceChecksum),
      p.writeU32(this.targetChecksum),
      p.writeU32(this.patchChecksum),
      p
    );
  };
  function H() {
    ((this.offset = 0), (this.next = null));
  }
  H.prototype.delete = function () {
    this.next && delete this.next;
  };
  E.buildFromRoms = function (e, r, l) {
    var c = new E();
    return (
      (c.sourceSize = e.fileSize),
      (c.targetSize = r.fileSize),
      l ? (c.actions = $(e, r)) : (c.actions = W(e, r)),
      (c.sourceChecksum = e.hashCRC32()),
      (c.targetChecksum = r.hashCRC32()),
      (c.patchChecksum = c.calculateFileChecksum()),
      c
    );
  };
  function W(e, r) {
    var l = [],
      c = e._u8array,
      p = r._u8array,
      s = e.fileSize,
      h = r.fileSize,
      o = 1,
      _ = 0,
      d = 0,
      w = 0;
    function S() {
      if (w) {
        var i = { type: 1, length: w, bytes: [] };
        l.push(i);
        for (var n = d - w; w; ) (i.bytes.push(p[n++]), w--);
      }
    }
    for (; d < h; ) {
      for (
        var u = 0, a = 0;
        d + a < Math.min(s, h) && c[d + a] == p[d + a];
        a++
      )
        u++;
      for (var t = 0, a = 1; d + a < h && p[d] == p[d + a]; a++) t++;
      if (t >= 4) {
        (w++, d++, S());
        var f = d - 1 - _;
        (l.push({ type: 3, length: t, relativeOffset: f }),
          (d += t),
          (_ = d - 1));
      } else
        u >= 4
          ? (S(), l.push({ type: 0, length: u }), (d += u))
          : ((w += o), (d += o));
    }
    return (S(), l);
  }
  function $(e, r) {
    for (
      var l = [],
        c = e._u8array,
        p = r._u8array,
        s = e.fileSize,
        h = r.fileSize,
        o = 1,
        _ = 0,
        d = 0,
        w = 0,
        S = new Array(65536),
        u = new Array(65536),
        a = 0;
      a < 65536;
      a++
    )
      ((S[a] = null), (u[a] = null));
    for (var t = 0; t < s; t++) {
      var f = c[t + 0];
      t < s - 1 && (f |= c[t + 1] << 8);
      var i = new H();
      ((i.offset = t), (i.next = S[f]), (S[f] = i));
    }
    var n = 0;
    function y() {
      if (n) {
        var U = { type: 1, length: n, bytes: [] };
        l.push(U);
        for (var L = w - n; n; ) (U.bytes.push(p[L++]), n--);
      }
    }
    for (; w < r.fileSize; ) {
      var v = 0,
        C = 0,
        R = 1,
        f = p[w + 0];
      w < h - 1 && (f |= p[w + 1] << 8);
      {
        for (var m = 0, t = w; t < s && t < h && c[t] == p[t]; ) (m++, t++);
        m > v && ((v = m), (R = 0));
      }
      for (var i = S[f]; i; ) {
        for (
          var m = 0, A = i.offset, x = w;
          A < s && x < h && c[A++] == p[x++];
        )
          m++;
        (m > v && ((v = m), (C = i.offset), (R = 2)), (i = i.next));
      }
      {
        for (var i = u[f]; i; ) {
          for (var m = 0, A = i.offset, x = w; x < h && p[A++] == p[x++]; ) m++;
          (m > v && ((v = m), (C = i.offset), (R = 3)), (i = i.next));
        }
        ((i = new H()), (i.offset = w), (i.next = u[f]), (u[f] = i));
      }
      switch (
        (v < 4 && ((v = Math.min(o, h - w)), (R = 1)), R != 1 && y(), R)
      ) {
        case 0:
          l.push({ type: 0, length: v });
          break;
        case 1:
          n += v;
          break;
        case 2:
        case 3:
          var z;
          (R == 2 ? ((z = C - _), (_ = C + v)) : ((z = C - d), (d = C + v)),
            l.push({ type: R, length: v, relativeOffset: z }));
          break;
      }
      w += v;
    }
    return (y(), l);
  }
});
var X = O((ee, G) => {
  var B = (function () {
      let r = [
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
        l = [
          206, 237, 102, 102, 204, 13, 0, 11, 3, 115, 0, 131, 0, 12, 0, 13, 0,
          8, 17, 31, 136, 137, 0, 14, 220, 204, 110, 230, 221, 221, 217, 153,
        ],
        c = function (s) {
          let h = s.getExtension().trim();
          if (s.fileSize > 512 && s.fileSize % 4 === 0) {
            if ((h === "gb" || h === "gbc") && s.fileSize % 16384 === 0) {
              s.seek(260);
              for (var o = !0, _ = 0; _ < l.length && o; _++)
                l[_] !== s.readU8() && (o = !1);
              if (o) return "gb";
            } else if (h === "md" || h === "bin") {
              if (
                (s.seek(256), /SEGA (GENESIS|MEGA DR)/.test(s.readString(12)))
              )
                return "smd";
            } else if (h === "z64" && s.fileSize >= 4194304) return "n64";
          } else if (h === "fds" && s.fileSize % 65500 === 0) return "fds";
          return null;
        },
        p = function (s) {
          if (c(s) === "n64") {
            s.seek(60);
            let o = s.readString(3);
            s.seek(16);
            let _ = s.readBytes(8).reduce(function (d, w) {
              return w < 16 ? d + "0" + w.toString(16) : d + w.toString(16);
            }, "");
            return o + " (" + _ + ")";
          }
          return null;
        };
      return {
        parsePatchFile: function (s) {
          if (!(s instanceof T))
            throw new Error("Patch file is not an instance of BinFile");
          ((s.littleEndian = !1), s.seek(0));
          var h = s.readString(8),
            o = null;
          return (
            h.startsWith(P.MAGIC) && (o = P.fromFile(s)),
            o && (o._originalPatchFile = s),
            o
          );
        },
        validateRom: function (s, h, o) {
          if (s instanceof T) {
            if (typeof h != "object") throw new Error("Unknown patch format");
          } else throw new Error("ROM file is not an instance of BinFile");
          return (
            (typeof o != "number" || o < 0) && (o = 0),
            !(typeof h.validateSource == "function" && !h.validateSource(s, o))
          );
        },
        applyPatch: function (s, h, o) {
          if (s instanceof T) {
            if (typeof h != "object") throw new Error("Unknown patch format");
          } else throw new Error("ROM file is not an instance of BinFile");
          let _ = {
            requireValidation: !1,
            removeHeader: !1,
            addHeader: !1,
            fixChecksum: !1,
            outputSuffix: !0,
          };
          typeof o == "object" &&
            (typeof o.requireValidation < "u" &&
              (_.requireValidation = !!o.requireValidation),
            typeof o.removeHeader < "u" && (_.removeHeader = !!o.removeHeader),
            typeof o.addHeader < "u" && (_.addHeader = !!o.addHeader),
            typeof o.fixChecksum < "u" && (_.fixChecksum = !!o.fixChecksum),
            typeof o.outputSuffix < "u" && (_.outputSuffix = !!o.outputSuffix));
          var d = !1,
            w = 0;
          if (_.removeHeader) {
            if (B.isRomHeadered(s)) {
              let a = B.removeHeader(s);
              ((d = a.header), (s = a.rom));
            }
          } else if (_.addHeader) {
            let u = B.canRomGetHeader(s);
            u && ((w = u.fileSize), (s = B.addFakeHeader(s)));
          }
          if (_.requireValidation && !B.validateRom(s, h))
            throw new Error("Invalid input ROM checksum");
          var S = h.apply(s);
          if (d) {
            _.fixChecksum && B.fixRomHeaderChecksum(S);
            let u = new T(d.fileSize + S.fileSize);
            ((u.fileName = S.fileName),
              (u.fileType = S.fileType),
              d.copyTo(u, 0, d.fileSize),
              S.copyTo(u, 0, S.fileSize, d.fileSize),
              (S = u));
          } else if (w) {
            let u = S.slice(w);
            (_.fixChecksum && B.fixRomHeaderChecksum(u), (S = u));
          } else _.fixChecksum && B.fixRomHeaderChecksum(S);
          return (
            _.outputSuffix
              ? ((S.fileName = s.fileName.replace(
                  /\.([^\.]*?)$/,
                  " (patched).$1",
                )),
                S.unpatched &&
                  (S.fileName = S.fileName.replace(
                    " (patched)",
                    " (unpatched)",
                  )))
              : h._originalPatchFile
                ? (S.fileName = h._originalPatchFile.fileName.replace(
                    /\.\w+$/i,
                    /\.\w+$/i.test(s.fileName)
                      ? s.fileName.match(/\.\w+$/i)[0]
                      : "",
                  ))
                : (S.fileName = s.fileName),
            S
          );
        },
        createPatch: function (s, h, o, _) {
          if (s instanceof T) {
            if (!(h instanceof T))
              throw new Error(
                "Modified ROM file is not an instance of BinFile",
              );
          } else
            throw new Error("Original ROM file is not an instance of BinFile");
          if (typeof o == "string") o = o.trim().toLowerCase();
          else if (typeof o > "u") throw new Error("Invalid patch format");
          var d;
          if (o === "bps") d = P.buildFromRoms(s, h, s.fileSize <= 4194304);
          else throw new Error("Invalid patch format");
          return (
            !(o === "ppf" && s.fileSize > h.fileSize) &&
              (h.hashCRC32(), d.apply(s).hashCRC32()),
            d
          );
        },
        canRomGetHeader: function (s) {
          if (s.fileSize <= 6291456) {
            let h = r.find(
              (o) =>
                o.extensions.indexOf(s.getExtension()) !== -1 &&
                s.fileSize % o.romSizeMultiple === 0,
            );
            if (h) return { name: h.name, size: h.size };
          }
          return null;
        },
        isRomHeadered: function (s) {
          if (s.fileSize <= 6291968 && s.fileSize % 1024 !== 0) {
            let h = r.find(
              (o) =>
                o.extensions.indexOf(s.getExtension()) !== -1 &&
                (s.fileSize - o.size) % o.romSizeMultiple === 0,
            );
            if (h) return { name: h.name, size: h.size };
          }
          return null;
        },
        removeHeader: function (s) {
          let h = B.isRomHeadered(s);
          return h
            ? { header: s.slice(0, h.size), rom: s.slice(h.size) }
            : null;
        },
        addFakeHeader: function (s) {
          let h = B.canRomGetHeader(s);
          if (h) {
            let o = new T(h.size + s.fileSize);
            return (
              (o.fileName = s.fileName),
              (o.fileType = s.fileType),
              s.copyTo(o, 0, s.fileSize, h.size),
              c(o) === "fds" &&
                (o.seek(0), o.writeBytes([70, 68, 83, 26, s.fileSize / 65500])),
              (o.fakeHeader = !0),
              o
            );
          }
          return null;
        },
        fixRomHeaderChecksum: function (s) {
          let h = c(s);
          if (h === "gb") {
            s.seek(333);
            let d = s.readU8();
            var o = 0;
            s.seek(308);
            for (var _ = 0; _ <= 24; _++)
              o = ((o - s.readU8() - 1) >>> 0) & 255;
            if (d !== o)
              return (
                console.log("fixed Game Boy checksum"),
                s.seek(333),
                s.writeU8(o),
                !0
              );
          } else if (h === "smd") {
            s.seek(398);
            let d = s.readU16();
            var o = 0;
            for (s.seek(512); !s.isEOF(); )
              o = ((o + s.readU16()) >>> 0) & 65535;
            if (d !== o)
              return (
                console.log("fixed Megadrive/Genesis checksum"),
                s.seek(398),
                s.writeU16(o),
                !0
              );
          }
          return !1;
        },
        getRomAdditionalChecksum: function (s) {
          return p(s);
        },
        isRomTooBig: function (s) {
          return s && s.fileSize > 67108863;
        },
      };
    })(),
    T = V(),
    P = D();
  G.exports = { RomPatcher: B, BinFile: T };
});

const { BinFile, RomPatcher } = X();

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
