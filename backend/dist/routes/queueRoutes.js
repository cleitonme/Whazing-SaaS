'use strict';var I=b,L=b;(function(c,d){var G=b,H=b,e=c();while(!![]){try{var f=parseInt(G(0xaa))/0x1*(parseInt(H(0xad))/0x2)+-parseInt(G(0xa9))/0x3+-parseInt(G(0xae))/0x4*(parseInt(H(0xb0))/0x5)+parseInt(H(0xa3))/0x6+-parseInt(G(0xa0))/0x7*(parseInt(H(0xb2))/0x8)+-parseInt(H(0xb1))/0x9+parseInt(G(0xa5))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8dc9b));function a(){var Q=['get','configurable','../middleware/isAuth','writable','/queue/:queueId','defineProperty','post','__importStar','__esModule','store','Router','__setModuleDefault','create','__importDefault','update','/queue','6134639LjMYpO','hasOwnProperty','getOwnPropertyDescriptor','2380482dYHBAq','../controllers/QueueController','22835350XCPtFt','prototype','express','delete','641526DrudAr','1TeSriz','default','index','104714vnkkCt','20bLGBwz','listUserQueues','598355VcaOCl','4169718TYovFc','8WAWpIG'];a=function(){return Q;};return a();}var __createBinding=this&&this['__createBinding']||(Object[I(0x9c)]?function(c,d,e,f){var J=I,K=I;if(f===undefined)f=e;var g=Object[J(0xa2)](d,e);(!g||(K(0xb3)in g?!d[K(0xbb)]:g[J(0xb6)]||g[J(0xb4)]))&&(g={'enumerable':!![],'get':function(){return d[e];}}),Object[K(0xb8)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this[I(0x9b)]||(Object['create']?function(c,d){Object['defineProperty'](c,'default',{'enumerable':!![],'value':d});}:function(c,d){var M=L;c[M(0xab)]=d;}),__importStar=this&&this[L(0xba)]||function(c){var N=I,O=I;if(c&&c[N(0xbb)])return c;var d={};if(c!=null){for(var e in c)if(e!==O(0xab)&&Object[O(0xa6)][N(0xa1)]['call'](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this[I(0x9d)]||function(c){var P=I;return c&&c[P(0xbb)]?c:{'default':c};};Object[I(0xb8)](exports,I(0xbb),{'value':!![]});function b(c,d){var e=a();return b=function(f,g){f=f-0x9b;var h=e[f];return h;},b(c,d);}const express_1=__importDefault(require(L(0xa7))),isAuth_1=__importDefault(require(L(0xb5))),QueueController=__importStar(require(I(0xa4))),queueRoutes=express_1['default'][I(0xbd)]();queueRoutes[I(0xb9)](L(0x9f),isAuth_1['default'],QueueController[I(0xbc)]),queueRoutes[L(0xb3)](L(0x9f),isAuth_1[L(0xab)],QueueController[L(0xac)]),queueRoutes[L(0xb3)]('/queue/user',isAuth_1[L(0xab)],QueueController[I(0xaf)]),queueRoutes['put']('/queue/:queueId',isAuth_1[L(0xab)],QueueController[L(0x9e)]),queueRoutes[I(0xa8)](L(0xb7),isAuth_1['default'],QueueController['remove']),exports[I(0xab)]=queueRoutes;