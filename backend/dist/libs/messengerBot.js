'use strict';const K=b,L=b;(function(c,d){const I=b,J=b,e=c();while(!![]){try{const f=-parseInt(I(0x7b))/0x1*(parseInt(I(0x82))/0x2)+parseInt(I(0x80))/0x3+parseInt(J(0x6f))/0x4*(parseInt(I(0x7a))/0x5)+-parseInt(I(0x74))/0x6+parseInt(J(0x7c))/0x7+parseInt(J(0x77))/0x8+-parseInt(I(0x7d))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa9f07));var __importDefault=this&&this['__importDefault']||function(c){return c&&c['__esModule']?c:{'default':c};};Object[K(0x75)](exports,'__esModule',{'value':!![]}),exports['getMessengerBot']=exports[L(0x83)]=void 0x0;const messaging_api_messenger_1=require('messaging-api-messenger'),process_1=__importDefault(require(K(0x79))),AppError_1=__importDefault(require('../errors/AppError')),logger_1=require(L(0x84)),sessionsMessenger=[],initMessengerBot=async c=>{const M=K,N=K;try{const d=c[M(0x78)],e=process_1[M(0x76)][M(0x73)][N(0x81)];if(!d)throw new Error(M(0x70));const f=new messaging_api_messenger_1['MessengerClient']({'accessToken':d,'appId':e});f['id']=c['id'];const g=sessionsMessenger[M(0x72)](h=>h['id']===c['id']);if(g===-0x1){if(N(0x85)!=='IqiNy')return g&&h[M(0x7f)]?i:{'default':j};else f['id']=c['id'],sessionsMessenger['push'](f);}else f['id']=c['id'],sessionsMessenger[g]=f;return f;}catch(i){logger_1[N(0x7e)][N(0x71)]('initMessengerBot\x20error\x20|\x20Error:\x20'+i);throw new AppError_1[(N(0x76))](''+i,0x194);}};function b(c,d){const e=a();return b=function(f,g){f=f-0x6f;let h=e[f];return h;},b(c,d);}exports['initMessengerBot']=initMessengerBot;const getMessengerBot=c=>{const O=L,d=sessionsMessenger[O(0x72)](e=>e['id']==c);return sessionsMessenger[d];};exports['getMessengerBot']=getMessengerBot;function a(){const P=['defineProperty','default','7002944jfHqtK','tokenAPI','process','5mwMOxo','327dYEMnQ','5337556ZuTzYG','6686532VRVqff','logger','__esModule','1442511VCzCLb','FACEBOOK_APP_ID','4568IUZhyj','initMessengerBot','../utils/logger','IqiNy','901908BbNqYe','Not\x20token\x20configured','error','findIndex','env','949818JQWMjr'];a=function(){return P;};return a();}