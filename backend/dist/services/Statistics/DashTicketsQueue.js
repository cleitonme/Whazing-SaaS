'use strict';function b(c,d){const e=a();return b=function(f,g){f=f-0x109;let h=e[f];return h;},b(c,d);}const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x10a))/0x1+-parseInt(k(0x11e))/0x2*(-parseInt(k(0x109))/0x3)+-parseInt(l(0x115))/0x4+parseInt(k(0x10e))/0x5*(parseInt(l(0x110))/0x6)+parseInt(k(0x118))/0x7*(parseInt(l(0x11b))/0x8)+-parseInt(l(0x10b))/0x9+-parseInt(k(0x112))/0xa*(parseInt(l(0x119))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc972b));var __importDefault=this&&this[m(0x11a)]||function(c){const n=m;return c&&c[n(0x10d)]?c:{'default':c};};Object['defineProperty'](exports,o(0x10d),{'value':!![]});const sequelize_1=require(m(0x113)),database_1=__importDefault(require(o(0x10c))),query=m(0x116),queryAdmin=m(0x114),DashTicketsQueue=async({startDate:c,endDate:d,tenantId:e,userId:f,userProfile:g})=>{const p=o,q=m,h=await database_1[p(0x111)][q(0x11d)](g==p(0x117)?queryAdmin:query,{'replacements':{'tenantId':e,'startDate':c,'endDate':d,'userId':f},'type':sequelize_1[q(0x10f)][q(0x11c)]});return h;};exports['default']=DashTicketsQueue;function a(){const r=['14hIpMjH','55bungyK','__importDefault','477232XqWWIY','SELECT','query','2XIiXZq','2143227suGWXU','1431461OMVyOZ','13307472wKnsZc','../../database','__esModule','671890NCDwxJ','QueryTypes','54xxBhMn','default','232770lYiRAG','sequelize','\x0a\x20\x20select\x20label,\x20qtd,\x20\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20from\x20(\x0a\x20\x20select\x0a\x20\x20coalesce(q.queue,\x20\x27Não\x20informado\x27)\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20(t.\x22queueId\x22\x20=\x20q.id)\x0a\x20\x20where\x20t.\x22tenantId\x22\x20=\x20:tenantId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.\x22queueId\x22,\x20q.queue\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a','4217824IIEkhs','\x0a\x20\x20select\x20label,\x20qtd,\x20\x20ROUND(100.0*(qtd/sum(qtd)\x20over\x20()),\x202)\x20pertentual\x20from\x20(\x0a\x20\x20select\x0a\x20\x20coalesce(q.queue,\x20\x27Não\x20informado\x27)\x20as\x20label,\x0a\x20\x20count(1)\x20as\x20qtd\x0a\x20\x20from\x20\x22Tickets\x22\x20t\x0a\x20\x20left\x20join\x20\x22Queues\x22\x20q\x20on\x20(t.\x22queueId\x22\x20=\x20q.id)\x0a\x20\x20where\x20t.\x22tenantId\x22\x20=\x20:tenantId\x20AND\x20t.\x22userId\x22\x20=\x20:userId\x0a\x20\x20and\x20date_trunc(\x27day\x27,\x20t.\x22createdAt\x22)\x20between\x20:startDate\x20and\x20:endDate\x0a\x20\x20group\x20by\x20t.\x22queueId\x22,\x20q.queue\x0a\x20\x20)\x20a\x0a\x20\x20order\x20by\x202\x20Desc\x0a','admin'];a=function(){return r;};return a();}