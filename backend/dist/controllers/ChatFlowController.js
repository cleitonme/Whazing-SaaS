'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x1b6))/0x1*(-parseInt(k(0x1c5))/0x2)+parseInt(l(0x1b9))/0x3+-parseInt(l(0x1cf))/0x4*(-parseInt(l(0x1b7))/0x5)+parseInt(l(0x1bb))/0x6+-parseInt(k(0x1c1))/0x7+parseInt(l(0x1d1))/0x8+parseInt(k(0x1be))/0x9*(-parseInt(k(0x1c2))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9fdf5));function b(c,d){const e=a();return b=function(f,g){f=f-0x1b6;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[m(0x1bd)]||function(c){const n=m;return c&&c[n(0x1b8)]?c:{'default':c};};Object['defineProperty'](exports,m(0x1b8),{'value':!![]}),exports[m(0x1cc)]=exports[o(0x1c0)]=exports[m(0x1c4)]=exports[m(0x1c3)]=void 0x0;const CreateChatFlowService_1=__importDefault(require(o(0x1d0))),ListChatFlowService_1=__importDefault(require(m(0x1ca))),AppError_1=__importDefault(require('../errors/AppError')),UpdateChatFlowService_1=__importDefault(require(o(0x1c9))),DeleteChatFlowService_1=__importDefault(require(o(0x1ba))),store=async(c,d)=>{const p=o,q=m,{tenantId:e}=c['user'];if(c[p(0x1cb)][p(0x1d2)]!=='admin')throw new AppError_1[(q(0x1bc))](p(0x1c7),0x193);const f={'flow':{...c[q(0x1d4)]},'name':c[q(0x1d4)][q(0x1c6)],'isActive':!![],'userId':+c[p(0x1cb)]['id'],'tenantId':e},g=await(0x0,CreateChatFlowService_1[q(0x1bc)])(f);return d[q(0x1c8)](0xc8)[p(0x1bf)](g);};exports[m(0x1c3)]=store;const index=async(c,d)=>{const r=m,s=m,{tenantId:e}=c[r(0x1cb)],f=await(0x0,ListChatFlowService_1[s(0x1bc)])({'tenantId':e});return d[r(0x1c8)](0xc8)[r(0x1bf)](f);};exports[o(0x1c4)]=index;const update=async(c,d)=>{const t=o,u=o;if(c[t(0x1cb)][u(0x1d2)]!==t(0x1d3))throw new AppError_1[(u(0x1bc))](u(0x1c7),0x193);const {tenantId:e}=c['user'],f={'flow':{...c[u(0x1d4)]},'name':c[t(0x1d4)]['name'],'isActive':c['body']['isReactive'],'userId':+c[u(0x1cb)]['id'],'tenantId':e},{chatFlowId:g}=c['params'],h=await(0x0,UpdateChatFlowService_1[t(0x1bc)])({'chatFlowData':f,'chatFlowId':g,'tenantId':e});return d[t(0x1c8)](0xc8)[u(0x1bf)](h);};exports[m(0x1c0)]=update;const remove=async(c,d)=>{const v=m,w=o,{chatFlowId:e}=c[v(0x1ce)],{tenantId:f}=c[v(0x1cb)];return await(0x0,DeleteChatFlowService_1[v(0x1bc)])({'id':e,'tenantId':f}),d[v(0x1c8)](0xc8)['json']({'message':w(0x1cd)});};function a(){const x=['body','20242FPTkpO','148245bxnhHb','__esModule','2118660BsyvBB','../services/ChatFlowServices/DeleteChatFlowService','3922968mSFyBe','default','__importDefault','27AOxLoL','json','update','1702813iKNBYQ','4175610aIBLCX','store','index','2Xuzmma','name','ERR_NO_PERMISSION','status','../services/ChatFlowServices/UpdateChatFlowService','../services/ChatFlowServices/ListChatFlowService','user','remove','Flow\x20deleted','params','8MiiVdH','../services/ChatFlowServices/CreateChatFlowService','5689528ZeBSPL','profile','admin'];a=function(){return x;};return a();}exports['remove']=remove;