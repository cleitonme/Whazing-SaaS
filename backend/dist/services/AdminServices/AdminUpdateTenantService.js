'use strict';const q=b,s=b;(function(c,d){const o=b,p=b,e=c();while(!![]){try{const f=parseInt(o(0xd7))/0x1*(parseInt(p(0xdd))/0x2)+parseInt(o(0xe7))/0x3*(parseInt(o(0xda))/0x4)+parseInt(p(0xe6))/0x5*(parseInt(p(0xdc))/0x6)+parseInt(p(0xd9))/0x7*(-parseInt(o(0xd8))/0x8)+-parseInt(o(0xe4))/0x9+parseInt(o(0xdb))/0xa+-parseInt(p(0xe2))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc4dc5));function b(c,d){const e=a();return b=function(f,g){f=f-0xd6;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[q(0xe0)]||function(c){const r=q;return c&&c[r(0xdf)]?c:{'default':c};};Object['defineProperty'](exports,s(0xdf),{'value':!![]});function a(){const v=['12770164vZbKWH','name','5725188lYQSPC','cnpj','85isAOfo','263253klWuXo','email','phone','ownerId','findByPk','recurrence','default','update','maxUsers','planId','12aApfHF','9840TuhFAz','8806bjVApa','52hlOsAH','10799590TpKVkM','386634AmxVcj','139092SnwhIv','maxConnections','__esModule','__importDefault','status'];a=function(){return v;};return a();}const Tenant_1=__importDefault(require('../../models/Tenant')),AdminUpdateTenantService=async({id:c,name:d,cnpj:e,maxUsers:f,maxConnections:g,planId:h,phone:i,email:j,dueDate:k,recurrence:l})=>{const t=s,u=s,m=await Tenant_1[t(0xed)][t(0xeb)](c);await m[u(0xee)]({'name':d,'cnpj':e,'maxUsers':f,'maxConnections':g,'planId':h,'phone':i,'email':j,'dueDate':k,'recurrence':l});const n={'id':m['id'],'name':m[u(0xe3)],'cnpj':m[t(0xe5)],'status':m[u(0xe1)],'ownerId':m[t(0xea)],'maxUsers':m[t(0xef)],'maxConnections':m[u(0xde)],'planId':m[t(0xd6)],'phone':m[u(0xe9)],'email':m[t(0xe8)],'dueDate':m['dueDate'],'recurrence':m[t(0xec)]};return n;};exports['default']=AdminUpdateTenantService;