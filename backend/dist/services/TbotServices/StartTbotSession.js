'use strict';const n=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x13b))/0x1+-parseInt(k(0x132))/0x2*(parseInt(k(0x137))/0x3)+-parseInt(k(0x12a))/0x4+-parseInt(l(0x128))/0x5*(parseInt(l(0x138))/0x6)+-parseInt(l(0x12b))/0x7+-parseInt(l(0x12e))/0x8+parseInt(l(0x133))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8bf51));var __importDefault=this&&this['__importDefault']||function(c){const m=b;return c&&c[m(0x12c)]?c:{'default':c};};function a(){const t=['605991vSPNVk','6eLIVeI','tbotMessageListener','../../libs/socket','688704PpCXRZ','default','update','env','./tbotMessageListener','tenantId','./TelegramSendMessagesSystem','144665rxCPiG','../../utils/logger','4152480hFCJXw','5811932DzqDui','__esModule','StartTbotSession','6158312RPwYDs','CHECK_INTERVAL',':whatsappSession','error','2NtRlwt','24783084NGZeMu','logger','defineProperty','initTbot'];a=function(){return t;};return a();}Object[n(0x135)](exports,n(0x12c),{'value':!![]}),exports[o(0x12d)]=void 0x0;function b(c,d){const e=a();return b=function(f,g){f=f-0x127;let h=e[f];return h;},b(c,d);}const socket_1=require(n(0x13a)),tbot_1=require('../../libs/tbot'),logger_1=require(o(0x129)),tbotMessageListener_1=require(n(0x13f)),TelegramSendMessagesSystem_1=__importDefault(require(o(0x127))),checkingTelegram={},checkMessages=async(c,d)=>{const p=n,q=o;if(checkingTelegram[d])return;checkingTelegram[d]=!![];try{await(0x0,TelegramSendMessagesSystem_1[p(0x13c)])(c,d);}catch(e){logger_1[q(0x134)]['error']('ERROR:\x20checkMessages\x20Tenant:\x20'+d+'::',e);}checkingTelegram[d]=![];},StartTbotSession=async c=>{const r=n,s=n,d=(0x0,socket_1['getIO'])();await c[r(0x13d)]({'status':'OPENING'}),d['emit'](c[r(0x140)]+r(0x130),{'action':s(0x13d),'session':c});try{const e=await(0x0,tbot_1[s(0x136)])(c);(0x0,tbotMessageListener_1[r(0x139)])(e),setInterval(checkMessages,+(process[r(0x13e)][s(0x12f)]||0x1388),e,c['tenantId']);}catch(f){logger_1['logger'][s(0x131)]('StartTbotSession\x20|\x20Error:\x20'+f);}};exports['StartTbotSession']=StartTbotSession;