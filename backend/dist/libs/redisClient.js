'use strict';const E=b,F=b;(function(c,d){const B=b,C=b,e=c();while(!![]){try{const f=parseInt(B(0x197))/0x1+-parseInt(C(0x19e))/0x2*(parseInt(C(0x199))/0x3)+parseInt(B(0x198))/0x4*(-parseInt(B(0x191))/0x5)+-parseInt(B(0x1a4))/0x6+-parseInt(B(0x1a7))/0x7*(parseInt(C(0x196))/0x8)+-parseInt(B(0x1a5))/0x9*(-parseInt(B(0x1a3))/0xa)+-parseInt(C(0x1ad))/0xb*(-parseInt(C(0x19f))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa86d3));function a(){const L=['set','IO_REDIS_PORT','10218160azVeMd','785515BSnGlV','1303728CJUsqb','1805931TbYlTd','ioredis','AVGgd','setValue','zSXYB','2oBHbLz','29748KENFPh','removeValue','IO_REDIS_SERVER','__esModule','5940fjfdmu','2896746gcVsdx','13302tEUzwU','IO_REDIS_PASSWORD','7zxzKos','object','parse','getValue','IO_REDIS_DB_SESSION','defineProperty','11946RTNNig','20DXaBod','env','del'];a=function(){return L;};return a();}var __importDefault=this&&this['__importDefault']||function(c){const D=b;return c&&c[D(0x1a2)]?c:{'default':c};};Object[E(0x1ac)](exports,E(0x1a2),{'value':!![]}),exports[F(0x1a0)]=exports[F(0x19c)]=exports['getValue']=void 0x0;const ioredis_1=__importDefault(require(E(0x19a))),redisClient=new ioredis_1['default']({'port':Number(process[E(0x192)][E(0x195)]),'host':process['env'][E(0x1a1)],'db':Number(process[F(0x192)][F(0x1ab)])||0x9,'password':process[E(0x192)][F(0x1a6)]||undefined}),getValue=c=>{return new Promise((d,e)=>{redisClient['get'](c,(f,g)=>{const G=b,H=b;if(f)return e(f);let h;if(g)try{h=JSON[G(0x1a9)](g||'');}catch(i){h=String(g);}else{if(H(0x19d)!=='axUEf')h=g;else{if(g)return h(i);return j(!![]);}}return d(h);});});};function b(c,d){const e=a();return b=function(f,g){f=f-0x191;let h=e[f];return h;},b(c,d);}exports[F(0x1aa)]=getValue;const setValue=(c,d)=>{return new Promise((e,f)=>{const I=b,J=b;let g;typeof d===I(0x1a8)?g=JSON['stringify'](d):J(0x19b)!=='otuiX'?g=String(d):e=f,redisClient[J(0x194)](c,g,i=>{if(i)return f(i);return e(g);});});};exports['setValue']=setValue;const removeValue=c=>{return new Promise((d,e)=>{const K=b;redisClient[K(0x193)](c,f=>{if(f)return e(f);return d(!![]);});});};exports[E(0x1a0)]=removeValue;