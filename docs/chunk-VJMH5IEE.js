var n,i=new Uint8Array(16);function d(){if(!n&&(n=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(i)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function l(t){return typeof t=="string"&&s.test(t)}var p=l;var o=[];for(u=0;u<256;++u)o.push((u+256).toString(16).substr(1));var u;function g(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase();if(!p(r))throw TypeError("Stringified UUID is invalid");return r}var m=g;function x(t,e,r){t=t||{};var f=t.random||(t.rng||d)();if(f[6]=f[6]&15|64,f[8]=f[8]&63|128,e){r=r||0;for(var a=0;a<16;++a)e[r+a]=f[a];return e}return m(f)}var v=x;export{v as a};
