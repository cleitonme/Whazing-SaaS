'use strict';function a(){const s=['defineProperty','./VerifyMessage360','default','logger','1440240Koxxeh','tenantId','../../utils/logger','979929acqfIH','36988DkqkWR','../TicketServices/FindOrCreateTicketService','messages','text','7154829EVpLNt','122uLuRcf','__esModule','error','371860mBTWhu','__importDefault','./VerifyContactWaba360','contacts','4825dsrSra','12zBavys','isFarewellMessage','../WhatsappService/ShowWhatsAppService','2693032DRIawh'];a=function(){return s;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0x154;let h=e[f];return h;},b(c,d);}const o=b,p=b;(function(c,d){const m=b,n=b,e=c();while(!![]){try{const f=parseInt(m(0x161))/0x1*(-parseInt(m(0x15a))/0x2)+parseInt(m(0x154))/0x3+parseInt(m(0x15d))/0x4+-parseInt(m(0x16a))/0x5+parseInt(n(0x162))/0x6*(parseInt(m(0x155))/0x7)+-parseInt(n(0x165))/0x8+parseInt(n(0x159))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4abeb));var __importDefault=this&&this[o(0x15e)]||function(c){return c&&c['__esModule']?c:{'default':c};};Object[o(0x166)](exports,p(0x15b),{'value':!![]});const logger_1=require(p(0x16c)),FindOrCreateTicketService_1=__importDefault(require(p(0x156))),ShowWhatsAppService_1=__importDefault(require(p(0x164))),VerifyContactWaba360_1=__importDefault(require(o(0x15f))),VerifyMediaMessage360_1=__importDefault(require('./VerifyMediaMessage360')),VerifyMessage360_1=__importDefault(require(o(0x167))),HandleMessage360=async(c,d)=>{return new Promise((e,f)=>{((async()=>{const q=b,r=b;let g,h;const i=0x1;try{g=await(0x0,ShowWhatsAppService_1[q(0x168)])({'id':d}),h=await(0x0,VerifyContactWaba360_1[r(0x168)])(c[q(0x160)][0x0],g[q(0x16b)]);const j={...c[q(0x157)][0x0],'fromMe':![],'message_id':c[q(0x157)][0x0]['id']},k=await(0x0,FindOrCreateTicketService_1[q(0x168)])({'contact':h,'whatsappId':g['id'],'unreadMessages':i,'tenantId':g[r(0x16b)],'msg':j,'channel':'waba'});if(k?.['isCampaignMessage']){e();return;}if(k?.[q(0x163)]){e();return;}j['type']!==q(0x158)?await(0x0,VerifyMediaMessage360_1[r(0x168)])(g,j,k,h):await(0x0,VerifyMessage360_1[q(0x168)])(j,k,h),e();}catch(l){logger_1[q(0x169)][r(0x15c)](l),f(l);}})());});};exports[p(0x168)]=HandleMessage360;