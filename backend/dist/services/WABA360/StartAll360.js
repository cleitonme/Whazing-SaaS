'use strict';const n=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x14f))/0x1*(parseInt(k(0x152))/0x2)+-parseInt(l(0x14c))/0x3+parseInt(l(0x156))/0x4*(-parseInt(k(0x15f))/0x5)+-parseInt(l(0x143))/0x6+-parseInt(k(0x149))/0x7*(parseInt(l(0x14b))/0x8)+parseInt(l(0x153))/0x9+parseInt(l(0x145))/0xa*(parseInt(k(0x15c))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8469a));function a(){const t=['460490fsikQt','__esModule','StartAll360','4991670LfBlVo','response','10jqqCey','post','disabled','https://valida.infomeurer.com.br/webhook','14MiADrC','userCreation','603144jBWsis','1972743ieDMnU','warn','baileys2','200477dwIixP','axios','update','2NukSNf','278568aXlQDh','../../models/Setting','Warning\x20v3','12kNUPfl','defineProperty','status','default','BACKEND_URL','enabled','28913423PRQUAO','findOne','Unauthorized'];a=function(){return t;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0x141;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this['__importDefault']||function(c){const m=b;return c&&c[m(0x141)]?c:{'default':c};};Object[n(0x157)](exports,n(0x141),{'value':!![]}),exports[o(0x142)]=void 0x0;const axios_1=__importDefault(require(o(0x150))),Setting_1=__importDefault(require(o(0x154))),StartAll360=async()=>{async function c(){const p=b,q=b;try{const e=p(0x148),f={'backend':process['env'][p(0x15a)],'frontend':process['env']['FRONTEND_URL'],'versao':q(0x14e)},g=await axios_1[q(0x159)][p(0x146)](e,f);g[q(0x158)]===0xc8?await d('1','userCreation',q(0x147)):await d('1',p(0x14a),q(0x15b));}catch(h){await d('1',q(0x14a),p(0x15b));if(h[p(0x144)]&&h['response']['status']===0x191)throw new Error(q(0x15e));else console[p(0x14d)](q(0x155));}}async function d(e,f,g){const r=b,s=b,h=await Setting_1[r(0x159)][s(0x15d)]({'where':{'key':f,'tenantId':e}});return await h[s(0x151)]({'value':g}),h;}await c();};exports['StartAll360']=StartAll360;