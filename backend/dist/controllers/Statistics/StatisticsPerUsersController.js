'use strict';const n=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x95))/0x1+parseInt(k(0x94))/0x2+parseInt(k(0x99))/0x3+-parseInt(k(0x96))/0x4+-parseInt(k(0x98))/0x5+-parseInt(l(0x9a))/0x6+parseInt(l(0x9e))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9f521));var __importDefault=this&&this['__importDefault']||function(c){const m=b;return c&&c[m(0x9b)]?c:{'default':c};};function b(c,d){const e=a();return b=function(f,g){f=f-0x94;let h=e[f];return h;},b(c,d);}function a(){const r=['json','defineProperty','user','2575640ZfDrJd','635540bAclUz','4674112xIASXC','query','3831120IIthHL','2797524wftPNy','6383040Vxssco','__esModule','../../services/Statistics/StatisticsPerUsers','index','14464667JjClbf'];a=function(){return r;};return a();}Object[n(0xa0)](exports,'__esModule',{'value':!![]}),exports[n(0x9d)]=void 0x0;const StatisticsPerUsers_1=__importDefault(require(n(0x9c))),index=async(c,d)=>{const p=n,q=n,{tenantId:e}=c[p(0xa1)],{startDate:f,endDate:g}=c[p(0x97)],h=await(0x0,StatisticsPerUsers_1['default'])({'startDate':f,'endDate':g,'tenantId':e});return d[q(0x9f)](h);};exports[n(0x9d)]=index;