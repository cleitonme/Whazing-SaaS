'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x175))/0x1*(parseInt(k(0x16e))/0x2)+-parseInt(k(0x165))/0x3*(-parseInt(l(0x161))/0x4)+parseInt(l(0x16d))/0x5+parseInt(k(0x16b))/0x6*(-parseInt(k(0x164))/0x7)+parseInt(l(0x167))/0x8+parseInt(k(0x168))/0x9*(-parseInt(l(0x169))/0xa)+-parseInt(k(0x17d))/0xb*(-parseInt(k(0x17a))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x18a5f));var __importDefault=this&&this[m(0x176)]||function(c){const n=m;return c&&c[n(0x171)]?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0x161;let h=e[f];return h;},b(c,d);}function a(){const t=['__esModule','getIO','json','defineProperty','230yofSEO','__importDefault','default','admin','emit','12wootTA','index','body','3032590ATwWvH','user','62056yzyiFP','update','1:settings','2653YWpRrP','21ZNKTex','../errors/AppError','602144LaxoFS','99MkgUyj','117430rLMwFB','profile','3006YnZWjf','../libs/socket','272625kuWKGR','818QKvnfG','ERR_NO_PERMISSION','status'];a=function(){return t;};return a();}Object[m(0x174)](exports,m(0x171),{'value':!![]}),exports[o(0x162)]=exports[m(0x17b)]=void 0x0;const socket_1=require(o(0x16c)),AppError_1=__importDefault(require(m(0x166))),UpdateSettingService_1=__importDefault(require('../services/SettingGeneralServices/UpdateSettingService')),ListSettingsService_1=__importDefault(require('../services/SettingGeneralServices/ListSettingsService')),index=async(c,d)=>{const p=o,q=m,e=await(0x0,ListSettingsService_1['default'])();return d[p(0x170)](0xc8)[q(0x173)](e);};exports['index']=index;const update=async(c,d)=>{const r=o,s=m;if(c[r(0x17e)][s(0x16a)]!==s(0x178))throw new AppError_1[(r(0x177))](s(0x16f),0x193);const {value:e,key:f}=c[s(0x17c)],g=await(0x0,UpdateSettingService_1[r(0x177)])({'key':f,'value':e}),h=(0x0,socket_1[s(0x172)])();return h[s(0x179)](r(0x163),{'action':'update','setting':g}),d[r(0x170)](0xc8)[s(0x173)](g);};exports[o(0x162)]=update;